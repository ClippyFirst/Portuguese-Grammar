import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_II = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const CIBERDUVIDAS_REG = "https://ciberduvidas.iscte-iul.pt/consultorio/areas/regencia/9";
const CAMOES_PLE = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "verb-valency-frames", slug: "verb-valency-frames", category: "valency",
    titleUk: "Валентні рамки дієслів",
    titlePt: "Quadros de valência verbal",
    titleEn: "Verb valency frames",
    summary: "Як описувати дієслово через набір аргументів, їхню форму та зв'язок із предикатом.",
    aliases: ["валентні рамки", "verb valency frames", "quadros de valência", "verb frames"],
    related: ["valency-overview", "verb-valency-arguments", "verb-complement-types", "government-overview", "verb-government-infinitive"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Валентна рамка — це спосіб описати, які учасники ситуації дієслово здатне або потребує виражати та в якій синтаксичній формі вони реалізуються. Parâmetros на кшталт «дієслово + додаток» корисні лише на базовому рівні: для точного опису треба розрізняти аргументи, їхні ролі, прийменникове керування, підрядну частину та інфінітив. Наприклад, comprar зазвичай утворює модель із тим, хто купує, і тим, що купують; dar може відкривати позиції агента, передаваного предмета й адресата. Це не просто список перекладів, а синтаксична характеристика лексеми.",
    definition: "Валентна рамка — абстрактна модель аргументної структури предиката, яка описує кількість і тип його аргументів та способи їхньої синтаксичної реалізації.",
    formation: "Рамку зручно записувати як предикат + аргументи. У Eu comprei o livro маємо дієслово comprei, суб'єктний аргумент eu і прямий додаток o livro. У Dei o livro à Ana додається адресат à Ana. У Preciso de ajuda аргумент de ajuda реалізується прийменниковою групою, а не прямим додатком. У Sei que ele chegou аргументом знання є підрядна пропозиція. Отже, одна й та сама роль «комплемент дієслова» може мати різні формальні реалізації.",
    uses: [
      { title: "Одноаргументні рамки", body: "Деякі предикати відкривають одну основну аргументну позицію, крім невиражених або неаргументних компонентів.", examples: [
        ex("A criança dormiu.", "Дитина спала.", { purpose: "production" }),
        ex("O avião chegou.", "Літак прибув.", { purpose: "production" })
      ] },
      { title: "Двохаргументні рамки", body: "Перехідні дієслова часто поєднують суб'єктний аргумент із прямим об'єктом.", examples: [
        ex("A Ana comprou um livro.", "Ана купила книжку.", { purpose: "production" }),
        ex("O professor explicou a regra.", "Викладач пояснив правило.", { purpose: "comprehension" })
      ] },
      { title: "Дитранзитивні рамки", body: "Деякі предикати допускають окрему позицію для предмета та адресата/одержувача.", examples: [
        ex("Dei o livro à Ana.", "Я дав/дала книжку Ані.", { purpose: "production" }),
        ex("Enviei uma mensagem ao João.", "Я надіслав/надіслала повідомлення Жуану.", { purpose: "comprehension" })
      ] },
      { title: "Прийменникові аргументи", body: "Прийменник може бути частиною валентної моделі, а не вільною обставиною.", examples: [
        ex("Preciso de ajuda.", "Мені потрібна допомога.", { purpose: "contrast" }),
        ex("Gosto de música.", "Я люблю музику.", { purpose: "production" })
      ] },
      { title: "Пропозиційні та інфінітивні аргументи", body: "Аргумент може бути реалізований підрядною частиною або інфінітивною конструкцією.", examples: [
        ex("Espero que ele venha.", "Я сподіваюся, що він прийде.", { purpose: "comprehension" }),
        ex("Comecei a trabalhar cedo.", "Я почав/почала працювати рано.", { purpose: "production" })
      ] }
    ],
    examples: [
      ex("A criança dormiu.", "Дитина спала.", { purpose: "production" }),
      ex("A Ana comprou um livro.", "Ана купила книжку.", { purpose: "production" }),
      ex("Dei o livro à Ana.", "Я дав/дала книжку Ані.", { purpose: "production" }),
      ex("Preciso de ajuda.", "Мені потрібна допомога.", { purpose: "contrast" }),
      ex("Espero que ele venha.", "Я сподіваюся, що він прийде.", { purpose: "comprehension" }),
      ex("Comecei a trabalhar cedo.", "Я почав/почала працювати рано.", { purpose: "production" })
    ],
    mistakes: [
      mistake("вважати всі компоненти після дієслова вільними обставинами", "визначати, чи дієслово лексично відкриває відповідну позицію", "Без аргумента рамка може бути неповною або мати інше значення.", "predicted-l1-transfer", "high"),
      mistake("вибирати прийменник за українським перекладом", "вчити дієслово разом із його валентною рамкою", "Preciso de і Gosto de мають прийменникову модель, яку не можна надійно вивести з перекладу.", "predicted-l1-transfer", "high"),
      mistake("описувати рамку лише через «прямий/непрямий додаток»", "враховувати тип complement і синтаксичну реалізацію", "Аргумент може бути NP, PP, підрядною частиною або інфінітивом.", "editorial", "medium"),
      mistake("вважати кількість слів у реченні кількістю валентних позицій", "відокремлювати аргументи від модифікаторів", "De manhã у реченні може бути часовим модифікатором, а не аргументом дієслова.", "editorial", "high")
    ],
    ukrainian: "Українська також дозволяє описувати дієслова через валентність, тому поняття аргументної структури не є принципово чужим. Найважливіша різниця для навчання — конкретні португальські моделі керування. Український переклад «потребувати», «подобатися», «сподіватися» не гарантує тієї самої синтаксичної рамки.",
    regional: "Валентні рамки є властивістю лексичної граматики, але окремі дієслова та прийменникові моделі можуть мати варіантність між PT-PT, PT-BR, регістрами й мовними спільнотами. Варіант не слід автоматично трактувати як помилку.",
    brPt: "У PT-BR та PT-PT відмінності особливо помітні в окремих прийменникових моделях, займенниковій реалізації та розподілі клитичних об'єктів. Для рамки треба спочатку встановити значення дієслова, а потім перевірити різновид.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Ciberdúvidas — Regência", url: CIBERDUVIDAS_REG },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),

  page({
    id: "verb-valency-arguments", slug: "verb-valency-arguments", category: "valency",
    titleUk: "Аргументи та семантичні ролі дієслова",
    titlePt: "Argumentos e papéis semânticos",
    titleEn: "Verb arguments and semantic roles",
    summary: "Як розрізняти аргумент предиката, його семантичну роль і граматичну реалізацію.",
    aliases: ["аргументи дієслова", "semantic roles", "argument structure", "papéis semânticos"],
    related: ["verb-valency-frames", "argument-vs-adjunct", "verb-complement-types", "valency-overview"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Аргумент і семантична роль — пов'язані, але не тотожні поняття. Аргумент є учасником структури предиката, тоді як роль описує його семантичну функцію в ситуації: агенс, пацієнс, експерієнцер, адресат, тема тощо. У A Ana enviou o relatório ao diretor суб'єкт Ana є аргументом із роллю відправника, o relatório — аргументом-темою, ao diretor — аргументом-одержувачем. Такий аналіз допомагає не змішувати синтаксичну форму з роллю.",
    definition: "Аргумент — компонент, який входить до аргументної структури предиката; семантична роль — спосіб описати, яку участь цей аргумент бере в ситуації.",
    formation: "Роль не дорівнює відмінку або конкретному прийменнику. Один і той самий семантичний тип може мати різну синтаксичну реалізацію. Відправник може бути суб'єктом у enviou, адресат — прийменниковою групою ao diretor, а тема — прямим об'єктом o relatório. Для навчання корисно вести три окремі рівні: значення предиката → аргументна роль → форма аргумента.",
    uses: [
      { title: "Агенс і пацієнс", body: "У подієвих предикатах суб'єкт часто реалізує учасника, який ініціює дію, а об'єкт — того, на кого дія спрямована.", examples: [
        ex("O aluno abriu a porta.", "Учень відчинив двері.", { purpose: "production" }),
        ex("A máquina abriu a porta.", "Машина відчинила двері.", { purpose: "contrast" })
      ] },
      { title: "Експерієнцер", body: "Предикати сприйняття, знання та почуттів можуть мати учасника, який переживає стан або досвід.", examples: [
        ex("A Ana gosta de música.", "Ана любить музику.", { purpose: "production" }),
        ex("O João conhece a cidade.", "Жуан знає місто.", { purpose: "comprehension" })
      ] },
      { title: "Адресат і одержувач", body: "Комунікативні та передавальні дієслова часто відкривають позицію адресата.", examples: [
        ex("Enviei uma mensagem ao João.", "Я надіслав/надіслала повідомлення Жуану.", { purpose: "production" }),
        ex("Expliquei o problema à professora.", "Я пояснив/пояснила проблему викладачці.", { purpose: "production" })
      ] },
      { title: "Тема та пропозиційний зміст", body: "Зміст думки, повідомлення або знання може реалізуватися іменною групою чи цілою пропозицією.", examples: [
        ex("Expliquei o problema.", "Я пояснив/пояснила проблему.", { purpose: "production" }),
        ex("Expliquei que havia um problema.", "Я пояснив/пояснила, що була проблема.", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("O aluno abriu a porta.", "Учень відчинив двері.", { purpose: "production" }),
      ex("A Ana gosta de música.", "Ана любить музику.", { purpose: "production" }),
      ex("Enviei uma mensagem ao João.", "Я надіслав/надіслала повідомлення Жуану.", { purpose: "production" }),
      ex("Expliquei que havia um problema.", "Я пояснив/пояснила, що була проблема.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("ототожнювати підмет з агенсом у всіх реченнях", "визначати семантичну роль окремо від синтаксичної функції", "Підмет може бути експерієнцером, темою або іншим учасником.", "editorial", "high"),
      mistake("вважати прийменник маркером семантичної ролі сам по собі", "аналізувати предикат і всю конструкцію", "Один прийменник може реалізовувати різні функції в різних рамках.", "predicted-l1-transfer", "medium"),
      mistake("плутати аргумент із будь-якою семантично важливою інформацією", "перевіряти, чи компонент вибраний предикатом", "Час, місце або спосіб можуть бути важливими для повідомлення, але не обов'язково аргументами.", "editorial", "high")
    ],
    ukrainian: "Українська також розрізняє учасників ситуації, але в навчанні португальської корисно не переносити семантичну роль безпосередньо на конкретний відмінок. Наприклад, адресат у португальській може реалізуватися через a, а український переклад часто використовує давальний.",
    regional: "Семантичні ролі є аналітичними поняттями й не прив'язані до одного різновиду португальської. Водночас синтаксична реалізація аргументів може варіювати.",
    brPt: "Розподіл займенникових і прийменникових реалізацій аргументів має варіантність між Бразилією та Європою. Не слід вважати саму семантичну роль регіональною властивістю.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),

  page({
    id: "verb-ditransitive-frames", slug: "verb-ditransitive-frames", category: "valency",
    titleUk: "Дитранзитивні рамки",
    titlePt: "Quadros ditransitivos",
    titleEn: "Ditransitive frames",
    summary: "Моделі з двома внутрішніми аргументами: предметом/темою та адресатом, одержувачем або іншим учасником.",
    aliases: ["дитранзитивні рамки", "ditransitive", "quadros ditransitivos", "double object"],
    related: ["verb-valency-frames", "indirect-object", "verb-complement-types", "verb-clitic-frames"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Дитранзитивні дієслова відкривають дві внутрішні аргументні позиції поряд із суб'єктом. Типовий приклад — передавання: хтось передає щось комусь. У португальській одна з позицій часто реалізується прямим додатком, а адресат — прийменниковою групою з a. Тому модель Dei um livro à Ana не слід описувати просто як «два додатки»: o livro і à Ana мають різні синтаксичні властивості.",
    definition: "Дитранзитивна рамка — валентна модель, у якій предикат має два внутрішні аргументи, часто з різними семантичними ролями та синтаксичною реалізацією.",
    formation: "Найзручніша схема: SUBJ + V + TEMA + DESTINATÁRIO. Наприклад, O professor deu o livro ao aluno. Тема — o livro, адресат — ao aluno. Інші дієслова можуть мати повідомлення, джерело, мету або іншу роль замість простого адресата. Не всі дієслова з трьома учасниками мають одну граматичну рамку, тому модель треба засвоювати разом із конкретним дієсловом.",
    uses: [
      { title: "Передавання", body: "Дієслова dar, enviar, entregar та споріднені моделі можуть кодувати предмет і одержувача.", examples: [
        ex("Dei o documento ao diretor.", "Я дав/дала документ директорові.", { purpose: "production" }),
        ex("Enviei uma mensagem à Ana.", "Я надіслав/надіслала повідомлення Ані.", { purpose: "production" })
      ] },
      { title: "Повідомлення", body: "У комунікативних дієсловах внутрішні аргументи можуть бути повідомленням і адресатом.", examples: [
        ex("Expliquei a situação ao João.", "Я пояснив/пояснила ситуацію Жуану.", { purpose: "production" }),
        ex("Contei a história aos meus amigos.", "Я розповів/розповіла історію своїм друзям.", { purpose: "comprehension" })
      ] },
      { title: "Не кожен трьохучасниковий предикат однаковий", body: "Семантично три учасники не гарантують однакової синтаксичної рамки.", examples: [
        ex("Coloquei o livro na mesa.", "Я поклав/поклала книжку на стіл.", { purpose: "contrast" }),
        ex("Pus a chave na gaveta.", "Я поклав/поклала ключ у шухляду.", { purpose: "contrast" })
      ] },
      { title: "Заміна аргумента клітиком", body: "Внутрішній аргумент може бути представлений клитиком, що робить валентну структуру важливою для розуміння займенникової форми.", examples: [
        ex("Dei-lhe o livro.", "Я дав/дала йому/їй книжку.", { variety: "PT", purpose: "comprehension" }),
        ex("Entreguei-lhe o documento.", "Я передав/передала йому/їй документ.", { variety: "PT", purpose: "comprehension" })
      ] }
    ],
    examples: [
      ex("Dei o documento ao diretor.", "Я дав/дала документ директорові.", { purpose: "production" }),
      ex("Enviei uma mensagem à Ana.", "Я надіслав/надіслала повідомлення Ані.", { purpose: "production" }),
      ex("Expliquei a situação ao João.", "Я пояснив/пояснила ситуацію Жуану.", { purpose: "production" }),
      ex("Coloquei o livro na mesa.", "Я поклав/поклала книжку на стіл.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("називати всі три аргументи «додатками одного типу»", "розрізняти прямий об'єкт, прийменниковий аргумент і семантичні ролі", "o livro та ao aluno мають різну синтаксичну реалізацію.", "editorial", "high"),
      mistake("вважати будь-яку групу з a непрямим додатком", "перевіряти валентну модель конкретного дієслова", "a може бути частиною різних конструкцій і не має одного синтаксичного значення.", "predicted-l1-transfer", "high"),
      mistake("виводити португальську рамку з українського давального", "вчити дієслово разом із моделлю", "Український давальний не дає автоматичної інструкції для португальського a.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська часто виражає адресата давальним відмінком: «дати книжку Ані». У португальській типова модель використовує a: dar o livro à Ana. Це хороша паралель на рівні значення, але не на рівні форми.",
    regional: "Реалізація адресата може залежати від дієслова, регістру та різновиду. Особливо обережно треба ставитися до перенесення бразильських моделей клітиків на PT-PT.",
    brPt: "У PT-BR у живій мові поряд із традиційними прийменниковими моделями поширені інші способи реалізації об'єктів, зокрема через особові займенники та прийменникові конструкції. У PT-PT клитики та традиційна система непрямих об'єктів мають інший розподіл.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Ciberdúvidas — Regência", url: CIBERDUVIDAS_REG }
    ]
  }),

  page({
    id: "verb-complement-types", slug: "verb-complement-types", category: "valency",
    titleUk: "Типи дієслівних доповнень",
    titlePt: "Tipos de complementos verbais",
    titleEn: "Verb complement types",
    summary: "NP, PP, підрядні частини та інфінітивні структури як різні способи реалізації аргументів дієслова.",
    aliases: ["типи доповнень", "verb complement types", "complementos verbais", "NP PP infinitive"],
    related: ["verb-valency-frames", "verb-valency-arguments", "complement-clauses", "verb-government-infinitive", "government-overview"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Дієслівне доповнення — це не один-єдиний тип конструкції. Аргумент може бути іменною групою, прийменниковою групою, підрядною частиною або інфінітивною конструкцією. Різні типи не взаємозамінні лише тому, що український переклад здається однаковим. Наприклад, lembrar-se de algo, esperar que alguém venha і começar a trabalhar мають різні формальні моделі.",
    definition: "Тип доповнення — формальний спосіб, у який аргумент або інший вибраний дієсловом компонент реалізується в синтаксисі.",
    formation: "Для практичного аналізу корисно поставити три питання: що вибирає дієслово; якою формою реалізується цей компонент; чи можна замінити його іншою конструкцією без зміни значення або рамки. NP: Comprei o livro. PP: Preciso de ajuda. Підрядна частина: Espero que venhas. Інфінітив: Quero sair.",
    uses: [
      { title: "Іменна група", body: "Прямий або інший nominal complement може бути NP.", examples: [
        ex("Li o artigo.", "Я прочитав/прочитала статтю.", { purpose: "production" }),
        ex("Conheço a cidade.", "Я знаю місто.", { purpose: "production" })
      ] },
      { title: "Прийменникова група", body: "Деякі дієслова лексично вимагають або допускають PP.", examples: [
        ex("Preciso de ajuda.", "Мені потрібна допомога.", { purpose: "production" }),
        ex("Confio em ti.", "Я довіряю тобі.", { variety: "PT", purpose: "production" })
      ] },
      { title: "Підрядна частина", body: "Пропозиційний зміст може бути виражений finite clause.", examples: [
        ex("Espero que ele venha.", "Я сподіваюся, що він прийде.", { purpose: "production" }),
        ex("Sei que ela trabalha aqui.", "Я знаю, що вона тут працює.", { purpose: "comprehension" })
      ] },
      { title: "Інфінітив", body: "Інфінітив може бути доповненням після дієслова з певною моделлю.", examples: [
        ex("Quero sair.", "Я хочу піти.", { purpose: "production" }),
        ex("Comecei a estudar.", "Я почав/почала вчитися.", { purpose: "production" })
      ] },
      { title: "Не плутати complement і modifier", body: "Не кожен компонент після дієслова є його доповненням.", examples: [
        ex("Trabalho em Lisboa.", "Я працюю в Лісабоні.", { purpose: "contrast" }),
        ex("Trabalho de manhã.", "Я працюю вранці.", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Li o artigo.", "Я прочитав/прочитала статтю.", { purpose: "production" }),
      ex("Preciso de ajuda.", "Мені потрібна допомога.", { purpose: "production" }),
      ex("Espero que ele venha.", "Я сподіваюся, що він прийде.", { purpose: "production" }),
      ex("Quero sair.", "Я хочу піти.", { purpose: "production" }),
      ex("Trabalho de manhã.", "Я працюю вранці.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("вважати NP, PP і clause просто різними перекладами одного додатка", "запам'ятовувати синтаксичну рамку", "Тип доповнення визначається граматикою конкретної конструкції.", "predicted-l1-transfer", "high"),
      mistake("вважати будь-який PP доповненням", "перевіряти, чи прийменник вибраний дієсловом", "Часові та локативні PP часто є модифікаторами.", "editorial", "high"),
      mistake("вважати будь-який інфінітив взаємозамінним із que + conjuntivo", "вивчати модель конкретного предиката", "Вибір між infinitivo та finite clause залежить від конструкції й значення.", "editorial", "high")
    ],
    ukrainian: "В українській також є іменні, прийменникові, інфінітивні та підрядні доповнення. Водночас португальський вибір прийменника або способу підрядності часто не збігається з українським.",
    regional: "Типи доповнень є загальною частиною португальської синтаксичної системи. Конкретна лексична рамка може мати регіональну або стилістичну варіантність.",
    brPt: "PT-BR та PT-PT можуть відрізнятися в реалізації займенникових аргументів, клитиків і деяких прийменникових моделей, але базове розрізнення NP/PP/clause/infinitive зберігається.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),

  page({
    id: "verb-clitic-frames", slug: "verb-clitic-frames", category: "valency",
    titleUk: "Валентність і клітики",
    titlePt: "Valência e clíticos",
    titleEn: "Valency and clitics",
    summary: "Як аргументна роль і валентна рамка пов'язані з формою o, a, os, as, lhe, lhes та позицією клітика.",
    aliases: ["валентність і клітики", "verb clitic frames", "valência e clíticos", "clitic valency"],
    related: ["verb-valency-frames", "verb-valency-arguments", "clitic-placement", "lhe-vs-o", "verb-ditransitive-frames"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Клітик не вибирається лише за значенням «його/їй». Його форма пов'язана із синтаксичною функцією, валентною рамкою, родом і числом референта та різновидом португальської. У PT-PT O professor deu-lhe o livro lhe відповідає адресату, тоді як O professor deu-o ao aluno o відповідає переданому предмету. Вивчення клітиків без валентної рамки часто створює механічні помилки.",
    definition: "Валентно-клитична рамка — опис того, як аргумент певного предиката реалізується клитичним займенником, з урахуванням його синтаксичної функції та форми.",
    formation: "Спочатку визначте роль аргумента: прямий об'єкт чи непрямий/прийменниковий аргумент. Потім визначте форму клітика. Для прямого об'єкта типовими є o, a, os, as; для непрямого аргумента — lhe, lhes у відповідних моделях. Позиція клітика — окрема змінна: mesoclise, ênclise та próclise залежать від синтаксичного середовища й різновиду.",
    uses: [
      { title: "Прямий об'єкт", body: "Клитик узгоджується з родом і числом референта прямого об'єкта.", examples: [
        ex("Vi o filme e vi-o ontem.", "Я подивився/подивилася фільм і подивився/подивилася його вчора.", { variety: "PT", purpose: "comprehension" }),
        ex("Comprei as revistas e comprei-as ontem.", "Я купив/купила журнали й купив/купила їх учора.", { variety: "PT", purpose: "comprehension" })
      ] },
      { title: "Непрямий аргумент", body: "У моделях із адресатом lhe/lhes може кодувати отримувача або адресата.", examples: [
        ex("Dei-lhe o livro.", "Я дав/дала йому/їй книжку.", { variety: "PT", purpose: "production" }),
        ex("Enviei-lhes uma mensagem.", "Я надіслав/надіслала їм повідомлення.", { variety: "PT", purpose: "production" })
      ] },
      { title: "Два аргументи", body: "Дитранзитивна рамка дозволяє побачити, чому два об'єкти не мають однакової клитичної форми.", examples: [
        ex("Dei-o à Ana.", "Я дав/дала його Ані.", { variety: "PT", purpose: "contrast" }),
        ex("Dei-lhe o livro.", "Я дав/дала їй книжку.", { variety: "PT", purpose: "contrast" })
      ] },
      { title: "Форма та позиція — різні питання", body: "Спочатку встановлюється форма клітика, а потім його позиція в конструкції.", examples: [
        ex("Não lhe dei o livro.", "Я не дав/дала йому/їй книжку.", { variety: "PT", purpose: "production" }),
        ex("Dei-lhe o livro.", "Я дав/дала йому/їй книжку.", { variety: "PT", purpose: "production" })
      ] }
    ],
    examples: [
      ex("Dei-lhe o livro.", "Я дав/дала йому/їй книжку.", { variety: "PT", purpose: "production" }),
      ex("Dei-o à Ana.", "Я дав/дала його Ані.", { variety: "PT", purpose: "contrast" }),
      ex("Enviei-lhes uma mensagem.", "Я надіслав/надіслала їм повідомлення.", { variety: "PT", purpose: "production" }),
      ex("Não lhe dei o livro.", "Я не дав/дала йому/їй книжку.", { variety: "PT", purpose: "production" })
    ],
    mistakes: [
      mistake("вибирати lhe лише за українським «йому/їй»", "спочатку визначати синтаксичну роль аргумента", "Український давальний не гарантує португальського lhe в кожній конструкції.", "predicted-l1-transfer", "high"),
      mistake("плутати o як артикль і o як займенниковий клітик", "визначати частину мови за синтаксичною позицією", "У Dei-o o є клітиком, а в o livro — артиклем.", "predicted-l1-transfer", "high"),
      mistake("вивчати форму клітика без правил його позиції", "розділяти форму, функцію і placement", "Одна форма може з'являтися в різних позиціях залежно від конструкції.", "editorial", "high")
    ],
    ukrainian: "Українські особові займенники мають відмінкові форми, тому функціональна аналогія з португальськими клітиками корисна. Але португальська система клитиків має власні морфологічні та позиційні правила, яких не можна вивести з українського відмінювання.",
    regional: "Клитична система особливо чутлива до різновиду. Частотність і допустимість окремих позицій та форм відрізняються між PT-PT і PT-BR.",
    brPt: "У PT-PT традиційні клитичні конструкції є центральною частиною письмової та формальної норми. У PT-BR у багатьох розмовних контекстах частіше використовуються інші стратегії об'єктної реалізації, зокрема переддієслівні займенники та нульові об'єкти. Це не означає, що одна система просто «правильна», а інша «неправильна».",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Ciberdúvidas — Regência", url: CIBERDUVIDAS_REG }
    ]
  }),

  page({
    id: "verb-meaning-alternations", slug: "verb-meaning-alternations", category: "valency",
    titleUk: "Зміна рамки зі зміною значення",
    titlePt: "Alternâncias de regência e significado",
    titleEn: "Meaning and valency alternations",
    summary: "Як зміна валентної рамки може супроводжувати зміну значення, аргументної структури або конструкції.",
    aliases: ["зміна рамки", "valency alternations", "alternâncias de regência", "meaning alternations"],
    related: ["verb-valency-frames", "verb-government-alternations", "government-overview", "false-friends", "verb-preposition"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Одна словникова форма дієслова може входити до кількох конструкцій, але це не означає, що всі вони є вільними варіантами. Зміна прийменника, типу complement або структури може супроводжувати зміну значення. Для студента важливо бачити зв'язок «значення → рамка», а не запам'ятовувати прийменники ізольовано. Наприклад, pensar em alguém і pensar em fazer algo мають спільну прийменникову форму, але різні типи аргументів; інші дієслова можуть демонструвати значно сильніші alternâncias.",
    definition: "Валентна альтернація — систематична зміна аргументної або синтаксичної рамки, пов'язана зі зміною значення, конструкції, регістру чи іншою граматичною умовою.",
    formation: "Порівнюйте не окремі прийменники, а повні рамки. Для кожної моделі запитайте: яке значення має дієслово; хто його аргументи; який тип complement; який прийменник; чи змінюється референт або семантична роль. Якщо дві рамки відрізняються лише стилістично, це не те саме, що лексико-семантична альтернація.",
    uses: [
      { title: "Зміна типу complement", body: "Один предикат може комбінуватися з іменною групою або пропозиційним змістом у різних конструкціях.", examples: [
        ex("Ele decidiu o destino.", "Він вирішив долю/місце призначення.", { purpose: "contrast" }),
        ex("Ele decidiu partir.", "Він вирішив вирушити.", { purpose: "contrast" })
      ] },
      { title: "Зміна значення через рамку", body: "Прийменник або структура може бути частиною лексичного значення.", examples: [
        ex("Lembro-me do nome.", "Я пам'ятаю ім'я.", { variety: "PT", purpose: "production" }),
        ex("Esqueci o nome.", "Я забув/забула ім'я.", { purpose: "contrast" })
      ] },
      { title: "Одна форма, різні аргументи", body: "Те саме дієслово може відкривати різні типи аргументів без повної зміни лексеми.", examples: [
        ex("Pensei no problema.", "Я подумав/подумала про проблему.", { purpose: "production" }),
        ex("Pensei em sair cedo.", "Я подумав/подумала піти раніше.", { purpose: "production" })
      ] },
      { title: "Регіональна або стилістична альтернація", body: "Варіантність не завжди означає різницю значення; інколи вона пов'язана з різновидом або регістром.", examples: [
        ex("Telefonei ao João.", "Я зателефонував/зателефонувала Жуану.", { variety: "PT", purpose: "comprehension" }),
        ex("Liguei para o João.", "Я зателефонував/зателефонувала Жуану.", { variety: "BR", purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Ele decidiu partir.", "Він вирішив вирушити.", { purpose: "production" }),
      ex("Lembro-me do nome.", "Я пам'ятаю ім'я.", { variety: "PT", purpose: "production" }),
      ex("Pensei no problema.", "Я подумав/подумала про проблему.", { purpose: "production" }),
      ex("Pensei em sair cedo.", "Я подумав/подумала піти раніше.", { purpose: "production" }),
      ex("Telefonei ao João.", "Я зателефонував/зателефонувала Жуану.", { variety: "PT", purpose: "contrast" }),
      ex("Liguei para o João.", "Я зателефонував/зателефонувала Жуану.", { variety: "BR", purpose: "contrast" })
    ],
    mistakes: [
      mistake("вважати будь-яку зміну прийменника зміною значення", "перевіряти лексичне значення, регістр і різновид", "Деякі альтернативи є регіональними або стилістичними, а не семантично різними.", "editorial", "high"),
      mistake("вважати дві рамки взаємозамінними через однаковий переклад", "порівнювати повну конструкцію", "Одна українська формула може відповідати кільком португальським моделям.", "predicted-l1-transfer", "high"),
      mistake("запам'ятовувати прийменник окремо від дієслова", "вчити дієслово + frame + значення як одну одиницю", "Це зменшує ризик калькування з української.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Український переклад часто приховує португальську різницю рамок. Наприклад, українське «думати про» може відповідати різним португальським моделям залежно від того, чи аргумент є іменною групою, чи інфінітивною конструкцією.",
    regional: "Альтернації керування особливо важливо перевіряти на матеріалі конкретного різновиду. Форма, типова для PT-BR, не повинна без позначки подаватися як єдина модель для всього португаломовного світу.",
    brPt: "Приклад telefonei ao João / liguei para o João ілюструє, що лексичний вибір може бути різним за різновидами. Такі випадки треба маркувати як варіантність, а не механічно виправляти один варіант іншим.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Ciberdúvidas — Regência", url: CIBERDUVIDAS_REG },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  })
];
