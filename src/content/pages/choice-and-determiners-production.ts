import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const G = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const G3 = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const C = "https://ciberduvidas.iscte-iul.pt/gramatica";
const CAM = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "personal-infinitive-choice", slug: "personal-choice", category: "infinitive",
    titleUk: "Особовий чи безособовий інфінітив: як обрати форму",
    titlePt: "Infinitivo pessoal ou impessoal: como escolher",
    titleEn: "Personal vs impersonal infinitive: choosing the form",
    summary: "Коли infinitivo має власну особову форму, а коли підмет інфінітивної групи не виражається окремо.",
    aliases: ["особовий інфінітив","personal infinitive","infinitivo pessoal","особовий чи безособовий інфінітив"],
    related: ["personal-infinitive","impersonal-infinitive","infinitive-vs-subjunctive","infinitive-prepositions","finite-vs-nonfinite-subordination"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Португальський infinitivo pessoal відрізняється від звичайного безособового інфінітива тим, що може показувати особу й число: para eu fazer, para nós fazermos. Вибір не зводиться до правила «якщо підмет інший — став особовий інфінітив». Важливі тип конструкції, спільність або відмінність підметів, потреба уникнути неоднозначності та стилістична організація речення.",
    definition: "Особовий інфінітив — інфінітив із формою, що узгоджується з підметом за особою та числом. Безособовий інфінітив не має такого морфологічного маркування.",
    formation: "Особові закінчення найвиразніші в формах на кшталт fazer, fazeres, fazer, fazermos, fazerem; у 1-й та 2-й особах однини форма часто збігається з лексичною основою без додаткового закінчення, тому контекст особливо важливий. Порівнюйте para eu fazer і para nós fazermos з para fazer у конструкції, де виконавець уже однозначно заданий.",
    uses: [
      { title: "Явний підмет інфінітива", body: "Особовий інфінітив природно показує окремий суб'єкт інфінітивної дії.", examples: [
        ex("É importante nós estudarmos mais.", "Важливо, щоб ми більше вчилися.", { purpose: "production" }),
        ex("Para eles chegarem cedo, saíram de casa às seis.", "Щоб вони прийшли рано, вони вийшли з дому о шостій.", { purpose: "comprehension" })
      ] },
      { title: "Спільний виконавець", body: "Безособовий інфінітив часто достатній, коли суб'єкт уже зрозумілий і немає потреби його окремо кодувати.", examples: [
        ex("Quero sair cedo.", "Я хочу вийти рано.", { purpose: "production" }),
        ex("É melhor esperar.", "Краще почекати.", { purpose: "production" })
      ] },
      { title: "Інфінітивна підрядна частина", body: "У довших групах особова форма може зробити межі та виконавця прозорішими.", examples: [
        ex("Antes de eles chegarem, fechámos a porta.", "Перш ніж вони прийшли, ми зачинили двері.", { purpose: "contrast" }),
        ex("Antes de chegar, telefonei.", "Перш ніж прийти, я зателефонував/зателефонувала.", { purpose: "contrast" })
      ] },
      { title: "Не плутати з futuro do conjuntivo", body: "Особовий інфінітив і майбутній суб'юнктив можуть мати близькі переклади в українській, але належать до різних граматичних систем.", examples: [
        ex("Quando chegarem, avisem-me.", "Коли вони прийдуть, повідомте мені.", { purpose: "comprehension" }),
        ex("Antes de chegarem, avisem-me.", "Перед тим як вони прийдуть, повідомте мені.", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("É importante nós estudarmos.", "Важливо, щоб ми вчилися.", { purpose: "production" }),
      ex("Quero estudar.", "Я хочу вчитися.", { purpose: "production" }),
      ex("Antes de eles chegarem, fechámos a porta.", "Перш ніж вони прийшли, ми зачинили двері.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вважати особовий інфінітив обов'язковим після будь-якого іншого підмета", "аналізувати синтаксичну конструкцію та інформаційну прозорість", "Вибір залежить не від одного фактора.", "predicted-l1-transfer", "high"),
      mistake("ототожнювати personal infinitive з conjuntivo", "розпізнавати морфологію та сполучники", "fazerem і façam можуть перекладатися подібно, але це різні форми.", "predicted-l1-transfer", "high"),
      mistake("використовувати особовий інфінітив лише тому, що українська має підрядне речення", "порівнювати португальську конструкцію цілком", "Українське «щоб...» не має автоматичного португальського шаблону.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українська не має окремої морфологічної категорії personal infinitive. Значення часто передається підрядним реченням із особовим дієсловом або контекстом, тому український переклад приховує частину португальської граматичної інформації.",
    regional: "Особовий інфінітив є частиною нормативної португальської системи в різних різновидах; відмінності стосуються передусім частотності окремих конструкцій і стилю.",
    brPt: "У PT-BR personal infinitive активно вживається, але розподіл із фінiтними підрядними та розмовними конструкціями може відрізнятися від PT-PT. Не перетворюйте приклади з одного різновиду на абсолютне правило.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: G },
      { label: "Ciberdúvidas — Gramática", url: C },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  }),

  page({
    id: "indicative-vs-subjunctive-choice", slug: "indicative-vs-subjunctive-choice", category: "moods",
    titleUk: "Indicativo чи conjuntivo: як обирається спосіб",
    titlePt: "Indicativo ou conjuntivo: como escolher",
    titleEn: "Indicative vs subjunctive: choosing the mood",
    summary: "Вибір між твердженням і підрядним способом за типом предиката, ставленням мовця та структурою речення.",
    aliases: ["indicativo чи conjuntivo","indicative vs subjunctive","indicativo ou conjuntivo","вибір способу"],
    related: ["indicative-vs-subjunctive","subjunctive-triggers","subjunctive-logic","subjunctive-not","complement-clauses-advanced"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Indicativo та conjuntivo не є простими відповідниками українських «дійсного» і «умовного» способу. У португальській вибір способу часто залежить від того, як головний предикат подає зміст підрядної частини: як твердження, оцінку, бажання, сумнів, можливість, вимогу чи інший тип ставлення. Саме тому треба вчити не список «слів-тригерів», а структуру й семантику всієї конструкції.",
    definition: "Вибір способу — граматичне оформлення предикативної частини відповідно до її синтаксичної залежності та способу, яким мовець подає її зміст.",
    formation: "У declarative contexts indicativo зазвичай подає пропозицію як твердження або предмет повідомлення: Sei que ele vem. Conjuntivo типовий у багатьох конструкціях бажання, оцінки, заперечення знання, сумніву, можливості та нереалізованої/непідтвердженої пропозиції: Espero que ele venha; É possível que ele venha. Але семантика предиката й контекст можуть змінити вибір, тому одна лексема не гарантує один спосіб.",
    uses: [
      { title: "Знання й повідомлення", body: "Предикати знання, факту та повідомлення часто вводять indicativo, коли підрядний зміст подано як прийнятий факт.", examples: [
        ex("Sei que ele trabalha aqui.", "Я знаю, що він тут працює.", { purpose: "production" }),
        ex("Disseram que a reunião começa às nove.", "Сказали, що зустріч починається о дев'ятій.", { purpose: "comprehension" })
      ] },
      { title: "Бажання й оцінка", body: "Бажання, наказ, оцінка або вимога часто створюють середовище для conjuntivo.", examples: [
        ex("Espero que ele venha.", "Сподіваюся, що він прийде.", { purpose: "production" }),
        ex("É importante que todos participem.", "Важливо, щоб усі взяли участь.", { purpose: "production" })
      ] },
      { title: "Сумнів і можливість", body: "Непевність часто пов'язана з conjuntivo, але сила й джерело непевності мають значення.", examples: [
        ex("É possível que chova.", "Можливо, що піде дощ.", { purpose: "production" }),
        ex("Duvido que ele saiba.", "Сумніваюся, що він знає.", { purpose: "production" })
      ] },
      { title: "Негативна рамка", body: "Заперечення знання чи впевненості може змінити подання підрядної пропозиції.", examples: [
        ex("Não sei se ele vem.", "Я не знаю, чи він прийде.", { purpose: "contrast" }),
        ex("Não acredito que ele venha.", "Не думаю, що він прийде.", { purpose: "contrast" })
      ] },
      { title: "Контекст важливіший за ключове слово", body: "Одна й та сама лексема може вводити різні структури, а конструкції з que не завжди вимагають conjuntivo.", examples: [
        ex("Acredito que ele vem.", "Я вважаю, що він прийде / приходить.", { purpose: "comprehension" }),
        ex("Não acredito que ele venha.", "Не думаю, що він прийде.", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Sei que ele vem.", "Я знаю, що він прийде / приходить.", { purpose: "contrast" }),
      ex("Espero que ele venha.", "Сподіваюся, що він прийде.", { purpose: "production" }),
      ex("É possível que chova.", "Можливо, що піде дощ.", { purpose: "production" })
    ],
    mistakes: [
      mistake("вивчати «que + conjuntivo» як автоматичне правило", "визначати головний предикат і його семантичне ставлення", "Que лише з'єднує частини; сам по собі не визначає спосіб.", "predicted-l1-transfer", "high"),
      mistake("перекладати conjuntivo як український умовний спосіб", "порівнювати функцію конструкції", "Conjuntivo має значно ширший діапазон уживання.", "predicted-l1-transfer", "high"),
      mistake("вважати всі дієслова думки однаковими", "перевіряти стверджувальну, негативну, питальну та оцінну рамку", "Semantics і polarity можуть впливати на вибір.", "editorial", "medium")
    ],
    ukrainian: "Українська виражає багато таких відмінностей лексично й синтаксично: «знаю, що», «сподіваюся, що», «сумніваюся, що», «можливо, що». Вона не має прямої морфологічної відповідності до португальського conjuntivo, тому переклад не є надійним способом визначити форму.",
    regional: "Базовий контраст indicativo/conjuntivo спільний для португальської. Частотність окремих варіантів і межі допустимої варіативності можуть залежати від жанру та різновиду.",
    brPt: "У PT-BR деякі розмовні конструкції можуть частіше співіснувати з альтернативними способами формулювання, але нормативний conjuntivo залишається продуктивною системою. Не трактуйте розмовну варіативність як зникнення категорії.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: G },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: G3 },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  }),

  page({
    id: "preterite-perfect-imperfect", slug: "preterite-perfect-imperfect", category: "tenses",
    titleUk: "Pretérito perfeito чи imperfeito: як подати минулу подію",
    titlePt: "Pretérito perfeito ou imperfeito",
    titleEn: "Perfect vs imperfect past",
    summary: "Завершена подія, стан, тло, повторюваність і часовий ракурс у минулому.",
    aliases: ["perfeito чи imperfeito","pretérito perfeito","pretérito imperfeito","минулий час"],
    related: ["preterite-perfect","preterite-imperfect","aspect-overview","past-habitual","past-narrative"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Розрізнення pretérito perfeito та pretérito imperfeito не дорівнює простому українському «доконаний / недоконаний вид». Обидві португальські форми можуть описувати одну й ту саму подію з різним часовим ракурсом: perfeito часто подає її як цілісний факт у минулому, imperfeito — як тло, стан, процес або повторювану ситуацію.",
    definition: "Pretérito perfeito simples і pretérito imperfeito — два минулі часи, які різняться насамперед способом структурування минулої ситуації та її зв'язком із часовою перспективою оповіді.",
    formation: "Perfeito має власні закінчення та нерегулярні форми: fui, fiz, tive. Imperfeito має іншу парадигму: era, fazia, tinha. Вибір форми не визначається лише тим, чи український переклад містить доконаний вид. Важливо, чи подія виступає як завершений епізод, повторюваний фон, стан або подія, перервана іншою подією.",
    uses: [
      { title: "Послідовність подій", body: "Perfeito часто рухає наратив уперед, подаючи окремі завершені епізоди.", examples: [
        ex("Cheguei, abri a porta e entrei.", "Я прийшов/прийшла, відчинив/відчинила двері й увійшов/увійшла.", { purpose: "production" }),
        ex("Ontem comprei um livro.", "Учора я купив/купила книжку.", { purpose: "production" })
      ] },
      { title: "Тло й стан", body: "Imperfeito подає ситуацію як фон, стан або процес, на тлі якого відбувається інша подія.", examples: [
        ex("Quando cheguei, ela dormia.", "Коли я прийшов/прийшла, вона спала.", { purpose: "contrast" }),
        ex("Era tarde e chovia.", "Було пізно і йшов дощ.", { purpose: "production" })
      ] },
      { title: "Повторювана ситуація", body: "Imperfeito часто описує звичні або повторювані дії без акценту на окремому завершенні.", examples: [
        ex("Quando era criança, brincava aqui.", "Коли я був/була дитиною, я тут грався/гралася.", { purpose: "production" }),
        ex("Todos os domingos íamos à praia.", "Щонеділі ми ходили на пляж.", { purpose: "production" })
      ] },
      { title: "Один контекст — різний ракурс", body: "Заміна часу може змінити структуру події, а не лише «час» перекладу.", examples: [
        ex("Ele entrou quando eu lia.", "Він увійшов, коли я читав/читала.", { purpose: "contrast" }),
        ex("Ele entrou quando eu li a mensagem.", "Він увійшов, коли я прочитав/прочитала повідомлення.", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Ontem comprei um livro.", "Учора я купив/купила книжку.", { purpose: "production" }),
      ex("Quando cheguei, ela dormia.", "Коли я прийшов/прийшла, вона спала.", { purpose: "production" }),
      ex("Quando era criança, brincava aqui.", "Коли я був/була дитиною, я тут грався/гралася.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вважати perfeito = український доконаний вид, а imperfeito = недоконаний", "визначати часовий ракурс португальського речення", "Вид і час перетинаються, але не збігаються.", "predicted-l1-transfer", "high"),
      mistake("ставити imperfeito для будь-якої довгої дії", "питати, чи дія є тлом, станом або звичкою", "Тривалість сама по собі не вимагає imperfeito.", "editorial", "high"),
      mistake("ставити perfeito для кожної завершеної дії в українському оригіналі", "враховувати її роль у наративі", "Контекст може вимагати imperfeito як тла.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українська має видову систему, яка часто підказує переклад, але не кодує той самий набір часово-наративних відмінностей. «Я читав» може бути тлом, звичкою або процесом; португальський вибір треба встановлювати з контексту.",
    regional: "Контраст двох часів є спільним для PT-BR і PT-PT; відмінності частіше стосуються лексичних маркерів, розмовної частотності та окремих регіональних конструкцій.",
    brPt: "У PT-BR розмовна мова має власні часові стратегії, зокрема інші способи говорити про минулу тривалість і недавність, але це не скасовує базового контрасту perfeito/imperfeito.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: G },
      { label: "Ciberdúvidas — Gramática", url: C },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  }),

  page({
    id: "progressive-br-pt-choice", slug: "progressive-br-pt-choice", category: "gerund",
    titleUk: "Прогресив: estar a + infinitivo чи estar + gerúndio",
    titlePt: "Progressivo: estar a + infinitivo ou estar + gerúndio",
    titleEn: "Progressive: estar a + infinitive vs estar + gerund",
    summary: "Дві основні моделі прогресивного значення та їхній розподіл у PT-PT і PT-BR.",
    aliases: ["прогресив","estar a","estar + gerúndio","progressive","PT-BR PT-PT"],
    related: ["progressive-pt","progressive-br-pt","progressive-br-pt-choice","aspect-overview","gerund-overview"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Португальська має дві помітні моделі для прогресивної інтерпретації: estar a + infinitivo та estar + gerúndio. Вони не розподіляються абсолютно механічно, але перша конструкція є особливо характерною для європейського португальського, тоді як estar + gerúndio має центральне значення в бразильському португальському. Для україномовного студента важливо вчити їх як варіанти однієї аспектуальної функції, а не як дві різні «форми часу».",
    definition: "Прогресивна конструкція подає ситуацію як таку, що триває в певний момент або часовий інтервал. У португальській найважливіші моделі — estar a + infinitivo та estar + gerúndio.",
    formation: "PT-PT: estar + a + infinitivo — Estou a trabalhar. PT-BR: estar + gerúndio — Estou trabalhando. Обидві моделі можуть бути зрозумілими ширше, але частотність і стилістична природність різняться. Gerúndio в PT-PT не обмежується прогресивом, а конструкція estar a + infinitivo не є «помилковою бразильською» — це питання різновиду й норми.",
    uses: [
      { title: "PT-PT: estar a + infinitivo", body: "Це базова прогресивна модель європейського португальського.", examples: [
        ex("Estou a trabalhar.", "Я зараз працюю.", { variety: "PT", purpose: "production" }),
        ex("Estamos a preparar o jantar.", "Ми готуємо вечерю.", { variety: "PT", purpose: "production" })
      ] },
      { title: "PT-BR: estar + gerúndio", body: "Бразильська норма широко використовує gerúndio для прогресивної конструкції.", examples: [
        ex("Estou trabalhando.", "Я зараз працюю.", { variety: "BR", purpose: "production" }),
        ex("Estamos preparando o jantar.", "Ми готуємо вечерю.", { variety: "BR", purpose: "production" })
      ] },
      { title: "Не плутати прогресив із простим теперішнім", body: "Прогресив виділяє перебіг ситуації, тоді як простий presente може описувати факт, звичку або актуальну ситуацію без тієї самої аспектуальної фокусировки.", examples: [
        ex("Trabalho em Lisboa.", "Я працюю в Лісабоні.", { purpose: "contrast" }),
        ex("Estou a trabalhar em Lisboa.", "Я зараз працюю в Лісабоні / перебуваю в процесі роботи в Лісабоні.", { variety: "PT", purpose: "contrast" })
      ] },
      { title: "Gerúndio має й інші функції", body: "У PT-BR та PT-PT gerúndio може виступати поза estar + gerúndio; тому не кожне -ndo є прогресивом.", examples: [
        ex("Saiu correndo.", "Він/вона вибіг(ла) / вийшов/вийшла бігом.", { variety: "BR", purpose: "comprehension" }),
        ex("Chegou sorrindo.", "Він/вона прийшов/прийшла, усміхаючись.", { purpose: "comprehension" })
      ] }
    ],
    examples: [
      ex("Estou a estudar.", "Я зараз навчаюся.", { variety: "PT", purpose: "production" }),
      ex("Estou estudando.", "Я зараз навчаюся.", { variety: "BR", purpose: "production" }),
      ex("Trabalho todos os dias.", "Я працюю щодня.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("вважати estar a + infinitivo неправильним у Бразилії або estar + gerúndio неправильним у Португалії без урахування контексту", "маркувати variety та стиль", "Плурицентрична норма не зводиться до одного універсального шаблону.", "editorial", "high"),
      mistake("вважати будь-який gerúndio прогресивом", "перевіряти головне дієслово estar і значення конструкції", "Gerúndio має ширше використання.", "predicted-l1-transfer", "high"),
      mistake("перекладати прогресив лише українським «зараз»", "передавати аспектуальну функцію", "Прогресив може описувати перебіг у ширшому часовому інтервалі.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українська переважно виражає перебіг лексично або контекстом: «працюю зараз», «працюю над цим». Португальська може граматично кодувати прогресивність окремою конструкцією.",
    regional: "Це одна з найнаочніших відмінностей між PT-PT та PT-BR. Інші лузофонні різновиди можуть мати власні частотні профілі.",
    brPt: "PT-PT: estar a + infinitivo. PT-BR: estar + gerúndio. Обидві моделі треба подавати як нормативні в їхніх відповідних системах, а не як «правильну» й «неправильну».",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: G },
      { label: "Ciberdúvidas — Gramática", url: C },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  }),

  page({
    id: "determiner-stacking", slug: "stacking", category: "determiners",
    titleUk: "Комбінації детермінативів",
    titlePt: "Combinação e empilhamento de determinantes",
    titleEn: "Determiner stacking",
    summary: "Коли перед іменником можуть поєднуватися артикль, присвійний, вказівний або квантор, а коли одна позиція виключає іншу.",
    aliases: ["детермінативи","determiner stacking","determinante","комбінації артиклів"],
    related: ["determiners-overview","articles-definite","articles-possessives","demonstratives","quantifiers-overview","determiners-agreement"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Детермінативи утворюють систему, але не всі її члени можуть просто стояти один за одним. Україномовний студент часто переносить модель безартиклевої української або сприймає every determiner як незалежне слово, яке можна додати перед іменником. У португальській позиції та комбінації мають власні обмеження: meu livro, este livro, o meu livro і todos os meus livros — не однакова структура.",
    definition: "Determiner stacking — поєднання кількох елементів детермінації в одній іменній групі з урахуванням їхньої синтаксичної сумісності та порядку.",
    formation: "Артикль може поєднуватися з присвійним: o meu livro, a minha casa. Вказівний зазвичай займає determiner-позицію, тому *o este livro не є звичайною нейтральною комбінацією. Квантори мають власні моделі: todos os livros, todas as minhas ideias. Необхідно розрізняти самостійні займенникові вживання та детермінативні позиції.",
    uses: [
      { title: "Артикль + присвійний", body: "У багатьох нейтральних моделях PT-PT і PT-BR присвійний може супроводжуватися означеним артиклем.", examples: [
        ex("O meu livro está aqui.", "Моя книжка тут.", { variety: "PT", purpose: "production" }),
        ex("A minha casa é pequena.", "Мій будинок маленький.", { purpose: "production" })
      ] },
      { title: "Вказівний без означеного артикля", body: "este/esse/aquele самі займають визначальну позицію.", examples: [
        ex("Este livro é novo.", "Ця книжка нова.", { purpose: "production" }),
        ex("Aquele problema continua.", "Та проблема триває.", { purpose: "production" })
      ] },
      { title: "Квантор + determiner", body: "Деякі квантори утворюють моделі на кшталт todos os, muitas das, cada um dos.", examples: [
        ex("Todos os estudantes chegaram.", "Усі студенти прийшли.", { purpose: "production" }),
        ex("Muitos dos estudantes chegaram cedo.", "Багато зі студентів прийшли рано.", { purpose: "production" }),
        ex("Cada um dos candidatos respondeu.", "Кожен із кандидатів відповів.", { purpose: "comprehension" })
      ] },
      { title: "Не кожна послідовність допустима", body: "Неможливо механічно комбінувати елементи за принципом «додай ще один артикль».", examples: [
        ex("Este livro é meu.", "Ця книжка моя.", { purpose: "contrast" }),
        ex("O meu livro é este.", "Моя книжка — ось ця.", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("O meu livro está aqui.", "Моя книжка тут.", { purpose: "production" }),
      ex("Este livro é novo.", "Ця книжка нова.", { purpose: "production" }),
      ex("Todos os estudantes chegaram.", "Усі студенти прийшли.", { purpose: "production" })
    ],
    mistakes: [
      mistake("вважати o meu livro неправильним через відсутність артикля в українській", "вивчати присвійні в їхній португальській determiner-моделі", "Українська не має артиклів, а португальська може мати артикль перед присвійним.", "predicted-l1-transfer", "high"),
      mistake("ставити означений артикль перед кожним вказівним", "розрізняти determiner-позиції", "este/esse/aquele не потребують нейтрального *o перед собою.", "predicted-l1-transfer", "high"),
      mistake("поєднувати квантори без перевірки конструкції", "вивчати моделі todos os, muitos dos, cada um dos як структурні цілі", "Квантифікатор визначає власну модель.", "editorial", "medium")
    ],
    ukrainian: "Українська не має артикля й дозволяє іншу організацію означення: «моя книжка», «ця книжка», «усі студенти». Португальський студент має бачити не переклад окремих слів, а всю іменну групу як структурну одиницю.",
    regional: "Комбінації з присвійними мають варіантність між різновидами та стилями, але базові моделі determiners є спільними.",
    brPt: "У PT-BR вживання означеного артикля з присвійними має регіональну й стилістичну варіативність. Не переносіть правило «завжди є artigo» на всі бразильські контексти.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: G },
      { label: "Ciberdúvidas — Gramática", url: C },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  }),

  page({
    id: "article-omission", slug: "omission", category: "articles",
    titleUk: "Коли артикль не вживається",
    titlePt: "Omissão do artigo",
    titleEn: "Article omission",
    summary: "Нульовий артикль у власних назвах, масових іменниках, узагальненнях та сталих конструкціях.",
    aliases: ["пропуск артикля","article omission","omissão do artigo","нульовий артикль"],
    related: ["zero-article","articles-definite","articles-indefinite","articles-proper-names","articles-mass-nouns","generic-reference"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Португальська не ставить артикль перед кожним іменником. Нульова детермінація є системною і залежить від типу іменної групи, референції, рахованості, власних назв, предикативних конструкцій та лексикалізованих сполук. Для україномовного студента проблема особлива: українська взагалі не має артиклів, тому потрібно навчитися бачити не «відсутнє слово», а окремий варіант граматичної структури.",
    definition: "Оміcія артикля — вживання іменної групи без overt definite/indefinite article там, де така нульова детермінація є граматично та семантично мотивованою.",
    formation: "Нульова форма особливо важлива з деякими власними назвами, нерахованими іменниками в загальному значенні та в окремих предикативних або сталих моделях. Водночас нульовий артикль не є універсальним способом сказати «взагалі»: у generic reference можливі O cão, cães, água та інші моделі з різними умовами.",
    uses: [
      { title: "Масові й абстрактні іменники", body: "У загальних твердженнях речовина або абстрактне поняття може виступати без артикля.", examples: [
        ex("Água é essencial à vida.", "Вода необхідна для життя.", { purpose: "production" }),
        ex("Liberdade é importante.", "Свобода важлива.", { purpose: "comprehension" })
      ] },
      { title: "Власні назви", body: "Багато власних назв мають власні правила детермінації; не можна автоматично ставити o/a перед кожною назвою.", examples: [
        ex("Portugal fica na Europa.", "Португалія розташована в Європі.", { purpose: "production" }),
        ex("Lisboa é a capital de Portugal.", "Лісабон — столиця Португалії.", { purpose: "production" })
      ] },
      { title: "Предикативна характеристика", body: "Професія, роль або класифікація після ser часто не потребує артикля, особливо в типовому предикативному читанні.", examples: [
        ex("Ela é médica.", "Вона лікарка.", { purpose: "production" }),
        ex("Ele é professor.", "Він викладач.", { purpose: "production" })
      ] },
      { title: "Контраст із конкретною референцією", body: "Той самий іменник може вимагати детермінатива, коли йдеться про конкретний референт.", examples: [
        ex("Ele é professor.", "Він викладач.", { purpose: "contrast" }),
        ex("Ele é o professor da turma.", "Він — викладач цієї групи.", { purpose: "contrast" })
      ] },
      { title: "Нульовий артикль не тотожний відсутності референції", body: "Іменник без артикля все одно може мати референт, а конкретність визначається всією конструкцією.", examples: [
        ex("Comprei pão.", "Я купив/купила хліба.", { purpose: "production" }),
        ex("Comprei o pão.", "Я купив/купила хліб.", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Água é essencial à vida.", "Вода необхідна для життя.", { purpose: "production" }),
      ex("Ela é médica.", "Вона лікарка.", { purpose: "production" }),
      ex("Comprei pão.", "Я купив/купила хліба.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("вважати, що кожен португальський іменник мусить мати o/a/um/uma", "перевіряти тип іменної групи та її референцію", "Нульова детермінація є частиною системи.", "predicted-l1-transfer", "high"),
      mistake("ставити нульовий артикль щоразу, коли український іменник без артикля", "аналізувати португальську структуру", "Відсутність артикля в українській нічого не доводить про португальську.", "predicted-l1-transfer", "high"),
      mistake("ототожнювати zero article з generic reference", "розрізняти референцію, рахованість і конструкцію", "Родові значення можливі і з означеним артиклем.", "editorial", "high")
    ],
    ukrainian: "Українська не маркує артиклем означеність, тому «хліб», «цей хліб» і «хліб як продукт» розрізняються іншими засобами. У португальській вибір артикля або його відсутність є частиною граматичної організації іменної групи.",
    regional: "Оміcія артикля має спільне ядро, але власні назви, професійні предикати та деякі mass/generic patterns демонструють варіативність за різновидами й регістрами.",
    brPt: "PT-BR має власні закономірності щодо артиклів із власними назвами, присвійними та деякими загальними іменниками. Для production потрібна прив'язка до конкретної моделі, а не загальне правило «у Бразилії артиклі не ставлять».",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: G },
      { label: "Ciberdúvidas — Gramática", url: C },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  })
];
