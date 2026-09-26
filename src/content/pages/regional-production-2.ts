import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_III = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const CAMOES_PLE = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "sentence-type-variation-pt-br-pt-pt", slug: "sentence-type-variation-pt-br-pt-pt", category: "regional",
    titleUk: "Типи речень у PT-BR та PT-PT", titlePt: "Variação dos tipos de frase no PT-BR e no PT-PT", titleEn: "Sentence-type variation across PT-BR and PT-PT",
    summary: "Як різновиди португальської можуть по-різному реалізовувати питання, директиви та інші типи висловлень.",
    aliases: ["PT-BR PT-PT типи речень", "sentence-type variation", "variação dos tipos de frase"],
    related: ["pt-br-pt-pt", "questions-yesno", "imperative-affirmative", "sentence-type-vs-speech-act"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "PT-BR і PT-PT мають спільну систему основних типів речень, але окремі моделі їх реалізації можуть відрізнятися за частотністю, регістром, просодією або синтаксичними уподобаннями. Такі відмінності треба описувати конкретно: «частіше», «у певному регістрі» або «в певному різновиді», а не перетворювати на бінарне правило «BR проти PT».",
    definition: "Варіативність типів речень — систематичні або контекстуально зумовлені відмінності в реалізації однакової комунікативної функції між різновидами португальської.",
    uses: [
      { title: "Питальні моделі", body: "Питальні конструкції можуть відрізнятися за просодією та поширеністю окремих структур у PT-BR і PT-PT.", examples: [ex("Você vem amanhã?", "Ти прийдеш завтра?")] },
      { title: "Директиви", body: "Форми звернення й імперативу взаємодіють із локальними нормами вживання та соціальною дистанцією.", examples: [ex("Venha comigo.", "Ходімо зі мною / Ідіть зі мною.")] }
    ],
    examples: [ex("Você vem amanhã?", "Ти прийдеш завтра?", { purpose: "contrast" }), ex("Venha comigo.", "Ходімо зі мною / Ідіть зі мною.", { purpose: "comprehension" })],
    mistakes: [mistake("зводити всі відмінності PT-BR/PT-PT до двох взаємовиключних стандартів", "для кожної моделі перевіряти різновид, регістр, частотність і нормативний статус окремо", "Варіативність може бути градуальною та контекстуальною, а не бінарною.", "predicted-l1-transfer", "high")],
    ukrainian: "Українськомовному студентові корисно спершу засвоїти спільну функцію конструкції, а потім окремо вивчати відмінності різновидів. Це зменшує ризик сприймати одну локальну модель як універсальну.",
    regional: "Ця сторінка навмисно не робить конкретних частотних або нормативних висновків без точнішої джерельної прив'язки. Для кожної окремої моделі потрібні спеціалізовані дані про PT-BR і PT-PT.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
];
