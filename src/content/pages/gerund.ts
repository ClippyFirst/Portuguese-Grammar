import type { GrammarPage } from "../types";
const p=(id:string,slug:string,t:string,pt:string,en:string,s:string,i:string,teachingNote:string,e:GrammarPage["examples"],r:string[]=[]):GrammarPage=>({id,slug,category:"gerund",titleUk:t,titlePt:pt,titleEn:en,summary:s,aliases:[t,slug],related:r,intro:teachingNote ? `${i}\n\n${teachingNote}` : i,examples:e});
export const pages:GrammarPage[]=[
{
  id: "gerund-form",
  slug: "form",
  category: "gerund",
  titleUk: "Утворення gerúndio",
  titlePt: "Gerúndio: formação",
  titleEn: "Gerund formation",
  summary: "Морфологічна форма gerúndio, три основні закінчення та зв'язок із нерегулярністю дієслова.",
  aliases: ["gerúndio", "gerund", "формування герундія", "-ando", "-endo", "-indo"],
  related: ["gerund-usage", "estar-gerundio", "verb-system"],
  intro: "Gerúndio — нефінітна форма дієслова, яка найчастіше закінчується на -ando, -endo або -indo. Форма сама по собі не виражає особу й число; часово-аспектуальне значення визначає вся конструкція.",
  definition: "Gerúndio — нефінітна дієслівна форма, типово утворена від основи дієслова із закінченням -ando для -ar, -endo для -er і -indo для -ir.",
  formation: "falar → falando, comer → comendo, partir → partindo. Якщо дієслово має нерегулярну основу або орфографічну особливість, вона може зберігатися й у gerúndio. На відміну від особових форм, gerúndio не має закінчень для eu, tu, ele тощо.",
  uses: [
    {title:"Дієслова на -ar",body:"Основа поєднується з -ando.",examples:[{pt:"falar → falando",uk:"говорити → говорячи"},{pt:"estudar → estudando",uk:"вчитися → навчаючись"}]},
    {title:"Дієслова на -er",body:"Основа поєднується з -endo.",examples:[{pt:"comer → comendo",uk:"їсти → їдячи"},{pt:"vender → vendendo",uk:"продавати → продаючи"}]},
    {title:"Дієслова на -ir",body:"Основа поєднується з -indo.",examples:[{pt:"partir → partindo",uk:"вирушати → вирушаючи"},{pt:"abrir → abrindo",uk:"відчиняти → відчиняючи"}]},
    {title:"Форма не дорівнює значенню конструкції",body:"falando — лише форма. Її часово-аспектуальне значення залежить від конструкції: está falando, continua falando тощо.",examples:[{pt:"Ela está falando.",uk:"Вона говорить / розмовляє зараз."},{pt:"Ele saiu falando ao telefone.",uk:"Він вийшов, розмовляючи телефоном."}]}
  ],
  examples:[{pt:"Estou estudando português.",uk:"Я вчу португальську."},{pt:"Ela entrou sorrindo.",uk:"Вона увійшла, усміхаючись."}],
  mistakes:[
    {wrong:"falarendo",correct:"falando",explanation:"Дієслова на -ar утворюють gerúndio на -ando."},
    {wrong:"partendo",correct:"partindo",explanation:"Дієслова на -ir мають закінчення -indo."},
    {wrong:"називати gerúndio часом",correct:"нефінітна форма",explanation:"Час і аспект визначає вся конструкція, а не суфікс gerúndio сам по собі."}
  ],
  ukrainian:"Український дієприслівник теж є нефінітною формою, але його значення та синтаксичні обмеження не збігаються з португальським gerúndio. Не перекладайте кожне -ando/-endo/-indo автоматично одним українським суфіксом.",
  brPt:"Gerúndio є спільною граматичною формою PT-BR і PT-PT. Відмінність полягає насамперед у продуктивності деяких прогресивних конструкцій: PT-BR частіше використовує estar + gerúndio, тоді як PT-PT має сильну конкуренцію з estar a + infinitivo.",
  regional:"Форма gerúndio існує в усіх основних національних різновидах португальської; її частотність у прогресивних конструкціях варіює.",
  sources:[{label:"Camões — Referencial Camões PLE",url:"https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple"}],
  depth:"high"
},
p("gerund-usage","usage","Уживання герундія","Uso do gerúndio","Gerund usage","Одночасність, спосіб, процес та інші функції.","Gerúndio може виражати одночасність, спосіб дії, супровідний процес або входити до прогресивних конструкцій. Не кожен український дієприслівник перекладається герундієм.","Значення залежить від синтаксичного зв'язку.",[{pt:"Entrou sorrindo.",uk:"Він увійшов, усміхаючись."},{pt:"Estudava ouvindo música.",uk:"Він учився, слухаючи музику."}],["estar-gerundio","progressive-br-pt"]),
p("estar-gerundio","estar-gerundio","estar + gerúndio","Estar + gerúndio","estar + gerund","Прогресивна конструкція.","estar + gerúndio подає ситуацію як процес, що розгортається. Частотність цієї конструкції значно вища в PT-BR, але вона не обмежена Бразилією.","Не прирівнюйте конструкцію автоматично до одного українського часу.",[{pt:"Estou estudando.",uk:"Я зараз навчаюся.",variety:"BR"}],["progressive-br-pt","estar"]),
p("estar-a-infinitive","estar-a-infinitive","estar a + infinitivo","Estar a + infinitivo","estar a + infinitive","Європейська прогресивна модель.","estar a + infinitivo широко вживається в PT-PT для прогресивного значення. PT-BR частіше використовує estar + gerúndio.","Це системна регіональна відмінність частотності, а не взаємна заборона.",[{pt:"Estou a estudar.",uk:"Я зараз навчаюся.",variety:"PT"}],["progressive-br-pt","infinitive-prepositions"]),
p("progressive-br-pt","progressive-br-pt","Прогресив: PT-BR і PT-PT","Progressivo BR e PT","Progressive BR vs PT","estar + gerúndio та estar a + infinitivo.","Обидві конструкції існують у португальській, але їхня частотність відрізняється за різновидами. Для нейтрального тексту враховуйте аудиторію.","Не називайте одну модель неправильною лише через різновид.",[{pt:"Estou estudando.",uk:"Я зараз навчаюся.",variety:"BR"},{pt:"Estou a estudar.",uk:"Я зараз навчаюся.",variety:"PT"}],["estar-gerundio","estar-a-infinitive"]),
p("participle","participle","Дієприкметник минулого часу","Particípio","Past participle","Форма для складених часів і пасивних конструкцій.","Particípio використовується з ter/haver у складених конструкціях та з ser/estar в інших предикатних моделях. Частина форм нерегулярна.","Розрізняйте форму participle і її синтаксичну функцію.",[{pt:"tenho feito",uk:"я робив/робила"},{pt:"foi escrito",uk:"було написано"}],["compound-tenses","ser-passive"]),
p("irregular-participles","irregular-participles","Нерегулярні participles","Particípios irregulares","Irregular participles","feito, dito, visto, escrito та інші.","Частотні дієслова мають нерегулярні participles. Їх треба вчити як окремі форми, особливо для складених часів.","Не виводьте participle лише з інфінітива.",[{pt:"fazer → feito",uk:"робити → зроблений"},{pt:"dizer → dito",uk:"казати → сказаний"},{pt:"ver → visto",uk:"бачити → побачений"}],["participle","irregular-verbs"]),
p("double-participles","double-participles","Подвійні participles","Particípios duplos","Double participles","Дієслова з двома participle-формами.","Деякі дієслова мають сильну та слабку форми participle з різним розподілом у конструкціях. Вибір залежить від допоміжного дієслова та норми конкретного слова.","Вивчайте такі пари разом із ter/ser.",[{pt:"tinha aceitado",uk:"прийняв/ла до того моменту"},{pt:"foi aceite",uk:"було прийнято",variety:"PT"}],["participle","compound-tenses"]),
p("ter-haver-participle","ter-haver-participle","ter/haver + participle","Ter/haver + particípio","ter/haver + participle","Складені конструкції з participle.","ter і haver можуть бути допоміжними у складених часах. Значення форми визначається часом допоміжного та типом конструкції.","Не плутайте допоміжне ter з повнозначним «мати».",[{pt:"Tenho visto isso.",uk:"Я бачив/бачила це."},{pt:"Tinha feito o trabalho.",uk:"Я зробив/зробила роботу до того моменту."}],["ter-haver","compound-tenses"]),
p("estar-participle","estar-participle","estar + participle","Estar + particípio","estar + participle","Становий результативний предикат.","estar + participle може описувати стан як результат попередньої події. Важливо відрізняти його від серійного пасиву з ser.","Порівнюйте процес пасиву та результативний стан.",[{pt:"A porta está fechada.",uk:"Двері зачинені / перебувають зачиненими."}],["ser-passive","ser-estar"])
];