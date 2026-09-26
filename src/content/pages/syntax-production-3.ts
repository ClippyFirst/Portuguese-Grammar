import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

export const pages: GrammarPage[] = [
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
