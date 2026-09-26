import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";
const p=(id:string,slug:string,titleUk:string,titlePt:string,titleEn:string,summary:string,intro:string,teachingNote:string,examples:GrammarPage["examples"],related:string[]=[]):GrammarPage=>({id,slug,category:"adjectives",titleUk,titlePt,titleEn,summary,aliases:[titleUk,slug],related,intro:teachingNote ? `${intro}\n\n${teachingNote}` : intro,examples,markers:[],mistakes:[]});
export const pages:GrammarPage[]=[
p("adjective-agreement","agreement","Узгодження прикметників","Concordância dos adjetivos","Adjective agreement","Рід і число прикметника.","Атрибутивний прикметник узгоджується з іменником у роді та числі. Для прикметників на -e або приголосний форма може не змінювати рід, але число зазвичай маркується. Якщо форма прикметника не показує рід, це не означає відсутності узгодження: рід видно з іменника, артикля або іншого визначника.","Аналізуйте форму прикметника разом із головним іменником і не робіть висновку про рід лише за закінченням прикметника.",[{pt:"casa bonita",uk:"гарний / красивий будинок"},{pt:"casas bonitas",uk:"гарні / красиві будинки"},{pt:"homens inteligentes",uk:"розумні чоловіки"},{pt:"mulher inteligente",uk:"розумна жінка"}],["noun-gender","noun-number","agreement-na"]),
p("adjective-position","position","Позиція прикметника","Posição do adjetivo","Adjective position","До- та постпозиція прикметника.","Багато прикметників нейтрально стоять після іменника, але позиція перед іменником теж можлива й може змінювати фокус, інтерпретацію або стиль.","Не перекладайте український порядок механічно.",[{pt:"uma casa grande",uk:"великий будинок"},{pt:"um grande problema",uk:"велика проблема"}],["adjective-meaning","word-order"]),
p("adjective-meaning","position-meaning","Позиція і значення прикметника","Posição e significado","Adjective position and meaning","Лексичні та семантичні відмінності позиції.","Для частини прикметників позиція змінює значення: um grande homem може означати «видатний чоловік», тоді як um homem grande — чоловік великого розміру.","Такі пари краще вчити лексично з контекстом.",[{pt:"um grande amigo",uk:"добрий / близький друг"},{pt:"um amigo grande",uk:"великий на зріст друг"}],["adjective-position","aspect-overview"]),
p("comparatives","comparatives","Ступені порівняння","Graus de comparação","Comparatives","Більший, менший, такий самий.","Порівняння будується через mais, menos, tão ... como/quanto та нерегулярні форми melhor, pior, maior, menor.","Відрізняйте порівняльну конструкцію від абсолютного суперлатива.",[{pt:"mais alto do que eu",uk:"вищий за мене"},{pt:"tão importante como antes",uk:"такий самий важливий, як раніше"},{pt:"melhor do que ontem",uk:"кращий, ніж учора"}],["superlatives","absolute-superlative"]),
p("superlatives","superlatives","Відносний суперлатив","Superlativo relativo","Relative superlative","Найвищий ступінь у межах групи.","Модель o/a mais ... de порівнює один референт із групою: a cidade mais antiga do país. Артикль є частиною типової конструкції.","Перекладайте значення групового порівняння, а не окреме слово mais.",[{pt:"a mais antiga da região",uk:"найстаріша в регіоні"},{pt:"o menos caro da loja",uk:"найдешевший у магазині"}],["comparatives","articles-definite"]),
{
 id:"absolute-superlative",slug:"absolute-superlative",category:"adjectives",
 titleUk:"Абсолютний суперлатив",titlePt:"Superlativo absoluto",titleEn:"Absolute superlative",
 summary:"Способи вираження дуже високого ступеня ознаки без порівняння з певною групою.",
 aliases:["абсолютний суперлатив","superlativo absoluto","-íssimo","muito"],
 related:["superlatives","comparatives","word-formation-affixes"],
 intro:"Абсолютний суперлатив підсилює ознаку, але не встановлює її місце серед членів певної групи. Muito importante і importantíssimo не є те саме, що o mais importante: остання конструкція порівнює референт із групою.",
 definition:"Абсолютний суперлатив виражає дуже високий або інтенсивний ступінь ознаки без явного порівняльного класу.",
 formation:"Найпрозоріша модель — muito + прикметник. Інша модель — суфіксальний -íssimo/-íssima, але конкретна форма може вимагати орфографічної зміни основи. Частина найвищих форм лексикалізована.",
 uses:[
  {title:"muito + прикметник",body:"Нейтральний і дуже поширений спосіб інтенсивного підсилення.",examples:[ex("O problema é muito importante.","Проблема дуже важлива."),ex("A casa é muito grande.","Будинок дуже великий.")]},
  {title:"-íssimo/-íssima",body:"Суфіксальний суперлатив часто має сильніше експресивне забарвлення.",examples:[ex("É importantíssimo.","Це надзвичайно важливо."),ex("A situação é gravíssima.","Ситуація надзвичайно серйозна.")]},
  {title:"Лексично особливі форми",body:"Частина прикметників має лексикалізовані найвищі форми.",examples:[ex("bom → ótimo","добрий → чудовий"),ex("mau → péssimo","поганий → надзвичайно поганий")]},
  {title:"Відмінність від відносного суперлатива",body:"o mais + adjetivo встановлює найвищий ступінь у групі, тоді як абсолютний суперлатив не потребує групи.",examples:[ex("Ela é muito inteligente.","Вона дуже розумна."),ex("Ela é a mais inteligente da turma.","Вона найрозумніша в класі.")]}
 ],
 examples:[ex("Foi uma decisão importantíssima.","Це було надзвичайно важливе рішення."),ex("Estou muito cansado.","Я дуже втомлений/втомлена."),ex("É a decisão mais importante do ano.","Це найважливіше рішення року.")],
 mistakes:[
  mistake("importantíssimo = «найважливіший у групі»","importantíssimo = «надзвичайно важливий»","Абсолютний суперлатив не встановлює рангу серед групи."),
  mistake("o muito importante","o mais importante","Для відносного суперлатива використовується mais, а muito підсилює прикметник."),
  mistake("bom → bomíssimo","bom → ótimo / muito bom","Частина найвищих форм лексикалізована.")
 ],
 ukrainian:"Українське «дуже + прикметник» добре відповідає muito + adjetivo, а українське «най-» відповідає іншій конструкції — відносному суперлативу.",
 brPt:"Основні моделі спільні для PT-BR і PT-PT. Частотність окремих суфіксальних форм може відрізнятися за стилем.",
 regional:"Описує стандартну систему; експресивність -íssimo залежить від лексеми та контексту.",
 sources:[{label:"Camões — Referencial Camões PLE",url:"https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple"}],
 depth:"high"
},
{
  id:"irregular-adjectives",slug:"irregular",category:"adjectives",
  titleUk:"Нерегулярні прикметники",titlePt:"Adjetivos irregulares",titleEn:"Irregular adjectives",
  summary:"Нерегулярні форми ступенів порівняння: melhor, pior, maior, menor та їхня поведінка в контексті.",
  aliases:["нерегулярні прикметники","adjetivos irregulares","melhor","pior","maior","menor"],
  related:["comparatives","adjective-meaning","superlatives"],
  intro:"У португальській частина найуживаніших прикметників має нерегулярні порівняльні форми: bom → melhor, mau → pior, grande → maior, pequeno → menor. Вони не утворюються простим додаванням mais до прикметника. Водночас форма mais + прикметник може з'являтися в інших контекстах, тому базову порівняльну пару краще вчити як окрему лексичну модель.\n\nНерегулярна форма не має лише одного можливого контексту. Melhor може бути порівняльною формою de bom, але також входить до іменних конструкцій: o melhor. Maior та menor можуть порівнювати фізичний розмір, вік, кількість, статус або іншу шкалу — інтерпретацію визначає іменник і контекст.\n\nДля продукції корисно спочатку визначити, яку шкалу порівнюють, потім вибрати прикметникову пару, а вже після цього додати рамку порівняння: melhor do que, pior do que, maior do que, menor do que. Не переносіть українські «кращий/найкращий» чи «більший/найбільший» на португальську без перевірки, чи потрібне порівняння між референтами, чи суперлатив у групі.",
  definition:"Нерегулярні прикметники — прикметники, у яких одна або більше форм ступеня порівняння мають окрему лексичну форму, яку не можна вивести лише механічним додаванням стандартного маркера.",
  formation:"Основні пари: bom → melhor, mau → pior, grande → maior, pequeno → menor. Порівняльна форма може поєднуватися з do que/que залежно від конструкції: melhor do que eu, maior que o anterior. Для суперлатива групи використовується окрема модель із mais: o melhor da equipa, a maior cidade do país.",
  uses:[
    {title:"bom → melhor",body:"Оцінює якість або відповідність порівняно з іншим референтом.",examples:[ex("Este livro é melhor do que aquele.","Ця книжка краща за ту."),ex("Ela fez o melhor trabalho da equipa.","Вона виконала найкращу роботу в команді.")]},
    {title:"mau → pior",body:"Виражає нижчу якість або несприятливішу оцінку.",examples:[ex("Hoje estou pior.","Сьогодні мені гірше."),ex("Foi o pior resultado do ano.","Це був найгірший результат року.")]},
    {title:"grande → maior",body:"Може позначати більший розмір, вік, кількість, значущість або іншу шкалу.",examples:[ex("Esta cidade é maior do que a outra.","Це місто більше за інше."),ex("O meu irmão é maior.","Значення визначає контекст: наприклад, «старший» або «більший».")]},
    {title:"pequeno → menor",body:"Протиставляється maior і може позначати менший розмір, вік, кількість чи ступінь.",examples:[ex("A empresa é menor do que antes.","Компанія менша, ніж раніше."),ex("A menor diferença já importa.","Навіть найменша різниця має значення.")]},
    {title:"Порівняльна форма і суперлатив",body:"Не змішуйте нерегулярну порівняльну форму з відносним суперлативом. Melhor означає «кращий» у порівнянні, тоді як o melhor da turma — «найкращий у групі».",examples:[ex("O João é melhor do que o Pedro.","Жуан кращий за Педру."),ex("O João é o melhor da turma.","Жуан найкращий у групі.")]},
    {title:"Субстантивація",body:"Прикметникова форма може вживатися як іменна група, коли артикль і контекст роблять референт зрозумілим.",examples:[ex("Escolhi o melhor.","Я вибрав/вибрала найкраще."),ex("Entre os dois, este é o pior.","Із двох цей гірший.")]}
  ],
  examples:[ex("Este é melhor do que aquele.","Це краще за те."),ex("A situação está pior hoje.","Ситуація сьогодні гірша."),ex("A maior cidade fica no litoral.","Найбільше місто розташоване на узбережжі."),ex("O menor valor é suficiente.","Найменшого значення достатньо.")],
  mistakes:[
    mistake("bom → mais bom","bom → melhor","У базовому порівнянні найуживаніша нерегулярна форма — melhor."),
    mistake("mau → mais mau","mau → pior","Порівняльна форма від mau — pior."),
    mistake("grande → mais grande у звичайному значенні «більший»","grande → maior","Для стандартного порівняння розміру чи іншої шкали використовується maior."),
    mistake("o melhor = просто «кращий»","o melhor = «найкращий / найкраще» у відповідному контексті","Артикль може вводити суперлативну або субстантивовану інтерпретацію.")
  ],
  ukrainian:"Українські «кращий, гірший, більший, менший» теж мають нерегулярні основи. Важлива відмінність — португальська використовує окремі лексичні форми melhor, pior, maior, menor, а суперлатив групи будує за іншою моделлю: o mais..., не просто додаючи окремий префікс до прикметника.",
  brPt:"Основні нерегулярні форми спільні для PT-BR і PT-PT. Конкретний вибір порівняльної рамки та частотність do que/que можуть відрізнятися за регістром і різновидом.",
  regional:"Опис стосується стандартної сучасної мови; варіантність конструкцій не означає двох різних наборів нерегулярних прикметників.",
  sources:[{label:"Camões — Referencial Camões PLE",url:"https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple"}],
  depth:"high"
}
];