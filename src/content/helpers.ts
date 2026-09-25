import type { Example, GrammarPage, Mistake } from "./types";

export function ex(
  pt: string,
  uk: string,
  extra?: Partial<Example>,
): Example {
  return { pt, uk, ...extra };
}

export function mistake(
  wrong: string,
  right: string,
  why: string,
  source?: Mistake["source"],
  confidence?: Mistake["confidence"],
): Mistake {
  return { wrong, right, why, ...(source ? { source } : {}), ...(confidence ? { confidence } : {}) };
}

export function page(p: GrammarPage): GrammarPage {
  return p;
}
