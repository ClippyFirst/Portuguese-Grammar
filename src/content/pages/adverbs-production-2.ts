import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_II = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const GULBENKIAN_III = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const CAMOES_PLE = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "time-adverbs", slug: "time-adverbs", category: "adverbs",
    titleUk: "Часові прислівники", titlePt: "Advérbios de tempo", titleEn: "Time adverbs",
    summary: "Як прислівники позначають час, момент або часову характеристику події.",
    aliases: ["часові прислівники", "time adverbs", "advérbios de tempo"],
    related: ["adverbs-overview", "adverb-position", "aspect-overview", "ja-ainda"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Часові прислівники локалізують подію в часі або уточнюють її часовий параметр. Вони можуть позначати момент, повторюваність чи відношення до іншого моменту. Тому часовий прислівник — функціональний клас, а не список простих відповідників українських слів.",
    definition: "Часовий прислівник — прислівниковий елемент, який указує на часову характеристику ситуації: коли вона відбувається, як часто або як вона співвідноситься з іншим моментом.",
    uses: [
      { title: "Конкретний момент", body: "Прислівник може вказувати на день або часову точку.", examples: [ex("Hoje trabalho em casa.", "Сьогодні я працюю вдома.")] },
      { title: "Відносний час", body: "já та ainda можуть кодувати відношення події до очікуваної або попередньої часової точки.", examples: [ex("Já chegou.", "Він уже прийшов."), ex("Ainda não chegou.", "Він ще не прийшов.")] },
      { title: "Позиція й інформаційний акцент", body: "Часовий прислівник може стояти на початку або ближче до кінця речення; вибір позиції взаємодіє з інформаційною структурою.", examples: [ex("Hoje vamos sair.", "Сьогодні ми підемо гуляти."), ex("Vamos sair hoje.", "Ми підемо гуляти сьогодні.")] }
    ],
    examples: [ex("Hoje trabalho em casa.", "Сьогодні я працюю вдома.", { purpose: "production" }), ex("Ainda não chegou.", "Він ще не прийшов.", { purpose: "comprehension" }), ex("Vamos sair hoje.", "Ми підемо гуляти сьогодні.", { purpose: "contrast" })],
    mistakes: [mistake("вивчати já, ainda, sempre та інші часові слова лише через один український переклад", "вивчати часову відношеність слова та його поведінку в ствердженні, запереченні й питаннях", "Переклад «вже/ще/завжди» не передає всіх контекстних функцій португальських форм.", "predicted-l1-transfer", "high")],
    ukrainian: "Українська має близькі часові прислівники, тому багато базових значень доступні через позитивний перенос. Водночас португальські часові елементи треба вчити разом із аспектом і контекстом.",
    regional: "Частотність та позиційні переваги конкретних часових прислівників можуть відрізнятися за регістром і різновидом; узагальнення потребують джерельної перевірки.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  })]
