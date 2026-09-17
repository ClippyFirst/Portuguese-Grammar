import type { GrammarPage } from "../types";

export const pages: GrammarPage[] = [
  {
    id: "word-order",
    slug: "word-order",
    category: "syntax",
    titleUk: "Порядок слів",
    titlePt: "Ordem das palavras",
    titleEn: "Word order",
    summary: "SVO, пропуск підмета, клітики, топік.",
    aliases: ["порядок слів", "SVO"],
    related: ["subject-placement", "topicalization", "clitic-placement", "clefts", "questions-yesno"],
    intro:
      "Базовий порядок португальського розповідного речення — **S + V + (додаток)**. Це зручна точка відліку, а не залізне правило.\n\nПортугальська — мова з пропуском підмета: особа часто вже закодована в дієслові, тому `Cheguei.` цілком нормальне речення. Явний займенник з'являється для контрасту, зміни референта або емфази.\n\nКлитики, заперечення, питальні слова й топік змінюють поверхневий порядок. PT-BR і PT-PT тут розходяться сильніше, ніж у «звичайному» SVO.",
    formulas: [
      {
        label: "Нейтральне розповідне",
        pattern: "S + V + дод.",
        negative: "S + NEG + V + дод.",
        question: "V + S ?  /  S + V ?",
        note: "Питальна інверсія частотніша в PT-PT; у розмовному PT-BR частіше той самий порядок, що й у розповіді, плюс інтонація.",
      },
    ],
    uses: [
      {
        title: "Нейтральний SVO",
        body: "Нова інформація тяжіє праворуч. Підмет, якщо він відомий і неконтрастивний, часто опускається.",
        examples: [
          { pt: "A Maria comprou o livro.", uk: "Марія купила книжку." },
          { pt: "Comprou o livro.", uk: "Купила книжку. (підмет зрозумілий з контексту)" },
        ],
      },
      {
        title: "Клитики ламають «вільний» порядок додатка",
        body: "Ненаголошений займенник не стоїть там, де стоїть повна іменникова група. Його місце — próclise / ênclise / mesóclise, а не «після дієслова, бо це додаток».",
        examples: [
          { pt: "A Maria comprou-o.", uk: "Марія купила її/його.", variety: "PT" },
          { pt: "A Maria o comprou.", uk: "Марія купила її/його.", variety: "BR", note: "У розмовному PT-BR прокліза майже за замовчуванням." },
        ],
      },
    ],
    examples: [
      { pt: "Ontem o João chegou tarde.", uk: "Учора Жуан прийшов пізно." },
      { pt: "Chegou tarde o João.", uk: "Пізно прийшов Жуан.", note: "Можлива інверсія, особливо з дієсловами появи / руху." },
      { pt: "Isso eu não sei.", uk: "Ось цього я не знаю.", note: "Топік ліворуч, далі нейтральне речення." },
      { pt: "Não o vi.", uk: "Я його не бачив/бачила.", variety: "PT" },
    ],
    mistakes: [
      {
        wrong: "Eu o livro comprei.",
        right: "Eu comprei o livro. / Comprei o livro.",
        why: "Українська допускає вільніший порядок з відмінками. Португальська без клітика майже завжди тримає додаток після дієслова.",
      },
      {
        wrong: "Comprou-o a Maria. (як єдиний нейтральний варіант)",
        right: "A Maria comprou-o. / A Maria o comprou.",
        why: "Повна іменникова група-підмет на кінці — стилістична інверсія, не базовий порядок.",
      },
    ],
    ukrainian:
      "В українській відмінки дозволяють рухати додаток майже вільно. У португальській цю роботу частково виконують інтонація, клітики й конструкції на кшталт `é que`. Калька «спочатку все важливе, потім дієслово» дає неграматичні речення.",
    brPt:
      "PT-PT частіше зберігає енклізу в головному стверджувальному реченні й інверсію в питанні. Розмовний PT-BR тримається ближче до SVO + прокліза + питальна інтонація без інверсії.",

  },
  {
    id: "subject-placement",
    slug: "subject-placement",
    category: "syntax",
    titleUk: "Позиція підмета",
    titlePt: "Posição do sujeito",
    titleEn: "Subject placement",
    summary: "Інверсія з unaccusatives, цитати, емфаза.",
    aliases: ["інверсія підмета"],
    related: ["word-order", "inversion", "null-subject", "existential", "clefts"],
    intro:
      "Підмет стоїть перед дієсловом у нейтральній розповіді. Після дієслова він з'являється з дієсловами появи, існування, руху, у цитатах і в емфазі.\n\nПропуск підмета — не «інверсія», а нульовий підмет. Це різні явища.",
    formulas: [{ pattern: "V + S", note: "Інверсія, не базовий порядок." }],
    examples: [
      { pt: "Chegou o comboio / o trem.", uk: "Прибув потяг." },
      { pt: "Existem várias hipóteses.", uk: "Існує кілька гіпотез." },
      { pt: "— Chego já — disse ela.", uk: "— Я зараз буду, — сказала вона." },
      { pt: "Fui eu que abri a porta.", uk: "Це я відчинив/відчинила двері." },
    ],
    mistakes: [
      {
        wrong: "Haviam muitas pessoas.",
        right: "Havia muitas pessoas.",
        why: "Екзистенційне `haver` безособове: не узгоджується з іменною групою. Це не «підмет після дієслова».",
      },
    ],
    ukrainian: "Українське «прийшов потяг» калькується добре. Пастка — вважати `há/havia` звичайним дієсловом із підметом.",

  },
  {
    id: "topicalization",
    slug: "topicalization",
    category: "syntax",
    titleUk: "Топікалізація",
    titlePt: "Topicalização",
    titleEn: "Topicalization",
    summary: "Ліва дислокація, повтор займенника.",
    aliases: ["топік", "dislocation", "quanto a"],
    related: ["clefts", "emphasis-focus", "word-order", "direct-object"],
    intro:
      "Топік — те, про що речення. Його можна винести ліворуч: `Quanto ao dinheiro, eu não sei.` Часто топік дублюється займенником.\n\nЦе не те саме, що фокус. Фокус відповідає на питання «саме хто / саме що?»; топік задає рамку.",
    examples: [
      { pt: "Esse livro, eu já li.", uk: "Цю книжку я вже читав/читала." },
      { pt: "A Maria, ninguém a viu.", uk: "Марію ніхто не бачив.", variety: "PT" },
      { pt: "Quanto a isso, estamos de acordo.", uk: "Щодо цього ми згодні." },
      { pt: "Café, eu não bebo.", uk: "Каву я не п'ю." },
    ],
    mistakes: [
      {
        wrong: "O livro eu li ele.",
        right: "Esse livro, eu já o li. / Esse livro eu já li.",
        why: "Повтор можливий клитиком (`o`), а не наголошеним `ele` в нейтральному стилі.",
      },
    ],
    ukrainian: "Українське винесення теми («От книжку цю я вже читав») близьке. У португальській частіше потрібен клитик-повтор, особливо в PT-PT.",

  },
  {
    id: "inversion",
    slug: "inversion",
    category: "syntax",
    titleUk: "Інверсія",
    titlePt: "Inversão",
    titleEn: "Inversion",
    summary: "Стилістична й граматична інверсія.",
    aliases: ["інверсія"],
    related: ["subject-placement", "questions-yesno", "questions-br-pt", "word-order"],
    intro:
      "Інверсія V–S в португальській не є загальним питальним правилом на кшталт англійської. Вона стилістична, жанрова (новини, оповідь) або лексично обмежена (дієслова появи).\n\nУ питаннях PT-PT інверсія живіша: `Chegou o Paulo?` Розмовний PT-BR часто обходиться інтонацією: `O Paulo chegou?`",
    examples: [
      { pt: "Abriu-se a porta.", uk: "Двері відчинилися." },
      { pt: "Vai o João também?", uk: "Жуан теж іде?", variety: "PT" },
      { pt: "O João vai também?", uk: "Жуан теж іде?", variety: "BR" },
    ],
    mistakes: [
      {
        wrong: "Comprou João o pão? як обов'язкова схема",
        right: "O João comprou o pão? / Comprou o João o pão?",
        why: "Інверсія не обов'язкова для питання, особливо в PT-BR.",
      },
    ],

  },
  {
    id: "clefts",
    slug: "clefts",
    category: "syntax",
    titleUk: "Cleft: é que",
    titlePt: "Frases clivadas",
    titleEn: "Cleft sentences",
    summary: "É o João que... / O que ele quer é...",
    aliases: ["é que", "clivada", "cleft"],
    related: ["emphasis-focus", "sim-nao-emphasis", "word-order", "relative-que"],
    intro:
      "Клівти (frases clivadas) виділяють один складник як фокус: «саме X, а не щось інше».\n\nНайчастотніші схеми: `é X que ...`, `é X quem ...`, `o que ... é ...`. Окрема розмовна частка — `é que` як пояснення: `É que eu não sabia.`\n\nЦе не «зайве ser». Без клівта речення нейтральне; з клівтом воно відповідає на корекцію або приховане питання.",
    formulas: [
      { label: "Cleft", pattern: "é + X + que + ..." },
      { label: "Pseudo-cleft", pattern: "o que + ... + é + X" },
      { label: "Пояснювальне é que", pattern: "é que + речення", note: "Часто виправдання або пояснення, не контрастний фокус." },
    ],
    uses: [
      {
        title: "Контрастний фокус",
        body: "Відповідає: «саме цей елемент, не інший».",
        examples: [
          { pt: "Foi a Ana que ligou, não o Pedro.", uk: "Це Анна зателефонувала, не Педру." },
          { pt: "É o João que ouve isso.", uk: "Саме Жуан це чує." },
        ],
      },
      {
        title: "Псевдоклівт",
        body: "`O que ele quer é silêncio.` Рамка «те, що...» + ідентифікація.",
        examples: [
          { pt: "O que ele sabe é que não pode falhar.", uk: "Він знає одне: не можна зірватися." },
          { pt: "O que importa é chegar a tempo.", uk: "Важливо — встигнути." },
        ],
      },
      {
        title: "Пояснювальне é que",
        body: "Не виділяє іменну групу, а вводить пояснення. Близьке до «річ у тім, що».",
        examples: [
          { pt: "Não fui. É que estava doente.", uk: "Я не пішов/пішла. Річ у тім, що я хворів/хворіла." },
        ],
      },
    ],
    examples: [
      { pt: "Não é que eu não queira.", uk: "Не те щоб я не хотів/хотіла." },
      { pt: "É X quem decide.", uk: "Саме X вирішує." },
    ],
    mistakes: [
      {
        wrong: "É que o João ouve isso. (коли мали на увазі «саме Жуан»)",
        right: "É o João que ouve isso.",
        why: "`É que` + речення пояснює ситуацію. Для фокусу на підметі потрібне `é + NP + que`.",
      },
    ],
    ukrainian:
      "Українські «це саме», «ось хто», «річ у тім що» покривають різні португальські схеми. Не зводьте все до одного `é que`.",

  },
  {
    id: "emphasis-focus",
    slug: "emphasis",
    category: "syntax",
    titleUk: "Емфаза та фокус",
    titlePt: "Ênfase e foco",
    titleEn: "Emphasis and focus",
    summary: "Контраст, корекція, інформаційна структура.",
    aliases: ["фокус", "емфаза", "contrast"],
    related: ["clefts", "sim-nao-emphasis", "word-order", "null-subject", "topicalization"],
    intro:
      "Інформаційна структура відповідає на питання: що вже відоме (тема), що нове (рема), що контрастивне (фокус).\n\nПортугальська кодує це порядком слів, клівтами, емфатичними `sim` / `não`, наголошеними займенниками й інтонацією. Писаний текст без маркерів часто виглядає «пласким», хоча в мовленні фокус був очевидний.",
    uses: [
      {
        title: "Емфатичний займенник",
        body: "Явний `eu`, `tu`, `ele` часто не ідентифікує підмет (він і так відомий), а протиставляє.",
        examples: [{ pt: "Eu não disse isso. Ele é que disse.", uk: "Це не я сказав/сказала. Це він." }],
      },
      {
        title: "Емфатичне sim",
        body: "`Ele sim veio.` — «він-то якраз прийшов» (на відміну від інших).",
        examples: [{ pt: "Café eu não bebo. Chá sim.", uk: "Каву не п'ю. Чай — так." }],
      },
    ],
    examples: [
      { pt: "Isso não. Aquilo sim.", uk: "Ось це — ні. А те — так." },
      { pt: "Até tu?", uk: "Навіть ти?" },
      { pt: "Mesmo cansada, ela veio.", uk: "Навіть утомлена, вона прийшла." },
    ],
    mistakes: [
      {
        wrong: "ставити eu в кожне речення «для ясності»",
        right: "опускати підмет, доки немає контрасту",
        why: "Надлишковий `eu` звучить егоцентрично або як калька з французької/англійської, а не як нейтральна португальська.",
      },
    ],
    ukrainian: "Українські частки «ж», «таки», «саме», «от» часто відповідають не окремому слову, а клівту чи `sim`.",

  },
  {
    id: "reported-speech",
    slug: "reported-speech",
    category: "syntax",
    titleUk: "Непряма мова",
    titlePt: "Discurso indireto",
    titleEn: "Reported speech",
    summary: "Зміна часів, займенників, прислівників.",
    aliases: ["непряма мова", "discurso indireto"],
    related: ["sequence-of-tenses", "wh-questions", "complement-clauses", "imperative-affirmative"],
    intro:
      "У непрямій мові португальська зсуває часи, якщо головне дієслово в минулому: `disse que vinha`, `perguntou se eu tinha visto`.\n\nПитання вводиться через `se` (так/ні) або питальне слово. Наказ часто стає інфінітивом або кон'юнктивом: `disse-me para sair` / `disse que eu saísse`.",
    formulas: [
      { pattern: "V + que + indicativo/conjuntivo" },
      { pattern: "perguntar + se / o que / quem ..." },
    ],
    examples: [
      { pt: "«Venho amanhã.» → Disse que vinha no dia seguinte.", uk: "Сказав/сказала, що прийде наступного дня." },
      { pt: "«Já chegaste?» → Perguntou se eu já tinha chegado.", uk: "Запитав/запитала, чи я вже прибув/прибула." },
      { pt: "«Sai daqui!» → Disse-me para sair. / Disse que eu saísse.", uk: "Велів/веліла мені вийти." },
    ],
    mistakes: [
      {
        wrong: "Disse que venho amanhã. (коли передаємо минулу репліку)",
        right: "Disse que vinha no dia seguinte. / Disse que viria.",
        why: "Після минулого мовлення звичайний зсув часу. Збереження теперішнього можливе, якщо пропозиція все ще чинна, але це вже свідомий вибір.",
      },
    ],

  },
  {
    id: "coordination",
    slug: "coordination",
    category: "syntax",
    titleUk: "Сурядність і підрядність",
    titlePt: "Coordenação e subordinação",
    titleEn: "Coordination and subordination",
    summary: "Як збирається складне речення.",
    aliases: ["сурядність", "підрядність"],
    related: ["coordinating", "subordinating", "complement-clauses", "indicative-vs-subjunctive"],
    intro:
      "Сурядність з'єднує рівноправні частини (`e`, `mas`, `ou`, `nem`). Підрядність вбудовує одну клаузу в іншу (`que`, `se`, `quando`, `embora`).\n\nВід цього залежить спосіб дієслова: сурядність майже завжди тримає той самий спосіб, що й незалежне речення; підрядність може вимагати кон'юнктива.",
    examples: [
      { pt: "Cheguei e sentei-me.", uk: "Я прийшов/прийшла й сів/сіла." },
      { pt: "Quero que tu venhas.", uk: "Хочу, щоб ти прийшов/прийшла." },
      { pt: "Nem comeu nem bebeu.", uk: "Не їв/їла і не пив/пила." },
    ],
    mistakes: [
      {
        wrong: "Quero que tu vens.",
        right: "Quero que tu venhas.",
        why: "Воля + `que` відкриває підрядне з кон'юнктивом, не сурядне з індикативом.",
      },
    ],

  },
];
