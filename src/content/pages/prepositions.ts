import type { GrammarPage } from "../types";
const p=(id:string,slug:string,t:string,pt:string,en:string,s:string,i:string,teachingNote:string,e:GrammarPage["examples"],r:string[]=[]):GrammarPage=>({id,slug,category:"prepositions",titleUk:t,titlePt:pt,titleEn:en,summary:s,aliases:[t,slug],related:r,intro:teachingNote ? `${i}\n\n${teachingNote}` : i,examples:e});
export const pages:GrammarPage[]=[
p("prepositions-overview","overview","Прийменники: система","Preposições","Prepositions overview","Основні прийменники та їхні функції.","Прийменники a, de, em, por, para, com, sem та інші вводять аргументи, обставини й сталі конструкції. Їх не можна повністю звести до українських відмінків.","Вивчайте прийменник разом із керуванням дієслова або сталою рамкою.",[{pt:"Vou a Lisboa.",uk:"Я їду до Лісабона."},{pt:"Moro em Lisboa.",uk:"Я живу в Лісабоні."}],["government-overview","contractions-overview"]),
p("prep-a","a","Прийменник a","Preposição a","Preposition a","Напрямок, адресат, час і керування.","a вводить низку різних відношень: напрямок, адресата, момент часу та аргумент деяких дієслів. Перед означеним артиклем виникають контракції ao, à, aos, às.","Не перекладайте a одним українським прийменником.",[{pt:"Vou ao Porto.",uk:"Я їду до Порту."},{pt:"Chego às oito.",uk:"Я прибуваю о восьмій."},{pt:"Dou o livro a Maria.",uk:"Я даю книжку Марії."}],["a-article","crase","government-overview"]),
p("prep-de","de","Прийменник de","Preposição de","Preposition de","Походження, належність, матеріал і багато керувальних моделей.","de має широкий спектр функцій: origem, posse, matéria, характеристика та інфінітивні конструкції. Перед артиклем він часто контрагується: do, da, dos, das.","Значення визначається конструкцією.",[{pt:"Sou de Kyiv.",uk:"Я з Києва."},{pt:"O livro de Maria.",uk:"Книжка Марії."}],["de-article","infinitive-prepositions"]),
p("prep-em","em","Прийменник em","Preposição em","Preposition em","Місце, час і стан.","em вводить місце, час та інші обставинні або лексикалізовані відношення. Перед артиклем виникають no, na, nos, nas.","Відрізняйте em від a у моделях руху та місця.",[{pt:"Estou em casa.",uk:"Я вдома."},{pt:"Moro no Porto.",uk:"Я живу в Порту."}],["em-article","existential"]),
p("prep-por","por","Прийменник por","Preposição por","Preposition por","Шлях, причина, засіб, тривалість та агент пасиву.","por має кілька системних значень і контрагується з артиклем у pelo/pela/pelos/pelas.","Не зводьте por до одного українського «через».",[{pt:"Passei por Lisboa.",uk:"Я проїхав/проїхала через Лісабон."},{pt:"Foi escrito por Ana.",uk:"Це було написано Аною."}],["por-article","ser-passive","por-para"]),
p("prep-para","para","Прийменник para","Preposição para","Preposition para","Напрямок, мета, адресат і призначення.","para часто виражає спрямованість до цілі, призначення або адресата. У розмовній мові, особливо в PT-BR, можливе скорочення pra.","Не змішуйте para з por лише за українським перекладом.",[{pt:"Vou para casa.",uk:"Я йду додому."},{pt:"Isto é para ti.",uk:"Це для тебе."}],["por-para","infinitive-prepositions"]),
p("por-para","por-para","por чи para","Por ou para","por vs para","Контраст траєкторії/причини та цілі/спрямованості.","Контраст залежить від конструкції. para часто кодує ціль, адресата або призначення; por — шлях, причину, обмін, тривалість або агента пасиву. Це не абсолютна семантична дихотомія.","Вивчайте дієслово та прийменникову рамку разом.",[{pt:"Estudo para aprender.",uk:"Я навчаюся, щоб навчитися."},{pt:"Passei por Coimbra.",uk:"Я проїхав/проїхала через Коїмбру."},{pt:"Estudei por duas horas.",uk:"Я вчився/вчилася дві години."},{pt:"O relatório é para amanhã.",uk:"Звіт потрібен до завтра."}],["prep-por","prep-para","government-overview"]),
{
 id:"prep-com",slug:"com-sem",category:"prepositions",
 titleUk:"com і sem",titlePt:"Com e sem",titleEn:"com and sem",
 summary:"Супровід, інструмент, спосіб, матеріал і відсутність; займенникові форми comigo тощо.",
 aliases:["com","sem","comigo","contigo","consigo","без"],
 related:["prepositional-pronouns","prep-de","prep-por","compound-prepositions"],
 intro:"Прийменники `com` і `sem` утворюють протиставну пару: `com` додає учасника, засіб або супровід, а `sem` прибирає його. Але переклад «з/без» не охоплює всіх уживань: `com` може вводити інструмент, спосіб або матеріал, а `sem` — відсутність очікуваного компонента. Важливо також відрізняти звичайний прийменник від злитих займенникових форм `comigo, contigo, consigo, connosco, convosco`.",
 definition:"`com` виражає супровід, інструмент, засіб, спосіб або інші залежні відношення; `sem` виражає відсутність. Обидва можуть вводити іменну групу, займенник або, у відповідних конструкціях, інфінітив.",
 formation:"com + іменна група: `com o João`; com + займенник: `com ele`; sem + іменна група: `sem açúcar`; sem + інфінітив: `sem dizer nada`. Для 1-ї та 2-ї особи після com уживаються спеціальні форми `comigo, contigo, connosco, convosco`; `consigo` має рефлексивне/ввічливе вживання залежно від контексту.",
 uses:[
  {title:"Супровід",body:"`com` показує, хто або що супроводжує суб'єкта.",examples:[{pt:"Vou com a minha irmã.",uk:"Я йду з моєю сестрою."},{pt:"Jantei com eles.",uk:"Я вечеряв/вечеряла з ними."}]},
  {title:"Інструмент і засіб",body:"`com` вводить предмет, яким виконують дію, або засіб, через який вона здійснюється.",examples:[{pt:"Cortei o pão com uma faca.",uk:"Я нарізав/нарізала хліб ножем."},{pt:"Escreveu com cuidado.",uk:"Він/вона писав/писала обережно."}]},
  {title:"Матеріал або склад",body:"У частині іменних конструкцій `com` описує наявність певного компонента.",examples:[{pt:"Um café com leite.",uk:"Кава з молоком."},{pt:"Uma casa com jardim.",uk:"Будинок із садом."}]},
  {title:"Відсутність",body:"`sem` позначає відсутній компонент; перед інфінітивом воно часто означає невиконання супровідної дії.",examples:[{pt:"Café sem açúcar.",uk:"Кава без цукру."},{pt:"Saiu sem dizer nada.",uk:"Він/вона вийшов/вийшла, нічого не сказавши."}]},
  {title:"Займенникові форми",body:"Після `com` не всі наголошені займенники зберігають звичайну форму: `comigo, contigo, connosco, convosco`. `Consigo` пов'язане з рефлексивним/ввічливим займенником `si`.",examples:[{pt:"Vem comigo.",uk:"Ходімо зі мною."},{pt:"Ele falou contigo.",uk:"Він поговорив із тобою."},{pt:"Ela levou o documento consigo.",uk:"Вона взяла документ із собою."}]}
 ],
 examples:[
  {pt:"Trabalho com dados.",uk:"Я працюю з даними."},
  {pt:"Não saio sem casaco.",uk:"Я не виходжу без пальта."},
  {pt:"Fiz isso com cuidado.",uk:"Я зробив/зробила це обережно."},
  {pt:"Ele saiu sem se despedir.",uk:"Він вийшов, не попрощавшись."}
 ],
 mistakes:[
  {wrong:"Vou com eu.",right:"Vou comigo.",why:"Після `com` для 1-ї особи однини використовується спеціальна форма `comigo`, а не звичайне `eu`."},
  {wrong:"Ela veio com mim.",right:"Ela veio comigo.",why:"`mim` — тонічна форма після багатьох прийменників, але після `com` існує спеціальна форма `comigo`."},
  {wrong:"Saiu sem falou comigo.",right:"Saiu sem falar comigo.",why:"Після `sem` для одночасного/супровідного суб'єкта типова інфінітивна конструкція: `sem + infinitivo`."}
 ],
 ukrainian:"Українські «з/із» і «без» часто передають базову опозицію, але український прийменник не передбачає португальської морфології `comigo/contigo`. Також українське орудне «ножем» у португальській зазвичай виражається `com + NP`: `com uma faca`.",
 brPt:"Базові функції `com/sem` спільні для PT-BR і PT-PT. Відмінності помітні насамперед у займенникових формах та орфографічній варіантності: PT-PT `connosco/convosco` та PT-BR `conosco/vocês` належать до ширшої системи варіантів; конкретну форму слід співвідносити з різновидом і регістром.",
 regional:"Опис стосується сучасної стандартної португальської. В окремих розмовних різновидах можливі ширші конструкції та скорочення, але базова семантична опозиція зберігається.",
 sources:[{label:"Camões — Referencial Camões PLE",url:"https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple"}],
 depth:"high"
},
p("prep-other","other","Інші прийменники","Outras preposições","Other prepositions","sobre, entre, até, desde, contra, perante та інші.","Другорядні прийменники мають конкретні просторові, часові та абстрактні значення. Частина з них входить до складених прийменників.","Вчіть їх через приклади, а не через довгий список перекладів.",[{pt:"entre amigos",uk:"між друзями"},{pt:"desde ontem",uk:"від учора"},{pt:"até amanhã",uk:"до завтра"}],["compound-prepositions","prepositions-overview"]),
p("verb-preposition","verb-preposition","Дієслово + прийменник","Verbo e preposição","Verb + preposition","Керування дієслів.","Деякі дієслова вибирають прийменник як частину своєї валентної моделі: gostar de, assistir a у нормативній моделі, precisar de. Український переклад не гарантує той самий прийменник.","Запам'ятовуйте дієслово разом із його моделлю.",[{pt:"Gosto de música.",uk:"Я люблю музику."},{pt:"Preciso de ajuda.",uk:"Мені потрібна допомога."}],["government-overview","valency-overview"]),
{
  id:"compound-prepositions",
  slug:"compound",
  category:"prepositions",
  titleUk:"Складені прийменники",
  titlePt:"Locuções prepositivas",
  titleEn:"Compound prepositions",
  summary:"Прийменникові сполуки на кшталт de acordo com, por causa de, apesar de та їхні синтаксичні рамки.",
  aliases:["складені прийменники","locuções prepositivas","por causa de","de acordo com","apesar de"],
  related:["prep-other","subordinating","concessive-clauses","purpose-clauses"],
  intro:"Складена прийменникова конструкція (locução prepositiva) складається з кількох слів, але функціонує як одна прийменникова рамка. Для користувача важливо вчити не окремі компоненти, а всю модель: por causa de + іменна група, de acordo com + іменна група, apesar de + іменна група або інфінітив. У таких сполуках останній прийменник часто визначає, як приєднується залежний компонент: por causa do atraso, de acordo com a lei, apesar de estar cansado.",
  definition:"Locução prepositiva — стійка багатослівна конструкція, яка вводить залежний компонент і виконує прийменникову функцію. Її не слід аналізувати як випадкову послідовність слів лише за буквальним значенням кожного компонента.",
  formation:"Типові рамки мають форму прийменникового компонента + іменник + простий прийменник: por causa de, de acordo com, em vez de. Після фінального de можливе скорочення з артиклем у відповідних умовах: por causa do trânsito, em vez da reunião. Частина конструкцій допускає інфінітив: apesar de estar cansado, a fim de estudar. Якщо після locução стоїть повне підрядне з особовою формою дієслова, потрібна вже інша синтаксична модель, а не механічне додавання qualquer de.",
  uses:[
    {title:"Причина",body:"por causa de вводить причину; після нього природно стоїть іменна група. Для конкретного іменника фінальне de може скорочуватися з означеним артиклем: por causa de + o → por causa do.",examples:[{pt:"Fiquei em casa por causa da chuva.",uk:"Я залишився/залишилася вдома через дощ."},{pt:"Chegámos tarde por causa do trânsito.",uk:"Ми запізнилися через рух на дорогах.",variety:"PT"}]},
    {title:"Відповідність",body:"de acordo com вводить джерело, правило, документ або критерій, з яким щось узгоджується. com тут є частиною всієї рамки, тому не замінюйте його випадковим прийменником.",examples:[{pt:"De acordo com a lei, isto é permitido.",uk:"Відповідно до закону це дозволено."},{pt:"De acordo com os dados, a tendência mudou.",uk:"Відповідно до даних тенденція змінилася."}]},
    {title:"Допустовість",body:"apesar de вводить обставину, яка не скасовує основного твердження. Після нього можливі іменна група, займенникова конструкція або інфінітив.",examples:[{pt:"Apesar do frio, saímos.",uk:"Попри холод, ми вийшли."},{pt:"Apesar de estar cansado, continuou.",uk:"Попри втому, він продовжив."}]},
    {title:"Заміна",body:"em vez de показує, що одна дія, особа або річ замінює іншу. Перед іменником можливе скорочення de + означений артикль: em vez de o → em vez do.",examples:[{pt:"Em vez de sair, ficou em casa.",uk:"Замість того щоб вийти, він залишився вдома."},{pt:"Em vez do autocarro, fomos a pé.",uk:"Замість автобуса ми пішли пішки.",variety:"PT"}]},
    {title:"Мета",body:"a fim de виражає мету в книжнішому або офіційному стилі. Після нього типовий інфінітив, а не довільна особова підрядна частина.",examples:[{pt:"Estudo a fim de melhorar.",uk:"Я навчаюся, щоб покращити результат."},{pt:"A equipa reuniu-se a fim de discutir o plano.",uk:"Команда зібралася, щоб обговорити план.",variety:"PT"}]},
    {title:"Інші частотні рамки",body:"До тієї самої групи належать завдяки функції та цілі такі сполуки, як junto de, perto de, longe de, antes de, depois de, por meio de та em frente de. Не всі вони однаково книжні чи однаково «цілісні», але для мовця важлива готова синтаксична рамка.",examples:[{pt:"Mora perto de Lisboa.",uk:"Він/вона живе поблизу Лісабона."},{pt:"Falámos depois da reunião.",uk:"Ми поговорили після зустрічі."},{pt:"Enviou o documento por meio de um formulário.",uk:"Він/вона надіслав(ла) документ за допомогою форми."}]}
  ],
  examples:[
    {pt:"por causa do trabalho",uk:"через роботу"},
    {pt:"de acordo com os dados",uk:"відповідно до даних"},
    {pt:"apesar da dificuldade",uk:"попри труднощі"},
    {pt:"em vez de esperar",uk:"замість того щоб чекати"},
    {pt:"a fim de melhorar",uk:"щоб покращити результат"},
    {pt:"perto da estação",uk:"біля / поблизу станції"}
  ],
  mistakes:[
    {wrong:"por causa a chuva",right:"por causa da chuva",why:"Locução закінчується на de; перед означеним жіночим іменником de + a скорочується до da."},
    {wrong:"de acordo para a lei",right:"de acordo com a lei",why:"com є частиною нормативної рамки de acordo com."},
    {wrong:"apesar que estava cansado",right:"apesar de estar cansado",why:"Для цієї інфінітивної моделі вживається apesar de + infinitivo; повне речення потребує іншої підрядної конструкції."},
    {wrong:"em vez para sair",right:"em vez de sair",why:"Стандартна рамка заміни — em vez de + infinitivo/іменна група."},
    {wrong:"a fim que melhorar",right:"a fim de melhorar",why:"У моделі мети a fim de приєднує інфінітив."}
  ],
  ukrainian:"Українські «через», «відповідно до», «попри», «замість», «біля» частково відповідають португальським locuções, але одна українська прийменникова форма не обов'язково відповідає одному португальському слову. Вивчайте рамку цілком і звертайте увагу на останній прийменник: por causa de, de acordo com, apesar de, em vez de. Український переклад може приховувати цю внутрішню структуру.",
  brPt:"Основні locuções prepositivas спільні для PT-BR і PT-PT. Відмінності частіше стосуються частотності, регістру та лексичних альтернатив, а не базової синтаксичної функції. Якщо приклад марковано різновидом, це має бути конкретна варіантна перевага, а не припущення про окрему систему.",
  regional:"Опис стосується стандартної сучасної португальської; окремі сполуки можуть бути стилістично книжними або мати жанрові переваги. Для офіційного письма варто перевіряти нормативну модель цілком, а не будувати locução буквальним перекладом з української.",
  sources:[{label:"Camões — Referencial Camões PLE",url:"https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple"}],
  depth:"high"
},
];