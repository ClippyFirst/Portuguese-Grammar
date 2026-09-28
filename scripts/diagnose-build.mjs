import { execFileSync, spawnSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import process from "node:process";
import { pathToFileURL } from "node:url";

const LOG_FILE = "qa-output.txt";
const MAX_BUFFER = 32 * 1024 * 1024;
const TIMEOUT_MS = 15 * 60 * 1000;

function commandFor(command, args) {
  const executable = process.platform === "win32" ? "npm.cmd" : "npm";
  if (command === "npm") return { executable, args };
  return { executable: command, args };
}

export function extractDiagnostics(output) {
  const lines = output.split(String.fromCharCode(10));
  const found = new Map();
  let pendingMessage = null;

  const add = (diagnostic) => {
    if (!diagnostic?.message) return;
    const key = [diagnostic.severity, diagnostic.file ?? "", diagnostic.line ?? "", diagnostic.column ?? "", diagnostic.message].join("|");
    if (!found.has(key)) found.set(key, diagnostic);
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (!line) continue;

    const viteMessage = line.match(/^(?:\[.*?\]\s*)?(?:error(?: during build)?[: ]+)(.+)$/i);
    if (viteMessage) pendingMessage = viteMessage[1].trim();

    const inline = line.match(/^(.+?\.(?:[cm]?[jt]sx?|vue|css|json))(?::|\()([0-9]+)(?::|,)([0-9]+)\)?(?::?\s*(?:error\s+[^:]+:\s*)?(.+))?$/i);
    const viteLocation = line.match(/^(.*?\.(?:[cm]?[jt]sx?|vue|css|json)):(\d+):(\d+)$/i);

    if (inline) {
      const message = (inline[4] || pendingMessage || lines[i - 1]?.trim() || "Build diagnostic").replace(/^[-–—]\s*/, "").trim();
      add({ severity: /\berror\b/i.test(line) || /error/i.test(message) ? "error" : "warning", file: inline[1], line: Number(inline[2]), column: Number(inline[3]), message });
      pendingMessage = null;
      continue;
    }

    if (viteLocation) {
      const message = (pendingMessage || lines[i - 1]?.trim() || "Build diagnostic").replace(/^[-–—]\s*/, "").trim();
      add({ severity: /error|expected|failed|cannot|invalid|missing/i.test(message) ? "error" : "warning", file: viteLocation[1], line: Number(viteLocation[2]), column: Number(viteLocation[3]), message });
      pendingMessage = null;
    }
  }

  return [...found.values()];
}

export function summarizePhase({ name, command, code, signal, output, durationMs }) {
  const diagnostics = extractDiagnostics(output);
  return {
    name, command, status: code === 0 ? "passed" : "failed", exitCode: code, signal, durationMs, diagnostics, output,
  };
}

function run(command, args) {
  const started = Date.now();
  const { executable, args: resolvedArgs } = commandFor(command, args);
  const result = spawnSync(executable, resolvedArgs, {
    cwd: process.cwd(), encoding: "utf8", shell: false, timeout: TIMEOUT_MS, maxBuffer: MAX_BUFFER, windowsHide: true,
  });
  const stdout = result.stdout ?? "";
  const stderr = result.stderr ?? "";
  const output = [stdout, stderr].filter(Boolean).join(String.fromCharCode(10));
  return {
    code: result.status ?? 1,
    signal: result.signal ?? null,
    output,
    durationMs: Date.now() - started,
  };
}

function npmPhase(name, args) {
  const command = `npm ${args.join(" ")}`;
  return { name, command, ...run("npm", args) };
}

function nodePhase(name, args) {
  const command = `node ${args.join(" ")}`;
  return { name, command, ...run(process.execPath, args) };
}

function shellInfo(command, args = []) {
  try { return execFileSync(command, args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim(); }
  catch { return "unavailable"; }
}

export function buildLog(phases, meta) {
  const total = phases.length;
  const passed = phases.filter((p) => p.status === "passed").length;
  const failed = phases.length - passed;
  const diagnostics = phases.flatMap((p) => p.diagnostics.map((d) => ({ ...d, phase: p.name })));
  const out = [];
  out.push("# Portuguese Grammar — comprehensive QA/build diagnostic");
  out.push(`Generated: ${new Date().toISOString()}`);
  out.push(`Repository: ${meta.repository}`);
  out.push(`HEAD: ${meta.head}`);
  out.push(`Node: ${meta.node}`);
  out.push(`npm: ${meta.npm}`);
  out.push(`Platform: ${process.platform} ${process.arch}`);
  out.push("");
  out.push(`## Summary: ${passed}/${total} phases passed; ${failed} failed; ${diagnostics.length} parsed diagnostics`);
  out.push("");
  out.push("## Phase results");
  for (const p of phases) out.push(`- ${p.status.toUpperCase()} — ${p.name} — exit=${p.exitCode} — ${p.durationMs} ms — ${p.diagnostics.length} diagnostics`);
  out.push("");
  out.push("## Parsed diagnostics");
  if (!diagnostics.length) out.push("No file/line diagnostics parsed.");
  for (const [index, d] of diagnostics.entries()) out.push(`${index + 1}. [${d.severity}] ${d.phase} — ${d.file ?? "<no file>"}:${d.line ?? "?"}:${d.column ?? "?"} — ${d.message}`);
  out.push("");
  for (const p of phases) {
    out.push(`## ${p.name}`);
    out.push(`Command: ${p.command}`);
    out.push(`Status: ${p.status}; exit=${p.exitCode}; signal=${p.signal ?? "none"}`);
    out.push("");
    out.push("```text");
    out.push((p.output ?? "").trimEnd() || "(no output)");
    out.push("```");
    out.push("");
  }
  return out.join(String.fromCharCode(10));
}

export function main() {
  const phases = [
    npmPhase("content audit", ["run", "audit:content"]),
    npmPhase("typecheck", ["run", "typecheck"]),
    npmPhase("lint", ["run", "lint"]),
    nodePhase("production Vite build", ["scripts/with-app-env.mjs", "vite", "build"]),
    npmPhase("database migration", ["run", "db:migrate"]),
  ];
  const meta = {
    repository: shellInfo("git", ["config", "--get", "remote.origin.url"]),
    head: shellInfo("git", ["rev-parse", "HEAD"]),
    node: process.version,
    npm: shellInfo(process.platform === "win32" ? "npm.cmd" : "npm", ["--version"]),
  };
  const log = buildLog(phases.map((p) => summarizePhase(p)), meta);
  writeFileSync(LOG_FILE, log + String.fromCharCode(10), "utf8");
  process.stdout.write(log + String.fromCharCode(10));
  process.exitCode = phases.some((p) => p.code !== 0) ? 1 : 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();