import type { GrammarPage } from "../types";
const p=(id:string,slug:string,titleUk:string,titlePt:string,titleEn:string,summary:string,intro:string,teachingNote:string,examples:GrammarPage["examples"],related:string[]=[]):GrammarPage=>({id,slug,category:"adjectives",titleUk,titlePt,titleEn,summary,aliases:[titleUk,slug],related,intro:teachingNote ? `${intro}\n\n${teachingNote}` : intro,examples,markers:[],mistakes:[]});
export const pages:GrammarPage[]=[
p("adjective-agreement","agreement","Узгодження прикметників","Concordância dos adjetivos","Adjective agreement","Рід і число прикметника.","Атрибутивний прикметник узгоджується з іменником у роді та числі. Для прикметників на -e або приголосний форма може не змінювати рід, але число зазвичай маркується.","Аналізуйте форму прикметника разом із головним іменником.",[{pt:"casa bonita",uk:"гарний будинок"},{pt:"casas bonitas",uk:"гарні будинки"},{pt:"homens inteligentes",uk:"розумні чоловіки"}],["noun-gender","noun-number","agreement-na"]),
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
p("irregular-adjectives","irregular","Нерегулярні прикметники","Adjetivos irregulares","Irregular adjectives","Нерегулярні форми ступенів порівняння.","bom → melhor, mau → pior, grande → maior, pequeno → menor мають окремі порівняльні форми. Вони не є просто суфіксальними варіантами.","Вивчайте їх разом із моделлю порівняння.",[{pt:"Este livro é melhor.",uk:"Ця книжка краща."},{pt:"A cidade é maior.",uk:"Місто більше."}],["comparatives","adjective-meaning"])
];