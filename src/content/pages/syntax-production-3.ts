import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

export const pages: GrammarPage[] = [
  {
    id: "causative-constructions",
    slug: "causative-constructions",
    category: "syntax",
    titleUk: "Каузативні конструкції: fazer, mandar, deixar",
    titlePt: "Construções causativas",
    titleEn: "Causative constructions",
    summary: "Як португальська виражає спричинення, наказ, дозвіл і організацію іншої дії через складений предикат.",
    aliases: ["каузатив", "causative", "causativo", "fazer", "mandar", "deixar"],
    related: ["verb-system", "personal-infinitive", "complement-clauses-advanced", "clitics-infinitive", "raising-and-control"],
    status: "draft",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro: "Каузативна конструкція описує ситуацію, у якій один учасник спричиняє, дозволяє, доручає або іншим способом забезпечує виникнення іншої дії чи стану. У португальській центральні моделі будуються, зокрема, з fazer, mandar і deixar: fazer може виражати спричинення, mandar — наказ або доручення, deixar — дозвіл. Важливо не зводити їх до одного українського перекладу та не вважати будь-яке дієслово + infinitivo каузативом.",
    definition: "Каузативна конструкція — складна предикація, у якій матричний предикат пов'язує свого суб'єкта з ситуацією, описаною вкладеним предикатом, і виражає причинний, дозвільний або директивний зв'язок між ними.",
    formation: "Типова модель: fazer/mandar/deixar + учасник вкладеної дії + infinitivo. Якщо учасник вкладеної дії виражений займенником у конструкції з causative/perceptive verb, можливі спеціальні object-like форми: O diretor mandou-o sair. Якщо цей учасник виражений повною іменною групою, він стоїть перед інфінітивом: O diretor mandou os alunos sair. Вибір між infinitivo pessoal та impessoal залежить від структури; не слід будувати його як механічне правило «після causative завжди одна форма».",
    uses: [
      { title: "Спричинення", body: "fazer + infinitivo подає ситуацію як таку, що виникла через дію або вплив суб'єкта fazer.", examples: [ex("A doença fez o atleta parar.", "Хвороба змусила спортсмена зупинитися.", { purpose: "production" })] },
      { title: "Наказ або доручення", body: "mandar + infinitivo може виражати наказ, розпорядження або доручення виконати дію.", examples: [ex("O diretor mandou os funcionários sair.", "Директор наказав працівникам вийти.", { purpose: "production" })] },
      { title: "Дозвіл", body: "deixar + infinitivo виражає дозвіл або допущення ситуації.", examples: [ex("Deixaram as crianças brincar.", "Вони дозволили дітям гратися.", { purpose: "production" })] },
      { title: "Каузативна completiva com que", body: "Ті самі дієслова можуть вводити finite complement із que; тоді спосіб дієслова визначається вже іншою конструкцією.", examples: [ex("A faculdade deixou que os alunos se matriculassem.", "Університет дозволив студентам зареєструватися.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Fiz o João sair.", "Я змусив/змусила Жуана вийти.", { purpose: "production", note: "fazer виражає спричинення; João є учасником вкладеної події." }),
      ex("O professor mandou os alunos entrar.", "Учитель наказав учням увійти.", { purpose: "production" }),
      ex("O professor deixou os alunos entrar.", "Учитель дозволив учням увійти.", { purpose: "contrast" }),
      ex("O diretor mandou-o sair.", "Директор наказав йому вийти.", { purpose: "comprehension", variety: "PT" }),
      ex("A doença fê-lo parar.", "Хвороба змусила його зупинитися.", { purpose: "comprehension", variety: "PT", register: "formal" })
    ],
    mistakes: [
      mistake("вважати fazer + infinitivo звичайним «робити + дієслово»", "розпізнавати каузативне значення та дві пов'язані предикації", "У A fez B sair fazer не називає саму дію sair; він задає відношення спричинення.", "predicted-l1-transfer", "high"),
      mistake("використовувати український переклад «дозволити» для всіх моделей deixar", "перевіряти, чи deixar справді має дозвільне/каузативне значення", "deixar має й інші значення, зокрема «залишати» та конструкції з de + infinitivo.", "editorial", "high"),
      mistake("вважати, що після causative завжди треба infinitivo без узгодження", "перевіряти будову вкладеної групи та статус її суб'єкта", "Джерела описують як infinitivo impessoal, так і контексти з flexionado infinitive; структура має значення.", "documented", "high")
    ],
    ukrainian: "Українська частіше розгортає причинне відношення окремим дієсловом: «змусити», «дозволити», «наказати», «доручити». Португальська може пакувати це відношення в fazer/mandar/deixar + infinitivo. Тому український переклад допомагає зрозуміти роль конструкції, але не визначає її синтаксичну форму.",
    regional: "Основні каузативні конструкції є частиною спільної португаломовної системи. Розподіл clitics, infinitivo та окремих форм може відрізнятися між PT-PT і PT-BR; конкретний варіант треба маркувати, а не називати один різновид єдиною нормою.",
    sources: [
      { label: "Ciberdúvidas — Fazer causativo e elevação do objeto a sujeito", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/fazer-causativo-e-elevacao-do-objeto-a-sujeito/38859" },
      { label: "Ciberdúvidas — Mandar e outros verbos com infinitivo", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/mandar-e-outros-verbos-com-infinitivo/18174" },
      { label: "Ciberdúvidas — Concordância do infinitivo seleccionado por deixar", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/concordancia-do-infinitivo-seleccionado-por-deixar/18004" }
    ],
    reviewedAt: "2026-09-25"
  },
  {
    id: "raising-and-control",
    slug: "raising-and-control",
    category: "syntax",
    titleUk: "Raising і control: parecer, tentar, querer + infinitivo",
    titlePt: "Elevação e controlo",
    titleEn: "Raising and control",
    summary: "Чому зовні подібні інфінітивні конструкції мають різну синтаксичну організацію.",
    aliases: ["raising", "control", "elevação", "controlo", "parecer", "tentar", "querer"],
    related: ["causative-constructions", "personal-infinitive", "valency-overview", "complex-predicates", "complement-clauses-advanced"],
    status: "draft",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "medium",
    intro: "У конструкціях із parecer, tentar, querer та іншими предикатами поверхнева форма «дієслово + infinitivo» може бути майже однаковою, але синтаксичні відношення різні. Для learner reference важливо не змушувати читача запам'ятовувати терміни raising/control як абстрактну теорію: спочатку треба встановити, хто є семантичним учасником вкладеної дії, чи матричний предикат вибирає власний суб'єкт і як контролюється невиражений суб'єкт інфінітива.",
    definition: "Raising і control — різні типи зв'язку між матричним предикатом та інфінітивною предикацією. У control матричний предикат семантично визначає/контролює суб'єкта вкладеної дії; у raising поверхневий аргумент може бути семантично пов'язаний насамперед із нижчим предикатом.",
    uses: [
      { title: "parecer", body: "parecer + infinitivo типово вводить інфінітивний предикат, до якого семантично належить суб'єкт поверхневого речення.", examples: [ex("O João parece estar cansado.", "Схоже, Жуан втомлений.", { purpose: "comprehension" })] },
      { title: "tentar", body: "tentar + infinitivo описує спробу виконати вкладену дію; суб'єкт спроби є також виконавцем інфінітива.", examples: [ex("O João tentou sair.", "Жуан намагався вийти.", { purpose: "production" })] },
      { title: "querer", body: "querer + infinitivo виражає волю суб'єкта щодо вкладеної дії.", examples: [ex("A Maria quer viajar.", "Марія хоче подорожувати.", { purpose: "production" })] },
      { title: "різний суб'єкт", body: "Коли виконавець вкладеної дії відрізняється, португальська може використовувати іншу конструкцію, зокрема finite complement.", examples: [ex("A Maria quer que o João viaje.", "Марія хоче, щоб Жуан поїхав.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("O João parece estar cansado.", "Схоже, Жуан втомлений.", { purpose: "comprehension" }),
      ex("O João tentou sair cedo.", "Жуан намагався піти рано.", { purpose: "production" }),
      ex("A Maria quer estudar.", "Марія хоче вчитися.", { purpose: "production" }),
      ex("A Maria quer que o João estude.", "Марія хоче, щоб Жуан навчався.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("вважати всі моделі V + infinitivo одним типом підрядності", "порівнювати значення матричного дієслова та суб'єкта вкладеної дії", "parecer, tentar і querer пов'язують поверхневу конструкцію з інфінітивом по-різному.", "predicted-l1-transfer", "medium"),
      mistake("вважати infinitivo автоматично безособовим", "визначати, чи є в інфінітивної предикації власний виражений або контрольований суб'єкт", "Португальська має personal infinitive; структура речення може робити суб'єкт інфінітива явним або контрольованим.", "editorial", "high")
    ],
    ukrainian: "Українська часто передає ці відмінності через «здаватися», «намагатися», «хотіти» + інфінітив або через підрядне «щоб». Переклад може бути близьким, але не показує, який предикат є джерелом семантичного учасника інфінітива. Для production спочатку визначайте, хто виконує вкладену дію.",
    regional: "Базова відмінність між parecer та control-предикатами не є простим PT-BR/PT-PT контрастом. Регіональні відмінності стають помітнішими у виборі займенників, позиції clitic та альтернативних конструкцій.",
    sources: [
      { label: "Ciberdúvidas — O uso de fazer como verbo causativo", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/o-uso-de-fazer-como-verbo-causativo/35597" },
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/" }
    ],
    reviewedAt: "2026-09-25"
  },
  {
    id: "advanced-relatives",
    slug: "advanced-relatives",
    category: "syntax",
    titleUk: "Складні відносні речення: que, quem, o qual, cujo, onde",
    titlePt: "Orações relativas avançadas",
    titleEn: "Advanced relative clauses",
    summary: "Розподіл відносних елементів, restrictive/explicative clauses та прийменникове керування.",
    aliases: ["складні відносні", "advanced relatives", "orações relativas", "cujo", "o qual"],
    related: ["relative-pronouns", "relative-que", "relative-quem", "relative-onde", "complement-clauses-advanced", "prep-a"],
    status: "draft",
    origin: "handwritten",
    depth: "high",
    ukrainianContrast: "high",
    intro: "Відносне речення не зводиться до перекладу «який/що/де». Потрібно одночасно встановити антецедент, синтаксичну роль relative-елемента всередині підрядної частини, прийменникове керування та тип зв'язку з антецедентом. У складніших моделях особливо важливі cujo, o qual та прийменникові групи: вони дозволяють зробити структуру однозначнішою, але мають власні граматичні обмеження.",
    definition: "Відносне речення — підрядна конструкція, яка модифікує або ідентифікує антецедент. Relative-елемент виконує синтаксичну роль усередині підрядного речення або встановлює його зв'язок з антецедентом.",
    uses: [
      { title: "Restrictive relative", body: "Підрядна частина обмежує множину можливих референтів.", examples: [ex("O livro que comprei desapareceu.", "Книжка, яку я купив/купила, зникла.", { purpose: "production" })] },
      { title: "Explicative relative", body: "Підрядна частина додає інформацію про вже ідентифікований референт; пунктуація є частиною структури.", examples: [ex("Lisboa, que fica junto ao Tejo, recebe muitos visitantes.", "Лісабон, який розташований біля Тежу, приймає багато відвідувачів.", { purpose: "comprehension" })] },
      { title: "Прийменникова relative", body: "Прийменник визначається функцією relative-елемента та керуванням предиката.", examples: [ex("A pessoa com quem falei chegou.", "Людина, з якою я говорив/говорила, прийшла.", { purpose: "production" })] },
      { title: "cujo", body: "cujo виражає відношення належності між антецедентом і іменником у relative clause та узгоджується з цим іменником.", examples: [ex("A pessoa cuja casa visitámos chegou.", "Людина, чий будинок ми відвідали, прийшла.", { purpose: "production" })] },
      { title: "o qual / a qual", body: "Форми o qual, a qual, os quais, as quais можуть бути корисними там, де треба чіткіше маркувати рід/число або конструкцію з прийменником.", examples: [ex("A questão sobre a qual falámos é complexa.", "Питання, про яке ми говорили, складне.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("A cidade onde vivo é pequena.", "Місто, де я живу, невелике.", { purpose: "production" }),
      ex("A pessoa com quem falei chegou.", "Людина, з якою я говорив/говорила, прийшла.", { purpose: "production" }),
      ex("O relatório que li era longo.", "Звіт, який я прочитав/прочитала, був довгим.", { purpose: "comprehension" }),
      ex("A pessoa cuja decisão mudou o projeto saiu.", "Людина, чиє рішення змінило проєкт, пішла.", { purpose: "production" }),
      ex("A questão sobre a qual falámos continua aberta.", "Питання, про яке ми говорили, залишається відкритим.", { purpose: "contrast", register: "formal" })
    ],
    mistakes: [
      mistake("замінювати cujo конструкцією que + іменник без належного зв'язку", "використовувати cujo + іменник, коли relative виражає належність", "cujo не є просто синонімом que; воно організує possessive relation усередині relative clause.", "predicted-l1-transfer", "high"),
      mistake("вибирати прийменник за українським «з/про/на»", "визначати прийменник за португальським предикатом", "Прийменник залежить від regência португальської конструкції.", "predicted-l1-transfer", "high"),
      mistake("вважати кому факультативною деталлю в explicative relative", "спочатку визначати restrictive чи explicative reading", "Пунктуація допомагає маркувати різну інформаційну структуру й не повинна копіюватися механічно.", "editorial", "medium")
    ],
    ukrainian: "Українська має відносні займенники «який, котрий, чий, де, хто» і тому дає корисні структурні аналогії. Але португальська має інший розподіл relative forms та прийменників. Особливо небезпечно переносити український порядок «прийменник + який» без перевірки португальського керування.",
    regional: "Базові relative constructions є спільними. В окремих розмовних різновидах, особливо в PT-BR, можливі стратегії, які відрізняються від формального письмового стандарту. У довіднику такі моделі мають маркуватися як варіантність, а не як автоматична «помилка».",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/" },
      { label: "Ciberdúvidas — consultório", url: "https://ciberduvidas.iscte-iul.pt/consultorio/" }
    ],
    reviewedAt: "2026-09-25"
  },
  {
    id: "complement-clauses-advanced",
    slug: "complement-clauses-advanced",
    category: "syntax",
    titleUk: "Складні додаткові речення: que, infinitivo та conjuntivo",
    titlePt: "Orações completivas avançadas",
    titleEn: "Advanced complement clauses",
    summary: "Як матричний предикат визначає тип і форму додаткової частини.",
    aliases: ["complement clauses", "orações completivas", "підрядні додаткові", "que + conjuntivo"],
    related: ["subordinating", "subjunctive-overview", "personal-infinitive", "infinitive-vs-subjunctive", "valency-overview"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Додаткова підрядна частина заповнює аргументну позицію предиката: думати про факт, хотіти подію, сумніватися, вимагати, боятися тощо. Португальська може будувати такі complement clauses із que + finite verb, з infinitivo або іншими моделями. Вибір не можна визначати одним українським «що/щоб»: він залежить від матричного предиката, модальності, співвідношення суб'єктів та типу конструкції.",
    definition: "Completiva — підрядна частина, яка реалізує аргумент або інший вибраний компонент матричного предиката. Її форма визначається лексико-синтаксичними властивостями головної конструкції.",
    uses: [
      { title: "Фактуальне que", body: "Предикати знання, повідомлення, переконання та оцінки можуть вводити que + indicativo, коли підрядна ситуація подається як факт або твердження.", examples: [ex("Acho que ele vem.", "Я думаю, що він прийде.", { purpose: "production" })] },
      { title: "Воля та оцінка + conjuntivo", body: "Після предикатів волі, бажання, вимоги та багатьох оцінних конструкцій підрядна дія часто вводиться que + conjuntivo.", examples: [ex("Quero que ele venha.", "Я хочу, щоб він прийшов.", { purpose: "production" })] },
      { title: "Спільний суб'єкт + infinitivo", body: "Коли суб'єкт двох предикацій збігається або конструкція дозволяє контроль, infinitivo часто є природним способом упакувати другу предикацію.", examples: [ex("Quero viajar amanhã.", "Я хочу подорожувати завтра.", { purpose: "production" })] },
      { title: "Різні суб'єкти", body: "За різних суб'єктів часто потрібна finite completiva, але конкретний предикат може мати й інші моделі.", examples: [ex("Quero que os meus amigos venham.", "Я хочу, щоб мої друзі прийшли.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Acho que ele vem amanhã.", "Я думаю, що він прийде завтра.", { purpose: "production" }),
      ex("Não acredito que ele venha amanhã.", "Я не думаю / не вірю, що він прийде завтра.", { purpose: "contrast" }),
      ex("Quero que estudes mais.", "Я хочу, щоб ти більше вчився/вчилася.", { purpose: "production", variety: "PT" }),
      ex("Quero estudar mais.", "Я хочу більше вчитися.", { purpose: "contrast" }),
      ex("É possível que chova.", "Можливо, буде дощ.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("ставити conjuntivo після будь-якого українського «що/щоб»", "аналізувати матричний предикат і модальність", "Португальський вибір indicativo/conjuntivo визначається конструкцією, а не прямим перекладом сполучника.", "predicted-l1-transfer", "high"),
      mistake("вважати infinitivo лише «скороченим перекладом» підрядного речення", "визначати співвідношення суб'єктів і контроль", "Infinitivo є окремою синтаксичною конструкцією зі своїми правилами.", "editorial", "high")
    ],
    ukrainian: "Українські «що» та «щоб» є корисними орієнтирами, але не калькою. Португальська використовує infinitivo там, де українська часто має особову форму, а вибір indicativo/conjuntivo залежить від семантики матричного предиката.",
    regional: "Основна система completivas є спільною. Окремі дієслівні моделі, personal infinitive та розподіл clitics можуть мати різну частотність у PT-BR та PT-PT; такі відмінності потрібно описувати конкретно.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/" },
      { label: "Ciberdúvidas — Infinitivo pessoal, ou impessoal?", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/infinitivo-pessoal-ou-impessoal/30188" }
    ],
    reviewedAt: "2026-09-25"
  },
  {
    id: "infinitive-vs-subjunctive",
    slug: "infinitive-vs-subjunctive",
    category: "syntax",
    titleUk: "Infinitivo чи conjuntivo: як вибирати між двома конструкціями",
    titlePt: "Infinitivo e conjuntivo",
    titleEn: "Infinitive vs subjunctive",
    summary: "Контраст інфінітивних і finite conjunctive constructions у підрядних структурах.",
    aliases: ["infinitivo vs conjuntivo", "infinitive vs subjunctive", "інфінітив чи суб'юнктив"],
    related: ["personal-infinitive", "subjunctive-overview", "complement-clauses-advanced", "futuro-subjuntivo"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Infinitivo та conjuntivo можуть передавати близькі змістові відношення, але це не дві взаємозамінні форми. Для вибору потрібно дивитися на синтаксичну залежність, співвідношення суб'єктів, тип підрядної конструкції, керування матричного предиката та регістр. Особливо важливо не переносити на всі випадки спрощене правило «однаковий суб'єкт → infinitivo, різні суб'єкти → conjuntivo»: воно корисне як початкова евристика лише в окремих моделях.",
    definition: "Контраст infinitivo/conjuntivo — вибір між нефінітною інфінітивною конструкцією та finite clause із conjuntivo. Він залежить від конкретного синтаксичного середовища, а не лише від українського перекладу.",
    uses: [
      { title: "Одна ситуація, один контрольований суб'єкт", body: "Infinitivo часто дає компактну конструкцію, коли суб'єкт вкладеної дії контролюється матричним предикатом.", examples: [ex("Quero estudar.", "Я хочу вчитися.", { purpose: "production" })] },
      { title: "Окремий суб'єкт у finite clause", body: "За явного іншого суб'єкта типова модель може бути que + conjuntivo.", examples: [ex("Quero que estudes.", "Я хочу, щоб ти вчився/вчилася.", { purpose: "contrast", variety: "PT" })] },
      { title: "Adverbial clauses", body: "Після сполучників умови та часу майбутня подія може вимагати future do conjuntivo, а не infinitivo.", examples: [ex("Quando chegares, liga-me.", "Коли прийдеш, зателефонуй мені.", { purpose: "contrast" })] },
      { title: "Infinitivo pessoal", body: "Personal infinitive має особові закінчення і може бути доречним у нефінітних підрядних, коли треба виразити окремого суб'єкта.", examples: [ex("Antes de saíres, fecha a porta.", "Перед тим як підеш, зачини двері.", { purpose: "production" })] }
    ],
    examples: [
      ex("Quero estudar.", "Я хочу вчитися.", { purpose: "production" }),
      ex("Quero que estudes.", "Я хочу, щоб ти вчився/вчилася.", { purpose: "contrast", variety: "PT" }),
      ex("É importante estudarmos.", "Важливо, щоб ми вчилися.", { purpose: "contrast" }),
      ex("É importante que estudemos.", "Важливо, щоб ми вчилися.", { purpose: "contrast" }),
      ex("Quando vieres, avisa-me.", "Коли прийдеш, дай мені знати.", { purpose: "comprehension" }),
      ex("Antes de vires, liga-me.", "Перед тим як прийдеш, зателефонуй мені.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("називати форму після quando/се infinitivo лише тому, що вона схожа на нього", "визначати сполучник і часово-модальну функцію", "Регулярні форми infinitivo pessoal і futuro do conjuntivo можуть збігатися; у нерегулярних дієсловах різниця видима.", "documented", "high"),
      mistake("використовувати лише infinitivo impessoal у всіх нефінітних підрядних", "перевіряти, чи потрібне маркування суб'єкта через infinitivo pessoal", "Personal infinitive має власну синтаксичну функцію і не є просто «помилковим» infinitivo.", "editorial", "high")
    ],
    ukrainian: "Українське «щоб» може перекривати кілька португальських структур: que + conjuntivo, infinitivo та infinitivo pessoal. Тому переклад не повинен бути головним алгоритмом вибору. Спочатку визначайте тип підрядної конструкції й співвідношення суб'єктів.",
    regional: "Розподіл infinitivo та conjuntivo має багато спільного між різновидами, але конкретні конструкції можуть відрізнятися за частотністю та стилістичною перевагою. Future do conjuntivo особливо важливий для обох основних європейських/бразильських стандартів, хоча його частотність залежить від жанру та конструкції.",
    sources: [
      { label: "Ciberdúvidas — Regra para distinguir o futuro do conjuntivo do infinitivo pessoal", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/regra-para-distinguir-o-futuro-do-conjuntivo/13081" },
      { label: "Ciberdúvidas — A confusão entre o infinitivo pessoal e o futuro do conjuntivo", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/a-confusao-entre-o-infinitivo-pessoal-e-o-futuro-do-conjuntivo/34437" },
      { label: "Ciberdúvidas — Infinitivo pessoal, ou impessoal?", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/infinitivo-pessoal-ou-impessoal/30188" }
    ],
    reviewedAt: "2026-09-25"
  },
  {
    id: "clitic-clusters",
    slug: "clitic-clusters",
    category: "syntax",
    titleUk: "Подвійні клітики: комбінації o/a/os/as + lhe/lhes",
    titlePt: "Combinação de pronomes clíticos",
    titleEn: "Clitic clusters",
    summary: "Як поєднуються два ненаголошені займенники та чому форми на кшталт mo, lho, vo-lo не зводяться до простого додавання.",
    aliases: ["подвійні клітики", "clitic clusters", "clitic combinations", "combinação de pronomes"],
    related: ["object-pronouns", "lhe-vs-o", "clitic-placement", "prepositional-pronouns", "clitics-infinitive"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Коли в одному дієслівному комплексі потрібно виразити непрямий і прямий об'єкт, португальська може мати комбінацію двох clitics. У нормативному письмовому PT-PT та історично формалізованих моделях зустрічаються форми на кшталт mo, to, lho, no-lo, vo-lo. Вони не є механічним записом двох незалежних займенників: відбуваються морфофонологічні зміни, а в сучасній PT-BR частина таких комбінацій значно менш продуктивна в живому мовленні.",
    definition: "Clitic cluster — послідовність двох ненаголошених займенникових форм, які реалізують дві аргументні ролі одного предикативного комплексу.",
    formation: "У традиційній системі комбінація непрямого clitic lhe/lhes або першо-/другоособових форм із прямим o/a/os/as може зазнавати контракції: me + o → mo, te + o → to, lhe + o → lho; форми з nos/vos також мають спеціальні реалізації. Після infinitivo/particípio та в різних позиціях діють додаткові правила. Тому таблицю треба вчити разом із синтаксичними умовами, а не як список довільних скорочень.",
    uses: [
      { title: "Два об'єкти", body: "Кластер виникає, коли предикат одночасно реалізує непрямий і прямий об'єкт у clitic-формі.", examples: [ex("Ele deu-mo ontem.", "Він дав мені це вчора.", { purpose: "comprehension", variety: "PT", register: "formal" })] },
      { title: "Морфофонологічна контракція", body: "Комбінація не зберігає дві повні форми; вони зливаються в окрему clitic форму.", examples: [ex("Ela disse-lho.", "Вона сказала це йому/їй.", { purpose: "comprehension", variety: "PT", register: "formal" })] },
      { title: "Регістр і сучасне вживання", body: "Здатність читача розпізнати такі форми важливіша за механічне продукування рідкісної книжної моделі. У сучасній PT-BR розгорнуті займенникові конструкції часто конкурують із кластерами.", examples: [ex("Eu dei o livro para ele.", "Я дав/дала книжку йому.", { purpose: "contrast", variety: "BR" })] }
    ],
    examples: [
      ex("Ele deu-mo ontem.", "Він дав мені це вчора.", { purpose: "comprehension", variety: "PT", register: "formal" }),
      ex("Ela disse-lho.", "Вона сказала це йому/їй.", { purpose: "comprehension", variety: "PT", register: "formal" }),
      ex("Quero dar-lho amanhã.", "Я хочу дати це йому/їй завтра.", { purpose: "comprehension", variety: "PT", register: "formal" })
    ],
    mistakes: [
      mistake("розставляти два clitics у довільному порядку", "вивчати дозволені комбінації як окрему морфосинтаксичну систему", "Порядок і форма clitic cluster мають граматичні обмеження.", "editorial", "high"),
      mistake("вважати mo = me + o без жодної морфологічної зміни", "розпізнавати mo як самостійну комбіновану форму", "Контракція змінює поверхневу форму й іноді фонетичну реалізацію.", "documented", "high"),
      mistake("переносити книжні PT-PT кластери як звичайну розмовну PT-BR модель", "маркувати різновид і регістр", "Розподіл clitic placement і кластерів сильно залежить від варіанту та каналу.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська виражає два об'єкти повнозначними або короткими займенниками без тотожної системи португальських clitic clusters. Тому форми mo/lho краще вчити як готові морфосинтаксичні одиниці, а потім розкладати їх на ролі, ніж намагатися перекладати кожен компонент окремо.",
    regional: "Кластери особливо важливі для читання формальної PT-PT. У PT-BR у сучасному усному мовленні багато таких конструкцій менш продуктивні, і значення часто виражається іншими займенниковими моделями. Це питання варіантності та регістру, а не простого «правильно/неправильно».",
    sources: [
      { label: "Ciberdúvidas — Infinitivo pessoal + pronome pessoal", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/infinitivo-pessoal--pronome-pessoal/6162" },
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/" }
    ],
    reviewedAt: "2026-09-25"
  }
];
