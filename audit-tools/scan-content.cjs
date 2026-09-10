const fs = require("fs");
const path = require("path");

const root = "f:/GitHub/Grammars/Portuguese Grammar";
const files = fs.readdirSync(path.join(root, "src/content/pages"));

// Count page blocks (objects with `id: ") and detect the broken "intro:" + bare-strings pattern:
// after an `intro:` key, if there is more than one string literal at the same 4-space indent
// that is NOT `key: value`, that's a broken multi-paragraph intro.
let totalBlocks = 0;
let brokenIntroBlocks = 0;
let bareStringLines = 0;
const brokenIn = [];
for (const f of files) {
  const t = fs.readFileSync(path.join(root, "src/content/pages", f), "utf8");
  const lines = t.split("\n");
  let fileBroken = [];
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/^\s+id: "/.test(l)) totalBlocks++;
    // pattern: line starts with 4 spaces then a quote -> possible bare string member
    if (/^    ["'`]/.test(l)) {
      // If the previous non-empty line at the same 4-indent is a key line or a `{`/`[`/`,` open, it might still be legit
      // array item. We only flag when the PREVIOUS non-empty line ends a value at 4-indent with `,` AND the NEXT
      // non-empty line is a 4-indent key or closing `]`/`}`.
      let prev = i - 1;
      while (prev >= 0 && !lines[prev].trim()) prev--;
      let next = i + 1;
      while (next < lines.length && !lines[next].trim()) next++;
      const prevT = (lines[prev] || "").trim();
      const nextT = (lines[next] || "").trim();
      const prevIsKey = /^[a-zA-Z]+: /.test(prevT) || /:$/.test(prevT);
      const prevIsOpen = /[\[{]\s*$/.test(prevT) || /,$/.test(prevT) === false;
      // suspicion: prev line is a string value end (ends with `,`) and this looks like a member, next is a key
      if (prevT.endsWith(",") && !prevIsKey && /^[a-zA-Z]+: /.test(nextT)) {
        bareStringLines++;
        fileBroken.push(i + 1);
      }
    }
  }
  if (fileBroken.length > 0) brokenIn.push(`${f}: ${fileBroken.slice(0, 40).join(",")}${fileBroken.length > 40 ? ` (+${fileBroken.length - 40})` : ""}`);
}

console.log("total page blocks:", totalBlocks);
console.log("broken bare-string member lines:", bareStringLines);
console.log("\nFiles with pattern:");
brokenIn.slice(0, 20).forEach((s) => console.log("  " + s));

// Also scan for stray non-Ukrainian (English) summaries
console.log("\n--- summaries that look English-only ---");
for (const f of files) {
  const t = fs.readFileSync(path.join(root, "src/content/pages", f), "utf8");
  const m = t.match(/summary:\s*"([^"]+)"/g) || [];
  for (const sm of m) {
    const v = sm.replace(/^summary:\s*"/, "").replace(/"$/, "");
    const latinWords = (v.match(/[A-Za-z]{3,}/g) || []).length;
    if (latinWords > 15) console.log(`${f}: ${v.slice(0, 110)}`);
  }
}

// Typos / leftovers
console.log("\n--- suspicious tokens in content ---");
const pats = [" occult ", " occup ", "TODO", "FIXME", "lorem ", "com o objetivo de (п)", "strange", "\\\\n\\\\n  ", "  "];
for (const f of files) {
  const t = fs.readFileSync(path.join(root, "src/content/pages", f), "utf8");
  for (const p of pats) {
    const idx = t.indexOf(p);
    if (idx >= 0) {
      const line = t.slice(0, idx).split("\n").length;
      console.log(`${f}: '${p.trim()}' near line ${line}`);
    }
  }
}