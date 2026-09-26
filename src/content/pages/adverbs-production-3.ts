import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const G = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const C = "https://ciberduvidas.iscte-iul.pt/consultorio/areas/gramatica/3";
const CAM = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "adverbial-locutions", slug: "adverbial-locutions", category: "adverbs",
    titleUk: "Прислівникові сполуки",
    titlePt: "Locuções adverbiais",
    titleEn: "Adverbial locutions",
    summary: "Багатослівні конструкції, які функціонують як прислівникові одиниці.",
    aliases: ["прислівникові сполуки", "adverbial locutions", "locuções adverbiais", "adverbial phrases"],
    related: ["adverbs-overview", "adverb-position", "prepositions-overview", "time-adverbs", "manner-adverbs"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Прислівникова функція не обов'язково виражається одним словом. Конструкції de manhã, à tarde, de repente, em silêncio, com cuidado та безліч інших одиниць функціонують у реченні як модифікатори часу, способу, раптовості або інших характеристик події. Їх корисно вивчати як цілісні конструкції, але водночас розуміти внутрішню граматику.",
    definition: "Прислівникова сполука — багатослівна конструкція, яка виконує в реченні функцію, типову для прислівника, часто виражаючи час, місце, спосіб, причину або іншу обставинну характеристику.",
    formation: "Типова структура містить прийменник + іменну групу: de manhã, à tarde, com cuidado, em silêncio. Частина сполук лексикалізується настільки, що їх краще засвоювати як усталені одиниці. Водночас не кожна прийменникова група є locução adverbial: важлива її функція в конкретному реченні.",
    uses: [
      { title: "Час", body: "Сполуки можуть позначати момент або частину дня.", examples: [
        ex("Trabalho de manhã.", "Я працюю вранці.", { purpose: "production" }),
        ex("À tarde, estudo português.", "Удень/після обіду я вчу португальську.", { purpose: "production" })
      ] },
      { title: "Спосіб", body: "Конструкція може описувати спосіб виконання дії.", examples: [
        ex("Ele respondeu com cuidado.", "Він відповів обережно.", { purpose: "production" }),
        ex("Ela falou em silêncio.", "Вона говорила мовчки.", { purpose: "comprehension" })
      ] },
      { title: "Раптовість та інші лексикалізовані значення", body: "Деякі одиниці мають значення, яке не варто перекладати буквально слово за словом.", examples: [
        ex("De repente, começou a chover.", "Раптом почався дощ.", { purpose: "production" }),
        ex("No fim, aceitaram a proposta.", "Зрештою вони прийняли пропозицію.", { purpose: "comprehension" })
      ] },
      { title: "Позиція в реченні", body: "Часові та інші обставинні сполуки можуть переміщуватися для організації інформації.", examples: [
        ex("De manhã, trabalho em casa.", "Вранці я працюю вдома.", { purpose: "production" }),
        ex("Trabalho em casa de manhã.", "Я працюю вдома вранці.", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Trabalho de manhã.", "Я працюю вранці.", { purpose: "production" }),
      ex("À tarde, estudo português.", "Удень/після обіду я вчу португальську.", { purpose: "production" }),
      ex("De repente, começou a chover.", "Раптом почався дощ.", { purpose: "production" }),
      ex("Ele respondeu com cuidado.", "Він відповів обережно.", { purpose: "production" })
    ],
    mistakes: [
      mistake("вважати кожну прийменникову групу словниковою locução", "визначати функцію в конкретному реченні", "em Lisboa — переважно локативна група, а de repente — лексикалізована прислівникова одиниця.", "editorial", "high"),
      mistake("перекладати всі компоненти буквально", "запам'ятовувати лексикалізовані сполуки цілком", "de repente не варто аналізувати як буквальне «з раптовості».", "predicted-l1-transfer", "high"),
      mistake("ігнорувати crase у à tarde", "вчити форму разом із прийменниковою структурою", "à може бути результатом a + a та має окрему орфографічну реалізацію.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська має аналогічні багатослівні обставинні конструкції: «вранці», «після обіду», «з обережністю», «раптом». Але португальська часто виражає їх прийменниковими сполуками, а український переклад може бути одним прислівником.",
    regional: "Базові locuções adverbiais спільні для різновидів. Окремі лексикалізовані сполуки та їх частотність можуть мати регіональні або стилістичні відмінності.",
    brPt: "У PT-BR і PT-PT основні часові та способові locuções зрозумілі однаково. Для продуктивного вживання варто вивчати готову конструкцію разом із прийменником.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: G },
      { label: "Ciberdúvidas — Gramática", url: C }
    ]
  }),

  page({
    id: "manner-adverbs", slug: "manner-adverbs", category: "adverbs",
    titleUk: "Прислівники способу",
    titlePt: "Advérbios de modo",
    titleEn: "Manner adverbs",
    summary: "Як описувати спосіб, у який відбувається дія або стан.",
    aliases: ["прислівники способу", "manner adverbs", "advérbios de modo", "modo"],
    related: ["adverbs-overview", "adverb-position", "adverbs-mente", "sentence-adverbs", "adverb-scope"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Прислівники способу відповідають на питання «як?» лише в приблизному педагогічному сенсі: граматично важливіше те, що вони модифікують спосіб або характер перебігу події. Типові форми — bem, mal, assim, depressa, devagar, cuidadosamente та прислівники на -mente. Їхня позиція може залежати від довжини прислівника, типу предиката та інформаційної структури.",
    definition: "Прислівник способу — прислівниковий модифікатор, який характеризує спосіб, манеру або характер виконання дії чи перебігу події.",
    formation: "До цієї групи належать прості лексичні прислівники (bem, mal, assim, depressa), а також продуктивні форми на -mente. Деякі одиниці мають суплетивні або нерегулярні відповідності: bom → bem, mau → mal. Не можна вивести всі форми способом додавання -mente.",
    uses: [
      { title: "Bem і mal", body: "Найуживаніші базові форми характеризують якість або спосіб виконання дії.", examples: [
        ex("Ele trabalha bem.", "Він добре працює.", { purpose: "production" }),
        ex("Ela canta mal.", "Вона погано співає.", { purpose: "production" })
      ] },
      { title: "Швидкість і темп", body: "Depressa та devagar описують швидкість виконання дії.", examples: [
        ex("Fala mais devagar, por favor.", "Говоріть повільніше, будь ласка.", { purpose: "production" }),
        ex("Ele saiu depressa.", "Він швидко пішов.", { purpose: "production" })
      ] },
      { title: "Форми на -mente", body: "Такі форми часто деталізують спосіб дії.", examples: [
        ex("Ela respondeu claramente.", "Вона чітко відповіла.", { purpose: "production" }),
        ex("Ele explicou cuidadosamente.", "Він ретельно пояснив.", { purpose: "production" })
      ] },
      { title: "Позиція", body: "Спосібові прислівники можуть стояти після дієслова або в інших позиціях, якщо структура та інформаційний фокус це дозволяють.", examples: [
        ex("Ele respondeu rapidamente.", "Він швидко відповів.", { purpose: "production" }),
        ex("Rapidamente, ele respondeu.", "Швидко він відповів.", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Ele trabalha bem.", "Він добре працює.", { purpose: "production" }),
      ex("Ela canta mal.", "Вона погано співає.", { purpose: "production" }),
      ex("Fala mais devagar, por favor.", "Говоріть повільніше, будь ласка.", { purpose: "production" }),
      ex("Ela respondeu claramente.", "Вона чітко відповіла.", { purpose: "production" })
    ],
    mistakes: [
      mistake("утворювати bem як *bommente", "вивчити bem як окремий нерегулярний прислівник", "bom і bem мають споріднене значення, але різні форми.", "predicted-l1-transfer", "high"),
      mistake("вважати всі прислівники способу формами на -mente", "вчити прості лексичні форми окремо", "bem, mal, assim, depressa не утворені за однією продуктивною схемою.", "editorial", "high"),
      mistake("вважати початкову позицію неможливою", "оцінювати позицію разом із фокусом і стилем", "Rapidamente, ele respondeu можливе як контекстно марковане розташування.", "editorial", "medium")
    ],
    ukrainian: "Українські «добре», «погано», «швидко», «повільно» функціонально близькі. Відмінність полягає в португальських лексичних формах і продуктивності -mente.",
    regional: "Категорія спільна для PT-BR та PT-PT. Позиційна та лексична частотність може варіювати за стилем і різновидом.",
    brPt: "У PT-BR та PT-PT bem/mal, depressa/devagar і форми на -mente є звичайними. Не переносіть український порядок слів без перевірки інформаційної структури.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: G },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  })
];
