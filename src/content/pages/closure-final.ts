import { ex, mistake, page } from "../helpers";
import type { GrammarPage } from "../types";

const G3="https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const CAMOES="https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[]=[
page({
 id:"direct-indirect-speech",slug:"direct-indirect-speech",category:"syntax",
 titleUk:"Пряма й непряма мова",titlePt:"Discurso direto e indireto",titleEn:"Direct and indirect speech",
 summary:"Як передавати чужі слова дослівно або перебудовувати їх у складі власного речення.",
 aliases:["пряма мова","непряма мова","direct speech","indirect speech","discurso direto","discurso indireto"],
 related:["reported-speech","complement-clauses","sequence-of-tenses","pronouns-overview","punctuation-system"],
 status:"review",origin:"handwritten",depth:"high",ukrainianContrast:"high",
 intro:"Пряма й непряма мова передають зміст висловлення, але організовують його по-різному. У прямій мові репліка подається як окремий цитований вислів із власною дейксисною та часовою перспективою: Ele disse: «Vou amanhã». У непрямій мові зміст інтегрується в синтаксис головного речення: Ele disse que ia no dia seguinte. Саме тому при переході між форматами можуть змінюватися займенники, часові форми, просторово-часові прислівники та пунктуація.",
 definition:"Пряма мова відтворює висловлення як самостійну цитовану репліку; непряма мова передає його зміст через підрядну або іншу інтегровану конструкцію, зазвичай із дієсловом повідомлення.",
 formation:"Пряма мова часто оформлюється двокрапкою, лапками або тире залежно від редакційної традиції. Непряма мова використовує дієслово повідомлення/думки та сполучник que або іншу відповідну підрядну конструкцію. При перетворенні потрібно перебудувати не лише пунктуацію, а й perspective: eu/tu, aqui/lá, hoje/no dia seguinte та часові відношення.",
 uses:[
  {title:"Дослівне цитування",body:"Пряма мова зберігає формулювання мовця, коли саме слова мають значення.",examples:[ex("Ela disse: «Vou amanhã».","Вона сказала: «Я поїду завтра».",{purpose:"production"})]},
  {title:"Інтеграція повідомлення",body:"Непряма мова вбудовує зміст у речення оповідача.",examples:[ex("Ela disse que ia no dia seguinte.","Вона сказала, що поїде наступного дня.",{purpose:"production"})]},
  {title:"Зміна дейксису",body:"Слова, прив'язані до моменту й місця мовця, можуть змінюватися.",examples:[ex("Ele disse: «Estou aqui hoje».","Він сказав: «Я сьогодні тут».",{purpose:"contrast"}),ex("Ele disse que estava ali naquele dia.","Він сказав, що того дня був там.",{purpose:"contrast"})]}
 ],
 examples:[
  ex("O professor disse: «A prova começa amanhã».","Викладач сказав: «Іспит починається завтра».",{purpose:"production"}),
  ex("O professor disse que a prova começava no dia seguinte.","Викладач сказав, що іспит починається наступного дня.",{purpose:"production"}),
  ex("A Ana perguntou: «Vens comigo?»","Ана запитала: «Ти йдеш зі мною?».",{purpose:"comprehension"}),
  ex("A Ana perguntou se eu ia com ela.","Ана запитала, чи я йду з нею.",{purpose:"production"})
 ],
 mistakes:[
  mistake("міняти лише лапки й залишати всі дейктичні елементи без перевірки","перевіряти особу, час, місце й часові прислівники","Непряма мова змінює перспективу висловлення.", "predicted-l1-transfer","high"),
  mistake("вважати, що після disse завжди потрібен que","розрізняти твердження, питання, накази та інші типи передаваного висловлення","Тип підрядної конструкції залежить від мовленнєвого акту.", "editorial","high"),
  mistake("механічно застосовувати єдину таблицю backshift до всіх контекстів","аналізувати часові відношення щодо моменту мовлення та моменту повідомлення","Португальська не зводиться до механічного правила «час назад».", "predicted-l1-transfer","high")
 ],
 ukrainian:"Українська також розрізняє пряму й непряму мову та має близькі засоби передачі дейксису. Водночас український студент часто переносить схему узгодження часів з інших мов; у португальській треба враховувати реальний часовий зв'язок і перспективу мовця.",
 comparisonUk:"Українське «Він сказав: “Я прийду завтра”» переходить у португальське Ele disse: «Vou amanhã», а при непрямій передачі треба перебудувати особу й дейктичні елементи відповідно до перспективи: Ele disse que viria no dia seguinte.",
 regional:"Базовий контраст прямої/непрямої мови спільний для PT-BR і PT-PT. Відмінності можуть стосуватися пунктуаційних редакційних норм, способів оформлення діалогу та розмовних стратегій.",
 brPt:"У PT-BR у непрямій мові поширені конструкції з disse que, perguntou se та відповідними формами минулого/умовного; конкретний вибір часу залежить від часової перспективи, а не від механічного backshift.",
 sources:[{label:"Gramática do Português, Vol. III",url:G3},{label:"Camões — Referencial Camões PLE",url:CAMOES}]
}),
page({
 id:"punctuation-system",slug:"punctuation-system",category:"spelling",
 titleUk:"Система пунктуації",titlePt:"Sistema de pontuação",titleEn:"Punctuation system",
 summary:"Як пунктуація структурує португальський письмовий текст і взаємодіє із синтаксисом та інтонацією.",
 aliases:["пунктуація","punctuation","pontuação","система пунктуації"],
 related:["commas","semicolon","colon","quotation-marks","direct-indirect-speech","sentence-type-vs-punctuation"],
 status:"review",origin:"handwritten",depth:"high",ukrainianContrast:"high",
 intro:"Пунктуація португальської не є просто набором графічних знаків, які механічно відповідають паузам. Кома, крапка з комою, двокрапка, тире, дужки, лапки, знак питання й знак оклику допомагають кодувати синтаксичну структуру, межі висловлень, цитування та інформаційну організацію. Для українськомовного студента особливо важливо не переносити правила коми слово в слово: частина рішень визначається структурою португальського речення.",
 definition:"Пунктуаційна система — сукупність графічних знаків і конвенцій, які організовують письмове висловлення та сигналізують структурні, семантичні й прагматичні відношення.",
 formation:"Основні знаки включають ponto final, vírgula, ponto e vírgula, dois-pontos, travessão, parênteses, aspas, ponto de interrogação, ponto de exclamação та reticências. Вибір знака залежить від меж речення, координації/підрядності, цитування та редакційного стилю.",
 uses:[
  {title:"Розмежування висловлень",body:"Крапка завершує самостійне речення, а крапка з комою може пов'язувати складніші близькі частини.",examples:[ex("Cheguei cedo. A reunião começou às nove.","Я прийшов/прийшла рано. Зустріч почалася о дев'ятій.",{purpose:"production"})]},
  {title:"Структурна кома",body:"Кома може відокремлювати вставні, звертальні, деякі підрядні та інші компоненти відповідно до синтаксису.",examples:[ex("Maria, fecha a porta.","Маріє, зачини двері.",{purpose:"production"})]},
  {title:"Введення пояснення або цитати",body:"Двокрапка часто вводить пояснення, перелік або пряму мову.",examples:[ex("Ele disse: «Volto amanhã».","Він сказав: «Я повернуся завтра».",{purpose:"production"})]},
  {title:"Графічне оформлення цитати",body:"Лапки та тире використовуються в різних редакційних системах для цитат і діалогів.",examples:[ex("«Não sei», respondeu ela.","«Не знаю», — відповіла вона.",{purpose:"comprehension"})]}
 ],
 examples:[
  ex("Se chover, ficamos em casa.","Якщо буде дощ, ми залишимося вдома.",{purpose:"production"}),
  ex("João, vem cá.","Жуане, йди сюди.",{purpose:"production"}),
  ex("Tenho três opções: ficar, sair ou esperar.","У мене є три варіанти: залишитися, піти або почекати.",{purpose:"production"}),
  ex("Ele perguntou: «Quando começa?»","Він запитав: «Коли починається?».",{purpose:"production"})
 ],
 mistakes:[
  mistake("ставити кому між підметом і присудком лише через інтонаційну паузу","спочатку визначати синтаксичну структуру","Пауза сама по собі не створює нормативної коми.", "predicted-l1-transfer","high"),
  mistake("переносити українські правила коми без структурного аналізу","перевіряти тип підрядності, відокремлення та координації в португальській","Пунктуаційні системи не ізоморфні.", "predicted-l1-transfer","high"),
  mistake("вважати ! або ? повним описом типу речення","розрізняти синтаксичний тип, інтонацію та пунктуаційне оформлення","Один знак не визначає всієї граматичної структури.", "editorial","high")
 ],
 ukrainian:"Українська та португальська мають багато спільних знаків і подібних функцій, але правила їхнього розподілу не тотожні. Українськомовному студентові особливо корисно окремо опрацьовувати кому, двокрапку, тире й пунктуацію прямої мови.",
 comparisonUk:"Українське й португальське оформлення звертання подібне: Maria, vem cá. Але конкретні правила відокремлення підрядних, вставних і координованих компонентів потрібно вивчати в португальській системі.",
 regional:"Базова пунктуація спільна для PT-BR і PT-PT, хоча редакційні традиції можуть відрізнятися, зокрема в оформленні діалогів, лапок і тире.",
 sources:[{label:"Gramática do Português, Vol. III",url:G3},{label:"Camões — Referencial Camões PLE",url:CAMOES}]
})
];