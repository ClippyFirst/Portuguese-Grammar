import type { GrammarPage } from "../types";

export const pages: GrammarPage[] = [
  {
    id: "verb-valency-frames", slug: "verb-valency-frames", category: "valency",
    titleUk: "Валентні рамки дієслів", titlePt: "Quadros de valência verbal", titleEn: "Verb valency frames",
    summary: "Як дієслово визначає кількість і тип своїх аргументів.",
    aliases: ["валентні рамки", "verb valency frames", "quadros de valência", "regência"],
    related: ["valency-overview", "government-overview", "verb-complement-types", "verb-valency-arguments"],
    intro: "Валентна рамка описує не просто значення дієслова, а те, **які учасники ситуації воно синтаксично допускає або вимагає**. Наприклад, 'dormir' може вживатися без вираженого додатка, тоді як 'gostar' у нормативній моделі вимагає прийменникового компонента: 'gostar de alguma coisa'.\n\nДля україномовного студента це особливо важливо: український переклад може приховувати португальський прийменник або змінювати спосіб вираження аргумента. Тому дієслово варто вчити разом із рамкою, а не лише з перекладом.",
    formulas: [
      { label: "Одновалентна рамка", pattern: "V + (S)", note: "Напр. 'dormir': суб'єкт є єдиним центральним аргументом; він може бути невираженим." },
      { label: "Двовалентна рамка", pattern: "S + V + O / PP", note: "Напр. 'ver alguém', 'gostar de alguém'." },
      { label: "Тривалентна рамка", pattern: "S + V + O + destinatário / PP", note: "Типові моделі передачі або повідомлення мають три семантичні ролі, але їхня синтаксична реалізація різниться." }
    ],
    uses: [
      { title: "Аргумент проти вільної обставини", body: "Компонент є аргументом, якщо його форма або наявність систематично визначається предикатом. 'gostar de música' не означає, що 'de música' — довільна обставина.", examples: [
        { pt: "Gosto de música brasileira.", uk: "Я люблю бразильську музику." },
        { pt: "Ela precisa de ajuda.", uk: "Їй потрібна допомога." }
      ]},
      { title: "Одна семантика — різні рамки", body: "Переклад «говорити комусь / говорити з кимось / говорити про щось» не дає однієї універсальної португальської моделі. Прийменник залежить від значення та конструкції.", examples: [
        { pt: "Falei com a Ana sobre o projeto.", uk: "Я говорив/говорила з Аною про проєкт." },
        { pt: "Falei ao diretor sobre o projeto.", uk: "Я повідомив/повідомила директорові про проєкт." }
      ]}
    ],
    examples: [
      { pt: "Ele mora em Coimbra.", uk: "Він живе в Коїмбрі." },
      { pt: "Ela confia nos amigos.", uk: "Вона довіряє друзям.", note: "'confiar em'; 'nos' = 'em + os'." },
      { pt: "Precisamos de tempo.", uk: "Нам потрібен час." },
      { pt: "O professor explicou a regra aos alunos.", uk: "Викладач пояснив правило учням." }
    ],
    mistakes: [
      { wrong: "Eu gosto música portuguesa.", right: "Eu gosto de música portuguesa.", why: "'gostar' у цій моделі керує 'de'; українське «любити» не має відповідного прийменника." },
      { wrong: "Ela precisa ajuda.", right: "Ela precisa de ajuda.", why: "У значенні «потребувати» нормативна конструкція 'precisar de + nome' вимагає прийменникової рамки." }
    ],
    ukrainian: "Українські відмінки часто кодують те, що португальська виражає прийменником або клітиком. Саме тому український переклад не можна використовувати як генератор португальського керування.",
    brPt: "Основні валентні рамки є спільним ядром PT-BR і PT-PT, але частотність окремих моделей, займенникова реалізація та розмовні альтернативи можуть відрізнятися."
  },
  {
    id: "verb-valency-arguments", slug: "verb-valency-arguments", category: "valency",
    titleUk: "Аргументи та семантичні ролі дієслова", titlePt: "Argumentos e papéis semânticos", titleEn: "Verb arguments and semantic roles",
    summary: "Як відрізняти учасника ситуації від способу його синтаксичного вираження.",
    aliases: ["аргументи дієслова", "semantic roles", "argument structure", "papéis semânticos"],
    related: ["verb-valency-frames", "argument-vs-adjunct", "verb-complement-types", "valency-overview"],
    intro: "Семантична роль відповідає на питання, **яку роль учасник виконує в ситуації**, а аргумент — на питання, чи є цей учасник частиною валентної структури предиката. Це не одне й те саме. Один і той самий тип ролі може реалізуватися різними синтаксичними формами, а одна синтаксична форма може мати різні ролі залежно від дієслова.\n\nКорисні робочі терміни: агент/ініціатор, пацієнс або тема, експерієнцер, адресат, джерело, місце. Не потрібно механічно прив'язувати кожну роль до одного відмінка чи прийменника.",
    formulas: [
      { pattern: "предикат + аргументи", note: "Аргументна структура визначається лексичним предикатом." },
      { pattern: "семантична роль ≠ синтаксична функція", note: "Суб'єкт може бути агентом, експерієнцером або іншою роллю." }
    ],
    uses: [
      { title: "Експерієнцер не обов'язково є агентом", body: "У конструкціях стану або сприйняття граматичний підмет може позначати того, хто переживає стан, а не того, хто свідомо виконує дію.", examples: [
        { pt: "A Ana gosta de música.", uk: "Ана любить музику.", note: "Ана — експерієнцер; 'de música' — компонент, вибраний предикатом." },
        { pt: "O João conhece a cidade.", uk: "Жуан знає місто." }
      ]},
      { title: "Аргумент і форма", body: "Для навчання корисно записувати не лише «значення», а й шаблон: 'gostar de', 'confiar em', 'dar algo a alguém', 'colocar algo em algum lugar'.", examples: [
        { pt: "Coloquei o livro na mesa.", uk: "Я поклав/поклала книжку на стіл." },
        { pt: "Confio nele.", uk: "Я довіряю йому.", note: "'nele' = 'em + ele'." }
      ]}
    ],
    examples: [
      { pt: "A criança abriu a porta.", uk: "Дитина відчинила двері." },
      { pt: "A porta abriu.", uk: "Двері відчинилися." },
      { pt: "Ela deu o livro ao irmão.", uk: "Вона дала книжку братові." },
      { pt: "Falámos sobre o problema.", uk: "Ми говорили про проблему." }
    ],
    mistakes: [
      { wrong: "Confio meus amigos.", right: "Confio nos meus amigos.", why: "'confiar' у цій моделі керує 'em'; 'nos' містить прийменник і артикль." }
    ],
    ukrainian: "Не намагайтеся створити таблицю «агент = підмет, об'єкт = знахідний». Португальська має багато предикатів, де семантична роль і синтаксична форма не збігаються з українською схемою."
  },
  {
    id: "verb-ditransitive-frames", slug: "verb-ditransitive-frames", category: "valency",
    titleUk: "Дитранзитивні рамки", titlePt: "Quadros ditransitivos", titleEn: "Ditransitive frames",
    summary: "Моделі з темою та адресатом/отримувачем.",
    aliases: ["дитранзитивність", "ditransitive", "дарування", "адресат"],
    related: ["verb-valency-frames", "indirect-object", "verb-clitic-frames", "verb-complement-types"],
    intro: "Дитранзитивна конструкція має щонайменше два центральні компоненти після дієслова: зазвичай **тему/передаваний об'єкт** і **отримувача або адресата**. У португальській другий компонент часто виражається прийменниковою групою, але конкретна рамка залежить від дієслова.\n\n'dar', 'enviar', 'oferecer', 'mostrar' та 'dizer' не слід вчити як один універсальний шаблон. Значення, тип другого аргумента і допустимі клітики можуть відрізнятися.",
    formulas: [
      { pattern: "S + V + tema + a + destinatário", note: "Типова модель для 'dar', 'enviar', 'oferecer'." },
      { pattern: "S + V + tema + a alguém", note: "'a' тут маркує адресата/отримувача; це не автоматично «непрямий додаток» у будь-якому сенсі." }
    ],
    uses: [
      { title: "Передавання", body: "Тема — те, що передається; адресат — той, хто отримує.", examples: [
        { pt: "Dei o livro à Maria.", uk: "Я дав/дала книжку Марії.", note: "'à' = 'a + a'." },
        { pt: "Enviei uma mensagem ao professor.", uk: "Я надіслав/надіслала повідомлення викладачеві." }
      ]},
      { title: "Показ і повідомлення", body: "Не кожне дієслово, яке перекладається як «сказати/показати», має однакову рамку.", examples: [
        { pt: "Mostrei a fotografia aos meus amigos.", uk: "Я показав/показала фотографію своїм друзям." },
        { pt: "Disse a verdade à Ana.", uk: "Я сказав/сказала правду Ані." }
      ]}
    ],
    examples: [
      { pt: "O pai deu um presente ao filho.", uk: "Батько подарував синові подарунок." },
      { pt: "A empresa enviou o documento ao cliente.", uk: "Компанія надіслала документ клієнтові." },
      { pt: "Ela ofereceu café aos convidados.", uk: "Вона запропонувала каву гостям." }
    ],
    mistakes: [
      { wrong: "Dei o livro a Maria. (коли вживається артикль перед ім'ям)", right: "Dei o livro à Maria.", why: "Якщо перед ім'ям уживається означений артикль 'a', прийменник 'a' утворює 'à'. Водночас уживання артикля перед особовими іменами має регіональну варіантність, тому правило не слід абсолютизувати." }
    ],
    brPt: "У PT-BR адресат часто реалізується як 'para + NP' у розмовному мовленні: 'Dei o livro para a Maria'. Це не означає, що конструкції з 'a' зникли; вибір залежить від дієслова, регіону й регістру."
  },
  {
    id: "verb-complement-types", slug: "verb-complement-types", category: "valency",
    titleUk: "Типи дієслівних доповнень", titlePt: "Tipos de complementos verbais", titleEn: "Verb complement types",
    summary: "Іменна група, прийменникова група, інфінітив і підрядна частина як доповнення.",
    aliases: ["типи доповнень", "complement types", "complementos verbais", "NP PP"],
    related: ["verb-valency-frames", "government-overview", "complement-clauses", "verb-government-infinitive"],
    intro: "Дієслово може вибирати різні типи доповнення: іменну групу ('ver o filme'), прийменникову групу ('gostar de música'), інфінітив ('tentar sair') або підрядну частину ('querer que ele venha'). Вибір форми — частина граматичної рамки.\n\nДля студента небезпечно виходити з припущення, що якщо український переклад має інфінітив, португальська теж мусить мати інфінітив. Після деяких дієслів можливі кілька конструкцій, але вони можуть розрізнятися суб'єктом, модальністю або регістром.",
    formulas: [
      { pattern: "V + NP", note: "'ver o filme', 'comprar uma casa'." },
      { pattern: "V + PP", note: "'gostar de música', 'confiar em alguém'." },
      { pattern: "V + infinitivo", note: "'tentar sair', 'querer sair'." },
      { pattern: "V + que + oração", note: "'querer que ele venha', 'saber que ela chegou'." }
    ],
    uses: [
      { title: "Іменна група", body: "Прямий додаток може бути повною іменною групою або займенником.", examples: [
        { pt: "Li o relatório.", uk: "Я прочитав/прочитала звіт." },
        { pt: "Conheço-o bem.", uk: "Я добре його знаю.", variety: "PT" }
      ]},
      { title: "Прийменникова група", body: "Прийменник є частиною рамки, а не довільним перекладним додатком.", examples: [
        { pt: "Precisamos de mais tempo.", uk: "Нам потрібно більше часу." },
        { pt: "Penso no problema todos os dias.", uk: "Я щодня думаю про проблему.", note: "'no' = 'em + o'." }
      ]},
      { title: "Інфінітив або підрядна частина", body: "Порівнюйте не лише переклад, а й те, хто виконує дію в доповненні.", examples: [
        { pt: "Quero sair.", uk: "Я хочу піти.", note: "Не виражений суб'єкт інфінітива збігається з 'eu'." },
        { pt: "Quero que saias.", uk: "Я хочу, щоб ти пішов/пішла.", note: "Окремий суб'єкт і finite clause." }
      ]}
    ],
    examples: [
      { pt: "Ela tentou abrir a janela.", uk: "Вона спробувала відкрити вікно." },
      { pt: "Ela insistiu em abrir a janela.", uk: "Вона наполягала на тому, щоб відкрити вікно." },
      { pt: "Ele sabe que estamos aqui.", uk: "Він знає, що ми тут." },
      { pt: "Ele decidiu sair.", uk: "Він вирішив піти." }
    ],
    mistakes: [
      { wrong: "Eu gosto música.", right: "Eu gosto de música.", why: "'gostar' вибирає прийменникове доповнення 'de'." },
      { wrong: "Ela insistiu de sair.", right: "Ela insistiu em sair.", why: "У цій рамці 'insistir' керує 'em'." }
    ],
    ukrainian: "Український інфінітив після «хотіти», «намагатися», «вирішити» зручний як семантична підказка, але не є доказом португальської структури. Перевіряйте керування конкретного дієслова."
  },
  {
    id: "verb-clitic-frames", slug: "verb-clitic-frames", category: "valency",
    titleUk: "Валентність і клітики", titlePt: "Valência e clíticos", titleEn: "Valency and clitics",
    summary: "Як роль аргумента пов'язана з формою o/a, lhe та прийменникових займенників.",
    aliases: ["клітики й валентність", "clitic frames", "valência e clíticos"],
    related: ["verb-valency-frames", "lhe-vs-o", "object-pronouns", "clitic-placement"],
    intro: "Клітик — це не просто коротка форма українського «його/йому». Його форма залежить від **синтаксичної ролі, валентної рамки та варіанта португальської**. Прямий об'єкт може бути 'o/a/os/as', тоді як типовий непрямий адресат у конструкціях із 'a' може реалізуватися як 'lhe/lhes'.\n\nPT-BR додатково має розмовні моделі з наголошеними займенниками та 'para', тому таблиця клітиків без регіонального контексту швидко стає оманливою.",
    formulas: [
      { pattern: "V + objeto direto → o/a/os/as", note: "Класична клітична модель для прямого додатка." },
      { pattern: "V + a + pessoa → lhe/lhes", note: "Типова модель непрямого адресата в стандартній системі; конкретна реалізація залежить від конструкції та різновиду." },
      { pattern: "V + PP → pronome preposicional", note: "Після 'com', 'em', 'de', 'para' тощо використовуються наголошені прийменникові займенники." }
    ],
    uses: [
      { title: "Прямий об'єкт", body: "Форма 'o/a' відповідає прямому об'єкту в традиційній клітичній системі.", examples: [
        { pt: "Vi o filme. Vi-o ontem.", uk: "Я подивився/подивилася фільм. Я подивився/подивилася його вчора.", variety: "PT" },
        { pt: "Comprei a revista. Comprei-a ontem.", uk: "Я купив/купила журнал. Я купив/купила його вчора.", variety: "PT" }
      ]},
      { title: "Адресат", body: "У 'dar o livro à Ana' тема — 'o livro', а адресат — 'à Ana'; це дає різні займенникові реалізації.", examples: [
        { pt: "Dei-lhe o livro.", uk: "Я дав/дала їй книжку.", variety: "PT" },
        { pt: "Dei o livro para ela.", uk: "Я дав/дала книжку їй.", variety: "BR", register: "colloquial" }
      ]},
      { title: "Прийменниковий займенник", body: "Якщо прийменник залишається частиною конструкції, не замінюйте його автоматично 'lhe'.", examples: [
        { pt: "Falei com ele.", uk: "Я говорив/говорила з ним." },
        { pt: "Pensei em ti.", uk: "Я думав/думала про тебе.", variety: "PT" }
      ]}
    ],
    examples: [
      { pt: "Ela ajudou-me.", uk: "Вона мені допомогла.", variety: "PT" },
      { pt: "Ela me ajudou.", uk: "Вона мені допомогла.", variety: "BR" },
      { pt: "Entreguei-lhe os documentos.", uk: "Я передав/передала їй документи.", variety: "PT" },
      { pt: "Falei com ela.", uk: "Я говорив/говорила з нею." }
    ],
    mistakes: [
      { wrong: "Eu falei-lhe com a Ana.", right: "Eu falei com a Ana. / Eu falei com ela.", why: "'com a Ana' — прийменниковий компонент 'falar com'; 'lhe' не замінює прийменниковий займенник у цій конструкції." },
      { wrong: "Dei-o à Maria. (коли 'o' має означати Марію)", right: "Dei-lhe o livro. / Dei o livro à Maria.", why: "У 'dar o livro à Maria' 'o' — прямий об'єкт, а Марія — адресат. Заміна ролей змінює граматичну структуру." }
    ],
    ukrainian: "Українські «його/їй/ним» не є готовою таблицею для португальських клітиків. Спочатку визначте валентну роль, потім форму займенника, потім позицію клітика.",
    brPt: "PT-BR частіше використовує проклітичні моделі ('me ajudou') і в розмовній мові наголошені займенники та 'para': 'dei o livro para ela'. PT-PT зберігає ширший набір енклітичних моделей у формальнішому стандартному вжитку."
  },
  {
    id: "relative-que", slug: "relative-que", category: "relative",
    titleUk: "Відносний займенник que", titlePt: "Pronome relativo que", titleEn: "Relative que",
    summary: "Найпоширеніший відносний займенник і його синтаксична роль.",
    aliases: ["відносний que", "relative que", "pronome relativo que"],
    related: ["relative-pronouns", "advanced-relatives", "relative-restrictive", "relative-where"],
    intro: "Відносне 'que' пов'язує підрядну означальну частину з antecedent — іменником або іншою групою, про яку вона дає інформацію. Його форма не змінюється за родом і числом: 'o livro que li', 'as pessoas que chegaram'.\n\nКлючове питання — **яку синтаксичну роль 'que' виконує всередині підрядної частини**. Якщо це прямий об'єкт, прийменник не потрібен; якщо дієслово вимагає прийменника, цей прийменник зберігається.",
    formulas: [
      { pattern: "antecedent + que + oração", note: "'que' може бути підметом або додатком підрядної частини." },
      { pattern: "antecedent + prep. + que + oração", note: "Прийменник перед 'que' залежить від керування: 'com que', 'em que', 'a que' тощо." }
    ],
    uses: [
      { title: "Que як прямий додаток", body: "Підрядна частина містить пропуск прямого додатка: 'O livro que comprei' = «книжка, яку я купив/купила».", examples: [
        { pt: "O livro que comprei é novo.", uk: "Книга, яку я купив/купила, нова." },
        { pt: "A pessoa que conheci ontem trabalha aqui.", uk: "Людина, яку я зустрів/зустріла вчора, працює тут." }
      ]},
      { title: "Que як підмет", body: "Якщо 'que' є підметом відносної частини, дієслово узгоджується з antecedent у числі.", examples: [
        { pt: "Os alunos que chegaram cedo entraram primeiro.", uk: "Учні, які прийшли рано, зайшли першими." },
        { pt: "A máquina que funciona melhor é esta.", uk: "Машина, яка працює краще, — ось ця." }
      ]},
      { title: "Прийменникове que", body: "Прийменник не можна вилучати лише тому, що українською переклад звучить без нього.", examples: [
        { pt: "A cidade em que nasci é pequena.", uk: "Місто, у якому я народився/народилася, невелике." },
        { pt: "A pessoa com que trabalho é brasileira.", uk: "Людина, з якою я працюю, бразилійка.", note: "У формальнішій нормі для особи часто вживають 'com quem'." }
      ]}
    ],
    examples: [
      { pt: "A casa que comprámos é antiga.", uk: "Будинок, який ми купили, старий." },
      { pt: "Os livros que estão na mesa são meus.", uk: "Книжки, які лежать на столі, мої." },
      { pt: "A cidade em que nasci é pequena.", uk: "Місто, у якому я народився/народилася, невелике." },
      { pt: "O filme de que gosto está na televisão.", uk: "Фільм, який мені подобається, показують по телебаченню." }
    ],
    mistakes: [
      { wrong: "O livro que eu gosto é bom.", right: "O livro de que eu gosto é bom.", why: "'gostar' керує 'de'; стандартна формальна відносна конструкція зберігає прийменник. Розмовні стратегії можуть відрізнятися за різновидами, тому їх не слід подавати як універсальний стандарт." }
    ],
    ukrainian: "Українське «який/яку/які» змінює форму за родом, числом і відмінком; португальське 'que' — ні. Його роль читається із синтаксису підрядної частини та прийменника."
  },
  {
    id: "relative-restrictive", slug: "relative-restrictive", category: "relative",
    titleUk: "Обмежувальні та пояснювальні відносні речення", titlePt: "Orações relativas restritivas e explicativas", titleEn: "Restrictive and non-restrictive relatives",
    summary: "Як відносне речення змінює обсяг референції.",
    aliases: ["обмежувальні відносні", "restrictive relative", "non-restrictive relative", "explicativa"],
    related: ["relative-que", "advanced-relatives", "information-structure", "punctuation"],
    intro: "Відносне речення може **обмежувати множину референтів** або лише додавати побічну інформацію про вже ідентифікований референт. У письмі ця різниця часто сигналізується комами.\n\nПорівняйте 'Os alunos que estudaram passaram' із 'Os alunos, que estudaram, passaram'. Перше може означати, що склали лише учні, які вчилися; друге подає факт навчання як додаткову характеристику всієї згаданої групи. Коми — не просто пауза, а частина інтерпретації.",
    formulas: [
      { label: "Restrictive", pattern: "NP + que + relative", note: "Без відокремлення комами; відносна частина допомагає визначити референт." },
      { label: "Non-restrictive", pattern: "NP, que + relative, ...", note: "Відносна частина додає коментар до вже ідентифікованого референта." }
    ],
    uses: [
      { title: "Обмежувальне", body: "Відносна частина є частиною ідентифікації групи.", examples: [
        { pt: "Os alunos que estudaram passaram.", uk: "Учні, які вчилися, склали іспит — тобто ця група учнів.", note: "Без ком у португальському реченні можливе restrictive-читання." },
        { pt: "Preciso dos documentos que enviaste.", uk: "Мені потрібні документи, які ти надіслав/надіслала." }
      ]},
      { title: "Пояснювальне", body: "Референт уже ідентифікований; відносна частина додає інформацію.", examples: [
        { pt: "A Ana, que mora no Porto, chega amanhã.", uk: "Ана, яка живе в Порту, приїде завтра." },
        { pt: "Lisboa, que é a capital, recebe muitos visitantes.", uk: "Лісабон, який є столицею, приймає багато відвідувачів." }
      ]}
    ],
    examples: [
      { pt: "As pessoas que trabalham aqui conhecem o sistema.", uk: "Люди, які тут працюють, знають систему.", note: "Без ком: restrictive-структура." },
      { pt: "A Ana, que já chegou, está lá fora.", uk: "Ана, яка вже прийшла, там надворі." },
      { pt: "O Pedro, que já chegou, está lá fora.", uk: "Педру, який уже прийшов, там надворі." }
    ],
    mistakes: [
      { wrong: "Автоматично ставити коми навколо кожного 'que'.", right: "Спочатку визначити, чи relative-частина обмежує референцію, чи додає коментар.", why: "Коми змінюють інформаційну структуру та можливу інтерпретацію. Українська пунктуація може мати схожі, але не тотожні ефекти." }
    ],
    ukrainian: "Для україномовного студента головна пастка — перекладати обидві конструкції однаково й не бачити різниці в референції. Перевіряйте, чи відносна частина вибирає підмножину, чи коментує вже визначену групу."
  },
  {
    id: "wh-questions", slug: "wh-questions", category: "syntax",
    titleUk: "Питальні слова та wh-питання", titlePt: "Perguntas com palavras interrogativas", titleEn: "Wh-questions",
    summary: "Хто, що, де, коли, чому, як та їхній синтаксичний статус.",
    aliases: ["wh-questions", "питальні слова", "perguntas interrogativas", "interrogativos"],
    related: ["question-word-order", "questions-br-pt", "polar-questions", "relative-pronouns"],
    intro: "Питальні слова 'quem', 'o que/que', 'qual', 'onde', 'quando', 'como', 'porquê/por que' не утворюють одну морфологічну групу. Вони можуть бути займенниками, детермінативами або прислівниковими елементами й займають різні синтаксичні ролі.\n\nПортугальська не має універсальної англійської моделі «питальне слово + do/does + підмет». У багатьох питаннях зберігається звичайна дієслівна структура, а порядок і просодія залежать від різновиду та конструкції.",
    formulas: [
      { pattern: "Quem + V ...?", note: "Питальне слово є підметом або іншим аргументом залежно від конструкції." },
      { pattern: "O que + V + S ...?", note: "Питання про прямий об'єкт." },
      { pattern: "Onde / quando / como + V ...?", note: "Питальні прислівники можуть стояти на початку без англійської допоміжної інверсії." }
    ],
    uses: [
      { title: "Питання про особу", body: "'quem' може бути підметом або додатком; його синтаксична роль визначається реченням.", examples: [
        { pt: "Quem chegou?", uk: "Хто прийшов?" },
        { pt: "Quem viste?", uk: "Кого ти бачив/бачила?" }
      ]},
      { title: "Питання про предмет", body: "'o que' часто вводить питання про річ/ситуацію; у розмовних моделях можливі коротші форми.", examples: [
        { pt: "O que compraste?", uk: "Що ти купив/купила?", variety: "PT" },
        { pt: "O que você comprou?", uk: "Що ви/ти купили?", variety: "BR" }
      ]},
      { title: "Де, коли, як", body: "Питальні прислівники прямо задають обставинний параметр.", examples: [
        { pt: "Onde moras?", uk: "Де ти живеш?", variety: "PT" },
        { pt: "Onde você mora?", uk: "Де ви/ти живете?", variety: "BR" },
        { pt: "Quando começa o curso?", uk: "Коли починається курс?" }
      ]}
    ],
    examples: [
      { pt: "Como te chamas?", uk: "Як тебе звати?", variety: "PT" },
      { pt: "Como você se chama?", uk: "Як вас/тебе звати?", variety: "BR" },
      { pt: "Por que você está aqui?", uk: "Чому ви/ти тут?", variety: "BR" },
      { pt: "Porque estás aqui?", uk: "Чому ти тут?", variety: "PT", note: "Письмову норму оформлення 'porquê/porque' слід перевіряти за конкретним різновидом і довідником." }
    ],
    mistakes: [
      { wrong: "Why do you live here? → *Por que você do mora aqui?", right: "Por que você mora aqui?", why: "Португальська не копіює англійську систему do-support. 'mora' вже є особовою формою дієслова." },
      { wrong: "O que é que você quer? = єдина можлива форма.", right: "O que você quer? / O que é que você quer?", why: "'é que' може додавати розмовну/фокусну структуру; воно не є обов'язковим у кожному wh-питанні." }
    ],
    ukrainian: "Українські 'хто/що/де/коли/чому/як' добре передають семантичний параметр, але не диктують португальську позицію та керування. Не додавайте 'do' за аналогією з англійською.",
    brPt: "PT-BR часто використовує явний займенник і розмовний SVO у wh-питаннях; PT-PT частіше має інші моделі позиції займенника та енклізи. Це не означає, що один різновид має «правильні» питання, а інший — ні."
  }
];
