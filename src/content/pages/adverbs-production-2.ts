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
,
  page({
    id: "adverb-scope", slug: "adverb-scope", category: "adverbs",
    titleUk: "Область дії прислівника", titlePt: "Escopo dos advérbios", titleEn: "Adverb scope",
    summary: "Як визначати, до чого саме належить прислівник.",
    aliases: ["область дії прислівника", "adverb scope", "escopo dos advérbios"],
    related: ["adverb-position", "scope-and-reference", "semantic-ambiguity", "adverbs-degree"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Одна з головних причин неоднозначності прислівників — їхня область дії. Só, também, provavelmente та майже можуть стосуватися різних компонентів висловлення. Тому недостатньо перекласти прислівник окремим словом: треба встановити, який компонент він модифікує.",
    definition: "Область дії прислівника — компонент або рівень висловлення, на який поширюється його семантичний чи прагматичний вплив.",
    uses: [
      { title: "Обмеження компонента", body: "Só може обмежувати конкретну групу, а не все речення.", examples: [ex("Só a Ana veio.", "Прийшла лише Ана.")] },
      { title: "Додавання", body: "Também може приєднувати новий факт до вже відомого контексту.", examples: [ex("A Ana também veio.", "Ана теж прийшла.")] },
      { title: "Широка область дії", body: "Епістемічний прислівник може стосуватися всієї пропозиції.", examples: [ex("Provavelmente, a Ana vem amanhã.", "Імовірно, Ана прийде завтра.")] }
    ],
    examples: [ex("Só a Ana veio.", "Прийшла лише Ана.", { purpose: "comprehension" }), ex("A Ana também veio.", "Ана теж прийшла.", { purpose: "production" })],
    mistakes: [mistake("не визначати, який компонент прислівник обмежує або коментує", "перефразувати речення українською так, щоб було видно область дії", "Український переклад може приховувати структурний зв'язок.", "predicted-l1-transfer", "high")],
    ukrainian: "Українська також має прислівники з різною областю дії. Корисно порівнювати не слова, а структуру.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }]
  }),
  page({
    id: "sentence-adverbs", slug: "sentence-adverbs", category: "adverbs",
    titleUk: "Прислівники всього речення", titlePt: "Advérbios de frase", titleEn: "Sentence adverbs",
    summary: "Прислівники, що коментують пропозицію або ставлення мовця до неї.",
    aliases: ["прислівники речення", "sentence adverbs", "advérbios de frase"],
    related: ["adverbs-overview", "epistemic-adverbs", "discourse-markers", "adverb-position"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Деякі прислівники не описують спосіб дії, а коментують усе висловлення: оцінюють ситуацію або ступінь упевненості мовця.",
    definition: "Прислівник речення — елемент, чия область дії охоплює пропозицію або ставлення мовця до неї.",
    uses: [
      { title: "Епістемічна оцінка", body: "Прислівник виражає оцінку ймовірності істинності висловлення.", examples: [ex("Provavelmente, ele já chegou.", "Імовірно, він уже прийшов.")] },
      { title: "Оцінка ситуації", body: "Оціночний прислівник характеризує ситуацію з погляду мовця.", examples: [ex("Infelizmente, não podemos ficar.", "На жаль, ми не можемо залишитися.")] }
    ],
    examples: [ex("Provavelmente, ele já chegou.", "Імовірно, він уже прийшов.", { purpose: "comprehension" }), ex("Infelizmente, não podemos ficar.", "На жаль, ми не можемо залишитися.", { purpose: "production" })],
    mistakes: [mistake("вважати всі прислівники обставинами способу", "визначати, чи прислівник описує подію, чи коментує всю пропозицію", "Українська теж має слова широкої області дії.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська має подібну відмінність між обставинними прислівниками та словами, що коментують усе повідомлення.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "epistemic-adverbs", slug: "epistemic-adverbs", category: "adverbs",
    titleUk: "Епістемічні прислівники", titlePt: "Advérbios epistémicos", titleEn: "Epistemic adverbs",
    summary: "Як прислівники виражають упевненість, припущення та оцінку істинності.",
    aliases: ["епістемічні прислівники", "epistemic adverbs", "advérbios epistémicos"],
    related: ["sentence-adverbs", "modality-overview", "adverb-scope", "modal-particles"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Епістемічні прислівники виражають ставлення мовця до істинності висловлення. Provavelmente, talvez і certamente можуть мати різний ступінь упевненості.",
    definition: "Епістемічний прислівник — прислівниковий засіб, що сигналізує оцінку ймовірності або впевненості щодо пропозиції.",
    uses: [
      { title: "Упевненість", body: "Certamente подає висловлення як дуже ймовірне або певне.", examples: [ex("Certamente, ele sabe a resposta.", "Безперечно, він знає відповідь.")] },
      { title: "Імовірність", body: "Provavelmente послаблює категоричність твердження.", examples: [ex("Provavelmente, ela chega amanhã.", "Імовірно, вона приїде завтра.")] },
      { title: "Можливість", body: "Talvez вводить припущення й може взаємодіяти з вибором способу.", examples: [ex("Talvez ele venha amanhã.", "Можливо, він прийде завтра.")] }
    ],
    examples: [ex("Certamente, ele sabe a resposta.", "Безперечно, він знає відповідь.", { purpose: "comprehension" }), ex("Talvez ele venha amanhã.", "Можливо, він прийде завтра.", { purpose: "production" })],
    mistakes: [mistake("вважати епістемічний прислівник простим синонімом модального дієслова", "визначати, яким граматичним засобом виражена модальність", "Українське «можливо» може відповідати різним португальським конструкціям.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська має функціональні відповідники «можливо», «ймовірно», «безперечно». Португальський вибір залежить від конструкції та комунікативної мети.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "connective-adverbs", slug: "connective-adverbs", category: "adverbs",
    titleUk: "Зв'язкові прислівники", titlePt: "Advérbios conectivos", titleEn: "Connective adverbs",
    summary: "Як прислівникові елементи організовують зв'язок між висловленнями.",
    aliases: ["зв'язкові прислівники", "connective adverbs", "advérbios conectivos"],
    related: ["adverbs-overview", "discourse-markers", "coordinating", "subordinating"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Деякі прислівникові елементи показують додавання, протиставлення, наслідок або висновок. Їх не слід автоматично називати сполучниками.",
    definition: "Зв'язковий прислівник — елемент, який організовує логічний чи дискурсивний зв'язок між частинами тексту.",
    uses: [
      { title: "Наслідок", body: "Portanto може сигналізувати висновок.", examples: [ex("Estava cansado; portanto, foi para casa.", "Він був утомлений; тому пішов додому.")] },
      { title: "Протиставлення", body: "Contudo може вводити контраст.", examples: [ex("Queria ir; contudo, fiquei em casa.", "Я хотів/хотіла піти, проте залишився/залишилася вдома.")] },
      { title: "Додавання", body: "Além disso додає новий факт або аргумент.", examples: [ex("É barato e, além disso, funciona bem.", "Це дешево й, крім того, добре працює.")] }
    ],
    examples: [ex("Estava cansado; portanto, foi para casa.", "Він був утомлений; тому пішов додому.", { purpose: "comprehension" }), ex("É barato e, além disso, funciona bem.", "Це дешево й, крім того, добре працює.", { purpose: "production" })],
    mistakes: [mistake("називати всі зв'язкові слова сполучниками", "перевіряти синтаксичний статус елемента", "Українські відповідники теж можуть мати різний синтаксичний статус.", "predicted-l1-transfer", "high")],
    ukrainian: "Українська також має зв'язкові прислівники та сполуки. Порівнюйте їх за функцією й синтаксичним статусом.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "adverbs-mente", slug: "adverbs-mente", category: "adverbs",
    titleUk: "Прислівники на -mente", titlePt: "Advérbios em -mente", titleEn: "Adverbs ending in -mente",
    summary: "Як утворюються та функціонують прислівники на -mente.",
    aliases: ["прислівники на -mente", "adverbs in -mente", "advérbios em -mente"],
    related: ["mente-formation", "adverb-position", "sentence-adverbs", "adjective-agreement"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Суфікс -mente утворює багато прислівників від прикметників: claro → claramente, rápido → rapidamente. Модель не варто зводити до механічного додавання суфікса без урахування форми основи, орфографії та функції.",
    definition: "Прислівник на -mente — прислівникова форма, пов'язана з прикметниковою основою та компонентом mente.",
    uses: [
      { title: "Утворення", body: "У багатьох випадках до жіночої форми прикметника додається -mente.", examples: [ex("clara → claramente", "чітка → чітко")] },
      { title: "Незмінність", body: "Утворений прислівник не узгоджується з підметом чи іменником.", examples: [ex("Eles falaram claramente.", "Вони говорили чітко.")] },
      { title: "Функція", body: "Форма на -mente може бути прислівником способу або мати ширшу область дії.", examples: [ex("Felizmente, chegámos cedo.", "На щастя, ми прийшли рано.")] }
    ],
    examples: [ex("Ela explicou claramente o problema.", "Вона чітко пояснила проблему.", { purpose: "production" }), ex("Felizmente, chegámos cedo.", "На щастя, ми прийшли рано.", { purpose: "contrast" })],
    mistakes: [mistake("вважати будь-яке слово на -mente механічним перекладом українського прислівника на -о", "визначати твірний прикметник, форму та функцію", "Українська має іншу словотвірну систему.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська широко утворює прислівники від прикметників, тому загальна аналогія корисна. Португальську модель -mente треба засвоювати окремо.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/" }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  })
]
