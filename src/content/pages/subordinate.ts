import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_II = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const CAMOES_PLE = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "complement-clauses", slug: "complement", category: "subordinate",
    titleUk: "Підрядні додаткові речення", titlePt: "Orações completivas", titleEn: "Complement clauses",
    summary: "Підрядні конструкції, які реалізують аргументну позицію дієслова, прикметника або іменника.",
    aliases: ["підрядні додаткові", "complement clauses", "orações completivas", "que", "se"],
    related: ["indicative-vs-subjunctive", "infinitive-vs-subjunctive", "personal-infinitive", "subordinating"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Доповнювальна підрядна не є просто «реченням після дієслова». Вона займає аргументну позицію, яку предикат відкриває для змісту думки, знання, бажання, повідомлення, оцінки або іншої ситуації. Тому форма залежної частини визначається не одним сполучником que, а всією конструкцією: значенням головного предиката, типом залежності, кореферентністю суб'єктів і вибором indicativo, conjuntivo або infinitivo.",
    definition: "Доповнювальна підрядна — залежна клауза, яка реалізує змістовий аргумент предиката або іншого слова, що допускає клаузальне доповнення.",
    uses: [
      { title: "Знання, сприйняття, повідомлення", body: "Предикати знання та повідомлення зазвичай вводять пропозиційний зміст; у таких конструкціях indicativo подає ситуацію як твердження, яке мовець розглядає як факт або інформацію.", examples: [ex("Sei que ele trabalha aqui.", "Я знаю, що він працює тут."), ex("Disseram que o projeto começou.", "Сказали, що проєкт почався.")] },
      { title: "Воля, бажання, оцінка", body: "Предикати волі, вимоги, бажання та низка оцінних конструкцій можуть ліцензувати conjuntivo в залежній частині.", examples: [ex("Quero que ele venha.", "Я хочу, щоб він прийшов."), ex("É importante que todos participem.", "Важливо, щоб усі взяли участь.")] },
      { title: "Спільний суб'єкт і infinitivo", body: "Інфінітивна конструкція часто є природним способом виразити залежну дію, особливо коли її суб'єкт контролюється тим самим учасником, що й у головній частині.", examples: [ex("Quero estudar mais.", "Я хочу більше вчитися."), ex("É importante estudar.", "Важливо вчитися.")] }
    ],
    examples: [
      ex("Acho que ela tem razão.", "Думаю, що вона має рацію.", { purpose: "comprehension" }),
      ex("Espero que tenhas tempo.", "Сподіваюся, що ти матимеш час.", { purpose: "production" }),
      ex("Eles decidiram sair cedo.", "Вони вирішили вийти рано.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("вибирати indicativo або conjuntivo лише за перекладом «що/щоб»", "визначати значення головного предиката та тип залежності", "Українські сполучники не утворюють прямої таблиці відповідників португальських способів.", "predicted-l1-transfer", "high"),
      mistake("вважати infinitivo лише «скороченим» реченням із que", "перевіряти суб'єкт, контроль і синтаксичну рамку", "Інфінітивна конструкція має власну синтаксичну організацію.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українські «що», «щоб» і конструкції з інфінітивом допомагають розпізнати залежність, але не передбачають португальський спосіб механічно. Особливо важливо не ототожнювати українське «щоб» з будь-яким одним португальським шаблоном.",
    regional: "Розподіл infinitivo, особового infinitivo та фінітних конструкцій залежить від лексичної рамки й різновиду португальської; регіональні відмінності слід перевіряти для конкретного дієслова або моделі.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "causal-clauses", slug: "causal", category: "subordinate",
    titleUk: "Причинові підрядні", titlePt: "Orações causais", titleEn: "Causal clauses",
    summary: "Конструкції, що пояснюють причину, підставу або обґрунтування іншої ситуації.",
    aliases: ["причинові підрядні", "causal clauses", "orações causais", "porque", "como", "visto que"],
    related: ["consecutive-clauses", "purpose-clauses", "subordinating"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Причиновий зв'язок відповідає на питання про підставу або причину ситуації. Найпоширеніший засіб — porque, але система ширша: pois, como, visto que, já que та інші конструкції мають власні позиційні, стилістичні або дискурсивні властивості. Важливо відрізняти причинний зв'язок від наслідкового: причина пояснює, чому виникла ситуація, а наслідок описує те, що з неї випливає.",
    definition: "Причинове підрядне — залежна клауза, яка подає причину, підставу або обґрунтування ситуації головної частини.",
    uses: [
      { title: "Пряма причина", body: "Porque може вводити причину після твердження.", examples: [ex("Fiquei em casa porque estava doente.", "Я залишився/залишилася вдома, бо був/була хворий/хвора.")] },
      { title: "Причина як уже відома підстава", body: "Як і вже, já que або visto que можуть подавати підставу як доступну з контексту чи очевидну для співрозмовника.", examples: [ex("Já que estás aqui, ajuda-me.", "Раз ти вже тут, допоможи мені.")] },
      { title: "Причина на початку висловлення", body: "Деякі причинні конструкції природно стоять перед головною частиною, створюючи рамку для подальшого твердження.", examples: [ex("Como estava a chover, ficámos em casa.", "Оскільки йшов дощ, ми залишилися вдома.")] }
    ],
    examples: [
      ex("Não fui porque estava cansado.", "Я не пішов/пішла, бо був/була втомлений/втомлена.", { purpose: "comprehension" }),
      ex("Como não havia transporte, fomos a pé.", "Оскільки не було транспорту, ми пішли пішки.", { purpose: "contrast" }),
      ex("Visto que o prazo terminou, não podemos alterar o pedido.", "Оскільки строк закінчився, ми не можемо змінити запит.", { purpose: "production" })
    ],
    mistakes: [
      mistake("плутати causa з consequência", "поставити питання «чому?» і «що стало результатом?»", "Porque та конструкції наслідку виконують протилежні семантичні ролі.", "predicted-l1-transfer", "high"),
      mistake("вважати porque єдиним причинним засобом", "розрізняти базовий сполучник і стилістично/дискурсивно марковані альтернативи", "Різні причинні засоби не завжди взаємозамінні у всіх позиціях.", "editorial", "medium")
    ],
    ukrainian: "Українські «бо», «тому що», «оскільки», «через те що» дають добру функціональну орієнтацію. Проте їхня позиція й стилістичний розподіл не є готовою схемою для португальської.",
    regional: "Вибір causal connective чутливий до регістру, позиції підрядної та дискурсивного статусу причини. Не варто подавати всі засоби як стилістично нейтральні синоніми.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "purpose-clauses", slug: "purpose", category: "subordinate",
    titleUk: "Підрядні мети", titlePt: "Orações finais", titleEn: "Purpose clauses",
    summary: "Конструкції, що виражають мету або намір, заради якого виконується дія.",
    aliases: ["мета", "purpose clauses", "orações finais", "para que", "para + infinitivo"],
    related: ["complement-clauses", "infinitive-vs-subjunctive", "prep-para"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Підрядна мети описує бажаний або запланований результат, заради якого відбувається дія головної частини. У португальській особливо важлива опозиція para + infinitivo та para que + conjuntivo. Вона пов'язана не лише з формальною різницею «однаковий чи різний підмет», а й із контролем суб'єкта та структурою предикації.",
    definition: "Підрядна мети — залежна конструкція, яка виражає ціль, намір або бажаний результат дії головної частини.",
    uses: [
      { title: "Один контрольований учасник", body: "Коли виконавець обох дій той самий, природною є інфінітивна конструкція.", examples: [ex("Estudo para aprender.", "Я вчуся, щоб навчитися.")] },
      { title: "Окремий суб'єкт", body: "Коли в цільової ситуації є окремий суб'єкт, para que + conjuntivo чітко виражає його.", examples: [ex("Estudo para que os meus pais fiquem tranquilos.", "Я вчуся, щоб мої батьки були спокійні.")] },
      { title: "Мета як дискурсивний орієнтир", body: "Ціль може бути подана як запланований результат, навіть якщо фактичне досягнення цього результату не стверджується.", examples: [ex("Fechou a janela para não entrar frio.", "Він/вона зачинив/зачинила вікно, щоб не заходив холод.")] }
    ],
    examples: [
      ex("Trabalho para ganhar dinheiro.", "Я працюю, щоб заробляти гроші.", { purpose: "production" }),
      ex("Falei mais devagar para que todos entendessem.", "Я говорив/говорила повільніше, щоб усі зрозуміли.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("вважати para que обов'язковим у кожній конструкції мети", "спочатку перевіряти структуру суб'єктів і тип предикації", "Португальська має продуктивні інфінітивні конструкції мети.", "predicted-l1-transfer", "high"),
      mistake("перекладати українське «щоб» одним португальським шаблоном", "визначати, чи це мета, результат, умова або доповнення", "Український сполучник має ширший функціональний діапазон.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українське «щоб» може виражати мету, бажання, умову в окремих конструкціях та інші залежності. Тому перед перекладом потрібно визначити семантичний тип.",
    regional: "Інфінітивні конструкції та вибір фінітної форми можуть мати різну частотність залежно від різновиду португальської й лексичної рамки.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "conditional-clauses", slug: "conditional-clauses", category: "subordinate",
    titleUk: "Умовні речення", titlePt: "Orações condicionais", titleEn: "Conditional clauses",
    summary: "Конструкції, у яких одна ситуація подається як умова для іншої.",
    aliases: ["умовні речення", "conditional clauses", "orações condicionais", "se", "futuro do conjuntivo"],
    related: ["futuro-subjuntivo", "imperfeito-subjuntivo", "conditional-clauses", "subordinating"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Умовне речення встановлює зв'язок між умовою та наслідком. Португальська особливо важлива для україномовного студента через futuro do conjuntivo в реальних або відкритих майбутніх умовах та imperfeito do conjuntivo + condicional у гіпотетичних конструкціях. Тип умови не визначається лише словом se: треба враховувати час, спосіб, часову перспективу й ступінь гіпотетичності.",
    definition: "Умовна конструкція — складна конструкція, у якій виконання або припущення однієї ситуації створює умову для іншої.",
    uses: [
      { title: "Відкрита майбутня умова", body: "Для умови, яка розглядається як можлива в майбутньому, після se типовим є futuro do conjuntivo.", examples: [ex("Se tiveres tempo, liga-me.", "Якщо матимеш час, подзвони мені.")] },
      { title: "Гіпотетична умова", body: "Imperfeito do conjuntivo в умовній частині разом із condicional у наслідку створює гіпотетичну рамку.", examples: [ex("Se tivesse dinheiro, viajaria mais.", "Якби я мав/мала гроші, я б більше подорожував/подорожувала.")] },
      { title: "Минуле та нереалізована умова", body: "Для контрфактичних ситуацій минулого вживаються відповідні складені часові форми, а не просте механічне копіювання українського «якби».", examples: [ex("Se tivesse sabido, teria ficado.", "Якби я знав/знала, я б залишився/залишилася.")] }
    ],
    examples: [
      ex("Se chover, ficamos em casa.", "Якщо піде дощ, ми залишимося вдома.", { purpose: "production" }),
      ex("Se tiveres dúvidas, pergunta.", "Якщо матимеш сумніви, запитай.", { purpose: "comprehension" }),
      ex("Se estudasses mais, terias melhores resultados.", "Якби ти більше вчився/вчилася, мав/мала б кращі результати.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("вживати presente do conjuntivo після se для будь-якої майбутньої умови", "розрізняти майбутню відкриту умову та інші типи умов", "Futuro do conjuntivo має окрему роль у майбутніх умовних конструкціях.", "predicted-l1-transfer", "high"),
      mistake("перекладати «якби» через один час", "визначати часову перспективу та ступінь нереальності", "Умовні конструкції утворюють систему, а не одну формулу.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українські «якщо» і «якби» допомагають розрізняти відкриту та гіпотетичну умову. Однак португальський futuro do conjuntivo не має простого морфологічного відповідника в українській.",
    regional: "Основні умовні моделі є спільними для стандартної португальської, але частотність окремих часових комбінацій та розмовні альтернативи можуть відрізнятися за різновидом.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "concessive-clauses", slug: "concessive", category: "subordinate",
    titleUk: "Допустові підрядні", titlePt: "Orações concessivas", titleEn: "Concessive clauses",
    summary: "Конструкції, у яких певна обставина не перешкоджає очікуваному наслідку.",
    aliases: ["допустові підрядні", "concessive clauses", "orações concessivas", "embora", "apesar de"],
    related: ["subjunctive-triggers", "infinitive-prepositions", "causal-clauses"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Допустовий зв'язок повідомляє: певна ситуація існує, але вона не усуває іншої ситуації, яка могла б здаватися несумісною з нею. Embora типово поєднується з conjuntivo, тоді як apesar de утворює прийменникову конструкцію і може поєднуватися з іменною групою або infinitivo.",
    definition: "Допустова підрядна — залежна конструкція, яка позначає обставину, що не блокує очікуваний або стверджуваний наслідок.",
    uses: [
      { title: "Embora + conjuntivo", body: "Фінітна concessive-конструкція подає обставину як частину контрастивного зв'язку.", examples: [ex("Embora esteja cansado, vou trabalhar.", "Хоча я втомлений/втомлена, я піду працювати.")] },
      { title: "Apesar de + infinitivo", body: "При спільному контрольованому суб'єкті допустовий зв'язок може бути виражений через apesar de + infinitivo.", examples: [ex("Apesar de estar cansado, continuei.", "Попри втому, я продовжив/продовжила.")] },
      { title: "Контраст із причинністю", body: "Втома може бути причиною відпочинку, але в concessive-конструкції вона саме не запобігає іншій дії.", examples: [ex("Embora estivesse cansado, continuou.", "Хоча він був втомлений, він продовжив.")] }
    ],
    examples: [
      ex("Embora seja difícil, vale a pena.", "Хоча це важко, воно того варте.", { purpose: "comprehension" }),
      ex("Apesar de ter pouco tempo, terminou o trabalho.", "Попри те, що мав/мала мало часу, він/вона завершив/завершила роботу.", { purpose: "production" })
    ],
    mistakes: [
      mistake("ототожнювати concessão з causa", "перевіряти, чи обставина запобігає очікуваному наслідку", "У concessive-зв'язку важливим є саме невідповідність очікування та фактичного результату.", "predicted-l1-transfer", "high"),
      mistake("ставити indicativo після embora за аналогією з українським «хоча»", "розпізнавати стандартну конструкцію embora + conjuntivo", "Формальний розподіл способів не копіює українську конструкцію.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українські «хоча», «попри те що», «незважаючи на» добре передають функцію concessão. Проте португальські моделі відрізняються керуванням і вибором форми.",
    regional: "Окремі concessive-моделі мають різний регістр і синтаксичне керування. Не варто подавати embora та apesar de як взаємозамінні в усіх позиціях.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "temporal-clauses", slug: "temporal", category: "subordinate",
    titleUk: "Часові підрядні", titlePt: "Orações temporais", titleEn: "Temporal clauses",
    summary: "Конструкції, які встановлюють часовий зв'язок між двома ситуаціями.",
    aliases: ["часові підрядні", "temporal clauses", "orações temporais", "quando", "enquanto", "antes de", "depois de"],
    related: ["futuro-subjuntivo", "sequence-of-tenses", "subordinating"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Часова підрядна визначає одночасність, послідовність, попередність або межу ситуації. Українськомовному студентові особливо важливо пам'ятати, що майбутня ситуація після quando, assim que, logo que та подібних засобів може вимагати conjuntivo, зокрема futuro do conjuntivo, а не механічного presente.",
    definition: "Часова підрядна — залежна конструкція, яка локалізує одну ситуацію відносно іншої в часі.",
    uses: [
      { title: "Минула фактична подія", body: "Коли подія подається як фактично відбулася, вживається відповідна форма indicativo.", examples: [ex("Quando cheguei, ele saiu.", "Коли я прийшов/прийшла, він вийшов.")] },
      { title: "Майбутня умова часу", body: "Для майбутньої ще не реалізованої ситуації після quando типово використовується futuro do conjuntivo.", examples: [ex("Quando chegares, liga-me.", "Коли прийдеш, подзвони мені.")] },
      { title: "Одночасність і тривалість", body: "Enquanto може встановлювати часову рамку одночасності двох ситуацій.", examples: [ex("Enquanto eu trabalhava, ele estudava.", "Поки я працював/працювала, він навчався.")] },
      { title: "Попередність і наступність", body: "Antes de/depois de утворюють прийменникові моделі, які можуть поєднуватися з infinitivo; вибір конструкції залежить від суб'єктів.", examples: [ex("Antes de sair, fechou a porta.", "Перед виходом він/вона зачинив/зачинила двері.")] }
    ],
    examples: [
      ex("Quando terminar, avisa-me.", "Коли закінчиш, повідом мені.", { purpose: "production" }),
      ex("Quando terminou, avisou-me.", "Коли закінчив/закінчила, він/вона повідомив/повідомила мене.", { purpose: "contrast" }),
      ex("Depois de chegar, telefonou.", "Після прибуття він/вона зателефонував/зателефонувала.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вживати presente після quando для будь-якого майбутнього значення", "визначати, чи референт події вже фактичний чи ще очікуваний", "Майбутня часова клауза має інший розподіл способу й часу.", "predicted-l1-transfer", "high"),
      mistake("переносити українські часові форми один до одного", "спочатку визначити часовий зв'язок, потім португальську форму", "Одна українська конструкція може відповідати різним португальським моделям.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українські «коли», «поки», «перед тим як», «після того як» добре показують часову функцію. Але українська не має прямої паралелі до всіх випадків futuro do conjuntivo.",
    regional: "Часові конструкції мають спільне ядро в PT-PT і PT-BR, але частотність окремих нефінітних моделей та розмовних альтернатив може різнитися.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "consecutive-clauses", slug: "consecutive", category: "subordinate",
    titleUk: "Наслідкові підрядні", titlePt: "Orações consecutivas", titleEn: "Consecutive clauses",
    summary: "Конструкції, які виражають результат або наслідок ситуації чи високого ступеня ознаки.",
    aliases: ["наслідкові підрядні", "consecutive clauses", "orações consecutivas", "tão... que", "tanto... que"],
    related: ["causal-clauses", "comparative-clauses", "subordinating"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Наслідкова конструкція відповідає не на питання «чому?», а на питання «що з цього вийшло?». Особливо продуктивні корелятивні моделі tão/tanto/tal ... que, у яких ступінь ознаки або кількість створює рамку для результату.",
    definition: "Наслідкове підрядне — залежна конструкція, яка подає результат, що випливає з ситуації, ступеня або кількості, виражених у головній частині.",
    uses: [
      { title: "Наслідок події", body: "Підрядна частина може безпосередньо описувати результат попередньої ситуації.", examples: [ex("Choveu tanto que a rua ficou inundada.", "Дощ ішов так сильно, що вулицю затопило.")] },
      { title: "Ступінь + результат", body: "Tão + прикметник/прислівник або tanto/tanta/tantos/tantas + іменна чи дієслівна конструкція пов'язує ступінь із наслідком.", examples: [ex("Estava tão cansado que adormeceu.", "Він був такий втомлений, що заснув.")] },
      { title: "Відмінність від causa", body: "У причинній конструкції підрядна частина пояснює головну; у наслідковій вона описує результат, який виник унаслідок головної ситуації.", examples: [ex("Estava cansado porque trabalhou muito.", "Він був втомлений, бо багато працював."), ex("Trabalhou tanto que ficou cansado.", "Він так багато працював, що втомився.")] }
    ],
    examples: [
      ex("Falou tão baixo que ninguém ouviu.", "Він говорив так тихо, що ніхто не почув.", { purpose: "contrast" }),
      ex("Havia tanta gente que não conseguimos entrar.", "Людей було так багато, що ми не змогли зайти.", { purpose: "production" })
    ],
    mistakes: [
      mistake("плутати наслідок із причиною", "визначати напрямок причинно-наслідкового зв'язку", "Porque вводить пояснення причини, тоді як que у моделі tão... que вводить результат.", "predicted-l1-transfer", "high"),
      mistake("вживати tão перед іменником без урахування конструкції", "розрізняти tão + adjective/adverb і tanto/a/os/as + noun", "Корелятивні рамки мають різні морфосинтаксичні моделі.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українські «так..., що», «такий..., що», «стільки..., що» є близькими функціональними аналогами. Водночас розподіл tão/tanto треба вивчати як португальську конструкцію.",
    regional: "Корелятивні наслідкові моделі є частиною стандартної мови; конкретна частотність і розмовні скорочення можуть залежати від регістру.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "comparative-clauses", slug: "comparative", category: "subordinate",
    titleUk: "Порівняльні підрядні", titlePt: "Orações comparativas", titleEn: "Comparative clauses",
    summary: "Конструкції, які встановлюють співвідношення між мірою, якістю або способом двох ситуацій.",
    aliases: ["порівняльні підрядні", "comparative clauses", "orações comparativas", "mais do que", "tão... como"],
    related: ["comparatives", "proportional-clauses", "subordinating"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Порівняльні конструкції встановлюють стандарт, із яким зіставляється особа, предмет, властивість або дія. Повна порівняльна клауза часто містить елементи, які в поверхневій формі можуть бути опущені, тому студенту корисно відновлювати логічну структуру: що саме порівнюється, з чим і за якою шкалою.",
    definition: "Порівняльна конструкція — структура, яка зіставляє дві величини, якості, кількості або способи виконання дії.",
    uses: [
      { title: "Нерівність", body: "Mais/menos ... do que встановлює вищий або нижчий ступінь щодо стандарту порівняння.", examples: [ex("Ele trabalha mais do que eu.", "Він працює більше, ніж я.")] },
      { title: "Рівність", body: "Tão ... como/quanto та інші моделі виражають рівність за певною ознакою або мірою.", examples: [ex("Ela é tão alta como a irmã.", "Вона така сама висока, як її сестра.")] },
      { title: "Порівняння способу", body: "Como може вводити стандарт способу; тут важливо не змішувати порівняльну функцію з модальною або відносною.", examples: [ex("Faz como eu faço.", "Роби так, як роблю я.")] }
    ],
    examples: [
      ex("Este livro é mais interessante do que aquele.", "Ця книжка цікавіша за ту.", { purpose: "production" }),
      ex("Ele corre tão depressa como o irmão.", "Він бігає так само швидко, як його брат.", { purpose: "comprehension" }),
      ex("Quanto mais estudas, mais aprendes.", "Що більше ти вчишся, то більше дізнаєшся.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("перекладати кожне do que однаково без визначення порівняльної структури", "знайти основу порівняння та стандарт", "Do que може бути частиною різних синтаксичних рамок; переклад сам по собі не пояснює структуру.", "predicted-l1-transfer", "medium"),
      mistake("змішувати звичайне порівняння з пропорційною кореляцією", "перевіряти, чи змінюються дві величини взаємозалежно", "Quanto mais... mais встановлює кореляцію, а не просто порівнює два об'єкти.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українські «більше ніж», «так само..., як», «що більше..., то більше...» мають близькі функції. Але португальські порівняльні рамки мають власні правила вибору зв'язки та еліпсису.",
    regional: "Порівняльні моделі загалом спільні для PT-PT і PT-BR; відмінності можуть стосуватися окремих прийменникових, займенникових та розмовних реалізацій.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  })
];
