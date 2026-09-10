import type { Example, GrammarPage, Mistake } from "./types";

export function ex(
  pt: string,
  uk: string,
  extra?: Partial<Example>,
): Example {
  return { pt, uk, ...extra };
}

export function mistake(wrong: string, right: string, why: string): Mistake {
  return { wrong, right, why };
}

export function page(p: GrammarPage): GrammarPage {
  return p;
}
