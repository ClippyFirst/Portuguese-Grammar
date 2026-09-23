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