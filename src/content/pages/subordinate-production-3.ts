import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_II = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const GULBENKIAN_III = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const CAMOES_PLE = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "complement-clauses",
    slug: "complement",
    category: "subordinate",
    titleUk: "Підрядні додаткові речення",
    titlePt: "Orações completivas",
    titleEn: "Complement clauses",
    summary: "Підрядні конструкції, які заповнюють аргументну або іншу залежну позицію предиката.",
    aliases: ["підрядні додаткові", "complement clauses", "orações completivas", "que", "se"],
    related: ["complement-clauses-advanced", "indicative-vs-subjunctive", "infinitive-vs-subjunctive", "valency-overview", "verb-complement-types"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Підрядна completiva не просто «додає ще одне речення»: вона займає позицію, яку відкриває головний предикат. Після дієслова знання, повідомлення, бажання, сумніву, вимоги або оцінки португальська може використовувати que + особову форму, se в питальних залежних конструкціях, infinitivo чи інші моделі. Тому українські «що», «щоб» і «чи» корисні для першої орієнтації, але не є алгоритмом вибору.",
    definition: "Completiva — залежна пропозиційна конструкція, яка реалізує аргумент або інший синтаксично вибраний компонент матричного предиката. Вона може бути підметом, додатком, іменним доповненням або іншою позицією залежно від головної структури.",
    uses: [
      { title: "Фактуальне повідомлення", body: "Після предикатів знання, повідомлення та переконання que-clause може подавати зміст як твердження, яке мовець/суб'єкт розглядає як факт або переконання.", examples: [ex("Sei que ele vem amanhã.", "Я знаю, що він прийде завтра.", { purpose: "production" }), ex("Acho que ela tem razão.", "Я думаю, що вона має рацію.", { purpose: "production" })] },
      { title: "Бажання, вимога, оцінка", body: "Після багатьох предикатів волі та оцінки типовою є конструкція que + conjuntivo. Важливо аналізувати значення головного предиката, а не сам сполучник que.", examples: [ex("Quero que ele venha.", "Я хочу, щоб він прийшов.", { purpose: "contrast" }), ex("É importante que estudes.", "Важливо, щоб ти вчився/вчилася.", { purpose: "production", variety: "PT" })] },
      { title: "Залежне питання", body: "Питальний зміст може вводитися se або питальним словом. Це не те саме, що умовне se у реченні «se vieres».", examples: [ex("Não sei se ele vem.", "Я не знаю, чи він прийде.", { purpose: "contrast" }), ex("Não sei quando ele chega.", "Я не знаю, коли він приїде.", { purpose: "production" })] },
      { title: "Infinitivo як альтернатива", body: "За відповідних умов control/subject relations інфінітив може реалізувати зміст другої предикації компактніше.", examples: [ex("Quero viajar amanhã.", "Я хочу подорожувати завтра.", { purpose: "contrast" }), ex("Quero que os meus amigos viajem amanhã.", "Я хочу, щоб мої друзі подорожували завтра.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Disse que chegaria tarde.", "Він/вона сказав/сказала, що прийде пізно.", { purpose: "production" }),
      ex("Não acredito que seja verdade.", "Я не вірю, що це правда.", { purpose: "contrast" }),
      ex("É possível que chova.", "Можливо, буде дощ.", { purpose: "comprehension" }),
      ex("Não sei se eles aceitaram.", "Я не знаю, чи вони погодилися.", { purpose: "production" }),
      ex("A minha esperança é que tudo corra bem.", "Моя надія — що все мине добре.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("ставити indicativo або conjuntivo лише за українським «що/щоб»", "визначати значення й лексичну рамку головного предиката", "Португальський спосіб залежить від конструкції та інтерпретації, а не від прямого перекладу сполучника.", "predicted-l1-transfer", "high"),
      mistake("вважати se в «não sei se...» умовним", "перевіряти, чи йдеться про залежне питання", "У залежному питанні se приблизно відповідає українському «чи»; умова має іншу синтаксичну функцію.", "predicted-l1-transfer", "high"),
      mistake("вважати infinitivo просто скороченням будь-якої completiva", "перевіряти суб'єкт, контроль і керування", "Не всі finite complement clauses можуть механічно замінюватися інфінітивом.", "editorial", "high")
    ],
    ukrainian: "Українські «що», «щоб», «чи» допомагають побачити семантичний зв'язок, але португальська розподіляє конструкції інакше. Особливо важливо відрізняти «Quero que ele venha» від «Quero viajar»: український переклад приховує, що в першому випадку є окрема finite clause, а в другому — infinitival structure.",
    regional: "Основний поділ completivas є спільним для PT-BR і PT-PT. Частотність clitics, personal infinitive та окремих лексичних моделей може відрізнятися за різновидами й регістрами; це не привід зводити систему до одного стандарту.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "causal-clauses",
    slug: "causal",
    category: "subordinate",
    titleUk: "Причинові підрядні",
    titlePt: "Orações causais",
    titleEn: "Causal clauses",
    summary: "Конструкції, що пояснюють причину, підставу або мотивацію ситуації.",
    aliases: ["причинові підрядні", "causal clauses", "orações causais", "porque", "como"],
    related: ["purpose-clauses", "concessive-clauses", "temporal-clauses", "subordinating"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Причинова підрядна відповідає не просто на питання «чому?», а встановлює зв'язок між двома ситуаціями: одна подається як причина, підстава або пояснення іншої. Найчастіший засіб — porque, але можливі como, visto que, já que, uma vez que та інші сполучники. Вибір залежить від позиції підрядної, інформаційної структури й регістру.",
    definition: "Причинова підрядна — залежна конструкція, яка подає причину або підставу для ситуації, твердження чи висновку головної частини.",
    uses: [
      { title: "Причина події", body: "Підрядна пояснює, чому сталася ситуація.", examples: [ex("Fiquei em casa porque chovia.", "Я залишився/лишилася вдома, бо йшов дощ.", { purpose: "production" })] },
      { title: "Причина перед головною частиною", body: "Причинову частину можна винести вперед, якщо причина є тематично важливою або задає рамку пояснення.", examples: [ex("Como estava cansado, fui dormir cedo.", "Оскільки я був/була втомлений/втомлена, я рано ліг/лягла спати.", { purpose: "production" })] },
      { title: "Пояснення вже відомого", body: "Já que, uma vez que та подібні моделі часто подають причину як відому, очевидну або вже встановлену.", examples: [ex("Já que estás aqui, ajuda-me.", "Раз ти вже тут, допоможи мені.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Não saí porque estava doente.", "Я не вийшов/вийшла, бо був/була хворий/хвора.", { purpose: "production" }),
      ex("Como ninguém respondeu, fomos embora.", "Оскільки ніхто не відповів, ми пішли.", { purpose: "comprehension" }),
      ex("Uma vez que já terminámos, podemos sair.", "Оскільки ми вже закінчили, можемо йти.", { purpose: "production" }),
      ex("Fiquei contente, visto que tudo correu bem.", "Я зрадів/зраділа, оскільки все пройшло добре.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("використовувати qualquer сполучник причини як повний синонім porque", "враховувати позицію, інформаційний статус і регістр", "Різні причинні сполучники мають різні дискурсивні властивості.", "editorial", "medium"),
      mistake("плутати porque з конструкціями мети", "визначати напрям зв'язку", "Porque відповідає причинному зв'язку, тоді як para/para que виражають мету.", "predicted-l1-transfer", "high"),
      mistake("ставити кому перед кожним porque механічно", "аналізувати синтаксичну структуру та правила пунктуації", "Пунктуація не зводиться до одного шаблону на основі сполучника.", "editorial", "medium")
    ],
    ukrainian: "Українські «бо», «тому що», «оскільки», «раз» добре показують функцію, але не визначають португальську форму. Особливо корисно бачити різницю між нейтральним porque і початковим como: обидва можуть передавати причину, але організують інформацію по-різному.",
    regional: "Причинові моделі широко спільні. Відмінності між PT-BR і PT-PT частіше стосуються частотності окремих сполучників, стилю та пунктуаційних уподобань, ніж самої причинної семантики.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "purpose-clauses",
    slug: "purpose",
    category: "subordinate",
    titleUk: "Підрядні мети",
    titlePt: "Orações finais",
    titleEn: "Purpose clauses",
    summary: "Конструкції, що виражають бажаний результат або мету дії.",
    aliases: ["підрядні мети", "purpose clauses", "orações finais", "para que", "para + infinitivo"],
    related: ["complement-clauses", "infinitive-vs-subjunctive", "infinitive-prepositions", "causal-clauses"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Мета описує не причину вже наявної ситуації, а бажаний або передбачений результат, заради якого виконується дія. Португальська має інфінітивну модель para + infinitivo та finite para que + conjuntivo. Вибір залежить не лише від того, «один чи різні суб'єкти», а й від контролю, типу конструкції та лексичного керування.",
    definition: "Підрядна мети — залежна конструкція, яка виражає ціль або бажаний результат головної ситуації.",
    uses: [
      { title: "Спільний контрольований суб'єкт", body: "Para + infinitivo природно вживається, коли суб'єкт мети контролюється суб'єктом головної дії.", examples: [ex("Estudo para aprender mais.", "Я вчуся, щоб дізнатися більше.", { purpose: "production" })] },
      { title: "Окремий суб'єкт", body: "Para que + conjuntivo дає змогу виразити окремого суб'єкта в цільовій ситуації.", examples: [ex("Fechei a janela para que as crianças dormissem.", "Я зачинив/зачинила вікно, щоб діти спали.", { purpose: "contrast" })] },
      { title: "Негативна мета", body: "Конструкції com para não + infinitivo та para que não + conjuntivo дозволяють виразити запобігання небажаному результату.", examples: [ex("Saí cedo para não chegar atrasado.", "Я вийшов/вийшла рано, щоб не запізнитися.", { purpose: "production" })] }
    ],
    examples: [
      ex("Trabalha para ganhar dinheiro.", "Він/вона працює, щоб заробляти гроші.", { purpose: "production" }),
      ex("Trabalha para que os filhos possam estudar.", "Він/вона працює, щоб діти могли навчатися.", { purpose: "contrast" }),
      ex("Falei devagar para não haver confusão.", "Я говорив/говорила повільно, щоб не виникло плутанини.", { purpose: "comprehension" }),
      ex("Escrevi tudo para que não se esquecessem.", "Я все записав/записала, щоб вони не забули.", { purpose: "production" })
    ],
    mistakes: [
      mistake("ставити para que після будь-якого para", "розрізняти infinitival і finite purpose clause", "Para que вимагає особової форми, зазвичай conjuntivo; para + infinitivo — інша конструкція.", "predicted-l1-transfer", "high"),
      mistake("вважати різницю суб'єктів єдиним правилом", "додатково перевіряти контроль і лексичне керування", "Однаковий суб'єкт не гарантує автоматично infinitivo, а різні суб'єкти не пояснюють усі можливі моделі.", "editorial", "high"),
      mistake("перекладати мету як причину", "поставити питання «для якого результату?»", "Мета спрямована вперед, до бажаного результату; причина пояснює вже наявну ситуацію.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українське «щоб» покриває і para + infinitivo, і para que + conjuntivo. Тому для україномовного студента найважливіше навчитися бачити португальську синтаксичну структуру, а не шукати один український відповідник.",
    regional: "Моделі para + infinitivo та para que + conjuntivo є спільними. Різновиди можуть відрізнятися у виборі займенникових форм і деяких стилістичних деталях, але базовий контраст мети зберігається.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "conditional-clauses",
    slug: "conditional-clauses",
    category: "subordinate",
    titleUk: "Умовні речення",
    titlePt: "Orações condicionais",
    titleEn: "Conditional clauses",
    summary: "Конструкції, у яких одна ситуація подається як умова для іншої.",
    aliases: ["умовні речення", "conditional clauses", "orações condicionais", "se", "futuro do conjuntivo"],
    related: ["futuro-subjuntivo", "imperfeito-subjuntivo", "subjunctive-triggers", "concessive-clauses"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Умовне речення створює залежність: якщо виконується умова, тоді можливий, очікуваний або уявний наслідок. Португальська особливо важлива для україномовного студента тим, що в реальних майбутніх умовах активно використовується futuro do conjuntivo: se tiveres tempo, vem. Гіпотетичні умови натомість часто використовують imperfeito do conjuntivo + condicional.",
    definition: "Умовна конструкція — структура, у якій одна пропозиція задає умову істинності, здійснення або релевантності іншої.",
    uses: [
      { title: "Реальна або відкрита майбутня умова", body: "Для можливої майбутньої ситуації після se типовим є futuro do conjuntivo.", examples: [ex("Se tiveres tempo, liga-me.", "Якщо матимеш час, подзвони мені.", { purpose: "production" })] },
      { title: "Гіпотетична умова", body: "Для уявної або малоймовірної ситуації в теперішньому/майбутньому типовою є модель se + imperfeito do conjuntivo, головна частина з condicional.", examples: [ex("Se tivesse tempo, viajaria mais.", "Якби я мав/мала час, я більше подорожував/подорожувала б.", { purpose: "production" })] },
      { title: "Нереальна умова в минулому", body: "Для альтернативного минулого використовуються відповідні форми mais-que-perfeito do conjuntivo та condicional composto або інші контекстуальні моделі.", examples: [ex("Se tivesse estudado, teria passado.", "Якби я вчився/вчилася, я склав/склала б іспит.", { purpose: "contrast" })] },
      { title: "Умова без se", body: "Умова може виражатися іншими конструкціями, але se є центральним засобом системи.", examples: [ex("Caso tenhas dúvidas, pergunta.", "Якщо матимеш сумніви, запитай.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Se chover, ficamos em casa.", "Якщо буде дощ, ми залишимося вдома.", { purpose: "production" }),
      ex("Se chover amanhã, ficaremos em casa.", "Якщо завтра буде дощ, ми залишимося вдома.", { purpose: "contrast" }),
      ex("Se fosses comigo, seria mais divertido.", "Якби ти пішов/пішла зі мною, було б веселіше.", { purpose: "production" }),
      ex("Se tivesse sabido, teria ido.", "Якби я знав/знала, я пішов/пішла б.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("використовувати futuro do indicativo після se для звичайної відкритої майбутньої умови", "перевіряти умовну конструкцію та майбутню референцію", "У стандартній системі futuro do conjuntivo є ключовою формою в багатьох відкритих майбутніх умовах.", "predicted-l1-transfer", "high"),
      mistake("плутати futuro do conjuntivo з infinitivo pessoal", "використовувати лексично нерегулярні форми як діагностику", "Форми можуть збігатися в частині дієслів, але це різні граматичні категорії.", "editorial", "high"),
      mistake("вважати imperfeito do conjuntivo просто минулим часом", "аналізувати модальну й гіпотетичну функцію", "Умовне se + tivesse не просто переносить подію в минуле; воно часто кодує нереальність або дистанціювання.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська має «якщо + майбутній/теперішній», «якби + минулий» та інші моделі. Португальська розподіляє способи і часи інакше: майбутня відкрита умова часто має futuro do conjuntivo, а гіпотетична — imperfeito do conjuntivo.",
    regional: "Умовна система загалом спільна для PT-BR і PT-PT. Відмінності частіше виникають у займенниках, варіантах розмовної мови та стилістичній частотності окремих форм, а не в самій логіці умовних конструкцій.",
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
    summary: "Конструкції, що подають перешкоду, яка не скасовує головної ситуації.",
    aliases: ["допустові підрядні", "concessive clauses", "orações concessivas", "embora", "apesar de"],
    related: ["causal-clauses", "conditional-clauses", "purpose-clauses", "subjunctive-triggers"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Допустова конструкція встановлює контраст між очікуванням і фактичним результатом: хоча є певна обставина, головна ситуація все одно відбувається. Найтиповіша finite-модель — embora + conjuntivo; серед нефінітних конструкцій важливе apesar de + infinitivo або іменна група. Семантично concessão близька до умови та причини, але не збігається з ними.",
    definition: "Допустова підрядна — конструкція, яка подає обставину, що могла б створити перешкоду або очікування іншого результату, але не скасовує ситуацію головної частини.",
    uses: [
      { title: "Embora + conjuntivo", body: "Embora типово вводить finite concessive clause з conjuntivo.", examples: [ex("Embora esteja cansado, vou trabalhar.", "Хоча я втомлений/втомлена, я працюватиму.", { purpose: "production" })] },
      { title: "Apesar de + infinitivo", body: "При спільному контролі суб'єкта або в відповідній структурі concessive relation може бути виражена прийменниковою моделлю.", examples: [ex("Apesar de estar cansado, continuei.", "Попри те, що я був/була втомлений/втомлена, я продовжив/продовжила.", { purpose: "contrast" })] },
      { title: "Контраст очікування", body: "Суть concessão — не просто «незважаючи на факт», а невідповідність між потенційним очікуванням і результатом.", examples: [ex("Apesar da chuva, saímos.", "Попри дощ, ми вийшли.", { purpose: "production" })] }
    ],
    examples: [
      ex("Embora fosse tarde, continuámos a trabalhar.", "Хоча було пізно, ми продовжили працювати.", { purpose: "production" }),
      ex("Embora não concorde, aceito a decisão.", "Хоча я не погоджуюся, я приймаю рішення.", { purpose: "comprehension" }),
      ex("Apesar de estar doente, foi trabalhar.", "Попри хворобу / те, що він був хворий, він пішов працювати.", { purpose: "contrast" }),
      ex("Mesmo que seja difícil, vamos tentar.", "Навіть якщо це складно, ми спробуємо.", { purpose: "production" })
    ],
    mistakes: [
      mistake("ставити indicativo після embora за аналогією з українським «хоча»", "вивчати embora як типовий conjuntivo trigger", "У стандартній моделі embora + conjuntivo є центральною конструкцією допустовості.", "predicted-l1-transfer", "high"),
      mistake("плутати embora з умовою", "перевіряти, чи головний результат подається всупереч перешкоді", "Умова робить ситуацію залежною; concessão підкреслює, що вона відбулася попри перешкоду.", "editorial", "high"),
      mistake("вважати apesar de і embora просто стилістичними варіантами", "перевіряти тип залежної форми", "Apesar de вводить прийменникову/інфінітивну модель, тоді як embora вводить finite clause.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українські «хоча», «попри те що», «незважаючи на» добре передають concessive meaning. Але португальський вибір між embora + conjuntivo та apesar de + infinitivo має власну синтаксичну організацію.",
    regional: "Основні concessive patterns спільні. PT-BR і PT-PT можуть відрізнятися частотністю окремих конструкцій та займенникових реалізацій, але хоча б базове розрізнення finite і infinitival concessives є надрегіональним.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "temporal-clauses",
    slug: "temporal",
    category: "subordinate",
    titleUk: "Часові підрядні речення",
    titlePt: "Orações temporais",
    titleEn: "Temporal clauses",
    summary: "Конструкції, що встановлюють часовий зв'язок між двома ситуаціями.",
    aliases: ["часові підрядні", "temporal clauses", "orações temporais", "quando", "enquanto", "antes de", "depois de"],
    related: ["conditional-clauses", "sequence-of-tenses", "futuro-subjuntivo", "reduced-clauses"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Часова підрядна визначає, коли, до або після якої ситуації відбувається головна подія, або які дві ситуації тривають одночасно. Особливо важливо розрізняти фактичну повторювану подію та майбутню/гіпотетичну: після quando, assim que, logo que та подібних сполучників modo може змінюватися залежно від часової перспективи.",
    definition: "Часова підрядна — залежна конструкція, яка встановлює відношення одночасності, передування, наступності або повторюваної часової залежності між ситуаціями.",
    uses: [
      { title: "Одноразова минула подія", body: "Для фактичної події в минулому типовим є indicativo у відповідному часі.", examples: [ex("Quando cheguei, ele saiu.", "Коли я прийшов/прийшла, він вийшов.", { purpose: "production" })] },
      { title: "Майбутня подія", body: "Коли майбутня подія ще не відбулася й подається як умова/часова рамка, у багатьох конструкціях використовується futuro do conjuntivo.", examples: [ex("Quando chegares, liga-me.", "Коли прийдеш, подзвони мені.", { purpose: "production" })] },
      { title: "Тривалість і повторюваність", body: "Enquanto та інші засоби можуть показувати одночасність або фонову тривалість.", examples: [ex("Enquanto estudava, ouvia música.", "Поки я вчився/вчилася, я слухав/слухала музику.", { purpose: "comprehension" })] },
      { title: "Передування і наступність", body: "Antes de/antes que та depois de/depois que розподіляють інфінітивні й finite моделі.", examples: [ex("Antes de sair, fechou a porta.", "Перед тим як вийти, він зачинив двері.", { purpose: "production" }), ex("Depois que chegou, telefonou.", "Після того як він/вона приїхав/приїхала, він/вона зателефонував/зателефонувала.", { purpose: "production" })] }
    ],
    examples: [
      ex("Quando era criança, vivia aqui.", "Коли я був/була дитиною, я жив/жила тут.", { purpose: "production" }),
      ex("Quando chegares, avisa-me.", "Коли прийдеш, дай мені знати.", { purpose: "contrast" }),
      ex("Enquanto trabalhamos, eles descansam.", "Поки ми працюємо, вони відпочивають.", { purpose: "comprehension" }),
      ex("Assim que terminares, envia o ficheiro.", "Щойно закінчиш, надішли файл.", { purpose: "production" })
    ],
    mistakes: [
      mistake("ставити futuro do indicativo після quando для майбутньої часової підрядної", "визначати, чи подія є ще не здійсненою часовою рамкою", "У багатьох стандартних конструкціях майбутня subordinada temporalis використовує futuro do conjuntivo.", "predicted-l1-transfer", "high"),
      mistake("перекладати imperfeito як українське минуле без урахування фону", "аналізувати одночасність, тривалість і повторюваність", "Imperfeito часто встановлює фон або звичний часовий інтервал.", "predicted-l1-transfer", "medium"),
      mistake("ототожнювати quando у всіх контекстах", "перевіряти часову референцію та синтаксичну функцію", "Quando може вводити різні структури; його форма не визначає значення сама по собі.", "editorial", "medium")
    ],
    ukrainian: "Українські «коли», «поки», «перед тим як», «після того як» мають близькі функції. Але португальська має особливо важливий контраст indicativo/futuro do conjuntivo у майбутніх часових конструкціях.",
    regional: "Часові конструкції є спільними для PT-BR і PT-PT. Різниця може проявлятися у частотності futuro do conjuntivo, особливо в розмовній мові та жанрі, але форма залишається нормативно значущою.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "consecutive-clauses",
    slug: "consecutive",
    category: "subordinate",
    titleUk: "Наслідкові підрядні",
    titlePt: "Orações consecutivas",
    titleEn: "Consecutive clauses",
    summary: "Конструкції, що виражають результат або наслідок попередньої ситуації, часто через ступінь.",
    aliases: ["наслідкові підрядні", "consecutive clauses", "orações consecutivas", "tão... que", "tanto... que"],
    related: ["comparative-clauses", "purpose-clauses", "causal-clauses", "subordinating"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Наслідкова конструкція показує результат, який випливає з описаної ситуації. Часто вона корелює з показником ступеня: tão... que, tanto... que, de tal modo que. Для навчання важливо не змішувати consequence з cause: причина пояснює, чому щось сталося, а consecutive clause подає те, що стало наслідком.",
    definition: "Наслідкова підрядна — конструкція, яка виражає результат або наслідок ситуації, інтенсивності чи способу дії головної частини.",
    uses: [
      { title: "tão + прикметник + que", body: "Показник ступеня tão створює кореляцію з наслідковою que-clause.", examples: [ex("Estava tão cansado que adormeceu.", "Він був такий втомлений, що заснув.", { purpose: "production" })] },
      { title: "tanto + дієслово/іменник + que", body: "Tanto може модифікувати дію або кількість, після чого que вводить наслідок.", examples: [ex("Trabalhou tanto que ficou doente.", "Він так багато працював, що захворів.", { purpose: "production" })] },
      { title: "Лексичний спосіб або ступінь", body: "De tal modo/maneira que та близькі моделі подають спосіб або інтенсивність як основу наслідку.", examples: [ex("Falou de tal modo que todos entenderam.", "Він говорив так, що всі зрозуміли.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Era tão tarde que fomos embora.", "Було так пізно, що ми пішли.", { purpose: "production" }),
      ex("Havia tanta gente que não entrámos.", "Людей було так багато, що ми не зайшли.", { purpose: "contrast" }),
      ex("Choveu tanto que as ruas ficaram inundadas.", "Дощ ішов так сильно, що вулиці затопило.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("використовувати porque там, де описано результат", "поставити питання «чому?» проти «що сталося внаслідок цього?»", "Causal і consecutive clauses мають протилежний напрям пояснення.", "predicted-l1-transfer", "high"),
      mistake("плутати tão... que з простою конструкцією que", "визначати показник ступеня", "У конструкції tão... que наслідок пов'язаний із рівнем властивості або інтенсивністю.", "editorial", "medium"),
      mistake("перекладати tanto лише як «багато»", "аналізувати його синтаксичну роль", "Tanto може бути частиною корелятивної наслідкової моделі.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українські «так..., що», «такий..., що», «стільки..., що» є дуже близькими функціональними аналогами. Саме вони допомагають побачити, що que вводить результат, а не причину.",
    regional: "Базові наслідкові моделі спільні. Частотність окремих книжних locuções може змінюватися залежно від різновиду та стилю.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "comparative-clauses",
    slug: "comparative",
    category: "subordinate",
    titleUk: "Порівняльні підрядні конструкції",
    titlePt: "Orações comparativas",
    titleEn: "Comparative clauses",
    summary: "Конструкції, що зіставляють ступінь, кількість, якість або спосіб двох ситуацій, і корелятивні моделі ступеня.",
    aliases: ["порівняльні підрядні", "comparative clauses", "orações comparativas", "do que", "como", "quanto"],
    related: ["comparatives", "consecutive-clauses", "conformative-clauses", "subordinating"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Порівняльна конструкція встановлює співвідношення між двома величинами або ситуаціями. Треба розрізняти ступеневе порівняння (mais/menos/tão... do que/como), порівняння способу та корелятивні моделі типу quanto mais... mais. Один конектор не визначає клас конструкції: como може бути порівняльним або конформативним, а quanto — частиною кореляції ступенів. Аналізуйте всю рамку, а не окреме слово.",
    definition: "Порівняльна конструкція — структура, яка зіставляє два члени за ступенем, кількістю, якістю, способом або іншою релевантною властивістю.",
    uses: [
      { title: "Mais/menos ... do que", body: "Після порівняльного показника do que часто вводить другий член порівняння.", examples: [ex("Ele trabalha mais do que eu.", "Він працює більше, ніж я.", { purpose: "production" }), ex("Este relatório é menos claro do que o anterior.", "Цей звіт менш зрозумілий, ніж попередній.", { purpose: "production" })] },
      { title: "Tão ... como/quanto", body: "Конструкція рівності зіставляє два елементи за певною властивістю.", examples: [ex("Ela é tão alta como a irmã.", "Вона така ж висока, як її сестра.", { purpose: "production" })] },
      { title: "Порівняння способу", body: "Como може порівнювати спосіб дії, але тут потрібно відрізняти порівняльне значення від conformative або relative-like конструкцій.", examples: [ex("Ele fala como o pai falava.", "Він говорить так, як говорив його батько.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Este livro é mais interessante do que aquele.", "Ця книжка цікавіша за ту.", { purpose: "production" }),
      ex("A tarefa foi menos difícil do que esperávamos.", "Завдання було менш складним, ніж ми очікували.", { purpose: "production" }),
      ex("Trabalha tanto como antes.", "Він/вона працює так само багато, як раніше.", { purpose: "contrast" }),
      ex("Quanto mais estudas, melhor compreendes.", "Що більше ти вчишся, то краще розумієш.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("плутати do que після comparativo з будь-яким que", "шукати показник порівняння на кшталт mais, menos, melhor або pior", "У ступеневому порівнянні do que вводить другий член зіставлення; звичайне que після дієслова не має цієї функції.", "editorial", "medium"),
      mistake("вважати do que і como взаємозамінними в усіх моделях", "визначати тип порівняльної конструкції", "Розподіл залежить від comparativo та конкретної структури.", "editorial", "medium"),
      mistake("аналізувати кожне como як порівняльне", "перевіряти, чи є реальний другий член порівняння", "Como може бути causal, conformative, relative-like та частиною інших структур.", "predicted-l1-transfer", "high"),
      mistake("плутати proporcional із звичайним comparative", "перевіряти, чи порівнюються дві величини чи корелюють дві зміни", "Quanto mais... mais виражає кореляцію ступенів, а не просто один порівняльний член.", "editorial", "high")
    ],
    ukrainian: "Українські «ніж», «як», «так само..., як», «що більше..., то більше...» дають хороші функціональні відповідники. Але португальські конструкції треба визначати за їхньою внутрішньою структурою, а не за одним українським перекладом.",
    regional: "Основні порівняльні конструкції спільні. Окремі варіанти прийменникового оформлення та частотність моделей можуть відрізнятися за різновидами та регістрами.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  })
];
