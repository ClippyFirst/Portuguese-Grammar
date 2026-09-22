#!/usr/bin/env node
/**
 * Static grammar content contract.
 *
 * This audit intentionally works on source text rather than importing the app.
 * That makes it usable before Vite/TanStack starts and prevents a broken module
 * from hiding missing topics.
 */
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const CATALOG = join(ROOT, "src/content/catalog.ts");
const PAGES = join(ROOT, "src/content/pages");
const GENERATED = join(ROOT, "src/content/generated-pages.ts");

function idsFromCatalog(text) {
  return [...text.matchAll(/\["([^"]+)",\s*"([^"]+)",\s*"([^"]+)",/g)].map((m) => ({
    id: m[1], category: m[2], slug: m[3],
  }));
}

function idsFromPageSource(text) {
  return [...text.matchAll(/\bid:\s*"([^"]+)"/g)].map((m) => m[1]);
}

function assertUnique(values, label, failures) {
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  const duplicates = [...counts].filter(([, n]) => n > 1).map(([id]) => id);
  if (duplicates.length) failures.push(`${label}: duplicate IDs: ${duplicates.join(", ")}`);
}

const failures = [];
const catalogText = await readFile(CATALOG, "utf8");
const catalog = idsFromCatalog(catalogText);
const catalogIds = catalog.map((x) => x.id);
assertUnique(catalogIds, "catalog", failures);

const files = (await readdir(PAGES)).filter((name) => name.endsWith(".ts")).sort();
const dedicatedIds = [];
for (const file of files) {
  const text = await readFile(join(PAGES, file), "utf8");
  dedicatedIds.push(...idsFromPageSource(text));
}
assertUnique(dedicatedIds, "dedicated pages", failures);

const generatedText = await readFile(GENERATED, "utf8");
const hasGeneratedLayer = generatedText.includes("export const GENERATED_PAGES");
const generatedIds = hasGeneratedLayer ? catalogIds : [];
const available = new Set([...dedicatedIds, ...generatedIds]);

const missing = catalog.filter((topic) => !available.has(topic.id));
if (missing.length) {
  failures.push(`catalog coverage: ${missing.length} topics have no page provider: ${missing.map((x) => x.id).join(", ")}`);
}

const known = new Set(catalogIds);
const related = [...catalogText.matchAll(/\[\s*"[^"]+"(?:,[^\n]*){8},\s*"([^"]*)"/g)]
  .flatMap((m) => m[1].split(",").map((x) => x.trim()).filter(Boolean));
const brokenRelated = [...new Set(related.filter((id) => !known.has(id)))];
if (brokenRelated.length) failures.push(`catalog related IDs missing from catalog: ${brokenRelated.join(", ")}`);

function extractArray(name) {
  const match = catalogText.match(new RegExp(`export const ${name} = \\[([\\s\\S]*?)\\] as const;`));
  return match ? [...match[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]) : [];
}

for (const name of ["ESSENTIAL_IDS", "COMPARISON_IDS"]) {
  const ids = extractArray(name);
  const broken = ids.filter((id) => !known.has(id));
  if (broken.length) failures.push(`${name}: unknown IDs: ${broken.join(", ")}`);
  const unavailable = ids.filter((id) => !available.has(id));
  if (unavailable.length) failures.push(`${name}: unavailable pages: ${unavailable.join(", ")}`);
}

const categoryCounts = new Map();
for (const t of catalog) categoryCounts.set(t.category, (categoryCounts.get(t.category) ?? 0) + 1);

console.log("Portuguese Grammar content audit");
console.log("================================");
console.log(`Catalog topics:       ${catalog.length}`);
console.log(`Dedicated page IDs:   ${dedicatedIds.length}`);
console.log(`Generated fallback:   ${hasGeneratedLayer ? "enabled" : "missing"}`);
console.log(`Effective coverage:   ${catalog.filter((x) => available.has(x.id)).length}/${catalog.length}`);
console.log(`Categories:           ${categoryCounts.size}`);
console.log("");
console.log("Category coverage:");
for (const [category, count] of [...categoryCounts].sort()) {
  const ids = catalog.filter((x) => x.category === category).map((x) => x.id);
  const covered = ids.filter((id) => available.has(id)).length;
  console.log(`  ${category.padEnd(18)} ${String(covered).padStart(3)}/${String(count).padEnd(3)}`);
}

if (failures.length) {
  console.error("");
  console.error("FAIL");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log("");
  console.log("PASS — catalog, page providers, and navigation ID contracts are consistent.");
}
