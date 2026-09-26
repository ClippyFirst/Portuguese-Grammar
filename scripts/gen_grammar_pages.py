#!/usr/bin/env python3
"""Generate grammar page TS modules from catalog + knowledge base."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path("/workspace")
CATALOG_TS = ROOT / "src/content/catalog.ts"
OUT = ROOT / "src/content/pages"
OUT.mkdir(parents=True, exist_ok=True)


def parse_catalog() -> list[dict]:
    text = CATALOG_TS.read_text()
    rows = []
    # ["id", "cat", "slug", "uk", "pt", "en", "summary", "aliases", "related", "depth"],
    pat = re.compile(
        r'\["([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]*)",\s*"([^"]*)",\s*"([^"]*)",\s*"([^"]*)",\s*"([^"]*)",\s*"([^"]*)",\s*"([^"]+)"\]'
    )
    for m in pat.finditer(text):
        rows.append(
            {
                "id": m.group(1),
                "category": m.group(2),
                "slug": m.group(3),
                "titleUk": m.group(4),
                "titlePt": m.group(5).replace("Super//lativo", "Superlativo"),
                "titleEn": m.group(6),
                "summary": m.group(7),
                "aliases": [a.strip() for a in m.group(8).split(",") if a.strip()],
                "related": [a.strip() for a in m.group(9).split(",") if a.strip()],
                "depth": m.group(10),
            }
        )
    return rows


def ts_string(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def emit_page(meta: dict, body: dict) -> str:
    page = {
        **meta,
        **body,
    }
    page.pop("depth", None)
    return json.dumps(page, ensure_ascii=False, indent=2)


# Knowledge: intro, examples, mistakes, formulas, tables, uses, ukrainian, brPt, regional, formation, markers, exceptions
# Keep keys matching GrammarPage.

def K(**kwargs):
    return kwargs


def ex(pt, uk, **kw):
    d = {"pt": pt, "uk": uk}
    d.update(kw)
    return d


def mist(wrong, right, why):
    return {"wrong": wrong, "right": right, "why": why}


def use(title, body, examples=None):
    d = {"title": title, "body": body}
    if examples:
        d["examples"] = examples
    return d


def formula(pattern, **kw):
    d = {"pattern": pattern}
    d.update(kw)
    return d


# --- knowledge base (unique real content per id) ---
KB: dict[str, dict] = {}

def add(id_: str, **kwargs):
    KB[id_] = kwargs


# The generator is intentionally fail-closed. A catalogue entry without reviewed
# knowledge must not receive a generic article: that creates the appearance of
# coverage while teaching content that has not been individually reviewed.


def require_knowledge(meta: dict) -> dict:
    body = KB.get(meta["id"])
    if body is None:
        raise SystemExit(
            f'Missing reviewed knowledge for {meta["id"]} '
            f'({meta["category"]}/{meta["slug"]}); refusing to generate filler.'
        )
    return body


def emit_category(cat: str, pages: list[dict]) -> str:
    blobs = ",\n".join(emit_page(p["meta"], p["body"]) for p in pages)
    return (
        'import type { GrammarPage } from "../types";\n\n'
        f"export const pages: GrammarPage[] = [\n{blobs}\n];\n"
    )


def main():
    catalog = parse_catalog()
    if len(catalog) < 50:
        raise SystemExit(f"catalog parse failed: {len(catalog)} rows")
    by_cat: dict[str, list] = {}
    for meta in catalog:
        body = require_knowledge(meta)
        by_cat.setdefault(meta["category"], []).append({"meta": meta, "body": body})
    for cat, pages in by_cat.items():
        target = OUT / f"{cat}.ts"
        # Do not overwrite a rich hand-written file
        if target.exists() and target.stat().st_size > 8000:
            print(f"skip existing {target.name} ({target.stat().st_size} bytes)")
            continue
        target.write_text(emit_category(cat, pages), encoding="utf-8")
        print(f"wrote {target.name} ({len(pages)} pages, {target.stat().st_size} bytes)")
    print("done", sum(len(v) for v in by_cat.values()), "topics")


if __name__ == "__main__":
    main()
