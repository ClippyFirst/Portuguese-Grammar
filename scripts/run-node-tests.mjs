import { readdir } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const scriptsDir = path.join(root, "scripts");

async function collectTests(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await collectTests(full)));
    else if (entry.isFile() && entry.name.endsWith(".test.mjs")) files.push(full);
  }
  return files.sort();
}

function runNodeTests(files) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, ["--test", ...files], {
      cwd: root,
      stdio: "inherit",
      env: process.env,
    });
    child.on("error", reject);
    child.on("exit", (code, signal) => {
      if (signal) {
        resolve(128);
        return;
      }
      resolve(code ?? 1);
    });
  });
}

const files = await collectTests(scriptsDir);
if (files.length === 0) {
  console.error("No scripts/*.test.mjs files were found.");
  process.exit(1);
}

console.log(`Running ${files.length} script test file(s) with Node's test runner.`);
process.exit(await runNodeTests(files));
