import type { GrammarPage } from "./types";
import { TOPIC_BY_PATH, type TopicMeta } from "./catalog";

const loaders = import.meta.glob("./pages/*.ts") as Record<
  string,
  () => Promise<{ pages: GrammarPage[] }>
>;

const cache = new Map<string, GrammarPage[]>();
const byPath = new Map<string, GrammarPage>();
let allLoaded = false;

function loaderKeys(category: string): string[] {
  const exact = `./pages/${category}.ts`;
  const prefix = `./pages/${category}-`;
  return Object.keys(loaders).filter((k) => k === exact || k.startsWith(prefix));
}

export async function loadCategoryPages(category: string): Promise<GrammarPage[]> {
  if (cache.has(category)) return cache.get(category)!;
  const keys = loaderKeys(category);
  if (!keys.length) {
    cache.set(category, []);
    return [];
  }
  const modules = await Promise.all(keys.map((key) => loaders[key]()));
  const pages = modules.flatMap((mod) => mod.pages ?? []).filter((p) => p.category === category);
  cache.set(category, pages);
  for (const p of pages) {
    byPath.set(`${p.category}/${p.slug}`, p);
    byPath.set(p.id, p);
  }
  return pages;
}

export async function loadPage(
  category: string,
  slug: string,
): Promise<GrammarPage | null> {
  const direct = byPath.get(`${category}/${slug}`);
  if (direct) return direct;
  const pages = await loadCategoryPages(category);
  return pages.find((p) => p.slug === slug || p.id === slug) ?? null;
}

export async function loadPageById(id: string): Promise<GrammarPage | null> {
  const cached = byPath.get(id);
  if (cached) return cached;
  const meta = [...TOPIC_BY_PATH.values()].find((t: TopicMeta) => t.id === id);
  if (!meta) return null;
  return loadPage(meta.category, meta.slug);
}

export async function loadAllPages(): Promise<GrammarPage[]> {
  if (allLoaded) return [...byPath.values()].filter((p) => p.slug);
  const cats = new Set<string>();
  for (const key of Object.keys(loaders)) {
    const file = key.replace("./pages/", "").replace(".ts", "");
    const base = file.split("-")[0];
    cats.add(base);
  }
  await Promise.all([...cats].map((c) => loadCategoryPages(c)));
  allLoaded = true;
  const seen = new Set<string>();
  const out: GrammarPage[] = [];
  for (const p of byPath.values()) {
    const key = `${p.category}/${p.slug}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(p);
  }
  return out;
}
