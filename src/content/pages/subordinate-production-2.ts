import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

export const pages: GrammarPage[] = [
  page({
    id:"purpose-clauses",slug:"purpose",category:"subordinate",
    titleUk:"Підрядні мети",titlePt:"Orações finais",titleEn:"Purpose clauses",
    summary:"Як виражати мету через para que, a fim de que та інфінітивні конструкції.",
    aliases:["підрядні мети","orações finais","purpose clauses","para que"],
    related:["complement-clauses","infinitive-prepositions","subjunctive-overview","personal-infinitive"],
    status:"draft",origin:"handwritten",depth:"high",ukrainianContrast:"high",
    intro:"Підрядна мети відповідає на питання про намір або бажаний результат. Португальська розрізняє інфінітивні конструкції та finite para que; вибір залежить, зокрема, від структури підметів.",
    definition:"Підрядна мети — залежна частина, що виражає ціль, заради якої відбувається дія головної частини.",
    formulas:[{label:"Той самий суб'єкт",pattern:"V + para + INF"},{label:"Окремий суб'єкт",pattern:"V + para que + SUBJ"}],
    examples:[ex("Estudo para aprender português.","Я вчуся, щоб вивчити португальську."),ex("Estudo para que os meus filhos aprendam português.","Я вчуся, щоб мої діти вивчали португальську.")],
    mistakes:[mistake("para que aprender","para aprender","За спільного суб'єкта інфінітивна модель є базовим способом вираження мети.","predicted-l1-transfer","medium"),mistake("para que eles aprendem","para que eles aprendam","Finite purpose clause після para que вимагає conjuntivo.","predicted-l1-transfer","high")],
    ukrainian:"Українське «щоб» охоплює і мету, і деякі інші відношення, тому воно не вибирає португальську конструкцію автоматично.",
    regional:"Базові моделі спільні; вибір інфінітивної форми може залежати від структури підметів.",
    reviewStatus:"review-needed"
  }),
  page({
    id:"conditional-clauses",slug:"conditional",category:"subordinate",
    titleUk:"Умовні речення",titlePt:"Orações condicionais",titleEn:"Conditional clauses",
    summary:"Як реальна, гіпотетична та нереалізована умова впливає на часово-модальну форму.",
    aliases:["умовні речення","orações condicionais","conditional clauses","se"],
    related:["future-subjunctive","subjunctive-overview","conditional","tense-aspect"],
    status:"draft",origin:"handwritten",depth:"high",ukrainianContrast:"high",
    intro:"Умовне речення складається з умови та наслідку. Важливо розрізняти майбутню відкриту умову, гіпотетичну умову та нереальну минулу ситуацію: форми після se не є взаємозамінними.",
    definition:"Умовна конструкція — речення, де одна пропозиція задає умову для реалізації іншої.",
    formulas:[{label:"Майбутня відкрита умова",pattern:"se + futuro do conjuntivo"},{label:"Нереальна теперішня/майбутня",pattern:"se + imperfeito do conjuntivo + condicional"}],
    examples:[ex("Se tiver tempo, vou contigo.","Якщо матиму час, піду з тобою."),ex("Se tivesse tempo, iria contigo.","Якби я мав/мала час, я б пішов/пішла з тобою."),ex("Se tivesse estudado, teria passado.","Якби я вчився/вчилася, я б склав/склала.")],
    mistakes:[mistake("Se tenho tempo, vou contigo","Se tiver tempo, vou contigo","Для відкритої майбутньої умови стандартна модель використовує futuro do conjuntivo.","predicted-l1-transfer","high"),mistake("Se tivesse estudado, passava","Se tivesse estudado, teria passado","Для нереалізованої минулої умови типовою є пара imperfeito do conjuntivo + condicional composto.","editorial","medium")],
    ukrainian:"Українське «якщо» використовується в усіх цих типах, тому сполучник не підказує португальський час сам по собі.",
    regional:"Базова система спільна, але розмовні альтернативи та частотність окремих моделей потребують різновидного опису.",
    reviewStatus:"review-needed"
  }),
  page({
    id:"concessive-clauses",slug:"concessive",category:"subordinate",
    titleUk:"Підрядні допустові",titlePt:"Orações concessivas",titleEn:"Concessive clauses",
    summary:"Embora, ainda que, mesmo que та вираження суперечності очікуваному результату.",
    aliases:["допустові","orações concessivas","concessive clauses","embora"],
    related:["subjunctive-triggers","conditional-clauses","subordination-and-coordination"],
    status:"draft",origin:"handwritten",depth:"high",ukrainianContrast:"medium",
    intro:"Допустова конструкція повідомляє, що певна обставина не перешкодила основному результату. У португальській хоча б одна центральна модель, embora + conjuntivo, прямо пов'язує цей тип значення зі способом.",
    definition:"Допустова підрядна — залежна частина, яка задає обставину, попри яку головна пропозиція все одно реалізується.",
    examples:[ex("Embora esteja cansado, vou trabalhar.","Хоч я втомлений/втомлена, я піду працювати."),ex("Mesmo que chova, vamos sair.","Навіть якщо буде дощ, ми вийдемо.")],
    mistakes:[mistake("Embora estou cansado...","Embora esteja cansado...","Embora у стандартній моделі вводить conjuntivo.","predicted-l1-transfer","high")],
    ukrainian:"Українське «хоча» не має такого самого морфологічного тригера, тому переклад сполучника не передбачає форму дієслова.",
    regional:"Не всі допустові маркери мають однаковий розподіл; конкретну конструкцію слід учити разом із формою.",
    reviewStatus:"review-needed"
  }),
  page({
    id:"temporal-clauses",slug:"temporal",category:"subordinate",
    titleUk:"Підрядні часу",titlePt:"Orações temporais",titleEn:"Temporal clauses",
    summary:"Коли часовий сполучник вимагає різних форм залежно від фактичності та часової точки.",
    aliases:["підрядні часу","orações temporais","temporal clauses","quando"],
    related:["future-subjunctive","tense-aspect","sequence-of-tenses"],
    status:"draft",origin:"handwritten",depth:"high",ukrainianContrast:"high",
    intro:"Часові підрядні описують момент, тривалість або межу події. Якщо подія ще не реалізована і відноситься до майбутнього, португальська часто використовує futuro do conjuntivo після quando, assim que, logo que та подібних маркерів.",
    definition:"Часова підрядна — залежна частина, яка задає часову відношення між подіями.",
    examples:[ex("Quando cheguei, ele saiu.","Коли я прийшов/прийшла, він вийшов."),ex("Quando chegares, liga-me.","Коли приїдеш, зателефонуй мені.")],
    mistakes:[mistake("Quando chegarás, liga-me","Quando chegares, liga-me","Майбутня часова підрядна після quando використовує futuro do conjuntivo, а не futuro do indicativo.","predicted-l1-transfer","high")],
    ukrainian:"Українське «коли» може вводити і минулу, і майбутню подію без зміни типу сполучника. Португальська форма залежить від часової та модальної інтерпретації.",
    regional:"Майбутній conjuntivo є стандартною частиною системи; альтернативні розмовні моделі треба оцінювати окремо.",
    reviewStatus:"review-needed"
  })
];
