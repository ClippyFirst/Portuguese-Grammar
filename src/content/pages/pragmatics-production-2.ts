import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const G = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const C = "https://ciberduvidas.iscte-iul.pt/consultorio/areas/gramatica/3";
const CAM = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "pragmatics-overview", slug: "pragmatics-overview", category: "pragmatics",
    titleUk: "Прагматика: значення в контексті", titlePt: "Pragmática", titleEn: "Pragmatics",
    summary: "Як контекст, намір мовця, спільне знання та ситуація змінюють інтерпретацію граматично можливого висловлення.",
    aliases: ["прагматика", "pragmatics", "pragmática", "значення в контексті"],
    related: ["speech-acts", "politeness", "register-and-directness", "modal-particles", "discourse-markers"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Прагматика вивчає не лише те, що буквально закодовано словами й граматикою, а й те, що мовець робить цим висловленням у конкретній ситуації. Питання «Você pode fechar a janela?» формально запитує про здатність, але в типовому контексті може бути проханням. Водночас прагматичний висновок не скасовує граматичного значення: він виникає з поєднання форми, контексту, інтонації та спільного знання.",
    definition: "Прагматика — дослідження того, як мовні висловлення отримують інтерпретацію в конкретній комунікативній ситуації, включно з наміром мовця, адресатом, контекстом і непрямими значеннями.",
    formation: "Для аналізу прагматичного значення розділяйте: (1) буквальний зміст висловлення; (2) мовленнєву дію; (3) контекстуальні висновки. Одна й та сама форма може виконувати різні дії: Pode esperar? може бути питанням про можливість або ввічливим проханням. Вибір tu/você, умовного способу, часток і дискурсивних маркерів також змінює соціальну та комунікативну інтерпретацію.",
    uses: [
      { title: "Непряме прохання", body: "Питальна форма може функціонувати як прохання, якщо ситуація робить таку інтерпретацію очевидною.", examples: [
        ex("Pode fechar a janela, por favor?", "Можете/можеш зачинити вікно, будь ласка?", { purpose: "production" }),
        ex("Você pode esperar um minuto?", "Можете/можеш зачекати хвилину?", { variety: "BR", purpose: "production" })
      ] },
      { title: "Контекст змінює інтерпретацію", body: "Граматична форма сама по собі не завжди визначає комунікативну функцію.", examples: [
        ex("Você vem amanhã?", "Ти/ви прийдеш/прийдете завтра?", { purpose: "production" }),
        ex("Você vem comigo?", "Ти/ви йдеш/ідете зі мною?", { purpose: "comprehension" })
      ] },
      { title: "Соціальна дистанція", body: "Форма звертання є частиною прагматичної організації розмови.", examples: [
        ex("O senhor pode entrar.", "Ви можете увійти.", { register: "formal", purpose: "production" }),
        ex("Podes entrar.", "Можеш увійти.", { variety: "PT", purpose: "production" })
      ] },
      { title: "Буквальний зміст і висновок", body: "Імпліцитне значення треба відрізняти від того, що прямо сказано.", examples: [
        ex("Está frio aqui.", "Тут холодно.", { purpose: "contrast" }),
        ex("Está frio aqui. Pode fechar a janela?", "Тут холодно. Можете зачинити вікно?", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Pode fechar a janela, por favor?", "Можете/можеш зачинити вікно, будь ласка?", { purpose: "production" }),
      ex("Você vem amanhã?", "Ти/ви прийдеш/прийдете завтра?", { purpose: "production" }),
      ex("O senhor pode entrar.", "Ви можете увійти.", { register: "formal", purpose: "production" })
    ],
    mistakes: [
      mistake("вважати буквальний переклад повним значенням висловлення", "відокремлювати семантичний зміст від прагматичної дії", "Pode fechar? у ситуації може бути проханням, а не тестом фізичної можливості.", "predicted-l1-transfer", "high"),
      mistake("вважати tu/você лише граматичними синонімами", "враховувати соціальну ситуацію та різновид мови", "Форми звертання мають соціально-прагматичні наслідки.", "predicted-l1-transfer", "high"),
      mistake("виводити намір мовця без контексту", "розглядати кілька можливих інтерпретацій", "Одне речення може виконувати різні мовленнєві дії.", "editorial", "high")
    ],
    ukrainian: "Українська також широко використовує непрямі прохання, наприклад «Чи можете ви зачинити вікно?». Тому принцип зрозумілий, але конкретні форми ввічливості, звертання та частки португальської треба засвоювати окремо.",
    regional: "Прагматичні норми особливо чутливі до регіону, покоління та соціальної ситуації. Не переносіть оцінку ввічливості з PT-BR на PT-PT або навпаки без контексту.",
    brPt: "У PT-BR і PT-PT непрямі прохання та модальні форми поширені, але вибір займенників звертання, дієслівних форм і дискурсивних стратегій може відрізнятися.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: G },
      { label: "Ciberdúvidas — Gramática", url: C },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  }),

  page({
    id: "speech-acts", slug: "speech-acts", category: "pragmatics",
    titleUk: "Мовленнєві акти", titlePt: "Atos de fala", titleEn: "Speech acts",
    summary: "Як граматична форма реалізує прохання, наказ, обіцянку, пораду, запрошення, відмову та інші комунікативні дії.",
    aliases: ["мовленнєві акти", "speech acts", "atos de fala", "комунікативні дії"],
    related: ["pragmatics-overview", "politeness", "register-and-directness", "imperative", "questions-yesno"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Речення має не лише пропозиційний зміст, а й комунікативну функцію. «Fecha a porta.» може бути наказом, але в іншій ситуації та сама імперативна форма може бути інструкцією або категоричним проханням. Так само питання може бути справжнім запитом інформації, пропозицією або непрямим проханням. Для граматичного довідника важливо показати, які форми найчастіше пов'язані з конкретними мовленнєвими актами, не перетворюючи прагматику на жорстку таблицю «форма = функція».",
    definition: "Мовленнєвий акт — комунікативна дія, яку мовець здійснює висловленням: запитує, просить, наказує, радить, обіцяє, запрошує, погоджується тощо.",
    formation: "Мовленнєва дія формується взаємодією граматики, лексики, інтонації та контексту. Наказ часто виражається imperativo: Fecha a porta. Прохання може використовувати imperativo, poder + infinitivo, умовну форму або маркери ввічливості. Обіцянка часто має explícito «eu prometo», але може бути й імпліцитною: Eu faço isso amanhã. Тому аналізуйте не лише дієслівний спосіб.",
    uses: [
      { title: "Наказ та інструкція", body: "Imperativo прямо орієнтує адресата на виконання дії.", examples: [
        ex("Fecha a porta.", "Зачини двері.", { variety: "PT", purpose: "production" }),
        ex("Não mexa nisso.", "Не чіпайте цього.", { variety: "BR", purpose: "production" })
      ] },
      { title: "Прохання", body: "Прохання часто пом'якшується питанням або por favor.", examples: [
        ex("Pode ajudar-me, por favor?", "Можете мені допомогти, будь ласка?", { variety: "PT", purpose: "production" }),
        ex("Você pode me ajudar, por favor?", "Можете/можеш мені допомогти, будь ласка?", { variety: "BR", purpose: "production" })
      ] },
      { title: "Порада", body: "Порада може бути виражена імперативом, dever або умовною конструкцією.", examples: [
        ex("Devias descansar mais.", "Тобі варто більше відпочивати.", { variety: "PT", purpose: "production" }),
        ex("Você deveria descansar mais.", "Вам/тобі варто більше відпочивати.", { variety: "BR", purpose: "production" })
      ] },
      { title: "Запрошення та пропозиція", body: "Питання й формули першої особи множини можуть виконувати функцію запрошення.", examples: [
        ex("Vamos jantar?", "Повечеряємо?", { purpose: "production" }),
        ex("Quer vir connosco?", "Хочеш піти з нами?", { variety: "PT", purpose: "production" })
      ] }
    ],
    examples: [
      ex("Fecha a porta.", "Зачини двері.", { variety: "PT", purpose: "production" }),
      ex("Pode ajudar-me, por favor?", "Можете мені допомогти, будь ласка?", { variety: "PT", purpose: "production" }),
      ex("Vamos jantar?", "Повечеряємо?", { purpose: "production" })
    ],
    mistakes: [
      mistake("вважати imperativo завжди грубим", "відокремлювати граматичну форму від соціальної інтерпретації", "Контекст, por favor, інтонація та стосунки між співрозмовниками впливають на ввічливість.", "predicted-l1-transfer", "high"),
      mistake("вважати питання лише запитом інформації", "перевіряти прагматичну функцію", "Vamos jantar? може бути запрошенням.", "editorial", "high"),
      mistake("вважати одну форму єдиним способом виконати мовленнєвий акт", "вивчати функціональну парадигму", "Прохання можна будувати кількома граматичними способами.", "editorial", "medium")
    ],
    ukrainian: "Українська має дуже подібний набір стратегій: «Зачини двері», «Чи можете зачинити двері?», «Може, зачинити двері?». Відмінності виникають у формах звертання, дієслівних моделях і прийнятності окремих стратегій.",
    regional: "Норми прямоти й ввічливості істотно залежать від спільноти та ситуації. Граматична можливість не означає однакову прагматичну природність у PT-BR та PT-PT.",
    brPt: "У PT-BR частіше зустрічаються конструкції з você та розмовними займенниковими позиціями; у PT-PT важливими є tu та традиційні клитичні моделі. Це не означає, що одна стратегія є універсальною.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: G },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  }),

  page({
    id: "politeness", slug: "politeness", category: "pragmatics",
    titleUk: "Ввічливість і соціальна дистанція", titlePt: "Cortesia e distância social", titleEn: "Politeness and social distance",
    summary: "Як звертання, модальність, умовні форми, пом'якшення та непрямість організують соціально прийнятне спілкування.",
    aliases: ["ввічливість", "politeness", "cortesia", "соціальна дистанція"],
    related: ["pragmatics-overview", "speech-acts", "tu-voce", "forms-of-address", "register-and-directness"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Ввічливість у португальській не зводиться до одного займенника. На неї впливають форма звертання, вибір дієслова, імператив чи питання, умовний спосіб, слова por favor та obrigado/a, ступінь прямоти й відносини між учасниками. Тому конструкція може бути граматично правильною, але прагматично недоречною в конкретній ситуації.",
    definition: "Мовна ввічливість — сукупність стратегій, за допомогою яких мовець регулює прямоту, соціальну дистанцію, повагу, солідарність і можливе навантаження прохання на адресата.",
    formation: "Типові стратегії включають вибір форми звертання, умовні конструкції, питання замість прямого наказу, пом'якшувачі та подяку. Наприклад, Pode ajudar-me? менш пряме за Ajude-me. Однак ступінь ввічливості не є абсолютною властивістю форми: роль відіграють інтонація, статус співрозмовників і ситуація.",
    uses: [
      { title: "Форма звертання", body: "tu, você, o senhor/a senhora та інші форми кодують соціальну дистанцію по-різному залежно від регіону.", examples: [
        ex("Tu podes ajudar-me?", "Ти можеш мені допомогти?", { variety: "PT", purpose: "production" }),
        ex("O senhor pode ajudar-me?", "Ви можете мені допомогти?", { register: "formal", purpose: "production" })
      ] },
      { title: "Непряме прохання", body: "Питальна форма з poder часто пом'якшує прохання.", examples: [
        ex("Pode fechar a porta, por favor?", "Можете зачинити двері, будь ласка?", { purpose: "production" }),
        ex("Poderia enviar-me o documento?", "Чи могли б ви надіслати мені документ?", { register: "formal", purpose: "production" })
      ] },
      { title: "Подяка та реакція", body: "Формули подяки є частиною прагматичної організації взаємодії.", examples: [
        ex("Obrigado pela ajuda.", "Дякую за допомогу.", { purpose: "production" }),
        ex("Obrigada pela ajuda.", "Дякую за допомогу.", { purpose: "production" })
      ] },
      { title: "Прямота залежить від контексту", body: "Imperativo не має фіксованої оцінки «неввічливий»: між близькими людьми він може бути нейтральним.", examples: [
        ex("Entra!", "Заходь!", { variety: "PT", purpose: "contrast" }),
        ex("Por favor, entre.", "Будь ласка, заходьте.", { register: "formal", purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Poderia enviar-me o documento?", "Чи могли б ви надіслати мені документ?", { register: "formal", purpose: "production" }),
      ex("Obrigado pela ajuda.", "Дякую за допомогу.", { purpose: "production" }),
      ex("O senhor pode ajudar-me?", "Ви можете мені допомогти?", { register: "formal", purpose: "production" })
    ],
    mistakes: [
      mistake("вважати você автоматично ввічливішим за tu", "враховувати регіон і соціальну систему звертання", "Розподіл tu/você не однаковий у всіх португаломовних спільнотах.", "predicted-l1-transfer", "high"),
      mistake("вважати imperativo автоматично неввічливим", "оцінювати ситуацію, стосунки та інтонацію", "Прямота не дорівнює неввічливості.", "editorial", "high"),
      mistake("використовувати формальну стратегію в будь-якій ситуації", "підбирати регістр до адресата", "Надмірна формальність також може бути прагматично неприродною.", "editorial", "medium")
    ],
    ukrainian: "Українська теж розрізняє «ти/ви» та має непрямі прохання. Але португальська система звертання має іншу географічну структуру, тому українське «ви» не можна просто ототожнювати з você або o senhor.",
    regional: "Це одна з найбільш регіонально чутливих тем. PT-BR та PT-PT можуть по-різному розподіляти tu, você та формальні звертання.",
    brPt: "PT-BR часто використовує você у широкому діапазоні ситуацій, але його соціальне значення залежить від регіону. PT-PT зберігає інші моделі розподілу tu та форм звертання. Не робіть висновків про ввічливість лише з форми.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: G },
      { label: "Ciberdúvidas — Gramática", url: C },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  }),

  page({
    id: "register-and-directness", slug: "register-and-directness", category: "pragmatics",
    titleUk: "Регістр, прямота і стиль", titlePt: "Registo, diretividade e estilo", titleEn: "Register, directness and style",
    summary: "Як вибір конструкції залежить від формальності, жанру, близькості між співрозмовниками та бажаного ступеня прямоти.",
    aliases: ["регістр і прямота", "register and directness", "registo", "directness"],
    related: ["pragmatics-overview", "speech-acts", "politeness", "forms-of-address", "discourse-markers"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Одна комунікативна мета може мати кілька граматичних реалізацій із різним регістром. «Manda-me o ficheiro», «Podes enviar-me o ficheiro?» і «Poderia enviar-me o documento?» можуть стосуватися тієї самої практичної дії, але не є стилістично взаємозамінними в кожній ситуації. Регістр — не шкала «правильно/неправильно», а відповідність мовної форми ситуації.",
    definition: "Регістр — сукупність мовних виборів, пов'язаних із комунікативною ситуацією, жанром, стосунками між учасниками та ступенем формальності.",
    formation: "Для оцінки регістру порівнюйте не окреме слово, а всю конструкцію. Прямий імператив, модальне питання, умовна форма, лексика звертання й дискурсивні маркери разом створюють стиль. Письмовий офіційний текст може вимагати більш експліцитних форм, тоді як дружня розмова допускає еліпсис та пряміші конструкції.",
    uses: [
      { title: "Нейтральне прохання", body: "Питання з poder може бути універсальнішим за прямий імператив у багатьох ситуаціях.", examples: [
        ex("Pode enviar o ficheiro?", "Можете надіслати файл?", { purpose: "production" }),
        ex("Você pode enviar o arquivo?", "Можете/можеш надіслати файл?", { variety: "BR", purpose: "production" })
      ] },
      { title: "Формальний письмовий стиль", body: "У формальному листуванні частіше використовуються непрямі та експліцитні формули.", examples: [
        ex("Poderia enviar-nos o documento?", "Чи могли б ви надіслати нам документ?", { register: "formal", purpose: "production" }),
        ex("Agradeço o seu contacto.", "Дякую за ваше звернення.", { register: "formal", purpose: "production" })
      ] },
      { title: "Розмовна прямота", body: "Між близькими співрозмовниками коротша конструкція може бути цілком природною.", examples: [
        ex("Manda-me o ficheiro.", "Надішли мені файл.", { variety: "PT", purpose: "production" }),
        ex("Me manda o arquivo.", "Надішли мені файл.", { variety: "BR", purpose: "production" })
      ] },
      { title: "Регістр не дорівнює варіанту мови", body: "PT-BR/PT-PT та formal/informal — різні параметри, які можуть перетинатися.", examples: [
        ex("Poderia enviar o documento?", "Чи могли б ви надіслати документ?", { purpose: "contrast" }),
        ex("Você pode mandar o documento?", "Можете/можеш надіслати документ?", { variety: "BR", purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Pode enviar o ficheiro?", "Можете надіслати файл?", { purpose: "production" }),
      ex("Poderia enviar-nos o documento?", "Чи могли б ви надіслати нам документ?", { register: "formal", purpose: "production" }),
      ex("Manda-me o ficheiro.", "Надішли мені файл.", { variety: "PT", purpose: "production" })
    ],
    mistakes: [
      mistake("називати розмовну форму «неправильною» лише через неформальність", "розрізняти граматичність і регістр", "Розмовна конструкція може бути нормативною в своєму контексті.", "editorial", "high"),
      mistake("змішувати PT-BR/PT-PT з formal/informal", "розглядати регіон і регістр як окремі параметри", "Форма може бути бразильською й водночас формальною або європейською й розмовною.", "editorial", "high"),
      mistake("переносити стиль українського ділового листа дослівно", "вивчати португальські жанрові формули", "Дослівний переклад може звучати надмірно прямолінійно або штучно.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українська також розрізняє офіційне та неофіційне спілкування, але португальські формули звертання й ступінь прямоти не мають однозначних українських відповідників. Особливо обережно перекладайте ділові прохання.",
    regional: "Регіон, регістр, покоління й соціальна група можуть взаємодіяти. Нейтральність конструкції треба оцінювати в конкретному різновиді.",
    brPt: "У PT-BR та PT-PT різняться не лише окремі слова, а й частотність займенникових та клитичних стратегій. Для формального письма обох різновидів потрібні окремі жанрові моделі.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: G },
      { label: "Ciberdúvidas — Gramática", url: C }
    ]
  })
];
