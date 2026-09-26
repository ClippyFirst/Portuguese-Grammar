import type { GrammarPage } from "../types";
const p=(id:string,slug:string,t:string,pt:string,en:string,s:string,i:string,teachingNote:string,e:GrammarPage["examples"],r:string[]=[]):GrammarPage=>({id,slug,category:"periphrases",titleUk:t,titlePt:pt,titleEn:en,summary:s,aliases:[t,slug],related:r,intro:teachingNote ? `${i}\n\n${teachingNote}` : i,examples:e});
export const pages:GrammarPage[]=[
p("ter-de","ter-de","ter de + infinitivo","Ter de + infinitivo","ter de + infinitive","Необхідність і обов'язок.","ter de + infinitivo виражає необхідність або обов'язок. Час допоміжного дієслова змінює часову перспективу.","Порівнюйте з dever: значення частково перетинаються, але конструкції не тотожні.",[{pt:"Tenho de trabalhar.",uk:"Я мушу працювати."},{pt:"Tive de sair.",uk:"Мені довелося піти."}],["modality-overview","infinitive-prepositions"]),
{
  id: "haver-de",
  slug: "haver-de",
  category: "periphrases",
  titleUk: "haver de + infinitivo",
  titlePt: "Haver de + infinitivo",
  titleEn: "haver de + infinitive",
  summary: "Конструкція haver de + infinitivo для наміру, очікуваної майбутньої події, обов'язку та модального відтінку.",
  aliases: ["haver de", "hei de", "haver de + infinitivo"],
  related: ["modality-overview", "futuro", "ter-de"],
  intro: "Haver de + infinitivo — аналітична конструкція, у якій особова форма haver поєднується з de та інфінітивом. Значення залежить від контексту: це може бути намір, обіцянка, очікувана подія, необхідність або відтінок неминучості. Її не слід ототожнювати з простим майбутнім у всіх випадках.",
  definition: "Модально-часова конструкція haver + de + infinitivo, що кодує майбутньо орієнтовану подію або ставлення мовця до її здійснення.",
  formation: "Особова форма haver + de + infinitivo: hei de voltar, hás de compreender, há de acontecer, havemos de encontrar. У сучасній мові найчастіше трапляються форми теперішнього haver; часовий та модальний відтінок визначає контекст.",
  uses: [
    {title:"Намір або обіцянка",body:"Мовець подає майбутню дію як заплановану або таку, що має відбутися.",examples:[{pt:"Hei de voltar.",uk:"Я ще повернуся / я маю повернутися."},{pt:"Havemos de encontrar uma solução.",uk:"Ми неодмінно знайдемо рішення."}]},
    {title:"Очікувана подія",body:"Конструкція може описувати подію, яку мовець вважає очікуваною або такою, що має настати.",examples:[{pt:"Há de chover amanhã.",uk:"Завтра, мабуть, буде дощ / має бути дощ."},{pt:"Um dia há de perceber.",uk:"Одного дня він/вона це зрозуміє."}]},
    {title:"Модальна необхідність",body:"У деяких контекстах конструкція наближається до «мати зробити», але не є механічним синонімом ter de.",examples:[{pt:"Hás de terminar o trabalho.",uk:"Ти маєш закінчити роботу / тобі належить закінчити роботу."}]},
    {title:"Регістр і стиль",body:"Haver de часто має книжніший, формальніший або риторичний відтінок, хоча не обмежене одним жанром.",examples:[{pt:"Havemos de vencer esta dificuldade.",uk:"Ми подолаємо цю труднощі / нам належить її подолати."}]}
  ],
  examples:[{pt:"Hei de voltar.",uk:"Я ще повернуся."},{pt:"Há de ser verdade.",uk:"Мабуть, це правда / це має бути правдою."}],
  mistakes:[
    {wrong:"перекладати haver de завжди як «буду»",right:"визначати намір, очікування чи необхідність за контекстом",why:"Конструкція має модально-часовий спектр."},
    {wrong:"haver de = ter de у всіх випадках",right:"розрізняти конструкції",why:"Обидві можуть виражати необхідність, але їхні стилістичні та семантичні відтінки не тотожні."}
  ],
  ukrainian:"Українське «маю зробити», «повинен зробити», «ще зроблю» частково перекриває haver de, але кожен відповідник додає свій модальний відтінок. Перекладайте функцію конструкції в контексті, а не її компоненти окремо.",
  brPt:"Конструкція відома в обох основних різновидах, але її частотність і стилістичне забарвлення можуть відрізнятися. Не подавайте її як суто PT-PT або суто PT-BR явище.",
  regional:"Haver de має широку літературну й нормативну традицію в португаломовному просторі; конкретна частотність варіює за жанром і різновидом.",
  sources:[{label:"Camões — Referencial Camões PLE",url:"https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple"}],
  depth:"high"
},
p("acabar-de","acabar-de","acabar de + infinitivo","Acabar de + infinitivo","acabar de + infinitive","Нещодавно завершена дія.","acabar de + infinitivo позначає подію, що відбулася щойно або безпосередньо перед моментом відліку.","Не плутайте з простим завершеним часом.",[{pt:"Acabei de chegar.",uk:"Я щойно прийшов/прийшла."}],["aspect-overview","infinitive-prepositions"]),
{
 id:"voltar-a",slug:"voltar-a",category:"periphrases",
 titleUk:"voltar a + infinitivo",titlePt:"Voltar a + infinitivo",titleEn:"voltar a + infinitive",
 summary:"Конструкція повторної дії: voltar a + infinitivo = знову зробити.",
 aliases:["voltar a","знову","повторна дія"],
 related:["aspect-overview","infinitive-prepositions"],
 intro:"Voltar a + infinitivo виражає повторення попередньої або вже знайомої дії. Дієслово voltar буквально означає «повертатися», але з інфінітивом конструкція набуває аспектового значення «зробити знову».",
 definition:"Конструкція позначає відновлення або повторне виконання дії.",
 formation:"voltar у потрібному часі + a + infinitivo: volto a ler, voltou a chover, voltaremos a tentar.",
 uses:[
  {title:"Повторна дія",body:"Найтиповіше значення — дія відбувається ще раз.",examples:[{pt:"Voltei a ler o livro.",uk:"Я знову почав/ла читати книжку."},{pt:"Ela voltou a ligar.",uk:"Вона знову подзвонила."}]},
  {title:"Повторення процесу",body:"Конструкція може описувати повторне виникнення події або стану, зокрема безособово.",examples:[{pt:"Voltou a chover.",uk:"Знову почався дощ."}]},
  {title:"Часова форма voltar",body:"Саме voltar відмінюється за часом і особою; infinitivo залишається в простій формі.",examples:[{pt:"Vamos voltar a tentar.",uk:"Ми знову спробуємо."}]}
 ],
 examples:[{pt:"Ele voltou a estudar português.",uk:"Він знову почав вивчати португальську."},{pt:"Não quero voltar a cometer o mesmo erro.",uk:"Я не хочу знову припуститися тієї самої помилки."}],
 mistakes:[
  {wrong:"voltou de chover для «знову почався дощ»",right:"voltou a chover",why:"Аспектову конструкцію повторення утворює voltar a + infinitivo."},
  {wrong:"voltou a chovendo",right:"voltou a chover",why:"Після a тут потрібен infinitivo, не gerúndio."}
 ],
 ukrainian:"Українське «знову» часто є окремим прислівником, тому легко пропустити аспектову конструкцію. В українському перекладі можливі «знову», «знову почав», «повторно», залежно від контексту.",
 brPt:"Конструкція нормативна в PT-BR і PT-PT. Вибір між voltar a та простим повтором із прислівником залежить від стилю й контексту.",
 regional:"Базове значення повторення спільне для португаломовних різновидів.",
 depth:"high"
},
p("comecar-a","comecar-a","começar a + infinitivo","Começar a + infinitivo","começar a + infinitive","Початок дії.","começar a + infinitivo позначає початок ситуації або процесу. Це фазова перифраза.","Відрізняйте її від простого початку об'єкта: починається саме дія.",[{pt:"Começou a chover.",uk:"Почався дощ."}],["aspect-overview","infinitive-prepositions"]),
p("ir-infinitive","ir-infinitive","ir + infinitivo","Ir + infinitivo","ir + infinitive","Плановане або близьке майбутнє.","ir + infinitivo широко вживається для майбутніх ситуацій, особливо в розмовній мові. Часова перспектива залежить від форми ir.","Не плутайте його з буквальним рухом: vou estudar може не означати «іду вчитися».",[{pt:"Vou estudar amanhã.",uk:"Я завтра вчитимуся / збираюся вчитися."}],["futuro","verb-system"]),
p("other-periphrases","other","Інші перифрази","Outras perífrases","Other periphrases","andar a, ficar a, vir a та estar para: додаткові перифрастичні моделі.","Португальська має низку перифрастичних конструкцій, у яких допоміжне або напівдопоміжне дієслово додає фазове, аспектуальне чи часово-модальне значення. andar a + infinitivo може позначати тривалу або повторювану дію; ficar a + infinitivo — стан або дію, що продовжується після певної події; vir a + infinitivo — розвиток до результату; estar para + infinitivo — близькість або підготовленість до дії залежно від контексту.","Не перекладайте ці моделі механічно за значенням окремого дієслова: перифраза утворює власну конструктивну інтерпретацію. Розподіл окремих моделей також залежить від різновиду португальської.",[{pt:"Ando a estudar português.",uk:"Я зараз активно / останнім часом вивчаю португальську.",variety:"PT"},{pt:"Ficou a trabalhar até tarde.",uk:"Він / вона залишився працювати допізна."},{pt:"Veio a descobrir a verdade.",uk:"Зрештою він / вона дізнався / дізналася правду."},{pt:"O comboio está para chegar.",uk:"Потяг має ось-ось прибути."}],["progressive-br-pt","aspect-overview","complex-predicates","estar-a-infinitive"])
];