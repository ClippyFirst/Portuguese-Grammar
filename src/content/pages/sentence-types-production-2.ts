import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_II = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const GULBENKIAN_III = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const CAMOES_PLE = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "exclamative-word-order", slug: "exclamative-word-order", category: "syntax",
    titleUk: "Порядок слів в окличних конструкціях", titlePt: "Ordem das palavras nas construções exclamativas", titleEn: "Word order in exclamative constructions",
    summary: "Як оклична інтерпретація взаємодіє з порядком компонентів і фокусом.",
    aliases: ["порядок слів в окличних", "exclamative word order", "ordem exclamativa"],
    related: ["exclamatives", "emphasis-focus", "information-structure", "word-order"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Окличність у португальській не утворює одного обов'язкового шаблону перестановки слів. Вона може поєднуватися з базовим порядком слів, конструкціями з `que⟧ або `como⟧, а також із винесенням компонента, який несе основний фокус. Тому порядок слів треба аналізувати разом із типом конструкції та інформаційною структурою.",
    definition: "Порядок слів в окличній конструкції — спосіб організувати компоненти висловлення так, щоб граматична структура й оклична інтерпретація разом виражали інтенсивність, оцінку або емоційну реакцію.",
    uses: [
      { title: "Оклична інтенсивність", body: "Оклична конструкція може підсилювати певну властивість або кількість без переходу до окремого «окличного відмінка» чи іншої морфологічної категорії.", examples: [ex("Que dia tão bonito!", "Який чудовий день!")] },
      { title: "Фокус на компоненті", body: "Компонент, що є центром оцінки, може отримувати спеціальне позиційне або інтонаційне виділення.", examples: [ex("Como ele trabalha bem!", "Як добре він працює!")] }
    ],
    examples: [ex("Que dia tão bonito!", "Який чудовий день!", { purpose: "comprehension" }), ex("Como ele trabalha bem!", "Як добре він працює!", { purpose: "production" })],
    mistakes: [mistake("вважати, що окличне значення автоматично вимагає інверсії", "спочатку визначати окличну конструкцію, а потім аналізувати її порядок слів і фокус", "Окличність не зводиться до механічної перестановки підмета й присудка.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська теж використовує порядок слів, інтонацію та окремі окличні слова для виділення оцінки. Корисно переносити функціональну аналогію, але не припускати однакової синтаксичної схеми.",
    regional: "Оклична інтерпретація особливо залежить від інтонації й контексту; письмовий знак оклику передає лише частину цієї інформації.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "imperative-softening-intensification", slug: "imperative-softening-intensification", category: "syntax",
    titleUk: "Пом'якшення та підсилення імператива", titlePt: "Atenuação e intensificação do imperativo", titleEn: "Imperative softening and intensification",
    summary: "Як форма наказу взаємодіє з ввічливістю, прямотою, частками та контекстом.",
    aliases: ["пом'якшення імператива", "підсилення імператива", "imperative softening", "imperative intensification"],
    related: ["imperative-affirmative", "speech-acts", "politeness", "register-and-directness"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Імперативна форма сама по собі не визначає, наскільки наказ буде сприйнято як різкий, ввічливий або категоричний. На інтерпретацію впливають звертання, модальні й дискурсивні елементи, інтонація, соціальна дистанція та ситуація. Тому «пом'якшити імператив» не означає просто замінити одну граматичну форму іншою.",
    definition: "Пом'якшення або підсилення імператива — прагматичне налаштування директивного висловлення засобами граматики, лексики, дискурсу, інтонації та контексту.",
    uses: [
      { title: "Пом'якшене прохання", body: "Непряма конструкція або маркер ввічливості може зменшувати прямоту дії, яку мовець просить виконати.", examples: [ex("Por favor, espere um momento.", "Будь ласка, зачекайте хвилинку.")] },
      { title: "Підсилене спонукання", body: "Контекст, повтор, вигукова інтонація або додаткові елементи можуть робити директиву категоричнішою.", examples: [ex("Venha já!", "Ідіть сюди негайно!")] }
    ],
    examples: [ex("Por favor, espere um momento.", "Будь ласка, зачекайте хвилинку.", { purpose: "production" }), ex("Venha já!", "Ідіть сюди негайно!", { purpose: "comprehension" })],
    mistakes: [mistake("вважати ввічливість властивістю самої форми імператива", "розрізняти граматичну форму, прямоту директиви та прагматичний ефект", "Та сама імперативна форма може мати різну соціальну інтерпретацію залежно від контексту.", "predicted-l1-transfer", "high")],
    ukrainian: "В українській прямота наказу також залежить від звертання, «будь ласка», інтонації та ситуації. Тому українська інтуїція корисна для функції, але не для механічного вибору португальської форми.",
    regional: "Реалізація ввічливості та прямоти чутлива до регіону, соціальної дистанції й регістру; не слід трактувати одну модель як універсальну для всіх різновидів португальської.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "sentence-type-vs-speech-act", slug: "sentence-type-vs-speech-act", category: "syntax",
    titleUk: "Тип речення та мовленнєвий акт", titlePt: "Tipo de frase e ato de fala", titleEn: "Sentence type vs speech act",
    summary: "Чому форма розповідного, питального чи наказового речення не завжди дорівнює його комунікативній дії.",
    aliases: ["тип речення і мовленнєвий акт", "sentence type vs speech act", "tipo de frase e ato de fala"],
    related: ["sentence-types-overview", "speech-acts", "rhetorical-questions", "imperative-softening-intensification"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Граматичний тип речення описує форму висловлення, а мовленнєвий акт — те, що мовець робить за допомогою висловлення в конкретному контексті. Питання може бути проханням, розповідне речення — наказом, а імператив — запрошенням. Для правильного аналізу ці рівні треба розділяти.",
    definition: "Тип речення — граматична класифікація висловлення; мовленнєвий акт — його комунікативна дія в контексті. Вони пов'язані, але не є тотожними.",
    uses: [
      { title: "Питання як прохання", body: "Питальна форма може використовуватися для непрямого прохання, коли відповідь як така не є головною метою.", examples: [ex("Pode fechar a janela?", "Можете зачинити вікно?")] },
      { title: "Розповідне як директива", body: "Розповідне речення в певному контексті може передавати очікування щодо дії.", examples: [ex("Você fecha a porta, por favor.", "Ви зачините двері, будь ласка.")] }
    ],
    examples: [ex("Pode fechar a janela?", "Можете зачинити вікно?", { purpose: "contrast" }), ex("Você fecha a porta, por favor.", "Ви зачините двері, будь ласка.", { purpose: "comprehension" })],
    mistakes: [mistake("визначати мовленнєвий акт лише за граматичним типом речення", "спочатку описувати форму, а потім визначати дію з урахуванням контексту", "Одна й та сама форма може реалізовувати різні комунікативні дії.", "predicted-l1-transfer", "high")],
    ukrainian: "Українська також використовує непрямі прохання й інші непрямі мовленнєві акти. Функціональна аналогія допомагає, але конкретні формули ввічливості й соціальні ефекти можуть відрізнятися.",
    regional: "Інтерпретація непрямих актів особливо залежить від контексту, інтонації, соціальної дистанції та регістру.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "sentence-type-vs-intonation", slug: "sentence-type-vs-intonation", category: "syntax",
    titleUk: "Тип речення та інтонація", titlePt: "Tipo de frase e entoação", titleEn: "Sentence type vs intonation",
    summary: "Як граматична форма та просодія разом визначають інтерпретацію висловлення.",
    aliases: ["тип речення та інтонація", "sentence type vs intonation", "tipo de frase e entoação"],
    related: ["sentence-types-overview", "question-intonation", "exclamatives", "sentence-type-vs-speech-act"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Інтонація не є просто усною версією розділового знака. Вона може впливати на те, чи висловлення звучить як запит, здивування, сумнів, підтвердження або інша дискурсивна дія. Граматичний тип створює структурну основу, а просодія допомагає її інтерпретувати.",
    definition: "Співвідношення типу речення та інтонації — взаємодія синтаксичної форми з просодичною організацією, яка впливає на комунікативну інтерпретацію.",
    uses: [
      { title: "Питальна інтонація", body: "Просодія може сигналізувати перевірку інформації, особливо в усному мовленні.", examples: [ex("Vais amanhã?", "Ти йдеш завтра?")] },
      { title: "Ехо та здивування", body: "Повторене слово з окремою інтонацією може стати реактивним перепитуванням.", examples: [ex("— Amanhã. — Amanhã?", "— Завтра. — Завтра?")] }
    ],
    examples: [ex("Vais amanhã?", "Ти йдеш завтра?", { purpose: "comprehension" }), ex("— Amanhã. — Amanhã?", "— Завтра. — Завтра?", { purpose: "contrast" })],
    mistakes: [mistake("вважати, що пунктуація повністю передає інтонацію", "розрізняти графічне оформлення та реальну просодичну реалізацію", "У письмі частину інтонаційної інформації доводиться відновлювати з контексту.", "predicted-l1-transfer", "medium")],
    ukrainian: "В українській інтонація також змінює інтерпретацію без обов'язкової зміни слів. Це добра функціональна аналогія, але конкретні просодичні контури не варто переносити механічно.",
    regional: "Просодія варіює між мовцями, регіонами та ситуаціями; письмові приклади не відтворюють повної інтонаційної структури.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "sentence-type-vs-punctuation", slug: "sentence-type-vs-punctuation", category: "syntax",
    titleUk: "Тип речення та пунктуація", titlePt: "Tipo de frase e pontuação", titleEn: "Sentence type vs punctuation",
    summary: "Чому знак питання або оклику не є повним описом граматичного типу речення.",
    aliases: ["тип речення та пунктуація", "sentence type vs punctuation", "tipo de frase e pontuação"],
    related: ["sentence-types-overview", "punctuation", "question-intonation", "exclamatives"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Пунктуація допомагає оформити висловлення на письмі, але граматичний тип речення визначається не лише знаком наприкінці. Питальне речення може мати різні структурні моделі, а окличність може передаватися і без окличного знака в неформальному цифровому письмі. Тому знак пунктуації не слід використовувати як єдиний діагностичний критерій.",
    definition: "Співвідношення типу речення та пунктуації — взаємодія граматичної структури з графічним оформленням, яке сигналізує читачеві про частину синтаксичної та прагматичної інтерпретації.",
    uses: [
      { title: "Питання", body: "Знак питання є стандартним графічним сигналом питального висловлення, але не описує всі його синтаксичні властивості.", examples: [ex("Quem vem amanhã?", "Хто прийде завтра?")] },
      { title: "Окличність", body: "Знак оклику може підсилювати окличну інтерпретацію, але її джерело не зводиться до самого знака.", examples: [ex("Que surpresa!", "Яка несподіванка!")] }
    ],
    examples: [ex("Quem vem amanhã?", "Хто прийде завтра?", { purpose: "comprehension" }), ex("Que surpresa!", "Яка несподіванка!", { purpose: "production" })],
    mistakes: [mistake("вважати знак ? або ! достатнім для граматичного аналізу", "спочатку визначати синтаксичну форму, а потім її графічне оформлення та прагматичний ефект", "Пунктуація сигналізує інтерпретацію, але не замінює граматичного опису.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська має подібний принцип: знак питання чи оклику важливий, але не визначає саму синтаксичну структуру. Спільність системи не означає повної тотожності правил оформлення.",
    regional: "Нормативні правила пунктуації залежать від писемного стандарту й жанру; цифрове неформальне письмо може використовувати додаткові стилістичні засоби.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "sentence-type-variation-pt-br-pt-pt", slug: "sentence-type-variation-pt-br-pt-pt", category: "regional",
    titleUk: "Типи речень у PT-BR та PT-PT", titlePt: "Variação dos tipos de frase no PT-BR e no PT-PT", titleEn: "Sentence-type variation across PT-BR and PT-PT",
    summary: "Як різновиди португальської можуть по-різному реалізовувати питання, директиви та інші типи висловлень.",
    aliases: ["PT-BR PT-PT типи речень", "sentence-type variation", "variação dos tipos de frase"],
    related: ["pt-br-pt-pt", "questions-yesno", "imperative-affirmative", "sentence-type-vs-speech-act"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "PT-BR і PT-PT мають спільну систему основних типів речень, але окремі моделі їх реалізації можуть відрізнятися за частотністю, регістром, просодією або синтаксичними уподобаннями. Такі відмінності треба описувати конкретно: «частіше», «у певному регістрі» або «в певному різновиді», а не перетворювати на бінарне правило «BR проти PT».",
    definition: "Варіативність типів речень — систематичні або контекстуально зумовлені відмінності в реалізації однакової комунікативної функції між різновидами португальської.",
    uses: [
      { title: "Питальні моделі", body: "Питальні конструкції можуть відрізнятися за просодією та поширеністю окремих структур у PT-BR і PT-PT.", examples: [ex("Você vem amanhã?", "Ти прийдеш завтра?")] },
      { title: "Директиви", body: "Форми звернення й імперативу взаємодіють із локальними нормами вживання та соціальною дистанцією.", examples: [ex("Venha comigo.", "Ходімо зі мною / Ідіть зі мною.")] }
    ],
    examples: [ex("Você vem amanhã?", "Ти прийдеш завтра?", { purpose: "contrast" }), ex("Venha comigo.", "Ходімо зі мною / Ідіть зі мною.", { purpose: "comprehension" })],
    mistakes: [mistake("зводити всі відмінності PT-BR/PT-PT до двох взаємовиключних стандартів", "для кожної моделі перевіряти різновид, регістр, частотність і нормативний статус окремо", "Варіативність може бути градуальною та контекстуальною, а не бінарною.", "predicted-l1-transfer", "high")],
    ukrainian: "Українськомовному студентові корисно спершу засвоїти спільну функцію конструкції, а потім окремо вивчати відмінності різновидів. Це зменшує ризик сприймати одну локальну модель як універсальну.",
    regional: "Ця сторінка навмисно не робить конкретних частотних або нормативних висновків без точнішої джерельної прив'язки. Для кожної окремої моделі потрібні спеціалізовані дані про PT-BR і PT-PT.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "illocutionary-force-and-grammatical-form", slug: "illocutionary-force-and-grammatical-form", category: "pragmatics",
    titleUk: "Іллокутивна сила та граматична форма", titlePt: "Força ilocutória e forma gramatical", titleEn: "Illocutionary force and grammatical form",
    summary: "Як граматична форма сигналізує комунікативну дію, але не визначає її повністю.",
    aliases: ["іллокутивна сила", "illocutionary force", "força ilocutória"],
    related: ["speech-acts", "sentence-type-vs-speech-act", "politeness", "register-and-directness"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Іллокутивна сила описує, яку комунікативну дію виконує висловлення: запит, прохання, наказ, обіцянку, попередження тощо. Граматична форма часто дає підказку, але контекст може змінювати або уточнювати цю інтерпретацію. Для навчання корисно відділяти форму речення від дії мовця.",
    definition: "Іллокутивна сила — комунікативна дія, яку мовець здійснює висловленням; граматична форма є одним із засобів її кодування або сигналізації.",
    uses: [
      { title: "Директивна сила", body: "Імперативні та інші конструкції можуть спонукати адресата до дії.", examples: [ex("Feche a porta.", "Зачиніть двері.")] },
      { title: "Непрямий запит або прохання", body: "Питальна форма може мати директивну силу, якщо контекст робить прохання основною дією.", examples: [ex("Pode abrir a janela?", "Можете відчинити вікно?")] }
    ],
    examples: [ex("Feche a porta.", "Зачиніть двері.", { purpose: "production" }), ex("Pode abrir a janela?", "Можете відчинити вікно?", { purpose: "contrast" })],
    mistakes: [mistake("ототожнювати граматичний тип із єдиною можливою іллокутивною силою", "визначати форму окремо від комунікативної дії та враховувати контекст", "Форма є сигналом, але інтерпретація іллокутивної сили залежить також від ситуації.", "predicted-l1-transfer", "high")],
    ukrainian: "Українська також має прямі й непрямі мовленнєві акти. Це дає сильну функціональну аналогію, але соціальна інтерпретація конкретних форм може не збігатися.",
    regional: "Іллокутивна інтерпретація чутлива до контексту, інтонації, соціальної дистанції та регістру; для конкретних форм потрібне окреме описання їхнього вживання.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  }),
  page({
    id: "grammaticalisation-of-discourse-functions", slug: "grammaticalisation-of-discourse-functions", category: "discourse",
    titleUk: "Граматикалізація дискурсивних функцій", titlePt: "Gramaticalização de funções discursivas", titleEn: "Grammaticalisation of discourse functions",
    summary: "Як повторювані дискурсивні функції можуть закріплюватися в граматичних або конструкційних моделях.",
    aliases: ["граматикалізація дискурсивних функцій", "grammaticalisation", "gramaticalização"],
    related: ["discourse-markers", "modal-particles", "sentence-type-vs-speech-act", "pragmatics-overview"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Дискурсивні значення не завжди залишаються вільними прагматичними ефектами. У мовній системі певні повторювані моделі можуть закріплюватися як конструкції з передбачуваною функцією, а лексичні елементи можуть набувати граматичних або дискурсивних властивостей. Для довідника важливо не називати будь-яке часте дискурсивне вживання граматикалізацією: це окреме історичне й функціональне твердження.",
    definition: "Граматикалізація — процес, за якого мовна одиниця або конструкція набуває більш граматизованої функції та/або втрачає частину первісної лексичної автономності; дискурсивні функції можуть бути частиною такого процесу.",
    uses: [
      { title: "Конструкційне закріплення", body: "Повторюваний контекст може сприяти тому, що певна форма сприймається як усталена конструкція з окремою функцією.", examples: [ex("Tomara que corra tudo bem.", "Хотілося б, щоб усе добре склалося.")] },
      { title: "Дискурсивна спеціалізація", body: "Елементи, що походять із лексичних або граматичних ресурсів, можуть виконувати спеціалізовані організаційні функції в дискурсі.", examples: [ex("Enfim, vamos continuar.", "Зрештою, продовжімо.")] }
    ],
    examples: [ex("Tomara que corra tudo bem.", "Хотілося б, щоб усе добре склалося.", { purpose: "comprehension" }), ex("Enfim, vamos continuar.", "Зрештою, продовжімо.", { purpose: "contrast" })],
    mistakes: [mistake("називати будь-яку прагматичну функцію граматикалізацією", "відрізняти синхронну функцію конструкції від історичного процесу її формування", "Граматикалізація — спеціалізований термін, який не слід використовувати як синонім «часто вживається в дискурсі».", "predicted-l1-transfer", "high")],
    ukrainian: "В українській також є усталені дискурсивні конструкції, але історію й ступінь граматикалізації конкретної португальської моделі не можна виводити з українського відповідника.",
    regional: "Ця тема потребує особливо обережного розмежування синхронної варіативності та діахронічного процесу. Конкретні твердження про етапи граматикалізації слід підтверджувати історичними або спеціалізованими джерелами.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  })
];
