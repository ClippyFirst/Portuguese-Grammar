import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const sources = [
  { label: "Fundação Calouste Gulbenkian — Gramática do Português", url: "https://gulbenkian.pt/publications/gramatica-do-portugues/" },
  { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }
];

export const pages: GrammarPage[] = [
  page({
    id: "negative-adverbs", slug: "negative-adverbs", category: "adverbs",
    titleUk: "Заперечні прислівники", titlePt: "Advérbios de negação", titleEn: "Negative adverbs",
    summary: "não, nunca, jamais та інші прислівникові засоби заперечення і їхня взаємодія з полярністю речення.",
    aliases: ["заперечні прислівники","negative adverbs","advérbios de negação"],
    related: ["negation","focus-adverbs","restriction-exclusion-adverbs","adverb-scope"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Заперечення в португальській не зводиться до механічного додавання não. Não є центральним засобом sentential negation, тоді як nunca та jamais додають часово-аспектний або стилістичний компонент і можуть посилювати заперечну інтерпретацію. Аналіз треба починати з того, що саме заперечується: все речення, подія, часова характеристика або окремий компонент.",
    definition: "Заперечний прислівник або прислівниковий засіб змінює полярність висловлення чи додає заперечний/негативний компонент до його інтерпретації.",
    formulas: [
      { label: "Загальне заперечення", pattern: "não + V", note: "Não передає основне sentential negation." },
      { label: "Негативний часовий параметр", pattern: "nunca + V", note: "nunca означає «ніколи»." },
      { label: "Підсилене «ніколи»", pattern: "jamais + V", note: "jamais має виразніший стилістичний профіль." }
    ],
    formation: "Центральна форма — não. До пов'язаних негативних прислівників належать nunca, jamais та контекстні конструкції з mais/muito та запереченням. Їхні значення не є взаємозамінними: nunca відповідає часовій квантифікації, а não може заперечувати предикацію.",
    uses: [
      { title: "Sentential negation", body: "não заперечує предикацію.", examples: [ex("Não conheço essa cidade.", "Я не знаю цього міста.", { purpose: "production" })] },
      { title: "Ніколи", body: "nunca локалізує заперечення в часовому вимірі.", examples: [ex("Nunca visitei Lisboa.", "Я ніколи не відвідував Лісабон.", { purpose: "production" })] },
      { title: "Стилістично виразніше jamais", body: "jamais може виконувати значення «ніколи», часто з виразнішим або книжнішим профілем.", examples: [ex("Jamais faria isso.", "Я ніколи б цього не зробив.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Não conheço essa cidade.", "Я не знаю цього міста.", { purpose: "production" }),
      ex("Nunca visitei Lisboa.", "Я ніколи не відвідував Лісабон.", { purpose: "production" }),
      ex("Jamais faria isso.", "Я ніколи б цього не зробив.", { purpose: "contrast" }),
      ex("Ele não trabalha aqui.", "Він тут не працює.", { purpose: "production" })
    ],
    nonUses: ["Не замінюйте não на nunca без зміни значення.", "Не трактуйте nunca лише як стилістичний синонім não.", "Не визначайте полярність за одним словом без урахування всієї конструкції."],
    markers: ["não","nunca","jamais"],
    mistakes: [
      mistake("Eu nunca sei = «я просто не знаю» без часової семантики", "розрізняти não sei та nunca sei", "nunca додає квантифікацію часу."),
      mistake("Jamais і não завжди взаємозамінні", "перевіряти, чи потрібне загальне заперечення чи «ніколи»", "Різниться область значення.")
    ],
    ukrainian: "Українське «не» є центральним засобом заперечення, тоді як «ніколи» має окрему часову семантику. Португальське não:nunca приблизно відтворює цю різницю, але позиція й взаємодія з іншими негативними елементами мають власні правила.",
    comparisonUk: "Порівнюйте não з українським «не», а nunca/jamais — передусім із «ніколи». Не перекладайте всі негативні прислівники одним українським словом.",
    regional: "não, nunca та jamais є загальнопортугальськими. Частотність і стилістичний профіль jamais можуть залежати від жанру та різновиду; це не слід перетворювати на жорстку PT-BR/PT-PT межу.",
    sources
  }),
  page({
    id: "adverb-scope", slug: "adverb-scope", category: "adverbs",
    titleUk: "Область дії прислівника", titlePt: "Escopo do advérbio", titleEn: "Adverb scope",
    summary: "Як область дії прислівника визначає, який компонент речення він модифікує.",
    aliases: ["область дії прислівника","adverb scope","escopo do advérbio"],
    related: ["adverb-position","focus-adverbs","restriction-exclusion-adverbs","adverbial-ambiguity"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Один із найважливіших параметрів прислівника — scope, тобто область, над якою він семантично діє. Один і той самий елемент може стосуватися дієслова, окремого аргумента, ступеня ознаки або всього висловлення. Тому близькість до слова не завжди дорівнює семантичній області дії.",
    definition: "Область дії прислівника — компонент або структурний рівень, інтерпретацію якого прислівник модифікує.",
    formulas: [
      { label: "VP scope", pattern: "V + ADV", note: "Модифікація події або способу дії." },
      { label: "Degree scope", pattern: "ADV + Adj", note: "Модифікація ступеня ознаки." },
      { label: "Sentence scope", pattern: "ADV, oração", note: "Коментар до всього висловлення." }
    ],
    formation: "Scope визначається поєднанням синтаксичної позиції, семантики, просодії та контексту. Особливо чутливі до scope фокусувальні, заперечні та оцінні прислівники.",
    uses: [
      { title: "Область дії над дією", body: "Прислівник може модифікувати спосіб або характер події.", examples: [ex("Ele respondeu rapidamente.", "Він швидко відповів.", { purpose: "production" })] },
      { title: "Область дії над ознакою", body: "Прислівник ступеня модифікує прикметник.", examples: [ex("O texto é muito claro.", "Текст дуже зрозумілий.", { purpose: "production" })] },
      { title: "Область дії над висловленням", body: "Sentence adverb може коментувати пропозиційний зміст.", examples: [ex("Felizmente, tudo correu bem.", "На щастя, усе пройшло добре.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Ele respondeu rapidamente.", "Він швидко відповів.", { purpose: "production" }),
      ex("O texto é muito claro.", "Текст дуже зрозумілий.", { purpose: "production" }),
      ex("Felizmente, tudo correu bem.", "На щастя, усе пройшло добре.", { purpose: "contrast" }),
      ex("Só a Ana respondeu.", "Лише Ана відповіла.", { purpose: "contrast" })
    ],
    nonUses: ["Не визначайте scope лише за лінійною близькістю.", "Не плутайте scope з чисто синтаксичною залежністю.", "Не вважайте перестановку прислівника суто стилістичною, якщо змінюється інтерпретація."],
    markers: ["só","não","muito","felizmente","rapidamente"],
    mistakes: [
      mistake("só автоматично модифікує наступне слово", "перевіряти фокус і можливі альтернативи", "Семантичний scope може бути ширшим або вужчим за лінійну позицію."),
      mistake("Felizmente — звичайна обставина способу", "визначати, чи коментар стосується всієї пропозиції", "Позиція та значення показують sentential scope.")
    ],
    ukrainian: "Українська також має прислівники з різною областю дії, але порядок слів часто допускає інші варіанти фокусування. Португальський учень має звикнути аналізувати не лише позицію, а й те, які альтернативи або компоненти модифікуються.",
    comparisonUk: "Українські «лише», «дуже», «на щастя» добре демонструють різні рівні scope. Порівнюйте їх із só, muito, felizmente як семантичними конструкціями, а не як простими словниковими відповідниками.",
    regional: "Scope є загальною синтаксично-семантичною властивістю. Реалізація через порядок слів та просодію може варіювати між різновидами й каналами, тому конкретну інтерпретацію треба читати в контексті.",
    sources
  }),
  page({
    id: "adverb-adjective", slug: "adverb-adjective", category: "adverbs",
    titleUk: "Прислівник + прикметник", titlePt: "Advérbio + adjetivo", titleEn: "Adverb + adjective",
    summary: "Моделі, у яких прислівник модифікує прикметник: ступінь, інтенсивність, обмеження та оцінка.",
    aliases: ["прислівник прикметник","adverb adjective","advérbio adjetivo"],
    related: ["degree-adverbs","degree-modification","adverb-scope","adverbs-vs-adjectives"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Комбінація прислівника з прикметником є центральною моделлю модифікації ступеня та інтенсивності. Найтиповіший засіб — muito, але система значно ширша: pouco, bastante, demasiado, tão, mais, menos та інші елементи можуть змінювати ступінь або дискурсивну інтерпретацію прикметника.",
    definition: "У конструкції advérbio + adjetivo прислівник модифікує прикметникову ознаку, найчастіше її ступінь, інтенсивність або обмеження.",
    formulas: [
      { label: "Позитивний ступінь", pattern: "ADV + ADJ", note: "muito claro, pouco provável." },
      { label: "Порівняння", pattern: "mais/menos + ADJ", note: "Задається відносний ступінь." },
      { label: "Кореляція", pattern: "tão + ADJ + quanto", note: "Реалізується порівняльна рівність." }
    ],
    formation: "Позиція перед прикметником типова для degree adverbs. Значення залежить від класу прислівника: muito підсилює, pouco послаблює, demasiado виражає надмірність, а mais/menos встановлюють порівняльну шкалу.",
    uses: [
      { title: "Інтенсивність", body: "muito збільшує ступінь ознаки.", examples: [ex("O problema é muito complexo.", "Проблема дуже складна.", { purpose: "production" })] },
      { title: "Послаблення", body: "pouco зменшує ступінь.", examples: [ex("É pouco provável.", "Це малоймовірно.", { purpose: "production" })] },
      { title: "Надмірність", body: "demasiado позначає ступінь, що перевищує релевантну норму.", examples: [ex("Está demasiado quente.", "Занадто спекотно.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("O problema é muito complexo.", "Проблема дуже складна.", { purpose: "production" }),
      ex("É pouco provável.", "Це малоймовірно.", { purpose: "production" }),
      ex("Está demasiado quente.", "Занадто спекотно.", { purpose: "contrast" }),
      ex("Ela é tão competente quanto ele.", "Вона така ж компетентна, як і він.", { purpose: "comprehension" })
    ],
    nonUses: ["Не плутайте muito перед прикметником із його вживанням як кількісного модифікатора іменника.", "Не переносіть український порядок слів механічно.", "Не вважайте всі прислівники перед прикметником degree adverbs."],
    markers: ["muito","pouco","bastante","demasiado","mais","menos","tão"],
    mistakes: [
      mistake("muito estudantes як приклад advérbio + adjetivo", "muito + plural noun у кількісній конструкції", "Категорія та функція muito залежать від модифікованого компонента."),
      mistake("mais interessante que завжди означає те саме, що muito interessante", "розрізняти порівняння та інтенсивність", "mais задає порівняльну, а не просто інтенсивну шкалу.")
    ],
    ukrainian: "Українське «дуже складний», «мало ймовірний», «занадто гарячий» має близьку структуру. Португальські форми треба співвідносити за ступенем і функцією, а не лише за позицією.",
    comparisonUk: "Український «дуже» зазвичай відповідає muito, але «більш» — це вже mais і порівняльна конструкція. Це важлива відмінність між інтенсивністю та порівнянням.",
    regional: "Базові моделі спільні для PT-BR/PT-PT. Відмінності в конкретних degree expressions переважно стосуються частотності, регістру та розмовної варіативності.",
    sources
  }),
  page({
    id: "adverb-adverb", slug: "adverb-adverb", category: "adverbs",
    titleUk: "Прислівник + прислівник", titlePt: "Advérbio + advérbio", titleEn: "Adverb + adverb",
    summary: "Комбінації прислівників для модифікації ступеня, часу, частоти та інших прислівникових значень.",
    aliases: ["прислівник плюс прислівник","adverb adverb","advérbio advérbio"],
    related: ["degree-modification","adverb-scope","adverb-position","adverb-formation"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Прислівники можуть модифікувати інші прислівники. Найпродуктивніша модель — degree adverb перед іншим прислівником: muito rapidamente, bastante longe, tão cedo. Тут перший компонент визначає ступінь або міру другого, а не додає незалежну обставину.",
    definition: "У конструкції advérbio + advérbio один прислівник семантично модифікує інший, найчастіше через ступінь або міру.",
    formulas: [
      { label: "Ступінь способу", pattern: "ADV + ADV", note: "muito rapidamente." },
      { label: "Ступінь локативності", pattern: "ADV + ADV", note: "bastante longe." },
      { label: "Порівняльний ступінь", pattern: "tão + ADV", note: "tão cedo, tão perto." }
    ],
    formation: "Найчастіше перед прислівником стоять muito, pouco, bastante, tão, mais, menos. Не кожна послідовність двох прислівників утворює одну конструкцію: вони можуть бути окремими обставинами в одному реченні.",
    uses: [
      { title: "Модифікація ступеня", body: "muito посилює інший прислівник.", examples: [ex("Ele fala muito rapidamente.", "Він говорить дуже швидко.", { purpose: "production" })] },
      { title: "Міра", body: "bastante може модифікувати просторовий або часовий прислівник.", examples: [ex("Fica bastante longe.", "Це досить далеко.", { purpose: "production" })] },
      { title: "Порівняльна рівність", body: "tão може встановлювати ступінь іншого прислівника.", examples: [ex("Chegou tão cedo como eu.", "Він прийшов так само рано, як і я.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Ele fala muito rapidamente.", "Він говорить дуже швидко.", { purpose: "production" }),
      ex("Fica bastante longe.", "Це досить далеко.", { purpose: "production" }),
      ex("Chegou tão cedo como eu.", "Він прийшов так само рано, як і я.", { purpose: "contrast" })
    ],
    nonUses: ["Не трактуйте будь-які два сусідні прислівники як єдину групу.", "Не плутайте degree modifier з другим незалежним обставинним компонентом.", "Не визначайте структуру лише за відсутністю сполучника."],
    markers: ["muito","pouco","bastante","tão","mais","menos"],
    mistakes: [
      mistake("вважати muito rapidamente двома незалежними обставинами", "аналізувати muito як degree modifier", "Перший прислівник змінює ступінь другого."),
      mistake("Chegou cedo ontem = advérbio + advérbio", "розрізняти модифікацію та координацію обставин", "cedo і ontem можуть виконувати різні незалежні функції.")
    ],
    ukrainian: "Українська має аналогічні моделі «дуже швидко», «досить далеко», «так рано». Тому базова синтаксична логіка доступна українському учневі, але конкретна позиція й просодія можуть відрізнятися.",
    comparisonUk: "Корисно перекладати не окремі слова, а всю групу: muito rapidamente = «дуже швидко», а не два окремі прислівники без відношення модифікації.",
    regional: "Моделі advérbio + advérbio загальнопортугальські. Відмінності між різновидами переважно не змінюють базової граматичної структури.",
    sources
  })
];
