import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

export const pages: GrammarPage[] = [
  page({
    id: "conjunction-system", slug: "conjunction-system", category: "conjunctions",
    titleUk: "Система сполучників і сполучникових виразів", titlePt: "Sistema das conjunções e locuções conjuntivas", titleEn: "Conjunction system",
    summary: "Карта португальських сполучників: сурядність, підрядність, сполучникові локції та межа з дискурсивними зв'язками.",
    aliases: ["система сполучників","conjunction system","sistema das conjunções"],
    related: ["coordinating","subordinating","conjunctive-locutions","conjunction-vs-discourse-connective"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Сполучники організують граматичний зв'язок між компонентами: вони можуть поєднувати рівноправні одиниці або відкривати підрядну конструкцію. Окремо існують сполучникові локції, що складаються з кількох слів, а також дискурсивні елементи, які зв'язують висловлення без тотожної синтаксичної функції. Для українськомовного учня головна проблема — не запам'ятати перелік, а розрізняти тип зв'язку, значення та вимоги до конструкції.",
    definition: "Сполучник — службова незмінна одиниця, що виражає граматичний зв'язок між словами, групами або підрядними/сурядними частинами; сполучникова локція виконує подібну функцію багатослівно.",
    formulas: [
      { label: "Сурядність", pattern: "P1 + CONJ + P2", note: "Частини синтаксично рівноправні." },
      { label: "Підрядність", pattern: "P1 + SUB + P2", note: "Одна частина залежить від іншої." },
      { label: "Локція", pattern: "P1 + LOC-CONJ + P2", note: "Зв'язок виражений кількома словами." }
    ],
    formation: "Система включає прості сполучники e, ou, mas, que, se та складені сполучникові локції на зразок ainda que, para que, logo que, de modo que. Класифікація за значенням перетинається із синтаксичною класифікацією, тому один елемент треба аналізувати в конкретній конструкції.",
    uses: [
      { title: "Сурядний зв'язок", body: "Сурядні елементи поєднують рівноправні частини.", examples: [ex("Cheguei cedo e esperei.", "Я прийшов рано й чекав.", { purpose: "production" })] },
      { title: "Підрядний зв'язок", body: "Підрядний елемент вводить залежну частину та її семантичний тип.", examples: [ex("Saí porque estava cansado.", "Я пішов, бо був утомлений.", { purpose: "production" })] },
      { title: "Сполучникова локція", body: "Кілька слів функціонують як зв'язувальний комплекс.", examples: [ex("Fiquei em casa porque estava doente.", "Я залишився вдома, бо був хворий.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Cheguei cedo e esperei.", "Я прийшов рано й чекав.", { purpose: "production" }),
      ex("Saí porque estava cansado.", "Я пішов, бо був утомлений.", { purpose: "production" }),
      ex("Embora estivesse cansado, continuou.", "Хоча він був утомлений, він продовжив.", { purpose: "contrast" }),
      ex("Vou sair assim que terminar.", "Я піду, щойно закінчу.", { purpose: "comprehension" })
    ],
    nonUses: ["Не називайте будь-який дискурсивний зв'язок сполучником.", "Не визначайте тип сполучника лише за українським перекладом.", "Не переносіть українську пунктуацію автоматично на португальську."],
    markers: ["e","ou","mas","porque","que","se","embora","para que","assim que"],
    mistakes: [
      mistake("вважати todos os conectores сполучниками", "розрізняти граматичний сполучник і дискурсивний маркер", "Функція зв'язку може бути дискурсивною, а не синтаксичною."),
      mistake("перекладати українське «бо/щоб/хоча» одним фіксованим португальським еквівалентом", "обирати форму за типом підрядності та контекстом", "Значення можуть розподілятися між кількома конструкціями.")
    ],
    ukrainian: "Українська також розрізняє сурядність і підрядність, тому базова архітектура подібна. Відмінності виникають у конкретних відповідниках, пунктуації, керуванні способом дієслова та розмежуванні сполучників із дискурсивними словами.",
    comparisonUk: "«і», «але», «або», «бо», «якщо», «хоча», «щоб» дають корисні семантичні орієнтири, але португальська система не є словниковою таблицею 1:1. Один український сполучник може відповідати кільком португальським конструкціям залежно від синтаксису.",
    regional: "Базові класи сполучників спільні для португаломовного простору. Відмінності стосуються конкретних форм, частотності, регістру та розмовних альтернатив; PT-BR/PT-PT не слід описувати як повністю різні системи.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português", url: "https://gulbenkian.pt/publications/gramatica-do-portugues/" },
      { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }
    ]
  }),
  page({
    id: "subordinating-conjunctions", slug: "subordinating-conjunctions", category: "conjunctions",
    titleUk: "Підрядні сполучники", titlePt: "Conjunções subordinativas", titleEn: "Subordinating conjunctions",
    summary: "Граматичні засоби введення підрядних частин і зв'язок між сполучником, значенням та способом дієслова.",
    aliases: ["підрядні сполучники","subordinating conjunctions","conjunções subordinativas"],
    related: ["conjunction-system","subordination","subordinate-clauses","subjunctive-triggers"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Підрядний сполучник вводить залежну частину, але його роль не зводиться до перекладу українського «що», «бо», «якщо» чи «хоча». Він визначає тип зв'язку, а в частині конструкцій взаємодіє з вибором способу, часом, запереченням і порядком компонентів. Найнадійніший аналіз починається з питання: яку семантичну й синтаксичну залежність створює вся підрядна частина?",
    definition: "Підрядний сполучник — незмінний службовий елемент, що вводить залежну предикативну частину та сигналізує її відношення до головної.",
    formulas: [
      { label: "Комплемент", pattern: "V + que + oração", note: "Підрядна частина може бути змістовим комплементом." },
      { label: "Умова", pattern: "se + oração", note: "Вводиться умовна залежність." },
      { label: "Концесія", pattern: "embora + oração", note: "Виражається невідповідність очікуваному результату." }
    ],
    formation: "До простих підрядних сполучників належать que, se, embora та інші одиниці; велика частина семантичних відношень реалізується локціями. Вибір конкретної форми залежить від типу підрядності, а не тільки від часової послідовності.",
    uses: [
      { title: "Змістова підрядність", body: "que вводить пропозиційний зміст після дієслів, прикметників та іменників, коли така модель ліцензована.", examples: [ex("Acho que ele vem.", "Я думаю, що він прийде.", { purpose: "production" })] },
      { title: "Умова", body: "se вводить умовну частину.", examples: [ex("Se chover, ficamos em casa.", "Якщо піде дощ, залишимося вдома.", { purpose: "production" })] },
      { title: "Концесія", body: "embora вводить поступку й часто пов'язується з кон'юнктивом.", examples: [ex("Embora esteja cansado, continua.", "Хоча він утомлений, він продовжує.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Acho que ele vem.", "Я думаю, що він прийде.", { purpose: "production" }),
      ex("Se chover, ficamos em casa.", "Якщо піде дощ, залишимося вдома.", { purpose: "production" }),
      ex("Embora esteja cansado, continua.", "Хоча він утомлений, він продовжує.", { purpose: "contrast" })
    ],
    nonUses: ["Не вважайте всі підрядні частини такими, що мають однаковий спосіб дієслова.", "Не замінюйте сполучник лише за українським перекладом.", "Не змішуйте сполучник із прийменниковим керуванням головного слова."],
    markers: ["que","se","embora","quando","porque","para que","ainda que"],
    mistakes: [
      mistake("вживати indicativo після будь-якого «хоча»", "перевіряти модель concessiva та її mood selection", "embora типово вводить підрядну частину з subjuntivo."),
      mistake("вважати se буквальним еквівалентом усіх українських умовних конструкцій", "визначати реальність, часову інтерпретацію та тип умови", "Граматичний вибір залежить від конструкції.")
    ],
    ukrainian: "Українська має подібну систему підрядності, але вибір способу після відповідних сполучників не завжди збігається. Особливо важливо не переносити українське відчуття способу дієслова на португальські concessive, conditional та final clauses.",
    comparisonUk: "Українське «хоча він втомився» може перекладатися конструкцією з embora, але португальська форма дієслова часто змінюється. Тому переклад має бути семантичним, а не морфологічним шаблоном.",
    regional: "Система підрядних сполучників загалом спільна. В окремих конструкціях PT-BR/PT-PT можуть відрізнятися частотність, позиція або розмовні альтернативи; такі відмінності треба прив'язувати до конкретної конструкції.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português", url: "https://gulbenkian.pt/publications/gramatica-do-portugues/" },
      { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }
    ]
  }),
  page({
    id: "conjunctive-locutions", slug: "conjunctive-locutions", category: "conjunctions",
    titleUk: "Сполучникові локції", titlePt: "Locuções conjuntivas", titleEn: "Conjunctive locutions",
    summary: "Багатослівні сполучникові комплекси для причинних, часових, умовних, цільових та інших відношень.",
    aliases: ["сполучникові локції","conjunctive locutions","locuções conjuntivas"],
    related: ["conjunction-system","subordinating-conjunctions","prepositional-locutions","fixed-conjunctive-expressions"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Сполучникова локція — не просто довгий сполучник, а багатослівна граматична одиниця з відносно стабільною структурою та функцією. До неї належать моделі на зразок para que, ainda que, logo que, assim que, de modo que. Для учня важливо вивчати локцію як конструкцію цілком, водночас розуміючи, які її частини мають власні граматичні функції.",
    definition: "Сполучникова локція — багатослівний усталений або напівусталений комплекс, який вводить або організує граматично залежну частину.",
    formulas: [
      { label: "Мета", pattern: "para que + oração", note: "Типова цільова конструкція з finite clause." },
      { label: "Час", pattern: "assim que + oração", note: "Вказує на часову межу/послідовність." },
      { label: "Поступка", pattern: "ainda que + oração", note: "Вводить concessive relation." }
    ],
    formation: "Локції формуються з прийменників, часток, прислівників та сполучникових елементів. Їхня внутрішня будова не скасовує цілісної синтаксичної функції. Частину моделей краще вивчати разом із типовим mood selection і пунктуацією.",
    uses: [
      { title: "Мета: para que", body: "para que вводить підрядну цільову частину.", examples: [ex("Falei devagar para que todos entendessem.", "Я говорив повільно, щоб усі зрозуміли.", { purpose: "production" })] },
      { title: "Час: assim que / logo que", body: "Ці локції встановлюють часовий зв'язок між подіями.", examples: [ex("Ligo assim que chegar.", "Я подзвоню, щойно приїду.", { purpose: "production" })] },
      { title: "Поступка: ainda que", body: "Локція вводить умову, яка не скасовує головного твердження.", examples: [ex("Ainda que seja difícil, tentarei.", "Навіть якщо це складно, я спробую.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Falei devagar para que todos entendessem.", "Я говорив повільно, щоб усі зрозуміли.", { purpose: "production" }),
      ex("Ligo assim que chegar.", "Я подзвоню, щойно приїду.", { purpose: "production" }),
      ex("Ainda que seja difícil, tentarei.", "Навіть якщо це складно, я спробую.", { purpose: "contrast" }),
      ex("Trabalhou de modo que terminou cedo.", "Він працював так, що закінчив рано.", { purpose: "comprehension" })
    ],
    nonUses: ["Не аналізуйте локцію як випадкову послідовність слів.", "Не припускайте, що всі локції мають однаковий mood selection.", "Не змішуйте conjunctive locutions із prepositional locutions: перші організують clause, другі керують іменниковою/інфінітивною групою."],
    markers: ["para que","ainda que","logo que","assim que","de modo que","de forma que"],
    mistakes: [
      mistake("використовувати para без que перед finite clause, коли потрібна цільова підрядність", "розрізняти para + infinitivo та para que + oração", "Це різні конструкційні моделі."),
      mistake("перекладати ainda que як автоматичний індикатив", "перевіряти concessive construction та mood", "У стандартній моделі часто вживається subjuntivo.")
    ],
    ukrainian: "Українська також має багатослівні сполучникові вирази, але їхня внутрішня структура не збігається з португальською. Українське «щоб» може відповідати para, para que або іншій цільовій конструкції залежно від форми підрядної частини.",
    comparisonUk: "Найважливіше — розрізняти «прийменник + інфінітив» і «сполучникова локція + особова форма». Український переклад часто приховує цю різницю.",
    regional: "Більшість базових локцій є загальнопортугальськими. Розмовна частотність окремих моделей може відрізнятися між різновидами; без корпусного підтвердження не варто встановлювати жорстку PT-BR/PT-PT межу.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português", url: "https://gulbenkian.pt/publications/gramatica-do-portugues/" },
      { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }
    ]
  }),
  page({
    id: "conjunction-vs-discourse-connective", slug: "conjunction-vs-discourse-connective", category: "conjunctions",
    titleUk: "Сполучник і дискурсивний конектор: як розрізняти", titlePt: "Conjunção e conector discursivo: como distinguir", titleEn: "Conjunction vs discourse connective",
    summary: "Різниця між граматичним сполучником і дискурсивним засобом зв'язку.",
    aliases: ["сполучник і дискурсивний конектор","conjunction vs discourse connective","conjunção e conector discursivo"],
    related: ["conjunction-system","discourse-markers","discourse-marker-functions","discourse-marker-position"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Слова та вирази на кшталт portanto, então, afinal, além disso або contudo можуть організовувати логічний зв'язок між висловленнями, але це не означає, що всі вони є сполучниками. Граматичний сполучник є частиною синтаксичної конструкції, тоді як дискурсивний конектор може коментувати або зв'язувати вже сформовані висловлення. Різницю треба встановлювати за синтаксичною інтеграцією, позицією, пунктуацією та областю дії.",
    definition: "Граматичний сполучник кодує синтаксичний зв'язок, а дискурсивний конектор організує відношення між висловленнями або дискурсивними сегментами.",
    formulas: [
      { label: "Граматичний зв'язок", pattern: "P1 + CONJ + P2", note: "Conj є частиною синтаксичної структури." },
      { label: "Дискурсивний зв'язок", pattern: "P1. CONECTOR, P2.", note: "Елемент може бути просодично та пунктуаційно відокремлений." }
    ],
    formation: "Межа між категоріями не завжди визначається одним словом у словнику: деякі одиниці мають різні вживання. Тому треба аналізувати конкретний контекст, а не приклеювати незмінну етикетку до всіх випадків.",
    uses: [
      { title: "Синтаксичний сполучник", body: "Елемент безпосередньо організує граматичний зв'язок між частинами.", examples: [ex("Estava cansado, mas continuei.", "Я був утомлений, але продовжив.", { purpose: "production" })] },
      { title: "Дискурсивний конектор", body: "Елемент може зв'язувати окремі висловлення й мати самостійну позиційну організацію.", examples: [ex("Estava cansado. Contudo, continuei.", "Я був утомлений. Проте я продовжив.", { purpose: "contrast" })] },
      { title: "Контекстна багатофункціональність", body: "Одна форма може набувати різного статусу залежно від конструкції.", examples: [ex("Ele saiu porque estava cansado.", "Він пішов, бо був утомлений.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Estava cansado, mas continuei.", "Я був утомлений, але продовжив.", { purpose: "production", function: "сурядний зв'язок" }),
      ex("Estava cansado. Contudo, continuei.", "Я був утомлений. Проте я продовжив.", { purpose: "contrast", function: "дискурсивний зв'язок" }),
      ex("Ele saiu porque estava cansado.", "Він пішов, бо був утомлений.", { purpose: "comprehension", function: "підрядний зв'язок" })
    ],
    nonUses: ["Не класифікуйте слово за українським перекладом «отже/проте/тоді».", "Не вважайте пунктуацію єдиним критерієм.", "Не переносіть статус елемента з одного контексту на всі його вживання."],
    markers: ["mas","porém","contudo","portanto","então","afinal","além disso"],
    mistakes: [
      mistake("вважати portanto звичайним підрядним сполучником у будь-якому контексті", "перевіряти синтаксичну інтеграцію та позицію", "У багатьох уживаннях portanto працює як конектор висновку."),
      mistake("вважати кожен елемент між двома реченнями сполучником", "визначати, чи він входить до синтаксичної структури", "Дискурсивний зв'язок може бути окремим від граматичного зв'язку.")
    ],
    ukrainian: "Українська також розрізняє сполучники та дискурсивні слова/вставні елементи, але межі конкретних класів не збігаються повністю. Переклад «проте», «отже», «тоді» не визначає португальський граматичний статус.",
    comparisonUk: "Порівнюйте не назву частини мови, а синтаксичну поведінку. Українське «проте» може відповідати португальському contudo, porém або іншій конструкції з різною інтеграцією.",
    regional: "Статус і частотність дискурсивних конекторів чутливі до жанру, регістру та усного/писемного каналу. Регіональні твердження мають бути scoped до конкретної форми та джерела.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português", url: "https://gulbenkian.pt/publications/gramatica-do-portugues/" },
      { label: "Camões — Referencial Camões PLE", url: "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple" }
    ]
  })
];
