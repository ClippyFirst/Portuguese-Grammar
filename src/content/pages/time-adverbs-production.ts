import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const G = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const CAM = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "time-adverbs", slug: "time-adverbs", category: "adverbs",
    titleUk: "Часові прислівники",
    titlePt: "Advérbios de tempo",
    titleEn: "Time adverbs",
    summary: "Як прислівники та прислівникові сполуки позначають час, момент, тривалість і часову послідовність.",
    aliases: ["часові прислівники", "time adverbs", "advérbios de tempo", "час"],
    related: ["adverbs-overview", "adverb-position", "tense-aspect", "duration-adverbs", "adverb-scope"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Часовий прислівник додає часову інформацію, але не замінює граматичний час дієслова. Hoje, ontem, amanhã, cedo, tarde, ainda, já та entretanto можуть указувати на момент, відносну часову позицію, тривалість або послідовність. Для правильного аналізу треба відокремлювати лексичний час від tense/aspect дієслова: Ontem trabalhei містить і часовий модифікатор, і pretérito perfeito.",
    definition: "Часовий прислівник — прислівниковий елемент, який локалізує подію в часі, характеризує її часову позицію або встановлює часовий зв'язок із контекстом.",
    formation: "До простих форм належать hoje, ontem, amanhã, cedo, tarde, agora, depois, antes. Інші часові значення виражаються прислівниковими сполуками: de manhã, à noite, de vez em quando. Деякі слова, як já та ainda, мають не лише календарне значення, а й аспектуально-дискурсивну функцію. Тому переклад «вже/ще» не вичерпує їхньої граматики.",
    uses: [
      { title: "Абсолютна часова локалізація", body: "Hoje, ontem та amanhã співвідносять подію з моментом мовлення.", examples: [
        ex("Hoje trabalho em casa.", "Сьогодні я працюю вдома.", { purpose: "production" }),
        ex("Ontem trabalhei em casa.", "Учора я працював/працювала вдома.", { purpose: "production" })
      ] },
      { title: "Відносна послідовність", body: "Antes, depois, então та подібні елементи встановлюють порядок подій щодо іншої події або дискурсивного моменту.", examples: [
        ex("Primeiro estudámos; depois, saímos.", "Спочатку ми повчилися; потім вийшли.", { variety: "PT", purpose: "production" }),
        ex("Depois do almoço, fui trabalhar.", "Після обіду я пішов/пішла працювати.", { purpose: "production" })
      ] },
      { title: "Já та ainda", body: "Ці елементи часто виражають часовий або аспектуальний стан відносно очікуваної точки.", examples: [
        ex("Já terminei.", "Я вже закінчив/закінчила.", { purpose: "production" }),
        ex("Ainda estou a trabalhar.", "Я ще працюю.", { variety: "PT", purpose: "production" })
      ] },
      { title: "Часовий прислівник і граматичний час", body: "Лексичний маркер часу та verb tense можуть давати спільну часову інтерпретацію, але це різні рівні системи.", examples: [
        ex("Amanhã vou viajar.", "Завтра я поїду подорожувати.", { purpose: "production" }),
        ex("Ontem viajei.", "Учора я подорожував/подорожувала.", { purpose: "contrast" })
      ] },
      { title: "Позиція", body: "Часовий модифікатор часто може стояти на початку або в кінці речення; початкова позиція може організовувати часову рамку дискурсу.", examples: [
        ex("De manhã, estudo português.", "Вранці я вчу португальську.", { purpose: "production" }),
        ex("Estudo português de manhã.", "Я вчу португальську вранці.", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Hoje trabalho em casa.", "Сьогодні я працюю вдома.", { purpose: "production" }),
      ex("Ontem trabalhei em casa.", "Учора я працював/працювала вдома.", { purpose: "production" }),
      ex("Já terminei.", "Я вже закінчив/закінчила.", { purpose: "production" }),
      ex("Ainda estou a trabalhar.", "Я ще працюю.", { variety: "PT", purpose: "production" }),
      ex("Amanhã vou viajar.", "Завтра я поїду подорожувати.", { purpose: "production" })
    ],
    mistakes: [
      mistake("вважати часове слово частиною граматичного часу", "розділяти tense/aspect і adverbial modification", "Ontem не є частиною форми trabalhei.", "editorial", "high"),
      mistake("вважати já та ainda простими синонімами «вже» і «ще» без контексту", "враховувати аспектуальне та дискурсивне значення", "Їхня інтерпретація залежить від стану події й очікування.", "predicted-l1-transfer", "high"),
      mistake("переносити українську позицію прислівника механічно", "враховувати часову рамку та інформаційну структуру", "De manhã, estudo і Estudo de manhã можуть мати різний дискурсивний акцент.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українські «сьогодні», «учора», «завтра», «вже», «ще» мають близькі функції. Особливо важливо не плутати український і португальський граматичний час із окремим часовим прислівником.",
    regional: "Базова система часових прислівників спільна для PT-BR і PT-PT. Відмінності помітні в деяких лексичних уподобаннях та конструкціях тривалості й прогресиву.",
    brPt: "У PT-BR для теперішнього прогресивного значення типовим є estar + gerúndio, тоді як PT-PT часто використовує estar a + infinitivo. Це стосується дієслівної аспектуальності, а не самого часового прислівника.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: G },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  })
];
