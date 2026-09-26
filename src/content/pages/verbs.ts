import type { GrammarPage } from "../types";
const p=(id:string,slug:string,t:string,pt:string,en:string,s:string,i:string,teachingNote:string,e:GrammarPage["examples"],r:string[]=[]):GrammarPage=>({id,slug,category:"verbs",titleUk:t,titlePt:pt,titleEn:en,summary:s,aliases:[t,slug],related:r,intro:teachingNote ? `${i}\n\n${teachingNote}` : i,examples:e});
export const pages:GrammarPage[]=[
p("verb-system","system","Дієслівна система","Sistema verbal","Verb system","Особа, час, спосіб і перифрази.","Португальське дієслово кодує особу, число, час, спосіб та інші граматичні значення. Частина значень виражається аналітично.","Не вчіть форми лише як таблицю: пов'язуйте їх із синтаксичною функцією.",[{pt:"eu falo",uk:"я говорю"},{pt:"nós falámos",uk:"ми говорили / поговорили",variety:"PT"}],["verb-system","subjunctive-overview","ir-infinitive"]),
p("regular-ar","regular-ar","Регулярні дієслова на -ar","Verbos regulares em -ar","Regular -ar verbs","Модель falar та інших дієслів.","Дієслова на -ar утворюють регулярні особові форми за типовою парадигмою, хоча окремі орфографічні чергування мають свої правила.","Вивчайте основу та закінчення окремо.",[{pt:"falo, falas, fala",uk:"говорю, говориш, говорить"},{pt:"falamos",uk:"ми говоримо"}],["verb-system","presente"]),
p("regular-er","regular-er","Регулярні дієслова на -er","Verbos regulares em -er","Regular -er verbs","Модель comer.","Дієслова на -er мають іншу парадигму закінчень, але принцип виділення основи та закінчення той самий.","Порівнюйте comer з falar, не виводячи одну модель з іншої.",[{pt:"como, comes, come",uk:"їм, їси, їсть"}],["verb-system","presente"]),
p("regular-ir","regular-ir","Регулярні дієслова на -ir","Verbos regulares em -ir","Regular -ir verbs","Модель abrir.","Дієслова на -ir мають власні закінчення в частині часів і способів, хоча багато форм близькі до -er.","Вивчайте повну парадигму, якщо дієслово частотне.",[{pt:"abro, abres, abre",uk:"відкриваю, відкриваєш, відкриває"}],["verb-system","presente"]),
p("stem-changing","stem-changing","Чергуються голосні в основі","Alternâncias do radical","Stem-changing verbs","Нерегулярність основи.","Частина дієслів має чергування голосних або інші зміни основи в окремих формах. Це не одна універсальна модель.","Запам'ятовуйте групу форм конкретного дієслова.",[{pt:"poder → posso",uk:"могти → можу"},{pt:"fazer → faço",uk:"робити → роблю"}],["irregular-verbs","spelling-changing"]),
{
  id:"spelling-changing",slug:"spelling-changing",category:"verbs",
  titleUk:"Орфографічні зміни основи",titlePt:"Alterações ortográficas",titleEn:"Spelling-changing verbs",
  summary:"Зміни написання в дієслівних формах, потрібні для збереження очікуваної вимови.",
  aliases:["орфографічні зміни","alterações ortográficas","spelling changes"],
  related:["reading-rules","acordo-ortografico","regular-ar","presente-subjuntivo"],
  intro:"Орфографічна зміна не обов'язково означає морфологічну нерегулярність. Частина дієслів змінює літери перед певними закінченнями, щоб зберегти звукове значення основи: ficar → fiquei, pagar → paguei, começar → comecei.",
  definition:"Орфографічною зміною називаємо зміну графем у формі дієслова, яка підтримує потрібну вимову або відповідає позиційним правилам письма.",
  formation:"Найважливіші моделі пов'язані з c/ç, g/gu та qu. Наприклад, перед e/i написання може змінитися, щоб зберегти звук основи; конкретну форму визначає закінчення. Тому треба вчити не «дієслово неправильне», а правило взаємодії основи, закінчення та орфографії.",
  uses:[
   {title:"c → qu",body:"У формах, де після основи мала б стояти e/i, qu може зберігати звук /k/.",examples:[ex("ficar → fiquei","залишатися → залишився/лася"),ex("ficar → fique","залишайся / щоб залишився/лася")]},
   {title:"g → gu",body:"gu може зберігати твердий /g/ перед e/i.",examples:[ex("pagar → paguei","платити → заплатив/ла"),ex("chegar → cheguei","прибути → прибув/ла")]},
   {title:"c → ç",body:"ç перед a/o/u може зберігати сибілянтний звук, коли морфологічна форма змінює контекст написання.",examples:[ex("começar → começo","починати → починаю"),ex("começar → comecei","починати → почав/ла")]},
   {title:"Не плутати з нерегулярністю",body:"Форма може бути морфологічно регулярною, хоча її написання не збігається з механічним додаванням закінчення.",examples:[ex("pagar → paguei","платити → заплатив/ла"),ex("ficar → fiquei","залишатися → залишився/лася")]}
  ],
  examples:[ex("Ontem fiquei em casa.","Учора я залишився/залишилася вдома."),ex("Cheguei cedo.","Я прийшов/прийшла рано."),ex("Comecei o trabalho.","Я почав/почала роботу.")],
  mistakes:[
   mistake("ficai","fiquei","У цій формі qu потрібне для збереження вимови /k/."),
   mistake("pagai","paguei","Перед e графічна група gu зберігає потрібний звук."),
   mistake("comecei → comesei","comecei","Орфографічна модель не визначається українською передачею звука.")
  ],
  ukrainian:"Українська теж має орфографічні чергування, але їхні умови інші. Не намагайтеся передати португальську форму за принципом «основа + закінчення» без перевірки написання.",
  brPt:"Ці базові орфографічні механізми є спільними для PT-BR і PT-PT. Відмінності вимови не скасовують спільної нормативної графіки там, де діє одна й та сама орфографічна модель.",
  regional:"Опис стосується стандартної сучасної орфографії; Acordo Ortográfico не перетворює ці чергування на окремі національні системи.",
  sources:[{label:"Camões — Referencial Camões PLE",url:"https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple"}],
  depth:"high"
},
p("irregular-verbs","irregular","Нерегулярні дієслова","Verbos irregulares","Irregular verbs","ser, estar, ter, fazer, dizer, ir та інші.","Нерегулярні дієслова мають форми, які не виводяться лише з регулярної моделі. Найчастотніші варто вчити першими як парадигми.","Нерегулярність часто локальна: одне дієслово може мати регулярні форми в одних часах і нерегулярні в інших.",[{pt:"sou, és, é",uk:"є / являюся, єш, є",variety:"PT"},{pt:"vou, vais, vai",uk:"іду, йдеш, іде"}],["ser","estar","ir-vir"]),
p("ser","ser","ser","Ser","ser","Ідентифікація, класифікація та характеристики.","ser пов'язує підмет із іменною або прикметниковою характеристикою та бере участь у пасиві. Вибір ser/estar залежить від конструкції та значення, а не лише від простого правила «постійне/тимчасове».","Порівнюйте ser із estar у конкретних контекстах.",[{pt:"Ela é médica.",uk:"Вона лікарка."},{pt:"O livro é interessante.",uk:"Книжка цікава."}],["ser-estar","ser-passive"]),
p("estar","estar","estar","Estar","estar","Стан, місце та прогресивні конструкції.","estar бере участь у предикатах стану, локалізації та прогресивних конструкціях. Його значення залежить від лексичної рамки.","Не зводьте estar до українського «бути» без аналізу предиката.",[{pt:"Estou em casa.",uk:"Я вдома."},{pt:"Estou a estudar.",uk:"Я зараз навчаюся.",variety:"PT"}],["ser-estar","progressive-br-pt"]),
p("ficar","ficar","ficar","Ficar","ficar","Залишатися, ставати, перебувати в місці.","ficar має кілька пов'язаних, але різних значень: локалізація, залишення в стані, зміна стану та результативні конструкції.","Переклад «залишатися» не охоплює всі моделі.",[{pt:"Fico em casa.",uk:"Я залишаюся вдома."},{pt:"A porta ficou aberta.",uk:"Двері залишилися відчиненими."}],["ser-estar-ficar"]),
p("ser-estar","ser-estar","ser чи estar","Ser ou estar","ser vs estar","Контраст предикації та стану.","ser часто вводить класифікацію, ідентичність або характеристику; estar — стан, локалізацію чи інший контекстуальний предикат. Межі залежать від конструкції.","Не вчіть правило як абсолютну семантичну дихотомію.",[{pt:"Ele é brasileiro.",uk:"Він бразилець."},{pt:"Ele está cansado.",uk:"Він втомлений."}],["ser","estar"]),
p("ser-estar-ficar","ser-estar-ficar","ser, estar і ficar","Ser, estar e ficar","ser, estar and ficar","Три дієслова зв'язки та зміни стану.","ser, estar і ficar частково перетинаються, але мають різні валентні та семантичні рамки. ficar особливо важливий для результативних і локативних конструкцій.","Порівнюйте мінімальні контрасти в контексті.",[{pt:"A porta está aberta.",uk:"Двері відчинені."},{pt:"A porta ficou aberta.",uk:"Двері залишилися відчиненими."}],["ser-estar","ficar"]),
p("ter","ter","ter","Ter","ter","Володіння, стани та допоміжні конструкції.","ter виражає володіння та входить до багатьох сталих конструкцій і складених часових форм.","Перевіряйте, чи ter є повнозначним дієсловом, чи допоміжним.",[{pt:"Tenho um livro.",uk:"У мене є книжка."},{pt:"Tenho estudado muito.",uk:"Я багато вчуся останнім часом."}],["ter-haver","compound-tenses"]),
p("haver","haver","haver","Haver","haver","Екзистенційні та допоміжні конструкції.","haver може бути допоміжним дієсловом і входити до екзистенційної конструкції há. В екзистенційному значенні форма há не узгоджується з множиною.","Не змішуйте haver з ter у регіональних екзистенційних моделях.",[{pt:"Há muitas pessoas aqui.",uk:"Тут багато людей."},{pt:"Há dois problemas.",uk:"Є дві проблеми."}],["ter-haver","existential","agreement-sv"]),
p("ter-haver","ter-haver","ter чи haver","Ter ou haver","ter vs haver","Допоміжні та екзистенційні функції.","У сучасній португальській ter і haver мають різний розподіл. ter широко використовується як допоміжне в складених конструкціях, haver — в окремих книжних/складених і екзистенційних моделях.","Визначайте функцію перед вибором дієслова.",[{pt:"Tenho estudado.",uk:"Я навчався/навчалася останнім часом."},{pt:"Há problemas.",uk:"Є проблеми."}],["ter","haver"]),
p("gostar","gostar","gostar de","Gostar de","gostar de","Подобатися, любити та керування de.","gostar у стандартній моделі керує de: gostar de música, gostar de alguém. Це важливий приклад дієслівного керування.","Український переклад «любити» не підказує португальський прийменник.",[{pt:"Gosto de música.",uk:"Я люблю музику."},{pt:"Gosto deste livro.",uk:"Мені подобається ця книжка."}],["verb-preposition","government-overview"]),
p("saber-conhecer","saber-conhecer","saber і conhecer","Saber e conhecer","saber vs conhecer","Знати факт/уміння та бути знайомим із людиною/місцем.","saber часто стосується інформації або вміння, conhecer — знайомства з особою, місцем чи досвідом. Контекст визначає точний переклад.","Не перекладайте обидва дієслова одним українським «знати».",[{pt:"Sei a resposta.",uk:"Я знаю відповідь."},{pt:"Conheço Lisboa.",uk:"Я знаю Лісабон / знайомий із Лісабоном."}],["valency-overview"]),
p("levar-trazer","levar-trazer","levar і trazer","Levar e trazer","levar vs trazer","Рух відносно точки відліку.","levar зазвичай кодує перенесення від точки відліку, trazer — до неї або разом із нею. Поняття deictic center залежить від контексту.","Визначайте, де перебуває мовцева точка відліку.",[{pt:"Leva isto para casa.",uk:"Віднеси це додому."},{pt:"Traz o livro.",uk:"Принеси книжку."}],["ir-vir"]),
p("ir-vir","ir-vir","ir і vir","Ir e vir","ir vs vir","Йти/їхати від і до точки відліку.","ir позначає рух від деїктичного центру, vir — до нього. У непрямій мові точка відліку може змінюватися.","Контекст важливіший за сталий переклад «йти/приходити».",[{pt:"Vou para casa.",uk:"Я йду додому."},{pt:"Vem cá.",uk:"Іди сюди / приходь сюди."}],["levar-trazer","reference-overview"]),
p("poder-dever-querer","poder-dever-querer","poder, dever, querer","Poder, dever, querer","poder, dever, querer","Можливість, обов'язок і воля.","Ці дієслова формують модальні конструкції з інфінітивом. Їхня семантика залежить від часу, способу й контексту.","Порівнюйте dever як обов'язок і висновок та poder як можливість, дозвіл або ввічливе прохання.",[{pt:"Posso entrar?",uk:"Можна увійти?"},{pt:"Deves estudar.",uk:"Тобі слід вчитися."},{pt:"Quero sair.",uk:"Я хочу вийти."}],["modality-overview","infinitive-vs-subjunctive"]),
p("pronominal-verbs","pronominal","Зворотні та прономінальні дієслова","Verbos pronominais","Pronominal verbs","Дієслова з обов'язковою або лексичною займенниковою формою.","Частина дієслів уживається з clitic pronoun як частина лексичної моделі: lembrar-se, queixar-se тощо. Це не завжди просте зворотне значення.","Вивчайте дієслово разом із його займенниковою рамкою.",[{pt:"Lembro-me disso.",uk:"Я це пам'ятаю.",variety:"PT"},{pt:"Ele queixou-se.",uk:"Він поскаржився.",variety:"PT"}],["se-pronominal","clitic-placement"]),
{
  id: "por-verb",
  slug: "por-verb",
  category: "verbs",
  titleUk: "Дієслово pôr і похідні",
  titlePt: "Pôr e derivados",
  titleEn: "pôr and derivatives",
  summary: "Парадигма pôr, ключові форми та похідні дієслова з основою -por.",
  aliases: ["pôr", "por", "pôr e derivados", "дієслово pôr"],
  related: ["irregular-verbs", "homograph-accents", "verb-system"],
  intro: "Pôr — високочастотне нерегулярне дієслово зі значенням «класти, ставити, поміщати». Його треба відрізняти від прийменника por: діакритика в інфінітиві є частиною нормативного написання, тоді як форми парадигми мають інші акцентні моделі.",
  definition: "Pôr — нерегулярне дієслово; його форми не виводяться з сучасної регулярної моделі дієслів на -or.",
  formation: "У теперішньому часі: ponho, pões, põe, pomos, pondes, põem. У минулому perfeito simples: pus, puseste, pôs, pusemos, pusestes, puseram. У майбутньому простому: porei, porás, porá, poremos, poreis, porão. Інфінітив зберігає циркумфлекс: pôr.",
  uses: [
    {title:"Базове значення",body:"Позначає розміщення або встановлення предмета.",examples:[{pt:"Vou pôr o livro na mesa.",uk:"Я покладу книжку на стіл."},{pt:"Põe as chaves aqui.",uk:"Поклади ключі сюди."}]},
    {title:"Теперішній час",body:"Форми мають окрему основу pon-.",examples:[{pt:"Ela põe o café na mesa.",uk:"Вона ставить каву на стіл."},{pt:"Nós pomos tudo no lugar.",uk:"Ми все кладемо на місце."}]},
    {title:"Минулий час",body:"Форми perfeito simples мають основу pus-.",examples:[{pt:"Ontem pus o livro aqui.",uk:"Учора я поклав/поклала книжку сюди."},{pt:"Eles puseram tudo em ordem.",uk:"Вони все впорядкували."}]},
    {title:"Похідні",body:"compor, propor, impor, repor, dispor та інші дієслова успадковують частину нерегулярної морфології, але мають власні значення.",examples:[{pt:"Ela propôs uma solução.",uk:"Вона запропонувала рішення."},{pt:"O regulamento impõe limites.",uk:"Положення встановлює обмеження."}]}
  ],
  examples:[{pt:"Vou pôr a mesa.",uk:"Я накрию на стіл."},{pt:"Ele põe o livro aqui.",uk:"Він кладе книжку сюди."},{pt:"Ontem pus as chaves na gaveta.",uk:"Учора я поклав/поклала ключі в шухляду."}],
  mistakes:[
    {wrong:"por",right:"pôr",why:"В інфінітиві дієслово пишеться pôr; por без акценту — прийменник."},
    {wrong:"poni",right:"pus",why:"Минулий час має нерегулярну основу pus-."},
    {wrong:"porei = регулярне дієслово porear",right:"porei",why:"Майбутні форми походять від інфінітива pôr із власною парадигмою."}
  ],
  ukrainian:"Українські дієслова «класти», «ставити», «покласти» розподіляють значення інакше. Pôr має ширший набір конструкцій, тому переклад «класти» не охоплює всіх уживань. Українська також не має прямого орфографічного аналога пари pôr / por.",
  brPt:"Парадигма pôr спільна для PT-BR і PT-PT. Відмінності тут переважно лексичні або стилістичні, а не морфологічні.",
  regional:"Стандартна парадигма є спільною для основних національних різновидів португальської.",
  sources:[{label:"Camões — Referencial Camões PLE",url:"https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple"}],
  depth:"high"
},
];