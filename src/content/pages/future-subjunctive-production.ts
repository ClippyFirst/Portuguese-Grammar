import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

export const pages: GrammarPage[] = [
  page({
    id: "future-subjunctive",
    slug: "futuro-subjuntivo",
    category: "moods",
    titleUk: "Futuro do conjuntivo",
    titlePt: "Futuro do conjuntivo",
    titleEn: "Future subjunctive",
    summary: "Окрема форма conjuntivo для майбутніх умовних, часових та деяких відносних конструкцій.",
    aliases: ["futuro do conjuntivo","future subjunctive","майбутній кон'юнктив"],
    related: ["subjunctive-overview","conditional-clauses","temporal-clauses","personal-infinitive"],
    status: "draft",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro: "Futuro do conjuntivo — окрема форма conjuntivo, яку не слід плутати з presente do conjuntivo. Вона особливо характерна для майбутніх умовних і деяких часових та відносних конструкцій: se vieres, quando chegares, quem quiser.",
    definition: "Futuro do conjuntivo — форма conjuntivo, що локалізує залежну ситуацію в майбутньому щодо точки відліку.",
    formulas: [
      { label: "Умова", pattern: "se + futuro do conjuntivo" },
      { label: "Час", pattern: "quando / logo que / assim que + futuro do conjuntivo" }
    ],
    examples: [
      ex("Se tiveres tempo, liga-me.", "Якщо матимеш час, зателефонуй мені."),
      ex("Quando chegares, avisa-me.", "Коли приїдеш, дай мені знати.")
    ],
    mistakes: [
      mistake("Se você venha amanhã...", "Se você vier amanhã...", "У майбутній відкритій умові потрібен futuro do conjuntivo, а не presente do conjuntivo.", "predicted-l1-transfer", "high"),
      mistake("плутати futuro do conjuntivo з futuro do indicativo", "перевіряти синтаксичний тригер", "Форма визначається конструкцією, а не лише значенням «майбутнє».", "editorial", "high")
    ],
    ukrainian: "Українська не має окремої морфологічної форми з таким самим розподілом. Українське «якщо прийдеш» приховує португальську різницю між типами conjuntivo.",
    regional: "Форма є частиною стандартної граматики основних різновидів; частотність залежить від типу конструкції та каналу.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/" },
      { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }
    ]
  })
];
