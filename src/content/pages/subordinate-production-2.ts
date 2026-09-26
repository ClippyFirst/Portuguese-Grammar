import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_II = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const GULBENKIAN_III = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const CAMOES_PLE = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "conformative-clauses",
    slug: "conformative",
    category: "subordinate",
    titleUk: "Відповідні (конформативні) підрядні",
    titlePt: "Orações conformativas",
    titleEn: "Conformative clauses",
    summary: "Підрядні, що виражають відповідність певному правилу, джерелу, способу або домовленості.",
    aliases: ["конформативні підрядні", "conformative clauses", "orações conformativas", "conforme", "segundo"],
    related: ["complement-clauses", "causal-clauses", "comparative-clauses", "subordinating"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Конформативна конструкція показує, що ситуація відбувається відповідно до певного джерела, правила, інструкції або способу опису. Для україномовного студента важливо не зводити conforme, segundo та подібні засоби до одного перекладу «згідно з»: їхня конкретна синтаксична модель і смисловий зв'язок залежать від контексту.",
    definition: "Конформативне підрядне — підрядна конструкція, що встановлює відповідність змісту головної частини певному джерелу, нормі, способу або опису.",
    uses: [
      { title: "Відповідність джерелу або правилу", body: "Конструкція може вказувати, що твердження подається відповідно до певного джерела чи норми.", examples: [ex("Fizemos tudo conforme foi combinado.", "Ми зробили все так, як було домовлено.")] },
      { title: "Відповідність способу", body: "Зв'язок може стосуватися способу виконання дії, а не причини.", examples: [ex("Faça conforme eu expliquei.", "Зроби так, як я пояснив/пояснила.")] }
    ],
    examples: [
      ex("Conforme previsto, a reunião começou às nove.", "Як і було передбачено, зустріч почалася о дев'ятій.", { purpose: "comprehension" }),
      ex("Tudo aconteceu conforme o plano.", "Усе відбулося відповідно до плану.", { purpose: "production" })
    ],
    mistakes: [
      mistake("ототожнювати відповідність із причиною", "поставити питання «відповідно до чого/кого?»", "Conforme не обов'язково вводить причину події; воно може задавати норму, джерело або спосіб.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українська має близькі конструкції «відповідно до», «згідно з», «так, як», але вибір українського відповідника не визначає автоматично португальську модель.",
    regional: "Конкретні сполучники та прийменникові моделі потрібно оцінювати разом із регістром і синтаксичною функцією.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "proportional-clauses",
    slug: "proportional",
    category: "subordinate",
    titleUk: "Пропорційні підрядні",
    titlePt: "Orações proporcionais",
    titleEn: "Proportional clauses",
    summary: "Конструкції, що показують зміну однієї ситуації разом зі зміною іншої.",
    aliases: ["пропорційні підрядні", "proportional clauses", "orações proporcionais", "à medida que", "quanto mais"],
    related: ["temporal-clauses", "comparative-clauses", "consecutive-clauses", "subordinating"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Пропорційний зв'язок описує дві величини або ситуації, зміни яких пов'язані між собою. Його не слід змішувати з простою часовою послідовністю або зі звичайним порівнянням: головним є залежність між ступенем чи напрямом двох змін.",
    definition: "Пропорційне підрядне — конструкція, у якій зміна в одній ситуації корелює зі зміною в іншій.",
    uses: [
      { title: "Паралельна зміна", body: "Моделі на кшталт à medida que можуть показувати поступову зміну двох ситуацій.", examples: [ex("À medida que estudava, compreendia melhor.", "Що більше я вчився/вчилася, то краще розумів/розуміла.")] },
      { title: "Корелятивний ступінь", body: "Quanto mais/menos ... mais/menos встановлює кореляцію між двома ступенями.", examples: [ex("Quanto mais praticas, melhor falas.", "Що більше ти практикуєшся, то краще говориш.")] }
    ],
    examples: [
      ex("À medida que o tempo passava, ficava mais tranquilo.", "У міру того як минав час, я ставав/ставала спокійнішим/спокійнішою.", { purpose: "comprehension" }),
      ex("Quanto menos dormes, mais cansado ficas.", "Що менше ти спиш, то більш утомленим стаєш.", { purpose: "production" })
    ],
    mistakes: [
      mistake("перекладати пропорційний зв'язок як звичайне «коли»", "перевіряти, чи одна зміна корелює з іншою", "Якщо важливий ступінь зміни, простий часовий відповідник приховує граматичну структуру.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українська має конструкції «що..., то...» та «у міру того як». Вони корисні як функціональні аналоги, але не задають португальської форми механічно.",
    regional: "Корелятивні моделі мають власні синтаксичні обмеження; не зводьте всі випадки proporcional до одного шаблону.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "modal-clauses",
    slug: "modal",
    category: "subordinate",
    titleUk: "Модальні підрядні",
    titlePt: "Orações modais",
    titleEn: "Modal clauses",
    summary: "Підрядні, що характеризують спосіб або обставини виконання дії.",
    aliases: ["модальні підрядні", "modal clauses", "orações modais"],
    related: ["conformative-clauses", "temporal-clauses", "comparative-clauses", "subordinating"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Модальні підрядні описують спосіб, у який відбувається дія або ситуація. У термінології різних граматик межі цього класу можуть описуватися дещо по-різному, тому тут важливіша функція конструкції, ніж механічне запам'ятовування ярлика.",
    definition: "Модальне підрядне — залежна конструкція, яка характеризує спосіб або модальну обставину перебігу ситуації.",
    uses: [
      { title: "Спосіб виконання", body: "Конструкція відповідає приблизно на питання «як? яким чином?» і модифікує спосіб дії.", examples: [ex("Resolveu o problema como lhe ensinaram.", "Він розв’язав проблему так, як його навчили.") ] },
      { title: "Обставина способу", body: "Зміст підрядного уточнює, як реалізується основна ситуація.", examples: [ex("Resolveu o problema como lhe ensinaram.", "Він розв'язав проблему так, як його навчили.")] }
    ],
    examples: [
      ex("Faz como eu disse.", "Зроби так, як я сказав/сказала.", { purpose: "production" }),
      ex("Ele trabalhou sem que o interrompessem.", "Він працював, не даючи себе переривати / так, що його не переривали.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вважати qualquer como автоматично модальним", "визначати, яку саме семантичну роль має підрядна частина", "Como може вводити різні типи зв'язку; форма сполучника сама не визначає клас.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українські «так, як», «так, щоб» та інші модальні відповідники допомагають зрозуміти функцію, але не дають автоматичної португальської конструкції.",
    regional: "Термінологічне розмежування модальних, порівняльних і конформативних конструкцій може відрізнятися між граматиками; конкретну конструкцію треба описувати за її функцією.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "locative-clauses",
    slug: "locative",
    category: "subordinate",
    titleUk: "Локативні підрядні",
    titlePt: "Orações locativas",
    titleEn: "Locative clauses",
    summary: "Підрядні, що локалізують подію або ситуацію в просторі.",
    aliases: ["локативні підрядні", "locative clauses", "orações locativas", "onde"],
    related: ["relative-que", "temporal-clauses", "subordinating", "prepositions-overview"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Локативна підрядна частина задає місце, у якому відбувається ситуація. Важливо відрізняти локативне підрядне від відносного речення з onde: одна й та сама форма може мати різну синтаксичну функцію.",
    definition: "Локативне підрядне — залежна конструкція, що виконує просторову роль щодо ситуації головної частини.",
    uses: [
      { title: "Місце події", body: "Підрядна частина може визначати просторову область, де відбувається дія.", examples: [ex("Ficámos onde era mais seguro.", "Ми залишилися там, де було безпечніше.")] },
      { title: "Відмінність від відносного речення", body: "У конструкції з antecedent та onde форма може бути частиною відносної структури; тоді її аналіз відрізняється.", examples: [ex("A cidade onde nasci fica longe.", "Місто, де я народився/народилася, далеко.")] }
    ],
    examples: [
      ex("Sentámo-nos onde havia lugar.", "Ми сіли там, де було місце.", { purpose: "production" }),
      ex("A casa onde moram é antiga.", "Будинок, у якому вони живуть, старий.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("аналізувати кожне onde як один і той самий тип конструкції", "спочатку знайти його синтаксичну функцію", "У «там, де...» і «будинок, де...» форма onde входить до різних структур.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська також має «де», але синтаксичний статус конструкції визначається не самим словом, а його зв'язком із головною частиною та антецедентом.",
    regional: "Розподіл локативних і відносних моделей потребує контексту; не перетворюйте український переклад «де» на діагностику португальської конструкції.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "reduced-clauses",
    slug: "reduced",
    category: "subordinate",
    titleUk: "Зредуковані підрядні конструкції",
    titlePt: "Orações reduzidas",
    titleEn: "Reduced clauses",
    summary: "Залежні конструкції з нефінітною формою дієслова замість особової предикації.",
    aliases: ["зредуковані підрядні", "reduced clauses", "orações reduzidas", "нефінітні підрядні"],
    related: ["infinitival-reduced-clauses", "gerundial-reduced-clauses", "participial-reduced-clauses", "finite-vs-nonfinite-subordination"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Зредукована підрядна конструкція використовує нефінітну дієслівну форму й не виражає повну особову предикацію так, як фінітне підрядне. Для навчання корисно спочатку встановити відношення між частинами, а вже потім визначати, чи може воно бути реалізоване інфінітивом, герундієм або дієприкметником.",
    definition: "Зредукована підрядна конструкція — залежна конструкція з нефінітною формою, яка виконує функцію, подібну до відповідної фінітної підрядної.",
    uses: [
      { title: "Інфінітивна редукція", body: "Інфінітив може реалізувати залежну пропозицію в конструкціях із відповідними умовами суб'єкта й керування.", examples: [ex("Antes de sair, fechou a porta.", "Перед тим як вийти, він зачинив двері.")] },
      { title: "Герундіальна редукція", body: "Герундіальна конструкція може виражати супровідну або часову/способову залежність.", examples: [ex("Chegando a casa, ligou-me.", "Прийшовши додому, він мені зателефонував.")] },
      { title: "Дієприкметникова редукція", body: "Particípio може брати участь у зредукованих конструкціях, зокрема в пасивних або результативних структурах.", examples: [ex("Terminada a reunião, saímos.", "Коли зустріч закінчилася, ми пішли.")] }
    ],
    examples: [
      ex("Depois de estudar, fui dormir.", "Після навчання я пішов/пішла спати.", { purpose: "production" }),
      ex("Terminada a tarefa, enviou o ficheiro.", "Коли завдання було завершено, він/вона надіслав/надіслала файл.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вважати будь-який нефінітний дієслівний зворот підрядним реченням", "визначати синтаксичну залежність і предикативний статус", "Не кожен інфінітив, герундій або дієприкметник утворює зредуковану підрядну.", "editorial", "high"),
      mistake("вважати відсутність явного підмета доказом тотожності підметів", "перевіряти контроль і кореферентність", "Нефінітна конструкція може мати власного логічного суб'єкта або іншу структуру контролю.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська широко використовує інфінітивні, дієприслівникові та пасивні конструкції, але їхній синтаксичний розподіл не збігається автоматично з португальським.",
    regional: "Розподіл нефінітних конструкцій залежить від типу дієслова, контролю суб'єкта, регістру та різновиду; не подавайте редукцію як механічну заміну будь-якого підрядного речення.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "infinitival-reduced-clauses",
    slug: "reduced-infinitival",
    category: "subordinate",
    titleUk: "Інфінітивні зредуковані підрядні",
    titlePt: "Orações reduzidas de infinitivo",
    titleEn: "Infinitival reduced clauses",
    summary: "Нефінітні залежні конструкції з інфінітивом.",
    aliases: ["інфінітивні зредуковані", "infinitival reduced clauses", "orações reduzidas de infinitivo"],
    related: ["reduced-clauses", "personal-infinitive", "infinitive-vs-subjunctive", "infinitive-prepositions"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Інфінітивна редукція — не просто «дієслово після прийменника». У ній інфінітив утворює залежну предикативну структуру, а його суб'єкт і зв'язок із головною частиною визначають інтерпретацію.",
    definition: "Інфінітивна зредукована підрядна — залежна конструкція, предикативний центр якої виражено інфінітивом.",
    uses: [
      { title: "Часові конструкції", body: "Після прийменникових часових виразів інфінітив може позначати подію, пов'язану з головною.", examples: [ex("Antes de sair, avisa-me.", "Перед тим як вийти, попередь мене.")] },
      { title: "Мета", body: "Інфінітив може бути центром конструкції мети, коли модель це дозволяє.", examples: [ex("Estudo para aprender.", "Я вчуся, щоб навчитися.")] }
    ],
    examples: [
      ex("Depois de chegar, ligou para casa.", "Після того як він/вона приїхав/приїхала, зателефонував/зателефонувала додому.", { purpose: "production" }),
      ex("É importante estudar.", "Важливо вчитися.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вважати інфінітив завжди безособовим", "перевіряти структуру його суб'єкта", "Португальський інфінітив може бути особовим; вибір форми залежить від конструкції.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська не має тотожної системи особового інфінітива, тому український переклад часто приховує відмінності в суб'єкті португальської конструкції.",
    regional: "Вибір між інфінітивною та фінітною конструкцією залежить від керування, контролю, регістру та конкретної конструкції.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "gerundial-reduced-clauses",
    slug: "reduced-gerundial",
    category: "subordinate",
    titleUk: "Герундіальні зредуковані підрядні",
    titlePt: "Orações reduzidas de gerúndio",
    titleEn: "Gerundial reduced clauses",
    summary: "Залежні конструкції з gerúndio та їхня часово-способова інтерпретація.",
    aliases: ["герундіальні зредуковані", "gerundial reduced clauses", "orações reduzidas de gerúndio"],
    related: ["reduced-clauses", "gerund-usage", "progressive-br-pt", "temporal-clauses"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Gerúndio може входити до прогресивної перефрази, але не кожен gerúndio є частиною прогресиву. У зредукованій підрядній він може задавати залежну ситуацію, часовий супровід або спосіб.",
    definition: "Герундіальна зредукована підрядна — залежна нефінітна конструкція з gerúndio, яка має власну синтаксичну функцію щодо головної частини.",
    uses: [
      { title: "Супровідна ситуація", body: "Gerúndio може описувати ситуацію, що супроводжує головну.", examples: [ex("Saiu correndo.", "Він вибіг, біжучи / бігом.")] },
      { title: "Часовий або спосібовий зв'язок", body: "Контекст визначає, чи йдеться про одночасність, спосіб або інший зв'язок.", examples: [ex("Estudando mais, aprenderás melhor.", "Якщо/коли більше навчатимешся, краще вчитимешся.")] }
    ],
    examples: [
      ex("Chegando a casa, telefonou à mãe.", "Прийшовши додому, він/вона зателефонував/зателефонувала матері.", { purpose: "comprehension" }),
      ex("Trabalhando juntos, resolvemos o problema.", "Працюючи разом, ми розв'язали проблему.", { purpose: "production" })
    ],
    mistakes: [
      mistake("ототожнювати будь-який gerúndio з прогресивом", "визначати, чи gerúndio є частиною estar + gerúndio або окремої нефінітної конструкції", "Форма gerúndio має кілька функцій.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Український дієприслівник може бути корисним функціональним аналогом у частині випадків, але він не покриває весь португальський розподіл gerúndio.",
    regional: "Частотність та нормативна оцінка герундіальних моделей відрізняється за різновидами й регістрами; прогресив PT-BR/PT-PT треба аналізувати окремо.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }
    ]
  }),
  page({
    id: "participial-reduced-clauses",
    slug: "reduced-participial",
    category: "subordinate",
    titleUk: "Дієприкметникові зредуковані підрядні",
    titlePt: "Orações reduzidas de particípio",
    titleEn: "Participial reduced clauses",
    summary: "Залежні конструкції з particípio та їхня часово-результативна інтерпретація.",
    aliases: ["дієприкметникові зредуковані", "participial reduced clauses", "orações reduzidas de particípio"],
    related: ["reduced-clauses", "ser-passive", "estar-participle", "participle"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Particípio може бути центром зредукованої залежної конструкції, але також входить до складених часів, пасиву та результативних структур. Для правильної інтерпретації потрібно встановити всю конструкцію, а не реагувати лише на форму закінчення.",
    definition: "Дієприкметникова зредукована підрядна — залежна нефінітна конструкція, побудована навколо particípio.",
    uses: [
      { title: "Попередня або завершена ситуація", body: "Particípio може подавати стан або подію як передумову наступної ситуації.", examples: [ex("Terminada a reunião, saímos.", "Коли зустріч закінчилася, ми пішли.")] },
      { title: "Відмінність від пасиву", body: "У пасиві particípio є частиною предиката з ser; це не тотожне окремій зредукованій конструкції.", examples: [ex("A reunião foi terminada às cinco.", "Зустріч було завершено о п'ятій.") ] }
    ],
    examples: [
      ex("Resolvido o problema, continuámos.", "Коли проблему було розв'язано, ми продовжили.", { purpose: "comprehension" }),
      ex("Concluído o trabalho, enviaram o relatório.", "Після завершення роботи вони надіслали звіт.", { purpose: "production" })
    ],
    mistakes: [
      mistake("вважати кожен particípio пасивною формою", "визначати допоміжне дієслово та синтаксичну структуру", "Particípio входить до кількох різних конструкцій, зокрема пасиву, складених форм і нефінітних структур.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська також має дієприкметникові й пасивні конструкції, але відповідність між ними та португальським particípio не є один-до-одного.",
    regional: "Застосування й частотність нефінітних дієприкметникових конструкцій залежать від стилю та конкретної синтаксичної моделі.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }
    ]
  }),
  page({
    id: "finite-vs-nonfinite-subordination",
    slug: "finite-vs-nonfinite",
    category: "subordinate",
    titleUk: "Фінітні й нефінітні підрядні конструкції",
    titlePt: "Subordinação finita e não finita",
    titleEn: "Finite vs non-finite subordination",
    summary: "Як вибір особової або нефінітної форми змінює структуру підрядної конструкції.",
    aliases: ["фінітні нефінітні", "finite vs non-finite", "subordinação finita e não finita"],
    related: ["complement-clauses", "reduced-clauses", "personal-infinitive", "gerundial-reduced-clauses"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Фінітна підрядна має особову дієслівну форму й виражає категорії особи, часу та способу безпосередньо. Нефінітна конструкція використовує інфінітив, gerúndio або particípio, тому частина цієї інформації кодується інакше або відновлюється з контексту.",
    definition: "Фінітна/нефінітна опозиція — розрізнення залежних конструкцій за типом предикації та морфологічним статусом дієслівної форми.",
    uses: [
      { title: "Фінітна конструкція", body: "Окрема особова форма дозволяє явно кодувати час, спосіб і особу.", examples: [ex("Quando chegares, liga-me.", "Коли прийдеш, подзвони мені.")] },
      { title: "Нефінітна конструкція", body: "Інфінітивна модель може бути компактнішою, але її суб'єкт і часовий зв'язок визначаються конструкцією.", examples: [ex("Antes de chegares, avisa-me.", "Перед тим як приїдеш, попередь мене.")] }
    ],
    examples: [
      ex("Quando terminares, avisa-me.", "Коли закінчиш, повідом мені.", { purpose: "contrast" }),
      ex("Antes de terminares, revê o texto.", "Перед тим як закінчиш, переглянь текст.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("вважати нефінітну форму просто скороченням фінітної", "аналізувати суб'єкт, часове відношення та тип керування", "Перехід до інфінітива або іншої нефінітної форми може змінювати синтаксичну організацію.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська також протиставляє особові й нефінітні форми, але португальський особовий інфінітив створює окремі можливості, яких немає як прямого аналога в українській.",
    regional: "Вибір фінітної та нефінітної конструкції залежить від лексичної рамки, контролю суб'єкта, регістру та різновиду.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "subordinate-clause-punctuation",
    slug: "punctuation",
    category: "subordinate",
    titleUk: "Пунктуація в підрядних реченнях",
    titlePt: "Pontuação nas orações subordinadas",
    titleEn: "Subordinate-clause punctuation",
    summary: "Як синтаксична структура, позиція підрядної та інформаційна організація впливають на пунктуацію.",
    aliases: ["пунктуація підрядних", "subordinate-clause punctuation", "pontuação nas subordinadas"],
    related: ["subordination-and-coordination", "punctuation", "relative-que", "direct-speech"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Кома в складному реченні не визначається одним універсальним правилом «підрядне = кома». Важливі тип підрядності, її позиція, синтаксичний зв'язок і, в окремих моделях, інформаційна організація. Для україномовного студента це особливо важливо, бо українські пунктуаційні правила не можна переносити механічно.",
    definition: "Пунктуація підрядних — система графічного оформлення меж і зв'язків між головною та підрядною частинами.",
    uses: [
      { title: "Позиція підрядної", body: "Початкова, вставлена та постпозитивна підрядна можуть мати різне пунктуаційне оформлення залежно від конструкції.", examples: [ex("Quando cheguei, ele saiu.", "Коли я прийшов/прийшла, він вийшов.")] },
      { title: "Відносні конструкції", body: "Обмежувальні та пояснювальні відносні речення мають різну синтаксичну й пунктуаційну організацію.", examples: [ex("O livro que comprei é novo.", "Книжка, яку я купив/купила, нова.")] }
    ],
    examples: [
      ex("Se tiveres tempo, liga-me.", "Якщо матимеш час, подзвони мені.", { purpose: "production" }),
      ex("A Ana, que mora aqui, trabalha connosco.", "Ана, яка живе тут, працює з нами.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("переносити українську кому на португальське речення без перевірки конструкції", "спочатку визначити тип підрядності та її синтаксичну роль", "Пунктуація є частиною португальської системи письма, а не прямою калькою українських правил.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська також розрізняє типи підрядних і використовує кому, але конкретні пунктуаційні норми не збігаються. Особливо обережно треба ставитися до відносних речень і меж вставленої інформації.",
    regional: "Пунктуація чутлива до письмового регістру, синтаксичної структури та редакційної норми; розмовна інтонація не є достатньою підставою для механічного запису коми.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  })
];
