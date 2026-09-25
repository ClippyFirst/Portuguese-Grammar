import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

export const pages: GrammarPage[] = [
  page({
    id:"lhe-vs-o",slug:"lhe-vs-o",category:"clitics",
    titleUk:"lhe vs o/a: непрямий і прямий додаток",titlePt:"Lhe vs o/a",titleEn:"lhe vs o/a",
    summary:"Як розрізняти клитик непрямого додатка lhe та клитики прямого додатка o/a.",
    aliases:["lhe vs o","lhe o a","непрямий прямий додаток","lhe"],
    related:["clitic-pronouns","direct-object","indirect-object","clitic-placement"],
    status:"draft",origin:"handwritten",depth:"high",ukrainianContrast:"high",
    intro:"Найкорисніший спосіб розрізняти lhe та o/a — визначити синтаксичну роль доповнення, а не перекладати займенник як «його/йому». У базовій нормативній моделі o/a/os/as реалізують прямий додаток, а lhe/lhes — непрямий.",
    definition:"Lhe/lhes — клитики, що в базовій системі позначають непрямий додаток; o/a/os/as — клитики прямого додатка.",
    formulas:[{label:"Прямий",pattern:"V + o/a/os/as"},{label:"Непрямий",pattern:"V + lhe/lhes"}],
    uses:[
      {title:"Прямий додаток",body:"Перевірте, чи дієслово без прийменника безпосередньо бере цей компонент.",examples:[ex("Vi-o ontem.","Я бачив його вчора.",{variety:"PT"})]},
      {title:"Непрямий додаток",body:"Адресат або інший непрямий аргумент може реалізуватися через lhe/lhes.",examples:[ex("Dei-lhe o livro.","Я дав йому/їй книжку.")]},
      {title:"Бразильська варіантність",body:"У PT-BR lhe має ширше розмовне вживання в деяких моделях, зокрема як звернений до você об'єкт; це треба маркувати як різновидну модель, а не переносити на всю португальську.",examples:[ex("Posso lhe ajudar?","Можу вам допомогти?",{variety:"BR",register:"spoken"})]}
    ],
    examples:[ex("Entreguei-lhe a chave.","Я передав/передала йому ключ.",{variety:"PT"}),ex("Encontrei-o na rua.","Я зустрів/зустріла його на вулиці.",{variety:"PT"})],
    mistakes:[mistake("Dei-o o livro","Dei-lhe o livro","o не є стандартним клитиком непрямого додатка в базовій моделі.","predicted-l1-transfer","high"),mistake("вибирати lhe лише за перекладом «йому»","визначати синтаксичну роль","Українські відмінки не є прямою таблицею португальських клитиків.","predicted-l1-transfer","high")],
    ukrainian:"Український давальний/знахідний добре допомагає як стартова аналогія, але португальську форму треба визначати за валентністю дієслова та роллю доповнення.",
    regional:"PT-BR має моделі з lhe, які відрізняються від традиційної PT-PT системи; не узагальнюйте одну норму на всі канали.",
    reviewStatus:"review-needed"
  }),
  page({
    id:"personal-vs-impersonal",slug:"personal-vs-impersonal",category:"infinitive",
    titleUk:"Особовий і безособовий інфінітив",titlePt:"Infinitivo pessoal vs impessoal",titleEn:"Personal vs impersonal infinitive",
    summary:"Коли інфінітив отримує особові закінчення, а коли лишається нефлексованим.",
    aliases:["особовий інфінітив","безособовий інфінітив","infinitivo pessoal","infinitivo impessoal"],
    related:["personal-infinitive","impersonal-infinitive","infinitive-vs-subjunctive","infinitive-prepositions"],
    status:"draft",origin:"handwritten",depth:"high",ukrainianContrast:"high",
    intro:"Португальський infinitivo pessoal має особові закінчення і може явно показувати підмет інфінітивної частини. Infinitivo impessoal не показує особу. Вибір не зводиться до «є підмет / немає підмета»: важливі кореференція, структура речення, наголос на суб'єкті та тип конструкції.",
    definition:"Контраст personal/impersonal infinitive — вибір між флексованою та нефлексованою формою інфінітива відповідно до синтаксичної структури.",
    formulas:[{label:"Нефлексований",pattern:"INF"},{label:"Особовий",pattern:"INF + personal ending"}],
    uses:[
      {title:"Спільний суб'єкт",body:"За спільного суб'єкта нефлексований інфінітив часто є природним.",examples:[ex("Saí para estudar.","Я вийшов/вийшла, щоб учитися.")]},
      {title:"Явний відмінний суб'єкт",body:"Особовий інфінітив може явно показати іншого суб'єкта.",examples:[ex("É importante vocês estudarem.","Важливо, щоб ви вчилися.")]},
      {title:"Фокус на учаснику",body:"Флексія може допомагати зробити суб'єкта явним або структурно відокремити його від головного предиката.",examples:[ex("Antes de chegarmos, avisa-nos.","Перед тим як ми приїдемо, повідом нас."])}
    ],
    examples:[ex("É melhor ficarmos aqui.","Краще нам залишитися тут."),ex("É melhor ficar aqui.","Краще залишитися тут.")],
    mistakes:[mistake("вважати personal infinitive просто «інфінітивом із займенником»","аналізувати суб'єкта та конструкцію","Флексія інфінітива сама є граматичним сигналом.","predicted-l1-transfer","high")],
    ukrainian:"Український інфінітив не має аналогічної особової флексії. Українське «щоб ми залишилися» може відповідати португальському personal infinitive або conjuntivo залежно від структури.",
    regional:"Особовий інфінітив є центральною рисою португальської, але частотність конкретних конструкцій залежить від стилю та різновиду.",
    reviewStatus:"review-needed"
  })
];
