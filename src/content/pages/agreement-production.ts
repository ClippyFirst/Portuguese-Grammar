import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

const draft = (p: GrammarPage): GrammarPage => ({
  ...p,
  status: "draft",
  origin: "handwritten",
});

export const pages: GrammarPage[] = [
  draft({
    id: "agreement-edge-cases", slug: "edge-cases", category: "agreement",
    titleUk: "Складні випадки узгодження", titlePt: "Casos especiais de concordância", titleEn: "Agreement edge cases",
    summary: "Випадки, де формальне й семантичне узгодження можуть розходитися.",
    aliases: ["agreement edge cases","concordância"],
    related: ["agreement-sv","nominal-agreement","semantic-agreement"],
    depth: "medium",
    ukrainianContrast: "high",
    intro: "У складних групах підмета, при узгодженні з колективними назвами або за незвичного порядку компонентів треба визначати граматичний центр конструкції, а не погоджувати дієслово з найближчим словом.",
    definition: "Складні випадки узгодження — конструкції, де формальна структура та семантична інтерпретація можуть давати різні підказки.",
    uses: [],
    examples: [{"pt":"A mãe dos gémeos vive aqui.","uk":"Мати близнюків живе тут."},{"pt":"A Ana e o Pedro vivem aqui.","uk":"Ана і Педро живуть тут."}],
    mistakes: [mistake("узгоджувати з найближчим іменником","визначати головний компонент підмета","Узгодження визначається синтаксичною структурою, а не просто відстанню.","predicted-l1-transfer","medium")],
    ukrainian: "Українська має подібну проблему узгодження, але поверхневі підказки й порядок слів можуть відрізнятися.",
    regional: "Конкретні edge cases треба описувати окремо, а не як одну універсальну формулу.",
    brPt: "",
  }),
];
