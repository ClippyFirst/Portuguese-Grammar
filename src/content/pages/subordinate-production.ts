import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

export const pages: GrammarPage[] = [
  page({
    id: "complement-clauses-advanced", slug: "complement-advanced", category: "subordinate",
    titleUk: "Складні доповнювальні підрядні", titlePt: "Orações completivas avançadas", titleEn: "Advanced complement clauses",
    summary: "Як вибір способу, часу, інфінітива та кореференції змінює структуру доповнювальної клаузи.",
    aliases: ["advanced complement clauses", "orações completivas avançadas", "complement clauses"],
    related: ["complement-clauses", "indicative-vs-subjunctive", "personal-infinitive", "sequence-of-tenses"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Доповнювальна клауза заповнює валентну позицію головного предиката: вона може передавати зміст твердження, знання, бажання, оцінки, сумніву, наказу або емоційної реакції. Для просунутого рівня важливо перейти від списку «дієслово X вимагає способу Y» до аналізу значення головного предиката, типу залежності та відношення між підметами.",
    definition: "Доповнювальна підрядна — залежна клауза, яка реалізує аргументну позицію матричного предиката.",
    uses: [
      { title: "Твердження та знання", body: "Предикати повідомлення, знання або переконання можуть вводити propositional content; у типових стверджувальних контекстах використовується indicativo.", examples: [ex("Acho que ele vem amanhã.", "Я думаю, що він прийде завтра.")] },
      { title: "Воля та бажання", body: "Коли головний предикат виражає бажання або вимогу щодо іншої ситуації, conjuntivo типово кодує залежний стан справ.", examples: [ex("Quero que ele venha amanhã.", "Я хочу, щоб він прийшов завтра.")] },
      { title: "Один суб'єкт і infinitivo", body: "Коли суб'єкт головної та залежної дії кореферентний, infinitivo часто дозволяє компактнішу конструкцію.", examples: [ex("Quero sair cedo.", "Я хочу вийти рано.")] },
      { title: "Різні суб'єкти", body: "За різних суб'єктів фінітна клауза часто чіткіше кодує залежний суб'єкт; у відповідних умовах можливий personal infinitive.", examples: [ex("É importante eles chegarem cedo.", "Важливо, щоб вони прийшли рано.")] },
      { title: "Негативне та модальне середовище", body: "Заперечення, сумнів, оцінка та інші оператори можуть змінювати інтерпретацію способу; не слід вирішувати форму лише за українським сполучником.", examples: [ex("Não acredito que ele esteja em casa.", "Не думаю, що він удома.")] },
      { title: "Час і послідовність", body: "Час залежної події не визначається механічним копіюванням часу головної. Спочатку визначте temporal relation, потім вибирайте форму.", examples: [ex("Disse que tinha terminado o trabalho.", "Він сказав, що закінчив роботу.")] }
    ],
    examples: [
      ex("Sei que ela trabalha aqui.", "Я знаю, що вона тут працює.", { purpose: "production" }),
      ex("Duvido que ela trabalhe aqui.", "Сумніваюся, що вона тут працює.", { purpose: "contrast" }),
      ex("Quero que ela trabalhe aqui.", "Я хочу, щоб вона тут працювала.", { purpose: "comprehension" }),
      ex("Quero trabalhar aqui.", "Я хочу працювати тут.", { purpose: "contrast" }),
      ex("É importante eles estudarem.", "Важливо, щоб вони навчалися.", { purpose: "production" })
    ],
    mistakes: [
      mistake("вибирати indicativo/conjuntivo лише за українським «що/щоб»", "спочатку визначати семантику головного предиката", "Український сполучник не є прямим еквівалентом португальського способу.", "predicted-l1-transfer", "high"),
      mistake("використовувати infinitivo незалежно від кореференції", "перевіряти, хто є суб'єктом залежної дії", "Структура підметів впливає на вибір між infinitivo та фінітною клаузою.", "predicted-l1-transfer", "high"),
      mistake("копіювати час головної частини", "визначати temporal relation між подіями", "Послідовність часів — не механічне узгодження закінчень.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українські «що», «щоб», «аби» допомагають побачити тип залежності, але не дають повної відповіді про португальський спосіб. Особливо важлива відмінність — продуктивність personal infinitive, якому немає прямої морфологічної копії в українській.",
    regional: "Основні моделі доповнювальних конструкцій спільні для стандартних PT-PT і PT-BR, але частотність personal infinitive, займенникових стратегій та окремих перифраз може відрізнятися.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/" }, { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }]
  }),
  page({
    id: "complement-infinitive-vs-finite", slug: "complement-infinitive-vs-finite", category: "subordinate",
    titleUk: "Інфінітив чи фінітна доповнювальна клауза?", titlePt: "Infinitivo ou oração finita?", titleEn: "Infinitive vs finite complement clauses",
    summary: "Діагностика між infinitivo, personal infinitive та фінітною підрядною.",
    aliases: ["infinitive vs finite", "orações finitas", "infinitivo pessoal"],
    related: ["complement-clauses-advanced", "personal-infinitive", "verb-government-infinitive"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Вибір між infinitivo та фінітною доповнювальною клаузою залежить не тільки від довжини речення. Важливі кореференція суб'єктів, тип матричного предиката, ступінь автономності залежної події, стиль і можливості конкретної конструкції.",
    definition: "Конкуренція infinitivo та фінітної клаузи — вибір між нефінітною і фінітною реалізацією аргументного змісту предиката.",
    uses: [
      { title: "Кореферентні суб'єкти", body: "За одного суб'єкта infinitivo часто є природним способом уникнути зайвої повторної підметової групи.", examples: [ex("Ela quer viajar.", "Вона хоче подорожувати.")] },
      { title: "Різні суб'єкти", body: "Коли суб'єкти різні, фінітна конструкція або personal infinitive може краще експлікувати структуру.", examples: [ex("Ela quer que eu viaje.", "Вона хоче, щоб я подорожував/подорожувала."), ex("Ela quer eu viajar.", "Така конструкція не є нейтральним універсальним шаблоном; треба перевіряти нормативну модель.")] },
      { title: "Personal infinitive", body: "Infinitivo pessoal може маркувати особу/число залежного суб'єкта, коли структура його дозволяє.", examples: [ex("É melhor vocês saírem agora.", "Краще, щоб ви зараз пішли.")] },
      { title: "Стиль і компактність", body: "Нефінітна конструкція часто компактніша, але компактність не означає повну взаємозамінність із фінітною клаузою.", examples: [ex("Antes de sair, desligou a luz.", "Перед виходом він/вона вимкнув/вимкнула світло.")] }
    ],
    examples: [
      ex("Espero encontrar-te amanhã.", "Сподіваюся зустріти тебе завтра.", { purpose: "production", variety: "PT-PT" }),
      ex("Espero que te encontre amanhã.", "Сподіваюся, що зустріну тебе завтра.", { purpose: "contrast" }),
      ex("É importante nós chegarmos cedo.", "Важливо, щоб ми прийшли рано.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вважати infinitivo просто скороченим «щоб»", "перевіряти суб'єкт і тип головного предиката", "Нефінітна конструкція має власні синтаксичні властивості.", "predicted-l1-transfer", "high"),
      mistake("вважати personal infinitive лише стилістичною прикрасою", "визначати, чи форма маркує залежного суб'єкта", "У відповідних конструкціях особовий інфінітив має граматичну функцію.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Український інфінітив значно менш схожий на португальський personal infinitive як систему. Тому український переклад «щоб + дієслово» не повинен автоматично вести до conjuntivo або infinitivo.",
    regional: "Вибір між фінітними й нефінітними конструкціями чутливий до різновиду, регістру та конкретного предиката; у навчальному матеріалі варто зберігати маркування PT-PT/PT-BR там, де воно істотне.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/" }, { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }]
  })
];
