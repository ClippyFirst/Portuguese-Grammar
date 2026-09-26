import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const sources = [
  { label: "Fundação Calouste Gulbenkian — Gramática do Português", url: "https://gulbenkian.pt/publications/gramatica-do-portugues/" },
  { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }
];

export const pages: GrammarPage[] = [
  page({
    id: "restriction-exclusion-adverbs", slug: "restriction-exclusion-adverbs", category: "adverbs",
    titleUk: "Прислівники обмеження та виключення", titlePt: "Advérbios de restrição e exclusão", titleEn: "Restriction and exclusion adverbs",
    summary: "Só, apenas, somente, exclusivamente та споріднені засоби: обмеження множини можливостей і виключення альтернатив.",
    aliases: ["прислівники обмеження","прислівники виключення","restriction adverbs","advérbios de restrição"],
    related: ["focus-adverbs","adverb-scope","adverb-position","negative-adverbs"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Обмежувальні прислівники не просто додають ще одну обставину. Вони звужують область твердження: só та apenas можуть показувати, що релевантним є один елемент, одна кількість, одна дія або один часовий відрізок. Для аналізу важливо встановити, до якого саме компонента належить обмеження, бо позиція може змінювати інтерпретацію.",
    definition: "Обмежувальний прислівник модифікує висловлення або його компонент так, що множина релевантних альтернатив звужується; виключальний ефект заперечує релевантність інших альтернатив.",
    formulas: [
      { label: "Обмеження суб'єкта", pattern: "Só X + V", note: "Тільки X має відповідну властивість." },
      { label: "Обмеження об'єкта", pattern: "V + só X", note: "Дія поширюється лише на X." },
      { label: "Обмеження кількості", pattern: "só + numeral", note: "Обмежується кількісна величина." }
    ],
    formation: "Найтиповіші одиниці — só, apenas, somente, exclusivamente. Їхня семантика перетинається з фокусуванням: різницю слід встановлювати за областю дії та контекстом, а не за перекладом «лише/тільки».",
    uses: [
      { title: "Обмеження учасника", body: "só перед фокусним компонентом обмежує множину альтернатив.", examples: [ex("Só a Ana respondeu.", "Лише Ана відповіла.", { purpose: "production" })] },
      { title: "Обмеження дії", body: "Прислівник може звужувати не учасника, а спосіб інтерпретації дії.", examples: [ex("Ele só respondeu à pergunta.", "Він лише відповів на запитання.", { purpose: "contrast" })] },
      { title: "Обмеження кількості", body: "apenas може модифікувати числову величину.", examples: [ex("Tenho apenas duas horas.", "У мене лише дві години.", { purpose: "production" })] }
    ],
    examples: [
      ex("Só a Ana respondeu.", "Лише Ана відповіла.", { purpose: "production" }),
      ex("Tenho apenas duas horas.", "У мене лише дві години.", { purpose: "production" }),
      ex("Ele só comprou o livro.", "Він купив лише книжку.", { purpose: "contrast" }),
      ex("Somente os membros podem entrar.", "Увійти можуть лише члени.", { purpose: "comprehension" })
    ],
    nonUses: ["Не визначайте область дії лише за найближчим словом.", "Не прирівнюйте só до заперечення всього речення.", "Не вважайте só, apenas і somente абсолютно взаємозамінними в кожному стилі."],
    markers: ["só","apenas","somente","exclusivamente"],
    mistakes: [
      mistake("Ele só não veio = «він прийшов і тільки щось не зробив» у будь-якому контексті", "визначати scope só та заперечення окремо", "Поєднання обмеження й negação може мати кілька структурних читань."),
      mistake("ставити só випадково, не перевіряючи фокус", "перевіряти, який компонент обмежується", "Переміщення може змінити область дії.")
    ],
    ukrainian: "Українські «лише», «тільки», «всього» теж мають фокусувальну та обмежувальну поведінку. Португальська позиція só/apenas не завжди копіює українську, особливо в реченнях із запереченням.",
    comparisonUk: "Порівнюйте структуру «лише X» із португальським só X, але окремо перевіряйте, чи обмежується суб'єкт, об'єкт, дія, час або кількість.",
    regional: "só, apenas і somente широко зрозумілі в португаломовному просторі. Розподіл частотності та стилістичний профіль може залежати від різновиду й жанру; це не слід перетворювати на абсолютну PT-BR/PT-PT межу.",
    sources
  }),
  page({
    id: "evaluative-adverbs", slug: "evaluative-adverbs", category: "adverbs",
    titleUk: "Оцінні прислівники", titlePt: "Advérbios avaliativos", titleEn: "Evaluative adverbs",
    summary: "Мовні засоби, що виражають оцінку мовця щодо події, способу дії або пропозиційного змісту.",
    aliases: ["оцінні прислівники","evaluative adverbs","advérbios avaliativos"],
    related: ["sentence-adverbs","epistemic-adverbs","discourse-pragmatic-adverbs","adverb-scope"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Оцінний прислівник може описувати не саму подію, а ставлення мовця до неї. У конструкціях felizmente, infelizmente, lamentavelmente та подібних формах важливо розрізняти обставинне значення від коментаря до всього висловлення. Оцінка є семантичною функцією, а не автоматично окремою морфологічною підкатегорією.",
    definition: "Оцінний прислівник або прислівниковий засіб кодує позитивну, негативну чи іншу оцінку ситуації, її наслідків або способу подання.",
    formulas: [
      { label: "Оцінка всього висловлення", pattern: "ADV, oração", note: "Прислівник коментує пропозиційний зміст." },
      { label: "Оцінка дії", pattern: "V + ADV", note: "Оцінка може стосуватися способу виконання дії." }
    ],
    formation: "Багато оцінних форм походять від прикметників за допомогою -mente: felizmente, infelizmente, lamentavelmente. Проте семантична роль визначається контекстом і областю дії.",
    uses: [
      { title: "Коментар до ситуації", body: "felizmente та infelizmente можуть оцінювати весь факт.", examples: [ex("Felizmente, chegámos a tempo.", "На щастя, ми встигли.", { purpose: "contrast" })] },
      { title: "Оцінка способу", body: "Деякі прислівники можуть описувати, як виконано дію.", examples: [ex("Ele respondeu educadamente.", "Він відповів ввічливо.", { purpose: "production" })] },
      { title: "Оцінка й епістемічність", body: "Оцінний коментар не тотожний оцінці істинності.", examples: [ex("Infelizmente, a decisão foi mantida.", "На жаль, рішення залишили в силі.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Felizmente, chegámos a tempo.", "На щастя, ми встигли.", { purpose: "contrast" }),
      ex("Infelizmente, a decisão foi mantida.", "На жаль, рішення залишили в силі.", { purpose: "contrast" }),
      ex("Ele respondeu educadamente.", "Він відповів ввічливо.", { purpose: "production" }),
      ex("Lamentavelmente, o problema continua.", "На жаль, проблема триває.", { purpose: "comprehension" })
    ],
    nonUses: ["Не називайте кожен прислівник із -mente оцінним.", "Не змішуйте оцінку ситуації з оцінкою ймовірності.", "Не робіть висновок про ставлення мовця без аналізу конкретного контексту."],
    markers: ["felizmente","infelizmente","lamentavelmente","educadamente"],
    mistakes: [
      mistake("перекладати всі форми на -mente як обставини способу", "визначати область дії прислівника", "Частина форм коментує всю пропозицію."),
      mistake("вважати infelizmente показником непевності", "відрізняти оцінність від епістемічної модальності", "Негативна оцінка не повідомляє автоматично про істинність.")
    ],
    ukrainian: "Українська також має «на щастя», «на жаль», «вдало», «невдало» та прислівникові форми на -о/-е. Відмінність полягає не в наявності самої функції, а в конкретній синтаксичній реалізації та позиції.",
    comparisonUk: "Українське «на жаль» часто відповідає португальському infelizmente або lamentavelmente, але не всі контексти дозволяють механічну заміну.",
    regional: "Базові оцінні форми загальнозрозумілі. Частотність окремих книжних форм залежить від жанру та регістру, тому регіональні висновки треба робити на основі конкретних джерел.",
    sources
  }),
  page({
    id: "interrogative-adverbs", slug: "interrogative-adverbs", category: "adverbs",
    titleUk: "Питальні прислівники", titlePt: "Advérbios interrogativos", titleEn: "Interrogative adverbs",
    summary: "onde, quando, como, por que та інші прислівникові питальні засоби й особливості їхньої синтаксичної позиції.",
    aliases: ["питальні прислівники","interrogative adverbs","advérbios interrogativos"],
    related: ["wh-questions","interrogative-pronouns","adverb-position","preposition-interrogative"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Питальний прислівник відкриває невизначену позицію в структурі питання: місце, час, спосіб, причину тощо. У португальській onde, quando, como та por que поводяться як частини interrogative system, але їх не слід змішувати з питальними займенниками. Для українського учня особливо важливо розрізняти por que як питальну конструкцію та porque як причинний сполучниковий засіб.",
    definition: "Питальний прислівник — незмінна питальна одиниця, що запитує про обставинний параметр ситуації або спосіб інтерпретації.",
    formulas: [
      { label: "Місце", pattern: "Onde + V...?", note: "Питання про локалізацію." },
      { label: "Час", pattern: "Quando + V...?", note: "Питання про часовий параметр." },
      { label: "Спосіб", pattern: "Como + V...?", note: "Питання про спосіб або стан." },
      { label: "Причина", pattern: "Por que + V...?", note: "Питання про причину." }
    ],
    formation: "Основні форми — onde, quando, como, por que. Вони можуть поєднуватися з прийменниками або входити до ширших питальних конструкцій. Позиція wh-елемента залежить від типу питання та різновиду португальської.",
    uses: [
      { title: "Місце", body: "onde запитує про місце.", examples: [ex("Onde moras?", "Де ти живеш?", { purpose: "production" })] },
      { title: "Час", body: "quando запитує про час.", examples: [ex("Quando começa a reunião?", "Коли починається зустріч?", { purpose: "production" })] },
      { title: "Спосіб", body: "como може запитувати про спосіб, стан або процедуру.", examples: [ex("Como fizeste isso?", "Як ти це зробив?", { purpose: "production" })] },
      { title: "Причина", body: "por que запитує про причину; написання треба відрізняти від porque.", examples: [ex("Por que saíste cedo?", "Чому ти пішов рано?", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Onde moras?", "Де ти живеш?", { purpose: "production" }),
      ex("Quando começa a reunião?", "Коли починається зустріч?", { purpose: "production" }),
      ex("Como fizeste isso?", "Як ти це зробив?", { purpose: "production" }),
      ex("Por que saíste cedo?", "Чому ти пішов рано?", { purpose: "contrast" })
    ],
    nonUses: ["Не називайте onde, quando і como займенниками лише через їхню питальну функцію.", "Не змішуйте por que з porque, porquê та por quê.", "Не припускайте, що порядок слів у всіх PT-BR/PT-PT питаннях однаковий."],
    markers: ["onde","quando","como","por que"],
    mistakes: [
      mistake("Porque saíste cedo? як єдине нормативне написання для всіх питань", "Por que saíste cedo? у відповідній питальній конструкції", "Питальна та причинна форми мають різне написання й функцію."),
      mistake("де = де завжди без прийменника", "аналізувати прийменникову конструкцію перед interrogative", "Питальний компонент може бути частиною prepositional phrase.")
    ],
    ukrainian: "Українські «де», «коли», «як», «чому» мають близькі функції. Основна пастка — португальська орфографія чотирьох форм por que / porque / porquê / por quê та відмінності в питальному порядку.",
    comparisonUk: "Український один питальний прислівник може відповідати португальській формі, але пунктуація, прийменникове керування та позиція в реченні потребують окремої перевірки.",
    regional: "onde, quando і como є базовими для всього португаломовного простору. Питальні шаблони та порядок слів мають варіативність між PT-BR і PT-PT, тому приклади не слід узагальнювати поза конкретним типом питання.",
    sources
  }),
  page({
    id: "relative-adverbs", slug: "relative-adverbs", category: "adverbs",
    titleUk: "Відносні прислівники", titlePt: "Advérbios relativos", titleEn: "Relative adverbs",
    summary: "onde та інші засоби відносного зв'язку, що вводять підрядну частину й водночас несуть обставинне значення.",
    aliases: ["відносні прислівники","relative adverbs","advérbios relativos"],
    related: ["relative-clauses","onde","relative-pronouns","adverbial-clause-modification"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Відносний прислівник поєднує дві функції: він встановлює анафоричний зв'язок із попереднім елементом і водночас виконує обставинну роль усередині підрядної частини. Найтиповіший приклад — onde у значенні місця. Тому його не слід аналізувати лише як «сполучник» або лише як займенник.",
    definition: "Відносний прислівник — відносна одиниця, яка пов'язує підрядну частину з антецедентом і має всередині неї обставинну семантичну роль.",
    formulas: [
      { label: "Місце", pattern: "N + onde + oração", note: "onde відсилає до місця-антесидента." },
      { label: "Розгорнута локативна конструкція", pattern: "N + em que / no qual + oração", note: "Прийменниковий/займенниковий варіант може бути точнішим." }
    ],
    formation: "onde є центральним локативним відносним засобом. У ширшій системі альтернативи можуть реалізуватися через que, o qual та прийменникові конструкції. Вибір залежить від семантики антецедента й синтаксичної ролі.",
    uses: [
      { title: "Локативний антецедент", body: "onde вводить підрядну частину, пов'язану з місцем.", examples: [ex("A cidade onde nasci mudou muito.", "Місто, де я народився, дуже змінилося.", { purpose: "production" })] },
      { title: "Відмінність від загального que", body: "onde зберігає локативний компонент, тоді як que сам по собі не кодує місця.", examples: [ex("A casa onde moro é antiga.", "Будинок, де я живу, старий.", { purpose: "contrast" })] },
      { title: "Прийменникова альтернатива", body: "За потреби локативний зв'язок можна реалізувати іншою відносною конструкцією.", examples: [ex("O lugar em que trabalho é tranquilo.", "Місце, де я працюю, спокійне.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("A cidade onde nasci mudou muito.", "Місто, де я народився, дуже змінилося.", { purpose: "production" }),
      ex("A casa onde moro é antiga.", "Будинок, де я живу, старий.", { purpose: "production" }),
      ex("O lugar em que trabalho é tranquilo.", "Місце, де я працюю, спокійне.", { purpose: "contrast" })
    ],
    nonUses: ["Не використовуйте onde для будь-якого абстрактного антецедента без семантичного обґрунтування.", "Не вважайте onde універсальним відповідником українського «який/де».", "Не змішуйте відносну та питальну функції без аналізу конструкції."],
    markers: ["onde","em que","no qual","na qual"],
    mistakes: [
      mistake("A situação onde... у будь-якому контексті без урахування антецедента", "перевіряти, чи антецедент має релевантну локативну інтерпретацію", "Нормативний і стилістичний статус абстрактного onde може залежати від джерела та різновиду."),
      mistake("вважати onde простим синонімом que", "зберігати локативну роль відносного компонента", "onde має власну обставинну семантику.")
    ],
    ukrainian: "Українське «де» також може поєднувати локативне значення з відносним зв'язком. Однак українська має інші набори відносних слів і не дає підстав механічно поширювати португальське onde на всі абстрактні антецеденти.",
    comparisonUk: "Найбезпечніше зіставляти onde з «де» тоді, коли антецедент справді локативний. Для інших відношень перевіряйте que, o qual або прийменникову конструкцію.",
    regional: "onde є загальнопортугальським засобом. Вживання з абстрактними антецедентами та стилістична оцінка можуть варіювати; без спеціального джерела не встановлюємо жорсткої регіональної норми.",
    sources
  })
];
