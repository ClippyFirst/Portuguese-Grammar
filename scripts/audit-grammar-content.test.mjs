import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
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

test("advanced syntax reference modules cover the next high-depth valency and question topics", () => {
  const source = fs.readFileSync("src/content/pages/advanced-syntax.ts", "utf8");
  for (const id of [
    "verb-valency-frames",
    "verb-valency-arguments",
    "verb-ditransitive-frames",
    "verb-complement-types",
    "verb-clitic-frames",
    "relative-que",
    "relative-restrictive",
    "wh-questions",
  ]) {
    assert.match(source, new RegExp('id: "' + id + '"'));
  }
});
