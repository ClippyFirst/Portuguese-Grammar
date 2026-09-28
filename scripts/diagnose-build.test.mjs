import test from "node:test";
import assert from "node:assert/strict";
import { buildLog, extractDiagnostics, summarizePhase } from "./diagnose-build.mjs";

test("extractDiagnostics finds Vite/Rolldown source locations and error messages", () => {
  const output = [
    "error during build:",
    "Expected `,` or `}` but found `string`",
    "src/content/generated-pages.ts:2208:3",
    "Build failed with 1 error:",
  ].join(String.fromCharCode(10));
  assert.deepEqual(extractDiagnostics(output), [{
    severity: "error",
    file: "src/content/generated-pages.ts",
    line: 2208,
    column: 3,
    message: "Expected `,` or `}` but found `string`",
  }]);
});

test("extractDiagnostics deduplicates repeated diagnostics", () => {
  const output = [
    "error TS1005: ',' expected.",
    "src/content/generated-pages.ts:2208:3",
    "error TS1005: ',' expected.",
    "src/content/generated-pages.ts:2208:3",
  ].join(String.fromCharCode(10));
  assert.equal(extractDiagnostics(output).length, 1);
});

test("summarizePhase records exit status and diagnostics", () => {
  const result = summarizePhase({
    name: "vite build",
    command: "node vite build",
    code: 1,
    signal: null,
    output: ["Expected `:` but found Identifier", "src/content/generated-pages.ts:1962:7"].join(String.fromCharCode(10)),
    durationMs: 1234,
  });
  assert.equal(result.status, "failed");
  assert.equal(result.exitCode, 1);
  assert.equal(result.diagnostics.length, 1);
});


test("summarizePhase preserves raw output for the final QA log", () => {
  const output = "command failed" + String.fromCharCode(10) + "src/example.ts:4:2";
  const result = summarizePhase({
    name: "test phase",
    command: "test command",
    code: 1,
    signal: null,
    output,
    durationMs: 10,
  });
  assert.equal(result.output, output);
});

test("buildLog never crashes when a phase has no output or diagnostics", () => {
  const log = buildLog([{
    name: "empty phase",
    command: "noop",
    status: "failed",
    exitCode: 1,
    signal: null,
    durationMs: 0,
  }], {
    repository: "test-repo",
    head: "test-head",
    node: "v24",
    npm: "11",
  });
  assert.match(log, /\(no output\)/);
  assert.match(log, /0 diagnostics/);
});
