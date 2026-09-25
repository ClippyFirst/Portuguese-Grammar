import type { GrammarPage } from "../types";
import { mistake } from "../helpers";

const draft = (p: GrammarPage): GrammarPage => ({ ...p, status: "draft", origin: "handwritten" });

export const pages: GrammarPage[] = [
  draft({
    id:"accentuation-advanced",slug:"accentuation-advanced",category:"spelling",
    titleUk:"Розширена акцентуація",titlePt:"Acentuação avançada",titleEn:"Advanced accentuation",
    summary:"Як системно застосовувати правила графічного наголосу до складних випадків, не плутаючи наголос із самим знаком акценту.",
    aliases:["accentuation","advanced accentuation","stress","acentuação"],
    related:["stress","diacritics","homograph-accents","secondary-stress","reading-rules"],
    depth:"high",ukrainianContrast:"high",
    intro:"У португальській треба розрізняти щонайменше три речі: словесний наголос, фонетичну реалізацію наголошеної голосної та графічний акцент. Не кожне наголошене слово має ´ або ^. Графічний знак з'являється тоді, коли цього вимагає орфографічне правило. Для складніших випадків корисно рухатися від структури слова й наголошеного складу до конкретного класу акцентуації, а не вчити окремі слова ізольовано.",
    definition:"Розширена акцентуація — застосування нормативних правил написання акцентів до слів із нетиповим закінченням, дифтонгом, гіатусом, омографією або спеціальними орфографічними умовами.",
    formation:"Алгоритм: визначте наголошений склад; класифікуйте слово як oxítona, paroxítona або proparoxítona; перевірте закінчення та структуру голосних; застосуйте спеціальне правило; лише потім визначайте, чи потрібен ´, ^ або інший знак. У país акцент допомагає показати окремий наголошений i; у lâmpada він маркує proparoxítona; у órgão тильда пов'язана з носовою голосною та орфографічним правилом.",
    uses:[
      {title:"Proparoxítonas",body:"Слова з наголосом на третьому складі від кінця мають системне акцентування.",examples:[{pt:"lâmpada",uk:"лампа",purpose:"production"},{pt:"música",uk:"музика",purpose:"production"}]},
      {title:"Гіатус",body:"Окремі випадки i/u в гіатусі мають спеціальні правила графічного акценту.",examples:[{pt:"país",uk:"країна",purpose:"contrast"},{pt:"saída",uk:"вихід",purpose:"contrast"}]},
      {title:"Носові голосні та тильда",body:"Тильда може бути частиною нормативного позначення носової голосної.",examples:[{pt:"órgão",uk:"орган",purpose:"comprehension"},{pt:"nação",uk:"нація",purpose:"comprehension"}]},
      {title:"Не кожен наголос пишеться",body:"Фонетичний наголос і графічний знак — різні рівні опису.",examples:[{pt:"casa",uk:"дім",purpose:"contrast"},{pt:"café",uk:"кава",purpose:"contrast"}]}
    ],
    examples:[
      {pt:"lâmpada",uk:"лампа",purpose:"production"},
      {pt:"música",uk:"музика",purpose:"production"},
      {pt:"país",uk:"країна",purpose:"contrast"},
      {pt:"saída",uk:"вихід",purpose:"contrast"},
      {pt:"órgão",uk:"орган",purpose:"comprehension"},
      {pt:"café",uk:"кава",purpose:"contrast"}
    ],
    mistakes:[
      mistake("вважати кожен наголошений склад акцентованим","спочатку визначати орфографічний клас слова","Графічний акцент ставиться лише за нормативним правилом.","predicted-l1-transfer","high"),
      mistake("ставити знак лише тому, що слово «важко читається»","застосовувати правило до наголосу, закінчення та структури","Суб'єктивна вимова не є орфографічним критерієм.","editorial","high"),
      mistake("ототожнювати ´, ^ і ~","вивчати функцію кожного знака в конкретному класі","Знаки не є взаємозамінними позначеннями сили наголосу.","predicted-l1-transfer","high")
    ],
    ukrainian:"Українська також має графічне позначення наголосу в навчальних і спеціальних текстах, але це не тотожна система. Португальський акцент є частиною нормативного написання слова, а не просто підказкою для читача.",
    regional:"Сучасні правила акцентуації пов'язані з нормативною орфографією та Acordo Ortográfico; у джерелах різних періодів можуть траплятися старі варіанти.",
    brPt:"Базові правила графічного наголосу є спільними для сучасної нормативної орфографії, хоча словники й довідники можуть мати різні редакційні практики щодо варіантів.",
    sources:[
      {label:"Dicionário Terminológico — Direção-Geral da Educação",url:"https://area.dge.mec.pt/gramatica/DT_2008.pdf"},
      {label:"Ciberdúvidas — Dupla acentuação",url:"https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/dupla-acentuacao/69"}
    ]
  }),
  draft({
    id:"hyphenation",slug:"hyphenation",category:"spelling",
    titleUk:"Дефіс і перенос",titlePt:"Hifenização",titleEn:"Hyphenation",
    summary:"Коли дефіс є частиною написання, а коли складна одиниця пишеться разом або окремо.",
    aliases:["hyphenation","hífen","дефіс","hifenização"],
    related:["acordo-ortografico","spelling-br-pt","word-formation-affixes","compound-adjectives"],
    depth:"high",ukrainianContrast:"high",
    intro:"Дефіс у португальській не можна зводити до правила «два слова = дефіс». Він пов'язаний із типом словотвору, усталеною лексикалізацією, морфемними межами та орфографічними правилами. Acordo Ortográfico змінив частину традиційних написань, тому старі тексти можуть мати форми, які відрізняються від сучасної норми. Окремо треба розрізняти дефіс як знак усередині слова та технічний перенос слова на новий рядок.",
    definition:"Гіфенізація — нормативне використання дефіса в складних словах та інших орфографічно визначених конструкціях; технічний перенос рядка є окремим явищем.",
    formation:"Не вирішуйте питання дефіса лише за перекладом. Визначте морфологічний тип, перевірте сучасну орфографічну модель і врахуйте, чи одиниця вже лексикалізована як одне слово. У guarda-chuva дефіс є частиною словникового написання; натомість багато префіксальних утворень пишуться разом. Для навчання корисно групувати правила, а не складати нескінченний список винятків.",
    uses:[
      {title:"Лексикалізовані складні слова",body:"Деякі складні одиниці нормативно мають дефіс.",examples:[{pt:"guarda-chuva",uk:"парасоля",purpose:"production"},{pt:"segunda-feira",uk:"понеділок",purpose:"production"}]},
      {title:"Префіксальні утворення",body:"У багатьох випадках слово пишеться разом; дефіс залежить від конкретної фонологічної та морфологічної моделі.",examples:[{pt:"antissocial",uk:"антисоціальний",purpose:"contrast"}]},
      {title:"Зміни орфографічної норми",body:"Сучасне написання може відрізнятися від старої форми.",examples:[{pt:"autoestrada",uk:"автомагістраль",purpose:"comprehension"}]},
      {title:"Технічний перенос",body:"Перенесення слова між рядками не дорівнює словотвірному дефісу.",examples:[{pt:"palavra",uk:"слово",purpose:"comprehension"}]}
    ],
    examples:[
      {pt:"guarda-chuva",uk:"парасоля",purpose:"production"},
      {pt:"segunda-feira",uk:"понеділок",purpose:"production"},
      {pt:"antissocial",uk:"антисоціальний",purpose:"contrast"},
      {pt:"autoestrada",uk:"автомагістраль",purpose:"comprehension"}
    ],
    mistakes:[
      mistake("ставити дефіс між будь-якими двома основами","визначати конкретну словотвірну модель","Частина складних слів пишеться разом.","predicted-l1-transfer","high"),
      mistake("вважати старе написання автоматично сучасною нормою","перевіряти редакцію орфографічного правила","Acordo Ortográfico змінив низку написань.","documented","high"),
      mistake("плутати дефіс у слові з переносом рядка","розрізняти lexical hyphenation і line breaking","Це різні операції.","editorial","medium")
    ],
    ukrainian:"Українська також має дефіс у складних словах, але критерії не збігаються. Особливо небезпечно переносити українську модель префіксального словотвору на португальську.",
    regional:"Acordo Ortográfico має особливе значення для порівняння традиційних і сучасних написань. Варіанти треба датувати та прив'язувати до нормативної системи.",
    brPt:"PT-BR і PT-PT користуються сучасною орфографічною нормою, але словникові джерела та історична практика можуть фіксувати різні традиції. Для навчального письма краще дотримуватися актуального нормативного варіанта.",
    sources:[
      {label:"Acordo Ortográfico da Língua Portuguesa — Portal da Língua Portuguesa",url:"https://www.portaldalinguaportuguesa.org/?action=acordo&version=1990"},
      {label:"Ciberdúvidas — Hífen",url:"https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/hifen/2438"}
    ]
  }),
  draft({
    id:"capitalization-and-names",slug:"capitalization-names",category:"spelling",
    titleUk:"Великі літери у власних назвах",titlePt:"Maiúsculas e nomes próprios",titleEn:"Capitalization and proper names",
    summary:"Коли португальська використовує велику літеру у власних назвах, установах, географічних назвах і календарних назвах.",
    aliases:["capitalization","proper names","maiúsculas","nomes próprios"],
    related:["capitalization","articles-proper-names","articles-geography","spelling-br-pt"],
    depth:"high",ukrainianContrast:"high",
    intro:"Велика літера в португальській залежить не лише від того, чи є слово «важливим». Власні назви, офіційні найменування, географічні назви, назви організацій та календарні терміни мають різні конвенції. Для україномовного студента особливо помітна різниця в назвах місяців і днів тижня: вони зазвичай пишуться з малої літери. Також не слід автоматично капіталізувати кожне слово в назві установи.",
    definition:"Капіталізація — нормативний вибір великої або малої літери залежно від типу назви, синтаксичної позиції та орфографічної конвенції.",
    formation:"Спочатку визначте, чи це власна назва, офіційна назва установи, загальна назва посади, календарний термін або частина іншого найменування. Потім застосовуйте відповідне правило. Особові та географічні власні назви мають власну капіталізацію; місяці та дні тижня у звичайному вживанні — ні.",
    uses:[
      {title:"Особові назви",body:"Імена та прізвища є власними назвами.",examples:[{pt:"Maria Silva",uk:"Марія Сілва",purpose:"production"}]},
      {title:"Географічні назви",body:"Назви країн, міст та інших географічних об'єктів мають нормативну капіталізацію.",examples:[{pt:"Portugal",uk:"Португалія",purpose:"production"},{pt:"Rio de Janeiro",uk:"Ріо-де-Жанейро",purpose:"production"}]},
      {title:"Установи",body:"Офіційні назви організацій мають власні правила, але не кожне службове слово всередині назви потребує великої літери.",examples:[{pt:"Universidade de Lisboa",uk:"Лісабонський університет",purpose:"production"}]},
      {title:"Місяці та дні",body:"У звичайному португальському написанні вони пишуться з малої літери.",examples:[{pt:"segunda-feira",uk:"понеділок",purpose:"contrast"},{pt:"setembro",uk:"вересень",purpose:"contrast"}]}
    ],
    examples:[
      {pt:"Maria Silva",uk:"Марія Сілва",purpose:"production"},
      {pt:"Portugal",uk:"Португалія",purpose:"production"},
      {pt:"Universidade de Lisboa",uk:"Лісабонський університет",purpose:"production"},
      {pt:"segunda-feira",uk:"понеділок",purpose:"contrast"},
      {pt:"setembro",uk:"вересень",purpose:"contrast"}
    ],
    mistakes:[
      mistake("писати місяці та дні тижня з великої літери за українською звичкою","застосовувати португальську календарну конвенцію","setembro і segunda-feira зазвичай пишуться з малої літери.","predicted-l1-transfer","high"),
      mistake("капіталізувати кожне слово в офіційній назві","визначати структуру конкретного найменування","Португальська не використовує англомовний Title Case як універсальне правило.","predicted-l1-transfer","medium"),
      mistake("писати посаду з великої лише через статус особи","розрізняти власну назву і загальну назву посади","Контекст і конкретне найменування визначають написання.","editorial","medium")
    ],
    ukrainian:"Українська має схожий принцип розрізнення власних і загальних назв, але конвенції капіталізації календарних термінів та офіційних назв відрізняються.",
    regional:"Базові орфографічні правила спільні в сучасній португальській, хоча власні назви установ можуть мати офіційне написання, якого треба дотримуватися буквально.",
    brPt:"Для PT-BR та PT-PT базова капіталізація календарних термінів спільна. Офіційні назви установ і локальні стилістичні настанови можуть мати додаткові правила.",
    sources:[
      {label:"Portal da Língua Portuguesa — Acordo Ortográfico",url:"https://www.portaldalinguaportuguesa.org/?action=acordo&version=1990"}
    ]
  })
];
