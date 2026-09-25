import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_II = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const GULBENKIAN_III = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const CAMOES_PLE = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "emphatic-affirmation",
    slug: "emphatic-affirmation",
    category: "syntax",
    titleUk: "Підсилене ствердження",
    titlePt: "Afirmação enfática",
    titleEn: "Emphatic affirmation",
    summary: "Способи підсилити стверджувальне висловлення без зміни його базової полярності.",
    aliases: ["підсилене ствердження", "emphatic affirmation", "afirmação enfática"],
    related: ["imperative-affirmative", "negation-nao", "discourse-markers", "information-structure"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Стверджувальне речення може бути не просто нейтральною відповіддю, а підкреслювати згоду, заперечувати сумнів або посилювати прихильність мовця до висловленого. Для цього португальська використовує лексичні, синтаксичні та дискурсивні засоби; не кожне підсилення є окремою граматичною формою.",
    definition: "Підсилене ствердження — стверджувальне висловлення, у якому форма або контекст додатково підкреслює його істинність, згоду чи позицію мовця.",
    uses: [
      { title: "Підкреслена згода", body: "Позитивну відповідь можна зробити виразнішою за допомогою дискурсивного оформлення або повторення ключової частини.", examples: [ex("Sim, claro que vou.", "Так, звісно, я піду.")] },
      { title: "Протиставлення сумніву", body: "Мовець може явно підкреслити позитивну полярність, коли попередній контекст допускає сумнів.", examples: [ex("Vou, sim.", "Я таки піду.")] }
    ],
    examples: [
      ex("Sim, vou.", "Так, я піду.", { purpose: "comprehension" }),
      ex("Vou, sim.", "Я таки піду.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("шукати одну універсальну «формулу підсилення»", "визначати, чи підсилення створює лексичний, синтаксичний або дискурсивний засіб", "Підсилена позитивна відповідь є функцією кількох засобів, а не однієї обов'язкової морфеми.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українська також має підсилене «так», частки та інтонаційні засоби. Корисно порівнювати функцію, а не переносити конкретну українську частку як обов'язковий португальський відповідник.",
    regional: "Вибір засобу підсилення залежить від дискурсу, регістру та інтонації; приклади не слід перетворювати на універсальний синтаксичний шаблон.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "biased-polar-questions",
    slug: "biased-polar-questions",
    category: "syntax",
    titleUk: "Полярні питання з очікуваною відповіддю",
    titlePt: "Perguntas polares orientadas",
    titleEn: "Biased polar questions",
    summary: "Полярні питання, у яких контекст або форма сигналізує очікування мовця щодо відповіді.",
    aliases: ["питання з очікуваною відповіддю", "biased polar questions", "perguntas polares orientadas"],
    related: ["questions-yesno", "question-word-order", "discourse-markers", "emphatic-affirmation"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Не кожне питання так/ні є нейтральним запитом інформації. Мовець може формулювати його так, щоб показати очікування, припущення, сумнів або бажання підтвердження. Це прагматична властивість питання, яка взаємодіє з лексикою, частками, запереченням та інтонацією.",
    definition: "Полярне питання з очікуваною відповіддю — питання так/ні, у якому контекст або форма робить одну відповідь дискурсивно очікуванішою для мовця.",
    uses: [
      { title: "Очікування підтвердження", body: "Мовець може перевіряти вже сформоване припущення, а не однаково відкрито шукати обидва варіанти відповіді.", examples: [ex("Vens amanhã, não?", "Ти прийдеш завтра, так?")] },
      { title: "Сумнів або перевірка припущення", body: "Те саме питання може бути вимовлене з іншим інтонаційним профілем і не мати такого самого очікування.", examples: [ex("Ele já chegou?", "Він уже прийшов?")] }
    ],
    examples: [
      ex("Vens amanhã, não?", "Ти прийдеш завтра, так?", { purpose: "comprehension" }),
      ex("A reunião é hoje, certo?", "Зустріч сьогодні, правда?", { purpose: "production" })
    ],
    mistakes: [
      mistake("ототожнювати будь-яке питання з não або tag-like елементом з одним граматичним типом", "відокремлювати полярність від прагматичного очікування", "Очікуваність відповіді є властивістю дискурсу й контексту, а не просто наявності одного маркера.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українська також має питання з «так?», «правда?», «хіба?», інтонацією та контекстуальним очікуванням. Відповідність між конкретними маркерами не є один-до-одного.",
    regional: "Питання з очікуваною відповіддю особливо чутливі до розмовного регістру, інтонації та дискурсивного контексту; не описуйте їх як окрему універсальну морфологічну парадигму.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "minimal-yes-no-answers",
    slug: "minimal-answers",
    category: "syntax",
    titleUk: "Короткі відповіді на питання так/ні",
    titlePt: "Respostas mínimas a perguntas de sim/não",
    titleEn: "Minimal answers to yes/no questions",
    summary: "Як sim і não та короткі продовження працюють у відповідях на полярні питання.",
    aliases: ["короткі відповіді так/ні", "minimal answers", "respostas mínimas"],
    related: ["questions-yesno", "negation-nao", "emphatic-affirmation", "discourse-reference"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "У португальській коротка відповідь на питання так/ні може складатися лише з sim або não, але в негативних питаннях така відповідь інколи потребує контекстуальної перевірки. Повне повторення предиката часто усуває двозначність.",
    definition: "Мінімальна відповідь на полярне питання — коротка репліка, яка підтверджує або заперечує відповідну пропозицію без повного повторення речення.",
    uses: [
      { title: "Пряме підтвердження", body: "Sim може бути самостійною позитивною відповіддю.", examples: [ex("Vais sair? — Sim.", "Ти виходитимеш? — Так.")] },
      { title: "Пряме заперечення", body: "Não може бути самостійною негативною відповіддю.", examples: [ex("Vais sair? — Não.", "Ти виходитимеш? — Ні.")] },
      { title: "Уточнення в негативному питанні", body: "Якщо питання вже містить não, повна репліка на кшталт Não vou або Vou може бути зрозумілішою за ізольоване sim/não.", examples: [ex("Não vais sair? — Vou.", "Ти не виходитимеш? — Виходитиму.")] }
    ],
    examples: [
      ex("Vais ao Porto? — Sim.", "Ти їдеш до Порту? — Так.", { purpose: "production" }),
      ex("Não vais ao Porto? — Vou.", "Ти не їдеш до Порту? — Їду.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("переносити механіку українського «так/ні» на будь-яке негативне питання", "перевіряти, яку пропозицію саме підтверджує репліка, і за потреби повторювати предикат", "У негативних питаннях поверхнева відповідь може бути прагматично неоднозначною.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська теж використовує «так/ні» та повтор предиката для зняття неоднозначності. Корисно порівнювати саме підтверджувану пропозицію, а не лише форму відповіді.",
    regional: "Мінімальні відповіді залежать від розмовного контексту та інтонації. Письмова відповідь без контексту часто потребує повнішого формулювання.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "definite-null-subjects",
    slug: "definite-null-subjects",
    category: "syntax",
    titleUk: "Означені нульові підмети",
    titlePt: "Sujeitos nulos definidos",
    titleEn: "Definite null subjects",
    summary: "Невиражений підмет із конкретним, відновлюваним із контексту референтом.",
    aliases: ["означений нульовий підмет", "definite null subject", "sujeito nulo definido"],
    related: ["null-subject", "subject-pronouns", "subject-placement", "discourse-reference"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Нульовий підмет не обов'язково означає «невідомий виконавець». Якщо контекст дозволяє однозначно або достатньо надійно відновити конкретного учасника, підмет може не мати явної займенникової форми.",
    definition: "Означений нульовий підмет — невиражений підмет із конкретним референтом, який відновлюється з граматичного або дискурсивного контексту.",
    uses: [
      { title: "Відновлення з попередньої репліки", body: "Після називання особи її займенник часто не потрібно повторювати.", examples: [ex("A Ana chegou. Foi direto para casa.", "Ана прийшла. Вона одразу пішла додому.")] },
      { title: "Відновлення з форми дієслова й контексту", body: "Особова форма дієслова та попередній контекст разом допомагають встановити референт.", examples: [ex("Chegámos cedo. Depois fomos jantar.", "Ми прийшли рано. Потім пішли вечеряти.")] }
    ],
    examples: [
      ex("O João telefonou e pediu ajuda.", "Жуан зателефонував і попросив допомоги.", { purpose: "production" }),
      ex("Chegámos cedo e esperámos.", "Ми прийшли рано й чекали.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вважати, що кожен португальський підмет має бути виражений займенником", "спочатку перевіряти, чи референт уже відновлюється з контексту", "Португальська допускає нульові підмети в системі, де займенникове вираження підмета не є обов'язковим у кожному реченні.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська також часто опускає займенниковий підмет, тому це зона часткового збігу. Водночас не слід переносити українську свободу опущення на всі португальські конструкції та різновиди.",
    regional: "Розподіл нульових і явних підметів залежить від інформаційної структури, контрасту, займенникової системи та різновиду португальської.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }
    ]
  }),
  page({
    id: "indefinite-null-subjects",
    slug: "indefinite-null-subjects",
    category: "syntax",
    titleUk: "Неозначені нульові підмети",
    titlePt: "Sujeitos nulos indefinidos",
    titleEn: "Indefinite null subjects",
    summary: "Невиражені підмети з неідентифікованим або узагальненим референтом.",
    aliases: ["неозначений нульовий підмет", "indefinite null subject", "sujeito nulo indefinido"],
    related: ["null-subject", "null-and-expletive-subjects", "se-impersonal", "impersonal-constructions"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Нульовий підмет може бути не конкретним, а неозначеним: мовець не називає або не може назвати виконавця, але структура речення все одно допускає інтерпретацію «хтось/люди/вони». Це треба відрізняти від означеного нульового підмета та від безособових конструкцій без семантичного підмета.",
    definition: "Неозначений нульовий підмет — невиражений суб'єктний референт, який інтерпретується як невизначена або узагальнена множина осіб.",
    uses: [
      { title: "Невизначені виконавці", body: "Контекст може залишати виконавця невідомим, не вимагаючи явного займенника.", examples: [ex("Bateram à porta.", "Хтось постукав у двері.")] },
      { title: "Узагальнене людське значення", body: "Деякі конструкції допускають узагальнену інтерпретацію без називання групи людей.", examples: [ex("Dizem que vai chover.", "Кажуть, що буде дощ.")] }
    ],
    examples: [
      ex("Disseram-me que o museu fechou.", "Мені сказали, що музей закрився.", { purpose: "comprehension" }),
      ex("Bateram à porta durante a noite.", "Уночі хтось постукав у двері.", { purpose: "production" })
    ],
    mistakes: [
      mistake("називати кожен невиражений людський виконавець безособовим", "відрізняти неозначений референт від конструкцій без семантичного підмета", "Неозначеність референта та відсутність семантичного підмета — різні властивості.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська також використовує неозначено-особові речення й опущення підмета, але португальські моделі не зводяться до прямого перекладу українським «кажуть» або «хтось».",
    regional: "Розподіл між нульовим підметом, явним займенником, 3-й особою множини та безособовими моделями залежить від конструкції й різновиду.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }
    ]
  }),
  page({
    id: "expletive-null-subjects",
    slug: "expletive-null-subjects",
    category: "syntax",
    titleUk: "Експлетивні нульові підмети",
    titlePt: "Sujeitos nulos expletivos",
    titleEn: "Expletive null subjects",
    summary: "Нульові суб'єктні позиції в конструкціях, де немає референтного семантичного підмета.",
    aliases: ["експлетивний нульовий підмет", "expletive null subject", "sujeito nulo expletivo"],
    related: ["null-and-expletive-subjects", "null-subject", "haver", "existential", "impersonal-constructions"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Експлетивний підмет не позначає окремого учасника ситуації. У португальській частина конструкцій, які в інших мовах можуть вимагати формального займенника, допускає нульову суб'єктну позицію. Тому відсутність слова в позиції підмета не завжди означає опущення референтної особи.",
    definition: "Експлетивний нульовий підмет — структурно передбачувана, але фонетично невиражена суб'єктна позиція без конкретного референта.",
    uses: [
      { title: "Погодні конструкції", body: "Погодні предикати не потребують називання учасника на кшталт «він».", examples: [ex("Está a chover.", "Іде дощ.")] },
      { title: "Безособові та екзистенційні моделі", body: "У деяких конструкціях відсутність референтного підмета є частиною самої граматичної організації.", examples: [ex("Há muita gente aqui.", "Тут багато людей.")] }
    ],
    examples: [
      ex("Está frio hoje.", "Сьогодні холодно.", { purpose: "comprehension" }),
      ex("Há um problema.", "Є проблема.", { purpose: "production" })
    ],
    mistakes: [
      mistake("вигадувати займенник він/вона там, де португальська конструкція його не має", "визначати, чи є в реченні референтний суб'єкт узагалі", "Експлетивна позиція не має такого самого референта, як особовий займенник.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська також допускає безособові речення без займенникового підмета, тому прямий перенос займенника з англійської чи іншої мови тут особливо оманливий.",
    regional: "Експлетивні та безособові конструкції треба аналізувати разом із конкретним предикатом; не всі формально безпідметові речення мають однакову синтаксичну структуру.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }
    ]
  }),
  page({
    id: "secondary-stress",
    slug: "secondary-stress",
    category: "spelling",
    titleUk: "Вторинний наголос",
    titlePt: "Acento secundário",
    titleEn: "Secondary stress",
    summary: "Другорядний ритмічний наголос у багатоскладових португальських словах і висловленнях.",
    aliases: ["вторинний наголос", "secondary stress", "acento secundário"],
    related: ["stress", "stress-phonology", "accentuation-advanced"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "medium",
    intro: "Окрім основного словесного наголосу, у фонетичному описі можуть фіксуватися слабші наголосові виділення. Вторинний наголос не слід плутати з графічним наголосом: знак акуту або циркумфлекса в орфографії позначає інші властивості й не є автоматичною позначкою кожного ритмічного акценту.",
    definition: "Вторинний наголос — менш сильне наголосове виділення, яке може виникати в багатоскладових словах або в ширшій ритмічній організації мовлення.",
    uses: [
      { title: "Фонетичний опис", body: "Поняття потрібне насамперед для аналізу вимови та ритму, а не для механічного визначення орфографічного знака.", examples: [ex("fotografia", "fotografia", { purpose: "comprehension", note: "Фонетичний опис наголосу не дорівнює написанню графічного акценту." })] },
      { title: "Ритм багатоскладових форм", body: "Другорядне виділення може допомагати описувати ритмічну організацію довших слів і висловлень.", examples: [ex("extraordinariamente", "extraordinariamente", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("fotografia", "fotografia", { purpose: "comprehension" }),
      ex("extraordinariamente", "extraordinariamente", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вважати вторинний наголос окремим орфографічним знаком", "розрізняти фонетичний наголос і графічну акцентуацію", "Фонетичний вторинний наголос та написаний знак наголосу належать до різних рівнів опису.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Український опис наголосу також розрізняє фонетичну реалізацію та графічні засоби. Для навчання португальської важливо не вигадувати діакритик там, де орфографічна норма його не передбачає.",
    regional: "Реалізація вторинного наголосу належить передусім до фонетичного опису й може залежати від темпу, ритму та конкретного мовлення; це не самостійна орфографічна категорія.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }
    ]
  })
];
