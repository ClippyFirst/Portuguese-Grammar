import type { GrammarPage } from "../types";
const p=(id:string,slug:string,t:string,pt:string,en:string,s:string,i:string,teachingNote:string,e:GrammarPage["examples"],r:string[]=[]):GrammarPage=>({id,slug,category:"gerund",titleUk:t,titlePt:pt,titleEn:en,summary:s,aliases:[t,slug],related:r,intro:teachingNote ? `${i}\n\n${teachingNote}` : i,examples:e});
export const pages:GrammarPage[]=[
{
{
  id: "gerund-form",
  slug: "form",
  category: "gerund",
  titleUk: "Утворення gerúndio",
  titlePt: "Gerúndio: formação",
  titleEn: "Gerund formation",
  summary: "Морфологічна форма gerúndio, основні закінчення та випадки, де форма не зводиться до механічної заміни інфінітивного закінчення.",
  aliases: ["gerúndio", "gerund", "формування герундія", "-ando", "-endo", "-indo"],
  related: ["gerund-usage", "estar-gerundio", "verb-system", "spelling-changing"],
  intro: "Gerúndio — нефінітна дієслівна форма, яка типово закінчується на -ando, -endo або -indo. Вона не виражає особу й число самостійно: хто виконує дію та її часово-аспектовий статус визначає вся конструкція. Тому falando — це форма, а estou falando — вже предикативна конструкція.",
  definition: "Для регулярних дієслів gerúndio утворюється від дієслівної основи із закінченням -ando для -ar, -endo для -er і -indo для -ir. Нерегулярні або орфографічно особливі дієслова можуть мати окремі форми, які треба перевіряти за словником.",
  formation: "falar → falando, comer → comendo, partir → partindo. Важливо не переносити модель на все дієслово без перевірки: vir → vindo, pôr → pondo, ter → tendo показують, що частотні нерегулярні форми краще запам'ятовувати цілком.",
  uses: [
    {title:"-ar → -ando",body:"Для регулярних дієслів на -ar інфінітивне -ar замінюється моделлю -ando.",examples:[{pt:"falar → falando",uk:"говорити → говорячи"},{pt:"estudar → estudando",uk:"вчитися → навчаючись"},{pt:"trabalhar → trabalhando",uk:"працювати → працюючи"}]},
    {title:"-er → -endo",body:"Для регулярних дієслів на -er використовується -endo.",examples:[{pt:"comer → comendo",uk:"їсти → їдячи"},{pt:"vender → vendendo",uk:"продавати → продаючи"},{pt:"beber → bebendo",uk:"пити → п'ючи"}]},
    {title:"-ir → -indo",body:"Для регулярних дієслів на -ir використовується -indo.",examples:[{pt:"partir → partindo",uk:"вирушати → вирушаючи"},{pt:"abrir → abrindo",uk:"відчиняти → відчиняючи"},{pt:"assistir → assistindo",uk:"дивитися → дивлячись"}]},
    {title:"Нерегулярні форми",body:"Деякі високочастотні дієслова мають gerúndio, який не варто виводити механічно з інфінітива. Їх корисно вчити як пару infinitivo → gerúndio.",examples:[{pt:"vir → vindo",uk:"приходити → приходячи"},{pt:"pôr → pondo",uk:"класти → кладучи"},{pt:"ter → tendo",uk:"мати → маючи"}]},
    {title:"Орфографічна зміна ≠ нерегулярність",body:"Не кожна відмінність від поверхневої форми інфінітива означає морфологічне чергування. Написання може пристосовуватися до орфографічних правил, тоді як морфологічна модель залишається регулярною.",examples:[{pt:"ficar → ficando",uk:"залишатися → залишаючись"},{pt:"chegar → chegando",uk:"приходити → приходячи"},{pt:"pagar → pagando",uk:"платити → платячи"}]},
    {title:"Gerúndio не є часом",body:"Форма не кодує особу й сама по собі не встановлює часу. У estou estudando особові та часові характеристики належать estou, а gerúndio називає процес.",examples:[{pt:"Estou estudando.",uk:"Я зараз навчаюся."},{pt:"Estávamos a conversar.",uk:"Ми були в процесі розмови.",variety:"PT"},{pt:"Ela entrou sorrindo.",uk:"Вона увійшла, усміхаючись."}]}
  ],
  examples:[{pt:"Estou estudando português.",uk:"Я зараз вивчаю португальську."},{pt:"Ela entrou sorrindo.",uk:"Вона увійшла, усміхаючись."},{pt:"Eles continuam trabalhando.",uk:"Вони продовжують працювати."}],
  mistakes:[
    {wrong:"falarendo",right:"falando",why:"Дієслова на -ar утворюють gerúndio на -ando."},
    {wrong:"partendo",right:"partindo",why:"Дієслова на -ir мають модель -indo."},
    {wrong:"називати gerúndio часом",right:"нефінітна форма",why:"Часове та аспектове значення залежить від конструкції, а не від форми gerúndio самостійно."},
    {wrong:"перекладати кожен gerúndio українським дієприслівником",right:"визначати синтаксичну функцію",why:"Український дієприслівник і португальський gerúndio частково відповідають один одному, але не мають тотожної дистрибуції."}
  ],
  ukrainian:"Український дієприслівник частково функціонально відповідає португальському gerúndio в конструкціях на кшталт entrou sorrindo, але відповідність не механічна. Португальський gerúndio також входить до прогресивних конструкцій, де українська зазвичай використовує особову форму дієслова.",
  brPt:"Gerúndio є спільною формою PT-BR і PT-PT. Відмінність стосується передусім частотності прогресивних конструкцій: PT-BR значно продуктивніше використовує estar + gerúndio, тоді як у PT-PT широко вживається estar a + infinitivo.",
  regional:"Опис стосується стандартної сучасної португальської. Частотність gerúndio в прогресивних конструкціях залежить від різновиду, але сама морфологічна форма не є виключно бразильською чи європейською.",
  sources:[{label:"Camões — Referencial Camões PLE",url:"https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple"}],
  depth:"high"
},
p("gerund-usage","usage","Уживання герундія","Uso do gerúndio","Gerund usage","Одночасність, спосіб, процес та інші функції.","Gerúndio може виражати одночасність, спосіб дії, супровідний процес або входити до прогресивних конструкцій. Не кожен український дієприслівник перекладається герундієм.","Значення залежить від синтаксичного зв'язку.",[{pt:"Entrou sorrindo.",uk:"Він увійшов, усміхаючись."},{pt:"Estudava ouvindo música.",uk:"Він учився, слухаючи музику."}],["estar-gerundio","progressive-br-pt"]),
p("estar-gerundio","estar-gerundio","estar + gerúndio","Estar + gerúndio","estar + gerund","Прогресивна конструкція.","estar + gerúndio подає ситуацію як процес, що розгортається. Частотність цієї конструкції значно вища в PT-BR, але вона не обмежена Бразилією.","Не прирівнюйте конструкцію автоматично до одного українського часу.",[{pt:"Estou estudando.",uk:"Я зараз навчаюся.",variety:"BR"}],["progressive-br-pt","estar"]),
p("estar-a-infinitive","estar-a-infinitive","estar a + infinitivo","Estar a + infinitivo","estar a + infinitive","Європейська прогресивна модель.","estar a + infinitivo широко вживається в PT-PT для прогресивного значення. PT-BR частіше використовує estar + gerúndio.","Це системна регіональна відмінність частотності, а не взаємна заборона.",[{pt:"Estou a estudar.",uk:"Я зараз навчаюся.",variety:"PT"}],["progressive-br-pt","infinitive-prepositions"]),
p("progressive-br-pt","progressive-br-pt","Прогресив: PT-BR і PT-PT","Progressivo BR e PT","Progressive BR vs PT","estar + gerúndio та estar a + infinitivo.","Обидві конструкції існують у португальській, але їхня частотність відрізняється за різновидами. Для нейтрального тексту враховуйте аудиторію.","Не називайте одну модель неправильною лише через різновид.",[{pt:"Estou estudando.",uk:"Я зараз навчаюся.",variety:"BR"},{pt:"Estou a estudar.",uk:"Я зараз навчаюся.",variety:"PT"}],["estar-gerundio","estar-a-infinitive"]),
p("participle","participle","Дієприкметник минулого часу","Particípio","Past participle","Форма для складених часів і пасивних конструкцій.","Particípio використовується з ter/haver у складених конструкціях та з ser/estar в інших предикатних моделях. Частина форм нерегулярна.","Розрізняйте форму participle і її синтаксичну функцію.",[{pt:"tenho feito",uk:"я робив/робила"},{pt:"foi escrito",uk:"було написано"}],["compound-tenses","ser-passive"]),
p("irregular-participles","irregular-participles","Нерегулярні participles","Particípios irregulares","Irregular participles","feito, dito, visto, escrito та інші.","Частотні дієслова мають нерегулярні participles. Їх треба вчити як окремі форми, особливо для складених часів.","Не виводьте participle лише з інфінітива.",[{pt:"fazer → feito",uk:"робити → зроблений"},{pt:"dizer → dito",uk:"казати → сказаний"},{pt:"ver → visto",uk:"бачити → побачений"}],["participle","irregular-verbs"]),
{
 id:"double-participles",slug:"double-participles",category:"gerund",
 titleUk:"Подвійні participles",titlePt:"Particípios duplos",titleEn:"Double participles",
 summary:"Деякі дієслова мають дві форми participle, розподілені за конструкцією, стилем або різновидом мови.",
 aliases:["подвійні дієприкметники","particípios duplos","aceitado","aceite"],
 related:["participle","compound-tenses","irregular-participles","ser-passive"],
 intro:"У португальській частина дієслів має дві форми participle: довшу і коротшу. Традиційне правило пов'язує довгі форми з ter/haver, а короткі — з ser/estar у пасивних конструкціях, але сучасна норма не зводиться до механічного правила: окремі дієслова мають власний розподіл і частотність.",
 definition:"Подвійний participle — пара форм одного дієслова, які можуть мати різний розподіл у складених часах і пасивних конструкціях.",
 formation:"Форми треба вивчати разом із дієсловом і типовими допоміжними дієсловами. Наприклад, aceitar має aceitado та aceite; imprimir — imprimido та impresso; acender — acendido та aceso.",
 uses:[
  {title:"ter/haver + participle",body:"Довга форма традиційно типова після ter/haver у складеному часі.",examples:[{pt:"Tinha aceitado a proposta.",uk:"Він/вона прийняв/ла пропозицію до того моменту."},{pt:"Tinham imprimido o documento.",uk:"Вони надрукували документ."}]},
  {title:"ser/estar + коротка форма",body:"Короткі форми часто вживаються в пасивних конструкціях, особливо з ser.",examples:[{pt:"A proposta foi aceite.",uk:"Пропозицію було прийнято.",variety:"PT"},{pt:"O documento foi impresso.",uk:"Документ було надруковано."}]},
  {title:"Лексикалізовані пари",body:"Не всі пари поводяться однаково, тому словникова перевірка важливіша за механічне правило.",examples:[{pt:"A luz está acesa.",uk:"Світло увімкнене."},{pt:"A loja está aberta.",uk:"Магазин відкритий."}]},
  {title:"Варіантність",body:"Окремі короткі форми мають різну частотність або нормативну перевагу за різновидами.",examples:[{pt:"O pedido foi aceito.",uk:"Замовлення було прийнято.",variety:"BR"},{pt:"O pedido foi aceite.",uk:"Замовлення було прийнято.",variety:"PT"}]}
 ],
 examples:[{pt:"Já tinha imprimido o relatório.",uk:"Я вже надрукував/ла звіт."},{pt:"O relatório foi impresso.",uk:"Звіт було надруковано."},{pt:"Ela tinha acendido a luz.",uk:"Вона увімкнула світло."},{pt:"A luz estava acesa.",uk:"Світло було увімкнене."}],
 mistakes:[
  {wrong:"вважати одну форму універсальною для всіх конструкцій","вивчати пару разом із ter/haver та ser/estar","Розподіл подвійних participles лексично нерівномірний."},
  {wrong:"foi imprimido як єдина пасивна форма","foi impresso","У багатьох конструкціях коротка форма є типовою пасивною формою."},
  {wrong:"aceitado і aceite — два різні дієслова","aceitar → aceitado / aceite","Це дві форми participle одного лексичного дієслова."}
 ],
 ukrainian:"Українська не має повністю аналогічного системного розподілу двох participle одного дієслова після ter/ser, тому корисно запам'ятовувати форму разом із конструкцією.",
 brPt:"PT-BR і PT-PT можуть розходитися у виборі короткої форми: aceito типова для бразильської норми, тоді як aceite широко вживається в європейській.",
 regional:"Подвійні participles добре показують плюрицентричність португальської. Конкретну форму варто перевіряти за словником відповідного різновиду.",
 depth:"high"
},
p("ter-haver-participle","ter-haver-participle","ter/haver + participle","Ter/haver + particípio","ter/haver + participle","Складені конструкції з participle.","ter і haver можуть бути допоміжними у складених часах. Значення форми визначається часом допоміжного та типом конструкції.","Не плутайте допоміжне ter з повнозначним «мати».",[{pt:"Tenho visto isso.",uk:"Я бачив/бачила це."},{pt:"Tinha feito o trabalho.",uk:"Я зробив/зробила роботу до того моменту."}],["ter-haver","compound-tenses"]),
p("estar-participle","estar-participle","estar + participle","Estar + particípio","estar + participle","Становий результативний предикат.","estar + participle може описувати стан як результат попередньої події. Важливо відрізняти його від серійного пасиву з ser.","Порівнюйте процес пасиву та результативний стан.",[{pt:"A porta está fechada.",uk:"Двері зачинені / перебувають зачиненими."}],["ser-passive","ser-estar"])
];