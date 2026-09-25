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
    related: ["articles-definite","articles-indefinite","articles-definite","generic-reference-articles"],
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
    related: ["clitic-pronouns","object-pronouns","government-overview","clitic-placement"],
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
    related: ["personal-infinitive","impersonal-infinitive","personal-vs-impersonal","raising-and-control"],
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
    related: ["tense-aspect","tense-vs-ukrainian","aspect-overview","sequence-of-tenses"],
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
    related: ["progressive-br-pt","gerund-usage","complex-predicates"],
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

  page({
    id: "article-omission",
    slug: "omission",
    category: "articles",
    titleUk: "Опущення артикля: коли воно граматично мотивоване",
    titlePt: "Omissão do artigo",
    titleEn: "Article omission",
    summary: "Чим системне опущення артикля відрізняється від випадкового «пропуску».",
    aliases: ["опущення артикля", "article omission", "omissão do artigo", "без артикля"],
    related: ["zero-article", "articles-definite", "articles-indefinite", "contractions-overview"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Опущення артикля не завжди означає нульовий артикль і не завжди є помилкою. У португальській є конструкції, де іменна група закономірно з'являється без детермінатора, а є випадки, де артикль очікується. Для україномовного студента важливо не переносити українське правило «іменник може стояти сам» на всі контексти.",
    definition: "Опущення артикля — поверхневе явище; граматично треба розрізняти нульову детермінацію, еліптичну структуру та випадки, де артикль не реалізований через властивості конструкції.",
    uses: [
      { title: "Нуль у сталих моделях", body: "У деяких предикативних та прийменникових моделях голий іменник є частиною звичної конструкції.", examples: [ex("Estou com fome.", "Я голодний/голодна."), ex("Vou a casa.", "Я йду додому.")] },
      { title: "Власна назва без артикля", body: "Частина власних назв, зокрема багато міст і деякі країни, функціонує без артикля.", examples: [ex("Moro em Lisboa.", "Я живу в Лісабоні."), ex("Vivo em Portugal.", "Я живу в Португалії.")] },
      { title: "Не плутати з помилковим пропуском", body: "Коли референт уже ідентифікований і конструкція вимагає детермінатора, українська звичка до голого іменника може привести до ненормативної форми.", examples: [ex("Vi o livro ontem.", "Я бачив/бачила книжку вчора.")] }
    ],
    examples: [ex("Gosto de café.", "Я люблю каву."), ex("Gosto do café que compraste.", "Я люблю каву, яку ти купив/купила.")],
    mistakes: [mistake("опускати артикль щоразу, коли українською іменник стоїть без нього", "спочатку визначати конструкцію та тип референції", "Українська не має тієї самої системи детермінації, тому буквальний перенос є ненадійним.", "predicted-l1-transfer", "high")],
    ukrainian: "В українській нульова детермінація є звичайною для дуже широкого кола іменних груп. У португальській відсутність артикля треба інтерпретувати в межах конкретної конструкції.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/" },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/" },
      { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }
    ],
    regional: "Конкретні моделі нульової детермінації можуть мати варіантність; не перетворюйте один приклад на універсальне правило."
  }),
  page({
    id: "articles-professions-roles",
    slug: "professions-roles",
    category: "articles",
    titleUk: "Артикль із професіями та ролями",
    titlePt: "Artigo com profissões e papéis",
    titleEn: "Articles with professions and roles",
    summary: "Чому професія після ser часто має нуль, а конкретна роль — артикль.",
    aliases: ["професії та артикль", "profissões", "roles", "ser médico", "артикль із професією"],
    related: ["zero-article", "articles-definite", "articles-indefinite", "articles-proper-names"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Після ser професія, національність або роль часто подається без артикля, коли йдеться про класифікацію особи: Ele é médico. Якщо ж мовець ідентифікує конкретного носія ролі або додає обмежувальний модифікатор, означений чи неозначений артикль може з'явитися. Отже, правило не «професії завжди без артикля».",
    definition: "Артикль у назвах професій і ролей залежить від того, чи іменна група класифікує особу, чи референційно ідентифікує конкретного представника ролі.",
    uses: [
      { title: "Класифікація після ser", body: "Нульова детермінація типова, коли професія називає статус або клас особи.", examples: [ex("A Ana é médica.", "Ана — лікарка."), ex("O João é professor.", "Жуан — викладач.", { variety: "PT" })] },
      { title: "Конкретний носій ролі", body: "Означений артикль з'являється, коли йдеться про конкретну особу, яку слухач може ідентифікувати за роллю.", examples: [ex("Ele é o médico que nos atendeu.", "Він той лікар, який нас приймав.")] },
      { title: "Неозначений представник", body: "Um/uma може представляти одного представника класу або вводити новий референт.", examples: [ex("Ela é uma médica muito experiente.", "Вона дуже досвідчена лікарка.")] }
    ],
    examples: [ex("Sou engenheiro.", "Я інженер/інженерка."), ex("Sou o engenheiro responsável pelo projeto.", "Я інженер, відповідальний за проєкт.")],
    mistakes: [mistake("ставити o/a перед кожною професією після ser", "спершу визначати, чи це класифікація, чи ідентифікація референта", "Українська не змушує виражати цю відмінність артиклем.", "predicted-l1-transfer", "high")],
    ukrainian: "Українська передає класифікацію і референційну ідентифікацію переважно без артикля. Тому португальський контраст треба вчити через функцію всієї іменної групи.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/" },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/" },
      { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }
    ],
    regional: "Точні обмеження залежать від предиката та типу іменної групи; приклади з професіями не слід поширювати на всі конструкції."
  }),
  page({
    id: "articles-abstract-nouns",
    slug: "abstract-nouns",
    category: "articles",
    titleUk: "Артикль з абстрактними іменниками",
    titlePt: "Artigo com nomes abstratos",
    titleEn: "Articles with abstract nouns",
    summary: "Як відрізняти абстрактне поняття як тему від конкретного випадку або вияву.",
    aliases: ["абстрактні іменники", "abstract nouns", "nomes abstratos", "артикль з абстракціями"],
    related: ["zero-article", "articles-definite", "generic-reference-articles", "specificity"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Абстрактність сама по собі не визначає артикль. Такі іменники, як medo, amor, liberdade або paciência, можуть стояти без артикля в одних конструкціях і з означеним чи неозначеним — в інших. Вирішальними є референція, конструкція, кількісна інтерпретація та контекст.",
    definition: "Вибір детермінатора з абстрактним іменником залежить не від ознаки «абстрактний» як такої, а від того, як мовець структурує референт іменної групи.",
    uses: [
      { title: "Стан або властивість у сталому предикаті", body: "Деякі абстрактні іменники вживаються без артикля в усталених моделях.", examples: [ex("Tenho medo.", "Мені страшно / Я боюся."), ex("Ele tem paciência.", "Він має терпіння.")] },
      { title: "Конкретизоване поняття", body: "Означений артикль може виділяти певний стан, поняття або його вияв.", examples: [ex("O medo desapareceu.", "Страх зник.")] },
      { title: "Один вияв або різновид", body: "Неозначений артикль може вводити конкретний прояв абстрактної якості.", examples: [ex("Foi uma surpresa.", "Це було несподіванкою.")] }
    ],
    examples: [ex("Gosto de liberdade.", "Я люблю свободу."), ex("A liberdade de expressão é importante.", "Свобода слова важлива.")],
    mistakes: [mistake("вважати, що абстрактні іменники завжди без артикля", "аналізувати конструкцію та референцію", "Абстрактність не є достатньою умовою для вибору нульової форми.", "predicted-l1-transfer", "high")],
    ukrainian: "Українська так само не вимагає окремого детермінатора для абстрактних іменників, тому форма португальської може здаватися надлишковою. Її треба пов'язувати з референційною структурою.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/" },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/" },
      { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }
    ],
    regional: "Вибір артикля залежить передусім від конструкції та інтерпретації, а не від різновиду португальської."
  }),
  page({
    id: "articles-mass-nouns",
    slug: "mass-nouns",
    category: "articles",
    titleUk: "Артикль із речовинними та масовими іменниками",
    titlePt: "Artigo com nomes massivos",
    titleEn: "Articles with mass nouns",
    summary: "Café, água, vinho та інші масові іменники: речовина, конкретна порція чи певна кількість.",
    aliases: ["масові іменники", "mass nouns", "nomes massivos", "речовинні іменники"],
    related: ["zero-article", "articles-definite", "articles-indefinite", "quantifiers-overview"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Масовий іменник називає речовину або масу без обов'язкового підрахунку окремих одиниць. Але це не означає «без артикля». У португальській café, o café та um café можуть мати різні референційні інтерпретації залежно від контексту: речовина, конкретна кава або одна порція/один напій.",
    definition: "Вибір детермінатора з масовим іменником залежить від того, чи йдеться про речовину загалом, конкретну масу/референт або порцію чи одиницю, що контекстуально виділена.",
    uses: [
      { title: "Речовина як клас", body: "Нульова форма може позначати речовину або загальний об'єкт споживання в певних конструкціях.", examples: [ex("Bebo café todos os dias.", "Я п'ю каву щодня.")] },
      { title: "Конкретна речовина", body: "Означений артикль виділяє певну речовину або масу, ідентифіковану контекстом.", examples: [ex("O café está frio.", "Кава холодна.")] },
      { title: "Порція або одиниця", body: "Um/uma може переосмислювати масовий іменник як порцію чи одиницю.", examples: [ex("Quero um café.", "Я хочу одну каву / одну порцію кави.")] }
    ],
    examples: [ex("Gosto de vinho.", "Я люблю вино."), ex("O vinho que comprámos é caro.", "Вино, яке ми купили, дороге.")],
    mistakes: [mistake("вважати, що масові іменники завжди без артикля", "визначати референцію: речовина, конкретна маса чи порція", "Категорія масовості не скасовує систему детермінації.", "predicted-l1-transfer", "high")],
    ukrainian: "Українська так само часто залишає назви речовин без артикля. Португальська може додатково кодувати конкретизацію або порційне читання через детермінатор.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/" },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/" },
      { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }
    ],
    regional: "Порційні та лексикалізовані читання можуть відрізнятися за словом і контекстом; не узагальнюйте один лексемний шаблон."
  }),
  page({
    id: "determiner-stacking",
    slug: "stacking",
    category: "determiners",
    titleUk: "Поєднання та несумісність детермінативів",
    titlePt: "Combinação e incompatibilidade de determinantes",
    titleEn: "Determiner stacking and incompatibility",
    summary: "Чому не всі артиклі, присвійні, вказівні та квантори можна поставити разом.",
    aliases: ["детермінативи", "stacking", "incompatibility", "поєднання детермінативів"],
    related: ["determiners-overview", "determiners-agreement", "quantifiers-overview", "articles-definite", "articles-possessives"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Детермінативи утворюють систему, але не довільний список слів перед іменником. Деякі елементи можуть поєднуватися, деякі конкурують за одну позицію, а деякі комбінації мають спеціальні значення або обмеження. Для студента важливо вчити не «скільки слів можна поставити перед іменником», а структуру конкретної іменної групи.",
    definition: "Детермінативна система має власні правила сумісності: артикль, вказівний, присвійний, квантор або неозначений детермінатив можуть займати різні структурні позиції або конкурувати в одній.",
    uses: [
      { title: "Артикль + присвійний", body: "У багатьох стандартних моделях означений артикль і присвійний детермінатив поєднуються.", examples: [ex("o meu livro", "моя книжка"), ex("a nossa casa", "наш будинок")] },
      { title: "Вказівний + іменна група", body: "Вказівні вже виконують детермінативну функцію, тому не можна механічно додавати ще один конкуруючий детермінатор.", examples: [ex("este livro", "ця книжка"), ex("aquele problema", "та проблема")] },
      { title: "Квантор як окрема модель", body: "todo, cada, algum, nenhum та інші елементи мають власну сумісність; вона залежить від лексеми, числа та структури.", examples: [ex("todos os livros", "усі книжки"), ex("cada livro", "кожна книжка"), ex("alguns livros", "деякі книжки")] }
    ],
    examples: [ex("O meu livro está aqui.", "Моя книжка тут."), ex("Estes livros são novos.", "Ці книжки нові."), ex("Todos os alunos chegaram.", "Усі студенти прийшли.")],
    mistakes: [mistake("додавати артикль перед кожним детермінативом або прибирати його перед усіма присвійними", "визначати тип детермінатива та його структурну позицію", "Сумісність не виводиться з українського порядку слів.", "predicted-l1-transfer", "high")],
    ukrainian: "Українська також має обмеження в поєднанні вказівних, присвійних і кількісних слів, але не має португальської артиклевої системи. Порівнювати треба структуру, а не окремі переклади.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/" },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/" },
      { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }
    ],
    regional: "Сумісність окремих детермінативів може залежати від конструкції та різновиду; конкретні варіанти варто фіксувати лише з джерелом."
  }),
];