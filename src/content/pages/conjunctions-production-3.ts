import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const sources = [
  { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: "https://gulbenkian.pt/publications/gramatica-do-portugues/" },
  { label: "Ciberdúvidas da Língua Portuguesa", url: "https://ciberduvidas.iscte-iul.pt/" }
];

export const pages: GrammarPage[] = [
page({
 id:"coordinating-conjunctions",slug:"coordinating-conjunctions",category:"conjunctions",
 titleUk:"Сурядні сполучники",titlePt:"Conjunções coordenativas",titleEn:"Coordinating conjunctions",
 summary:"Система сурядних сполучників португальської та відношення між рівноправними компонентами.",
 aliases:["сурядні сполучники","coordinating conjunctions","conjunções coordenativas"],
 related:["conjunction-system","additive-conjunctions","alternative-conjunctions","adversative-conjunctions","conclusive-conjunctions"],
 status:"review",origin:"handwritten",depth:"high",ukrainianContrast:"high",
 intro:"Сурядні сполучники поєднують синтаксично рівноправні компоненти: слова, словосполучення або клаузи. У португальській основні семантичні типи включають додавання, протиставлення, альтернативу, пояснення та висновок. Межа між формальною координацією і ширшими дискурсивними зв'язками важлива: не кожен засіб, який зв'язує два висловлення, є сполучником.",
 definition:"Сурядний сполучник — незмінний службовий засіб, який встановлює координаційний зв'язок між рівноправними синтаксичними одиницями.",
 formulas:[
  {label:"Додавання",pattern:"X e Y",note:"e поєднує координовані компоненти."},
  {label:"Протиставлення",pattern:"X mas Y",note:"mas встановлює adversative relation."},
  {label:"Альтернатива",pattern:"X ou Y",note:"ou подає альтернативні компоненти."},
  {label:"Пояснення",pattern:"X, pois Y",note:"pois може вводити пояснювальний компонент у відповідному контексті."}
 ],
 formation:"Сполучники не відмінюються і не узгоджуються з компонентами. Семантичний тип зв'язку визначається конкретною формою, позицією та контекстом. Деякі сполучникові засоби мають багатофункціональність, тому класифікація за одним перекладом є ненадійною.",
 uses:[
  {title:"Координація іменників",body:"e та ou можуть поєднувати номінальні компоненти.",examples:[ex("Comprei pão e queijo.","Я купив хліб і сир.",{purpose:"production"})]},
  {title:"Координація клауз",body:"Сполучник може з'єднувати дві предикативні частини.",examples:[ex("Queria sair, mas estava cansado.","Я хотів вийти, але був втомлений.",{purpose:"contrast"})]},
  {title:"Семантичне розмежування",body:"Вибір сполучника змінює тип логічного зв'язку.",examples:[ex("Podemos ir ou ficar.","Можемо піти або залишитися.",{purpose:"contrast"})]}
 ],
 examples:[ex("Comprei pão e queijo.","Я купив хліб і сир.",{purpose:"production"}),ex("Queria sair, mas estava cansado.","Я хотів вийти, але був втомлений.",{purpose:"contrast"}),ex("Podemos ir ou ficar.","Можемо піти або залишитися.",{purpose:"contrast"})],
 nonUses:["Не називайте всі дискурсивні зв'язки сурядністю.","Не переносіть український переклад механічно на всі португальські сполучники.","Не вважайте кому частиною самого сполучника."],
 markers:["e","nem","ou","mas","porém","contudo","pois","portanto"],
 mistakes:[
  mistake("e завжди просто означає «і»","аналізувати функцію координації в контексті","e може брати участь у складнішій організації висловлення."),
  mistake("mas і porém повністю взаємозамінні в будь-якій позиції","враховувати синтаксичну та дискурсивну поведінку","Функціональна близькість не означає тотожності."),
  mistake("кожен connective є conjunction","розрізняти сполучник і discourse connective","Їхня синтаксична інтеграція може бути різною.")
 ],
 ukrainian:"Українські «і/й», «або», «але», «проте», «тому/отже» дають корисні паралелі, але португальські форми не завжди мають один український відповідник.",
 comparisonUk:"e ≈ «і/й», ou ≈ «або», mas ≈ «але», проте конкретний переклад залежить від відношення між компонентами.",
 regional:"Базовий набір сурядних сполучників спільний для PT-BR і PT-PT. Частотність, позиційні переваги та стилістичні відтінки окремих форм можуть залежати від різновиду, жанру та каналу.",
 sources
}),
page({
 id:"additive-conjunctions",slug:"additive-conjunctions",category:"conjunctions",
 titleUk:"Додаткові сполучники та адитивна координація",titlePt:"Conjunções aditivas",titleEn:"Additive conjunctions",
 summary:"Як португальська поєднує компоненти зі значенням додавання, включення та накопичення.",
 aliases:["додаткові сполучники","additive conjunctions","conjunções aditivas"],
 related:["coordinating-conjunctions","negative-coordination-nem-nem","additive-correlative-patterns","conjunctions-and-punctuation"],
 status:"review",origin:"handwritten",depth:"high",ukrainianContrast:"high",
 intro:"Адитивна координація додає один компонент до іншого, не встановлюючи між ними протиставлення чи альтернативи. Центральним португальським сполучником є e, а негативна кореляція реалізується, зокрема, через nem... nem. Адитивність може бути простою логічною координацією або мати накопичувальний, підсилювальний чи дискурсивний ефект.",
 definition:"Адитивний сполучник встановлює координаційний зв'язок, у якому другий компонент додається до першого.",
 formulas:[
  {label:"Базова модель",pattern:"X e Y",note:"Проста адитивна координація."},
  {label:"Негативна кореляція",pattern:"nem X nem Y",note:"Заперечення двох координованих компонентів."},
  {label:"Кілька компонентів",pattern:"X, Y e Z",note:"e може закривати ряд координації."}
 ],
 formation:"e є незмінним сполучником. Адитивний ряд може містити два або більше компонентів; пунктуація в довших рядах взаємодіє з синтаксичною структурою, а не просто з кількістю елементів.",
 uses:[
  {title:"Додавання об'єктів",body:"e поєднує однорідні номінальні компоненти.",examples:[ex("Leio livros e revistas.","Я читаю книжки й журнали.",{purpose:"production"})]},
  {title:"Додавання предикативних частин",body:"Координуються дві клаузи.",examples:[ex("Ele chegou e começou a trabalhar.","Він прийшов і почав працювати.",{purpose:"production"})]},
  {title:"Негативне додавання",body:"nem... nem поширює заперечення на обидва компоненти.",examples:[ex("Não quero café nem chá.","Я не хочу ні кави, ні чаю.",{purpose:"contrast"})]}
 ],
 examples:[ex("Leio livros e revistas.","Я читаю книжки й журнали.",{purpose:"production"}),ex("Ele chegou e começou a trabalhar.","Він прийшов і почав працювати.",{purpose:"production"}),ex("Não quero café nem chá.","Я не хочу ні кави, ні чаю.",{purpose:"contrast"})],
 nonUses:["Не додавайте другий nem механічно, якщо структура не є негативною координацією.","Не трактуйте e як знак часової послідовності в кожному реченні.","Не ототожнюйте адитивність із дискурсивним маркером «до того ж»."],
 markers:["e","nem","e também","nem... nem"],
 mistakes:[
  mistake("e завжди означає одночасність","розглядати семантичний зв'язок у контексті","Координація може мати послідовний або інший додатковий ефект."),
  mistake("Não quero café e chá = Não quero café nem chá","розрізняти стверджувальну і негативну координацію","nem є спеціалізованим негативним засобом."),
  mistake("nem завжди потребує не перед усім реченням","аналізувати область заперечення","Конструкція може мати різну синтаксичну організацію.")
 ],
 ukrainian:"Українські «і/й», «та», «ні... ні» створюють близькі моделі. Португальське nem часто відповідає українському «ні», але структура заперечення залежить від речення.",
 comparisonUk:"e ≈ «і/й», nem... nem ≈ «ні... ні»; однак португальська та українська по-різному розподіляють заперечення між предикатом і координованими компонентами.",
 regional:"e є базовим спільним засобом у PT-BR і PT-PT. Відмінності частіше стосуються просодії, повтору сполучника та дискурсивного оформлення, ніж самої базової граматичної функції.",
 sources
}),
page({
 id:"alternative-conjunctions",slug:"alternative-conjunctions",category:"conjunctions",
 titleUk:"Альтернативні сполучники",titlePt:"Conjunções alternativas",titleEn:"Alternative conjunctions",
 summary:"ou та корелятивні моделі для вибору між альтернативами.",
 aliases:["альтернативні сполучники","alternative conjunctions","conjunções alternativas"],
 related:["coordinating-conjunctions","correlative-conjunctions","additive-conjunctions","conjunction-selection-and-meaning"],
 status:"review",origin:"handwritten",depth:"high",ukrainianContrast:"high",
 intro:"Альтернативна координація подає два або більше варіантів. Найважливішим засобом є ou. У простих реченнях воно може з'єднувати іменники, інфінітиви або клаузи; у корелятивних моделях повтор ou посилює альтернативну структуру. Інтерпретація може бути інклюзивною, ексклюзивною або контекстно невизначеною.",
 definition:"Альтернативний сполучник встановлює координаційний зв'язок, за якого співрозмовникові подано взаємопов'язані варіанти.",
 formulas:[
  {label:"Проста альтернатива",pattern:"X ou Y",note:"Два альтернативні компоненти."},
  {label:"Корелятивна модель",pattern:"ou X ou Y",note:"Повторення ou підкреслює альтернативність."},
  {label:"Клаузальна альтернатива",pattern:"X ou Y",note:"Одна з двох предикативних ситуацій."}
 ],
 formation:"ou не змінюється. Його повторення не є обов'язковим у кожній альтернативі. Значення «або» може бути логічно інклюзивним або практично ексклюзивним залежно від знань про ситуацію.",
 uses:[
  {title:"Вибір предмета",body:"ou поєднує номінальні альтернативи.",examples:[ex("Café ou chá?","Кава чи чай?",{purpose:"production"})]},
  {title:"Альтернативні дії",body:"Дві дії подаються як варіанти.",examples:[ex("Podemos sair ou ficar.","Можемо вийти або залишитися.",{purpose:"contrast"})]},
  {title:"Підсилена альтернатива",body:"ou... ou може формувати чітку корелятивну конструкцію.",examples:[ex("Ou estudas ou trabalhas.","Або ти навчаєшся, або працюєш.",{purpose:"contrast"})]}
 ],
 examples:[ex("Café ou chá?","Кава чи чай?",{purpose:"production"}),ex("Podemos sair ou ficar.","Можемо вийти або залишитися.",{purpose:"contrast"}),ex("Ou estudas ou trabalhas.","Або ти навчаєшся, або працюєш.",{purpose:"contrast"})],
 nonUses:["Не припускайте автоматично взаємовиключність двох альтернатив.","Не вважайте повтор ou обов'язковим у простій координації.","Не перекладайте кожне ou однаково, якщо український контекст вимагає іншої конструкції."],
 markers:["ou","ou... ou","quer... quer"],
 mistakes:[
  mistake("ou завжди означає «або, але не обидва»","визначати інтерпретацію з контексту","Логічна ексклюзивність не є автоматичною властивістю форми."),
  mistake("ou... ou і одиничне ou абсолютно тотожні","враховувати корелятивність і прагматичне підсилення","Повтор може структурувати вибір сильніше."),
  mistake("quer... quer завжди є звичайним ou","аналізувати окрему корелятивну модель","Корелятивна конструкція має власну організацію.")
 ],
 ukrainian:"Українське «або» є близьким до ou, а «або... або» — до ou... ou. Інтерпретація взаємовиключності також залежить від контексту.",
 comparisonUk:"ou ≈ «або», ou... ou ≈ «або... або». В українській питання «чи» може бути природнішим у деяких питальних конструкціях.",
 regional:"ou є спільним базовим сполучником PT-BR і PT-PT. Розмовна просодія може додатково підкреслювати одну з альтернатив.",
 sources
}),
page({
 id:"adversative-conjunctions",slug:"adversative-conjunctions",category:"conjunctions",
 titleUk:"Протиставні сполучники",titlePt:"Conjunções adversativas",titleEn:"Adversative conjunctions",
 summary:"mas, porém, contudo, todavia та інші засоби протиставної координації.",
 aliases:["протиставні сполучники","adversative conjunctions","conjunções adversativas"],
 related:["coordinating-conjunctions","conjunction-selection-and-meaning","conjunctions-and-punctuation","conjunction-vs-discourse-connective"],
 status:"review",origin:"handwritten",depth:"high",ukrainianContrast:"high",
 intro:"Протиставна координація зіставляє два компоненти, між якими існує контраст, обмеження очікування або корекція. mas є центральним сполучником, тоді як porém, contudo і todavia мають ширшу позиційну та дискурсивну поведінку. Для граматичного аналізу важливо не зводити їх усіх до механічного перекладу «але».",
 definition:"Протиставний сполучник встановлює координаційний зв'язок, у якому другий компонент контрастує з першим або обмежує його очікуваний висновок.",
 formulas:[
  {label:"Базова модель",pattern:"X, mas Y",note:"Центральна adversative coordination."},
  {label:"Інші засоби",pattern:"X; porém, Y",note:"Деякі adversative units мають більш автономну позицію."}
 ],
 formation:"mas є незмінним координаційним сполучником. Porém, contudo, todavia та entretanto можуть мати дискурсивні й прислівникові характеристики залежно від аналізу та позиції. Саме тому їх не слід автоматично класифікувати як повні синоніми mas.",
 uses:[
  {title:"Пряме протиставлення",body:"mas поєднує два контрастні твердження.",examples:[ex("É pequeno, mas é confortável.","Він маленький, але зручний.",{purpose:"contrast"})]},
  {title:"Обмеження очікування",body:"Другий компонент скасовує очікуваний висновок, але не обов'язково заперечує перший.",examples:[ex("Estudou muito, mas não passou.","Він багато вчився, але не склав.",{purpose:"contrast"})]},
  {title:"Більш автономний connective",body:"porém може оформлювати контраст окремішньо від координаційної позиції.",examples:[ex("O problema é simples; porém, a solução é difícil.","Проблема проста; проте розв'язання складне.",{purpose:"contrast"})]}
 ],
 examples:[ex("É pequeno, mas é confortável.","Він маленький, але зручний.",{purpose:"contrast"}),ex("Estudou muito, mas não passou.","Він багато вчився, але не склав.",{purpose:"contrast"}),ex("O problema é simples; porém, a solução é difícil.","Проблема проста; проте розв'язання складне.",{purpose:"contrast"})],
 nonUses:["Не вважайте mas звичайним синонімом українського «але» в кожному дискурсивному контексті.","Не застосовуйте пунктуацію porém за аналогією з mas без аналізу його позиції.","Не називайте будь-який контраст між реченнями координацією."],
 markers:["mas","porém","contudo","todavia","entretanto"],
 mistakes:[
  mistake("mas, porém, contudo і todavia завжди взаємозамінні","аналізувати синтаксичну позицію та регістр","Їхні функції близькі, але граматична поведінка не тотожна."),
  mistake("mas = повне заперечення першої частини","бачити relation як contrast","Протиставлення може зберігати істинність обох частин."),
  mistake("кома перед mas — просто стилістичний вибір","розглядати її в межах координації","Пунктуація взаємодіє зі структурою координованих клауз.")
 ],
 ukrainian:"Українські «але», «проте», «однак», «зате» дають близькі контрасти, але мають власну позиційну й стилістичну поведінку.",
 comparisonUk:"mas ≈ «але», porém/contudo/todavia часто відповідають «проте/однак», але відповідність залежить від синтаксичної позиції та регістру.",
 regional:"mas є базовим спільним засобом PT-BR і PT-PT. Розподіл porém, contudo, todavia та entretanto може залежати від жанру, стилю й різновиду; такі відмінності не слід зводити до простої географічної дихотомії.",
 sources
})
];
