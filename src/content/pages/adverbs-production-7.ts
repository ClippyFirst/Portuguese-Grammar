import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const sources = [
  { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: "https://gulbenkian.pt/publications/gramatica-do-portugues/" },
  { label: "Ciberdúvidas da Língua Portuguesa", url: "https://ciberduvidas.iscte-iul.pt/" }
];

export const pages: GrammarPage[] = [
  page({
    id: "adverbial-modification-of-clause", slug: "adverbial-modification-of-clause", category: "adverbs",
    titleUk: "Прислівникова модифікація речення", titlePt: "Modificação adverbial da oração", titleEn: "Adverbial modification of the clause",
    summary: "Як прислівникові засоби модифікують усе речення: час, умову, оцінку, спосіб подання та зв'язок із дискурсом.",
    aliases: ["прислівникова модифікація речення","adverbial modification of the clause","modificação adverbial da oração"],
    related: ["adverb-scope","sentence-adverbs","epistemic-adverbs","evaluative-adverbs","adverb-position"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Прислівникова модифікація речення відрізняється від звичайної обставини дієслова. Прислівник може характеризувати не саму подію, а час її реалізації, ступінь упевненості мовця, оцінку повідомлення або спосіб організації дискурсу. Саме тому такі елементи часто мають відносно вільну позицію та взаємодіють із просодією і пунктуацією.",
    definition: "Прислівникова модифікація речення — модифікація на рівні всієї предикації або висловлення, а не лише окремого дієслова чи його аргумента.",
    formulas: [
      { label: "Часова рамка", pattern: "ADV, oração", note: "Hoje, amanhã, atualmente та інші засоби задають рамку події." },
      { label: "Оцінка", pattern: "ADV, oração", note: "felizmente, infelizmente тощо коментують ситуацію." },
      { label: "Епістемічна модифікація", pattern: "ADV, oração", note: "provavelmente, certamente та подібні елементи стосуються міри впевненості." }
    ],
    formation: "На реченнєвому рівні можуть працювати часові, локативні, епістемічні, оцінні та дискурсивно-прагматичні прислівники. Їхній статус визначається не тільки формою, а й областю дії та комунікативною функцією.",
    uses: [
      { title: "Часова рамка", body: "Часовий прислівник може задавати часову рамку всій ситуації.", examples: [ex("Hoje, a reunião começa às nove.", "Сьогодні збори починаються о дев'ятій.", { purpose: "production" })] },
      { title: "Оцінка", body: "Оцінний прислівник виражає ставлення мовця до повідомлюваної ситуації.", examples: [ex("Felizmente, ninguém se feriu.", "На щастя, ніхто не постраждав.", { purpose: "contrast" })] },
      { title: "Епістемічність", body: "Епістемічний прислівник модифікує міру впевненості в пропозиції.", examples: [ex("Provavelmente, ele já chegou.", "Ймовірно, він уже приїхав.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Hoje, a reunião começa às nove.", "Сьогодні збори починаються о дев'ятій.", { purpose: "production" }),
      ex("Felizmente, ninguém se feriu.", "На щастя, ніхто не постраждав.", { purpose: "contrast" }),
      ex("Provavelmente, ele já chegou.", "Ймовірно, він уже приїхав.", { purpose: "contrast" }),
      ex("Atualmente, a situação é diferente.", "Нині ситуація інша.", { purpose: "production" })
    ],
    nonUses: ["Не трактуйте кожен прислівник на початку речення як sentence adverb.", "Не плутайте оцінку ситуації з обставиною способу.", "Не визначайте область дії лише за комами: пунктуація є підказкою, але не повним семантичним тестом."],
    markers: ["hoje","atualmente","felizmente","infelizmente","provavelmente","certamente"],
    mistakes: [
      mistake("Felizmente означає, що дія виконана «щасливо»", "читати felizmente як оцінку всієї ситуації", "На реченнєвому рівні це оцінний коментар, а не спосіб виконання дії."),
      mistake("Provavelmente змінює часову характеристику дієслова", "розрізняти епістемічний та часовий scope", "Його основна функція — модифікація міри впевненості.")
    ],
    ukrainian: "Українська має дуже близькі моделі: «сьогодні», «на щастя», «ймовірно», «безперечно». Водночас португальська позиція й просодія можуть по-іншому розподіляти інформаційний акцент.",
    comparisonUk: "Корисно розрізняти «як відбулася дія?» та «як мовець оцінює все повідомлення?». У першому випадку маємо типову обставину дієслова, у другому — реченнєву модифікацію.",
    regional: "Базові типи реченнєвих прислівників спільні для PT-BR і PT-PT. Конкретна частотність, позиція та просодичне оформлення можуть змінюватися залежно від різновиду, жанру й каналу.",
    sources
  }),
  page({
    id: "adverbial-modification-of-noun-phrase", slug: "adverbial-modification-of-noun-phrase", category: "adverbs",
    titleUk: "Прислівникова модифікація іменникової групи", titlePt: "Modificação adverbial do sintagma nominal", titleEn: "Adverbial modification of the noun phrase",
    summary: "Як прислівникові елементи можуть діяти всередині або на межі іменникової групи.",
    aliases: ["прислівникова модифікація іменникової групи","adverbial modification of noun phrase","modificação adverbial do sintagma nominal"],
    related: ["adverb-adjective","adverb-scope","degree-modification","adverb-position"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Типовий прислівник модифікує дієслово, прикметник або все речення, але деякі прислівникові засоби можуть входити до структури іменникової групи або модифікувати компонент, пов'язаний із нею. Особливо важливі конструкції ступеня й кількості, у яких прислівникова форма стоїть перед прикметниковою характеристикою іменника.",
    definition: "Прислівникова модифікація іменникової групи — семантична модифікація характеристики або кількісно-оцінного компонента всередині NP чи на її межі.",
    formulas: [
      { label: "Ступінь прикметника", pattern: "N + [ADV + ADJ]", note: "muito importante, extremamente difícil." },
      { label: "Кількісна інтерпретація", pattern: "[ADV + expressão nominal]", note: "Функція залежить від того, що саме модифікується." },
      { label: "Зовнішній scope", pattern: "ADV + [NP]", note: "Інтерпретація може стосуватися всієї групи в конкретному контексті." }
    ],
    formation: "Найпрозоріший випадок — прислівник ступеня перед прикметником у складі NP: um problema muito complexo. Межа між внутрішньою модифікацією та ширшим scope визначається структурою, значенням і контекстом.",
    uses: [
      { title: "Ступінь прикметника", body: "Прислівник модифікує прикметникову ознаку всередині NP.", examples: [ex("um problema muito complexo", "дуже складна проблема", { purpose: "production" })] },
      { title: "Інтенсивна характеристика", body: "Вищий ступінь інтенсивності може бути частиною опису референта.", examples: [ex("uma decisão extremamente importante", "надзвичайно важливе рішення", { purpose: "production" })] },
      { title: "Scope над групою", body: "У складніших випадках контекст визначає, чи модифікація стосується характеристики, кількості або всієї групи.", examples: [ex("Quase todos os estudantes chegaram.", "Майже всі студенти прийшли.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("um problema muito complexo", "дуже складна проблема", { purpose: "production" }),
      ex("uma decisão extremamente importante", "надзвичайно важливе рішення", { purpose: "production" }),
      ex("Quase todos os estudantes chegaram.", "Майже всі студенти прийшли.", { purpose: "contrast" }),
      ex("Apenas três candidatos responderam.", "Лише троє кандидатів відповіли.", { purpose: "contrast" })
    ],
    nonUses: ["Не вважайте будь-який прислівник біля NP її внутрішнім модифікатором.", "Не плутайте модифікацію прикметника з кількісним scope над усією NP.", "Не переносіть український порядок слів механічно."],
    markers: ["muito","extremamente","quase","apenas","só"],
    mistakes: [
      mistake("Quase в Quase todos modifica todos як звичайний degree adverb прикметника", "аналізувати кількісний scope", "quase обмежує кількість/ступінь охоплення, а не прикметникову ознаку."),
      mistake("muito importante у NP є модифікатором іменника напряму", "бачити структуру NP: N + [ADV + ADJ]", "muito модифікує прикметник, який уже характеризує іменник.")
    ],
    ukrainian: "Українські «дуже складна проблема», «майже всі студенти», «лише три кандидати» демонструють подібні рівні модифікації. Португальською важливо відрізняти внутрішню структуру NP від ширшого scope.",
    comparisonUk: "Порівнюйте не тільки порядок слів, а й дерево залежностей: «дуже» залежить від «складний», тоді як «майже» у «майже всі» має кількісну область дії.",
    regional: "Базові конструкції є загальнопортугальськими. Різниця між різновидами може проявлятися в частотності окремих focus і degree expressions, а не в самій можливості такого типу модифікації.",
    sources
  }),
  page({
    id: "degree-modification", slug: "degree-modification", category: "adverbs",
    titleUk: "Модифікація ступеня", titlePt: "Modificação de grau", titleEn: "Degree modification",
    summary: "Система прислівникових засобів для вираження інтенсивності, послаблення, надмірності та порівняльного ступеня.",
    aliases: ["модифікація ступеня","degree modification","modificação de grau"],
    related: ["degree-adverbs","adverb-adjective","adverb-adverb","comparative-adverbial-constructions"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Модифікація ступеня показує, наскільки сильно проявляється ознака, дія або інша шкальна характеристика. Португальські muito, pouco, bastante, demasiado, tão, mais і menos утворюють функціональне поле, але їх не можна зводити до одного значення «дуже». Частина з них виражає інтенсивність, частина — порівняння, а частина — надмірність або наближення до межі.",
    definition: "Модифікація ступеня — семантичне встановлення значення на шкалі інтенсивності, кількості або порівняння.",
    formulas: [
      { label: "Підсилення", pattern: "muito + X", note: "Підвищення інтенсивності шкальної характеристики." },
      { label: "Послаблення", pattern: "pouco + X", note: "Зниження ступеня." },
      { label: "Порівняння", pattern: "mais/menos + X", note: "Відносний ступінь щодо іншої точки порівняння." },
      { label: "Рівність", pattern: "tão + X + quanto", note: "Однаковий ступінь за заданим параметром." }
    ],
    formation: "Degree modifiers поєднуються з прикметниками, прислівниками, дієсловами та деякими кількісними виразами. Вибір залежить від шкали: не всі предикати однаково природно допускають ступеневу модифікацію.",
    uses: [
      { title: "Підсилення", body: "muito підвищує ступінь шкальної ознаки.", examples: [ex("O filme é muito longo.", "Фільм дуже довгий.", { purpose: "production" })] },
      { title: "Послаблення", body: "pouco знижує ступінь ознаки.", examples: [ex("A explicação é pouco clara.", "Пояснення недостатньо зрозуміле.", { purpose: "contrast" })] },
      { title: "Надмірність", body: "demasiado позначає ступінь, що перевищує релевантну норму.", examples: [ex("O preço é demasiado alto.", "Ціна надто висока.", { purpose: "production" })] },
      { title: "Порівняння", body: "mais і menos задають відносний ступінь.", examples: [ex("Este caminho é mais curto.", "Цей шлях коротший.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("O filme é muito longo.", "Фільм дуже довгий.", { purpose: "production" }),
      ex("A explicação é pouco clara.", "Пояснення недостатньо зрозуміле.", { purpose: "contrast" }),
      ex("O preço é demasiado alto.", "Ціна надто висока.", { purpose: "production" }),
      ex("Este caminho é mais curto.", "Цей шлях коротший.", { purpose: "contrast" }),
      ex("Ela trabalha tão rapidamente quanto ele.", "Вона працює так само швидко, як і він.", { purpose: "comprehension" })
    ],
    nonUses: ["Не називайте всі degree modifiers синонімами «дуже».", "Не плутайте mais/menos із простим підсиленням: вони створюють порівняльне відношення.", "Не припускайте, що будь-яка ознака має однаково природну шкалу."],
    markers: ["muito","pouco","bastante","demasiado","tão","mais","menos"],
    mistakes: [
      mistake("mais = сильніший синонім muito", "розрізняти інтенсивність і порівняння", "mais зазвичай задає відносну точку на шкалі."),
      mistake("demasiado = завжди нейтральне «дуже»", "перевіряти наявність семантики перевищення норми", "demasiado часто містить компонент надмірності."),
      mistake("pouco claro = «трохи ясний» у будь-якому контексті", "враховувати шкалу та прагматичну норму", "pouco може означати недостатній ступінь.")
    ],
    ukrainian: "Українські «дуже», «мало», «досить», «надто», «більш», «менш», «так само» утворюють близьке функціональне поле. Найважливіша відмінність для навчання — не змішувати інтенсивність із порівнянням.",
    comparisonUk: "muito ≈ «дуже», pouco ≈ «мало/недостатньо», demasiado ≈ «надто», mais/menos ≈ «більш/менш», tão...quanto ≈ «так само...як». Відповідність залежить від конкретної шкали.",
    regional: "Основні degree modifiers спільні для PT-BR і PT-PT. Відмінності стосуються передусім прагматики, частотності та окремих розмовних моделей, а не базової системи.",
    sources
  }),
  page({
    id: "comparative-adverbial-constructions", slug: "comparative-adverbial-constructions", category: "adverbs",
    titleUk: "Порівняльні прислівникові конструкції", titlePt: "Construções adverbiais comparativas", titleEn: "Comparative adverbial constructions",
    summary: "Порівняння способу, ступеня, часу та інших прислівникових характеристик через mais, menos, tão, como та quanto.",
    aliases: ["порівняльні прислівникові конструкції","comparative adverbial constructions","construções adverbiais comparativas"],
    related: ["degree-modification","comparative-clauses","adverb-adverb","adverb-scope"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Порівняння може стосуватися не тільки прикметника, а й способу дії, часу, міри або іншої прислівникової характеристики. Конструкції з mais, menos і tão встановлюють шкальне відношення, а como та quanto вводять параметр або стандарт порівняння. Для аналізу важливо бачити, що саме порівнюється.",
    definition: "Порівняльна прислівникова конструкція встановлює відношення між двома значеннями прислівникової характеристики за шкалою більшої, меншої або однакової міри.",
    formulas: [
      { label: "Більший ступінь", pattern: "mais + ADV + do que", note: "Порівняння способу або міри." },
      { label: "Менший ступінь", pattern: "menos + ADV + do que", note: "Нижчий ступінь." },
      { label: "Рівність", pattern: "tão + ADV + quanto/como", note: "Однаковий ступінь." }
    ],
    formation: "Порівняльна конструкція складається з degree marker, прислівникового компонента та порівняльного стандарту. Частина порівняльної структури може бути еліптичною, якщо зміст легко відновлюється з контексту.",
    uses: [
      { title: "Порівняння способу", body: "Порівнюється інтенсивність або спосіб виконання двох дій.", examples: [ex("Ela trabalha mais rapidamente do que eu.", "Вона працює швидше за мене.", { purpose: "production" })] },
      { title: "Рівність", body: "tão...quanto/como встановлює однаковий ступінь.", examples: [ex("Ele fala tão claramente quanto o professor.", "Він говорить так само чітко, як викладач.", { purpose: "production" })] },
      { title: "Менший ступінь", body: "menos знижує порівняльний рівень.", examples: [ex("Hoje dormi menos profundamente.", "Сьогодні я спав менш глибоко.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Ela trabalha mais rapidamente do que eu.", "Вона працює швидше за мене.", { purpose: "production" }),
      ex("Ele fala tão claramente quanto o professor.", "Він говорить так само чітко, як викладач.", { purpose: "production" }),
      ex("Hoje dormi menos profundamente.", "Сьогодні я спав менш глибоко.", { purpose: "contrast" }),
      ex("O segundo grupo respondeu tão bem como o primeiro.", "Друга група відповіла так само добре, як перша.", { purpose: "comprehension" })
    ],
    nonUses: ["Не ототожнюйте mais + advérbio з простим інтенсивним підсиленням.", "Не припускайте, що do que і quanto виконують однакову структурну функцію.", "Не перекладайте порівняльну конструкцію послівно, якщо українська використовує інший синтаксичний шаблон."],
    markers: ["mais","menos","tão","como","quanto","do que"],
    mistakes: [
      mistake("Ele corre mais rápido = просто «дуже швидко»", "шукати другий член порівняння або контекстуальний стандарт", "mais позначає вищий ступінь відносно точки порівняння."),
      mistake("tão rápido como і muito rápido — однакова конструкція", "розрізняти рівність і абсолютну інтенсивність", "tão...como/quanto встановлює порівняльну рівність.")
    ],
    ukrainian: "Українська має паралельні моделі «швидше, ніж», «так само швидко, як», «менш швидко, ніж». Португальські конструкції концептуально близькі, але реалізація порівняльного стандарту має власні шаблони.",
    comparisonUk: "mais...do que ≈ «більш/швидше..., ніж», menos...do que ≈ «менш..., ніж», tão...quanto/como ≈ «так само..., як». Важливо встановити саме порівнювану ознаку.",
    regional: "Порівняльні конструкції є загальнопортугальськими. Вибір como/quanto, а також еліптичні та розмовні варіанти може мати жанрову або регіональну варіативність; базова функція порівняння зберігається.",
    sources
  })
];
