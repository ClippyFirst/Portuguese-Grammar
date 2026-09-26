import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const G1 = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const G2 = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const CAM = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "semantic-ambiguity",
    slug: "semantic-ambiguity",
    category: "semantics",
    titleUk: "Семантична неоднозначність",
    titlePt: "Ambiguidade semântica",
    titleEn: "Semantic ambiguity",
    summary: "Випадки, коли одна мовна форма допускає більше однієї інтерпретації, а значення визначається контекстом.",
    aliases: ["семантична неоднозначність", "semantic ambiguity", "ambiguidade semântica"],
    related: ["adverb-scope", "scope-and-reference", "reference-overview"],
    status: "draft",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro: "Семантична неоднозначність виникає тоді, коли одна й та сама форма або структура сумісна з кількома значеннями. У португальській її не слід автоматично вважати помилкою: часто саме контекст, порядок слів, інтонація, ширина області дії або попередній дискурс вибирають потрібну інтерпретацію. Для україномовного читача важливо не підміняти аналіз контексту єдиним словниковим перекладом.",
    definition: "Семантична неоднозначність — ситуація, у якій мовний вираз допускає щонайменше дві змістові інтерпретації, що не усуваються самою формою виразу.",
    uses: [
      { title: "Область дії прислівника", body: "Позиція прислівника може впливати на те, яку частину висловлення він модифікує.", examples: [
        ex("Só o João leu o relatório.", "Лише Жуан прочитав звіт.", { purpose: "contrast" }),
        ex("O João só leu o relatório.", "Жуан лише прочитав звіт.", { purpose: "contrast" })
      ] },
      { title: "Референція", body: "Іменна група може залишати відкритим питання про те, який саме референт мається на увазі.", examples: [
        ex("Encontrei o professor na biblioteca.", "Я зустрів/зустріла викладача в бібліотеці.", { purpose: "comprehension" }),
        ex("Vi um professor na biblioteca.", "Я побачив/побачила якогось викладача в бібліотеці.", { purpose: "contrast" })
      ] },
      { title: "Контекст як засіб розв'язання", body: "Попередня інформація, ситуація спілкування та інтонація часто усувають неоднозначність, якої немає в ізольованому реченні.", examples: [
        ex("Ele falou com o diretor.", "Він поговорив із директором.", { purpose: "comprehension" }),
        ex("Ele falou com o diretor ontem.", "Він поговорив із директором учора.", { purpose: "production" })
      ] }
    ],
    examples: [
      ex("Só a Maria viu o filme.", "Лише Марія подивилася фільм.", { purpose: "production" }),
      ex("A Maria só viu o filme.", "Марія лише подивилася фільм.", { purpose: "contrast" }),
      ex("Encontrei o professor na biblioteca.", "Я зустрів/зустріла викладача в бібліотеці.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вважати будь-яку потенційну двозначність граматичною помилкою", "перевіряти, чи контекст і синтаксична структура вже вибирають потрібну інтерпретацію", "Природна мова регулярно допускає контекстуальну неоднозначність."),
      mistake("обирати один український переклад як єдине значення португальської форми", "порівнювати кілька можливих інтерпретацій перед перекладом", "Одна форма може мати різну область дії або референцію залежно від контексту.")
    ],
    ukrainian: "Українська також має семантично неоднозначні конструкції, тому загальний принцип контексту переноситься добре. Водночас конкретні способи зняття неоднозначності — порядок слів, артиклі, позиція прислівника — не завжди збігаються.",
    regional: "Потенційна неоднозначність є властивістю конструкції та контексту, а не окремою рисою PT-BR чи PT-PT. Різновиди можуть відрізнятися частотністю окремих способів перефразування.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian, Vol. II", url: G1 },
      { label: "Gramática do Português — Fundação Calouste Gulbenkian, Vol. III", url: G2 },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  }),
  page({
    id: "duration-adverbs",
    slug: "duration-adverbs",
    category: "adverbs",
    titleUk: "Прислівники та сполуки тривалості",
    titlePt: "Advérbios e expressões de duração",
    titleEn: "Duration adverbs and expressions",
    summary: "Способи вираження тривалості, часової межі та протяжності ситуації.",
    aliases: ["прислівники тривалості", "duration adverbs", "expressões de duração", "тривалість"],
    related: ["time-adverbs", "tense-aspect", "aspect-overview"],
    status: "draft",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro: "Тривалість не зводиться до одного набору прислівників. Португальська поєднує часові прислівники, прийменникові сполуки та конструкції з тривалісними іменниками, а вибір форми залежить від того, чи йдеться про довжину самої ситуації, час від її початку або часову межу. Особливо важливо розрізняти duração, момент початку та період, протягом якого ситуація триває.",
    definition: "Засоби вираження тривалості локалізують ситуацію на часовій шкалі й указують, скільки вона триває, як давно почалася або в межах якого періоду відбувається.",
    uses: [
      { title: "Тривалість протягом певного періоду", body: "Прийменникові сполуки можуть задавати часовий відрізок, у межах якого триває ситуація.", examples: [
        ex("Trabalhei durante duas horas.", "Я працював/працювала протягом двох годин.", { purpose: "production" }),
        ex("Ficámos lá durante três dias.", "Ми залишалися там три дні.", { purpose: "production" })
      ] },
      { title: "Як давно триває ситуація", body: "Конструкції з há можуть локалізувати початок ситуації відносно моменту відліку.", examples: [
        ex("Moro aqui há cinco anos.", "Я живу тут уже п'ять років.", { purpose: "production" }),
        ex("Estou à espera há meia hora.", "Я чекаю вже пів години.", { purpose: "production" })
      ] },
      { title: "Тривалість до певної межі", body: "До часової межі можна додавати expressões como até, desde e durante, але вони виконують різні функції.", examples: [
        ex("Trabalhei até às seis.", "Я працював/працювала до шостої.", { purpose: "contrast" }),
        ex("Trabalho aqui desde 2022.", "Я працюю тут із 2022 року.", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Estudei durante duas horas.", "Я вчився/вчилася дві години.", { purpose: "production" }),
      ex("Moro aqui há cinco anos.", "Я живу тут уже п'ять років.", { purpose: "production" }),
      ex("Trabalho aqui desde 2022.", "Я працюю тут із 2022 року.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("перекладати durante, há та desde одним українським прийменником", "визначати, чи виражається тривалість, відстань від початку або початкова межа", "Ці форми кодують різні часові відношення."),
      mistake("вважати há в таких конструкціях простим еквівалентом «тому»", "розглядати há + часовий вираз як конструкцію відліку тривалості", "Moro aqui há cinco anos описує ситуацію, що триває до теперішнього моменту.")
    ],
    ukrainian: "Українська має близькі засоби: «протягом», «уже ...», «від/з», «до». Головна пастка — відповідність прийменника: португальська конструкція й український переклад можуть організовувати часовий відлік по-різному.",
    regional: "Базові конструкції тривалості є спільними для PT-BR і PT-PT. Для конкретних розмовних альтернатив та частотності окремих моделей потрібен окремий корпусний аналіз.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian, Vol. II", url: G1 },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  }),
  page({
    id: "polar-questions",
    slug: "polar-questions",
    category: "syntax",
    titleUk: "Полярні питання: так чи ні",
    titlePt: "Perguntas polares",
    titleEn: "Polar questions",
    summary: "Питання, відповіддю на які є ствердження або заперечення, та основні способи їх оформлення.",
    aliases: ["полярні питання", "polar questions", "perguntas polares", "так/ні питання"],
    related: ["minimal-answers", "question-negation", "word-order"],
    status: "draft",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro: "Полярне питання перевіряє істинність цілого висловлення: чи відбулася подія, чи має місце стан, чи виконується певна пропозиція. У португальській структура питання часто близька до відповідного розповідного речення, а питальність виражається інтонацією, контекстом і пунктуацією на письмі. Тому відсутність спеціального інверсійного шаблону не означає відсутності питання.",
    definition: "Полярне питання — висловлення, що пропонує альтернативу ствердження/заперечення щодо цілого пропозиційного змісту.",
    uses: [
      { title: "Нейтральне питання", body: "Та сама синтаксична послідовність може бути інтерпретована як питання завдяки інтонації й контексту.", examples: [
        ex("O João chegou?", "Жуан прийшов?", { purpose: "production" }),
        ex("Tu trabalhas aqui?", "Ти працюєш тут?", { purpose: "production" })
      ] },
      { title: "Підтвердження припущення", body: "Полярне питання може перевіряти вже очікувану інформацію.", examples: [
        ex("Então, vais amanhã?", "Отже, ти їдеш завтра?", { purpose: "comprehension" })
      ] },
      { title: "Питання із запереченням", body: "Заперечна форма змінює прагматичну інтерпретацію питання, але не перетворює його на інший тип речення.", examples: [
        ex("Não vais amanhã?", "Ти не їдеш завтра?", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("O João chegou?", "Жуан прийшов?", { purpose: "production" }),
      ex("Tu trabalhas aqui?", "Ти працюєш тут?", { purpose: "production" }),
      ex("Não vais amanhã?", "Ти не їдеш завтра?", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("вимагати обов'язкової інверсії підмета й дієслова, як в англійській", "розглядати португальське питання в межах його власної синтаксичної та інтонаційної системи", "Питальна інтонація може бути достатньою для полярного питання."),
      mistake("вважати знак питання на письмі єдиним носієм питальності", "аналізувати структуру, інтонацію та комунікативний контекст", "Усне питання не має графічного знака, але має питальну просодію.")
    ],
    ukrainian: "Українська також може утворювати полярні питання без обов'язкової перебудови базового порядку слів, тому тут є добра типологічна аналогія. Водночас інтонаційні моделі не слід копіювати механічно.",
    regional: "Базовий тип полярного питання є спільним для португаломовних різновидів. Просодія та частотність окремих розмовних засобів можуть відрізнятися.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian, Vol. II", url: G1 },
      { label: "Gramática do Português — Fundação Calouste Gulbenkian, Vol. III", url: G2 },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  }),
  page({
    id: "question-negation",
    slug: "question-negation",
    category: "syntax",
    titleUk: "Заперечні питання",
    titlePt: "Perguntas negativas",
    titleEn: "Negative questions",
    summary: "Полярні питання із запереченням та їхня взаємодія з очікуванням, здивуванням і підтвердженням.",
    aliases: ["заперечні питання", "negative questions", "perguntas negativas"],
    related: ["polar-questions", "negation-nao", "minimal-answers"],
    status: "draft",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro: "Заперечне питання містить заперечення, але його комунікативна мета може бути різною: перевірка факту, здивування, очікування позитивної відповіді або пропозиція підтвердити припущення. Форма Não ...? сама по собі не визначає, яку саме відповідь очікує мовець. Для перекладу треба враховувати контекст і просодію.",
    definition: "Заперечне питання — полярне питання, у якому пропозиційний зміст містить заперечний маркер não або інший засіб заперечення.",
    uses: [
      { title: "Перевірка факту", body: "Мовець може просто перевіряти, чи не виконується певна ситуація.", examples: [
        ex("Não tens tempo?", "У тебе немає часу?", { purpose: "comprehension" })
      ] },
      { title: "Здивування або очікування", body: "У контексті заперечне питання може сигналізувати, що позитивна відповідь була очікуваною або що мовець здивований.", examples: [
        ex("Não vais connosco?", "Ти не йдеш із нами?", { purpose: "contrast" })
      ] },
      { title: "Відповідь на заперечне питання", body: "Так/ні не слід перекладати механічно за формою питання: відповідь має бути прив'язана до того, що саме стверджується або заперечується.", examples: [
        ex("Não queres café? — Quero.", "Не хочеш кави? — Хочу.", { purpose: "production" })
      ] }
    ],
    examples: [
      ex("Não tens tempo?", "У тебе немає часу?", { purpose: "production" }),
      ex("Não vais connosco?", "Ти не йдеш із нами?", { purpose: "contrast" }),
      ex("Não queres café? — Quero.", "Не хочеш кави? — Хочу.", { purpose: "production" })
    ],
    mistakes: [
      mistake("вважати, що негативне питання автоматично очікує відповіді «ні»", "визначати очікувану інтерпретацію з контексту, інтонації та дискурсивної ситуації", "Заперечне питання може бути способом висловити здивування або очікування."),
      mistake("перекладати Sim/Não механічно як «так/ні» незалежно від заперечної форми питання", "відновлювати повну пропозицію, яку підтверджує або заперечує відповідь", "Це особливо важливо в коротких відповідях на заперечні питання.")
    ],
    ukrainian: "Українська має той самий базовий тип «Хіба ти не...?», «Ти не...?», тому функція заперечного питання добре зіставляється. Пастка виникає під час перекладу коротких відповідей, де українська й португальська можуть організовувати підтвердження по-різному.",
    regional: "Заперечні питання є звичайним засобом португаломовного спілкування. Конкретна просодія та прагматичний відтінок залежать від ситуації й різновиду мови.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian, Vol. II", url: G1 },
      { label: "Gramática do Português — Fundação Calouste Gulbenkian, Vol. III", url: G2 },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  })
];
