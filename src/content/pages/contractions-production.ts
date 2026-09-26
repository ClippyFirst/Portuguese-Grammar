import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const G1="https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/";
const G2="https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const C="https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";
const draft=(p:GrammarPage):GrammarPage=>({...p,status:"draft",origin:"handwritten"});

export const pages:GrammarPage[]=[
];