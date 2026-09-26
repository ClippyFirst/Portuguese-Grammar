import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_III = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const DGE_DT = "https://area.dge.mec.pt/gramatica/DT_2008.pdf";

export const pages: GrammarPage[] = [
  page({
    id: "minimal-answers", slug: "minimal-answers", category: "syntax",
    titleUk: "Мінімальні відповіді так/ні", titlePt: "Respostas mínimas sim/não", titleEn: "Minimal yes/no answers",
    summary: "Короткі відповіді на полярні питання та їхній зв'язок з еліпсисом, підтвердженням і запереченням.",
    aliases: ["мінімальні відповіді", "minimal answers", "respostas mínimas", "sim não"],
    related: ["polar-questions", "question-negation", "ellipsis", "emphatic-affirmation"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "На полярне питання португальською часто можна відповісти самим «sim» або «não», але коротка відповідь не завжди нейтральна за прагматикою. Повтор дієслова чи повної предикативної частини може уточнювати, що саме підтверджується або заперечується. Тому систему відповідей треба розглядати разом із полярними питаннями, еліпсисом і контекстом.",
    definition: "Мінімальна відповідь — коротка репліка, яка самостійно виконує функцію відповіді на попереднє питання, найтиповіше за допомогою sim або não, іноді з додатковим компонентом.",
    formation: "Для питання «Queres café?» можливі «Sim.» і «Não.». За потреби мовець може повторити дієслово або додати уточнення: «Sim, quero»; «Não, não quero». Вибір форми залежить від того, наскільки очевидним є об'єкт підтвердження, від заперечення питання та від прагматичного контексту.",
    uses: [
      { title: "Проста позитивна відповідь", body: "Sim підтверджує позитивний полюс питання.", examples: [ex("— Queres café? — Sim.", "— Хочеш кави? — Так.", { purpose: "production" })] },
      { title: "Проста негативна відповідь", body: "Não заперечує позитивний полюс питання.", examples: [ex("— Vens amanhã? — Não.", "— Ти прийдеш завтра? — Ні.", { purpose: "production" })] },
      { title: "Відповідь із повтором", body: "Повтор дієслова зменшує залежність від інтонації та контексту й може чіткіше сформулювати позицію мовця.", examples: [ex("— Queres café? — Sim, quero.", "— Хочеш кави? — Так, хочу.", { purpose: "contrast" })] },
      { title: "Негативне питання", body: "У питаннях із não потрібно уважно визначати, яку пропозицію підтверджує sim або заперечує não.", examples: [ex("— Não vais? — Não.", "— Ти не йдеш? — Ні.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("— Queres café? — Sim.", "— Хочеш кави? — Так.", { purpose: "production" }),
      ex("— Vens amanhã? — Não.", "— Ти прийдеш завтра? — Ні.", { purpose: "production" }),
      ex("— Queres café? — Sim, quero.", "— Хочеш кави? — Так, хочу.", { purpose: "contrast" }),
      ex("— Não vais? — Não.", "— Ти не йдеш? — Ні.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вважати sim і não механічними перекладами українських «так» і «ні» в кожному контексті", "визначати полюс питання та зміст, який підтверджується або заперечується", "Особливо в негативних питаннях коротка відповідь потребує контексту.", "editorial", "high"),
      mistake("вважати повтор дієслова обов'язково неприродним", "використовувати sim/não самостійно або з повтором залежно від потреби уточнення", "Повна коротка репліка може бути цілком природною.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українські «так» і «ні» дуже близькі до португальських sim і não за базовою функцією, тому тут можливий сильний позитивний перенос. Основна зона уваги — негативні питання та ситуації, де інтонація або контекст визначають, що саме підтверджується.",
    regional: "Моделі мінімальних відповідей залежать від розмовного контексту, інтонації та регістру. PT-BR і PT-PT мають спільну базову систему sim/não, але прагматичні переваги конкретних реплік можуть відрізнятися.",
    brPt: "У PT-BR короткі sim/não та відповіді з повтором дієслова конкурують залежно від контексту й дискурсивної мети. Не слід робити з цього просте правило «Бразилія говорить X, Португалія Y».",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III },
      { label: "Dicionário Terminológico — Direção-Geral da Educação", url: DGE_DT }
    ]
  })
];
