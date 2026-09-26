import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const sources = [
  { label: "Ciberdúvidas da Língua Portuguesa", url: "https://ciberduvidas.iscte-iul.pt/" },
  { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: "https://gulbenkian.pt/publications/gramatica-do-portugues/" }
];

export const pages: GrammarPage[] = [
  page({
    id: "adjective-determiner-gap-closure", slug: "adjective-determiner-gap-closure", category: "adjectives",
    titleUk: "Прикметник і детермінатив: закриття вузьких інвентарних тем",
    titlePt: "Adjetivos e determinantes: fecho dos tópicos finos do inventário",
    titleEn: "Adjective and determiner gap closure",
    summary: "Атрибутивність, предикативність, ступені порівняння, -íssimo та детермінативні підкласи.",
    aliases: ["прикметники closure", "adjective determiner gaps"],
    related: ["attributive-adjectives","predicative-adjectives","adjective-position","comparatives","superlatives","determiners-overview"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Модулі 89–109 і частина 72–88 потребують явного розрізнення формальної узгодженості, syntactic position та semantic effect. Ця стаття закриває залишкові одиниці без дублювання базових визначень.",
    definition: "Adjective syntax combines agreement, attributive/predicative position, semantic interpretation and degree; determiners select and constrain nominal reference.",
    uses: [
      { title: "Рід, число та узгодження — модулі 89–91", body: "Adjective agreement follows the relevant noun phrase structure; agreement is morphological and syntactic, not a translation choice.", examples: [ex("casas novas", "нові будинки", { purpose: "production" })] },
      { title: "Атрибутивне й предикативне вживання — модулі 92–94", body: "Attributive adjective belongs to the noun phrase; predicative adjective is linked to the subject/object through a copular or predicative structure. Position can affect interpretation.", examples: [ex("um homem pobre", "бідний чоловік", { purpose: "contrast" }), ex("O homem está pobre.", "Чоловік бідний.", { purpose: "contrast" })] },
      { title: "Семантика позиції — модуль 95", body: "Adjective position may correlate with restrictive, descriptive, evaluative or lexicalised readings. There is no universal rule that preposition means one fixed meaning.", examples: [ex("um velho amigo", "давній/старий друг", { purpose: "contrast" })] },
      { title: "Координація й керування — модулі 96–98", body: "Coordinated adjectives share a noun phrase but can differ in semantic relation; adjective government determines which preposition or complement is licensed.", examples: [ex("orgulhoso do filho", "гордий сином", { purpose: "production" })] },
      { title: "Порівняння — модулі 99–102", body: "Comparative equality, superiority, inferiority and irregular forms require construction-specific analysis.", examples: [ex("mais alto do que", "вищий за / ніж", { purpose: "production" })] },
      { title: "Superlative і -íssimo — модулі 103–107", body: "Relative superlative, absolute superlative, -íssimo, analytic degree and intensification are distinct constructions.", examples: [ex("muito importante", "дуже важливий", { purpose: "contrast" }), ex("importantíssimo", "надзвичайно важливий", { purpose: "contrast" })] },
      { title: "Compound adjectives і substantivisation — модулі 108–109", body: "Compound adjectives have internal lexical structure; substantivised adjectives function as nominal heads in context.", examples: [ex("os mais jovens", "наймолодші", { purpose: "production" })] },
      { title: "Детермінативні підкласи — модулі 72–88", body: "Indefinite, negative, universal, distributive determiners and quantifiers include todo, cada, algum, nenhum, qualquer, ambos, outro, mesmo and próprio; scope and compatibility are construction-dependent.", examples: [ex("Cada um escolheu.", "Кожен вибрав.", { purpose: "production" })] }
    ],
    examples: [ex("um velho amigo", "давній/старий друг", { purpose: "contrast" }), ex("importantíssimo", "надзвичайно важливий", { purpose: "contrast" })],
    nonUses: ["Не робіть із позиції прикметника абсолютне правило значення.", "Не плутайте absolute superlative з relative superlative.", "Не трактуйте всі determiner forms як взаємозамінні."],
    markers: ["mais", "menos", "tão", "-íssimo", "cada", "todo", "nenhum", "qualquer"],
    mistakes: [mistake("preposed adjective завжди суб'єктивний", "аналізувати lexicalisation і context", "Позиція має кілька можливих функцій.")],
    ukrainian: "Українська також має атрибутивні та предикативні прикметники й ступені порівняння, але без системи артиклів.",
    comparisonUk: "mais...do que ≈ «більш...ніж», tão...como ≈ «такий самий...як», -íssimo часто передається аналітично.",
    regional: "Позиційні та лексикалізовані переваги можуть різнитися за регістром і різновидом; не узагальнювати без джерела.",
    sources
  }),
  page({
    id: "pronoun-clitic-gap-closure", slug: "pronoun-clitic-gap-closure", category: "pronouns",
    titleUk: "Займенникові прогалини: об'єктні форми, clitic placement і PT-BR/PT-PT",
    titlePt: "Lacunas pronominais: objetos, colocação e PT-BR/PT-PT",
    titleEn: "Pronoun and clitic gap closure",
    summary: "Об'єктні, негативні, interrogative та clitic forms, включно з регіональними моделями.",
    aliases: ["pronoun gap closure"],
    related: ["object-pronouns","clitic-placement","clitics-br-pt","clitic-combinations"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Модулі 117, 124–126 і 158–159 завершують займенниковий блок: tonic prepositional pronouns, indefinite/negative/interrogative forms та variety-specific clitic placement.",
    definition: "Pronoun choice depends on grammatical function, syntactic position, discourse reference and variety.",
    uses: [
      { title: "Prepositional pronouns — модуль 117", body: "Після прийменника використовуються tonic forms; їх не слід автоматично замінювати object clitics.", examples: [ex("para mim", "для мене", { purpose: "production" })] },
      { title: "Indefinite and negative pronouns — модулі 124–125", body: "Indefinite forms express non-specific reference; negative forms participate in negative concord and can combine with não according to position.", examples: [ex("Alguém ligou.", "Хтось подзвонив.", { purpose: "production" }), ex("Ninguém ligou.", "Ніхто не подзвонив.", { purpose: "production" })] },
      { title: "Interrogative pronouns — модуль 126", body: "quem, qual, quanto and related forms differ in reference, agreement and syntactic role.", examples: [ex("Quem chegou?", "Хто прийшов?", { purpose: "production" })] },
      { title: "PT-BR clitic placement — модуль 158", body: "Brazilian Portuguese broadly favors preverbal clitic placement in many contexts, especially colloquial speech; formal writing has additional variation.", examples: [ex("Eu te vi ontem.", "Я бачив тебе вчора.", { purpose: "contrast" })] },
      { title: "PT-PT clitic placement — модуль 159", body: "European Portuguese retains a stronger role for enclisis in neutral contexts and syntactically conditioned proclisis. The distinction must be stated with register and channel.", examples: [ex("Vi-te ontem.", "Я бачив тебе вчора.", { purpose: "contrast" })] }
    ],
    examples: [ex("para mim", "для мене", { purpose: "production" }), ex("Quem chegou?", "Хто прийшов?", { purpose: "production" })],
    nonUses: ["Не вважайте me/te/o/lhe однаковими за функцією.", "Не переносіть PE clitic placement без маркування на PB.", "Не робіть із розмовної частотності нормативне правило."],
    markers: ["mim", "alguém", "ninguém", "quem", "qual", "próclise", "ênclise"],
    mistakes: [mistake("Після будь-якого прийменника ставиться clitic", "визначати tonic vs clitic pronoun", "Після прийменника типово потрібна tonic form.")],
    ukrainian: "Українська має наголошені/ненаголошені займенникові форми і відмінювання, але не португальську систему clitic placement.",
    comparisonUk: "para mim ≈ «для мене»; ninguém ≈ «ніхто»; quem ≈ «хто/кого» залежно від функції.",
    regional: "PT-BR/PT-PT clitic placement відрізняється систематично; це одна з найважливіших evidence-scoped variation zones.",
    sources
  }),
  page({
    id: "interrogative-system-closure", slug: "interrogative-system-closure", category: "syntax",
    titleUk: "Питальна система: від wh-слів до інтонації та різновидових моделей",
    titlePt: "Sistema interrogativo: palavras interrogativas, ordem e entoação",
    titleEn: "Interrogative system closure",
    summary: "Загальні й спеціальні питання, interrogative words, prepositions, word order, é que, alternative/negative/echo/rhetorical questions та PT-BR/PT-PT.",
    aliases: ["питальна система", "interrogative system closure"],
    related: ["questions-yesno","wh-questions","question-word-order","questions-br-pt","echo-questions","rhetorical-questions"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Модулі 391–412 утворюють цілісну interrogative system. Форма питання, interrogative word, порядок слів, інтонація й прагматична функція повинні аналізуватися окремо.",
    definition: "Interrogative construction is a grammatical form used to request information or perform other speech acts; its interpretation depends on syntax, prosody and context.",
    uses: [
      { title: "Yes/no та wh-questions — модулі 391–392", body: "General questions seek polarity confirmation; wh-questions specify an information variable.", examples: [ex("Você vem?", "Ти приходиш?", { purpose: "production" }), ex("Quem vem?", "Хто приходить?", { purpose: "production" })] },
      { title: "Interrogative forms — модулі 393–403", body: "o que, que, quem, qual, quanto, onde, quando, como, porque-forms and preposition + interrogative have distinct functions.", examples: [ex("Com quem você falou?", "З ким ти говорив?", { purpose: "production" })] },
      { title: "Word order and inversion — модулі 404–406", body: "Portuguese interrogatives do not reduce to one obligatory inversion rule. É que is a productive construction in interrogative and related contexts.", examples: [ex("Onde é que você mora?", "Де ти живеш?", { purpose: "contrast" })] },
      { title: "Echo, alternative, negative and rhetorical questions — модулі 407–410", body: "These are distinct discourse types, not merely punctuation variants.", examples: [ex("Você comprou o quê?", "Ти купив що?", { purpose: "comprehension" }), ex("Você não vem?", "Ти не прийдеш?", { purpose: "contrast" })] },
      { title: "Question intonation and PT-BR/PT-PT — модулі 411–412", body: "Prosody contributes to interpretation. Brazilian and European Portuguese have overlapping but non-identical interrogative patterns.", examples: [ex("Você vem amanhã?", "Ти прийдеш завтра?", { purpose: "production" })] }
    ],
    examples: [ex("Com quem você falou?", "З ким ти говорив?", { purpose: "production" }), ex("Onde é que você mora?", "Де ти живеш?", { purpose: "contrast" })],
    nonUses: ["Не вважайте inversion обов'язковою в кожному Portuguese question.", "Не змішуйте echo і rhetorical questions.", "Не визначайте speech act лише за ?."],
    markers: ["quem", "que", "qual", "quanto", "onde", "quando", "como", "por que", "é que", "?"],
    mistakes: [mistake("Питання = обов'язково інверсія subject-verb", "аналізувати construction і variety", "Portuguese має кілька interrogative patterns.")],
    ukrainian: "Українська також має polar/wh questions і question intonation, але word order та interrogative constructions розподіляються інакше.",
    comparisonUk: "o que/quem/onde тощо мають близькі українські відповідники, але порядок і конструкційна рамка не завжди збігаються.",
    regional: "PT-BR/PT-PT interrogative patterns відрізняються в окремих конструкціях; channel і intonation важливі.",
    sources
  }),
  page({
    id: "adverb-formation-gap-closure", slug: "adverb-formation-gap-closure", category: "adverbs",
    titleUk: "Творення прислівників: продуктивні моделі та межі",
    titlePt: "Formação de advérbios: modelos produtivos e limites",
    titleEn: "Adverb formation gap closure",
    summary: "Закриття інвентарного модуля 539 про утворення прислівників і межі продуктивності -mente та інших моделей.",
    aliases: ["творення прислівників closure"],
    related: ["adverb-formation","mente-formation","adverbs-ending-in-mente"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Модуль 539 потребує окремого пояснення, бо «прислівник = прикметник + -mente» є лише частиною системи.",
    definition: "Adverb formation includes derivational -mente patterns, lexicalised adverbs, adverbial locutions and conversion/other historical formations.",
    uses: [
      { title: "Adverbs in -mente — модуль 539", body: "Adjectival bases can form manner/evaluative and other adverbs with -mente; spelling and accentuation of the base matter. Not every semantic adverb is newly formed productively in synchrony.", examples: [ex("rápido → rapidamente", "швидкий → швидко", { purpose: "production" })] },
      { title: "Productivity vs lexicalisation", body: "Some adverbs are lexicalised and must be learned as lexical items; others are transparent derivations. Productivity should not be inferred from one example.", examples: [ex("talvez", "можливо", { purpose: "comprehension" })] }
    ],
    examples: [ex("rápido → rapidamente", "швидкий → швидко", { purpose: "production" })],
    nonUses: ["Не додавайте -mente до будь-якої форми без перевірки бази.", "Не вважайте всі прислівники похідними від прикметників."],
    markers: ["-mente", "rapidamente", "claramente"],
    mistakes: [mistake("Кожен adverb утворюється через -mente", "розрізняти derivation і lexicalisation", "Частина прислівників є простими або лексикалізованими.")],
    ukrainian: "Українська має суфіксальне творення прислівників, але португальська модель -mente має іншу морфологічну й орфографічну реалізацію.",
    comparisonUk: "-mente часто відповідає українському -о/-е, але не є прямим one-to-one suffix.",
    regional: "Основна derivational модель спільна для різновидів; lexicalised adverbs можуть різнитися за частотністю.",
    sources
  })
];
