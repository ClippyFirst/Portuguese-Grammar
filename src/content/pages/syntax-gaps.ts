import type { GrammarPage } from "../types";
import { mistake } from "../helpers";

const draft = (p: GrammarPage): GrammarPage => ({ ...p, status: "draft", origin: "handwritten" });

export const pages: GrammarPage[] = [
  draft({
    id: "null-and-expletive-subjects", slug: "null-expletive", category: "syntax",
    titleUk: "Типи нульового підмета", titlePt: "Tipos de sujeito nulo", titleEn: "Types of null subjects",
    summary: "Як розрізняти конкретний нульовий підмет, невизначений нульовий підмет і безреферентний експлетивний випадок.",
    aliases: ["null subject types","definite null subject","expletive subject","sujeito nulo"],
    related: ["null-subject","definite-null-subjects","indefinite-null-subjects","expletive-null-subjects","impersonal-constructions"],
    depth: "high", ukrainianContrast: "high",
    intro: "Нульовий підмет не є однією-єдиною конструкцією. У Cheguei cedo підмет конкретний і відновлюється як eu; у A Maria entrou e Ø sentou-se він конкретний і відновлюється з дискурсу; у Há muitas pessoas немає прихованого «воно», яке можна було б підставити як звичайний референтний підмет. Для правильного аналізу спочатку треба встановити, чи має нульова позиція референт, а вже потім питати, чому підмет не виражений.",
    definition: "Типи нульового підмета розрізняються за наявністю референта та способом його інтерпретації. Definite null subject має конкретного референта; indefinite null subject не ідентифікує конкретного учасника; expletive null subject не має референтного змісту.",
    formation: "У референтних випадках референт відновлюється з особових ознак дієслова або дискурсу: Cheguei → eu, A Maria entrou e Ø saiu → A Maria. У невизначених конструкціях інтерпретація ближча до «хтось/люди/вони взагалі», а в безособових конструкціях синтаксична позиція не відповідає конкретному учаснику ситуації. Не можна визначати тип лише за тим, що займенник відсутній.",
    uses: [
      { title: "Визначений нульовий підмет", body: "Конкретний учасник зрозумілий із морфології або попереднього контексту.", examples: [{pt:"Cheguei cedo.",uk:"Я прийшов/прийшла рано.",purpose:"production"},{pt:"A Maria entrou e Ø sentou-se.",uk:"Марія увійшла і сіла.",purpose:"production"}] },
      { title: "Невизначений нульовий підмет", body: "Дія приписується неідентифікованим людям або невизначеному агенту.", examples: [{pt:"Bateram à porta.",uk:"Постукали у двері.",purpose:"comprehension"},{pt:"Dizem que vai chover.",uk:"Кажуть, що буде дощ.",purpose:"comprehension"}] },
      { title: "Експлетивний випадок", body: "Подія описується без референтного суб'єкта, як у погодних і деяких екзистенційних конструкціях.", examples: [{pt:"Choveu muito ontem.",uk:"Учора сильно дощило.",purpose:"production"},{pt:"Há muita gente aqui.",uk:"Тут багато людей.",purpose:"contrast"}] },
      { title: "Чому тип має значення", body: "Вибір між типами визначає переклад, синтаксичний аналіз і зв'язок із узгодженням.", examples: [{pt:"Eles chegaram cedo.",uk:"Вони прийшли рано.",purpose:"contrast"},{pt:"Chegaram cedo.",uk:"Вони прийшли рано / прийшли рано.",purpose:"contrast"}] }
    ],
    examples: [
      {pt:"Cheguei cedo.",uk:"Я прийшов/прийшла рано.",purpose:"production"},
      {pt:"A Maria entrou e Ø sentou-se.",uk:"Марія увійшла і сіла.",purpose:"production"},
      {pt:"Bateram à porta.",uk:"Постукали у двері.",purpose:"comprehension"},
      {pt:"Dizem que vai chover.",uk:"Кажуть, що буде дощ.",purpose:"comprehension"},
      {pt:"Choveu muito ontem.",uk:"Учора сильно дощило.",purpose:"production"},
      {pt:"Há muita gente aqui.",uk:"Тут багато людей.",purpose:"contrast"}
    ],
    mistakes: [
      mistake("вважати кожен пропуск займенника одним типом нульового підмета","спершу визначати референтність","Cheguei, Bateram і Choveu мають різний синтаксичний та семантичний статус.","editorial","high"),
      mistake("вставляти ele/ela у погодні та безособові конструкції","відрізняти безреферентні конструкції від референтного pro-drop","У Choveu немає прихованого конкретного учасника.","predicted-l1-transfer","high"),
      mistake("перекладати Bateram обов'язково як «вони постукали»","зберігати невизначеність агента, якщо контекст її не знімає","Португальська форма може не ідентифікувати конкретних виконавців.","predicted-l1-transfer","high")
    ],
    ukrainian: "Українська теж має нульові підмети: «Прийшов рано», «Постукали», «Дощило». Тому базова ідея знайома. Водночас португальський аналіз вимагає точніше розрізняти референтний pro-drop, невизначену особу та безособову конструкцію.",
    regional: "Типологія нульових підметів застосовна до португаломовних різновидів, але частотність явного займенника та окремих безособових моделей відрізняється.",
    brPt: "PT-BR частіше використовує явні суб'єктні займенники, ніж PT-PT, особливо в розмовному мовленні, але нульові референтні та невизначені конструкції залишаються продуктивними.",
    sources: [
      {label:"Ciberdúvidas — Sujeito nulo subentendido",url:"https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/sujeito-nulo-subentendido/30517"},
      {label:"Ciberdúvidas — Sujeito subentendido",url:"https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/sujeito-obrigatorio/37247"}
    ]
  }),
  draft({
    id: "subject-object-order", slug: "subject-object-order", category: "syntax",
    titleUk: "Порядок підмета й додатка", titlePt: "Ordem de sujeito e objeto", titleEn: "Subject-object order",
    summary: "Нейтральний SVO та мотивовані зміни порядку підмета й додатка.",
    aliases: ["subject object order","word order","SVO","ordem sujeito objeto"],
    related: ["word-order","subject-placement","topicalization","information-structure","brazilian-topic-subject"],
    depth: "high", ukrainianContrast: "high",
    intro: "У португальській порядок слів є важливим сигналом синтаксичної ролі, хоча він не є абсолютно фіксованим. Для транзитивного речення нейтральною навчальною моделлю є SVO: A Ana leu o livro. Проте топікалізація, фокус, постпозиція підмета, тип дієслова та інформаційна структура можуть змінювати поверхневий порядок. Українська через відмінки дозволяє більше перестановок без зміни базових ролей, тому прямий перенос української свободи порядку може створювати марковану або двозначну португальську фразу.",
    definition: "Порядок підмета й додатка — спосіб розміщення основних аргументів відносно дієслова; його треба аналізувати разом із синтаксисом та інформаційною структурою.",
    formation: "Починайте з A Ana leu o livro. Якщо o livro винести в початок як тему, з'являється Este livro, a Ana já leu. Якщо змінюється інформаційний фокус або тип предиката, можливі інші порядки. Перестановка не є просто стилістичною заміною: вона може змінювати фокус, референцію або природність речення.",
    uses: [
      {title:"Нейтральний SVO",body:"Підмет стоїть перед дієсловом, прямий додаток — після нього.",examples:[{pt:"A Ana leu o livro.",uk:"Ана прочитала книжку.",purpose:"production"}]},
      {title:"Додаток як тема",body:"Додаток може бути винесений уперед, а його синтаксична роль зберігається.",examples:[{pt:"Este livro, a Ana já leu.",uk:"Цю книжку Ана вже прочитала.",purpose:"contrast"}]},
      {title:"Постпозиція підмета",body:"У певних предикатах і дискурсивних умовах підмет може стояти після дієслова.",examples:[{pt:"Chegou a Ana.",uk:"Прийшла Ана.",purpose:"comprehension"}]},
      {title:"Роль інформаційної структури",body:"Тема і фокус можуть мотивувати порядок, який не є нейтральним SVO.",examples:[{pt:"O livro, a Ana comprou ontem.",uk:"Книжку Ана купила вчора.",purpose:"contrast"}]}
    ],
    examples:[
      {pt:"A Ana leu o livro.",uk:"Ана прочитала книжку.",purpose:"production"},
      {pt:"Este livro, a Ana já leu.",uk:"Цю книжку Ана вже прочитала.",purpose:"contrast"},
      {pt:"Chegou a Ana.",uk:"Прийшла Ана.",purpose:"comprehension"}
    ],
    mistakes:[
      mistake("вважати будь-який порядок із правильними відмінками українською автоматично нейтральним португальською","починати з базової SVO-моделі","Португальська сильніше покладається на порядок, прийменники та контекст.","predicted-l1-transfer","high"),
      mistake("вважати винесення додатка вперед звичайною перестановкою","аналізувати його як topicalization або іншу інформаційно мотивовану конструкцію","Este livro, a Ana já leu має дискурсивну функцію.","editorial","high"),
      mistake("вважати постпозицію підмета універсальною","перевіряти тип предиката та інформаційну структуру","Chegou a Ana і A Ana chegou не завжди мають однаковий дискурсивний ефект.","documented","high")
    ],
    ukrainian:"Українська має відмінки, тому «Ана прочитала книжку» і деякі перестановки зберігають ролі без додаткового маркування. У португальській порядок частіше бере на себе частину цієї роботи.",
    regional:"PT-BR і PT-PT мають спільний базовий SVO, але відрізняються частотністю деяких постпозицій підмета, топікальних конструкцій та розмовних порядків.",
    brPt:"У PT-BR особливо важливо розрізняти нейтральний SVO, topicalization та topic-subject constructions. Останні не слід ототожнювати з простою перестановкою додатка.",
    sources:[
      {label:"Ciberdúvidas — Ordem canónica das frases",url:"https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/ordem-canonica-das-frases/22041"}
    ]
  }),
  draft({
    id:"subordination-and-coordination",slug:"subordination-coordination",category:"syntax",
    titleUk:"Координація і субординація",titlePt:"Coordenação e subordinação",titleEn:"Coordination and subordination",
    summary:"Як відрізняти рівноправне поєднання частин від синтаксичної залежності.",
    aliases:["coordination","subordination","coordenação","subordinação"],
    related:["coordination","subordinating","complement-clauses","relative-que","sentence-basics"],
    depth:"high",ukrainianContrast:"high",
    intro:"Координація та субординація — не просто два списки сполучників. У Cheguei e sentei-me дві частини координовані: жодна не є синтаксичним компонентом іншої. У Quando cheguei, ele saiu підрядна частина коли я прийшов/прийшла задає часову рамку для головної. У Quero que venhas підрядна частина є доповненням предиката. Отже, тип зв'язку треба визначати за структурою та функцією, а не лише за формою сполучника.",
    definition:"Координація поєднує синтаксично рівноправні або відносно незалежні компоненти; субординація створює залежну частину, яка виконує певну синтаксичну роль або модифікує іншу частину.",
    formation:"Координація часто використовує e, mas, ou та інші coordinating conjunctions. Субординація може вводитися quando, porque, embora, se, que, para que та іншими засобами. Однак одна й та сама семантична функція може реалізуватися кількома структурами, тому форму сполучника не слід використовувати як єдиний діагностичний тест.",
    uses:[
      {title:"Координація",body:"Частини мають паралельний синтаксичний статус.",examples:[{pt:"Cheguei e sentei-me.",uk:"Я прийшов/прийшла і сів/сіла.",purpose:"production"},{pt:"Queres chá ou café?",uk:"Ти хочеш чай чи каву?",purpose:"production"}]},
      {title:"Часова субординація",body:"Одна частина задає часову рамку іншій.",examples:[{pt:"Quando cheguei, ele saiu.",uk:"Коли я прийшов/прийшла, він вийшов.",purpose:"production"}]},
      {title:"Причинна субординація",body:"Підрядна частина виражає причину.",examples:[{pt:"Fiquei em casa porque estava doente.",uk:"Я залишився/залишилася вдома, бо був/була хворий/хвора.",purpose:"production"}]},
      {title:"Доповнювальна субординація",body:"Підрядна частина може бути аргументом предиката.",examples:[{pt:"Quero que venhas.",uk:"Я хочу, щоб ти прийшов/прийшла.",purpose:"contrast"}]}
    ],
    examples:[
      {pt:"Cheguei e sentei-me.",uk:"Я прийшов/прийшла і сів/сіла.",purpose:"production"},
      {pt:"Quando cheguei, ele saiu.",uk:"Коли я прийшов/прийшла, він вийшов.",purpose:"production"},
      {pt:"Fiquei em casa porque estava doente.",uk:"Я залишився/залишилася вдома, бо був/була хворий/хвора.",purpose:"production"},
      {pt:"Quero que venhas.",uk:"Я хочу, щоб ти прийшов/прийшла.",purpose:"contrast"}
    ],
    mistakes:[
      mistake("називати будь-яке речення з двома дієсловами координацією","визначати синтаксичну залежність частин","У Quero que venhas підрядна частина є доповненням Quero.","editorial","high"),
      mistake("вибирати сполучник лише за українським перекладом","спершу визначати логічне та синтаксичне відношення","«Бо», «коли», «щоб» можуть відповідати різним португальським конструкціям залежно від значення.","predicted-l1-transfer","high"),
      mistake("ототожнювати всі que-конструкції","аналізувати функцію que та тип підрядності","que може вводити доповнювальну частину, але його функція залежить від структури.","documented","high")
    ],
    ukrainian:"Українська має той самий фундаментальний поділ на сурядність і підрядність. Тому логіка знайома, але португальські сполучники, порядок слів, режим способу та пунктуація мають власні правила.",
    regional:"Базовий поділ спільний для PT-BR та PT-PT. Відмінності частіше стосуються окремих сполучників, розмовної синтаксичної реалізації та вживання способів.",
    brPt:"У PT-BR розмовна мова допускає ширший набір конструкцій із явними суб'єктами та деякі специфічні стратегії зв'язування частин; це не скасовує базового distinction coordination/subordination.",
    sources:[
      {label:"Dicionário Terminológico — Direção-Geral da Educação",url:"https://area.dge.mec.pt/gramatica/DT_2008.pdf"}
    ]
  })
];
