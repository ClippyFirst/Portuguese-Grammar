import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const sources = [
  { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: "https://gulbenkian.pt/publications/gramatica-do-portugues/" },
  { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" },
  { label: "Ciberdúvidas da Língua Portuguesa", url: "https://ciberduvidas.iscte-iul.pt/" }
];

export const pages: GrammarPage[] = [
  page({
    id: "foundations-closure-2026-09", slug: "foundations-closure-2026-09", category: "syntax",
    titleUk: "Граматична архітектура португальської: від слова до речення",
    titlePt: "Arquitetura gramatical do português: da palavra à frase",
    titleEn: "Portuguese grammatical architecture: from word to sentence",
    summary: "Системний модуль для фундаментальних одиниць інвентарю 1–25 і чотирьох явно недоохоплених номінальних одиниць 26, 27, 31 і 32.",
    aliases: ["частини мови", "граматичні категорії", "словосполучення і речення", "foundations closure"],
    related: ["syntax", "word-order", "subject-placement", "null-and-expletive-subjects", "noun-gender", "noun-number"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Фундаментальні одиниці інвентарю не повинні залишатися лише припущеними передумовами інших статей. Цей матеріал дає окрему карту понять 1–25, а також закриває 26, 27, 31 і 32 там, де вони потрібні для цілісного переходу від лексеми до іменної групи.",
    definition: "Граматична архітектура описує рівні аналізу від лексичної одиниці та морфеми до слова, словоформи, фрази, клаузи й речення, а також синтаксичні ролі та граматичні категорії, що пов'язують ці рівні.",
    uses: [
      { title: "Частини мови та лексико-граматичні одиниці — модулі 1–7", body: "Частини мови класифікують слова за морфологічними, синтаксичними та семантичними властивостями. Лексема є абстрактною одиницею словника, словоформа — конкретною реалізацією, а lemma, stem і ending описують різні рівні морфологічної будови. Morpheme є мінімальною морфологічною одиницею; inflection і derivation виконують різні функції.", examples: [ex("casa → casas", "будинок → будинки", { purpose: "contrast" })] },
      { title: "Граматичні категорії та узгодження — модуль 7", body: "Gender, number і person — не просто набори закінчень. Вони є категоріями, які можуть мати морфологічні та синтаксичні наслідки. Конкретна форма повинна аналізуватися в межах конструкції.", examples: [ex("as casas novas", "нові будинки", { purpose: "production" })] },
      { title: "Фраза, constituent і основні синтаксичні рівні — модулі 8–13", body: "Phrase/constituent є структурною одиницею; noun phrase, verb phrase і prepositional phrase мають різні голови та залежності. Clause організовує предикацію, а sentence є ширшою одиницею висловлення; межа між clause і sentence не зводиться до наявності крапки.", examples: [ex("A Maria leu o livro.", "Марія прочитала книжку.", { purpose: "analysis" })] },
      { title: "Синтаксичні ролі — модулі 14–22", body: "Subject, predicate, direct object, indirect object, oblique complement, predicative complement та adjunct/modifier треба визначати за структурою й валентністю. Argument є учасником, якого предикат ліцензує або концептуально вимагає; adjunct додає обставинну чи модифікаційну інформацію. Vocative не є звичайним subject або object.", examples: [ex("Maria deu o livro ao João.", "Марія дала книжку Жуану.", { purpose: "analysis" })] },
      { title: "Нульовий та експлетивний суб'єкт і типи речень — модулі 23–25", body: "Null subject означає відсутність фонетично вираженого subject у позиції, де його інтерпретація доступна; expletive/impersonal subject пов'язаний з безособовою предикацією. Sentence types є окремою класифікацією, яку далі деталізують декларативи, питання, вигуки та імперативи.", examples: [ex("Cheguei cedo.", "Я прийшов рано.", { purpose: "contrast" }), ex("Há muitas pessoas.", "Є багато людей.", { purpose: "contrast" })] },
      { title: "Рід іменника та стать референта — модулі 26–27", body: "Граматичний gender є властивістю граматичної системи, а natural sex — властивістю референта. Вони можуть збігатися, але не є тотожними. У назвах осіб і професій треба аналізувати лексему та її узгодження, а не виводити граматичний рід лише з біологічної статі.", examples: [ex("o médico / a médica", "лікар / лікарка", { purpose: "contrast" })] },
      { title: "Португальський та український рід — модуль 31", body: "Українська також має граматичний рід, але класифікація конкретних португальських іменників може не збігатися з українською. Український переклад тому не є надійним механізмом прогнозування Portuguese gender.", examples: [ex("o problema", "проблема", { purpose: "contrast" })] },
      { title: "Число іменника — модуль 32", body: "Number — singular/plural — є граматичною категорією іменника та іменної групи. Далі інвентар деталізує регулярні й нерегулярні моделі множини; ця стаття встановлює поняттєву основу.", examples: [ex("livro → livros", "книжка → книжки", { purpose: "production" })] }
    ],
    examples: [ex("A Maria leu o livro.", "Марія прочитала книжку.", { purpose: "analysis" }), ex("Há muitas pessoas.", "Є багато людей.", { purpose: "contrast" })],
    nonUses: ["Не ототожнюйте лексему зі словоформою.", "Не визначайте syntactic role лише за українським відмінком.", "Не ототожнюйте grammatical gender із natural sex.", "Не трактуйте відсутність subject як доказ відсутності суб'єктної інтерпретації."],
    markers: ["lexeme", "word-form", "morpheme", "constituent", "clause", "subject", "object", "vocative"],
    mistakes: [mistake("Португальський рід завжди збігається з українським", "перевіряти Portuguese lexical gender", "Формальна категорія мови-джерела не переноситься автоматично."), mistake("Vocative — це різновид object", "визначати функцію звертання", "Vocative адресує учасника, а не заповнює звичайну валентність предиката.")],
    ukrainian: "Українська має розвинену морфологію роду, числа та відмінка й часто кодує синтаксичні ролі відмінковими формами. Португальська сильніше покладається на порядок слів, прийменники, узгодження та детермінативи.",
    comparisonUk: "Phrase/clause/sentence мають функціональні аналоги в українській, але конкретні межі та засоби вираження ролей можуть відрізнятися. Артикль як граматичний детермінатив прямого українського аналога не має.",
    regional: "Фундаментальна архітектура є спільною для португаломовного простору; відмінності між PT-BR і PT-PT особливо важливі на рівні займенників, null subjects, порядку слів та окремих конструкцій.",
    sources
  }),

  page({
    id: "conjunction-remaining-closure-2026-09", slug: "conjunction-remaining-closure-2026-09", category: "conjunctions",
    titleUk: "Сполучники та конектори: повна карта додаткових конструкцій",
    titlePt: "Conjunções e conectores: mapa completo das construções adicionais",
    titleEn: "Conjunctions and connectives: remaining constructional coverage",
    summary: "Явне покриття інвентарних модулів 796–813: порівняльні, наслідкові, conformative, proportional, modal, locative, correlative та інші конструкції.",
    aliases: ["додаткові сполучники", "conjunction remaining closure"],
    related: ["conjunction-system", "subordinating-conjunctions", "conjunction-vs-discourse-connective", "subordinate-clauses", "conjunctions-and-punctuation"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Після окремого опрацювання базових типів сполучників залишаються конструкційні та функціональні підкласи, які легко загубити в оглядовій статті. Тут кожен модуль 796–813 отримує власне пояснення або явно визначений home.",
    definition: "Conjunctions link grammatical constituents or clauses; connective expressions may instead organise discourse without being syntactic conjunctions. Their distinction depends on distribution, scope and constructional behaviour.",
    uses: [
      { title: "Порівняльні та наслідкові сполучники — модулі 796–797", body: "Comparative conjunctions introduce comparison structures; consecutive conjunctions encode a result or consequence. Їх не слід змішувати з comparative adjectives/adverbs або з простою причинністю.", examples: [ex("Ele é tão alto como o irmão.", "Він такий самий високий, як брат.", { purpose: "production" }), ex("Falou tanto que todos ouviram.", "Він говорив так багато, що всі почули.", { purpose: "production" })] },
      { title: "Conformative, proportional, modal і locative — модулі 798–801", body: "Conformative clauses express conformity with a reference; proportional clauses relate two developments; modal clauses specify manner/way; locative clauses express a location relation. Не кожна формальна сполучникова конструкція має прямий український калькований відповідник.", examples: [ex("Como foi combinado, começámos cedo.", "Як було домовлено, ми почали рано.", { purpose: "contrast" })] },
      { title: "Сполучник і дискурсивний конектор — модуль 802", body: "A connective can relate propositions at discourse level without occupying the same syntactic position as a conjunction. The classification must follow syntactic distribution rather than translation alone.", examples: [ex("Ele saiu; portanto, fechámos a porta.", "Він пішов; отже, ми зачинили двері.", { purpose: "analysis" })] },
      { title: "Вибір сполучника та значення — модуль 803", body: "Conjunction selection can change causal, temporal, concessive, conditional or argumentative interpretation. Formally similar connectors are not automatically interchangeable.", examples: [ex("Embora esteja cansado, continuo.", "Хоч я втомлений, я продовжую.", { purpose: "contrast" })] },
      { title: "Asyndesis, multiple conjunctions і correlatives — модулі 804–808", body: "Asyndesis omits an overt conjunction; polysyndetic or multiple coordination repeats or combines linking elements; correlative patterns distribute grammatical material across paired positions. Nem... nem is a negative coordination pattern, not merely two isolated negatives.", examples: [ex("Cheguei, vi, venci.", "Я прийшов, побачив, переміг.", { purpose: "analysis" }), ex("Nem ele nem eu fomos.", "Ні він, ні я не пішли.", { purpose: "production" })] },
      { title: "Сполучники й пунктуація — модуль 809", body: "Punctuation around coordination depends on constituent structure, length, parenthetical status and discourse organisation. A conjunction does not mechanically determine whether a comma is possible.", examples: [ex("Estudou muito, mas não passou.", "Він багато вчився, але не склав.", { purpose: "production" })] },
      { title: "Сполучники та спосіб дієслова — модуль 810", body: "Some subordinate relations interact systematically with indicative/subjunctive choice, but the conjunction alone is not always a sufficient predictor. Mood selection depends on semantics and construction.", examples: [ex("Embora seja difícil, é possível.", "Хоч це складно, це можливо.", { purpose: "production" })] },
      { title: "Португальсько-українська відповідність — модулі 811–812", body: "Correspondence is functional, not word-for-word. False equivalents can share a broad translation but select different clause types, mood or discourse relations.", examples: [ex("porém", "однак / проте", { purpose: "contrast" })] },
      { title: "Фіксовані сполучникові вирази — модуль 813", body: "Fixed conjunctive expressions behave as lexicalised multiword units. Their internal wording should be learned as a construction rather than generated from a free combination each time.", examples: [ex("a fim de que", "для того, щоб", { purpose: "production" })] }
    ],
    examples: [ex("Nem ele nem eu fomos.", "Ні він, ні я не пішли.", { purpose: "production" }), ex("Falou tanto que todos ouviram.", "Він говорив так багато, що всі почули.", { purpose: "production" })],
    nonUses: ["Не прирівнюйте connector до conjunction лише за перекладом.", "Не виводьте mood тільки з одного сполучника без аналізу конструкції.", "Не вважайте всі paired forms взаємозамінними.", "Не робіть пунктуаційне правило лише з наявності mas, e або ou."],
    markers: ["tão...como", "tanto...que", "conforme", "à medida que", "como", "portanto", "nem...nem", "a fim de que"],
    mistakes: [mistake("Conector = завжди сполучник", "перевіряти синтаксичну дистрибуцію", "Дискурсивний конектор може не бути частиною тієї самої синтаксичної конструкції.")],
    ukrainian: "Українська має сурядні, підрядні, парні та безсполучникові конструкції, але конкретний набір форм і mood-selection не збігається.",
    comparisonUk: "Порівняльні, причинні, наслідкові та умовні відношення мають функціональні аналоги, але Portuguese conjunction selection не завжди відповідає одному українському слову.",
    regional: "Розподіл окремих конекторів і частотність можуть залежати від variety, register та channel; нормативність треба відділяти від frequency.",
    sources
  }),

  page({
    id: "interjection-remaining-closure-2026-09", slug: "interjection-remaining-closure-2026-09", category: "interjections",
    titleUk: "Вигуки та реактивні формули: функції, межі й регістр",
    titlePt: "Interjeições e fórmulas reativas: funções, limites e registo",
    titleEn: "Interjections: remaining functional and discourse coverage",
    summary: "Явне покриття модулів 819–830: привітання, звернення, емоційні реакції, дискурс-менеджмент, пунктуація та українсько-португальські хибні відповідники.",
    aliases: ["вигуки та реакції", "interjection remaining closure"],
    related: ["primary-interjections", "secondary-interjections", "interjectional-locutions", "vocal-reactions-written-interjections", "interjections"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Interjections form a heterogeneous class at the boundary of grammar, lexicon, prosody and interaction. This closure makes each functional subdomain searchable without claiming that all reactions have identical grammatical status.",
    definition: "An interjectional expression is a form or construction used to perform an immediate expressive, reactive, attention-getting or discourse-management function; its syntactic integration and lexical status vary.",
    uses: [
      { title: "Привітання та прощання — модуль 819", body: "Greetings and farewells can function as formulaic interjectional expressions. Their status is often constructional rather than equivalent to a single lexical interjection.", examples: [ex("Olá!", "Привіт!", { purpose: "production" }), ex("Até logo!", "До зустрічі!", { purpose: "production" })] },
      { title: "Заклики та привернення уваги — модуль 820", body: "Attention-getters organise interaction and can combine with vocatives. Their interpretation depends on who is addressed and on the interactional context.", examples: [ex("Ei, Maria!", "Гей, Маріє!", { purpose: "production" })] },
      { title: "Подив, захоплення, біль, страх і полегшення — модулі 821–822", body: "Expressive reactions are highly context-sensitive. The same form can have different pragmatic force, while different varieties may favour different lexical forms.", examples: [ex("Uau!", "Ого!", { purpose: "production" }), ex("Ai!", "Ай!", { purpose: "production" })] },
      { title: "Згода, незгода та вагання — модуль 823", body: "Short reactive forms can accept, reject, hesitate or suspend a response. Their discourse function should be distinguished from full declarative agreement or disagreement.", examples: [ex("Hum... não sei.", "Хм... не знаю.", { purpose: "production" })] },
      { title: "Дискурс-менеджмент — модуль 824", body: "Interjectional items may open, maintain, redirect or close an interaction. This is a pragmatic function, not simply an emotion label.", examples: [ex("Bom, vamos começar.", "Отже / ну, почнімо.", { purpose: "contrast" })] },
      { title: "Interjection + vocative — модуль 825", body: "An interjection can be followed by a vocative that identifies the addressee. Vocative remains structurally distinct from subject or object.", examples: [ex("Ah, João!", "А, Жуане!", { purpose: "production" })] },
      { title: "Interjections і pragmatic particles — модуль 826", body: "The boundary is functional and distributional: pragmatic particles may be integrated into clause structure, whereas prototypical interjections can stand alone. Borderline forms require contextual analysis.", examples: [ex("Então, vamos?", "То що, йдемо?", { purpose: "analysis" })] },
      { title: "Interjections і ordinary lexical items — модуль 827", body: "A lexical item can acquire interjectional use in discourse without losing all other lexical functions. Classification should follow the actual construction.", examples: [ex("Meu Deus!", "Боже мій!", { purpose: "analysis" })] },
      { title: "Пунктуація з вигуками — модуль 828", body: "Comma, exclamation mark, question mark and ellipsis can reflect prosodic and discourse boundaries. Punctuation does not by itself determine grammatical class.", examples: [ex("Ah, não!", "А, ні!", { purpose: "production" })] },
      { title: "Регістр і регіональна варіація — модуль 829", body: "Interjection inventories are especially sensitive to spoken interaction, generation, region and register. A form's frequency in one community is not a universal grammatical rule.", examples: [ex("Pois!", "Авжеж! / Так!", { purpose: "contrast" })] },
      { title: "Українсько-португальські хибні відповідники — модуль 830", body: "Equivalent translations can conceal different pragmatic force. Learners should compare function, placement, prosody and register rather than memorise isolated translation pairs.", examples: [ex("Puxa!", "От же ж! / Ого!", { purpose: "contrast" })] }
    ],
    examples: [ex("Ei, Maria!", "Гей, Маріє!", { purpose: "production" }), ex("Ah, não!", "А, ні!", { purpose: "production" })],
    nonUses: ["Не класифікуйте кожне емоційне слово як interjection.", "Не визначайте pragmatic force лише за словниковим перекладом.", "Не переносіть розмовну форму як універсальну норму.", "Не вважайте пунктуацію достатнім критерієм граматичного класу."],
    markers: ["Olá", "Ei", "Uau", "Ai", "Hum", "Ah", "Bom", "Pois"],
    mistakes: [mistake("Вигук завжди означає одну емоцію", "аналізувати контекст і speech act", "Одна форма може мати різну прагматичну силу.")],
    ukrainian: "Українська також має вигуки, формули привітання, звертання та реактивні частки. Відповідність залежить від ситуації, регістру й просодії, а не лише від словникового перекладу.",
    comparisonUk: "Olá/Ah/Ai/Ei можуть мати близькі функціональні аналоги, але конкретні форми, частотність і прагматичні відтінки не завжди збігаються.",
    regional: "Interjections особливо варіативні в spoken language; Brazilian, European та African varieties можуть віддавати перевагу різним формам і прагматичним сценаріям.",
    sources
  }),

  page({
    id: "sentence-types-remaining-closure-2026-09", slug: "sentence-types-remaining-closure-2026-09", category: "syntax",
    titleUk: "Типи речень і мовленнєві акти: повна карта 831–853",
    titlePt: "Tipos de frase e atos de fala: mapa completo 831–853",
    titleEn: "Sentence types and illocutionary force: complete coverage",
    summary: "Системне покриття декларативів, питань, вигуків, імперативів, optative/hortative конструкцій, полярності, фрагментів, tags, echo/rhetorical questions та illocutionary force.",
    aliases: ["типи речень", "sentence types closure", "illocutionary force"],
    related: ["exclamatives", "question-tags", "echo-questions", "rhetorical-questions", "sentence-fragments", "syntax"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Sentence type і speech act не є одним рівнем опису. Одна граматична форма може виконувати різні дії, а одна прагматична дія може реалізовуватися кількома граматичними формами. Модулі 831–853 тому розглядаються як взаємопов'язана система.",
    definition: "Sentence type is a grammatical/syntactic classification such as declarative, interrogative, exclamative or imperative; illocutionary force is the communicative action performed in context.",
    uses: [
      { title: "Декларативи, питання, вигуки та імперативи — модулі 831–834", body: "Declarative clauses typically present information; interrogatives request or check information; exclamatives conventionally express a marked evaluative or expressive interpretation; imperatives direct an addressee. Their forms overlap with other speech acts.", examples: [ex("Ele chegou.", "Він прийшов.", { purpose: "production" }), ex("Ele chegou?", "Він прийшов?", { purpose: "production" }), ex("Que dia lindo!", "Який чудовий день!", { purpose: "production" }), ex("Venha aqui.", "Ідіть сюди.", { purpose: "production" })] },
      { title: "Optative та hortative/exhortative constructions — модулі 835–836", body: "Wish constructions express desired states or events; hortative/exhortative forms encourage joint or addressee-oriented action. Their morphology can overlap with subjunctive or imperative resources.", examples: [ex("Que tudo corra bem!", "Хай усе буде добре!", { purpose: "production" }), ex("Vamos começar.", "Почнімо.", { purpose: "production" })] },
      { title: "Прямі та непрямі директиви — модуль 837", body: "A directive can be grammaticalised as an imperative or realised indirectly through a question, modal form or declarative. Indirectness is pragmatic and should not be confused with a separate sentence type.", examples: [ex("Pode fechar a porta?", "Можете зачинити двері?", { purpose: "contrast" })] },
      { title: "Ствердна й заперечна полярність — модулі 838–839", body: "Polarity concerns affirmation versus negation. It intersects with sentence type but is not identical to it: both declaratives and questions can be positive or negative.", examples: [ex("Ele veio.", "Він прийшов.", { purpose: "production" }), ex("Ele não veio?", "Він не прийшов?", { purpose: "contrast" })] },
      { title: "Marked declaratives, fragments та elliptical responses — модулі 840–842", body: "Marked declaratives use word order, prosody or particles for information-structural effects. Sentence fragments and answer fragments can be complete interactional turns despite lacking a full clause.", examples: [ex("Eu? Nunca.", "Я? Ніколи.", { purpose: "comprehension" }), ex("— Quem veio? — A Maria.", "— Хто прийшов? — Марія.", { purpose: "contrast" })] },
      { title: "Tags, echo та rhetorical questions — модулі 843–845", body: "Question tags seek confirmation, echo questions react to or query an unexpected element, and rhetorical questions need not seek an information answer. These distinctions are pragmatic as well as syntactic.", examples: [ex("Você vem, não vem?", "Ти прийдеш, правда?", { purpose: "contrast" }), ex("Você comprou o quê?", "Ти купив що?", { purpose: "comprehension" })] },
      { title: "Exclamative word order та imperative softening/intensification — модулі 846–847", body: "Exclamative interpretation can correlate with marked word order and degree expressions. Imperatives can be softened or intensified by pronouns, particles, politeness formulas, prosody and lexical choices.", examples: [ex("Que grande surpresa!", "Яка велика несподіванка!", { purpose: "production" }), ex("Por favor, sente-se.", "Будь ласка, сядьте.", { purpose: "production" })] },
      { title: "Тип речення, мовленнєвий акт, інтонація та пунктуація — модулі 848–850", body: "Sentence type, speech act, intonation and punctuation interact but cannot substitute for one another. Punctuation is a written convention; intonation is prosodic; speech act is pragmatic.", examples: [ex("Você pode ajudar?", "Ви можете допомогти?", { purpose: "contrast" })] },
      { title: "PT-BR/PT-PT variation — модулі 851–853", body: "Sentence-type realisation and discourse functions vary by variety, register and channel. Grammaticalisation of discourse functions should be described as a process or synchronic constructional pattern, not as a universal binary between Brazil and Portugal.", examples: [ex("É que eu não sabia.", "Річ у тім, що я не знав.", { purpose: "contrast" })] }
    ],
    examples: [ex("Você pode ajudar?", "Ви можете допомогти?", { purpose: "contrast" }), ex("Vamos começar.", "Почнімо.", { purpose: "production" })],
    nonUses: ["Не ототожнюйте sentence type зі speech act.", "Не робіть punctuation єдиним критерієм типу речення.", "Не вважайте кожне питання запитом інформації.", "Не описуйте PT-BR/PT-PT як одну безвиняткову бінарну опозицію."],
    markers: ["?", "!", "não", "por favor", "vamos", "que", "é que"],
    mistakes: [mistake("Питальне речення завжди просить інформацію", "аналізувати illocutionary force", "Питання може бути rhetorical, echo, confirmation-seeking або directive.")],
    ukrainian: "Українська має ті самі великі типи речень і подібні прагматичні дії, але конкретні конструкції, інтонаційні патерни та способи пом'якшення директив відрізняються.",
    comparisonUk: "Portuguese sentence types мають функціональні аналоги в українській; різниця часто полягає у формі, порядку слів, mood, частках та просодії.",
    regional: "Варіативність треба описувати за variety, register і channel. Особливо це стосується interrogatives, directives, particles та spoken interaction.",
    sources
  }),

  page({
    id: "advanced-syntax-remaining-closure-2026-09", slug: "advanced-syntax-remaining-closure-2026-09", category: "syntax",
    titleUk: "Розширений синтаксис і дискурс: конструкції 854–889",
    titlePt: "Sintaxe avançada e discurso: construções 854–889",
    titleEn: "Advanced syntax and discourse: coverage of 854–889",
    summary: "Явне покриття додаткової constituent structure, ellipsis, discourse, rhetorical syntax, null objects/possessors, bare nominals, topic-subject constructions, null-subject subtypes, secondary stress і discourse markers.",
    aliases: ["advanced syntax closure", "розширений синтаксис", "нулеві додатки та дискурс"],
    related: ["syntax-advanced", "syntax-gaps", "closure-syntax-discourse", "closure-syntax-figures-2", "closure-discourse-markers-2"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Модулі 854–889 є фінальним шаром інвентарю: вони деталізують constituent structure, ellipsis, stylistic syntax, null arguments, nominal reference, Brazilian topic-subject constructions, null-subject subtypes, prosody та discourse markers. Їх не слід зводити до одного загального «розділу синтаксису».",
    definition: "Advanced syntax connects phrase structure, ellipsis, information structure, discourse organisation and constructional variation while keeping grammatical, prosodic and pragmatic levels distinct.",
    uses: [
      { title: "Фразові структури та залежності — модулі 854–860", body: "Adjectival and adverbial phrases have internal modification structure; nouns and adjectives can license complements; apposition adds a nominal relation; phrase coordination differs from clause coordination. The distinction depends on constituency and syntactic head.", examples: [ex("muito feliz com o resultado", "дуже задоволений результатом", { purpose: "analysis" })] },
      { title: "Ellipsis і zeugma — модуль 861", body: "Ellipsis omits recoverable material; zeugma involves a shared or repeated element whose interpretation can differ across coordinated structures. The analysis should identify what is omitted and how it is recovered.", examples: [ex("Eu fui a Lisboa; ela, ao Porto.", "Я поїхав до Лісабона, а вона — до Порту.", { purpose: "analysis" })] },
      { title: "Free indirect discourse та denotative words/particles — модулі 862–863", body: "Free indirect discourse mixes narrative and represented-speech properties; discourse particles and small lexical items can signal stance, deixis or interactional framing. Neither phenomenon should be reduced to direct/indirect speech alone.", examples: [ex("Por que ele teria feito isso?", "Чому він, мовляв, це зробив?", { purpose: "comprehension" })] },
      { title: "Prepositional locutions і їхній статус — модулі 864–865", body: "Prepositional locutions are multiword units functioning as prepositional resources. Their internal lexical transparency varies; their syntactic distribution determines whether they behave as a prepositional frame rather than a free sequence.", examples: [ex("por causa de", "через / через те, що", { purpose: "production" })] },
      { title: "Риторично-синтаксичні конструкції — модулі 866–875", body: "Pleonasm, hyperbaton/anastrophe, proleptic fronting, anacoluthon, syllepsis, asyndeton and polysyndeton occupy different points on the grammar–style continuum. The repository distinguishes ordinary grammatical construction from marked rhetorical effect.", examples: [ex("A mim, ninguém me engana.", "Мене, мене ніхто не обдурить.", { purpose: "analysis" })] },
      { title: "Нульові прямі й облікові додатки та присвійні — модулі 876–878", body: "Null direct objects, null oblique objects and null possessors involve recoverable arguments or dependents whose overt expression is absent. They must be distinguished from null subjects and from ordinary lexical intransitivity.", examples: [ex("Já comprei.", "Я вже купив.", { purpose: "comprehension" })] },
      { title: "VP ellipsis і emphatic affirmation — модулі 879–880", body: "Verbal-phrase ellipsis omits a verbal constituent under discourse recoverability. Emphatic affirmation strengthens commitment or confirmation and may use particles, repetition, prosody or dedicated constructions.", examples: [ex("Ele foi, e ela também.", "Він пішов, і вона теж.", { purpose: "analysis" }), ex("Sim, fui eu.", "Так, це був я.", { purpose: "production" })] },
      { title: "Biased polar questions та minimal yes/no answers — модулі 881–882", body: "A biased polar question carries an expectation or stance beyond neutral information seeking. Minimal answers such as sim/não respond to polarity but their interpretation depends on the polarity of the preceding question and discourse context.", examples: [ex("Você não vem?", "Ти ж не прийдеш?", { purpose: "contrast" }), ex("— Você vem? — Sim.", "— Ти прийдеш? — Так.", { purpose: "production" })] },
      { title: "Bare nominals і Brazilian topic-subject constructions — модулі 883–884", body: "Bare nominals can occur without an overt determiner in constructionally licensed contexts; Brazilian Portuguese topic-subject constructions distinguish a discourse topic from the grammatical relation of the clause. These are not simply errors or random omissions.", examples: [ex("Criança gosta de brincar.", "Діти люблять гратися.", { purpose: "contrast" }), ex("Essa casa, a janela quebrou.", "У цьому будинку зламалося вікно.", { purpose: "analysis" })] },
      { title: "Типи null subject — модулі 885–887", body: "Definite null subjects have a recoverable referent; indefinite null subjects do not identify a specific agent; expletive null subjects lack an ordinary referential subject. These are distinct analyses even when no overt pronoun appears.", examples: [ex("Cheguei cedo.", "Я прийшов рано.", { purpose: "contrast" }), ex("Diz-se que...", "Кажуть, що...", { purpose: "analysis" })] },
      { title: "Secondary stress — модуль 888", body: "Secondary stress is a prosodic prominence weaker than the primary lexical stress. It belongs to phonological structure and should not be confused with orthographic accent marks.", examples: [ex("fotografia", "фотографія", { purpose: "comprehension" })] },
      { title: "Discourse markers and their functions — модуль 889", body: "Discourse markers organise sequencing, contrast, reformulation, stance, turn management and topic shifts. Their function is discourse-pragmatic; frequency and register must be scoped separately from grammaticality.", examples: [ex("Então, vamos continuar.", "Отже / ну, продовжуймо.", { purpose: "contrast" })] }
    ],
    examples: [ex("Criança gosta de brincar.", "Діти люблять гратися.", { purpose: "contrast" }), ex("Então, vamos continuar.", "Отже / ну, продовжуймо.", { purpose: "contrast" })],
    nonUses: ["Не ототожнюйте null object із null subject.", "Не робіть bare nominal універсальним правилом без constructional context.", "Не називайте topic-subject конструкцію «неправильною» без нормативного та variety scope.", "Не змішуйте secondary stress з written accent.", "Не вважайте discourse marker звичайним conjunction лише через функцію зв'язку."],
    markers: ["ellipsis", "bare nominal", "topic", "null object", "null subject", "secondary stress", "discourse marker"],
    mistakes: [mistake("Відсутній займенник = помилка", "визначати тип null argument", "Нульове вираження може бути граматично або дискурсивно ліцензованим."), mistake("Дискурсивний маркер має те саме значення в усіх регістрах", "аналізувати context/register/function", "Функція залежить від позиції та дискурсивної ролі.")],
    ukrainian: "Українська широко використовує нульові суб'єкти й деякі нульові аргументи, тому формальна відсутність займенника не завжди створює той самий контраст, що в португальській. Португальські topic-subject та discourse-marker patterns потребують окремого зіставлення.",
    comparisonUk: "Українська має ellipsis, topicalisation, discourse markers і нульові аргументи; різниця полягає в тому, які саме структури є типовими та як вони взаємодіють з agreement, definiteness і word order.",
    regional: "Найвиразніша різновидова специфіка тут стосується Brazilian Portuguese topic-subject constructions, null-subject behaviour, discourse markers і spoken syntax. Secondary stress та constituent structure потребують окремого фонологічного/синтаксичного опису.",
    sources
  })
];
