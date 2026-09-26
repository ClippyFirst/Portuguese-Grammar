import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const sources = [
  { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: "https://gulbenkian.pt/publications/gramatica-do-portugues/" },
  { label: "Ciberdúvidas da Língua Portuguesa", url: "https://ciberduvidas.iscte-iul.pt/" }
];

export const pages: GrammarPage[] = [
page({
 id:"conditional-conjunctions",slug:"conditional-conjunctions",category:"conjunctions",
 titleUk:"Умовні сполучники та умовні підрядні конструкції",titlePt:"Conjunções condicionais",titleEn:"Conditional conjunctions",
 summary:"se, caso, desde que, contanto que та інші засоби вираження умови й залежності.",
 aliases:["умовні сполучники","conditional conjunctions","conjunções condicionais"],
 related:["subordinating-conjunctions","conditionals-and-mood","conjunctions-and-clause-mood","conjunction-selection-and-meaning"],
 status:"review",origin:"handwritten",depth:"high",ukrainianContrast:"high",
 intro:"Умовні конструкції встановлюють залежність: виконання, істинність або релевантність однієї ситуації подається як умова для іншої. Центральним засобом є se. Інші сполучникові форми уточнюють характер умови — від нейтрального припущення до вимоги певної передумови. Вибір способу, часу та сполучника є частиною однієї конструкції, тому conditionals не варто вчити як ізольований список перекладів.",
 definition:"Умовний сполучниковий засіб вводить підрядну частину, яка задає умову, за якої головна ситуація розглядається як можлива, дійсна або релевантна.",
 formulas:[
  {label:"Нейтральна умова",pattern:"Se Y, X",note:"se вводить умову; форма присудка визначається типом conditional."},
  {label:"Гіпотетична умова",pattern:"Se Y, X",note:"Можливе поєднання imperfect subjunctive та conditional/future-in-the-past залежно від конструкції."},
  {label:"Умова з caso",pattern:"Caso Y, X",note:"caso вимагає відповідного subjuntivo."},
  {label:"Обмежувальна передумова",pattern:"X, desde que Y",note:"desde que може означати умову за умови виконання Y."}
 ],
 formation:"se є базовим незмінним сполучником. caso, desde que, contanto que та desde que створюють спеціалізовані умовні моделі. Умовна семантика не завжди дорівнює одному типу способу: вибір indicativo/subjuntivo залежить від того, чи умова подається як факт, можливість, припущення або вимога.",
 uses:[
  {title:"Відкрита умова",body:"Умова може стосуватися реальної або потенційно реальної ситуації.",examples:[ex("Se chover, ficamos em casa.","Якщо піде дощ, ми залишимося вдома.",{purpose:"condition"})]},
  {title:"Гіпотетична умова",body:"Imperfect subjunctive у protasis разом із відповідною формою головної частини створює контрфактичну або малоймовірну перспективу.",examples:[ex("Se tivesse tempo, viajaria mais.","Якби я мав час, я більше подорожував би.",{purpose:"condition"})]},
  {title:"Умова з caso",body:"caso формує умовну підрядність із subjuntivo.",examples:[ex("Caso seja necessário, ligue-me.","Якщо буде потрібно, подзвони мені.",{purpose:"condition"})]},
  {title:"Умова як вимога",body:"contanto que та подібні засоби можуть задавати необхідну передумову.",examples:[ex("Irei, contanto que haja tempo.","Я піду за умови, що буде час.",{purpose:"condition"})]}
 ],
 examples:[ex("Se chover, ficamos em casa.","Якщо піде дощ, ми залишимося вдома.",{purpose:"condition"}),ex("Se tivesse tempo, viajaria mais.","Якби я мав час, я більше подорожував би.",{purpose:"condition"}),ex("Caso seja necessário, ligue-me.","Якщо буде потрібно, подзвони мені.",{purpose:"condition"}),ex("Irei, contanto que haja tempo.","Я піду за умови, що буде час.",{purpose:"condition"})],
 nonUses:["Не вибирайте спосіб лише за українським «якщо».","Не змішуйте умовне se з іншими значеннями se.","Не вважайте caso повним синонімом se в усіх регістрах і позиціях."],
 markers:["se","caso","desde que","contanto que","a menos que","salvo se"],
 mistakes:[
  mistake("після se завжди потрібен futuro do subjuntivo","визначати часову та модальну структуру умови","Умовні конструкції використовують різні часові форми."),
  mistake("se + imperfect subjunctive — просто минулий час","аналізувати гіпотетичну модальність","Форма маркує не лише час, а й тип умовної перспективи."),
  mistake("caso можна замінити se без жодної зміни","перевіряти mood selection і регістр","caso має власну граматичну поведінку.")
 ],
 ukrainian:"Українські «якщо», «якби», «за умови що» близькі функціонально, але українська умовна система не має прямого морфологічного відповідника кожному португальському tense/mood pattern.",
 comparisonUk:"se ≈ «якщо/якби», caso ≈ «якщо/у разі якщо», contanto que ≈ «за умови що». Португальські форми треба аналізувати разом із часовою та модальною формою дієслова.",
 regional:"Основні умовні сполучники спільні для PT-BR і PT-PT. Вибір окремих локцій та часово-модальних моделей може залежати від різновиду, жанру й стилю.",
 sources
}),
page({
 id:"concessive-conjunctions",slug:"concessive-conjunctions",category:"conjunctions",
 titleUk:"Допустові сполучники",titlePt:"Conjunções concessivas",titleEn:"Concessive conjunctions",
 summary:"embora, ainda que, mesmo que, apesar de та інші конструкції, що виражають допустовість.",
 aliases:["допустові сполучники","concessive conjunctions","conjunções concessivas"],
 related:["subordinating-conjunctions","conjunction-selection-and-meaning","conjunctions-and-clause-mood","concessive-clauses"],
 status:"review",origin:"handwritten",depth:"high",ukrainianContrast:"high",
 intro:"Допустова конструкція показує, що певний факт, умова або очікування не перешкоджає здійсненню іншої ситуації. Центральними засобами є embora, ainda que та mesmo que. Їхня семантика близька, але відрізняється за характером передумови: факт, припущення або підсилене «навіть якщо». Допустовість також тісно пов'язана з subjuntivo.",
 definition:"Допустовий сполучниковий засіб вводить ситуацію, яка потенційно створює перешкоду для головної ситуації, але не скасовує її.",
 formulas:[
  {label:"Фактична допустовість",pattern:"Embora Y, X",note:"embora типово поєднується із subjuntivo."},
  {label:"Гіпотетична допустовість",pattern:"Mesmo que Y, X",note:"Навіть якщо Y, X."},
  {label:"Універсальна допустовість",pattern:"Ainda que Y, X",note:"Навіть попри Y."},
  {label:"Інфінітивна модель",pattern:"Apesar de Y-inf, X",note:"Складена конструкція може поєднувати прийменниковий засіб та infinitive."}
 ],
 formation:"embora, ainda que, mesmo que та apesar de мають різну морфосинтаксичну організацію. Сполучники que-конструкцій утворюють finite clauses, тоді як apesar de може вводити іменну або інфінітивну групу. Subjuntivo є типовим для багатьох finite concessive patterns, але його вибір треба пов'язувати з конкретною конструкцією.",
 uses:[
  {title:"Факт, який не перешкоджає",body:"embora може вводити відому або подану як факт ситуацію.",examples:[ex("Embora estivesse cansado, continuou.","Хоча він був втомлений, він продовжив.",{purpose:"concession"})]},
  {title:"Гіпотетичне «навіть якщо»",body:"mesmo que вводить можливу умову, яка не змінює результат.",examples:[ex("Mesmo que chova, vamos sair.","Навіть якщо піде дощ, ми підемо.",{purpose:"concession"})]},
  {title:"Навіть попри",body:"ainda que може виражати сильну допустовість.",examples:[ex("Ainda que seja difícil, tentaremos.","Навіть якщо це складно, ми спробуємо.",{purpose:"concession"})]},
  {title:"Інфінітив після прийменника",body:"Apesar de дозволяє будувати компактну non-finite конструкцію.",examples:[ex("Apesar de estar cansado, continuei.","Попри те, що я був втомлений, я продовжив.",{purpose:"concession"})]}
 ],
 examples:[ex("Embora estivesse cansado, continuou.","Хоча він був втомлений, він продовжив.",{purpose:"concession"}),ex("Mesmo que chova, vamos sair.","Навіть якщо піде дощ, ми підемо.",{purpose:"concession"}),ex("Ainda que seja difícil, tentaremos.","Навіть якщо це складно, ми спробуємо.",{purpose:"concession"}),ex("Apesar de estar cansado, continuei.","Попри те, що я був втомлений, я продовжив.",{purpose:"concession"})],
 nonUses:["Не перекладайте embora лише як «хоча» без аналізу mood.","Не плутайте concessive і conditional even-if structures.","Не вважайте apesar de звичайним finite conjunction."],
 markers:["embora","ainda que","mesmo que","apesar de","se bem que","por mais que"],
 mistakes:[
  mistake("після embora завжди indicativo","перевіряти concessive construction","Типова finite concessive model використовує subjuntivo."),
  mistake("mesmo que і mesmo se завжди тотожні","аналізувати concessive/conditional relation","Навіть якщо — не завжди те саме синтаксичне відношення."),
  mistake("apesar de + finite verb без змін","пам'ятати про інфінітивну організацію","de після apesar de входить до прийменникової конструкції.")
 ],
 ukrainian:"Українські «хоча», «хай навіть», «навіть якщо», «попри те що» передають близькі відношення. Португальський subjuntivo часто робить модальну структуру явнішою.",
 comparisonUk:"embora ≈ «хоча», mesmo que ≈ «навіть якщо», ainda que ≈ «навіть якщо/хоча», apesar de ≈ «попри/незважаючи на».",
 regional:"Базові допустові конструкції спільні для PT-BR і PT-PT. Варіанти вибору локції, infinitive та mood можуть мати жанрові або регіональні переваги.",
 sources
}),
page({
 id:"final-purpose-conjunctions",slug:"final-purpose-conjunctions",category:"conjunctions",
 titleUk:"Сполучники мети та цільові конструкції",titlePt:"Conjunções finais e construções de finalidade",titleEn:"Final and purpose conjunctions",
 summary:"para que, a fim de que, de modo que та інші способи вираження мети.",
 aliases:["сполучники мети","final purpose conjunctions","conjunções finais"],
 related:["subordinating-conjunctions","conjunctive-locutions","conjunctions-and-clause-mood","purpose-clauses"],
 status:"review",origin:"handwritten",depth:"high",ukrainianContrast:"high",
 intro:"Цільова конструкція подає бажаний результат або мету, заради якої виконується чи планується інша дія. Найтиповішим finite засобом є para que. На відміну від para + infinitive, para que вводить окрему finite clause і тому дозволяє виразити власного суб'єкта цільової дії. Вибір subjuntivo є системною частиною цієї конструкції.",
 definition:"Цільовий сполучниковий засіб вводить підрядну частину, яка описує бажану мету або результат, спрямований на реалізацію іншої ситуації.",
 formulas:[
  {label:"Базова ціль",pattern:"X para que Y",note:"para que типово вимагає subjuntivo."},
  {label:"Формальніша ціль",pattern:"X a fim de que Y",note:"Складена сполучникова локція."},
  {label:"Окремий суб'єкт",pattern:"X para que sujeito Y",note:"Finite clause дозволяє окремо виразити виконавця цільової дії."},
  {label:"Спільний суб'єкт",pattern:"X para + infinitivo",note:"Інфінітивна конструкція є компактною альтернативою."}
 ],
 formation:"para que, a fim de que та de modo que можуть оформлювати ціль у finite clause; у відповідних значеннях вони поєднуються із subjuntivo. Para + infinitive є прийменниковою інфінітивною конструкцією, а не тим самим сполучником que.",
 uses:[
  {title:"Мета дії",body:"para que вводить бажаний результат.",examples:[ex("Estudo para que o meu português melhore.","Я навчаюся, щоб моя португальська покращилася.",{purpose:"purpose"})]},
  {title:"Різні суб'єкти",body:"Finite clause з para que дозволяє відрізнити виконавця головної та цільової дії.",examples:[ex("Falei devagar para que todos entendessem.","Я говорив повільно, щоб усі зрозуміли.",{purpose:"purpose"})]},
  {title:"Інфінітивна альтернатива",body:"За спільного суб'єкта para + infinitive часто є компактним способом вираження мети.",examples:[ex("Falei devagar para ser claro.","Я говорив повільно, щоб бути зрозумілим.",{purpose:"purpose"})]},
  {title:"Формальніша локція",body:"a fim de que має те саме цільове ядро, але виразніше формальне оформлення.",examples:[ex("Agimos a fim de que o projeto avance.","Ми діємо, щоб проєкт просувався.",{purpose:"purpose"})]}
 ],
 examples:[ex("Estudo para que o meu português melhore.","Я навчаюся, щоб моя португальська покращилася.",{purpose:"purpose"}),ex("Falei devagar para que todos entendessem.","Я говорив повільно, щоб усі зрозуміли.",{purpose:"purpose"}),ex("Falei devagar para ser claro.","Я говорив повільно, щоб бути зрозумілим.",{purpose:"purpose"}),ex("Agimos a fim de que o projeto avance.","Ми діємо, щоб проєкт просувався.",{purpose:"purpose"})],
 nonUses:["Не ототожнюйте para que з para + infinitive.","Не вибирайте indicativo після para que за аналогією з українським «щоб».","Не плутайте мету з наслідком у конструкціях із de modo que."],
 markers:["para que","a fim de que","de modo que","com o objetivo de que"],
 mistakes:[
  mistake("para que = para + infinitive","розрізняти finite та non-finite clause","que вводить окрему предикативну частину."),
  mistake("після para que можна ставити будь-який спосіб","перевіряти цільову семантику","Цільові finite constructions типово пов'язані із subjuntivo."),
  mistake("de modo que завжди означає мету","визначати relation у контексті","Ця форма може мати і наслідкову інтерпретацію.")
 ],
 ukrainian:"Українське «щоб» охоплює цільові конструкції, які португальська розрізняє через para que, para + infinitive та інші моделі.",
 comparisonUk:"para que ≈ «щоб», para + infinitive ≈ «щоб» із спільним суб'єктом; український переклад приховує відмінність finite/non-finite структури.",
 regional:"Цільові конструкції є спільними для PT-BR і PT-PT. Різниця між infinitive та finite clause більше залежить від структури суб'єктів, стилю та контексту, ніж від простої географічної опозиції.",
 sources
})
];
