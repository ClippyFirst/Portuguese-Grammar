const fs = require("fs");
const path = require("path");

const root = "f:/GitHub/Grammars/Portuguese Grammar";
const files = fs.readdirSync(path.join(root, "src/content/pages"));
const KEYWORDS = new Set([
  "id","slug","category","titleUk","titlePt","titleEn","summary","aliases","related","intro",
  "formulas","formation","uses","examples","markers","exceptions","mistakes","ukrainian",
  "regional","brPt","tables","label","pattern","negative","question","note","br","ptEu",
  "headers","rows","caption","scroll","title","body","wrong","right","why","pt","uk","variety","register","annotation",
]);

for (const f of files) {
  const t = fs.readFileSync(path.join(root, "src/content/pages", f), "utf8");
  const lines = t.split("\n");
  const issues = [];
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const m = l.match(/^(\s+)(["'`])(.*)$/);
    if (!m) continue;
    const indent = m[1].length;
    if (indent < 4) continue;
    const prev = lines[i - 1] || "";
    const after = lines[i + 1] || "";
    // A bare string inside an object would sit between a preceding non-`{` line and a following `,`/`]`/`}` line
    // at the SAME indent as other object keys, and NOT be preceded by `key:` on its own line (or `,`/`[`/`{`).
    const prevTrim = prev.trim();
    const isPrevKey = /:$/.test(prevTrim);
    const isPrevOpen = /[\[{]\s*$/.test(prevTrim);
    const afterTrim = after.trim();
    // If the line is indented like an object member (4 spaces here) and previous line is a plain string end `",`
    // while next line is another key or closing, suspicious.
    if (!isPrevKey && !isPrevOpen && /^,?$/.test(afterTrim) === false) {
      // heuristic: sequence: previous non-empty content ends with `,` on a string value and we are another string at same indent
    }
    // Simpler heuristic: two consecutive string-valued object members without a key between them:
    // line i-1 is end of a JS string value (ends with `,` or `"`), and line i starts a new string at same indent,
    // and line i-1 is not a key line.
    if (/^,?$/.test(m[1])) {
      // this line is a string possibly bare
    }
    if (prevTrim.endsWith(",") && !isPrevKey && /^"|^'|^`/.test(l.trim()) && indent > 2) {
      const keyLike = /^(["'`])/.test(l.trim());
      if (keyLike) issues.push(i + 1);
    }
  }
  if (issues.length) console.log(f + ":\n  suspicious bare-string lines: " + issues.join(", "));
}
console.log("scan done");