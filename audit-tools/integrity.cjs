const fs = require("fs");
const path = require("path");

const root = "f:/GitHub/Grammars/Portuguese Grammar";

// --- parse catalog ---
const catText = fs.readFileSync(path.join(root, "src/content/catalog.ts"), "utf8");
const rows = [...catText.matchAll(/^  \["([^"]+)", "([^"]+)", "([^"]+)",/gm)].map((m) => ({
  id: m[1], cat: m[2], slug: m[3],
}));
const ids = new Set(rows.map((r) => r.id));
const paths = new Set(rows.map((r) => `${r.cat}/${r.slug}`));

// --- related targets integrity ---
const aliasRe = /aliases:\s*"([^"]*)"/g;
const relatedRe = /"([^"]+)"/g;
let brokenRelated = 0;
const brokenSamples = [];
for (const row of rows) {
  // find this row's related column: the 9th field in the row line
  const lineMatch = catText.match(new RegExp(`^\\s*\\["${row.id}", "[^"]+", "[^"]+", "[^"]*", "[^"]*", "[^"]*", "[^"]*", "[^"]*", "([^"]*)",`, "m"));
  if (!lineMatch) continue;
  const rel = lineMatch[1].split(",").map((s) => s.trim()).filter(Boolean);
  for (const r of rel) {
    if (!ids.has(r) && !paths.has(r)) {
      brokenRelated++;
      if (brokenSamples.length < 30) brokenSamples.push(`${row.id} -> ${r}`);
    }
  }
}
console.log("broken related targets:", brokenRelated);
brokenSamples.forEach((s) => console.log("  " + s));

// --- implemented page ids that are NOT in catalog (orphans) ---
const files = fs.readdirSync(path.join(root, "src/content/pages"));
const pageIds = [];
for (const f of files) {
  const t = fs.readFileSync(path.join(root, "src/content/pages", f), "utf8");
  const idsIn = [...t.matchAll(/^\s+id: "([^"]+)"/gm)].map((m) => m[1]);
  const cat = (t.match(/category: "([^"]+)"/) || [])[1];
  for (const id of idsIn) pageIds.push({ file: f, cat, id });
}
const orphans = pageIds.filter((p) => !ids.has(p.id));
console.log("\nimplemented page ids missing from catalog (orphans):", orphans.length);
orphans.forEach((o) => console.log(`  ${o.file}: ${o.id}`));

// implemented page slug/category path not in catalog
const orphanPaths = pageIds.filter((p) => p.cat && !paths.has(`${p.cat}/${p.id}`));
console.log("\npage objects whose (cat,id) path is not in catalog:", orphanPaths.length);
orphanPaths.forEach((o) => console.log(`  ${o.file}: ${o.cat}/${o.id}`));