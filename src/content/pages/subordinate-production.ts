import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

const draft = (p: GrammarPage): GrammarPage => ({
  ...p,
  status: "draft",
  origin: "handwritten",
});

export const pages: GrammarPage[] = [
  draft({
    id: "complement-clauses-advanced", slug: "complement-advanced", category: "subordinate",
    titleUk: "Складні доповнювальні підрядні", titlePt: "Orações completivas avançadas", titleEn: "Advanced complement clauses",
    summary: "Доповнювальні частини з різними предикатами, способами та типами залежності.",
    aliases: "advanced complement clauses,orações completivas",
    related: ["complement-clauses","indicative-vs-subjunctive","personal-infinitive"],
    depth: "medium",
    ukrainianContrast: "high",
    intro: "Доповнювальна частина може реалізувати зміст думки, волі, оцінки, сприйняття або повідомлення. Вибір indicativo/conjuntivo та infinitivo залежить від головного предиката й структури підметів.",
    definition: "Доповнювальна підрядна — залежна частина, яка заповнює валентну позицію предиката.",
    uses: [],
    examples: [{"pt":"Acho que ele vem.","uk":"Думаю, що він прийде."},{"pt":"Quero que ele venha.","uk":"Хочу, щоб він прийшов."}],
    mistakes: [mistake("вибирати спосіб лише за українським «що/щоб»","визначати семантичну операцію головного предиката","Українські сполучники не є прямою таблицею португальських способів.","predicted-l1-transfer","high")],
    ukrainian: "Українське «що/щоб» допомагає побачити залежність, але не передбачає португальський спосіб механічно.",
    regional: "Дивіться також окремі сторінки про indicativo/conjuntivo та infinitivo.",
    brPt: "",
  }),
];
