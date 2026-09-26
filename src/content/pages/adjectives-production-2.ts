import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const G1 = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/";
const G2 = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const CAM = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "attributive-adjectives", slug: "attributive-adjectives", category: "adjectives",
    titleUk: "Атрибутивні прикметники", titlePt: "Adjetivos atributivos", titleEn: "Attributive adjectives",
    summary: "Як прикметник безпосередньо характеризує іменник усередині іменної групи.",
    aliases: ["атрибутивні прикметники", "attributive adjectives", "adjetivos atributivos"],
    related: ["adjective-agreement", "adjective-position", "adjective-meaning", "noun-gender"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Атрибутивний прикметник входить до іменної групи й безпосередньо характеризує іменник: uma casa bonita, dois livros interessantes. Для українськомовного студента важливо відразу пов'язувати прикметник не лише зі значенням, а й з узгодженням та позицією в португальській іменній групі.",
    definition: "Атрибутивний прикметник — прикметник, який синтаксично входить до іменної групи та модифікує іменник.",
    uses: [
      { title: "Характеристика іменника", body: "Прикметник додає властивість безпосередньо до іменної групи.", examples: [ex("uma casa bonita", "гарний будинок")] },
      { title: "Узгодження", body: "Прикметник узгоджується з означуваним іменником у релевантних граматичних категоріях.", examples: [ex("casas bonitas", "гарні будинки")] },
      { title: "Позиція", body: "Атрибутивний прикметник може стояти до або після іменника; конкретна позиція залежить від прикметника, значення та конструкції.", examples: [ex("um grande problema", "велика / серйозна проблема"), ex("um problema grande", "велика за розміром проблема")] }
    ],
    examples: [ex("uma casa bonita", "гарний будинок", { purpose: "production" }), ex("casas bonitas", "гарні будинки", { purpose: "comprehension" }), ex("um grande problema", "велика / серйозна проблема", { purpose: "contrast" })],
    mistakes: [mistake("переносити українську позицію прикметника як механічне правило", "спочатку визначати, чи прикметник атрибутивний, а потім перевіряти його звичну позицію та можливу зміну значення", "В українській порядок прикметника теж варіативний, але португальські лексичні та семантичні обмеження треба вивчати окремо.", "predicted-l1-transfer", "medium")],
    ukrainian: "В українській атрибутивні прикметники також узгоджуються з іменником і зазвичай входять до тієї самої іменної групи. Це сильна позитивна аналогія; відмінності особливо помітні в позиції та значеннєвих ефектах.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: G1 }, { label: "Camões — Referencial Camões PLE", url: CAM }]
  }),
  page({
    id: "predicative-adjectives", slug: "predicative-adjectives", category: "adjectives",
    titleUk: "Предикативні прикметники", titlePt: "Adjetivos predicativos", titleEn: "Predicative adjectives",
    summary: "Як прикметник стає частиною присудка й характеризує підмет або додаток.",
    aliases: ["предикативні прикметники", "predicative adjectives", "adjetivos predicativos"],
    related: ["adjective-agreement", "ser-estar", "adjective-position", "complex-predicates"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Предикативний прикметник не просто стоїть біля іменника, а є частиною предикативної конструкції: A casa é bonita. або O resultado parece estranho. Для студента важливо відрізняти таку роль від атрибутивної: в обох випадках прикметник описує властивість, але синтаксична структура різна.",
    definition: "Предикативний прикметник — прикметник, який функціонує як предикативний компонент і приписує властивість суб'єкту або іншому аргументу.",
    uses: [
      { title: "З ser", body: "Прикметник може бути предикативною частиною конструкції з ser.", examples: [ex("A casa é bonita.", "Будинок гарний.")] },
      { title: "З estar", body: "Прикметник може характеризувати стан або ситуацію через estar.", examples: [ex("A porta está aberta.", "Двері відчинені.")] },
      { title: "З іншими предикативними дієсловами", body: "Дієслова на кшталт parecer можуть вводити прикметниковий предикатив.", examples: [ex("O resultado parece estranho.", "Результат здається дивним.")] }
    ],
    examples: [ex("A casa é bonita.", "Будинок гарний.", { purpose: "production" }), ex("A porta está aberta.", "Двері відчинені.", { purpose: "contrast" }), ex("O resultado parece estranho.", "Результат здається дивним.", { purpose: "comprehension" })],
    mistakes: [mistake("вважати предикативний прикметник просто означенням після іменника", "дивитися на всю конструкцію та визначати, чи прикметник є частиною предиката", "Українська також має іменні та прикметникові присудки, тому тут є позитивна аналогія, але вибір ser / estar треба вчити окремо.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська легко допускає конструкції «будинок гарний», «двері відчинені», тому синтаксична ідея предикації знайома. Португальські дієслова-зв'язки та їхні значеннєві відмінності потребують окремого опрацювання.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: G2 }, { label: "Camões — Referencial Camões PLE", url: CAM }]
  }),
  page({
    id: "adjective-coordination", slug: "adjective-coordination", category: "adjectives",
    titleUk: "Однорідні прикметники", titlePt: "Coordenação de adjetivos", titleEn: "Adjective coordination",
    summary: "Як поєднувати два або більше прикметників у межах однієї іменної групи.",
    aliases: ["однорідні прикметники", "adjective coordination", "coordenação de adjetivos"],
    related: ["adjective-agreement", "adjective-position", "coordinating", "adjective-agreement"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Два чи більше прикметників можуть спільно характеризувати один іменник. Важливо розрізняти просте накопичення характеристик, координацію через сполучник і складні випадки, де порядок прикметників впливає на інтерпретацію.",
    definition: "Координація прикметників — синтаксичне поєднання прикметників, які мають спільний зв'язок із тією самою іменною групою та можуть бути поєднані сполучником або іншим координувальним засобом.",
    uses: [
      { title: "Перелік", body: "Прикметники можуть подавати кілька окремих характеристик.", examples: [ex("uma casa grande e bonita", "великий і гарний будинок")] },
      { title: "Спільне узгодження", body: "Кожен прикметник має відповідати іменнику за релевантними категоріями.", examples: [ex("duas casas grandes e bonitas", "два великі й гарні будинки")] },
      { title: "Пунктуація та сполучники", body: "Коми й координувальні сполучники допомагають показати структуру, але їхня конкретна вживаність залежить від конструкції.", examples: [ex("um livro curto, claro e útil", "коротка, зрозуміла й корисна книжка")] }
    ],
    examples: [ex("uma casa grande e bonita", "великий і гарний будинок", { purpose: "production" }), ex("duas casas grandes e bonitas", "два великі й гарні будинки", { purpose: "comprehension" })],
    mistakes: [mistake("узгоджувати лише останній прикметник", "перевіряти кожен прикметник окремо та визначати, до якого іменника він належить", "Українська також узгоджує однорідні прикметники, тому помилка тут не є автоматичною для українськомовного студента.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська має дуже близьку модель однорідних прикметників, тому базова синтаксична схема легко переноситься. Окремо треба стежити за португальськими формами узгодження та пунктуацією.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: G1 }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: G2 }]
  }),
  page({
    id: "adjective-intensification", slug: "adjective-intensification", category: "adjectives",
    titleUk: "Підсилення прикметників", titlePt: "Intensificação dos adjetivos", titleEn: "Adjective intensification",
    summary: "Як виражати вищий ступінь ознаки за допомогою прислівників та словотвірних форм.",
    aliases: ["підсилення прикметників", "adjective intensification", "intensificação dos adjetivos"],
    related: ["adverbs-degree", "absolute-superlative", "comparatives", "superlatives"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Португальська має кілька засобів посилити прикметникову ознаку: прислівники міри, зокрема muito, та суфіксальні форми на -íssimo. Ці засоби не є повними синонімами: вони можуть відрізнятися за структурою, стилістичним ефектом і лексичною доступністю.",
    definition: "Інтенсифікація прикметника — збільшення ступеня вираженої ознаки за допомогою прислівникового, морфологічного або іншого конструкційного засобу.",
    uses: [
      { title: "Прислівникова інтенсифікація", body: "Muito може посилювати прикметник без зміни його морфологічної форми.", examples: [ex("muito importante", "дуже важливий")] },
      { title: "Суфіксальна форма", body: "Форми на -íssimo виражають високий ступінь ознаки.", examples: [ex("importantíssimo", "надзвичайно важливий")] },
      { title: "Не плутати з порівнянням", body: "Інтенсифікація не обов'язково встановлює порівняння з іншими референтами.", examples: [ex("A solução é muito simples.", "Рішення дуже просте.")] }
    ],
    examples: [ex("muito importante", "дуже важливий", { purpose: "production" }), ex("importantíssimo", "надзвичайно важливий", { purpose: "comprehension" }), ex("A solução é muito simples.", "Рішення дуже просте.", { purpose: "contrast" })],
    mistakes: [mistake("ототожнювати -íssimo з найвищим ступенем у групі", "розрізняти інтенсивність ознаки та порівняння одного референта з групою", "Українські «дуже» і «най-» також розрізняють ці значення, тому корисно використовувати цю позитивну аналогію.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська має прислівникове підсилення та суфіксальні моделі, тому функціональна відмінність між «дуже» і «най-» добре переноситься. Португальські форми та їхній стиль треба засвоювати окремо.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: G1 }, { label: "Camões — Referencial Camões PLE", url: CAM }]
  }),
  page({
    id: "compound-adjectives", slug: "compound-adjectives", category: "adjectives",
    titleUk: "Складні прикметники", titlePt: "Adjetivos compostos", titleEn: "Compound adjectives",
    summary: "Як кілька основ утворюють одну прикметникову одиницю та як вона поводиться в реченні.",
    aliases: ["складні прикметники", "compound adjectives", "adjetivos compostos"],
    related: ["word-formation-affixes", "adjective-agreement", "hyphenation", "adjective-substantivisation"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Складні прикметники утворюються з двох або більше компонентів, які разом формують одну лексичну одиницю або складне означення. Для студента важливо не виводити їхню орфографію лише з української: написання, дефіс і словникова закріпленість залежать від конкретної моделі.",
    definition: "Складний прикметник — прикметникова одиниця, сформована з кількох лексичних компонентів, що функціонують як одна структурна або лексична цілісність.",
    uses: [
      { title: "Лексикалізована одиниця", body: "Значення складного прикметника може не дорівнювати простій сумі значень його компонентів.", examples: [ex("luso-brasileiro", "португальсько-бразильський")] },
      { title: "Узгодження", body: "Поведінка щодо роду й числа залежить від внутрішньої структури конкретного складного прикметника.", examples: [ex("relações luso-brasileiras", "португальсько-бразильські відносини")] },
      { title: "Орфографія", body: "Написання та дефіс потрібно перевіряти за нормативним джерелом для конкретної форми.", examples: [ex("luso-brasileiro", "португальсько-бразильський")] }
    ],
    examples: [ex("relações luso-brasileiras", "португальсько-бразильські відносини", { purpose: "production" }), ex("luso-brasileiro", "португальсько-бразильський", { purpose: "comprehension" })],
    mistakes: [mistake("вважати, що всі складні прикметники мають однакове правило написання й узгодження", "розпізнавати модель і перевіряти конкретну лексикалізовану форму", "Українська теж має складні прикметники, але морфологічні та орфографічні моделі не збігаються.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська має аналогічний словотвірний процес, тому поняття складного прикметника знайоме. Відмінності треба шукати в конкретних моделях утворення, узгодження та написання.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: G1 }, { label: "Camões — Referencial Camões PLE", url: CAM }]
  }),
  page({
    id: "adjective-substantivisation", slug: "adjective-substantivisation", category: "adjectives",
    titleUk: "Субстантивація прикметників", titlePt: "Substantivação dos adjetivos", titleEn: "Adjective substantivisation",
    summary: "Як прикметник уживається як іменна група, коли означуваний іменник не виражений.",
    aliases: ["субстантивація прикметників", "adjective substantivisation", "substantivação dos adjetivos"],
    related: ["adjective-agreement", "articles-definite", "nominalization", "ellipsis"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Прикметник може вживатися без явно вираженого іменника, коли контекст дозволяє відновити його референт або клас. У таких конструкціях важливу роль можуть відігравати артикль, узгодження та контекст, тому їх не слід механічно трактувати як «нові іменники».",
    definition: "Субстантивація прикметника — уживання прикметникової форми в іменній функції або в конструкції, де означуваний іменник не виражений.",
    uses: [
      { title: "Відновлюваний референт", body: "Артикль і прикметник можуть утворювати іменну групу, якщо іменник зрозумілий із контексту.", examples: [ex("os mais jovens", "наймолодші")] },
      { title: "Клас або група", body: "У множині така конструкція може позначати групу людей або об'єктів із певною властивістю.", examples: [ex("os mais velhos", "старші люди / старші")] },
      { title: "Залежність від контексту", body: "Без контексту не завжди можна визначити, який іменник відновлюється.", examples: [ex("a mais importante", "найважливіша")] }
    ],
    examples: [ex("Os mais jovens participaram.", "Наймолодші взяли участь.", { purpose: "production" }), ex("Os mais velhos chegaram primeiro.", "Старші прийшли першими.", { purpose: "comprehension" }), ex("Ela escolheu a mais importante.", "Вона вибрала найважливішу.", { purpose: "contrast" })],
    mistakes: [mistake("вважати прикметник повноцінним іменником у кожному такому випадку", "визначати, чи відсутній іменник відновлюється з контексту та яку роль мають артикль і прикметник", "Українська теж допускає субстантивовані прикметники, тому важливо не приписувати португальській конструкції тотожну морфологічну структуру.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська має конструкції на кшталт «старші», «наймолодші», тому базова інтерпретація доступна через позитивну аналогію. Португальський артикль і структура іменної групи потребують окремої уваги.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: G1 }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: G2 }, { label: "Camões — Referencial Camões PLE", url: CAM }]
  })
];
