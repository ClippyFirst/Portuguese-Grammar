import type { Example, Formula, GrammarPage, Mistake } from "./types";
import { CATALOG } from "./catalog";

/**
 * Learner-oriented coverage layer.
 *
 * Every fallback topic is structured around concept -> form -> function ->
 * context -> variety -> Ukrainian interference -> diagnostics. Dedicated
 * linguistically reviewed modules in src/content/pages/ take precedence.
 */

type LearnerLayer = {
  formulas?: Formula[];
  examples?: Example[];
  mistakes?: Mistake[];
  formation?: string;
  markers?: string[];
  exceptions?: string;
  ukrainian?: string;
  brPt?: string;
  regional?: string;
  learnerQuestions?: string[];
};

const BASE_EXAMPLES: Record<string, Example[]> = {
  spelling: [
    { pt: "ação", uk: "дія" },
    { pt: "fácil", uk: "легкий" },
    { pt: "Portugal", uk: "Португалія" },
  ],
  phonetics: [
    { pt: "casa", uk: "будинок" },
    { pt: "mão", uk: "рука" },
    { pt: "carro", uk: "автомобіль" },
  ],
  nouns: [
    { pt: "a casa", uk: "будинок" },
    { pt: "os livros", uk: "книги" },
    { pt: "uma cidade", uk: "місто" },
  ],
  adjectives: [
    { pt: "uma casa grande", uk: "великий будинок" },
    { pt: "duas casas grandes", uk: "два великі будинки" },
    { pt: "um livro interessante", uk: "цікава книга" },
  ],
  adverbs: [
    { pt: "Ele fala rapidamente.", uk: "Він говорить швидко." },
    { pt: "Ela chegou cedo.", uk: "Вона прийшла рано." },
    { pt: "Ainda não sei.", uk: "Я ще не знаю." },
  ],
  pronouns: [
    { pt: "Eu conheço-o.", uk: "Я його знаю.", variety: "PT" },
    { pt: "Eu conheço ele.", uk: "Я його знаю.", variety: "BR", register: "colloquial" },
    { pt: "Isso é para mim.", uk: "Це для мене." },
  ],
  prepositions: [
    { pt: "Vou a Lisboa.", uk: "Я їду до Лісабона." },
    { pt: "Venho de casa.", uk: "Я приходжу з дому." },
    { pt: "Moro em Coimbra.", uk: "Я живу в Коїмбрі." },
  ],
  verbs: [
    { pt: "Eu trabalho todos os dias.", uk: "Я працюю щодня." },
    { pt: "Ela chegou ontem.", uk: "Вона прийшла вчора." },
    { pt: "Nós vamos amanhã.", uk: "Ми підемо завтра." },
  ],
  tenses: [
    { pt: "Eu estudo português.", uk: "Я вивчаю португальську." },
    { pt: "Estudei ontem.", uk: "Я вчив/вчила вчора." },
    { pt: "Estudava quando ele chegou.", uk: "Я вчився/вчилася, коли він прийшов." },
  ],
  gerund: [
    { pt: "Estou a estudar.", uk: "Я зараз навчаюся.", variety: "PT" },
    { pt: "Estou estudando.", uk: "Я зараз навчаюся.", variety: "BR" },
    { pt: "Tenho estudado muito.", uk: "Я останнім часом багато навчаюся." },
  ],
  periphrases: [
    { pt: "Tenho de trabalhar.", uk: "Я маю / мені треба працювати." },
    { pt: "Acabei de chegar.", uk: "Я щойно прийшов/прийшла." },
    { pt: "Vou estudar amanhã.", uk: "Я навчатимусь завтра / збираюся навчатися." },
  ],
  relative: [
    { pt: "O livro que comprei é novo.", uk: "Книга, яку я купив/купила, нова." },
    { pt: "A pessoa com quem falei chegou.", uk: "Людина, з якою я говорив/говорила, прийшла." },
    { pt: "A cidade onde vivo é pequena.", uk: "Місто, де я живу, невелике." },
  ],
  subordinate: [
    { pt: "Quando eu chegar, ligo.", uk: "Коли я прийду, зателефоную." },
    { pt: "Quero que venhas.", uk: "Я хочу, щоб ти прийшов/прийшла." },
    { pt: "Embora seja tarde, vou.", uk: "Хоча вже пізно, я піду." },
  ],
  passive: [
    { pt: "A ponte foi construída em 2020.", uk: "Міст було збудовано 2020 року." },
    { pt: "Há muitas pessoas aqui.", uk: "Тут багато людей." },
    { pt: "É preciso estudar.", uk: "Потрібно вчитися." },
  ],
  syntax: [
    { pt: "A Maria comprou o livro.", uk: "Марія купила книжку." },
    { pt: "Comprei o livro.", uk: "Я купив/купила книжку; підмет опущено." },
    { pt: "O livro, eu já o li.", uk: "Цю книжку я вже прочитав/прочитала." },
  ],
  pragmatics: [
    { pt: "Pode ajudar-me?", uk: "Можете мені допомогти?" },
    { pt: "Queria saber se podia ajudar.", uk: "Я хотів/хотіла дізнатися, чи могли б ви допомогти." },
    { pt: "Então, vamos?", uk: "То що, йдемо?" },
  ],
};

const SPECIAL: Record<string, LearnerLayer> = {
  "ser": {
    formulas: [{ pattern: "ser + predicativo", note: "Ідентифікація, класифікація, властивість, походження та інші значення визначаються всією конструкцією." }],
    examples: [{ pt: "Ela é médica.", uk: "Вона лікарка." }, { pt: "Somos de Kyiv.", uk: "Ми з Києва." }],
    mistakes: [{ wrong: "Estou médico.", right: "Sou médico.", why: "Назва професії як предикативна класифікація типово вживається з ser." }],
    ukrainian: "Українське «бути» не розрізняє ser/estar, тому спершу визначайте тип предикації, а не перекладайте дієслово слово в слово.",
    learnerQuestions: ["Це ідентичність, класифікація чи актуальний стан?", "Чи змінився вибір через конструкцію, а не через «постійність»?"],
  },
  "estar": {
    formulas: [{ pattern: "estar + predicativo / localização", note: "Актуальний стан, ситуація, місцезнаходження та низка лексикалізованих конструкцій." }],
    examples: [{ pt: "Estou cansado.", uk: "Я втомлений/втомлена." }, { pt: "O livro está na mesa.", uk: "Книжка на столі." }],
    mistakes: [{ wrong: "Sou cansado.", right: "Estou cansado.", why: "Для актуального стану cansado типовим є estar." }],
    ukrainian: "Не перекладайте українське «бути» одним португальським дієсловом: спершу встановіть семантику предиката.",
  },
  "por-para": {
    formulas: [{ pattern: "por → причина / шлях / засіб / обмін; para → мета / напрям / адресат / дедлайн", note: "Це евристика, а не повний словник керування." }],
    examples: [{ pt: "Estudo para aprender.", uk: "Я вчуся, щоб навчитися." }, { pt: "Obrigado por ajudares.", uk: "Дякую, що допоміг/допомогла." }, { pt: "Vou para Lisboa.", uk: "Я їду до Лісабона." }],
    mistakes: [{ wrong: "Obrigado para ajudar.", right: "Obrigado por ajudar.", why: "У цій конструкції подяка оформлюється por + інфінітив." }],
    ukrainian: "Українські «для / за / через / по» перекривають португальські por/para лише частково.",
  },
  "tu-voce": {
    formulas: [{ pattern: "tu + 2-а особа; você + 3-я особа дієслова", note: "Розподіл залежить від країни, регіону, соціального контексту та стилю." }],
    examples: [{ pt: "Tu sabes.", uk: "Ти знаєш.", variety: "PT" }, { pt: "Você sabe.", uk: "Ви/ти знаєте.", variety: "BR" }],
    mistakes: [{ wrong: "Você sabes.", right: "Você sabe.", why: "você граматично узгоджується з 3-ю особою." }],
    ukrainian: "Не прирівнюйте você автоматично до українського «ви»: система звертання португальської не є простою копією української.",
    brPt: "PT-BR не є однорідним: tu активно вживається в частині регіонів, часто з варіантами узгодження. У PT-PT tu є центральною формою неформальної 2-ї особи.",
  },
  "lhe-vs-o": {
    formulas: [{ pattern: "o/a/os/as → прямий додаток; lhe/lhes → непрямий додаток у відповідних моделях", note: "Розподіл визначається валентністю дієслова й різновидом мови." }],
    examples: [{ pt: "Vi-o ontem.", uk: "Я бачив/бачила його вчора." }, { pt: "Telefonei-lhe ontem.", uk: "Я зателефонував/зателефонувала йому вчора.", variety: "PT" }],
    ukrainian: "Український відмінок не дає готової відповіді на португальське керування: вчіть дієслово разом із його моделлю.",
  },
  "perfeito-vs-imperfeito": {
    formulas: [{ pattern: "pretérito perfeito → подія як ціле; imperfeito → фон, звичка, повторюваність або незавершена перспектива", note: "Це не тотожне українському доконаному/недоконаному виду." }],
    examples: [{ pt: "Ontem trabalhei até às seis.", uk: "Учора я працював/працювала до шостої." }, { pt: "Quando era criança, trabalhava com o meu pai.", uk: "Коли я був/була дитиною, я працював/працювала з батьком." }],
    ukrainian: "Португальський час і український вид перетинаються, але не збігаються. Розв'язуйте задачу на рівні події та дискурсу.",
  },
  "progressive-br-pt": {
    formulas: [{ pattern: "PT-BR: estar + gerúndio; PT-PT: estar a + infinitivo", note: "Обидві моделі нормативні у своїх основних різновидах." }],
    examples: [{ pt: "Estou trabalhando.", uk: "Я зараз працюю.", variety: "BR" }, { pt: "Estou a trabalhar.", uk: "Я зараз працюю.", variety: "PT" }],
    brPt: "Різниця стосується не лише словника: це системна перевага різних конструкцій для прогресивного значення.",
  },
  "clitics-br-pt": {
    formulas: [{ pattern: "PT-PT: широкий набір умов próclise/ênclise; PT-BR: сильна перевага próclise у живій мові", note: "Формальна писемна норма та розмовне вживання не завжди збігаються." }],
    examples: [{ pt: "Não o vi.", uk: "Я його не бачив/бачила.", variety: "PT" }, { pt: "Eu não vi ele.", uk: "Я його не бачив/бачила.", variety: "BR", register: "colloquial" }],
    brPt: "Не вчіть клітики як одну таблицю для всіх португаломовних спільнот. Розрізняйте нормативну модель, реальне мовлення та регістр.",
  },
  "futuro-subjuntivo": {
    formulas: [{ pattern: "se/quando/logo que/assim que + futuro do conjuntivo", note: "Особливо важливий у реальних майбутніх умовах і часових підрядних." }],
    examples: [{ pt: "Quando chegares, liga-me.", uk: "Коли приїдеш, зателефонуй мені." }, { pt: "Se tiver tempo, vou.", uk: "Якщо матиму час, піду." }],
    ukrainian: "Українська не має прямого морфологічного відповідника, тому цю форму краще вчити через конструкції, а не через переклад назви часу.",
  },
  "personal-infinitive": {
    formulas: [{ pattern: "infinitivo + особове закінчення", note: "Особливо корисний, коли інфінітив має власний підмет або коли конструкція дозволяє уникнути підрядного речення." }],
    examples: [{ pt: "É importante estudarmos.", uk: "Важливо, щоб ми вчилися." }, { pt: "Antes de saíres, liga.", uk: "Перед тим як вийдеш, зателефонуй." }],
    ukrainian: "Українська часто використає «щоб/коли/перед тим як» там, де португальська може використати особовий інфінітив.",
  },
  "articles-ukrainian": {
    formulas: [{ pattern: "означеність → o/a/os/as; введення → um/uma/uns/umas; Ø у лексикалізованих моделях", note: "Українська не має артиклів, тому визначеність часто виражається контекстом." }],
    examples: [{ pt: "Entrou um homem.", uk: "Увійшов чоловік." }, { pt: "O homem sentou-se.", uk: "Чоловік сів." }, { pt: "Sou médica.", uk: "Я лікарка." }],
    mistakes: [{ wrong: "Sou uma médica. (як автоматичний переклад професії)", right: "Sou médica.", why: "Після ser назва професії часто вживається без артикля в нейтральній предикації." }],
    ukrainian: "Не шукайте в українському реченні «слово, яке відповідає артиклю». Питайте про референцію, введення нового референта, унікальність і лексикалізовану конструкцію.",
    brPt: "PT-PT частіше вживає артикль перед особовими іменами та присвійними групами, ніж PT-BR; це варіантна граматика.",
  },

  "clitic-placement": {
    formulas: [{ pattern: "próclise: clitic перед дієсловом; ênclise: після дієслова; mesóclise: усередині форми майбутнього/умовного в нормативній письмовій моделі", note: "Вибір залежить від синтаксичних тригерів, конструкції, різновиду мови та регістру." }],
    formation: "Спочатку визначте, чи є перед дієсловом елемент, який впливає на позицію clitic (заперечення, певні підрядні/кванторні елементи тощо). Потім перевірте час, тип конструкції та норму конкретного різновиду.",
    examples: [{ pt: "Não me disseram nada.", uk: "Мені нічого не сказали." }, { pt: "Disseram-me a verdade.", uk: "Мені сказали правду.", variety: "PT", register: "formal" }, { pt: "Vou dizer-te amanhã.", uk: "Я скажу тобі завтра.", variety: "PT" }],
    mistakes: [{ wrong: "Não disseram-me nada.", right: "Não me disseram nada.", why: "Заперечення não є сильним тригером próclise у стандартній моделі." }],
    ukrainian: "Українські займенники не мають такого самого набору позиційних обмежень. Не перекладайте місце clitic із українського речення; спочатку аналізуйте португальську конструкцію.",
    brPt: "У живій PT-BR próclise значно ширша, а розмовна мова має моделі, яких не слід механічно переносити на формальну PT-PT. Для письма перевіряйте цільову норму.",
    learnerQuestions: ["Який елемент перед дієсловом впливає на позицію clitic?", "Який різновид і регістр я моделюю?", "Чи це письмова нормативна форма чи розмовна модель?"],
  },
  "se-system": {
    formulas: [{ pattern: "se + V → reflexive / reciprocal / pronominal / passive / impersonal", note: "Одна форма se реалізує кілька граматичних конструкцій; розрізнення робиться за синтаксисом і семантикою." }],
    formation: "Перевірте, чи є referent, який виконує і отримує дію; чи узгоджується дієслово з іменником; чи можна перефразувати конструкцію пасивом; чи se є частиною лексичної рамки дієслова.",
    examples: [{ pt: "Ela lavou-se.", uk: "Вона помилася." }, { pt: "Vendem-se casas.", uk: "Продаються будинки.", register: "formal" }, { pt: "Precisa-se de funcionários.", uk: "Потрібні працівники.", register: "formal" }],
    mistakes: [{ wrong: "Vende-se casas. → автоматично «пасив»", right: "Vendem-se casas. / Vende-se a casa.", why: "У se-passive дієслово узгоджується з пацієнсом; в impersonal se з de-об'єктом узгодження не відбувається." }],
    ukrainian: "Українська часто передає reflexive, passive та impersonal конструкції різними засобами, тому переклад не визначає тип se.",
    learnerQuestions: ["Хто є синтаксичним підметом?", "Чи є об'єкт із de?", "Чи узгоджується дієслово з іменником після нього?", "Чи є se частиною словникової моделі дієслова?"],
  },
  "articles-ukrainian": {
    formation: "Артикль не перекладається окремим словом. Аналізуйте референцію: новий/відомий референт, клас/тип, унікальність, генеричність, професія після ser, власна назва та сталі конструкції.",
    learnerQuestions: ["Чи референт уже ідентифікований у дискурсі?", "Чи вводиться новий одиничний референт?", "Чи це назва класу/професії/речовини або стала конструкція?", "Чи є різниця між PT-BR і PT-PT у цьому контексті?"],
  },
  "tu-voce": {
    exceptions: "você — граматично 3-тя особа, але прагматично виконує функцію звертання до співрозмовника; розподіл tu/você не можна описати однією загальнонаціональною картою.",
    learnerQuestions: ["Який різновид португальської я описую?", "Яка соціальна дистанція між співрозмовниками?", "Яке дієслівне узгодження потрібне після форми звертання?", "Чи доречні senhor/senhora або інша форма звертання?"],
  },
  "tenses": {
    formation: "Для кожного часу встановлюйте форму, часову точку відліку, аспектуальну перспективу та дискурсивну функцію. Не будуйте систему лише як переклад назв «минулий/майбутній».",
    learnerQuestions: ["Відносно якої точки відліку оцінюється подія?", "Чи подія представлена як завершена, фонова, повторювана або очікувана?", "Чи є часова форма частиною перифрази?", "Чи впливає різновид мови на вибір конструкції?"],
  },
  "subjunctive-overview": {
    formation: "Conjuntivo треба вчити як систему залежності від модальності, оцінки, волевиявлення, сумніву, неактуальності, умови та інших контекстів; не як універсальний «час невпевненості».",
    examples: [{ pt: "Quero que venhas.", uk: "Я хочу, щоб ти прийшов/прийшла." }, { pt: "É possível que chova.", uk: "Можливо, що буде дощ." }, { pt: "Se tiver tempo, vou.", uk: "Якщо матиму час, піду." }],
    learnerQuestions: ["Чи є головне речення джерелом волі, оцінки, сумніву або іншої модальності?", "Чи має підрядна дія власний підмет?", "Чи потрібен conjuntivo, infinitivo або indicativo за конкретним сполучником/дієсловом?"],
  },
  "futuro-subjuntivo": {
    exceptions: "Форма особливо продуктивна в умовах і часових підрядних із реальною майбутньою орієнтацією; не підміняйте її будь-яким майбутнім значенням.",
    learnerQuestions: ["Чи йдеться про ще не реалізовану умову/часову подію?", "Який сполучник відкриває конструкцію?", "Чи йдеться про реальну можливість, а не гіпотезу, для якої потрібен інший тип умовного речення?"],
  },
  "personal-infinitive": {
    exceptions: "Особовий інфінітив не є механічною заміною будь-якого підрядного речення. Вибір залежить від синтаксичної структури, кореферентності та стилю.",
    learnerQuestions: ["Хто є підметом інфінітива?", "Чи він збігається з підметом головної частини?", "Чи потрібне особове маркування для ясності?", "Чи звучить конструкція природно в цьому регістрі?"],
  },
  "progressive-br-pt": {
    exceptions: "Розподіл gerúndio та a + infinitivo не означає, що одна модель «правильна», а друга «неправильна». Йдеться про системні переваги різновидів.",
    learnerQuestions: ["Чи описую PT-BR, PT-PT чи інший різновид?", "Чи справді значення прогресивне, а не просто тривале/аспектуальне?", "Чи потрібна форма estar або інша перифраза?"],
  },
  "clitics-br-pt": {
    exceptions: "Розмовна PT-BR, формальна PT-BR та PT-PT можуть мати різний розподіл займенникових форм. Для навчального прикладу завжди маркуйте різновид і регістр, якщо він істотно впливає на оцінку.",
    learnerQuestions: ["Чи це clitic, tonic pronoun чи форма з прямим займенником?", "Який різновид і регістр?", "Чи відрізняється письмова норма від живого мовлення?"],
  },
  "crase": {
    formation: "Crase виникає в типовій моделі як злиття прийменника a з означеним артиклем a/as або з відповідною займенниковою/демонстративною формою. Тому її перевіряють через керування, а не «на слух».",
    examples: [{ pt: "Vou à escola.", uk: "Я йду до школи." }, { pt: "Entreguei o documento à diretora.", uk: "Я передав/передала документ директорці." }],
    mistakes: [{ wrong: "Vou à Lisboa.", right: "Vou a Lisboa.", why: "Не кожна назва місця допускає артикль; спочатку встановіть модель назви, потім перевіряйте crase." }],
    ukrainian: "Український відмінок не дозволяє автоматично визначити crase. Вона залежить від португальського прийменникового керування та наявності означеного елемента.",
    learnerQuestions: ["Чи вимагає дієслово/конструкція прийменника a?", "Чи є після нього форма, яка приймає a/as?", "Чи допускає конкретна назва місця артикль?", "Чи це сталий випадок або виняток?"],
  },
  "relative-pronouns": {
    formation: "Вибір que, quem, onde, o qual/a qual/os quais/as quais, cujo тощо залежить від синтаксичної ролі, типу антецедента та прийменникового керування.",
    examples: [{ pt: "A pessoa com quem falei chegou.", uk: "Людина, з якою я говорив/говорила, прийшла." }, { pt: "O livro de que preciso está aqui.", uk: "Книжка, яка мені потрібна, тут." }, { pt: "A cidade onde nasci fica no norte.", uk: "Місто, де я народився/народилася, на півночі." }],
    mistakes: [{ wrong: "A pessoa que falei.", right: "A pessoa com quem falei.", why: "Відносна конструкція зберігає прийменникове керування базового речення." }],
    learnerQuestions: ["Яку синтаксичну роль має відносний елемент?", "Який прийменник вимагає базове речення?", "Чи антецедент — особа, місце, річ або присвійна конструкція?", "Чи доречний більш формальний o qual/cujo?"],
  },
};


Object.assign(SPECIAL, {
  "articles-definite": SPECIAL["articles-ukrainian"],
  "articles-indefinite": {
    formation: "um/uma/uns/umas вводять референт як новий або неідентифікований у дискурсі; їхній вибір залежить від роду, числа та референції.",
    learnerQuestions: ["Чи референт новий для слухача?", "Чи потрібна саме одинична/множинна неозначеність?", "Чи конструкція має кількісне або стилістичне значення?"],
  },
  "zero-article": {
    formation: "Відсутність артикля — частина граматики, а не автоматична помилка. Перевіряйте іменну групу, референцію, власну назву та сталі моделі.",
    learnerQuestions: ["Чи це масова/абстрактна речовина або загальне поняття?", "Чи власна назва допускає артикль у цій нормі?", "Чи це лексикалізована конструкція?"],
  },
  "articles-proper-names": SPECIAL["articles-ukrainian"],
  "relative-que": SPECIAL["relative-pronouns"],
  "relative-cujo": SPECIAL["relative-pronouns"],
  "relative-quem": SPECIAL["relative-pronouns"],
  "se-passive": SPECIAL["se-system"],
  "se-impersonal": SPECIAL["se-system"],
  "se-pronominal": SPECIAL["se-system"],
  "clitic-pronouns": SPECIAL["clitic-placement"],
  "proclisis": SPECIAL["clitic-placement"],
  "enclisis": SPECIAL["clitic-placement"],
  "mesoclisis": SPECIAL["clitic-placement"],
  "tense-aspect": SPECIAL["tenses"],
  "tense-vs-ukrainian": SPECIAL["tenses"],
  "subjunctive-present": SPECIAL["subjunctive-overview"],
  "subjunctive-imperfect": SPECIAL["subjunctive-overview"],
});


Object.assign(SPECIAL, {
  "presente": {
    formation: "Регулярний presente будується від основи інфінітива з особовими закінченнями; для нерегулярних дієслів потрібно вчити окрему парадигму. Значення визначає не форма сама по собі, а контекст: актуальність, звичка, загальний факт, заплановане майбутнє або наративне теперішнє.",
    examples: [{pt:"Trabalho de segunda a sexta.",uk:"Я працюю з понеділка по п'ятницю."},{pt:"Amanhã saio cedo.",uk:"Завтра я виходжу рано.",note:"Presente може мати майбутню інтерпретацію в контексті розкладу/плану."}],
    learnerQuestions:["Це дія зараз, звичка, загальний факт чи майбутній план?","Чи потрібен часовий маркер для правильної інтерпретації?"],
  },
  "preterito-perfeito": {
    formation: "Pretérito perfeito do indicativo має прості особові форми; його функція — представити подію як завершену в релевантному минулому часовому домені. Це не автоматичний еквівалент українського доконаного виду.",
    examples:[{pt:"Ontem escrevi três páginas.",uk:"Учора я написав/написала три сторінки."},{pt:"Em 2024 trabalhei em Lisboa.",uk:"У 2024 році я працював/працювала в Лісабоні."}],
    mistakes:[{wrong:"Я завжди перекладаю perfeito доконаним видом.",right:"Вибираю український вид за значенням усього речення.",why:"Португальський час і український вид належать до різних систем."}],
    learnerQuestions:["Який часовий домен завершено?","Чи йдеться про одну подію, серію подій або результат у контексті?"],
  },
  "preterito-imperfeito": {
    formation: "Imperfeito подає ситуацію зсередини: як фон, стан, звичку, повторюваність або процес. Він часто співіснує з perfeito в одному реченні.",
    examples:[{pt:"Enquanto estudava, ouvi música.",uk:"Поки я навчався/навчалася, я слухав/слухала музику."},{pt:"Todos os verões íamos à praia.",uk:"Щоліта ми ходили на пляж."}],
    learnerQuestions:["Це фон для іншої події?","Чи дія була звичною/повторюваною?","Чи важлива її внутрішня тривалість, а не межа?"],
  },
  "perfeito-vs-imperfeito": {
    formation: "Порівнюйте не назви часів, а профіль події: perfeito закриває подію як ціле, imperfeito відкриває її внутрішню структуру або робить її фоном/звичкою.",
    examples:[{pt:"Quando cheguei, ele saiu.",uk:"Коли я прийшов/прийшла, він вийшов."},{pt:"Quando cheguei, ele saía.",uk:"Коли я прийшов/прийшла, він саме виходив / виходив зазвичай.",note:"Контекст визначає конкретну інтерпретацію imperfeito."}],
    learnerQuestions:["Де межі події?","Що є фоном, а що переднім планом?","Чи український переклад змінює вид через контекст?"],
  },
  "perfeito-composto": {
    formation: "ter + particípio у pretérito perfeito composto має специфічну аспектуальну поведінку: часто виражає повторювану або тривалу ситуацію, що розгортається до моменту мовлення. Не ототожнюйте його з англійським present perfect.",
    examples:[{pt:"Tenho lido muito ultimamente.",uk:"Останнім часом я багато читаю."},{pt:"Tem chovido bastante.",uk:"Останнім часом часто йде дощ."}],
    learnerQuestions:["Чи ситуація повторюється/триває до тепер?","Чи я помилково переношу англійську модель present perfect?"],
  },
  "mais-que-perfeito": {
    formation: "Mais-que-perfeito виражає передування однієї минулої події іншій. У сучасній нейтральній мові аналітична модель tinha + particípio значно продуктивніша; синтетичні форми типу tivera мають обмеженіший/формальніший ужиток.",
    examples:[{pt:"Quando cheguei, ela já tinha saído.",uk:"Коли я прийшов/прийшла, вона вже пішла."},{pt:"Ele já partira quando telefonámos.",uk:"Він уже пішов, коли ми зателефонували.",register:"formal"}],
    learnerQuestions:["Яка подія сталася раніше за іншу минулу?","Чи доречна синтетична форма в цьому регістрі?"],
  },
  "futuro": {
    formation: "Futuro do indicativo утворюється від інфінітива з особовими закінченнями; у сучасному мовленні ir + infinitivo часто конкурує з ним для майбутньої часової інтерпретації.",
    examples:[{pt:"Amanhã estudarei em casa.",uk:"Завтра я навчатимусь удома.",register:"formal"},{pt:"Amanhã vou estudar em casa.",uk:"Завтра я навчатимусь удома.",register:"neutral"},{pt:"Será o João?",uk:"Це, мабуть, Жуан?",note:"Futuro може мати модальне значення припущення."}],
    learnerQuestions:["Це майбутній час чи припущення?","Чи регістр сприяє futuro do indicativo або ir + infinitivo?"],
  },
  "futuro-composto": {
    formation: "ter у futuro + particípio виражає подію, завершену до майбутньої точки: terei feito, terás chegado тощо.",
    examples:[{pt:"Quando voltares, terei terminado.",uk:"Коли ти повернешся, я вже закінчу."}],
    learnerQuestions:["Яка майбутня точка є межею?","Що буде завершено до неї?"],
  },
  "condicional": {
    formation: "Condicional утворюється від інфінітива з відповідними закінченнями й може виражати гіпотетичний наслідок, майбутнє щодо минулого, ввічливість або обережне повідомлення.",
    examples:[{pt:"Eu faria isso se pudesse.",uk:"Я зробив би це, якби міг/могла."},{pt:"Disse que viria.",uk:"Він сказав, що прийде."},{pt:"Gostaria de falar consigo.",uk:"Я хотів/хотіла б із вами поговорити.",register:"formal"}],
    learnerQuestions:["Це наслідок умови, future-in-the-past чи прагматична ввічливість?","Чи є умова явно вираженою?"],
  },
  "compound-tenses": {
    formation: "Складені форми будуються з допоміжного ter/haver + particípio; час допоміжного визначає часову рамку, а participle не узгоджується з підметом у стандартній конструкції з ter.",
    examples:[{pt:"Tinha terminado o trabalho.",uk:"Я закінчив/закінчила роботу до того моменту."},{pt:"Teremos terminado até sexta-feira.",uk:"До п'ятниці ми закінчимо."}],
    learnerQuestions:["Який час має допоміжне дієслово?","Яке відношення між подією та часовою точкою?"],
  },
  "tense-aspect": {
    formation: "Для аналізу розділяйте tense (часову локалізацію) та aspect (спосіб представлення внутрішньої структури ситуації). Португальська реалізує аспект не однією морфологічною опозицією, а взаємодією часів, лексики та перифраз.",
    learnerQuestions:["Яка часова точка?","Як подано внутрішню структуру події?","Чи не підміняю аспект українським видом?"],
  },
  "tense-vs-ukrainian": {
    formation: "Український вид треба використовувати як порівняльний орієнтир, а не як таблицю відповідників. Один португальський час може перекладатися дієсловами різного виду залежно від контексту, і навпаки.",
    mistakes:[{wrong:"perfeito = завжди доконаний; imperfeito = завжди недоконаний",right:"Визначаю значення за часовою перспективою, аспектом і дискурсом.",why:"Таке ототожнення породжує систематичні помилки."}],
  },
  "sequence-of-tenses": {
    formation: "Узгодження часів описуйте через відношення simultaneidade, anterioridade та posterioridade, а не через механічне правило «після минулого — минулий». Особливо важливі indicativo, conjuntivo та condicional.",
    examples:[{pt:"Disse que estava cansado.",uk:"Він сказав, що був утомлений."},{pt:"Disse que viria no dia seguinte.",uk:"Він сказав, що прийде наступного дня."}],
    learnerQuestions:["Що відбувається одночасно з головною подією?","Що відбулося раніше?","Що було майбутнім відносно минулого моменту?"],
  },
});


Object.assign(SPECIAL, {
  "proclisis": {
    formation: "Próclise ставить clitic перед дієсловом. У стандартній моделі її викликають певні синтаксичні елементи й конструкції; PT-BR має ширший живий ужиток próclise, особливо в розмовній мові.",
    examples:[{pt:"Não me disseram nada.",uk:"Мені нічого не сказали."},{pt:"Quem te contou isso?",uk:"Хто тобі це сказав?"},{pt:"Eu me lembro disso.",uk:"Я це пам'ятаю.",variety:"BR"}],
    mistakes:[{wrong:"Não disseram-me nada.",right:"Não me disseram nada.",why:"Заперечення não перед дієсловом є типовим тригером próclise."}],
    learnerQuestions:["Який елемент перед дієсловом є тригером?","Чи це PT-BR чи PT-PT?","Чи приклад належить до формальної письмової норми чи живого мовлення?"],
  },
  "enclisis": {
    formation: "Ênclise приєднує clitic після дієслова через дефіс: disse-me, viu-o, faça-se. Її роль і продуктивність залежать від синтаксичної позиції, різновиду та регістру; не називайте кожну postverbal форму «європейською», не уточнивши контекст.",
    examples:[{pt:"Disse-me a verdade.",uk:"Він сказав мені правду.",variety:"PT",register:"formal"},{pt:"Diga-me o seu nome.",uk:"Скажіть мені ваше ім'я.",variety:"PT"}],
    learnerQuestions:["Чи немає попереднього тригера próclise?","Який регістр і стандарт?","Чи форма стоїть після особового дієслова, інфінітива або gerúndio?"],
  },
  "mesoclisis": {
    formation: "Mesóclise вставляє clitic усередину синтетичного futuro do indicativo або condicional: dir-lhe-ei, far-se-ia. Це високоформальна/книжна модель і не слід подавати її як звичайну розмовну конструкцію.",
    examples:[{pt:"Dir-lhe-ei amanhã.",uk:"Я скажу йому/їй завтра.",register:"formal"},{pt:"Far-se-ia uma exceção.",uk:"Було б зроблено виняток.",register:"formal"}],
    mistakes:[{wrong:"Я використовую mesóclise у звичайному чаті.",right:"У розмовній мові зазвичай обирається інша конструкція залежно від різновиду.",why:"Mesóclise має виразно формальний регістр."}],
    learnerQuestions:["Чи це справді futuro/condicional?","Чи потрібен такий формальний регістр?","Чи не природніша perifrástica конструкція?"],
  },
  "clitics-br-pt": {
    formation: "Для PT-BR треба розділяти письмову стандартну норму, освічене мовлення та розмовні моделі. Próclise дуже продуктивна в живій мові; повні форми ele/ela також широко конкурують із o/a.",
    examples:[{pt:"Eu te vi ontem.",uk:"Я бачив/бачила тебе вчора.",variety:"BR"},{pt:"Eu vi ele ontem.",uk:"Я бачив/бачила його вчора.",variety:"BR",register:"colloquial"},{pt:"Eu o vi ontem.",uk:"Я бачив/бачила його вчора.",variety:"BR",register:"formal"}],
    learnerQuestions:["Який саме шар PT-BR я описую?","Чи приклад призначений для формального письма чи розмови?","Чи повний займенник конкурує з clitic?"],
  },
});


  "ter": {
    formulas: [{ pattern: "ter + nome → posse / relação; ter + particípio → tempo composto; ter de/que + infinitivo → obrigação", note: "A função de ter depende da construção: não reduza ter ao verbo ucraniano «мати»." }],
    formation: "Distinga o verbo lexical ter, o auxiliar dos tempos compostos e as perífrases ter de / ter que. Na construção existencial, compare também ter com haver e considere a variedade.",
    examples: [
      { pt: "Tenho dois irmãos.", uk: "У мене є два брати." },
      { pt: "Tenho estudado muito.", uk: "Я останнім часом багато вчуся." },
      { pt: "Tenho de trabalhar amanhã.", uk: "Мені треба працювати завтра." }
    ],
    mistakes: [{ wrong: "Eu tenho estudado ontem.", right: "Estudei ontem.", why: "O tempo composto com ter não é um equivalente mecânico de qualquer passado ucraniano; a leitura depende do intervalo e da aspectualidade." }],
    ukrainian: "Українське «мати» не охоплює всі функції ter: порівнюйте володіння, допоміжність, обов'язок і конструкції існування.",
    brPt: "У PT-BR ter é muito produtivo em construções existenciais na fala, enquanto haver permanece importante em registros formais e em usos específicos. Не змішуйте розмовну та формальну моделі."
  },
  "haver": {
    formulas: [{ pattern: "há + nome → existência; haver + particípio → tempo composto em registros/construções específicos; haver de + infinitivo → valor modal", note: "Há é forma impessoal de haver no presente." }],
    formation: "Em há no sentido existencial, não trate o nome posterior como sujeito que obrigatoriamente controla o verbo: a construção é impessoal. Separe-a de haver de e dos usos auxiliares.",
    examples: [
      { pt: "Há muitas pessoas aqui.", uk: "Тут багато людей." },
      { pt: "Há um problema.", uk: "Є одна проблема." },
      { pt: "Hei de voltar.", uk: "Я ще повернуся / я маю повернутися.", variety: "PT", register: "formal" }
    ],
    mistakes: [{ wrong: "Hão muitas pessoas aqui.", right: "Há muitas pessoas aqui.", why: "Haver existencial é impessoal no padrão descrito aqui." }],
    ukrainian: "Не перекладайте há одним українським дієсловом: «є», «існує», «мається» та інші переклади не визначають португальську граматику.",
    brPt: "У розмовній PT-BR конструкції ter + SN широко вживається в екзистенційному значенні; для нейтральної/формальної письмової мови важливо знати нормативне há."
  },
  "ter-haver": {
    formulas: [{ pattern: "ter → posse / usos auxiliares / existência em variedades; haver → existência impessoal / usos auxiliares / haver de", note: "Порівняння треба робити за конкретною конструкцією, а не за перекладом «мати / бути»." }],
    examples: [
      { pt: "Tenho um carro.", uk: "У мене є автомобіль." },
      { pt: "Há um carro na rua.", uk: "На вулиці є автомобіль." },
      { pt: "Tem um carro na rua.", uk: "На вулиці є автомобіль.", variety: "BR", register: "colloquial" }
    ],
    mistakes: [{ wrong: "Há dois irmãos. → «У мене є два брати»", right: "Tenho dois irmãos.", why: "Володіння/родинна належність і екзистенційне значення — різні конструкції." }],
    ukrainian: "Українська «мати» і безособове «є/існує» допомагають як контраст, але не є готовою схемою вибору ter/haver.",
    brPt: "Ter existential — важлива PT-BR зона варіантності; у формальному письмі та в PT-PT haver залишається центральним у відповідних екзистенційних конструкціях."
  },
  "personal-pronouns": {
    formulas: [{ pattern: "sujeito: eu/tu/você/ele...; objeto: me/te/o/a/lhe...; tónico após preposição: mim/ti/ele...", note: "Форма залежить від синтаксичної ролі, прийменника, клітичності, різновиду та регістру." }],
    examples: [
      { pt: "Eu vi-o ontem.", uk: "Я бачив/бачила його вчора.", variety: "PT" },
      { pt: "Eu vi ele ontem.", uk: "Я бачив/бачила його вчора.", variety: "BR", register: "colloquial" },
      { pt: "Isto é para mim.", uk: "Це для мене." }
    ],
    mistakes: [{ wrong: "Isto é para eu.", right: "Isto é para mim.", why: "Після прийменника у цій конструкції потрібна tonic pronoun mim; eu зберігається в окремих infinitival subject constructions." }],
    ukrainian: "Українські форми «я/мене/мені» не відповідають механічно португальським eu/me/mim; спочатку визначте синтаксичну позицію.",
    brPt: "У PT-BR повні форми ele/ela можуть конкурувати з o/a як об'єктні форми в розмовному мовленні; для навчання позначайте регістр."
  },
  "subject-pronouns": {
    formulas: [{ pattern: "eu, tu, você, ele/ela, nós, vocês, eles/elas", note: "Підметовий займенник може бути виражений або нульовим; вибір також пов'язаний із формою звертання." }],
    examples: [
      { pt: "Eu estudo português.", uk: "Я вивчаю португальську." },
      { pt: "Estudo português.", uk: "Я вивчаю португальську." },
      { pt: "Você estuda português?", uk: "Ви/ти вивчаєте португальську?" }
    ],
    mistakes: [{ wrong: "Я завжди мушу сказати Eu.", right: "Estudo português. / Eu estudo português.", why: "Португальська допускає null subject, але прагматичні й варіантні фактори впливають на вибір вираженого підмета." }],
    ukrainian: "Українська також часто опускає підмет, але фактори відновлення референта й інформаційного фокусу не повністю збігаються.",
    regional: "У PT-BR частота виражених підметових займенників вища в низці конструкцій, ніж у традиційно описуваній європейській моделі; це пов'язано з перебудовою займенникової системи та дієслівного узгодження."
  },
  "nos-a-gente": {
    formulas: [{ pattern: "nós + 1-а особа множини; a gente + 3-я особа однини", note: "Обидві конструкції можуть означати «ми», але відрізняються стилістично й регіонально." }],
    examples: [
      { pt: "Nós vamos amanhã.", uk: "Ми підемо завтра." },
      { pt: "A gente vai amanhã.", uk: "Ми підемо завтра.", variety: "BR" }
    ],
    mistakes: [{ wrong: "A gente vamos.", right: "A gente vai.", why: "a gente граматично керує 3-ю особою однини." }],
    ukrainian: "Українське «ми» не підказує, що a gente потребує 3-ї особи однини.",
    brPt: "A gente особливо продуктивне в PT-BR; воно також існує в інших різновидах, але частотність і соціальне значення відрізняються."
  },
  "possessives": {
    formulas: [{ pattern: "meu/minha, teu/tua, seu/sua, nosso/nossa... + узгодження з possessed noun", note: "Рід і число присвійного узгоджуються з предметом володіння, а не з власником." }],
    examples: [
      { pt: "A minha casa.", uk: "Мій будинок.", variety: "PT" },
      { pt: "Minha casa.", uk: "Мій будинок.", variety: "BR" },
      { pt: "Os meus livros.", uk: "Мої книги.", variety: "PT" }
    ],
    mistakes: [{ wrong: "meu casa", right: "minha casa", why: "Форма узгоджується з casa, яка є жіночого роду." }],
    ukrainian: "Українське «мій/моя» також узгоджується з предметом, але артикль і система звертання створюють додаткові португальські правила.",
    brPt: "Артикль перед присвійним має варіантний розподіл: o meu/a minha типовіше для PT-PT, тоді як PT-BR часто вживає meu/minha без артикля; регіональна та стилістична варіантність значна."
  },
  "prep-a": {
    formulas: [{ pattern: "a + infinitivo / destino / destinatário / час; ao/à/aos/às = a + artigo", note: "Точне значення визначає керування та конструкція; crase — окреме орфографічне явище." }],
    examples: [
      { pt: "Vou a Lisboa.", uk: "Я їду до Лісабона." },
      { pt: "Vou ao Porto.", uk: "Я їду до Порту." },
      { pt: "Entreguei o livro à professora.", uk: "Я передав/передала книжку викладачці." }
    ],
    mistakes: [{ wrong: "Vou à Lisboa.", right: "Vou a Lisboa.", why: "У цій власній назві немає артикля, з яким a утворив би crase." }],
    ukrainian: "Українські «до/в/на/о» не дають автоматичного португальського прийменника. Вчіть a як частину керування й конструкцій.",
    learnerQuestions: ["Чи є після a артикль a/as?", "Чи вимагає дієслово саме a?", "Чи йдеться про час, напрямок, адресата або інфінітив?"]
  },
  "prep-de": {
    formulas: [{ pattern: "de + origem / posse / conteúdo / material / complemento nominal", note: "de часто входить до лексичної рамки дієслова, іменника або прикметника." }],
    examples: [
      { pt: "Venho de casa.", uk: "Я приходжу з дому." },
      { pt: "O livro do João.", uk: "Книжка Жуана." },
      { pt: "Gosto de música.", uk: "Я люблю музику." }
    ],
    mistakes: [{ wrong: "Gosto música.", right: "Gosto de música.", why: "gostar керує de." }],
    ukrainian: "В українській конструкція «любити щось» не має прийменника, тому gostar de — типова зона інтерференції.",
    learnerQuestions: ["Це вільний прийменниковий модифікатор чи частина керування?", "Чи треба de + артикль/займенник?", "Чи форма змінюється після власної назви або займенника?"]
  },
  "verb-preposition": {
    formulas: [{ pattern: "V + preposição selecionada + complemento", note: "Керування є властивістю конкретної лексеми/конструкції, а не загальним правилом перекладу." }],
    examples: [
      { pt: "Gosto de música.", uk: "Я люблю музику." },
      { pt: "Penso no problema.", uk: "Я думаю про проблему." },
      { pt: "Preciso de ajuda.", uk: "Мені потрібна допомога." }
    ],
    mistakes: [{ wrong: "Penso o problema.", right: "Penso no problema.", why: "У цій моделі pensar вимагає em перед nominal complement." }],
    ukrainian: "Українські відмінки приховують прийменникове керування, тому лексему краще вчити разом із рамкою.",
    learnerQuestions: ["Який прийменник вибирає дієслово?", "Чи змінюється рамка залежно від значення дієслова?", "Чи contracted form потрібна перед артиклем?"]
  },
  "questions-yesno": {
    formulas: [{ pattern: "декларативне речення + інтонація / interrogative syntax", note: "PT-BR часто використовує висхідну інтонацію без обов'язкової інверсії; PT-PT також має інші стратегії, включно з інверсією в окремих моделях." }],
    examples: [
      { pt: "Você vem amanhã?", uk: "Ти/ви прийдеш/прийдете завтра.", variety: "BR" },
      { pt: "Vens amanhã?", uk: "Ти прийдеш завтра?", variety: "PT" },
      { pt: "É que vais amanhã?", uk: "Ти справді/а ти їдеш завтра?", variety: "PT", register: "neutral" }
    ],
    ukrainian: "Українська також часто формує питання інтонацією, тому англійська модель do/inversion не повинна бути стартовою схемою для португальської.",
    learnerQuestions: ["Чи питання відрізняється від твердження лише інтонацією?", "Чи потрібен interrogative pronoun/particle?", "Який різновид і регістр моделюється?"]
  },
  "question-word-order": {
    formulas: [{ pattern: "interrogative word + clause / interrogative phrase + clause", note: "Порядок залежить від типу питання, фокусу, різновиду та регістру." }],
    examples: [
      { pt: "Onde moras?", uk: "Де ти живеш?", variety: "PT" },
      { pt: "Onde você mora?", uk: "Де ти/ви живеш/живете?", variety: "BR" },
      { pt: "O que você quer?", uk: "Що ти/ви хочеш/хочете?", variety: "BR" }
    ],
    ukrainian: "Не переносіть англійську інверсію: португальські wh-questions мають власні порядки слів, а PT-BR часто зберігає declarative order."
  },
  "negation-nao": {
    formulas: [{ pattern: "não + verbo / constituinte negado", note: "não зазвичай стоїть перед finite verb у нейтральному реченні; позиція взаємодіє з clitic placement." }],
    examples: [
      { pt: "Não sei.", uk: "Я не знаю." },
      { pt: "Não me disseram nada.", uk: "Мені нічого не сказали." },
      { pt: "Eu não fui.", uk: "Я не пішов/пішла." }
    ],
    mistakes: [{ wrong: "Não disseram-me nada.", right: "Não me disseram nada.", why: "não є тригером próclise." }],
    ukrainian: "Українське «не» не має окремого клитичного компонента, який змінює позицію займенника; португальська синтаксично пов'язує ці явища.",
    learnerQuestions: ["Що саме заперечується?", "Чи є негативний займенник після дієслова?", "Як заперечення впливає на clitic placement?"]
  },
  "negation-ninguem": {
    formulas: [{ pattern: "não + ninguém/nada/nenhum... = negative concord", note: "Два негативні елементи разом виражають одне негативне твердження." }],
    examples: [
      { pt: "Não vi ninguém.", uk: "Я нікого не бачив/бачила." },
      { pt: "Não tenho nada.", uk: "У мене нічого немає." },
      { pt: "Ninguém veio.", uk: "Ніхто не прийшов." }
    ],
    mistakes: [{ wrong: "Não vi ninguém = «я бачив когось».", right: "Não vi ninguém.", why: "Португальська використовує negative concord; não і ninguém не скасовують одне одного." }],
    ukrainian: "Українська також має конструкції «не...ніхто/нічого», тому це добра зона для контрастивного навчання, але форми й позиції різняться.",
    learnerQuestions: ["Чи negative item стоїть перед чи після дієслова?", "Чи потрібне não?", "Чи це заперечення всього речення чи окремого компонента?"]
  },
  "agreement-sv": {
    formulas: [{ pattern: "subject + verb → agreement in person/number; impersonal constructions → special behaviour", note: "Складені підмети, a gente, haver і se створюють різні моделі." }],
    examples: [
      { pt: "A Maria chegou.", uk: "Марія прийшла." },
      { pt: "A Maria e o João chegaram.", uk: "Марія та Жуан прийшли." },
      { pt: "A gente chegou cedo.", uk: "Ми прийшли рано.", variety: "BR" }
    ],
    mistakes: [{ wrong: "A gente chegámos.", right: "A gente chegou.", why: "a gente керує 3-ю особою однини." }],
    ukrainian: "Українська має багатшу відмінкову систему, але узгодження підмета з присудком теж є; основна пастка — спеціальні португальські конструкції та варіантність.",
    learnerQuestions: ["Яка форма є граматичним підметом?", "Чи конструкція impersonal/existential?", "Чи a gente, se або collective noun змінює модель?"]
  },
  "agreement-na": {
    formulas: [{ pattern: "determinante/nome/adjetivo/particípio → gênero e número", note: "Узгодження треба розглядати в межах nominal phrase та predicative structure." }],
    examples: [
      { pt: "Duas casas grandes.", uk: "Два великі будинки." },
      { pt: "As portas estão abertas.", uk: "Двері відчинені." }
    ],
    mistakes: [{ wrong: "duas casa grande", right: "duas casas grandes", why: "Детермінатив, іменник і прикметник узгоджуються за числом; прикметник також за родом." }],
    ukrainian: "Українська теж має узгодження, але відмінок додає ще одну морфологічну категорію; у португальській її немає."
  },
  "determiners-overview": {
    formulas: [{ pattern: "determiner + noun phrase → reference / quantity / deixis", note: "Артиклі, demonstratives, possessives та quantifiers взаємодіють, але не є взаємозамінними." }],
    examples: [
      { pt: "o livro", uk: "книга / ця відома книга" },
      { pt: "este livro", uk: "ця книга" },
      { pt: "meu livro", uk: "моя книга" }
    ],
    ukrainian: "Українська не має артиклів, тому систему детермінативів краще вчити через референцію та структуру noun phrase, а не через список перекладів."
  },
  "acordo-ortografico": {
    formulas: [{ pattern: "Orthographic Agreement 1990 → standardized spellings with permitted national/regional variants", note: "Угода не усунула всіх орфографічних варіантів між PT-BR та PT-PT." }],
    examples: [
      { pt: "ação", uk: "дія" },
      { pt: "facto", uk: "факт", variety: "PT" },
      { pt: "fato", uk: "факт", variety: "BR" }
    ],
    mistakes: [{ wrong: "Вважати, що всі відмінності написання після 1990 зникли.", right: "Перевіряти конкретне слово й національний стандарт.", why: "Угода гармонізує частину орфографії, але допускає або зберігає варіантність у певних зонах." }],
    ukrainian: "Для україномовного студента важливо не змішувати орфографічну варіантність із «помилкою»: спочатку визначте стандарт і словникову норму.",
    brPt: "Окремі відмінності, як fato/facto, пов'язані з вимовою та національним стандартом і не зводяться до простої «старої/нової орфографії»."
  }

  "subjunctive-present": {
    formulas: [{ pattern: "que + presente do conjuntivo → vontade, dúvida, avaliação, necessidade, finalidade, condição não factual", note: "O conjuntivo não é simplesmente «tempo de incerteza»: a seleção depende da construção e da modalidade." }],
    examples: [
      { pt: "Espero que venhas amanhã.", uk: "Сподіваюся, що ти прийдеш завтра." },
      { pt: "É importante que estudes todos os dias.", uk: "Важливо, щоб ти щодня вчився/вчилася.", variety: "PT" },
      { pt: "Talvez ele venha amanhã.", uk: "Можливо, він прийде завтра." }
    ],
    mistakes: [{ wrong: "Espero que vem amanhã.", right: "Espero que venha amanhã.", why: "Після конструкції esperança + que в стандартній моделі потрібен conjuntivo." }],
    ukrainian: "Українське «щоб», умовні конструкції та модальні слова допомагають зрозуміти функцію, але не передбачають механічної відповідності форм.",
    learnerQuestions: ["Що саме вибирає conjuntivo?", "Це залежність від іншої предикації чи самостійне модальне значення?", "Чи змінився час/референція, чи лише модальність?"]
  },
  "subjunctive-imperfect": {
    formulas: [{ pattern: "pretérito imperfeito do conjuntivo → умова, гіпотеза, залежність у минулому, бажання", note: "Типова модель форми походить від 3-ї особи множини pretérito perfeito." }],
    examples: [
      { pt: "Se eu tivesse tempo, viajaria mais.", uk: "Якби я мав/мала час, я б більше подорожував/подорожувала." },
      { pt: "Queria que ele viesse.", uk: "Я хотів/хотіла, щоб він прийшов." },
      { pt: "Se estudasses mais, aprenderias mais.", uk: "Якби ти більше вчився/вчилася, ти б більше навчився/навчилася.", variety: "PT" }
    ],
    mistakes: [{ wrong: "Se eu teria tempo, viajaria.", right: "Se eu tivesse tempo, viajaria.", why: "У стандартній умовній конструкції protasis використовує imperfeito do conjuntivo, а apodosis — condicional." }],
    ukrainian: "Українська умовність теж розрізняє передумову й наслідок, але форми не збігаються з португальськими.",
    learnerQuestions: ["Яка частина речення є умовою?", "Чи йдеться про гіпотезу, бажання або залежність у минулому?", "Чи потрібно розрізняти simultaneidade та anterioridade?"]
  },
  "futuro-subjuntivo": {
    formulas: [{ pattern: "se/quando/logo que/assim que + futuro do conjuntivo → майбутня умова/часова залежність", note: "Форма особливо важлива для реальних або відкритих майбутніх ситуацій." }],
    examples: [
      { pt: "Quando chegares, liga-me.", uk: "Коли приїдеш, подзвони мені.", variety: "PT" },
      { pt: "Se tiveres tempo, vem comigo.", uk: "Якщо матимеш час, ходи зі мною.", variety: "PT" },
      { pt: "Quando você chegar, me avise.", uk: "Коли приїдеш/приїдете, дай/дайте мені знати.", variety: "BR" }
    ],
    mistakes: [{ wrong: "Quando chegarás, liga-me.", right: "Quando chegares, liga-me.", why: "Після майбутнього часового/умовного маркера потрібен futuro do conjuntivo, а не futuro do indicativo." }],
    ukrainian: "Українська не має прямого морфологічного аналога futuro do conjuntivo; переклад часто використовує звичайний майбутній час.",
    learnerQuestions: ["Чи подія ще не відбулася?", "Чи є вона умовою/часовою передумовою?", "Чи є підрядна частина відкритою щодо майбутнього виконання?"]
  },
  "personal-infinitive": {
    formulas: [{ pattern: "infinitivo pessoal → infinitivo з власним/відновлюваним суб'єктом", note: "Форма не є просто «ще одним минулим часом» і не замінює автоматично будь-яку підрядну конструкцію." }],
    examples: [
      { pt: "É importante estudarmos.", uk: "Важливо, щоб ми вчилися." },
      { pt: "Antes de saíres, fecha a porta.", uk: "Перед тим як вийти, зачини двері.", variety: "PT" },
      { pt: "É melhor eles ficarem aqui.", uk: "Краще, щоб вони залишилися тут." }
    ],
    mistakes: [{ wrong: "Personal infinitive потрібен у кожному реченні з «щоб».", right: "É importante estudar. / É importante estudarmos.", why: "Вибір залежить від референції, синтаксису, контролю суб'єкта та стилю." }],
    ukrainian: "Українське підрядне з «щоб» часто є семантичною підказкою, але не визначає автоматично португальську конструкцію.",
    learnerQuestions: ["Хто є суб'єктом інфінітива?", "Чи треба його експлікувати?", "Чи є coreference з матричним суб'єктом?", "Чи конструкція формальна/нейтральна?"]
  },
  "gerund": {
    formulas: [{ pattern: "estar + gerúndio → прогресивність; gerúndio/adverbial → супровідна або способова дія", note: "Розподіл форм і продуктивність різняться між різновидами португальської." }],
    examples: [
      { pt: "Estou a estudar.", uk: "Я зараз навчаюся.", variety: "PT" },
      { pt: "Estou estudando.", uk: "Я зараз навчаюся.", variety: "BR" },
      { pt: "Entrou sorrindo.", uk: "Він/вона увійшов/увійшла, усміхаючись." }
    ],
    mistakes: [{ wrong: "Estou estudando = неправильна португальська.", right: "Estou estudando. / Estou a estudar.", why: "Обидві моделі граматичні, але їхня частотність і соціально-регіональний розподіл різняться." }],
    ukrainian: "Український недоконаний вид часто передає прогресивну ситуацію без окремої герундіальної форми; не перекладайте gerúndio механічно.",
    brPt: "estar + gerúndio є дуже продуктивним у PT-BR; estar a + infinitivo є центральною моделлю в PT-PT."
  },
  "periphrases": {
    formulas: [{ pattern: "auxiliar/semiauxiliar + infinitivo/gerúndio/particípio → аспект, модальність, початок, тривалість, завершення, намір", note: "Значення визначається всією конструкцією, а не одним дієсловом." }],
    examples: [
      { pt: "Vou estudar amanhã.", uk: "Я навчатимуся завтра / Я буду вчитися завтра." },
      { pt: "Tenho de trabalhar.", uk: "Мені треба працювати." },
      { pt: "Começou a chover.", uk: "Почало дощити." }
    ],
    mistakes: [{ wrong: "Vou estudar = лише буквальне «рухаюся вчитися».", right: "Vou estudar.", why: "ir + infinitivo може бути конструкцією майбутньої/інтенційної перспективи, а не буквально рухом." }],
    ukrainian: "Українська широко виражає аспект і модальність префіксами, суфіксами та допоміжними словами; португальські perífrases часто потребують навчання як окремих рамок.",
    learnerQuestions: ["Який компонент несе лексичне значення?", "Який компонент додає аспект/модальність?", "Чи змінюється значення залежно від різновиду?"]
  },
  "passive": {
    formulas: [{ pattern: "ser + particípio → пасивна подія; estar/ficar + particípio → результативний стан; se-passive → конструкція з se", note: "Не ототожнюйте passive event і resultative state." }],
    examples: [
      { pt: "A carta foi escrita ontem.", uk: "Лист був написаний учора." },
      { pt: "A porta está fechada.", uk: "Двері зачинені." },
      { pt: "Vendem-se casas.", uk: "Продаються будинки." }
    ],
    mistakes: [{ wrong: "A porta está fechada = завжди пасив.", right: "Аналізуйте також resultative reading.", why: "estar + particípio може описувати стан, який є результатом попередньої дії." }],
    ukrainian: "Українська також розрізняє дію і стан, але морфологічні та аналітичні засоби інші.",
    learnerQuestions: ["Йдеться про подію чи результативний стан?", "Чи названо агента?", "Чи se-конструкція є passive, impersonal або reflexive?"]
  },
  "subordinate-clauses": {
    formulas: [{ pattern: "oração principal + subordinada → causal, temporal, concessiva, final, condicional, completiva, relativa...", note: "Тип підрядності визначає сполучник, порядок, час/спосіб та іноді вибір conjuntivo." }],
    examples: [
      { pt: "Quando chegar, liga-me.", uk: "Коли приїдеш, подзвони мені." },
      { pt: "Embora esteja cansado, continuo.", uk: "Хоч я втомився/втомилася, я продовжую." },
      { pt: "Estudo porque quero aprender.", uk: "Я навчаюся, бо хочу вивчити." }
    ],
    mistakes: [{ wrong: "Embora estou cansado.", right: "Embora esteja cansado.", why: "У concessive clause embora за стандартною моделлю вимагає conjuntivo." }],
    ukrainian: "Українські сполучники «коли, хоча, бо, щоб, якщо» корисні для семантичного зіставлення, але керування способами в португальській треба вчити окремо.",
    learnerQuestions: ["Який тип залежності?", "Який сполучник/прийменникова конструкція?", "Який mode вибирає підрядність?", "Чи є coreference між суб'єктами?"]
  },
  "relative-pronouns": {
    formulas: [{ pattern: "antecedent + que/quem/onde/o qual/cujo + clause", note: "Вибір відносного займенника залежить від семантики, синтаксичної ролі та прийменникового керування." }],
    examples: [
      { pt: "O livro que comprei.", uk: "Книжка, яку я купив/купила." },
      { pt: "A pessoa com quem falei.", uk: "Людина, з якою я говорив/говорила." },
      { pt: "A cidade onde nasci.", uk: "Місто, де я народився/народилася." }
    ],
    mistakes: [{ wrong: "A pessoa que falei.", right: "A pessoa com quem falei.", why: "falar у цій конструкції вимагає прийменникового complemento: falar com alguém." }],
    ukrainian: "Українська відмінкова система часто кодує відношення, які португальська виражає прийменником + relative pronoun.",
    learnerQuestions: ["Яка роль antecedent у підрядній частині?", "Чи потрібен прийменник?", "Чи cujo виражає володіння?", "Чи конструкція restrictive або non-restrictive?"]
  },
  "syntax-word-order": {
    formulas: [{ pattern: "SVO як базова модель + topicalization/focus/cleft/inversion", note: "Базовий порядок не означає, що інші порядки неправильні; їхня інтерпретація залежить від інформаційної структури." }],
    examples: [
      { pt: "A Maria comprou o livro.", uk: "Марія купила книжку." },
      { pt: "O livro, a Maria comprou ontem.", uk: "Книжку Марія купила вчора." },
      { pt: "Foi a Maria que comprou o livro.", uk: "Саме Марія купила книжку." }
    ],
    mistakes: [{ wrong: "Вважати будь-який порядок, відмінний від SVO, помилкою.", right: "Аналізувати topic, focus і register.", why: "Португальська допускає інформаційно мотивовані перестановки." }],
    ukrainian: "Українська має вільніший порядок слів завдяки відмінкам; тому український студент може переносити перестановки без маркування інформаційної структури.",
    learnerQuestions: ["Що є topic?", "Що є focus?", "Чи змінилася семантика чи лише інформаційна структура?", "Який регістр?"]
  },
  "information-structure": {
    formulas: [{ pattern: "topic + comment / focus + presupposition → порядок, просодія та cleft constructions", note: "Інформаційна структура пояснює частину порядку слів, займенникового дублювання та cleft-конструкцій." }],
    examples: [
      { pt: "Quanto ao João, ele já chegou.", uk: "Щодо Жуана, він уже прийшов." },
      { pt: "Foi o João que telefonou.", uk: "Саме Жуан подзвонив." }
    ],
    ukrainian: "Українська також використовує topic/focus, але може кодувати їх іншим порядком слів і просодією; не переносіть українську інтонацію як єдине правило.",
    learnerQuestions: ["Яка інформація вже відома?", "Що є новою/контрастивною інформацією?", "Чому займенник або cleft тут природний?"]
  },
  "ser-estar": {
    formulas: [{ pattern: "ser → identity/classification/origin/characteristic; estar → state/location/temporary condition; lexically fixed contrasts exist", note: "Це не проста пара «постійне vs тимчасове»." }],
    examples: [
      { pt: "Ela é médica.", uk: "Вона лікарка." },
      { pt: "Ela está cansada.", uk: "Вона втомлена." },
      { pt: "O livro está na mesa.", uk: "Книжка на столі." },
      { pt: "Lisboa fica em Portugal.", uk: "Лісабон розташований у Португалії." }
    ],
    mistakes: [{ wrong: "estar = усе тимчасове; ser = усе постійне.", right: "Вивчати значення конкретної predicação.", why: "Місце, оцінка, характеристика, ідентичність і лексикалізовані значення не зводяться до однієї шкали тривалості." }],
    ukrainian: "Українська не має прямого граматичного розщеплення ser/estar; переклад «бути» приховує різницю, яку в португальській треба аналізувати синтаксично й семантично.",
    learnerQuestions: ["Це identity/classification чи state/location?", "Чи прикметник має інше значення з ser та estar?", "Чи конструкція лексикалізована?"]
  },
  "por-para": {
    formulas: [{ pattern: "por → причина, засіб, траєкторія, обмін, тривалість/агент у пасиві; para → напрямок, адресат, мета, дедлайн, призначення", note: "Значення залежать від конструкції; переклад «за/для» недостатній." }],
    examples: [
      { pt: "Fiz isso por você.", uk: "Я зробив/зробила це заради тебе." },
      { pt: "Isto é para você.", uk: "Це для тебе." },
      { pt: "Vou para casa.", uk: "Я йду додому." },
      { pt: "Estudo para aprender.", uk: "Я вчуся, щоб навчитися." }
    ],
    mistakes: [{ wrong: "para = «для», por = «за» у всіх випадках.", right: "Визначити semantic relation конкретної конструкції.", why: "Обидва прийменники мають кілька продуктивних значень." }],
    ukrainian: "Українські «для, заради, через, по, до, на, щоб» розподіляють значення інакше; тому потрібне навчання за конструкціями.",
    learnerQuestions: ["Причина чи мета?", "Адресат чи бенефіціар?", "Напрямок чи траєкторія?", "Дедлайн чи тривалість?"]
  }

  "pt-br-pt-pt": {
    formulas: [{ pattern: "PT-BR ↔ PT-PT → порівнювати систему за вимовою, займенниками, clitic placement, progressive, лексикою та регістром", note: "Різновиди мають спільне ядро, але не є взаємозамінними наборами правил." }],
    examples: [
      { pt: "Estou trabalhando.", uk: "Я зараз працюю.", variety: "BR" },
      { pt: "Estou a trabalhar.", uk: "Я зараз працюю.", variety: "PT" },
      { pt: "Eu te vi ontem.", uk: "Я бачив/бачила тебе вчора.", variety: "BR" },
      { pt: "Vi-te ontem.", uk: "Я бачив/бачила тебе вчора.", variety: "PT" }
    ],
    mistakes: [{ wrong: "PT-BR = спрощена версія PT-PT.", right: "Розглядати обидва як повноцінні різновиди з різними системними перевагами.", why: "Відмінності охоплюють синтаксис, займенники, клитики, прогресив, фонетику та лексику." }],
    ukrainian: "Для українського студента корисно вибрати базову норму для активного продукування, але навчитися розпізнавати інші різновиди.",
    learnerQuestions: ["Який різновид є цільовим у цій ситуації?", "Чи відмінність нормативна, частотна чи лише регіональна?", "Чи приклад природний у живому мовленні, письмі або обох?"]
  },
  "pluricentric": {
    formulas: [{ pattern: "Português → кілька національних/регіональних стандартів + контактні та локальні різновиди", note: "«Португальська» не зводиться до однієї національної норми." }],
    examples: [
      { pt: "O português é língua oficial em vários países.", uk: "Португальська є офіційною мовою в кількох країнах." },
      { pt: "A mesma construção pode ter frequências diferentes.", uk: "Та сама конструкція може мати різну частотність." }
    ],
    ukrainian: "Не оцінюйте різновид через близькість до PT-BR або PT-PT. Для українського довідника важливі стандарт, регістр, регіон і комунікативна ситуація.",
    regional: "У навчанні слід розрізняти національну стандартну норму, освічене мовлення, розмовні варіанти, регіоналізми та контактні різновиди.",
    learnerQuestions: ["Про яку країну йдеться?", "Який рівень формальності?", "Це стандартна форма чи варіант мовлення?", "Чи є контактна/соціолінгвістична причина варіації?"]
  },
  "angola": {
    formulas: [{ pattern: "Português de Angola → національний різновид португальської з власною варіативністю", note: "Не ототожнюйте національний різновид із будь-якою локальною або контактною формою." }],
    examples: [
      { pt: "O português em Angola apresenta variação interna.", uk: "Португальська в Анголі має внутрішню варіативність.", variety: "AO" }
    ],
    regional: "Подавайте ангольські особливості як описову варіацію: окремо стандартне/освічене мовлення, регіональні особливості та можливий мовний контакт.",
    ukrainian: "Для українського студента головна помилка — сприймати всі африканські різновиди як «PT-PT з акцентом». Варто відокремлювати фонетику, лексику, синтаксис і контактні явища.",
    learnerQuestions: ["Це стандартна ангольська норма чи локальна риса?", "Чи є джерело прикладу описовим і достатньо репрезентативним?", "Чи не переносимо рису одного міста на всю країну?"]
  },
  "mozambique": {
    formulas: [{ pattern: "Português de Moçambique → національний різновид із внутрішньою варіативністю та контактним впливом", note: "Освічений різновид є важливим об'єктом опису, але його не слід змішувати з усім мовним спектром країни." }],
    examples: [
      { pt: "O português em Moçambique apresenta inovação lexical e sintática.", uk: "Португальська в Мозамбіку демонструє лексичні та синтаксичні інновації.", variety: "MZ" }
    ],
    regional: "Контакт із мовами Банту може бути релевантним для пояснення окремих інновацій, але кожне твердження потрібно прив'язувати до конкретного дослідження та різновиду.",
    ukrainian: "Не виводьте граматичне правило з одного контактного прикладу. Для продуктивного навчання потрібні дані про частотність, регістр і мовну спільноту.",
    learnerQuestions: ["Яка саме мовна спільнота описується?", "Чи йдеться про інновацію, варіант чи помилку?", "Який корпус/дослідження підтверджує узагальнення?"]
  },
  "other-lusophone": {
    formulas: [{ pattern: "CPLP Portuguese → Angola, Brazil, Cabo Verde, Guinea-Bissau, Mozambique, Portugal, São Tomé e Príncipe, Timor-Leste, Equatorial Guinea", note: "Офіційний статус португальської не означає однакової структури чи однакового рівня повсякденного використання." }],
    examples: [
      { pt: "A língua portuguesa tem diferentes histórias de contacto.", uk: "Португальська має різні історії мовного контакту." }
    ],
    regional: "Для Кабо-Верде, Гвінеї-Бісау, Сан-Томе і Принсіпі та Тимор-Лешті потрібно розрізняти португальську як офіційну/національну мову, реальну мовну екологію, контакт із креольськими та іншими мовами й конкретний описаний різновид.",
    ukrainian: "Не називайте контактну рису «помилкою» лише тому, що її немає в PT-BR/PT-PT підручнику.",
    learnerQuestions: ["Який статус португальської в цій країні?", "Яка мовна екологія?", "Чи джерело описує стандарт, розмовне мовлення або контактний різновид?"]
  },
  "false-friends": {
    formulas: [{ pattern: "lexeme + government/collocation + meaning → вивчати слово разом із конструкцією", note: "Хибний друг може бути семантичним, граматичним або керувальним, а не лише «схожим словом»." }],
    examples: [
      { pt: "assistir a um filme", uk: "дивитися фільм", note: "У стандартній моделі дієслово assistir може керувати a." },
      { pt: "pretender fazer algo", uk: "мати намір щось зробити", note: "Не ототожнювати pretender з англійським pretend." }
    ],
    mistakes: [{ wrong: "Перекладати схоже слово через форму.", right: "Перевіряти значення, керування, колокацію та регістр.", why: "Міжмовна схожість не гарантує семантичної або синтаксичної еквівалентності." }],
    ukrainian: "Українська, іспанська та англійська можуть створювати різні типи інтерференції; у кожній статті треба вказувати конкретне джерело помилки, а не робити загальне припущення.",
    learnerQuestions: ["Схожість фонетична чи семантична?", "Чи відрізняється керування?", "Чи слово має інше значення в PT-BR/PT-PT?"]
  },
  "collocations-overview": {
    formulas: [{ pattern: "verb + noun / adjective + noun / verb + preposition → lexicalized preference", note: "Граматично можливе поєднання не обов'язково є природною колокацією." }],
    examples: [
      { pt: "tomar uma decisão", uk: "прийняти рішення." },
      { pt: "prestar atenção", uk: "звернути увагу." },
      { pt: "ter em conta", uk: "брати до уваги." }
    ],
    mistakes: [{ wrong: "Перекладати колокацію компонент за компонентом.", right: "Вивчати її як конструкцію.", why: "Українська може використовувати інше дієслово або іншу прийменникову модель." }],
    ukrainian: "Колокаційна інтерференція часто непомітна: речення може бути граматичним, але неприродним.",
    learnerQuestions: ["Це вільне поєднання чи усталена колокація?", "Яке дієслово типове для цього іменника?", "Чи змінюється колокація за різновидом/регістром?"]
  },
  "word-formation": {
    formulas: [{ pattern: "base + prefix/suffix/compound → lexical category + semantic change", note: "Суфікс не завжди має одну механічну функцію; важливі продуктивність, лексикалізація та регістр." }],
    examples: [
      { pt: "feliz → felicidade", uk: "щасливий → щастя." },
      { pt: "possível → impossível", uk: "можливий → неможливий." }
    ],
    mistakes: [{ wrong: "Вважати, що будь-який український суфікс має португальський відповідник.", right: "Аналізувати португальський словотвір окремо.", why: "Словотвірні моделі мов не є взаємозамінними." }],
    ukrainian: "Для українського студента особливо важливо відрізняти продуктивну модель від окремого лексикалізованого слова.",
    learnerQuestions: ["Яка частина мови утворюється?", "Чи модель продуктивна?", "Чи змінилося значення непередбачувано?", "Який регістр?"]
  },
  "causative-constructions": {
    formulas: [{ pattern: "fazer/deixar/mandar + complemento + infinitivo", note: "Каузативна конструкція виражає спричинення, дозвіл або доручення дії; модель залежить від предиката." }],
    formation: "Розрізняйте того, хто спричиняє подію, виконавця інфінітивної дії та саму подію. Не зводьте всі моделі fazer + infinitivo до одного значення.",
    examples: [
      { pt: "Fiz o João sair.", uk: "Я змусив/змусила Жуана вийти." },
      { pt: "Deixei os alunos entrar.", uk: "Я дозволив/дозволила учням увійти." },
      { pt: "Mandei reparar o carro.", uk: "Я доручив/доручила відремонтувати автомобіль." }
    ],
    mistakes: [{ wrong: "Вважати fazer + infinitivo простим відповідником українського «робити».", right: "Fiz o João sair.", why: "Тут fazer вводить спричинену подію, а не називає дію «робити»." }],
    ukrainian: "Українська часто використовує окремі дієслова «змусити», «дозволити», «доручити». Португальська може пакувати ці відношення в складений предикат.",
    learnerQuestions: ["Хто спричиняє подію?", "Хто виконує інфінітивну дію?", "Це примус, дозвіл чи доручення?", "Яку модель вимагає конкретне дієслово?"]
  },
  "raising-and-control": {
    formulas: [{ pattern: "parecer + infinitivo; tentar/querer + infinitivo", note: "Raising і control мають різну синтаксичну структуру, хоча поверхнево обидві моделі містять інфінітив." }],
    examples: [
      { pt: "O João parece estar cansado.", uk: "Схоже, Жуан втомлений." },
      { pt: "O João tentou sair.", uk: "Жуан намагався вийти." },
      { pt: "O João quer sair.", uk: "Жуан хоче вийти." }
    ],
    mistakes: [{ wrong: "Вважати всі дієслова + infinitivo одним типом підрядності.", right: "O João parece estar cansado. / O João tentou sair.", why: "parecer, tentar і querer по-різному пов'язані з інфінітивним предикатом." }],
    ukrainian: "Переклад може бути подібним за формою, але не показувати синтаксичної різниці. Аналізуйте семантичного виконавця та контроль суб'єкта.",
    learnerQuestions: ["Хто є виконавцем інфінітива?", "Чи матричний предикат контролює суб'єкт?", "Чи можна змінити суб'єкта без зміни структури?"]
  },
  "complex-predicates": {
    formulas: [{ pattern: "auxiliar/semi-auxiliar + predicado lexical", note: "Фазові, модальні, прогресивні та каузативні комплекси треба аналізувати як конструкції зі спільною предикацією." }],
    examples: [
      { pt: "Começou a chover.", uk: "Почало дощити." },
      { pt: "Continua a trabalhar.", uk: "Він/вона продовжує працювати.", variety: "PT" },
      { pt: "Está trabalhando.", uk: "Він/вона зараз працює.", variety: "BR" }
    ],
    brPt: "Прогресив особливо добре показує системну варіантність: PT-BR переважно використовує estar + gerúndio, PT-PT — estar a + infinitivo.",
    ukrainian: "Українська часто виражає фазу або аспект іншими засобами. Вивчайте португальську перифразу як цілісну модель із власним керуванням.",
    learnerQuestions: ["Яке значення додає перший предикат?", "Чи є друга форма обов'язковим доповненням?", "Чи конструкція варіює між PT-BR і PT-PT?"]
  },
  "advanced-relatives": {
    formulas: [{ pattern: "antecedente + oração relativa", note: "Розрізняйте restrictive та explicative relatives, роль relative-елемента і прийменникове керування." }],
    examples: [
      { pt: "O livro que comprei desapareceu.", uk: "Книга, яку я купив/купила, зникла." },
      { pt: "A cidade em que nasci mudou.", uk: "Місто, у якому я народився/народилася, змінилося." },
      { pt: "A pessoa cuja casa visitámos chegou.", uk: "Людина, чий будинок ми відвідали, прийшла." }
    ],
    mistakes: [{ wrong: "A pessoa que casa visitámos.", right: "A pessoa cuja casa visitámos.", why: "cujo виражає належність усередині relative clause; його не можна механічно замінити que." }],
    ukrainian: "Українське «який/де/чий» не дає готової карти португальських форм. Визначайте синтаксичну роль і керування всередині підрядного речення.",
    learnerQuestions: ["Relative clause обмежує референт чи додає пояснення?", "Яку роль виконує relative-елемент?", "Чи потрібен прийменник?", "Чи виражається належність через cujo?"]
  },
  "clitics-infinitive": {
    formulas: [{ pattern: "para o ver / para vê-lo", note: "Позиція clitic біля інфінітива залежить від конструкції, прийменника, різновиду та регістру." }],
    examples: [
      { pt: "Fui lá para o ver.", uk: "Я пішов/пішла туди, щоб його побачити." },
      { pt: "Fui lá para vê-lo.", uk: "Я пішов/пішла туди, щоб його побачити.", variety: "PT", register: "formal" },
      { pt: "Quero vê-lo amanhã.", uk: "Я хочу побачити його завтра." }
    ],
    mistakes: [{ wrong: "Вчити одну позицію clitic для всіх інфінітивів.", right: "para o ver / para vê-lo", why: "Інфінітивні конструкції мають власні позиційні умови." }],
    ukrainian: "В українській позиція «його» значно вільніша. У португальській спочатку визначайте тип інфінітивної конструкції, потім позицію clitic.",
    learnerQuestions: ["Що вводить інфінітив?", "Який різновид португальської моделюється?", "Це формальне письмо чи розмовна мова?"]
  },
  "ellipsis": {
    formulas: [{ pattern: "еліпсис = невиражений компонент + відновлення з контексту", note: "Пропущений компонент має бути відновлюваним із попереднього дискурсу або паралельної структури." }],
    examples: [
      { pt: "Eu quero café; ela, chá.", uk: "Я хочу каву, а вона — чай." },
      { pt: "Eu fui ao Porto e ele também.", uk: "Я поїхав/поїхала до Порту, і він теж." },
      { pt: "Quem trouxe o livro? — A Maria.", uk: "Хто приніс книжку? — Марія." }
    ],
    ukrainian: "Українська також активно використовує еліпсис, але межі природності можуть відрізнятися. Відновлюйте структуру з португальського контексту, а не з українського перекладу.",
    learnerQuestions: ["Що саме пропущено?", "Який контекст його відновлює?", "Чи еліпсис змінює фокус або контраст?"]
  },
  "determiners-overview": {
    formulas: [{ pattern: "determiner + noun", note: "Артиклі, demonstratives, possessives і quantifiers утворюють систему детермінативної групи." }],
    examples: [
      { pt: "esta casa", uk: "цей будинок" },
      { pt: "a minha casa", uk: "мій будинок", variety: "PT" },
      { pt: "minha casa", uk: "мій будинок", variety: "BR" }
    ],
    brPt: "Сполучення артикля з присвійним у PT-BR і PT-PT має різну частотність та стилістичну норму; не перетворюйте одну модель на універсальну.",
    ukrainian: "Українська не має артиклів, тому корисно вивчати всю детермінативну групу, а не окремі слова ізольовано.",
    learnerQuestions: ["Який тип детермінатива виражає референцію?", "Чи сумісний він з іншим детермінативом?", "Чи є форма варіантною між PT-BR і PT-PT?"]
  },
  "scope-and-reference": {
    formulas: [{ pattern: "quantifier/determiner + NP → reference + scope", note: "todo, cada, algum, nenhum тощо визначають не лише кількість, а й спосіб інтерпретації групи." }],
    examples: [
      { pt: "Todos os alunos leram um livro.", uk: "Усі студенти прочитали книжку." },
      { pt: "Cada aluno leu um livro.", uk: "Кожен студент прочитав книжку." },
      { pt: "Nenhum aluno faltou.", uk: "Жоден студент не був відсутній." }
    ],
    ukrainian: "Український переклад може приховувати різницю між специфічною та неспецифічною референцією або різними сферами дії квантора.",
    learnerQuestions: ["Який референт визначено?", "Яку область охоплює квантор?", "Чи можливі різні читання?", "Чи контекст змінює інтерпретацію?"]
  },
  "vowels-phonetics": {
    formulas: [{ pattern: "vowel quality + stress + phonological context → realization", note: "Написана літера не гарантує одну фонетичну реалізацію; PT-BR і PT-PT системно розходяться в частині вокалізму." }],
    examples: [
      { pt: "avó / avô", uk: "бабуся / дідусь" },
      { pt: "mesa", uk: "стіл" },
      { pt: "casa", uk: "будинок" }
    ],
    brPt: "Відкритість e/o, редукція ненаголошених голосних і реалізація дифтонгів відрізняються між PT-BR та PT-PT і можуть мати регіональні варіанти.",
    ukrainian: "Українська має іншу систему голосних і не використовує ту саму опозицію відкритих/закритих e/o. Не виводьте вимову лише з українського читання.",
    learnerQuestions: ["Де наголос?", "Голосний наголошений чи ненаголошений?", "Чи є носалізація або дифтонг?", "Який різновид португальської?"]
  },
  "stress": {
    formulas: [{ pattern: "oxítona / paroxítona / proparoxítona + accent rules", note: "Графічний наголос пов'язаний із правилами наголошення та окремими омографічними контрастами." }],
    examples: [
      { pt: "café", uk: "кава" },
      { pt: "música", uk: "музика" },
      { pt: "fácil", uk: "легкий" }
    ],
    ukrainian: "Українська також має рухомий наголос, але графічне маркування в португальській працює за іншою системою. Вчіть клас наголосу разом із написанням.",
    learnerQuestions: ["Який склад наголошений?", "Чи потрібен графічний знак?", "Чи знак також впливає на якість e/o?", "Чи це омографічна пара?"]
  },
  "punctuation": {
    formulas: [{ pattern: "clause + punctuation → syntactic/discourse boundary", note: "Пунктуація маркує структуру та інформаційну організацію; її не слід механічно копіювати з української." }],
    examples: [
      { pt: "Quando cheguei, ele já tinha saído.", uk: "Коли я прийшов/прийшла, він уже пішов." },
      { pt: "Maria, vem cá.", uk: "Маріє, іди сюди." },
      { pt: "Queres vir?", uk: "Хочеш прийти?" }
    ],
    ukrainian: "Українська пунктуація функціонально близька в багатьох місцях, але конкретні правила коми, тире, лапок і прямої мови можуть відрізнятися.",
    learnerQuestions: ["Де межі синтаксичних компонентів?", "Кома відділяє підрядність, звертання чи вставний елемент?", "Чи знак відображає структуру, а не лише інтонацію?"]
  },
  "clitic-clusters": {
    formulas: [{ pattern: "clitic + clitic → ordered cluster", note: "Кілька clitics утворюють упорядкований кластер; їхня позиція та сумісність залежать від типу займенника, конструкції та різновиду." }],
    examples: [
      { pt: "Ele deu-mo ontem.", uk: "Він дав мені це вчора.", variety: "PT", register: "formal" },
      { pt: "Ela disse-lho.", uk: "Вона сказала це йому/їй.", variety: "PT", register: "formal" }
    ],
    mistakes: [{ wrong: "Розставляти два clitics у довільному порядку.", right: "Аналізувати кластер як окрему морфосинтаксичну модель.", why: "Порядок clitics не визначається українським порядком займенників." }],
    ukrainian: "Українська дозволяє значно вільніше розгортати займенникові додатки. У португальській кластер треба вивчати разом із типом об'єктів і різновидом мови.",
    brPt: "У сучасній PT-BR деякі книжні кластери значно менш продуктивні в живому мовленні; PT-PT зберігає ширший набір нормативних комбінацій.",
    learnerQuestions: ["Які саме об'єкти представлені?", "Чи сумісні ці clitics у цій конструкції?", "Який різновид і регістр моделюється?"]
  },
  "clitic-climbing": {
    formulas: [{ pattern: "clitic + finite auxiliary/raising verb + infinitive", note: "Clitic може бути пов'язаний з інфінітивним предикатом, але реалізовуватися біля матричного дієслова в окремих конструкціях." }],
    examples: [
      { pt: "Quero vê-lo amanhã.", uk: "Я хочу побачити його завтра." },
      { pt: "Não o quero ver amanhã.", uk: "Я не хочу бачити його завтра.", variety: "PT" }
    ],
    ukrainian: "Український займенник не дає прямої підказки щодо clitic climbing. Спочатку визначте межі інфінітивної групи та позицію займенникового додатка.",
    learnerQuestions: ["До якого предиката семантично належить clitic?", "Чи допускає конструкція його підняття?", "Який варіант є нормативним у цільовому різновиді?"]
  },
  "complement-clauses-advanced": {
    formulas: [{ pattern: "V + que/infinitivo/conjuntivo → complement clause", note: "Вибір indicativo, conjuntivo або infinitivo залежить від предиката, контролю суб'єкта, модальності та структури." }],
    examples: [
      { pt: "Acho que ele vem.", uk: "Я думаю, що він прийде." },
      { pt: "Quero que ele venha.", uk: "Я хочу, щоб він прийшов." },
      { pt: "Quero ir.", uk: "Я хочу піти." }
    ],
    mistakes: [{ wrong: "Ставити conjuntivo після будь-якого «що/щоб».", right: "Acho que ele vem. / Quero que ele venha.", why: "Вибір форми визначається типом матричного предиката та модальністю." }],
    ukrainian: "Українські сполучники «що» і «щоб» дають корисну підказку, але не замінюють аналіз португальського предиката.",
    learnerQuestions: ["Який предикат керує підрядною частиною?", "Хто є підметом обох предикацій?", "Чи виражається факт, бажання, сумнів або оцінка?", "Чи можливий інфінітив?"]
  },
  "infinitive-vs-subjunctive": {
    formulas: [{ pattern: "same subject → infinitive; distinct/controlled subject → infinitive or que + conjuntivo according to construction", note: "Це тенденція, а не універсальний механічний алгоритм." }],
    examples: [
      { pt: "É importante estudar.", uk: "Важливо вчитися." },
      { pt: "É importante estudarmos.", uk: "Важливо, щоб ми вчилися." },
      { pt: "É importante que estudemos.", uk: "Важливо, щоб ми вчилися." }
    ],
    ukrainian: "Українське «щоб» часто покриває кілька португальських структур. Порівнюйте суб'єкт, контроль і регістр.",
    learnerQuestions: ["Чи збігаються підмети?", "Чи інфінітив має власного явного суб'єкта?", "Чи конструкція допускає conjuntivo?", "Який стиль природніший?"]
  },
  "agreement-edge-cases": {
    formulas: [{ pattern: "syntactic subject + agreement controller → person/number", note: "У складних структурах узгодження визначається не лише найближчим іменником." }],
    examples: [
      { pt: "A maioria dos alunos chegou cedo.", uk: "Більшість студентів прийшла рано." },
      { pt: "A maioria dos alunos chegaram cedo.", uk: "Більшість студентів прийшли рано.", register: "colloquial" },
      { pt: "Fomos nós que fizemos isso.", uk: "Це ми зробили." }
    ],
    mistakes: [{ wrong: "Узгоджувати дієслово автоматично з найближчим іменником.", right: "Спершу знайти syntactic subject та тип конструкції.", why: "Складні групи допускають нормативні або варіантні моделі узгодження." }],
    ukrainian: "Українська також має узгодження з колективними та кількісними групами, але конкретні моделі не збігаються.",
    learnerQuestions: ["Що є граматичним підметом?", "Чи є група колективною/кількісною?", "Чи варіантність залежить від регістру?", "Чи узгодження контролюється relative/clause structure?"]
  },
  "null-and-expletive-subjects": {
    formulas: [{ pattern: "null subject / expletive subject → clause without ordinary lexical subject", note: "Португальська допускає нульові підмети, але не всі безособові конструкції мають однакову структуру." }],
    examples: [
      { pt: "Choveu ontem.", uk: "Учора йшов дощ." },
      { pt: "Há muita gente aqui.", uk: "Тут багато людей." },
      { pt: "Cheguei cedo.", uk: "Я прийшов/прийшла рано." }
    ],
    ukrainian: "Українська теж допускає нульовий суб'єкт, тому інтерференція тут часто менш очевидна: важливо розрізняти нульовий referential subject та безособову конструкцію.",
    learnerQuestions: ["Чи можна відновити referential subject?", "Чи конструкція безособова?", "Чи є формальний/expletive subject?", "Яка модель у PT-BR/PT-PT?"]
  },
  "subject-object-order": {
    formulas: [{ pattern: "SVO → marked order via topic/focus/inversion", note: "Порядок компонентів змінюється не довільно: він взаємодіє з інформаційною структурою та типом предиката." }],
    examples: [
      { pt: "A Maria comprou o livro.", uk: "Марія купила книжку." },
      { pt: "O livro, a Maria comprou ontem.", uk: "Книжку Марія купила вчора." },
      { pt: "Chegou o João.", uk: "Прийшов Жуан." }
    ],
    ukrainian: "Українська допускає ширшу перестановку компонентів завдяки відмінковим маркерам. У португальській порядок часто сильніше пов'язаний із темою, фокусом і структурою предиката.",
    learnerQuestions: ["Чи порядок базовий чи маркований?", "Що є темою?", "Де фокус?", "Чи предикат допускає інверсію?"]
  },
  "subordination-and-coordination": {
    formulas: [{ pattern: "coordenação: A + conector + B; subordinação: matriz + oração dependente", note: "Сурядність і підрядність відрізняються синтаксичною залежністю, а не лише сполучником." }],
    examples: [
      { pt: "Cheguei e sentei-me.", uk: "Я прийшов/прийшла і сів/сіла." },
      { pt: "Fiquei porque chovia.", uk: "Я залишився/залишилася, бо йшов дощ." },
      { pt: "Embora chovesse, saí.", uk: "Хоча йшов дощ, я вийшов/вийшла." }
    ],
    ukrainian: "Українські «і/бо/хоча» зручні для першої орієнтації, але португальська розподіляє форми залежно від типу зв'язку та модальності.",
    learnerQuestions: ["Чи частини рівноправні?", "Яка частина залежить від іншої?", "Який зв'язок: причина, умова, допустовість, час?", "Який спосіб/інфінітив потрібен?"]
  },
  "discourse-reference": {
    formulas: [{ pattern: "NP + anaphoric expression → discourse reference", note: "Вибір займенника, артикля та повтору залежить від того, як референт уже представлений у дискурсі." }],
    examples: [
      { pt: "Vi um homem. O homem entrou.", uk: "Я побачив/побачила чоловіка. Чоловік зайшов." },
      { pt: "Vi a Maria. Ela saiu.", uk: "Я побачив/побачила Марію. Вона вийшла." },
      { pt: "Aquele livro é meu.", uk: "Та книжка моя." }
    ],
    ukrainian: "Українська може частіше обходитися нульовим підметом, відмінюванням або повтором без артикля. У португальській референція тісно пов'язана з артиклями й займенниками.",
    learnerQuestions: ["Чи референт уже введений?", "Чи він доступний із контексту?", "Чи потрібен артикль, займенник або повтор?", "Чи форма створює контраст?"]
  },
  "accentuation-advanced": {
    formulas: [{ pattern: "stress class + syllable structure + diacritic → spelling", note: "Акцентуація треба вивчати як взаємодію наголосу, закінчення, дифтонгів/гіатусу та омографічних контрастів." }],
    examples: [
      { pt: "país / pais", uk: "країна / батьки" },
      { pt: "saída / saíra", uk: "вихід / форма дієслова sair", note: "Пара для ілюстрації наголосу потребує контексту; saíra — форма mais-que-perfeito simples." },
      { pt: "pôr / por", uk: "класти / через, за" }
    ],
    ukrainian: "Українські наголоси й апострофні/йотовані моделі не дають прямого правила для португальської акцентуації. Особливо важливі hiato та графічний знак.",
    learnerQuestions: ["Де наголос?", "Чи є hiatus?", "Чи знак позначає наголос або розрізняє омографи?", "Яке правило застосовується до закінчення?"]
  },
  "hyphenation": {
    formulas: [{ pattern: "word boundary + prefix/clitic/compound → hífen", note: "Дефіс залежить від морфології, орфографічної норми та конкретної лексеми; не переносіть українські правила." }],
    examples: [
      { pt: "guarda-chuva", uk: "парасоля" },
      { pt: "ex-presidente", uk: "колишній президент" },
      { pt: "dar-lhe-ei", uk: "я дам йому/їй", variety: "PT", register: "formal" }
    ],
    ukrainian: "Український дефіс не є прямим аналогом португальського hífen. Вивчайте продуктивні правила разом із винятками та словниковими формами.",
    learnerQuestions: ["Це слово, складене слово чи clitic?", "Яка орфографічна норма?", "Чи дефіс обумовлений морфологією або лексикалізацією?"]
  },
  "capitalization-and-names": {
    formulas: [{ pattern: "proper name/title + orthographic convention → capitalization", note: "Великі літери в назвах, посадах, святах і географічних назвах треба перевіряти за португальською нормою." }],
    examples: [
      { pt: "Portugal", uk: "Португалія" },
      { pt: "o presidente da República", uk: "президент Республіки" },
      { pt: "segunda-feira", uk: "понеділок" }
    ],
    ukrainian: "Українська та португальська не мають повністю однакових правил капіталізації назв посад, свят і днів тижня.",
    learnerQuestions: ["Це власна назва чи загальна назва?", "Чи входить слово до офіційної назви?", "Який стиль/норма застосовується?"]
  },
  "discourse-and-pragmatics": {
    formulas: [{ pattern: "form + context + interlocutor relation → pragmatic interpretation", note: "Прагматичний ефект не завжди кодується окремим граматичним маркером." }],
    examples: [
      { pt: "Pode fechar a porta?", uk: "Можете зачинити двері?" },
      { pt: "Pode fechar a porta.", uk: "Можете зачинити двері.", register: "neutral" },
      { pt: "Será que pode fechar a porta?", uk: "Чи не могли б ви зачинити двері?", register: "formal" }
    ],
    ukrainian: "В українській також існують непрямі прохання, але конкретні форми та їхня соціальна інтерпретація не збігаються.",
    learnerQuestions: ["Це прохання, питання чи наказ?", "Яка дистанція між співрозмовниками?", "Чи форма пом'якшує або посилює дію?", "Який регістр?"]
  },
  "modality-overview": {
    formulas: [{ pattern: "poder/dever/ter de/querer + infinitivo → modalidade", note: "Модальність охоплює можливість, необхідність, дозвіл, волю, припущення та інші відношення до ситуації." }],
    examples: [
      { pt: "Posso entrar?", uk: "Можна мені зайти? / Чи можу я зайти?" },
      { pt: "Deves estudar mais.", uk: "Ти маєш більше вчитися." },
      { pt: "Ele pode estar em casa.", uk: "Можливо, він удома." }
    ],
    mistakes: [{ wrong: "Перекладати poder завжди як «могти» у фізичному значенні.", right: "Визначати джерело модальності з контексту.", why: "poder може виражати дозвіл, можливість, припущення та інші модальні значення." }],
    ukrainian: "Українські «могти», «можна», «мусити», «мати», «напевно» частково перекривають португальські модальні конструкції, але не є взаємозамінними.",
    learnerQuestions: ["Це можливість, дозвіл, обов'язок чи припущення?", "Хто є джерелом модальності?", "Чи модальність стосується дії, знання чи оцінки?", "Чи змінює час модального дієслова інтерпретацію?"]
  },
  "aspect-overview": {
    formulas: [{ pattern: "tempo + aspeto lexical/grammatical + perífrase → event perspective", note: "Португальська подає подію через часову локалізацію, завершеність, тривалість, повторюваність і фазу." }],
    examples: [
      { pt: "Trabalhei ontem.", uk: "Я працював/працювала вчора; подія подана як завершена." },
      { pt: "Trabalhava quando ligaste.", uk: "Я працював/працювала, коли ти зателефонував/зателефонувала." },
      { pt: "Tenho trabalhado muito.", uk: "Останнім часом я багато працюю." }
    ],
    ukrainian: "Український доконаний/недоконаний вид корисний як контраст, але не є прямою таблицею відповідників до португальських часів і перифраз.",
    learnerQuestions: ["Яка часова точка відліку?", "Подія подана як ціле чи зсередини?", "Чи є повторюваність або тривалість?", "Чи перифраза додає фазове значення?"]
  },
  "quantifiers-overview": {
    formulas: [{ pattern: "todo/cada/algum/nenhum/qualquer + NP", note: "Квантори визначають кількість, розподіл, заперечення або тип референції; значення залежить від структури NP." }],
    examples: [
      { pt: "Todos os alunos vieram.", uk: "Усі студенти прийшли." },
      { pt: "Cada aluno recebeu um livro.", uk: "Кожен студент отримав книжку." },
      { pt: "Alguns alunos faltaram.", uk: "Деякі студенти були відсутні." },
      { pt: "Nenhum aluno faltou.", uk: "Жоден студент не був відсутній." }
    ],
    mistakes: [{ wrong: "Ототожнювати todo і cada лише через українське «кожен/усі».", right: "Todos os alunos / Cada aluno.", why: "todo та cada мають різну семантику розподілу й узагальнення." }],
    ukrainian: "Українські квантори частково збігаються, але португальські моделі узгодження, артиклів і референції треба вивчати окремо.",
    learnerQuestions: ["Йдеться про весь клас чи розподіл по одиницях?", "Чи референт специфічний?", "Чи квантор стоїть перед або після іменної групи?", "Яка форма узгодження?"]
  },
  "adjective-government": {
    formulas: [{ pattern: "adjetivo + preposição → selected complement", note: "Деякі прикметники вибирають конкретний прийменник; його не можна надійно вивести з українського перекладу." }],
    examples: [
      { pt: "Estou interessado em música.", uk: "Я цікавлюся музикою." },
      { pt: "Ele é responsável por isso.", uk: "Він відповідає за це." },
      { pt: "Sou capaz de fazer isso.", uk: "Я здатний/здатна це зробити." }
    ],
    ukrainian: "Українська часто виражає той самий зв'язок відмінком або іншим прийменником. Вчіть прикметник разом із керуванням.",
    learnerQuestions: ["Чи прикметник вимагає прийменникового complement?", "Який саме прийменник?", "Чи конструкція варіює за регістром або значенням?"]
  },
  "government-overview": {
    formulas: [{ pattern: "V/N/Adj + selected complement → regência", note: "Керування — це вибір предикатом або іншою лексемою структури complement; прийменник є частиною моделі." }],
    examples: [
      { pt: "Gosto de música.", uk: "Я люблю музику." },
      { pt: "Penso em viajar.", uk: "Я думаю про подорож." },
      { pt: "Preciso de ajuda.", uk: "Мені потрібна допомога." }
    ],
    mistakes: [{ wrong: "Підставляти прийменник за українським перекладом.", right: "gostar de / pensar em / precisar de", why: "Лексичне керування не є прямим перекладним відповідником." }],
    ukrainian: "Для україномовного це одна з ключових зон інтерференції: український відмінок часто приховує португальський прийменник.",
    learnerQuestions: ["Який компонент є head?", "Який complement він вибирає?", "Чи прийменник лексично закріплений?", "Чи змінюється модель у PT-BR/PT-PT?"]
  },
  "argument-vs-adjunct": {
    formulas: [{ pattern: "predicate-selected complement ≠ optional adjunct", note: "Аргумент є частиною валентності предиката; adjunct додає обставинну інформацію без такого самого лексичного вибору." }],
    examples: [
      { pt: "Gosto de música.", uk: "Я люблю музику." },
      { pt: "Trabalho em Lisboa.", uk: "Я працюю в Лісабоні." },
      { pt: "Trabalho em Lisboa todos os dias.", uk: "Я працюю в Лісабоні щодня." }
    ],
    ukrainian: "Українська може маскувати різницю відмінковими формами. Перевіряйте, чи predicado вимагає complement, чи компонент лише модифікує ситуацію.",
    learnerQuestions: ["Чи предикат вимагає цей компонент?", "Чи можна вилучити його без зміни рамки?", "Чи прийменник вибраний лексемою?", "Чи це час/місце/спосіб як вільний модифікатор?"]
  },
  "generic-reference": {
    formulas: [{ pattern: "NP + article/zero article → generic vs specific reference", note: "Генеричність стосується класу/виду, а не одного конкретного референта." }],
    examples: [
      { pt: "O cão é um animal doméstico.", uk: "Собака — домашня тварина." },
      { pt: "Cães precisam de espaço.", uk: "Собакам потрібен простір." },
      { pt: "Um cão pode ser muito leal.", uk: "Собака може бути дуже відданим." }
    ],
    ukrainian: "Українська не має артикля, тому генеричність часто визначається лексикою та контекстом. У португальській форма NP сама може впливати на читання.",
    learnerQuestions: ["Йдеться про весь клас чи одного представника?", "Який тип NP використано?", "Чи можливий специфічний референт?", "Чи контекст знімає неоднозначність?"]
  },
  "agreement-special": {
    formulas: [{ pattern: "subject type + predicate → agreement choice", note: "Колективні, кількісні та складні підмети можуть створювати варіантність або спеціальні моделі узгодження." }],
    examples: [
      { pt: "A maioria chegou cedo.", uk: "Більшість прийшла рано." },
      { pt: "Fui eu que fiz isso.", uk: "Це я зробив/зробила." },
      { pt: "São duas horas.", uk: "Друга година." }
    ],
    ukrainian: "Не переносіть українську форму узгодження автоматично: у португальській важливі тип підмета, конструкція та лексикалізована модель.",
    learnerQuestions: ["Який тип підмета?", "Чи конструкція екзистенційна або часово-кількісна?", "Чи є нормативна варіантність?", "Що саме контролює число?"]
  },
  "register-and-directness": {
    formulas: [{ pattern: "форма + дистанція + комунікативна мета → регістр", note: "Одна функція може мати нейтральну, розмовну, формальну та непряму реалізацію." }],
    examples: [
      { pt: "Pode ajudar-me?", uk: "Можете мені допомогти?", register: "neutral" },
      { pt: "Podia ajudar-me?", uk: "Чи могли б ви мені допомогти?", register: "formal" },
      { pt: "Ajuda-me aqui.", uk: "Допоможи мені тут.", register: "colloquial" }
    ],
    ukrainian: "Українська також кодує дистанцію та ввічливість, але граматичні ресурси їх вираження не збігаються. Вивчайте форму разом із ситуацією.",
    learnerQuestions: ["Хто до кого звертається?", "Яка соціальна дистанція?", "Це прохання, наказ чи пропозиція?", "Чи форма відповідає потрібному регістру?"]
  }
};

function genericLayer(meta: (typeof CATALOG)[number]): LearnerLayer {
  const common: Record<string, LearnerLayer> = {
    fundamentals: { ukrainian: "Починайте з функції категорії в реченні. Українська має відмінки й іншу систему дієслівного виду, тому поверхневий переклад часто приховує справжню граматичну різницю." },
    spelling: { ukrainian: "Не переносіть українські правила читання. У португальській написання, наголос і фонетичний контекст працюють як окрема система; PT-BR і PT-PT можуть відрізнятися у вимові." },
    phonetics: { ukrainian: "Українські голосні й приголосні не дають надійного правила читання португальського написання. Особливо уважно вчіть редукцію ненаголошених голосних, носові голосні, r/s/x і наголос." },
    nouns: { ukrainian: "Рід португальського іменника не завжди збігається з українським. Вивчайте іменник разом із артиклем або іншою формою, що показує рід." },
    adjectives: { ukrainian: "Перевіряйте позицію прикметника: вона може бути не лише синтаксичною, а й семантичною. Узгодження роду й числа — окремий шар." },
    pronouns: { ukrainian: "Не ототожнюйте португальські займенники з українськими за однією таблицею: відмінок, клитичність, ввічливість і регіональна норма взаємодіють." },
    prepositions: { ukrainian: "Прийменник часто є частиною керування. Переклад «до/в/на/з/через» не повинен визначати португальську форму автоматично." },
    verbs: { ukrainian: "Вивчайте дієслово разом із валентністю, прийменником, займенниковою моделлю та типовими перифразами." },
    tenses: { ukrainian: "Назви часів не слід зіставляти один до одного з українськими часами. Значення визначається часовою перспективою, аспектом, дискурсом і конструкцією." },
    gerund: { ukrainian: "Gerúndio — не просто «дієприкметник». Розрізняйте його функції та регіональні моделі прогресиву." },
    periphrases: { ukrainian: "Перифраза — це граматично значуща комбінація, а не два незалежні слова. Вчіть її як конструкцію зі значенням і керуванням." },
    syntax: { ukrainian: "Український вільніший порядок слів не означає, що португальський порядок вільний у тому самому сенсі. Розрізняйте базовий порядок, фокус, топік і клітики." },
    questions: { ukrainian: "Питання в PT-BR і PT-PT можуть використовувати різні стратегії порядку слів та інтонації. Не вчіть англійську інверсію як універсальну модель." },
    negation: { ukrainian: "Подвійне заперечення в португальській може бути граматичною нормою: два негативні елементи не обов'язково скасовують один одного." },
    relative: { ukrainian: "Відносний займенник визначається не лише українським «який/де/хто», а синтаксичною роллю та прийменниковим керуванням усієї конструкції." },
    subordinate: { ukrainian: "Вибір indicativo/conjuntivo та інфінітива треба пояснювати через значення підрядної конструкції, а не механічним перекладом українського «щоб/хоча/якщо»." },
    passive: { ukrainian: "Не плутайте пасив, безособове речення, результативний стан і конструкції з se. Український переклад часто стирає цю різницю." },
    agreement: { ukrainian: "Узгодження залежить від синтаксичної структури. Не переносіть українську логіку відмінків на португальське узгодження." },
    valency: { ukrainian: "Для україномовного це ключова зона: португальські дієслова часто вимагають конкретного прийменника, який українською не виражається." },
    pragmatics: { ukrainian: "Граматично правильна фраза може бути неприродною через регістр, дистанцію або комунікативну мету. Вчіть форму разом із ситуацією." },
    discourse: { ukrainian: "Українська може кодувати тему, фокус і зв'язність іншими засобами. Порівнюйте не окремі слова, а інформаційну організацію всього речення/тексту." },
    semantics: { ukrainian: "Семантичні категорії часто проявляються через комбінацію часів, артиклів, займенників, порядку слів і контексту." },
    "lexical-grammar": { ukrainian: "У португальській багато моделей, які не виводяться з перекладу окремих слів. Корисно вчити лексему разом із типовою рамкою." },
    "word-formation": { ukrainian: "Суфікс або префікс може змінювати не тільки значення, а й рід, регістр або частину мови. Не прирівнюйте морфему до одного українського суфікса." },
  };
  return common[meta.category] ?? { ukrainian: "Порівнюйте граматичну функцію португальської конструкції з українською, а не лише її словниковий переклад." };
}

function examplesFor(category: string, id: string): Example[] {
  return SPECIAL[id]?.examples ?? BASE_EXAMPLES[category] ?? BASE_EXAMPLES.verbs;
}

function makePage(meta: (typeof CATALOG)[number]): GrammarPage {
  const layer = { ...genericLayer(meta), ...(SPECIAL[meta.id] ?? {}) };
  const examples = examplesFor(meta.category, meta.id);
  const first = examples[0];

  const formulas = layer.formulas ?? [{
    pattern: "форма → функція → контекст",
    note: "Для теми «" + meta.titleUk + "» не достатньо запам'ятати один український відповідник: перевіряйте синтаксичну функцію та регістр.",
  }];

  const mistakes = layer.mistakes ?? [{
    wrong: "Дослівно переносити українську модель у «" + meta.titlePt + "».",
    right: first.pt,
    why: "Португальська має власні моделі керування, узгодження, порядку слів і референції.",
  }];

  const questions = layer.learnerQuestions ?? [
    "Що саме ця форма кодує: граматичну категорію, синтаксичну роль чи прагматичний ефект?",
    "Який український відповідник приховує різницю, яку треба побачити в португальській?",
    "Чи змінюється форма в PT-BR / PT-PT або за регістром?",
    "Яке правило працює за замовчуванням, а які випадки є лексикалізованими або контекстними?",
  ];

  return {
    id: meta.id, slug: meta.slug, category: meta.category,
    titleUk: meta.titleUk, titlePt: meta.titlePt, titleEn: meta.titleEn,
    summary: meta.summary, aliases: meta.aliases, related: meta.related,
    intro:
      "**" + meta.titlePt + "** — " + meta.summary + "\n\n" +
      "Стаття побудована для україномовного студента за схемою: поняття → форма → функція → контекст → варіант мови → типова інтерференція. " +
      "Український переклад не вважається готовим правилом.\n\n" +
      "Якщо тема залежить від PT-BR / PT-PT, регіону або регістру, це частина граматики, а не факультативна примітка.",
    formulas,
    formation: layer.formation ?? "Починайте з мінімальної моделі, потім перевіряйте її в реченні. Для варіантних тем не змішуйте форми різних норм в одну «середню» систему.",
    uses: [
      { title: "1. Що треба розпізнати", body: "Визначте функцію теми «" + meta.titleUk + "»: що саме вона робить у реченні та який компонент залежить від неї.", examples: examples.slice(0, 2) },
      { title: "2. Як це працює в контексті", body: "Одна й та сама форма може мати різні інтерпретації. Читайте приклад разом із контекстом, часом, референцією та регістром.", examples: examples.slice(1, 3) },
      { title: "3. Варіантність", body: layer.brPt ?? "Якщо різниця не зазначена, не робіть висновку про повну тотожність: варіантність може бути лексичною, синтаксичною, фонетичною або регістровою.", examples: examples.filter((x) => x.variety) },
    ],
    examples,
    markers: layer.markers ?? [meta.titlePt, ...meta.aliases.slice(0, 4)],
    exceptions: layer.exceptions ?? "Не всі винятки є «аномаліями»: частина належить до лексикалізованих конструкцій, частина — до регіональної або стилістичної варіантності.",
    mistakes,
    ukrainian: layer.ukrainian ?? "Для україномовного студента головна пастка теми «" + meta.titleUk + "» — шукати прямий український еквівалент. Порівнюйте функцію конструкції, її керування та місце в португаломовній системі.",
    regional: layer.regional ?? "Для португаломовного простору важливо розрізняти спільне ядро, національні стандарти, регіональні різновиди та розмовну/формальну варіантність.",
    brPt: layer.brPt ?? "PT-BR і PT-PT мають спільне граматичне ядро, але в низці зон системно розходяться: клітики, займенники звертання, прогресив, порядок слів, деякі моделі референції та лексико-граматичні вподобання.",
    tables: [{
      caption: "Алгоритм розв'язання для студента",
      headers: ["Крок", "Питання"],
      rows: [["1", questions[0]], ["2", questions[1]], ["3", questions[2]], ["4", questions[3]]],
      note: "Це метод навчання, а не додаткове граматичне правило.",
      scroll: true,
    }],
  };
}

export const GENERATED_PAGES: GrammarPage[] = CATALOG
  .filter((meta) => meta.category !== "comparisons" && meta.category !== "regional")
  .map(makePage);

export function generatedPageFor(category: string, slug: string): GrammarPage | null {
  return GENERATED_PAGES.find((p) => p.category === category && p.slug === slug) ?? null;
}

/**
 * Editorial enrichment for dedicated pages.
 * Dedicated modules remain authoritative; this layer fills structural gaps
 * so every article exposes the learner-facing diagnostic dimensions.
 */
export function enrichPage(page: GrammarPage): GrammarPage {
  const meta = CATALOG.find((m) => m.id === page.id || (m.category === page.category && m.slug === page.slug));
  if (!meta) return page;
  const layer = { ...genericLayer(meta), ...(SPECIAL[meta.id] ?? {}) };
  const examples = page.examples?.length ? page.examples : examplesFor(meta.category, meta.id);
  const learnerQuestions = layer.learnerQuestions ?? [
    "Яку функцію виконує конструкція, а не лише що вона означає в перекладі?",
    "Яке керування, узгодження або позиційне правило треба перевірити?",
    "Чи змінюється форма в PT-BR, PT-PT, іншому різновиді або регістрі?",
    "Чи це продуктивне правило, лексикалізована модель, виняток чи контекстна варіантність?",
  ];
  const diagnostic = [
    "",
    "### Як перевіряти себе",
    "",
    "1. **Функція:** визначте, що саме кодує конструкція в реченні.",
    "2. **Форма:** перевірте морфологію, узгодження, прийменник або позицію.",
    "3. **Контекст:** встановіть референцію, часову перспективу, інформаційну структуру та регістр.",
    "4. **Варіант мови:** якщо доречно, перевірте PT-BR, PT-PT та інші засвідчені різновиди окремо.",
    "5. **Українська:** лише після цього порівнюйте з українською, щоб побачити можливу інтерференцію.",
    "",
    "**Діагностичні питання:** " + learnerQuestions.join(" · "),
  ].join("\n");
  const mergedExamples = examples.slice(0, 6);
  return {
    ...page,
    formulas: page.formulas?.length ? page.formulas : layer.formulas,
    formation: page.formation ?? layer.formation,
    examples,
    markers: page.markers?.length ? page.markers : layer.markers,
    exceptions: page.exceptions ?? layer.exceptions,
    mistakes: page.mistakes?.length ? page.mistakes : layer.mistakes,
    ukrainian: page.ukrainian ?? layer.ukrainian,
    brPt: page.brPt ?? layer.brPt,
    regional: page.regional ?? layer.regional,
    uses: page.uses?.length ? page.uses : [
      { title: "Розпізнавання", body: "Спочатку визначте граматичну функцію, потім форму й контекст.", examples: mergedExamples.slice(0, 2) },
      { title: "Варіантність і регістр", body: layer.brPt ?? "Не змішуйте національний стандарт, розмовну норму та інші різновиди в одну модель.", examples: mergedExamples.filter((e) => e.variety || e.register).slice(0, 3) },
    ],
    intro: page.intro + diagnostic,
  };
}