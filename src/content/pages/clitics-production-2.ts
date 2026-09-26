import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const G2="https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const C="https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";
const CD="https://ciberduvidas.iscte-iul.pt/";
const draft=(p:GrammarPage):GrammarPage=>({...p,status:"draft",origin:"handwritten"});

export const pages:GrammarPage[]=[
draft(page({
id:"clitics-infinitive",slug:"infinitive",category:"clitics",titleUk:"Клитики з інфінітивом",titlePt:"Clíticos com infinitivo",titleEn:"Clitics with infinitive",
summary:"Позиція клітики з інфінітивом: передінфінітивна модель і енкліза на інфінітиві.",
aliases:["клитики з інфінітивом","clíticos com infinitivo","para o ver","para vê-lo"],
related:["clitic-placement","proclisis","enclisis","personal-infinitive","infinitive-prepositions"],depth:"medium",ukrainianContrast:"high",
intro:"З інфінітивом португальська має кілька позиційних моделей. Para o ver і para vê-lo можуть передавати близький зміст, але їхня структура різна. Позицію визначає не український переклад, а синтаксична конфігурація, проклітичні фактори, різновид і регістр.",
definition:"Клитика з інфінітивом — ненаголошена займенникова форма, пов'язана з інфінітивною групою; залежно від конструкції вона стоїть перед інфінітивом або приєднується до нього.",
formulas:[
{pattern:"para + o/a/os/as + infinitivo",note:"Передінфінітивна позиція в відповідних конструкціях."},
{pattern:"para + infinitivo + clitic",note:"Енклітична модель: para vê-lo, para encontrá-la."},
{pattern:"não + clitic + infinitivo",note:"Заперечення може сприяти передінфінітивній позиції."}],
uses:[
{title:"Енкліза",body:"Клитика безпосередньо приєднується до інфінітива.",examples:[ex("Quero vê-lo amanhã.","Я хочу побачити його завтра.",{purpose:"production"}),ex("É difícil explicar-lhe isto.","Важко пояснити йому/їй це.",{purpose:"production"})]},
{title:"Перед інфінітивом",body:"У певних прийменникових і підрядних конфігураціях клітика стоїть перед інфінітивом.",examples:[ex("Para o encontrar, fui cedo.","Щоб його знайти, я прийшов/прийшла рано.",{purpose:"contrast"}),ex("Sem o ver, não posso decidir.","Не побачивши його, я не можу вирішити.",{purpose:"comprehension"})]},
{title:"Порівняння моделей",body:"Однаковий український переклад не означає однакову португальську конструкцію.",examples:[ex("Para o encontrar, fui cedo.","Щоб його знайти, я прийшов/прийшла рано.",{purpose:"contrast"}),ex("Fui cedo para encontrá-lo.","Я прийшов/прийшла рано, щоб його знайти.",{purpose:"contrast"})]},
{title:"Регіональна варіативність",body:"PT-BR і PT-PT мають різні частотні та нормативні переваги щодо позиції клітики.",examples:[ex("Eu quero te ver amanhã.","Я хочу побачити тебе завтра.",{purpose:"contrast",variety:"BR",register:"spoken"}),ex("Eu quero ver-te amanhã.","Я хочу побачити тебе завтра.",{purpose:"contrast",variety:"PT",register:"formal"})]}],
examples:[ex("Quero vê-lo amanhã.","Я хочу побачити його завтра.",{purpose:"production"}),ex("Para o encontrar, fui cedo.","Щоб його знайти, я прийшов/прийшла рано.",{purpose:"contrast"}),ex("Fui cedo para encontrá-lo.","Я прийшов/прийшла рано, щоб його знайти.",{purpose:"contrast"})],
mistakes:[mistake("вважати, що клітика після інфінітива обов'язкова","аналізувати всю конструкцію","Позицію визначає синтаксичне оточення, а не сам інфінітив.","predicted-l1-transfer","high"),mistake("вибирати позицію за українським перекладом","визначати португальську модель клітики","Український переклад не кодує позицію займенника.","predicted-l1-transfer","high")],
ukrainian:"Українська не має аналогічної системи енклітичного й проклітичного розміщення займенника на інфінітиві. Форму me/te/o/lhe треба вчити разом із конструкцією.",
regional:"PT-BR і PT-PT відрізняються в частотності та позиційних перевагах. Не переносіть розмовну BR-модель на формальну PT без перевірки контексту.",
sources:[{label:"Fundação Calouste Gulbenkian — Gramática do Português, Vol. II",url:G2},{label:"Camões — Referencial Camões PLE",url:C},{label:"Ciberdúvidas",url:CD}],
learnerQuestions:["Яка конструкція містить інфінітив?","Чи є проклітичний фактор?","Який різновид і регістр?","Яку синтаксичну роль замінює клітика?"]
})),
draft(page({
id:"clitics-gerund",slug:"gerund",category:"clitics",titleUk:"Клитики з герундієм",titlePt:"Clíticos com gerúndio",titleEn:"Clitics with gerund",
summary:"Позиція клітик із gerúndio та її взаємодія з прогресивними конструкціями.",
aliases:["клитики з герундієм","clíticos com gerúndio","gerúndio"],
related:["clitic-placement","enclisis","proclisis","gerund-usage","progressive-br-pt"],depth:"short",ukrainianContrast:"medium",
intro:"Gerúndio може бути самостійним нефінітним центром або входити до прогресивної конструкції. Позицію клітики слід аналізувати щодо всієї конструкції.",
definition:"Клитики з gerúndio — ненаголошені займенникові форми, позиція яких визначається клитичними правилами та структурою герундіальної конструкції.",
formulas:[{pattern:"gerúndio + clitic",note:"Енклітичне приєднання до герундія в відповідних конструкціях."},{pattern:"clitic + gerúndio",note:"Передгерундійна позиція, особливо важлива для частини PT-BR конструкцій."}],
uses:[
{title:"Енкліза",body:"Клитика може приєднуватися до gerúndio.",examples:[ex("Saiu dizendo-me a verdade.","Він/вона вийшов/вийшла, сказавши мені правду.",{purpose:"production",variety:"PT"})]},
{title:"Проклітична модель у прогресиві",body:"У розмовному PT-BR передгерундійна позиція широко представлена.",examples:[ex("Ele estava me dizendo a verdade.","Він казав мені правду.",{purpose:"contrast",variety:"BR",register:"spoken"}),ex("Ele estava dizendo-me a verdade.","Він казав мені правду.",{purpose:"contrast",variety:"PT",register:"formal"})]}],
examples:[ex("Ele estava me dizendo a verdade.","Він казав мені правду.",{purpose:"production",variety:"BR",register:"spoken"}),ex("Ele estava dizendo-me a verdade.","Він казав мені правду.",{purpose:"contrast",variety:"PT",register:"formal"})],
mistakes:[mistake("вважати me dizendo і dizendo-me різними часовими значеннями","визначати конструкцію, різновид і регістр","Переклад може бути однаковим; різниться позиція клітики.","predicted-l1-transfer","medium")],
ukrainian:"Український дієприслівник не має аналогічного клитичного розподілу.",
regional:"PT-BR і PT-PT відрізняються у частотності позицій клітик у герундіальних і прогресивних конструкціях.",
sources:[{label:"Fundação Calouste Gulbenkian — Gramática do Português, Vol. II",url:G2},{label:"Ciberdúvidas",url:CD}]
})),
draft(page({
id:"clitics-imperative",slug:"imperative",category:"clitics",titleUk:"Клитики з імперативом",titlePt:"Clíticos no imperativo",titleEn:"Clitics with imperative",
summary:"Як стверджувальний і заперечний імператив визначають позицію клітики.",
aliases:["клитики з імперативом","clíticos no imperativo","diz-me","não me digas"],
related:["clitic-placement","imperative-affirmative","imperative-negative","proclisis","enclisis"],depth:"high",ukrainianContrast:"high",
intro:"Імператив демонструє чітку взаємодію полярності та клитичної позиції. Стверджувальний наказ має енклітичні моделі на кшталт diz-me, тоді як заперечний наказ має переддієслівну клітику: não me digas.",
definition:"Позиція клітики з імперативом залежить передусім від полярності та форми наказу: стверджувальний імператив типово поєднується з енклізою, заперечний — із проклізою.",
formulas:[{pattern:"imperativo afirmativo + clitic",note:"diz-me, levanta-te, faça-o."},{pattern:"não + clitic + conjuntivo",note:"não me digas, não te levantes."}],
uses:[
{title:"Стверджувальний імператив",body:"Клитика приєднується до дієслова.",examples:[ex("Diz-me a verdade.","Скажи мені правду.",{purpose:"production"}),ex("Levanta-te!","Устань!",{purpose:"production"})]},
{title:"Заперечний імператив",body:"Заперечний наказ використовує conjuntivo, а клітика стоїть перед дієсловом.",examples:[ex("Não me digas isso.","Не кажи мені цього.",{purpose:"contrast"}),ex("Não te levantes.","Не вставай.",{purpose:"contrast"})]},
{title:"Você та vocês",body:"Для você/vocês використовуються відповідні форми conjuntivo.",examples:[ex("Diga-me a verdade.","Скажіть мені правду.",{purpose:"production"}),ex("Digam-me a verdade.","Скажіть мені правду.",{purpose:"production"})]},
{title:"PT-BR і PT-PT",body:"У розмовному PT-BR переддієслівні моделі мають значну частотність; PT-PT сильніше зберігає енклітичні моделі у стверджувальному наказі.",examples:[ex("Diz-me.","Скажи мені.",{purpose:"contrast",variety:"PT"}),ex("Me diz.","Скажи мені.",{purpose:"contrast",variety:"BR",register:"spoken"})]}],
examples:[ex("Diz-me a verdade.","Скажи мені правду.",{purpose:"production"}),ex("Não me digas isso.","Не кажи мені цього.",{purpose:"contrast"}),ex("Diga-me a verdade.","Скажіть мені правду.",{purpose:"production"})],
mistakes:[mistake("ставити клітику після дієслова в заперечному наказі","порівнювати полярність: diz-me, але não me digas","Заперечний імператив має іншу морфосинтаксичну модель.","predicted-l1-transfer","high"),mistake("вважати me diz універсальною нейтральною моделлю","маркувати різновид і регістр","Розподіл клітик у PT-BR і PT-PT відрізняється.","editorial","medium")],
ukrainian:"Український наказовий спосіб також розрізняє ствердження й заперечення, але не має португальського клитичного розподілу.",
regional:"PT-BR має поширені розмовні переддієслівні моделі; PT-PT сильніше зберігає енклітичні моделі в відповідних стверджувальних конструкціях.",
brPt:"Для PT-BR me diz є природною розмовною моделлю; для PT-PT diz-me є типовою нормативною енклітичною моделлю.",
sources:[{label:"Fundação Calouste Gulbenkian — Gramática do Português, Vol. II",url:G2},{label:"Camões — Referencial Camões PLE",url:C},{label:"Ciberdúvidas",url:CD}],
learnerQuestions:["Це стверджувальний чи заперечний імператив?","Яка особа?","Який різновид і регістр?"]
}))
];