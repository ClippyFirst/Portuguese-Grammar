import type { GrammarPage } from "../types";
import { mistake } from "../helpers";

const draft = (p: GrammarPage): GrammarPage => ({ ...p, status: "draft", origin: "handwritten" });

export const pages: GrammarPage[] = [
  ];
