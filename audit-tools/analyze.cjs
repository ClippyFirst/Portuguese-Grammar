const fs = require("fs");
const path = require("path");

const root = "f:/GitHub/Grammars/Portuguese Grammar";
const cat = fs.readFileSync(path.join(root, "src/content/catalog.ts"), "utf8");
const rows = [...cat.matchAll(/^  \["([^"]+)", "([^"]+)", "([^"]+)",/gm)].map((m) => ({
  id: m[1],
  cat: m[2],
  slug: m[3],
}));
console.log("catalog rows:", rows.length);

const byCat = {};
for (const r of rows) byCat[r.cat] = (byCat[r.cat] || 0) + 1;

const files = fs.readdirSync(path.join(root, "src/content/pages"));
const pages = [];
for (const f of files) {
  const t = fs.readFileSync(path.join(root, "src/content/pages", f), "utf8");
  const ids = [...t.matchAll(/id: "([^"]+)"/g)].map((m) => m[1]);
  const fileCat = (t.match(/category: "([^"]+)"/) || [])[1];
  pages.push(...ids.map((id) => ({ id, file: f, cat: fileCat })));
}
console.log("implemented page objects:", pages.length);
const pageIds = new Set(pages.map((p) => `cat:${p.cat}|id:${p.id}`));

// Match catalog rows to page objects: by id globally, and by category+slug
const catalogById = new Map(rows.map((r) => [r.id, r]));
const missing = [];
const matches = [];
function pageExists(r) {
  // a page object with same id
  if (pages.some((p) => p.id === r.id)) return true;
  // a page object in same category with slug === r.slug or id === r.id
  return pages.some((p) => p.cat === r.cat && (p.id === r.slug || p.id === r.id));
}
for (const r of rows) {
  if (!pageExists(r)) missing.push(r);
}
console.log("catalog topics WITHOUT any page:", missing.length);
for (const m of missing) console.log(`  - ${m.cat}/${m.slug} (${m.id})`);

// For file-based categories, list implemented vs catalog
console.log("\n--- coverage per category ---");
const table = [];
for (const [c, n] of Object.entries(byCat)) {
  const implemented = pages.filter((p) => p.cat === c).length;
  table.push({ cat: c, catalog: n, implemented });
}
table.sort((a, b) => b.catalog - a.catalog);
for (const t of table) console.log(`${t.cat.padEnd(18)} catalog=${String(t.catalog).padStart(3)}  implemented=${String(t.implemented).padStart(3)}`);

// Extra pages not in catalog
const extra = pages.filter((p) => !catalogById.has(p.id) && !(rows.some((r) => r.cat === p.cat && r.slug === p.id)));
if (extra.length) {
  console.log("\n--- pages with ids/slugs not in catalog (potential orphans) ---");
  for (const e of extra) console.log(`  - ${e.file}: ${e.id} (${e.cat})`);
}

// content features usage
const usage = { formulas: 0, formation: 0, uses: 0, tables: 0, markers: 0, exceptions: 0, mistakes: 0, ukrainian: 0, regional: 0, brPt: 0 };
let totalPages = 0;
for (const f of files) {
  const t = fs.readFileSync(path.join(root, "src/content/pages", f), "utf8");
  const blocks = t.split(/\{\s*id: /).slice(1);
  totalPages += blocks.length;
  const keys = Object.keys(usage);
  for (const b of blocks) {
    for (const k of keys) {
      const re = new RegExp(`^\\s*${k}:`, "m");
      const item = b.slice(0, b.indexOf("id: "));
      if (re.test(item)) usage[k]++;
    }
  }
}
console.log("\n--- content block feature coverage (of", totalPages, "page blocks) ---");
for (const [k, v] of Object.entries(usage)) console.log(`  ${k.padEnd(12)} ${String(v).padStart(3)} (${Math.round((v / totalPages) * 100)}%)`);