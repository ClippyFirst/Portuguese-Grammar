import type { Example, Formula, GrammarPage, Mistake } from "./types";
import { CATALOG } from "./catalog";

/**
 * Coverage layer for catalog topics that do not yet have a dedicated hand-written
 * module. It is deliberately conservative: it gives every catalog entry a useful,
 * structurally complete reference page without inventing a prescriptive rule.
 *
 * Dedicated modules remain authoritative and automatically take precedence in load.ts.
 * Topics should be promoted from this layer to a hand-written module after linguistic
 * fact-checking.
 */

const BASE_EXAMPLES: Record<string, Example[]> = {
  spelling: [
    { pt: "ação", uk: "дія" },
    { pt: "fácil", uk: "легкий" },
    { pt: "Portugal", uk: "Португалія" },
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
    { pt: "Estudei ontem.", uk: "Я вчив учора." },
    { pt: "Estudava quando ele chegou.", uk: "Я вчився, коли він прийшов." },
  ],
  gerund: [
    { pt: "Estou a estudar.", uk: "Я зараз навчаюся.", variety: "PT" },
    { pt: "Estou estudando.", uk: "Я зараз навчаюся.", variety: "BR" },
    { pt: "Tenho estudado muito.", uk: "Я останнім часом багато навчаюся." },
  ],
  periphrases: [
    { pt: "Tenho de trabalhar.", uk: "Я маю працювати / мені треба працювати." },
    { pt: "Acabei de chegar.", uk: "Я щойно прийшов." },
    { pt: "Vou estudar amanhã.", uk: "Я навчатимусь завтра / збираюся навчатися." },
  ],
  relative: [
    { pt: "O livro que comprei é novo.", uk: "Книга, яку я купив, нова." },
    { pt: "A pessoa com quem falei chegou.", uk: "Людина, з якою я говорив, прийшла." },
    { pt: "A cidade onde vivo é pequena.", uk: "Місто, де я живу, невелике." },
  ],
  subordinate: [
    { pt: "Quando eu chegar, ligo.", uk: "Коли я прийду, зателефоную." },
    { pt: "Quero que venhas.", uk: "Я хочу, щоб ти прийшов." },
    { pt: "Embora seja tarde, vou.", uk: "Хоча пізно, я піду." },
  ],
  passive: [
    { pt: "A ponte foi construída em 2020.", uk: "Міст було збудовано 2020 року." },
    { pt: "Há muitas pessoas aqui.", uk: "Тут багато людей." },
    { pt: "É preciso estudar.", uk: "Потрібно вчитися." },
  ],
};

const SPECIAL: Record<string, { formulas?: Formula[]; examples?: Example[]; mistakes?: Mistake[]; formation?: string; markers?: string[]; exceptions?: string; ukrainian?: string; brPt?: string }> = {
  "ser": {
    formulas: [{ pattern: "ser + predicativo", note: "Ідентифікація, класифікація, характеристики та інші функції залежать від конструкції." }],
    examples: [{ pt: "Ela é médica.", uk: "Вона лікарка." }, { pt: "Somos de Kyiv.", uk: "Ми з Києва." }],
    mistakes: [{ wrong: "Estou médico.", right: "Sou médico.", why: "Назва професії без контексту тимчасового стану зазвичай оформлюється з ser." }],
    ukrainian: "Не зводьте ser до простого «постійного стану»: вибір ser/estar залежить від предиката й конструкції.",
  },
  "estar": {
    formulas: [{ pattern: "estar + predicativo / localização", note: "Стан, ситуація, місцезнаходження та інші значення визначаються конструкцією." }],
    examples: [{ pt: "Estou cansado.", uk: "Я втомлений." }, { pt: "Lisboa está em Portugal.", uk: "Лісабон розташований у Португалії." }],
    mistakes: [{ wrong: "Sou cansado.", right: "Estou cansado.", why: "Для актуального стану cansado типовим є estar." }],
    ukrainian: "Не перекладайте механічно українське «бути» одним португальським дієсловом.",
  },
  "por-para": {
    formulas: [{ pattern: "por → причина / шлях / обмін / тривалість; para → мета / напрям / адресат / дедлайн", note: "Це корисна орієнтація, але значення прийменника визначає вся конструкція." }],
    examples: [{ pt: "Estudo para aprender.", uk: "Я вчуся, щоб навчитися." }, { pt: "Obrigado por ajudares.", uk: "Дякую, що допоміг." }, { pt: "Vou para Lisboa.", uk: "Я їду до Лісабона." }],
    mistakes: [{ wrong: "Obrigado para ajudar.", right: "Obrigado por ajudar.", why: "Після agradecer / obrigado причина або підстава оформлюється por + інфінітив." }],
    ukrainian: "Українське «для / за / через» не має однозначної відповідності por/para.",
  },
  "tu-voce": {
    formulas: [{ pattern: "tu + 2-а особа; você + 3-я особа дієслова", note: "Регіональна й соціальна система звертання важливіша за просту таблицю." }],
    examples: [{ pt: "Tu sabes.", uk: "Ти знаєш.", variety: "PT" }, { pt: "Você sabe.", uk: "Ви/ти знаєте.", variety: "BR" }],
    mistakes: [{ wrong: "Você sabes.", right: "Você sabe.", why: "você граматично керує формою 3-ї особи однини." }],
    ukrainian: "Не ототожнюйте você з українським «ви» без урахування регіону та регістру.",
    brPt: "Розподіл tu/você дуже варіативний. У PT-BR існують регіони, де tu вживається активно; у PT-PT tu є центральною формою неформальної 2-ї особи.",
  },
  "lhe-vs-o": {
    formulas: [{ pattern: "o/a/os/as → прямий додаток; lhe/lhes → непрямий додаток", note: "Керування конкретного дієслова може вимагати окремої перевірки." }],
    examples: [{ pt: "Vi-o ontem.", uk: "Я бачив його вчора." }, { pt: "Telefonei-lhe ontem.", uk: "Я зателефонував йому вчора.", variety: "PT" }],
    mistakes: [{ wrong: "Telefonei-o.", right: "Telefonei-lhe.", why: "У нормативній моделі telefonar керує непрямим додатком." }],
  },
  "perfeito-vs-imperfeito": {
    formulas: [{ pattern: "pretérito perfeito → завершена подія; imperfeito → фон / звичка / тривала незавершена ситуація", note: "Це не проста відповідність українському доконаному / недоконаному виду." }],
    examples: [{ pt: "Ontem trabalhei até às seis.", uk: "Учора я працював до шостої." }, { pt: "Quando era criança, trabalhava com o meu pai.", uk: "Коли я був дитиною, я працював із батьком." }],
    ukrainian: "Португальський вибір часу взаємодіє з видом події, дискурсом і часовою перспективою; не копіюйте український вид механічно.",
  },
  "progressive-br-pt": {
    formulas: [{ pattern: "PT-BR: estar + gerúndio; PT-PT: estar a + infinitivo", note: "Обидві моделі граматичні у відповідних нормах." }],
    examples: [{ pt: "Estou trabalhando.", uk: "Я працюю зараз.", variety: "BR" }, { pt: "Estou a trabalhar.", uk: "Я працюю зараз.", variety: "PT" }],
    brPt: "Для PT-BR конструкція estar + gerúndio є звичною; у PT-PT для того самого прогресивного значення типовою є estar a + infinitivo.",
  },
};

function examplesFor(category: string, id: string): Example[] {
  return SPECIAL[id]?.examples ?? BASE_EXAMPLES[category] ?? BASE_EXAMPLES.verbs;
}

function makePage(meta: (typeof CATALOG)[number]): GrammarPage {
  const special = SPECIAL[meta.id] ?? {};
  const examples = examplesFor(meta.category, meta.id);
  const first = examples[0];
  const categoryLabel = meta.category;

  const formulas = special.formulas ?? [
    {
      pattern: "конструкція залежить від контексту",
      note: `Тема «${meta.titleUk}» не зводиться до одного перекладу. Орієнтуйтеся на синтаксичну функцію та приклади.`,
    },
  ];

  // Do not invent "typical mistakes" merely to fill the template.
  // Generated pages are coverage scaffolds, not linguistically reviewed articles.
  const mistakes = special.mistakes;

  return {
    id: meta.id,
    slug: meta.slug,
    status: "catalogued",
    origin: "generated",
    category: meta.category,
    titleUk: meta.titleUk,
    titlePt: meta.titlePt,
    titleEn: meta.titleEn,
    summary: meta.summary,
    aliases: meta.aliases,
    related: meta.related,
    intro:
      `**${meta.titlePt}** — ${meta.summary}\\n\\nЦя сторінка дає коротке довідкове ядро теми. Вона не замінює спеціалізований матеріал: для складних або варіантних конструкцій переходьте за пов'язаними темами.\\n\\nОсновний принцип: спочатку визначте функцію конструкції в реченні, а вже потім обирайте форму.`,
    formulas,
    formation: special.formation ?? `Форма й модель утворення залежать від конкретної підкатегорії «${categoryLabel}». Дивіться приклади та пов'язані теми для деталей.`,
    uses: [
      {
        title: "Базове вживання",
        body: `Тема «${meta.titleUk}» працює в межах португальської системи, описаної в каталозі. Не робіть висновків лише з одного українського відповідника.`,
        examples: examples.slice(0, 2),
      },
      {
        title: "Контекст і варіант",
        body: "Якщо форма залежить від PT-BR / PT-PT, регіону або регістру, це потрібно читати разом із відповідним позначенням у прикладі.",
        examples: examples.slice(2),
      },
    ],
    examples,
    markers: special.markers ?? [meta.titlePt, ...meta.aliases.slice(0, 4)],
    exceptions: special.exceptions ?? "Окремі випадки та винятки слід перевіряти в пов'язаних спеціалізованих темах; не узагальнюйте одну форму на всю систему.",
    mistakes,
    ukrainian:
      special.ukrainian ??
      `Для україномовного читача головна пастка теми «${meta.titleUk}» — дослівна відповідність між мовами. Порівнюйте функцію конструкції, а не окреме слово.`,
    regional:
      "Загальні правила спільні для португаломовного простору, але конкретна форма може залежати від норми, регіону та регістру. Дивіться PT-BR / PT-PT примітки.",
    brPt:
      special.brPt ??
      "Якщо для цієї теми немає окремої помітної відмінності, це не означає повної тотожності в усіх регістрах; варіантність слід перевіряти на рівні конкретної конструкції.",
    tables: [
      {
        caption: "Швидка опора",
        headers: ["Пункт", "Орієнтир"],
        rows: [
          ["Тема", meta.titlePt],
          ["Українська назва", meta.titleUk],
          ["Основний фокус", meta.summary],
        ],
        note: "Це навігаційна таблиця, а не повна парадигма.",
        scroll: true,
      },
    ],
  };
}


export const GENERATED_PAGES: GrammarPage[] = CATALOG
  .filter((meta) => meta.category !== "comparisons" && meta.category !== "regional")
  .map(makePage);

export function generatedPageFor(category: string, slug: string): GrammarPage | null {
  return GENERATED_PAGES.find((p) => p.category === category && p.slug === slug) ?? null;
}
