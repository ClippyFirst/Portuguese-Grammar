import { ex, mistake, page } from "../helpers";
import type { GrammarPage } from "../types";

const G2 = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const G3 = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const CAMOES = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id:"bare-nominals", slug:"bare-nominals", category:"syntax",
    titleUk:"Безартиклеві іменні групи", titlePt:"Grupos nominais nus", titleEn:"Bare nominals",
    summary:"Як іменник уживається без артикля або іншого детермінатива та що визначає його інтерпретацію.",
    aliases:["безартиклеві іменні групи","bare nominals","grupos nominais nus"],
    related:["articles-definite","articles-indefinite","zero-article","generic-reference","determiners-overview"],
    status:"review", origin:"handwritten", depth:"high", ukrainianContrast:"high",
    intro:"Португальська не вимагає артикля перед кожним іменником. Іменна група може бути bare, тобто не мати вираженого артикля чи іншого детермінатива: Gosto de café, Crianças brincam no jardim, Preciso de água. Такі конструкції особливо важливі для речовинних і абстрактних іменників, множини з неозначеною референцією та деяких предикативних і сталих моделей.",
    definition:"Безартиклева іменна група — NP, у якій іменник або його модифікована група не має поверхневого детермінатива. Відсутність артикля сама по собі не означає невизначеність: інтерпретація залежить від типу іменника, числа, предиката та контексту.",
    formation:"Типові моделі включають mass noun у сингулярі (água, café), plural indefinite (livros, pessoas) та окремі конструкції з назвами професій, інституцій, речовин і абстрактних понять. Не слід механічно переносити українське правило «артикля немає, бо його немає в українській».",
    uses:[
      {title:"Речовинні значення",body:"Речовина може подаватися як неконкретна маса.",examples:[ex("Bebo café sem açúcar.","Я п'ю каву без цукру.",{purpose:"production"})]},
      {title:"Неозначена множина",body:"Множина без артикля може представляти неконкретних представників класу.",examples:[ex("Comprei livros novos.","Я купив/купила нові книжки.",{purpose:"production"})]},
      {title:"Узагальнення",body:"У певних предикатах bare plural легко набуває родового значення.",examples:[ex("Crianças precisam de atenção.","Дітям потрібна увага.",{purpose:"contrast"})]}
    ],
    examples:[
      ex("Gosto de música brasileira.","Мені подобається бразильська музика.",{purpose:"production"}),
      ex("Há livros na mesa.","На столі є книжки.",{purpose:"production"}),
      ex("Preciso de água.","Мені потрібна вода.",{purpose:"production"}),
      ex("Crianças brincam no jardim.","Діти граються в саду.",{purpose:"comprehension"})
    ],
    mistakes:[
      mistake("ставити артикль перед кожним іменником","спочатку визначати референційний тип іменної групи","Португальська допускає нормативні bare nominals.", "predicted-l1-transfer","high"),
      mistake("вважати відсутність артикля автоматично ознакою помилки","перевіряти mass/plural/generic та конструкційний контекст","Нульовий детермінатив має власні функції.", "editorial","high")
    ],
    ukrainian:"Українська не має артиклів, тому bare NP інтуїтивно знайомі. Але португальська має окрему систему розподілу нульового та вираженого детермінатива; українське відчуття «просто іменника» не завжди передбачає португальський нульовий варіант.",
    regional:"Bare nominals є в PT-BR і PT-PT. Частотність окремих моделей, особливо в розмовній мові та з plural indefinites, може відрізнятися.",
    sources:[{label:"Gramática do Português, Vol. II",url:G2},{label:"Camões — Referencial Camões PLE",url:CAMOES}]
  }),
  page({
    id:"topic-subject-constructions", slug:"topic-subject-constructions", category:"syntax",
    titleUk:"Тема-підметові конструкції", titlePt:"Construções de tópico-sujeito", titleEn:"Topic-subject constructions",
    summary:"Як тематичний компонент і граматичний підмет можуть не збігатися, особливо в бразильському різновиді.",
    aliases:["тема-підмет","topic-subject","tópico-sujeito","topic-subject constructions"],
    related:["information-structure","topicalization","null-subject","agreement-sv","pt-br-pt-pt"],
    status:"review", origin:"handwritten", depth:"high", ukrainianContrast:"high",
    intro:"У португальській, особливо в описах PT-BR, трапляються конструкції, де на початку речення стоїть тематичний іменний компонент, а подальша предикативна структура має власний синтаксичний суб'єкт. Це не те саме, що звичайний SVO-підмет. Конструкції типу Esse livro, eu já li мають простішу дискурсивну топікалізацію, тоді як у конструкціях типу A casa, a janela quebrou тематична частина може задавати рамку, щодо якої висловлюється окреме судження.",
    definition:"Topic-subject construction — конструкція, у якій topical constituent організує інтерпретацію речення, а його відношення до предиката не зводиться автоматично до канонічного граматичного subject.",
    formation:"Типова схема: TÓPICO + oração. Топік може бути NP, а речення після нього зберігає власні аргументи. У PT-BR такі моделі особливо помітні в розмовному мовленні; їх треба відрізняти від простого винесення об'єкта для фокусу.",
    uses:[
      {title:"Дискурсивна рамка",body:"Топік задає, про яку сутність далі повідомляється.",examples:[ex("Esse assunto, eu já conheço bem.","Цю тему я вже добре знаю.",{purpose:"production"})]},
      {title:"Власна предикативна структура",body:"Після топіка речення може мати окремий суб'єкт.",examples:[ex("Essa casa, as janelas estão sempre abertas.","У цьому будинку вікна завжди відчинені.",{purpose:"contrast"})]},
      {title:"Розмовна організація",body:"Топікалізація допомагає структурувати спонтанний дискурс.",examples:[ex("O João, eu falei com ele ontem.","Щодо Жуана, я говорив/говорила з ним учора.",{purpose:"comprehension"})]}
    ],
    examples:[
      ex("Esse livro, eu já li.","Цю книжку я вже прочитав/прочитала.",{purpose:"production"}),
      ex("Essa cidade, eu conheço muito bem.","Це місто я дуже добре знаю.",{purpose:"production"}),
      ex("O João, eu falei com ele ontem.","Щодо Жуана, я говорив/говорила з ним учора.",{purpose:"comprehension"})
    ],
    mistakes:[
      mistake("називати перший іменник завжди підметом","перевіряти аргументну структуру предиката та інформаційну структуру","Topic і grammatical subject можуть бути різними.", "editorial","high"),
      mistake("вважати topic-subject виключно «помилковим SVO»","аналізувати його як дискурсивно мотивовану конструкцію","У PT-BR такі моделі системно описуються в літературі.", "predicted-l1-transfer","high")
    ],
    ukrainian:"Українська також широко використовує топікалізацію: «Цю книжку я вже прочитав». Тому сам принцип знайомий. Важлива відмінність — португальські, особливо бразильські, конструкції можуть мати окреме співвідношення топіка з внутрішнім subject.",
    regional:"Ця тема особливо важлива для PT-BR. У PT-PT топікалізація також можлива, але частотність і конкретні структурні моделі не слід автоматично переносити з бразильської розмовної мови на європейську.",
    sources:[{label:"Gramática do Português, Vol. III",url:G3},{label:"Camões — Referencial Camões PLE",url:CAMOES}]
  }),
  page({
    id:"emphatic-affirmation", slug:"emphatic-affirmation", category:"syntax",
    titleUk:"Підсилене ствердження", titlePt:"Afirmação enfática", titleEn:"Emphatic affirmation",
    summary:"Як португальська підсилює позитивне твердження за допомогою конструкцій, часток і повтору.",
    aliases:["підсилене ствердження","emphatic affirmation","afirmação enfática"],
    related:["imperative-affirmative","negation-nao","discourse-markers","information-structure"],
    status:"review", origin:"handwritten", depth:"high", ukrainianContrast:"high",
    intro:"Позитивне речення може бути граматично простим, але прагматично дуже сильним. Португальська використовує повтор, справді-підтверджувальні елементи, прислівники та контрастивний фокус, щоб передати «так, саме так», «я справді це зробив» або виправити попереднє заперечення. Це важливо відрізняти від зміни полярності: emphatic affirmation залишається позитивним висловленням.",
    definition:"Підсилене ствердження — позитивне висловлення, у якому форма або контекст додатково сигналізує підтвердження, наполегливість, контраст чи виправлення.",
    formation:"Використовуються prosodic focus, повтор позитивного предиката, elementos como sim, mesmo, realmente, de facto/de fato та конструкції контрастивного фокусу. Конкретний вибір залежить від регістру.",
    uses:[
      {title:"Відповідь на сумнів",body:"sim може функціонувати як самостійне підтвердження.",examples:[ex("Sim, eu fiz isso.","Так, я це зробив/зробила.",{purpose:"production"})]},
      {title:"Контрастивне підсилення",body:"realmente або mesmo підкреслюють істинність/відповідність.",examples:[ex("Ele realmente veio.","Він справді прийшов.",{purpose:"production"})]},
      {title:"Виправлення",body:"Підсилене позитивне речення може протиставлятися попередній помилковій пропозиції.",examples:[ex("Não foi ontem; foi hoje.","Не вчора; це було сьогодні.",{purpose:"contrast"})]}
    ],
    examples:[
      ex("Sim, é verdade.","Так, це правда.",{purpose:"production"}),
      ex("Eu realmente vi isso.","Я справді це бачив/бачила.",{purpose:"production"}),
      ex("Foi mesmo ele.","Це справді був він.",{purpose:"comprehension"})
    ],
    mistakes:[
      mistake("вважати sim лише словниковим «так»","розрізняти відповідь, підтвердження та дискурсивне підсилення","Функція sim залежить від репліки та інтонації.", "editorial","high"),
      mistake("підсилювати кожне твердження словами realmente/mesmo","враховувати прагматичну мотивацію та регістр","Надмірне підсилення змінює стиль висловлення.", "predicted-l1-transfer","medium")
    ],
    ukrainian:"Українські «так», «справді», «дійсно», «саме так» мають близькі функції. Різниця полягає не в базовій логіці, а в конкретному розподілі португальських часток, прислівників та інтонаційних засобів.",
    regional:"sim є спільним для PT-BR і PT-PT; de facto характерніше для формальнішого європейського вжитку, тоді як de fato широко вживається в PT-BR.",
    sources:[{label:"Gramática do Português, Vol. III",url:G3},{label:"Camões — Referencial Camões PLE",url:CAMOES}]
  }),
  page({
    id:"biased-polar-questions", slug:"biased-polar-questions", category:"syntax",
    titleUk:"Полярні питання з очікуваною відповіддю", titlePt:"Perguntas polares orientadas", titleEn:"Biased polar questions",
    summary:"Як форма та контекст полярного питання сигналізують очікування мовця щодо відповіді.",
    aliases:["питання з очікуваною відповіддю","biased polar questions","perguntas polares orientadas"],
    related:["questions-yesno","question-tags","echo-questions","emphatic-affirmation","discourse-markers"],
    status:"review", origin:"handwritten", depth:"high", ukrainianContrast:"high",
    intro:"Не кожне питання так/ні є нейтральним пошуком інформації. У «Você vem, não vem?» мовець уже має очікування щодо відповіді. У «Você não vem?» негативна форма може вказувати на припущення, здивування або очікування підтвердження. Тому полярність граматичної форми та прагматичний bias — різні параметри.",
    definition:"Biased polar question — полярне питання, контекст, лексика, інтонація або конструкція якого робить одну відповідь більш очікуваною для мовця.",
    formation:"Bias виникає через негативну форму, question tags, модальні та дискурсивні елементи, повтор, контекст і просодію. Він не є окремим морфологічним «часом питання».",
    uses:[
      {title:"Очікування підтвердження",body:"Питання може перевіряти вже сформоване припущення.",examples:[ex("Você vem amanhã, não?","Ти прийдеш завтра, правда?",{purpose:"production"})]},
      {title:"Здивування",body:"Негативне питання може виражати невідповідність очікуванню.",examples:[ex("Você não vai?","Ти не йдеш?",{purpose:"contrast"})]},
      {title:"Уточнення спільного знання",body:"Question tag запрошує співрозмовника підтвердити пропозицію.",examples:[ex("Está tudo bem, não está?","Усе гаразд, чи не так?",{purpose:"production"})]}
    ],
    examples:[
      ex("Você vem, não vem?","Ти прийдеш, правда?",{purpose:"production"}),
      ex("Você não conhecia o João?","Ти хіба не знав Жуана?",{purpose:"comprehension"}),
      ex("É amanhã, não é?","Це завтра, чи не так?",{purpose:"production"})
    ],
    mistakes:[
      mistake("перекладати кожне негативне питання як нейтральне «чи не...»","ураховувати контекст очікування","Негативна форма часто має прагматичний ефект.", "predicted-l1-transfer","high"),
      mistake("вважати question tag просто другим незалежним питанням","аналізувати його як підтверджувальний додаток до першої пропозиції","Він змінює комунікативну функцію всієї репліки.", "editorial","medium")
    ],
    ukrainian:"Українська має дуже подібні конструкції: «Ти прийдеш, правда?», «Ти хіба не прийдеш?». Отже, концепція доступна; складність — у конкретних португальських формах і просодії.",
    regional:"Question-tag patterns різняться за різновидом і регістром. Не слід вважати одну модель єдино правильною для всіх країн португаломовного світу.",
    sources:[{label:"Gramática do Português, Vol. III",url:G3},{label:"Camões — Referencial Camões PLE",url:CAMOES}]
  }),
  page({
    id:"echo-questions", slug:"echo-questions", category:"syntax",
    titleUk:"Ехо-питання", titlePt:"Perguntas-eco", titleEn:"Echo questions",
    summary:"Питання, що повторюють частину попередньої репліки для уточнення, здивування або перевірки.",
    aliases:["ехо-питання","echo questions","perguntas-eco"],
    related:["questions-yesno","wh-questions","biased-polar-questions","discourse-reference"],
    status:"review", origin:"handwritten", depth:"high", ukrainianContrast:"high",
    intro:"Ехо-питання виникає як реакція на вже почуте. Мовець повторює частину репліки, але робить її питальною: «Você falou com quem?» після твердження «Falei com o João». Таке питання може бути простим проханням повторити інформацію, сигналом недовіри або вираженням здивування. Тому його не слід описувати лише як альтернативний порядок слів.",
    definition:"Ехо-питання — реактивне питання, структурно пов'язане з попереднім висловленням і спрямоване на уточнення або переосмислення почутого.",
    formation:"Може зберігати значну частину синтаксису попередньої репліки, додаючи wh-element, інтонацію або повтор. У розмовній мові prosody відіграє особливо важливу роль.",
    uses:[
      {title:"Перепитування",body:"Мовець просить уточнити конкретний компонент.",examples:[ex("Você falou com quem?","Ти говорив/говорила з ким?",{purpose:"production"})]},
      {title:"Здивування",body:"Повтор може сигналізувати, що інформація несподівана.",examples:[ex("Você comprou o quê?","Ти що купив/купила?",{purpose:"contrast"})]},
      {title:"Перевірка почутого",body:"Ехо може бути майже дослівним повтором із питальною інтонацією.",examples:[ex("Às oito?","О восьмій?",{purpose:"comprehension"})]}
    ],
    examples:[
      ex("Você falou com quem?","Ти говорив/говорила з ким?",{purpose:"production"}),
      ex("Você comprou o quê?","Ти що купив/купила?",{purpose:"production"}),
      ex("Às oito?","О восьмій?",{purpose:"comprehension"})
    ],
    mistakes:[
      mistake("вважати ехо-питання звичайним wh-питанням поза контекстом","враховувати попередню репліку","Його функція визначається реактивним контекстом.", "editorial","high"),
      mistake("ігнорувати інтонацію","аналізувати prosody разом із синтаксисом","Та сама послідовність може мати різну інтерпретацію.", "predicted-l1-transfer","high")
    ],
    ukrainian:"Українська має дуже близькі ехо-питання: «Ти говорив із ким?», «О восьмій?». Тому навчальна проблема полягає радше в розпізнаванні функції, ніж у самій конструкції.",
    regional:"Ехо-питання є в PT-BR і PT-PT. Розмовна інтонація та конкретні стратегії перепитування можуть відрізнятися.",
    sources:[{label:"Gramática do Português, Vol. III",url:G3},{label:"Camões — Referencial Camões PLE",url:CAMOES}]
  }),
  page({
    id:"alternative-questions", slug:"alternative-questions", category:"syntax",
    titleUk:"Альтернативні питання", titlePt:"Perguntas alternativas", titleEn:"Alternative questions",
    summary:"Питання, що пропонують дві або більше явно сформульованих альтернатив.",
    aliases:["альтернативні питання","alternative questions","perguntas alternativas"],
    related:["questions-yesno","wh-questions","coordinating","disjunction"],
    status:"review", origin:"handwritten", depth:"high", ukrainianContrast:"high",
    intro:"Альтернативне питання не просто запитує «так чи ні», а задає множину варіантів: «Você quer chá ou café?». Координатор ou формує альтернативу, але кількість і статус варіантів визначає контекст. Важливо відрізняти таке питання від звичайної диз'юнкції у розповідному реченні.",
    definition:"Альтернативне питання — питальна конструкція, яка пропонує адресатові вибір між двома або більше альтернативами.",
    formation:"Найтиповіша схема: X ou Y?; складніші варіанти можуть містити довші координовані фрази або речення. Prosody допомагає розмежувати альтернативи.",
    uses:[
      {title:"Вибір предмета",body:"Два NP можуть становити альтернативи.",examples:[ex("Quer chá ou café?","Ти хочеш чай чи каву?",{purpose:"production"})]},
      {title:"Вибір дії",body:"Альтернативою може бути ціла дієслівна група.",examples:[ex("Vamos de carro ou de comboio?","Їдемо машиною чи потягом?",{purpose:"production"})]},
      {title:"Кілька варіантів",body:"Можливі більше ніж дві альтернативи.",examples:[ex("Prefere manhã, tarde ou noite?","Ви віддаєте перевагу ранку, дню чи вечору?",{purpose:"comprehension"})]}
    ],
    examples:[
      ex("Você quer chá ou café?","Ти хочеш чай чи каву?",{purpose:"production"}),
      ex("Vamos hoje ou amanhã?","Їдемо сьогодні чи завтра?",{purpose:"production"}),
      ex("Prefere azul ou verde?","Ви віддаєте перевагу синьому чи зеленому?",{purpose:"production"})
    ],
    mistakes:[
      mistake("ототожнювати альтернативне питання з yes/no","перевіряти, чи відповідь вибирає альтернативу, а не підтверджує пропозицію","Це різні типи полярності.", "editorial","high"),
      mistake("ігнорувати роль prosody","перевіряти межі альтернатив","Інтонація може визначати, як слухач групує компоненти.", "predicted-l1-transfer","medium")
    ],
    ukrainian:"Українські альтернативні питання з «чи» мають майже ту саму структуру: «чай чи кава?». Основна різниця — португальський ou та специфіка інтонації.",
    regional:"ou є базовим для PT-BR і PT-PT. Варіації стосуються переважно просодії та розмовних стратегій.",
    sources:[{label:"Gramática do Português, Vol. III",url:G3},{label:"Camões — Referencial Camões PLE",url:CAMOES}]
  }),
  page({
    id:"negative-questions", slug:"negative-questions", category:"syntax",
    titleUk:"Негативні питання", titlePt:"Perguntas negativas", titleEn:"Negative questions",
    summary:"Як заперечення всередині питання змінює його семантику та прагматичне очікування.",
    aliases:["негативні питання","negative questions","perguntas negativas"],
    related:["questions-yesno","negation-nao","biased-polar-questions","question-tags"],
    status:"review", origin:"handwritten", depth:"high", ukrainianContrast:"high",
    intro:"Негативне питання містить заперечення, але його функція не зводиться до простого поєднання «не + питання». «Você não vem?» може бути нейтральним уточненням, виражати здивування або передбачати, що адресат мав би прийти. Інтерпретація визначається контекстом, інтонацією та попередніми очікуваннями.",
    definition:"Негативне питання — полярне або wh-питання, у якому предикат має негативну форму. Воно може бути нейтральним щодо очікуваної відповіді або мати pragmatically biased reading.",
    formation:"Заперечення зазвичай реалізується não перед дієслівною формою: Você não vem?; Não queres café? У складніших конструкціях позиція não визначається загальною синтаксичною структурою.",
    uses:[
      {title:"Нейтральне уточнення",body:"Питання перевіряє факт із негативною пропозицією.",examples:[ex("Você não trabalha hoje?","Ти сьогодні не працюєш?",{purpose:"production"})]},
      {title:"Здивування",body:"Негативна форма може сигналізувати невідповідність очікуванню.",examples:[ex("Você não vai?","Ти не йдеш?",{purpose:"contrast"})]},
      {title:"Очікування підтвердження",body:"Контекст може робити негативну відповідь очікуваною.",examples:[ex("Não tens tempo?","У тебе немає часу?",{purpose:"comprehension"})]}
    ],
    examples:[
      ex("Você não vem amanhã?","Ти завтра не прийдеш?",{purpose:"production"}),
      ex("Não queres café?","Ти не хочеш кави?",{purpose:"production"}),
      ex("Você não viu isso?","Ти цього не бачив/бачила?",{purpose:"comprehension"})
    ],
    mistakes:[
      mistake("вважати негативне питання семантично тотожним позитивному","аналізувати його полярність і прагматичний bias окремо","Негативна форма змінює очікування та інтерпретацію.", "editorial","high"),
      mistake("механічно відповідати українським «так/ні» без урахування proposition","формулювати відповідь щодо факту, який підтверджується або заперечується","Питання може створювати неоднозначність для коротких відповідей.", "predicted-l1-transfer","high")
    ],
    ukrainian:"Українська має аналогічні «Ти не прийдеш?» і «Хіба ти не прийдеш?». Спільною є прагматична неоднозначність. Особливо важливо тренувати відповіді sim/não не ізольовано, а разом із повною пропозицією.",
    regional:"Основна синтаксична модель спільна для PT-BR і PT-PT. Різниця частіше проявляється в інтонації, формах звертання та розмовних стратегіях.",
    sources:[{label:"Gramática do Português, Vol. III",url:G3},{label:"Camões — Referencial Camões PLE",url:CAMOES}]
  }),
  page({
    id:"exclamative-sentences", slug:"exclamative-sentences", category:"syntax",
    titleUk:"Окличні речення", titlePt:"Frases exclamativas", titleEn:"Exclamative sentences",
    summary:"Як граматичні та інтонаційні засоби виражають сильну оцінку, здивування або емоційну реакцію.",
    aliases:["окличні речення","exclamative sentences","frases exclamativas"],
    related:["exclamatives","exclamative-word-order","emphasis-focus","sentence-type-vs-speech-act"],
    status:"review", origin:"handwritten", depth:"high", ukrainianContrast:"high",
    intro:"Окличність не є просто знаком «!» на письмі. Вона пов'язана з конструкцією, інтонацією та прагматичною інтерпретацією. Португальська використовує que, como, tão, tanto та інші елементи в окличних моделях: Que dia lindo!; Como ele trabalha!; Está tão frio!",
    definition:"Окличне речення — висловлення, у якому граматична форма, інтонація або обидва засоби сигналізують сильну оцінку, інтенсивність, здивування чи іншу експресивну реакцію.",
    formation:"Типові моделі: Que + NP!, Como + oração!, tão/tanto + expressão, а також звичайні речення з окличною інтонацією. Синтаксис і pragmatics потрібно аналізувати разом.",
    uses:[
      {title:"Сильна оцінка",body:"Que + NP може підсилювати характеристику.",examples:[ex("Que dia lindo!","Який чудовий день!",{purpose:"production"})]},
      {title:"Експресивна інтенсивність",body:"tão/tanto подають високий ступінь ознаки або кількості.",examples:[ex("Está tão frio!","Як холодно!",{purpose:"production"})]},
      {title:"Здивування",body:"Оклична конструкція може реагувати на несподівану подію.",examples:[ex("Como ele cresceu!","Як він виріс!",{purpose:"contrast"})]}
    ],
    examples:[
      ex("Que surpresa!","Яка несподіванка!",{purpose:"production"}),
      ex("Que dia lindo!","Який чудовий день!",{purpose:"production"}),
      ex("Como ele trabalha!","Як він працює!",{purpose:"comprehension"}),
      ex("Está tão frio!","Як холодно!",{purpose:"production"})
    ],
    mistakes:[
      mistake("визначати окличність лише за знаком оклику","аналізувати конструкцію та інтонацію","Пунктуація лише графічно кодує частину інтерпретації.", "editorial","high"),
      mistake("перекладати que в кожній окличній конструкції як звичайне «що»","визначати його синтаксичну роль у конкретній exclamative construction","Que може бути частиною окличної моделі.", "predicted-l1-transfer","high")
    ],
    ukrainian:"Українські «Який чудовий день!», «Як він виріс!» мають дуже близьку функцію. Тому головна увага — на португальських конструкційних моделях que/como/tão/tanto.",
    regional:"Окличні конструкції є спільними для PT-BR і PT-PT. Різнитися можуть інтонація, частотність і розмовна експресивність.",
    sources:[{label:"Gramática do Português, Vol. III",url:G3},{label:"Camões — Referencial Camões PLE",url:CAMOES}]
  }),
  page({
    id:"vocative", slug:"vocative", category:"syntax",
    titleUk:"Кличний компонент", titlePt:"Vocativo", titleEn:"Vocative",
    summary:"Як звертатися до співрозмовника, не роблячи його граматичним підметом речення.",
    aliases:["кличний","vocative","vocativo","звертання"],
    related:["forms-of-address","politeness","imperative-affirmative","punctuation"],
    status:"review", origin:"handwritten", depth:"high", ukrainianContrast:"high",
    intro:"Vocativo називає або ідентифікує адресата мовлення: João, vem cá!; Senhora, pode entrar. Він не є граматичним subject речення і може бути вилучений без зміни пропозиційного змісту. У письмі його зазвичай відокремлюють комами, але позиція — на початку, у середині або в кінці — залежить від дискурсивної організації.",
    definition:"Vocativo — автономний звертальний компонент, за допомогою якого мовець адресує висловлення конкретній особі або групі.",
    formation:"Vocativo може бути власним ім'ям, титулом, формою спорідненості, професійним звертанням або іншою NP. Він може поєднуватися з imperativo, питаннями та розповідними реченнями.",
    uses:[
      {title:"Звернення перед наказом",body:"Ім'я або титул називає адресата перед директивою.",examples:[ex("Maria, fecha a porta.","Маріє, зачини двері.",{purpose:"production"})]},
      {title:"Звернення після висловлення",body:"Vocativo може стояти в кінці.",examples:[ex("Obrigado, João.","Дякую, Жуане.",{purpose:"production"})]},
      {title:"Ввічливість і дистанція",body:"Форма звертання впливає на соціальну інтерпретацію.",examples:[ex("Senhor Silva, pode entrar.","Пане Сілва, можете увійти.",{purpose:"contrast"})]}
    ],
    examples:[
      ex("João, vem cá!","Жуане, йди сюди!",{purpose:"production"}),
      ex("Maria, fecha a porta.","Маріє, зачини двері.",{purpose:"production"}),
      ex("Obrigado, João.","Дякую, Жуане.",{purpose:"production"}),
      ex("Senhor Silva, pode entrar.","Пане Сілва, можете увійти.",{purpose:"contrast"})
    ],
    mistakes:[
      mistake("аналізувати vocativo як підмет","перевіряти, чи він є адресатом, а не аргументом предиката","Vocativo не входить до пропозиційної аргументної структури.", "editorial","high"),
      mistake("не ставити коми навколо звертання","відокремлювати vocativo пунктуаційно","Кома допомагає відрізнити звертання від підмета або додатка.", "predicted-l1-transfer","high")
    ],
    ukrainian:"Українська має граматичний кличний відмінок, тоді як португальська не має окремої відмінкової форми vocativo. Адресат виражається звичайною формою NP: João, Maria, Senhor Silva.",
    regional:"Vocativos є в усіх різновидах португальської. Соціальні форми звертання, зокрема senhor/senhora та регіональні розмовні форми, мають різну частотність.",
    sources:[{label:"Gramática do Português, Vol. III",url:G3},{label:"Camões — Referencial Camões PLE",url:CAMOES}]
  })
];
