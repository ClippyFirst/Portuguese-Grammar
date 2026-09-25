import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_II = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const GULBENKIAN_III = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const CAMOES_PLE = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "adverbial-locutions", slug: "adverbial-locutions", category: "adverbs",
    titleUk: "Прислівникові сполуки", titlePt: "Locuções adverbiais", titleEn: "Adverbial locutions",
    summary: "Багатослівні одиниці, які виконують прислівникову функцію.",
    aliases: ["прислівникові сполуки", "adverbial locutions", "locuções adverbiais"],
    related: ["adverbs-overview", "adverb-position", "prepositional-locutions"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Прислівникове значення в португальській може виражатися не одним прислівником, а стійкою або напівстійкою сполукою з кількох слів. Такі одиниці треба вчити як функціональні цілісності: їхній склад, значення, керування та позиція не завжди виводяться з простого перекладу кожного компонента.",
    definition: "Прислівникова сполука — багатослівна одиниця, яка в реченні виконує прислівникову функцію, наприклад позначає час, місце, спосіб, причину чи іншу характеристику ситуації.",
    uses: [
      { title: "Час", body: "Сполука може позначати часову характеристику події.", examples: [ex("De manhã, trabalho em casa.", "Вранці я працюю вдома.")] },
      { title: "Спосіб або супровід", body: "Багатослівний вираз може функціонувати як єдиний прислівниковий модифікатор.", examples: [ex("Ele respondeu de imediato.", "Він одразу відповів.")] },
      { title: "Місце", body: "Прийменникові сполуки можуть виконувати прислівникову функцію місця.", examples: [ex("Eles ficaram em casa.", "Вони залишилися вдома.")] }
    ],
    examples: [ex("De manhã, trabalho em casa.", "Вранці я працюю вдома.", { purpose: "production" }), ex("Ele respondeu de imediato.", "Він одразу відповів.", { purpose: "comprehension" }), ex("Eles ficaram em casa.", "Вони залишилися вдома.", { purpose: "contrast" })],
    mistakes: [mistake("перекладати кожен компонент сполуки окремо й отримувати неприродний вислів", "розпізнавати сполуку як функціональну одиницю та перевіряти її значення в контексті", "В українській теж є прислівникові сполуки, але межі та лексичний склад не збігаються з португальськими.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська має аналогічні багатослівні прислівникові вирази, тому сама ідея не нова. Водночас португальські сполуки треба засвоювати за їхньою формою та функцією, а не через дослівне калькування.",
    regional: "Конкретна лексема може мати різну частотність залежно від регістру, каналу й різновиду португальської. Частотні твердження потребують корпусної перевірки.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "manner-adverbs", slug: "manner-adverbs", category: "adverbs",
    titleUk: "Прислівники способу", titlePt: "Advérbios de modo", titleEn: "Manner adverbs",
    summary: "Як описати спосіб виконання дії або характер перебігу події.",
    aliases: ["прислівники способу", "manner adverbs", "advérbios de modo"],
    related: ["adverbs-overview", "adverb-position", "mente-formation", "sentence-adverbs"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Прислівники способу характеризують те, як відбувається дія або ситуація. Вони відрізняються від епістемічних та оціночних прислівників: claramente у Ela explicou claramente описує спосіб пояснення, тоді як provavelmente у Provavelmente, ela vem оцінює ймовірність усієї пропозиції.",
    definition: "Прислівник способу — прислівниковий модифікатор, який характеризує спосіб, манеру або характер виконання дії чи перебігу ситуації.",
    uses: [
      { title: "Характеристика дії", body: "Прислівник безпосередньо модифікує подію, виражену дієсловом.", examples: [ex("Ela respondeu calmamente.", "Вона спокійно відповіла.")] },
      { title: "Форма на -mente", body: "Багато прислівників способу утворено від прикметників за моделлю -mente.", examples: [ex("Ele falou claramente.", "Він говорив чітко.")] },
      { title: "Відмінність від прислівника речення", body: "Треба встановити, чи описується сама дія, чи оцінюється все висловлення.", examples: [ex("Provavelmente, ele falou.", "Імовірно, він говорив.")] }
    ],
    examples: [ex("Ela respondeu calmamente.", "Вона спокійно відповіла.", { purpose: "production" }), ex("Ele falou claramente.", "Він говорив чітко.", { purpose: "comprehension" }), ex("Provavelmente, ele falou.", "Імовірно, він говорив.", { purpose: "contrast" })],
    mistakes: [mistake("називати будь-який прислівник обставиною способу", "перевіряти, чи прислівник характеризує дію, чи має ширшу область дії", "Українське питання «як?» корисне як перший орієнтир, але не визначає синтаксичний статус усіх португальських прислівників.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська має близьку функціональну категорію прислівників способу, тому тут є позитивна аналогія. Різницю треба шукати в конкретній формі, позиції та області дії.",
    regional: "Позиційні переваги можуть залежати від різновиду й регістру; не слід перетворювати типову позицію на абсолютне правило.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
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
  }),
  page({
    id: "frequency-adverbs", slug: "frequency-adverbs", category: "adverbs",
    titleUk: "Прислівники частотності", titlePt: "Advérbios de frequência", titleEn: "Frequency adverbs",
    summary: "Як позначати регулярність і повторюваність подій.",
    aliases: ["прислівники частотності", "frequency adverbs", "advérbios de frequência"],
    related: ["adverbs-overview", "adverb-position", "adverb-scope", "ja-ainda"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Прислівники частотності описують, як регулярно або як часто відбувається ситуація: sempre, frequentemente, às vezes, raramente, nunca. Їхня позиція пов'язана з областю дії, полярністю та інформаційною структурою, тому для них особливо небезпечно вчити одне механічне місце в реченні.",
    definition: "Прислівник частотності — прислівниковий елемент, який характеризує регулярність, повторюваність або відносну частоту ситуації.",
    uses: [
      { title: "Висока частотність", body: "Sempre подає ситуацію як регулярну або таку, що відбувається щоразу в релевантних випадках.", examples: [ex("Ela sempre chega cedo.", "Вона завжди приходить рано.")] },
      { title: "Нерегулярна частотність", body: "Вирази на кшталт às vezes позначають непостійну повторюваність.", examples: [ex("Às vezes trabalho à noite.", "Іноді я працюю вночі.")] },
      { title: "Негативна частотність", body: "Nunca виражає відсутність випадків у відповідній часовій області та взаємодіє з полярністю.", examples: [ex("Nunca trabalho aos domingos.", "Я ніколи не працюю по неділях.")] }
    ],
    examples: [ex("Ela sempre chega cedo.", "Вона завжди приходить рано.", { purpose: "production" }), ex("Às vezes trabalho à noite.", "Іноді я працюю вночі.", { purpose: "comprehension" }), ex("Nunca trabalho aos domingos.", "Я ніколи не працюю по неділях.", { purpose: "contrast" })],
    mistakes: [mistake("автоматично додавати não після nunca", "розглядати nunca як негативний елемент і перевіряти полярність усієї конструкції", "Українське «ніколи не» формально підказує окреме «не», але португальське nunca вже може реалізувати негативну полярність.", "predicted-l1-transfer", "high")],
    ukrainian: "Українське «завжди», «іноді», «рідко», «ніколи» дає сильну позитивну аналогію на рівні значення. Особливу увагу треба приділити nunca та взаємодії з португальським запереченням.",
    regional: "Конкретна частотність форм і їхня позиція можуть залежати від регістру та різновиду. Такі відмінності слід підтверджувати корпусними або описовими джерелами.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  })
];