import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

export const pages: GrammarPage[] = [
  page({
    id: "specificity",
    slug: "specificity",
    category: "articles",
    titleUk: "Означеність і специфічність",
    titlePt: "Definitude e especificidade",
    titleEn: "Definiteness and specificity",
    summary: "Чому означеність і специфічність — не те саме.",
    aliases: ["specificity","definitude","специфічність","означеність"],
    related: ["articles-definite","articles-indefinite","definiteness","generic-reference-articles"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Означеність відповідає на питання, чи референт ідентифікований у дискурсі; специфічність — чи мовець має на увазі певний конкретний референт. Не кожна специфічна іменна група є означеною, і переклад українською часто не показує цієї різниці.",
    definition: "Специфічність — властивість іменної групи стосуватися певного конкретного референта з погляду мовця; означеність стосується способу ідентифікації референта в дискурсі.",
    uses: [
      { title: "Означений референт", body: "O livro pode вказувати на книгу, яку співрозмовники можуть ідентифікувати.", examples: [ex("O livro está na mesa.", "Книжка на столі.")] },
      { title: "Специфічний, але не обов'язково означений", body: "Um livro може бути конкретною книжкою в думці мовця, хоча слухач ще не знає, яка саме.", examples: [ex("Procuro um livro que comprei ontem.", "Я шукаю книжку, яку купив/купила вчора.")] }
    ],
    examples: [ex("Quero comprar um carro.", "Я хочу купити автомобіль."), ex("O carro que comprámos é azul.", "Автомобіль, який ми купили, синій.")],
    mistakes: [mistake("вважати um = неспецифічний, а o = специфічний","розрізняти тип референції та спосіб ідентифікації","Артикль не кодує специфічність як просту бінарну ознаку.","predicted-l1-transfer","high")],
    ukrainian: "Українська часто залишає ці відмінності контексту, лексики та порядку слів, тоді як португальський артикль додає граматичну інформацію.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/" },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/" },
      { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }
    ],
    regional: "Базове розрізнення концептуальне; конкретні інтерпретації залежать від контексту.",
  }),
  page({
    id: "lhe-vs-o-a",
    slug: "lhe-vs-o-a",
    category: "pronouns",
    titleUk: "Lhe та o/a: непрямий і прямий додаток",
    titlePt: "Lhe e o/a",
    titleEn: "Lhe vs o/a",
    summary: "Як розрізнити клітичний займенник непрямого та прямого додатка.",
    aliases: ["lhe","o/a","lhe vs o","прямий і непрямий додаток"],
    related: ["clitic-pronouns","object-pronouns","verb-government","clitic-placement"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Lhe та o/a не є двома стилістичними варіантами одного займенника. У базовій системі lhe пов'язаний із непрямим додатком, а o/a — із прямим. Переклад «його/їй» може приховувати цю різницю.",
    definition: "Lhe — клітична форма третьої особи для типових непрямих додатків; o, a, os, as — форми прямого додатка.",
    uses: [
      { title: "Непрямий додаток", body: "Lhe відповідає аргументу, який у відповідній дієслівній рамці є непрямим.", examples: [ex("Dei-lhe o livro.", "Я дав/дала йому/їй книжку.")] },
      { title: "Прямий додаток", body: "O/a замінює прямий додаток.", examples: [ex("Vi-o ontem.", "Я бачив/бачила його вчора.", { variety: "PT" })] }
    ],
    examples: [ex("Expliquei-lhe o problema.", "Я пояснив/пояснила йому/їй проблему."), ex("Conheço-o bem.", "Я добре його знаю.", { variety: "PT" })],
    mistakes: [mistake("замінювати будь-яке «йому/його» одним португальським займенником","визначати синтаксичну роль аргумента та керування дієслова","Український відмінок не є прямою таблицею португальських клітик.","predicted-l1-transfer","high")],
    ukrainian: "Українська відмінкова система робить ролі додатків морфологічно помітними. У португальській треба враховувати дієслівну валентність і систему клітик.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/" },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/" },
      { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }
    ],
    regional: "У PT-BR система об'єктних займенників у живому мовленні відрізняється від консервативних письмових моделей; не змішуйте нормативну форму клітики з розмовними займенниковими стратегіями.",
  }),
  page({
    id: "personal-infinitive-choice",
    slug: "personal-choice",
    category: "infinitive",
    titleUk: "Коли вибирати особовий інфінітив",
    titlePt: "Escolha do infinitivo pessoal",
    titleEn: "Choosing the personal infinitive",
    summary: "Вибір особового інфінітива за структурою підмета, а не за простим перекладом.",
    aliases: ["особовий інфінітив","infinitivo pessoal","personal infinitive choice"],
    related: ["personal-infinitive","impersonal-infinitive","infinitive-selection","subject-control"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Особовий інфінітив не можна зводити до правила «різні підмети = особовий». Він особливо корисний, коли треба явно показати суб'єкта інфінітивної ситуації або коли структура робить його окремим від підмета головної частини.",
    definition: "Особовий інфінітив — інфінітив із формою, що кодує особу й число суб'єкта: falar, falares, falarmos, falarem тощо.",
    uses: [
      { title: "Явний суб'єкт", body: "Флексія допомагає позначити, хто виконує інфінітивну дію.", examples: [ex("É importante nós estudarmos.", "Важливо, щоб ми вчилися.")] },
      { title: "Контраст суб'єктів", body: "Особова форма може зробити відмінність суб'єктів явною.", examples: [ex("Antes de eles chegarem, saímos.", "До того як вони прийшли, ми пішли.")]}
    ],
    examples: [ex("É melhor irmos agora.", "Краще нам піти зараз."), ex("Depois de chegares, liga-me.", "Після того як ти приїдеш, зателефонуй мені.")],
    mistakes: [mistake("вважати особовий інфінітив обов'язковим при кожному різному підметі","визначати структуру, суб'єкта та комунікативну потребу в явному маркуванні","Вибір залежить від конструкції та інтерпретації, а не від одного механічного тесту.","predicted-l1-transfer","high")],
    ukrainian: "Українська не має морфологічно тотожної форми особового інфінітива. Український переклад часто використовує підрядне речення, тому форму португальського інфінітива легко не помітити.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/" },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/" },
      { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }
    ],
    regional: "Особовий інфінітив є важливою частиною системи, але конкретні моделі й частотність слід описувати разом із конструкцією.",
  }),
  page({
    id: "indicative-vs-subjunctive-choice",
    slug: "indicative-vs-subjunctive-choice",
    category: "moods",
    titleUk: "Indicativo чи conjuntivo: як визначати вибір",
    titlePt: "Indicativo ou conjuntivo",
    titleEn: "Indicative vs subjunctive choice",
    summary: "Вибір способу за типом предиката, ставленням мовця та структурою підрядної частини.",
    aliases: ["indicativo vs conjuntivo","indicativo ou conjuntivo","індикатив чи кон'юнктив"],
    related: ["indicative-vs-subjunctive","subjunctive-overview","complement-clauses","subjunctive-triggers"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Вибір indicativo/conjuntivo не визначається одним українським перекладом «що». Треба враховувати тип головного предиката, модальність, заперечення, оцінку, бажання, сумнів та синтаксичну конструкцію.",
    definition: "Вибір способу — синтаксично-семантична залежність між типом конструкції та морфологічною формою дієслова в залежній частині.",
    uses: [
      { title: "Предикат із твердженням", body: "Предикати знання, повідомлення та переконання в типових стверджувальних конструкціях допускають indicativo.", examples: [ex("Sei que ele vem.", "Я знаю, що він прийде.")] },
      { title: "Воля та оцінка", body: "Бажання, необхідність, оцінка та інші конструкції можуть вимагати conjuntivo.", examples: [ex("Quero que ele venha.", "Я хочу, щоб він прийшов.")] },
      { title: "Заперечення і сумнів", body: "Заперечення або епістемічна невпевненість можуть змінювати вибір способу залежно від конструкції.", examples: [ex("Duvido que ele venha.", "Сумніваюся, що він прийде.")] }
    ],
    examples: [ex("Acho que funciona.", "Думаю, що це працює."), ex("É possível que funcione.", "Можливо, що це працює / працюватиме.")],
    mistakes: [mistake("перекладати українське «що» як indicativo, а «щоб» як conjuntivo","аналізувати головний предикат і тип залежності","Українські сполучники не є механічними маркерами португальського способу.","predicted-l1-transfer","high")],
    ukrainian: "Українська має умовний і наказовий способи та інші засоби модальності, але не має тієї самої системи розподілу conjuntivo. Переклад «щоб» корисний лише як семантична підказка.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/" },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/" },
      { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }
    ],
    regional: "Базовий розподіл спільний, але окремі предикати й розмовні моделі можуть варіюватися. Конкретні винятки треба перевіряти за джерелом.",
  }),
  page({
    id: "preterite-perfect-imperfect",
    slug: "preterite-perfect-imperfect",
    category: "tenses",
    titleUk: "Pretérito perfeito чи imperfeito",
    titlePt: "Pretérito perfeito e imperfeito",
    titleEn: "Perfect vs imperfect past",
    summary: "Завершена подія та фонова, звична або незавершена ситуація в минулому.",
    aliases: ["perfeito imperfeito","pretérito perfeito","pretérito imperfeito","минулий час"],
    related: ["tense-aspect","past-tense","aspect-overview","sequence-of-tenses"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Pretérito perfeito та imperfeito не є прямими відповідниками українського доконаного й недоконаного виду. Perfeito часто подає подію як завершену в часовій рамці, тоді як imperfeito може будувати фон, звичність, тривалість або стан.",
    definition: "Pretérito perfeito та pretérito imperfeito — минулі форми, які по-різному організовують часову перспективу й аспектуальну інтерпретацію ситуації.",
    uses: [
      { title: "Подія в послідовності", body: "Perfeito часто використовується для окремих подій у сюжетній часовій послідовності.", examples: [ex("Cheguei, vi e saí.", "Я прийшов/прийшла, побачив/побачила й пішов/пішла.")] },
      { title: "Фон і стан", body: "Imperfeito часто подає стан або процес як фон для іншої події.", examples: [ex("Estava a ler quando ele chegou.", "Я читав/читала, коли він прийшов.")] },
      { title: "Звичка", body: "Imperfeito може описувати регулярну ситуацію в минулому.", examples: [ex("Ia lá todos os domingos.", "Я ходив/ходила туди щонеділі.")] }
    ],
    examples: [ex("Ontem estudei duas horas.", "Учора я вчився/вчилася дві години."), ex("Quando era criança, estudava aqui.", "Коли я був/була дитиною, я навчався/навчалася тут.")],
    mistakes: [mistake("perfeito = доконаний вид, imperfeito = недоконаний вид","визначати часову рамку, аспектуальну перспективу та дискурсивну функцію","Португальські минулі форми не є копією української видової опозиції.","predicted-l1-transfer","high")],
    ukrainian: "Український вид може бути корисною підказкою, але не алгоритмом. Особливо важливо дивитися на фон/подію, стан, звичність і завершеність у конкретній часовій рамці.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/" },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/" },
      { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }
    ],
    regional: "Базове розрізнення є системним; перифрастичні конструкції та деякі частотні моделі можуть відрізнятися між BR і PT.",
  }),
  page({
    id: "progressive-br-pt-choice",
    slug: "progressive-br-pt-choice",
    category: "gerund",
    titleUk: "Прогресив: estar a + infinitivo та estar + gerúndio",
    titlePt: "Estar a + infinitivo e estar + gerúndio",
    titleEn: "Progressive: estar a vs estar + gerund",
    summary: "Порівняння основних прогресивних моделей PT-PT та PT-BR.",
    aliases: ["progressive BR PT","estar a","estar + gerúndio","прогресив"],
    related: ["progressive-br-pt","gerund","complex-predicates"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Для значення поточної або розгорнутої дії основні різновиди португальської використовують різні переваги: PT-PT широко має estar a + infinitivo, PT-BR — estar + gerúndio. Це не означає, що кожен різновид має лише одну форму.",
    definition: "Прогресивна конструкція — перифраза, яка подає ситуацію як розгорнуту відносно певної часової точки.",
    uses: [
      { title: "PT-PT", body: "Estar a + infinitivo є типовою моделлю.", examples: [ex("Estou a estudar.", "Я зараз навчаюся.", { variety: "PT" })] },
      { title: "PT-BR", body: "Estar + gerúndio є типовою моделлю.", examples: [ex("Estou estudando.", "Я зараз навчаюся.", { variety: "BR" })] }
    ],
    examples: [ex("Ela está a trabalhar.", "Вона зараз працює.", { variety: "PT" }), ex("Ela está trabalhando.", "Вона зараз працює.", { variety: "BR" })],
    mistakes: [mistake("вважати одну модель єдино граматичною для всієї португальської","спочатку визначати різновид і регістр","BR/PT розрізняються частотними профілями прогресивних конструкцій.","predicted-l1-transfer","medium")],
    ukrainian: "Українська часто передає прогресивність лексично, контекстом або формою недоконаного виду. Тому переклад не завжди показує необхідність перифрази.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/" },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/" },
      { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }
    ],
    regional: "PT-PT і PT-BR мають різні частотні переваги. Не перетворюйте їх на взаємовиключні правила без контексту.",
  })
];
