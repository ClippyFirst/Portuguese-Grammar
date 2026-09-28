import test from "node:test";
import assert from "node:assert/strict";
import { extractDiagnostics, summarizePhase } from "./diagnose-build.mjs";

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
