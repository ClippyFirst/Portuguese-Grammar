import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";

test("grammar content audit passes, including compact constructor contracts", () => {
  assert.doesNotThrow(() => {
    execFileSync(process.execPath, ["scripts/audit-grammar-content.mjs"], {
      cwd: process.cwd(),
      stdio: "pipe",
      encoding: "utf8",
    });
  });
});
