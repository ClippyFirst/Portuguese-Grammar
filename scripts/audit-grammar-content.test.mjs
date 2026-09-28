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

test("reviewed high-depth pages remain in their canonical content modules", () => {
  const expected = new Map([
    ["src/content/pages/valency.ts", [
      "verb-valency-frames",
      "verb-valency-arguments",
      "verb-ditransitive-frames",
      "verb-complement-types",
      "verb-clitic-frames",
    ]],
    ["src/content/pages/relative.ts", [
      "relative-que",
      "relative-restrictive",
    ]],
    ["src/content/pages/questions.ts", [
      "wh-questions",
    ]],
    ["src/content/pages/coverage-closure-production-3.ts", [
      "sentence-fragments",
      "optative-wish-constructions",
      "hortative-exhortative-constructions",
    ]],
    ["src/content/pages/sentence-types-production-2.ts", [
      "exclamative-word-order",
      "imperative-softening-intensification",
      "sentence-type-vs-speech-act",
      "sentence-type-vs-intonation",
      "sentence-type-vs-punctuation",
      "illocutionary-force-and-grammatical-form",
      "grammaticalisation-of-discourse-functions",
    ]],
    ["src/content/pages/coverage-closure-production-2.ts", [
      "null-and-expletive-subjects",
      "subject-object-order",
      "subordination-and-coordination",
    ]],
    ["src/content/pages/subordinate-production-4.ts", [
      "reduced-clauses",
      "infinitival-reduced-clauses",
      "gerundial-reduced-clauses",
    ]],
  ]);

  for (const [path, ids] of expected) {
    const source = fs.readFileSync(path, "utf8");
    for (const id of ids) {
      assert.match(source, new RegExp('id: "' + id + '"'), path + ": " + id);
    }
  }
});
