import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_II = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const CAMOES_PLE = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "consecutive-clauses",
    slug: "consecutive",
    category: "subordinate",
    titleUk: "Підрядні наслідку",
    titlePt: "Orações consecutivas",
    titleEn: "Consecutive clauses",
    summary: "Конструкції, що виражають результат або наслідок попередньої ситуації.",
    aliases: ["підрядні наслідку", "consecutive clauses", "orações consecutivas", "tão... que", "tanto... que"],
    related: ["causal-clauses", "comparative-clauses", "proportional-clauses", "purpose-clauses"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Підрядна наслідку подає результат, до якого приводить ситуація головної частини. У португальській типовими є корелятивні моделі tão... que, tanto... que, tal... que та конструкції на зразок de tal modo que. На відміну від причинового речення, вона не пояснює, чому сталася подія, а показує, що з неї випливає.",
    definition: "Consecutiva — залежна конструкція, яка представляє наслідок або результат інтенсивності, кількості, способу чи іншої характеристики ситуації головної частини.",
    uses: [
      { title: "Інтенсивність → результат", body: "Кореляція tão... que пов'язує ступінь ознаки або обставини з результатом.", examples: [ex("Estava tão cansado que adormeceu no sofá.", "Він/вона був/була такий/така втомлений/втомлена, що заснув/заснула на дивані.", { purpose: "production" }), ex("Falou tão baixo que ninguém o ouviu.", "Він/вона говорив/говорила так тихо, що ніхто його/її не почув.", { purpose: "production" })] },
      { title: "Кількість → результат", body: "Tanto... que та пов'язані моделі можуть пов'язувати кількість із наслідком.", examples: [ex("Havia tanta gente que não conseguimos entrar.", "Людей було так багато, що ми не змогли увійти.", { purpose: "contrast" })] },
      { title: "Спосіб дії → наслідок", body: "De tal modo que та споріднені конструкції можуть подавати результат способу або характеру дії.", examples: [ex("Organizou tudo de tal modo que ninguém se perdeu.", "Він/вона все організував/організувала так, що ніхто не заблукав.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("A notícia foi tão inesperada que todos ficaram em silêncio.", "Новина була такою несподіваною, що всі замовкли.", { purpose: "production" }),
      ex("Trabalhámos tanto que terminámos antes do prazo.", "Ми так багато працювали, що закінчили раніше дедлайну.", { purpose: "production" }),
      ex("Era tal a confusão que ninguém sabia o que fazer.", "Плутанина була такою, що ніхто не знав, що робити.", { purpose: "comprehension" }),
      ex("Choveu de tal modo que várias estradas ficaram fechadas.", "Дощ ішов так сильно, що кілька доріг перекрили.", { purpose: "production" }),
      ex("Falava tão depressa que era difícil acompanhá-lo.", "Він/вона говорив/говорила так швидко, що за ним/нею було важко стежити.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("перекладати будь-яке «так..., що» як окреме просте прислівникове означення", "шукати зв'язок між ступенем/характеристикою та результатом", "Consecutiva має дві предикації і результативний зв'язок між ними.", "predicted-l1-transfer", "high"),
      mistake("плутати наслідок із причиною", "питати, яка частина є підставою, а яка — результатом", "Porque пояснює причину; tão... que та подібні моделі типово вводять наслідок.", "predicted-l1-transfer", "high"),
      mistake("вважати que після tão звичайним доповненням без кореляції", "бачити пару tão... que як єдину конструкцію", "Корелятивність є важливою частиною синтаксичної інтерпретації.", "editorial", "medium")
    ],
    ukrainian: "Українські «так..., що», «настільки..., що», «стільки..., що» добре передають кореляцію. Але не кожне українське «що» відповідає consecutiva: треба спочатку визначити, чи друга частина є результатом першої.",
    regional: "Основні моделі consecutiva спільні для PT-BR і PT-PT. Частотність окремих конструкцій і лексичні уподобання залежать від стилю та різновиду мови.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "comparative-clauses",
    slug: "comparative",
    category: "subordinate",
    titleUk: "Порівняльні підрядні",
    titlePt: "Orações comparativas",
    titleEn: "Comparative clauses",
    summary: "Конструкції, що зіставляють міру, якість, кількість або спосіб двох ситуацій.",
    aliases: ["порівняльні підрядні", "comparative clauses", "orações comparativas", "mais... do que", "tão... como"],
    related: ["proportional-clauses", "comparatives", "consecutive-clauses", "adjective-intensification"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Порівняльна підрядна встановлює співвідношення між двома ситуаціями або величинами. У португальській вона часто з'являється в корелятивних моделях mais... do que, menos... do que, tão... como, bem como та інших конструкціях. Порівняння слід відрізняти від пропорційності: quanto mais... mais... описує взаємну зміну двох параметрів, а не просто їхнє зіставлення.",
    definition: "Comparativa — залежна або частково еліптична конструкція, яка задає стандарт порівняння для властивості, кількості, міри чи способу дії.",
    uses: [
      { title: "Вища або нижча міра", body: "Mais... do que і menos... do que зіставляють ступінь ознаки або кількість.", examples: [ex("Ela trabalha mais do que eu.", "Вона працює більше, ніж я.", { purpose: "production" }), ex("Temos menos tempo do que ontem.", "У нас менше часу, ніж учора.", { purpose: "production" })] },
      { title: "Рівність", body: "Tão... como та стійкі споріднені моделі виражають рівність міри або якості.", examples: [ex("Este livro é tão interessante como o outro.", "Ця книжка така сама цікава, як інша.", { purpose: "contrast" })] },
      { title: "Порівняння способу або відповідності", body: "Assim como, bem como та інші конструкції можуть зіставляти спосіб, властивості або паралельні ситуації.", examples: [ex("Assim como o pai, ela gosta de música.", "Як і батько, вона любить музику.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("O projeto é mais complexo do que parecia.", "Проєкт складніший, ніж здавався.", { purpose: "production" }),
      ex("Ele corre tão depressa como o irmão.", "Він бігає так само швидко, як брат.", { purpose: "production" }),
      ex("Hoje há menos pessoas do que ontem.", "Сьогодні людей менше, ніж учора.", { purpose: "comprehension" }),
      ex("Ela estudou mais do que eu esperava.", "Вона вчилася більше, ніж я очікував/очікувала.", { purpose: "contrast" }),
      ex("Assim como antes, continuamos a trabalhar juntos.", "Як і раніше, ми продовжуємо працювати разом.", { purpose: "production" })
    ],
    mistakes: [
      mistake("плутати do que після comparativo з причинним або додатковим que", "аналізувати першу частину як стандарт порівняння", "У mais... do que друга частина є стандартом зіставлення.", "predicted-l1-transfer", "high"),
      mistake("називати будь-яку конструкцію з mais пропорційною", "перевіряти, чи є дві взаємно змінні величини", "Mais... do que порівнює; quanto mais... mais... встановлює пропорційний зв'язок.", "editorial", "high"),
      mistake("вважати como автоматичним маркером порівняння", "визначати функцію como в конкретній конструкції", "Como може мати порівняльне, модальне, причинне та інші значення.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українські «ніж», «як», «так само... як» дають добру семантичну підказку, але португальська має власні корелятивні шаблони. Особливо важливо не переносити український вибір сполучника механічно.",
    regional: "Порівняльні конструкції є базовою спільною частиною PT-BR і PT-PT. Варіанти з займенниками, еліпсисом та стилістичною будовою можуть відрізнятися за різновидами й регістрами.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "concessive-clauses",
    slug: "concessive",
    category: "subordinate",
    titleUk: "Допустові підрядні",
    titlePt: "Orações concessivas",
    titleEn: "Concessive clauses",
    summary: "Конструкції, що виражають контраст між очікуваною перешкодою та фактичним результатом.",
    aliases: ["допустові підрядні", "concessive clauses", "orações concessivas", "embora", "mesmo que"],
    related: ["causal-clauses", "conditional-clauses", "purpose-clauses", "subordinating"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Допустова підрядна вводить ситуацію, яка за очікуванням могла б перешкодити головній ситуації, але фактично не скасовує її. Типові маркери — embora, ainda que, mesmo que та споріднені конструкції. Головна семантична ідея — не просто «додаткова причина», а конфлікт між очікуваним наслідком і реальною подією.",
    definition: "Concessiva — залежна конструкція, яка подає обставину, несумісну з очікуванням щодо головної ситуації, але не запобігає її реалізації.",
    uses: [
      { title: "Фактова поступка", body: "Embora + conjuntivo може вводити вже відому або фактично наявну обставину, яку мовець подає як поступку.", examples: [ex("Embora estivesse cansado, continuou a trabalhar.", "Хоча він/вона був/була втомлений/втомлена, він/вона продовжив/продовжила працювати.", { purpose: "production" })] },
      { title: "Гіпотетична поступка", body: "Mesmo que та подібні моделі можуть вводити можливу або гіпотетичну перешкоду.", examples: [ex("Mesmo que chova, vamos sair.", "Навіть якщо буде дощ, ми підемо.", { purpose: "contrast" })] },
      { title: "Контраст із очікуванням", body: "Допустова конструкція корисна там, де результат відбувається всупереч типовому очікуванню.", examples: [ex("Ainda que seja difícil, vale a pena tentar.", "Навіть якщо це важко, варто спробувати.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Embora não tenha muito tempo, ajuda-nos sempre.", "Хоча він/вона не має багато часу, він/вона завжди нам допомагає.", { purpose: "production" }),
      ex("Mesmo que ninguém concorde, vou continuar.", "Навіть якщо ніхто не погодиться, я продовжу.", { purpose: "production" }),
      ex("Ainda que fosse tarde, não queriam ir embora.", "Хоча було пізно, вони не хотіли йти.", { purpose: "contrast" }),
      ex("Embora estivesse a chover, saímos.", "Хоча йшов дощ, ми вийшли.", { purpose: "comprehension" }),
      ex("Por mais que tente, não consegue resolver o problema.", "Скільки б він/вона не намагався/намагалася, не може розв'язати проблему.", { purpose: "production" })
    ],
    mistakes: [
      mistake("ототожнювати concessiva з причинною конструкцією", "шукати не причину, а перешкоду, яка не блокує результат", "Хоча ситуація може пояснювати контекст, її функція тут — поступка.", "predicted-l1-transfer", "high"),
      mistake("ставити indicativo після embora за аналогією з українським «хоча»", "запам'ятати типову модель embora + conjuntivo та перевіряти конкретну конструкцію", "У стандартній concessiva після embora типовим є conjuntivo.", "predicted-l1-transfer", "high"),
      mistake("вважати mesmo que тотожним будь-якому mesmo", "аналізувати, чи mesmo вводить допустову підрядну", "Mesmo має кілька функцій; значення визначається конструкцією.", "editorial", "medium")
    ],
    ukrainian: "Українські «хоча», «навіть якщо», «хай навіть» добре передають контраст, але не визначають португальський спосіб. Для навчання корисно окремо запам'ятати хоча б базові пари embora + conjuntivo та mesmo que + conjuntivo.",
    regional: "Concessiva є спільною категорією PT-BR і PT-PT. Відмінності стосуються передусім частотності сполучників, лексичного вибору та регістру.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "conditional-clauses",
    slug: "conditional",
    category: "subordinate",
    titleUk: "Умовні підрядні",
    titlePt: "Orações condicionais",
    titleEn: "Conditional clauses",
    summary: "Конструкції, що задають умову для реалізації або оцінки головної ситуації.",
    aliases: ["умовні підрядні", "conditional clauses", "orações condicionais", "se", "caso"],
    related: ["subjunctive-overview", "future-subjunctive", "concessive-clauses", "causal-clauses"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Умовна підрядна задає умову, за якої справджується, оцінюється або передбачається головна ситуація. Основним маркером є se, але важливі також caso, desde que, contanto que та інші моделі. Португальська розрізняє відкриті умови, гіпотетичні умови й контрфактичні сценарії за допомогою різних комбінацій часів і способів.",
    definition: "Condicional — залежна конструкція, яка встановлює умову, від якої залежить істинність, можливість або реалізація головної ситуації.",
    uses: [
      { title: "Відкрита або реальна умова", body: "Se + presente do indicativo може вводити умову, яку мовець розглядає як реальну можливість або загальне правило.", examples: [ex("Se chover, ficamos em casa.", "Якщо буде дощ, ми залишимося вдома.", { purpose: "production" })] },
      { title: "Майбутня умова", body: "Для відкритої майбутньої умови португальська, особливо в європейському стандарті, має futuro do conjuntivo: se + futuro do conjuntivo.", examples: [ex("Se tiveres tempo, liga-me.", "Якщо матимеш час, подзвони мені.", { purpose: "contrast", variety: "PT" })] },
      { title: "Гіпотеза та нереальна ситуація", body: "Моделі se + imperfeito do conjuntivo та se + mais-que-perfeito do conjuntivo виражають відповідно гіпотетичні й контрфактичні сценарії.", examples: [ex("Se tivesse dinheiro, compraria uma casa.", "Якби в мене були гроші, я купив би/купила б будинок.", { purpose: "production" })] }
    ],
    examples: [
      ex("Se tens dúvidas, pergunta.", "Якщо маєш сумніви, запитай.", { purpose: "production" }),
      ex("Se ele vier amanhã, falaremos com ele.", "Якщо він прийде завтра, ми з ним поговоримо.", { purpose: "production" }),
      ex("Caso precise de ajuda, avise-me.", "Якщо вам потрібна допомога, повідомте мене.", { purpose: "comprehension" }),
      ex("Se estudasses mais, terias melhores resultados.", "Якби ти більше вчився/вчилася, мав/мала б кращі результати.", { purpose: "contrast" }),
      ex("Se tivesse sabido, teria ficado em casa.", "Якби я знав/знала, я б залишився/залишилася вдома.", { purpose: "production" })
    ],
    mistakes: [
      mistake("використовувати futuro do indicativo після se для будь-якої майбутньої умови", "розрізняти майбутню умовну модель із futuro do conjuntivo", "У португальській майбутні відкриті умови мають спеціальну конструкцію.", "predicted-l1-transfer", "high"),
      mistake("вважати se завжди однаковим за функцією", "відрізняти умовне se від se у залежних питаннях і безособових конструкціях", "Одна форма може мати різні синтаксичні функції.", "predicted-l1-transfer", "high"),
      mistake("змішувати гіпотетичну та контрфактичну модель", "визначати, чи умова розглядається як можлива чи як нереалізована", "Часові форми допомагають кодувати різні типи умовності.", "editorial", "high")
    ],
    ukrainian: "Українське «якщо» охоплює кілька португальських моделей. Найважливіша відмінність для українськомовного учня — se + futuro do conjuntivo у відкритій майбутній умові та se + imperfeito do conjuntivo у гіпотетичній конструкції.",
    regional: "Умовна система є спільною для PT-BR і PT-PT, але частотність futuro do conjuntivo помітно різниться: він особливо продуктивний у PT-PT, тоді як у PT-BR у багатьох контекстах уживаються інші засоби або конструкції з теперішнім часом.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  })
];
