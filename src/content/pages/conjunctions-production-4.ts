import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const sources = [
  { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: "https://gulbenkian.pt/publications/gramatica-do-portugues/" },
  { label: "Ciberdúvidas da Língua Portuguesa", url: "https://ciberduvidas.iscte-iul.pt/" }
];

export const pages: GrammarPage[] = [
page({
 id:"explanatory-conjunctions",slug:"explanatory-conjunctions",category:"conjunctions",
 titleUk:"Пояснювальні сполучники",titlePt:"Conjunções explicativas",titleEn:"Explanatory conjunctions",
 summary:"Засоби координації, за допомогою яких друга частина пояснює, обґрунтовує або уточнює першу.",
 aliases:["пояснювальні сполучники","explanatory conjunctions","conjunções explicativas"],
 related:["coordinating-conjunctions","conjunction-selection-and-meaning","conjunctions-and-clause-mood","conjunctions-and-punctuation"],
 status:"review",origin:"handwritten",depth:"high",ukrainianContrast:"high",
 intro:"Пояснювальна координація пов'язує висловлення так, що друга частина подає пояснення, обґрунтування або підставу для першої. У португальській до цього класу традиційно відносять pois у певних позиціях, а також porque та que в конструкціях, де вони виконують пояснювальну, а не звичайну підрядну функцію. Тому назву класу не можна ототожнювати з одним словом.",
 definition:"Пояснювальний сполучниковий засіб встановлює зв'язок, за якого друга частина допомагає пояснити або мотивувати першу.",
 formulas:[
  {label:"Пояснення після твердження",pattern:"X, pois Y",note:"pois у відповідному координаційному вживанні вводить пояснення."},
  {label:"Пояснення через porque",pattern:"X, porque Y",note:"Значення визначається структурою та контекстом; porque може бути підрядним причинним засобом."},
  {label:"Розмовне пояснення",pattern:"X, que Y",note:"que може вводити пояснювальний компонент у певних конструкціях."}
 ],
 formation:"Пояснювальність є функціональною властивістю зв'язку, а не просто списком лексем. pois, porque та que мають інші граматичні функції в інших контекстах. Для класифікації треба перевіряти синтаксичну інтеграцію, позицію та семантичне відношення.",
 uses:[
  {title:"Обґрунтування попереднього висловлення",body:"Друга частина пояснює, чому попередня репліка або твердження є доречним.",examples:[ex("Fecha a janela, pois está frio.","Зачини вікно, бо холодно.",{purpose:"explanation"})]},
  {title:"Відмежування від причинової підрядності",body:"Формальне porque не гарантує одного синтаксичного типу. Потрібно відрізняти координаційне пояснення від підрядної причини.",examples:[ex("Não saias, porque está a chover.","Не виходь, бо йде дощ.",{purpose:"explanation"})]},
  {title:"Пояснення в розмовному мовленні",body:"У неформальній комунікації коротка друга частина може подавати очевидне обґрунтування першої.",examples:[ex("Vamos embora, que já é tarde.","Ходімо, бо вже пізно.",{purpose:"explanation"})]}
 ],
 examples:[ex("Fecha a janela, pois está frio.","Зачини вікно, бо холодно.",{purpose:"explanation"}),ex("Não saias, porque está a chover.","Не виходь, бо йде дощ.",{purpose:"explanation"}),ex("Vamos embora, que já é tarde.","Ходімо, бо вже пізно.",{purpose:"explanation"})],
 nonUses:["Не вважайте pois завжди пояснювальним: його функція залежить від позиції та конструкції.","Не прирівнюйте пояснювальне porque до всіх уживань porque.","Не робіть висновок про синтаксичний статус лише за українським перекладом «бо»."],
 markers:["pois","porque","que"],
 mistakes:[
  mistake("pois завжди означає «тому що»","аналізувати позицію та відношення між частинами","pois має кілька граматичних і дискурсивних функцій."),
  mistake("porque автоматично робить конструкцію підрядною причиною","перевіряти синтаксичну структуру","Причинове значення і пояснювальна функція можуть перетинатися, але не є тотожними."),
  mistake("que в такій конструкції є звичайним відносним займенником","дивитися на його зв'язувальну функцію","Пояснювальне que має інший синтаксичний статус.")
 ],
 ukrainian:"Українські «бо», «адже», «оскільки» перекривають кілька португальських конструкцій. Особливо важливо не переносити українське членування складного речення механічно.",
 comparisonUk:"pois, porque та que в пояснювальних конструкціях можуть перекладатися як «бо», але український переклад не визначає португальського синтаксичного класу.",
 regional:"Базові пояснювальні відношення є спільними для PT-BR і PT-PT. Конкретні позиційні та стилістичні переваги окремих засобів можуть змінюватися залежно від різновиду, жанру й усного/писемного каналу.",
 sources
}),
page({
 id:"conclusive-conjunctions",slug:"conclusive-conjunctions",category:"conjunctions",
 titleUk:"Висновкові сполучникові засоби",titlePt:"Conjunções conclusivas",titleEn:"Conclusive conjunctions",
 summary:"Засоби оформлення висновку або наслідкового висновку з попереднього компонента.",
 aliases:["висновкові сполучники","conclusive conjunctions","conjunções conclusivas"],
 related:["coordinating-conjunctions","conjunction-selection-and-meaning","conjunction-vs-discourse-connective","conjunctions-and-punctuation"],
 status:"review",origin:"handwritten",depth:"high",ukrainianContrast:"high",
 intro:"Висновкові зв'язки показують, що друга частина подає висновок, підсумок або результат міркування, який випливає з першої. У традиційній граматиці до висновкових засобів відносять portanto, logo, por conseguinte та деякі інші одиниці. Їхній синтаксичний статус може відрізнятися, тому висновкове значення не слід автоматично ототожнювати з сурядним сполучником.",
 definition:"Висновковий засіб сигналізує інтерпретацію другого компонента як висновку або підсумку з першого.",
 formulas:[
  {label:"Логічний висновок",pattern:"X; portanto, Y",note:"portanto часто має автономнішу дискурсивну позицію."},
  {label:"Короткий висновок",pattern:"X, logo Y",note:"logo може оформлювати висновковий зв'язок."}
 ],
 formation:"portanto, logo та por conseguinte є незмінними одиницями. У сучасному описі частину таких засобів аналізують як сполучники, частину — як прислівникові або дискурсивні конектори. Для навчального аналізу корисно розділяти значення зв'язку та його синтаксичний статус.",
 uses:[
  {title:"Висновок із попередньої інформації",body:"Другий компонент подає результат міркування.",examples:[ex("Estava cansado; portanto, fui para casa.","Я був втомлений; отже, пішов додому.",{purpose:"conclusion"})]},
  {title:"Наслідок як висновок",body:"Зв'язок може бути одночасно логічним наслідком і дискурсивним висновком.",examples:[ex("Não havia bilhetes, logo voltámos.","Квитків не було, отже, ми повернулися.",{purpose:"conclusion"})]},
  {title:"Дискурсивна автономність",body:"portanto часто може стояти в позиції, характерній для окремого конектора.",examples:[ex("A questão é complexa. Portanto, precisamos de tempo.","Питання складне. Отже, нам потрібен час.",{purpose:"conclusion"})]}
 ],
 examples:[ex("Estava cansado; portanto, fui para casa.","Я був втомлений; отже, пішов додому.",{purpose:"conclusion"}),ex("Não havia bilhetes, logo voltámos.","Квитків не було, отже, ми повернулися.",{purpose:"conclusion"}),ex("A questão é complexa. Portanto, precisamos de tempo.","Питання складне. Отже, нам потрібен час.",{purpose:"conclusion"})],
 nonUses:["Не називайте portanto звичайним синонімом e або mas.","Не припускайте, що кожен висновковий конектор є формальним сурядним сполучником.","Не змішуйте висновковий зв'язок із чисто часовим наслідком."],
 markers:["portanto","logo","por conseguinte","assim"],
 mistakes:[
  mistake("portanto завжди є сполучником у вузькому сенсі","розрізняти семантичну функцію і синтаксичний статус","У різних позиціях одиниця може поводитися як дискурсивний конектор."),
  mistake("portanto = українське «тому» в усіх випадках","аналізувати логічне відношення","«Тому» в українській також має причинно-наслідкові та інші функції."),
  mistake("будь-який результат є висновком","розрізняти event consequence і discourse conclusion","Причиново-наслідковий зв'язок і аргументативний висновок не тотожні.")
 ],
 ukrainian:"Українські «отже», «тому», «таким чином», «відтак» дають близькі відповідники. Водночас українське «тому» може виражати причинний результат, тоді як portanto часто має виразно висновкову функцію.",
 comparisonUk:"portanto ≈ «отже», logo ≈ «отже/тому», por conseguinte ≈ «відтак/отже» залежно від контексту.",
 regional:"Висновкові засоби є спільною частиною португаломовної системи, але їхня частотність і стилістичне маркування можуть залежати від жанру та різновиду. Не слід зводити variation лише до PT-BR проти PT-PT.",
 sources
}),
page({
 id:"causal-conjunctions",slug:"causal-conjunctions",category:"conjunctions",
 titleUk:"Причинові сполучники",titlePt:"Conjunções causais",titleEn:"Causal conjunctions",
 summary:"Засоби введення підстави або причини, зокрема porque, como, visto que та locuções causais.",
 aliases:["причинові сполучники","causal conjunctions","conjunções causais"],
 related:["subordinating-conjunctions","conjunctive-locutions","conjunction-selection-and-meaning","conjunctions-and-clause-mood"],
 status:"review",origin:"handwritten",depth:"high",ukrainianContrast:"high",
 intro:"Причинові сполучники вводять частину, яка пояснює підставу, причину або мотивацію ситуації. Найтиповішим засобом є porque; як, visto que, já que, uma vez que та інші конструкції мають власні синтаксичні й стилістичні властивості. Особливо важливо відрізняти причинну підрядність від пояснювальної координації.",
 definition:"Причиновий сполучниковий засіб встановлює залежний зв'язок, у якому підрядна частина подає причину або підставу ситуації головної частини.",
 formulas:[
  {label:"Базова причина",pattern:"X porque Y",note:"Y подає причину X."},
  {label:"Причина перед головною частиною",pattern:"Como Y, X",note:"como у такому вживанні зазвичай вводить причинову підрядну частину."},
  {label:"Складена локція",pattern:"X, visto que Y",note:"visto que вводить обґрунтування/причину."}
 ],
 formation:"Причинові зв'язки реалізуються одиничними сполучниками та сполучниковими локціями. Позиція може впливати на природність або інтерпретацію: como у причинному значенні типово з'являється перед головною частиною, тоді як porque має ширшу позиційну поведінку.",
 uses:[
  {title:"Пряма причина",body:"porque вводить причину факту або події.",examples:[ex("Fiquei em casa porque estava doente.","Я залишився вдома, бо був хворий.",{purpose:"cause"})]},
  {title:"Причина перед наслідком",body:"como може винести причинову частину перед головною.",examples:[ex("Como estava cansado, fui dormir cedo.","Оскільки я був втомлений, я рано ліг спати.",{purpose:"cause"})]},
  {title:"Відома або подана як підстава інформація",body:"visto que та споріднені локції можуть оформлювати причину як уже релевантну для міркування.",examples:[ex("Visto que não há tempo, começamos agora.","Оскільки часу немає, починаємо зараз.",{purpose:"cause"})]}
 ],
 examples:[ex("Fiquei em casa porque estava doente.","Я залишився вдома, бо був хворий.",{purpose:"cause"}),ex("Como estava cansado, fui dormir cedo.","Оскільки я був втомлений, я рано ліг спати.",{purpose:"cause"}),ex("Visto que não há tempo, começamos agora.","Оскільки часу немає, починаємо зараз.",{purpose:"cause"})],
 nonUses:["Не вважайте porque універсальним засобом для всіх причинних відношень.","Не перекладайте como як «як» автоматично: у певній позиції це причиновий сполучник.","Не плутайте causal because з explanatory because."],
 markers:["porque","como","visto que","já que","uma vez que"],
 mistakes:[
  mistake("como завжди означає «як»","перевіряти позицію та функцію","Перед головною частиною como може бути причиновим сполучником."),
  mistake("porque завжди вводить підрядну причину","аналізувати координаційні пояснювальні вживання","Синтаксичний статус залежить від конструкції."),
  mistake("причина і пояснення — те саме","розрізняти subordinate cause та explanatory coordination","Семантична близькість не скасовує синтаксичної різниці.")
 ],
 ukrainian:"Українські «бо», «тому що», «оскільки», «через те що» мають близькі функції. Відмінності виникають у позиції, способі приєднання та розподілі значень між сполучниками.",
 comparisonUk:"porque ≈ «тому що/бо», como ≈ «оскільки», visto que ≈ «оскільки/з огляду на те що», але точний переклад залежить від контексту.",
 regional:"Причинові конструкції є спільними для PT-BR і PT-PT. Відмінності стосуються передусім стилістичних переваг, частотності та локальних варіантів сполучникових локцій.",
 sources
}),
page({
 id:"temporal-conjunctions",slug:"temporal-conjunctions",category:"conjunctions",
 titleUk:"Часові сполучники та часові підрядні конструкції",titlePt:"Conjunções temporais",titleEn:"Temporal conjunctions",
 summary:"Коли, поки, після того як, щойно та інші способи встановлення часової залежності між подіями.",
 aliases:["часові сполучники","temporal conjunctions","conjunções temporais"],
 related:["subordinating-conjunctions","conjunctive-locutions","tense-and-aspect","subordinate-clause-punctuation"],
 status:"review",origin:"handwritten",depth:"high",ukrainianContrast:"high",
 intro:"Часові сполучникові конструкції співвідносять дві ситуації в часі: одночасність, попередність, наступність, межу, повторюваність або початковий момент. До центральних засобів належать quando, enquanto, antes que, depois que, assim que, logo que та mal. Вибір форми взаємодіє з часом, видом ситуації та способом дієслова.",
 definition:"Часовий сполучниковий засіб вводить частину, яка задає часову рамку або відносне розташування іншої ситуації.",
 formulas:[
  {label:"Одночасність",pattern:"X quando Y",note:"Y задає часову точку або рамку для X."},
  {label:"Тривала одночасність",pattern:"X enquanto Y",note:"while-подібне співвіднесення ситуацій."},
  {label:"Попередність",pattern:"X antes que Y",note:"Одна ситуація передує іншій; форма може взаємодіяти з subjuntivo."},
  {label:"Безпосередня наступність",pattern:"X assim que Y",note:"Y відбувається перед X або запускає його майже відразу."}
 ],
 formation:"Часові відношення можуть виражатися простими сполучниками або багатослівними локціями. Необхідно відрізняти сполучникову форму від прийменникової конструкції та від прислівникового часового модифікатора. Часова інтерпретація також залежить від часо-видової форми дієслова.",
 uses:[
  {title:"Точка часу",body:"quando вводить подію, відносно якої визначається інша.",examples:[ex("Quando cheguei, ele saiu.","Коли я прийшов, він вийшов.",{purpose:"time"})]},
  {title:"Паралельна тривалість",body:"enquanto співвідносить дві ситуації, які розгортаються в один часовий період.",examples:[ex("Enquanto eu trabalhava, ela estudava.","Поки я працював, вона навчалася.",{purpose:"time"})]},
  {title:"Попередність",body:"antes que встановлює відношення «до того як» і часто взаємодіє з subjuntivo.",examples:[ex("Sai antes que escureça.","Вийди до того, як стемніє.",{purpose:"time"})]},
  {title:"Безпосередня наступність",body:"assim que та logo que можуть позначати швидкий перехід від однієї події до іншої.",examples:[ex("Ligo-te assim que chegar.","Я подзвоню тобі, щойно приїду.",{purpose:"time"})]}
 ],
 examples:[ex("Quando cheguei, ele saiu.","Коли я прийшов, він вийшов.",{purpose:"time"}),ex("Enquanto eu trabalhava, ela estudava.","Поки я працював, вона навчалася.",{purpose:"time"}),ex("Sai antes que escureça.","Вийди до того, як стемніє.",{purpose:"time"}),ex("Ligo-te assim que chegar.","Я подзвоню тобі, щойно приїду.",{purpose:"time"})],
 nonUses:["Не вибирайте час сполучника лише за українським перекладом «коли».","Не плутайте antes de + infinitivo з antes que + finite clause.","Не вважайте всі часові зв'язки однаковими: одночасність, попередність і наступність мають різні структури."],
 markers:["quando","enquanto","antes que","depois que","assim que","logo que","mal","desde que"],
 mistakes:[
  mistake("quando завжди вимагає одного часу дієслова","аналізувати temporal relation та tense-aspect","Часові форми співвідносяться з конкретною інтерпретацією подій."),
  mistake("antes de і antes que взаємозамінні без змін","перевіряти тип наступної конструкції","antes de поєднується з інфінітивною групою, antes que — з finite clause."),
  mistake("після «щойно» завжди потрібен presente","враховувати часову перспективу","Форма дієслова залежить від того, чи йдеться про теперішню, минулу або майбутню ситуацію.")
 ],
 ukrainian:"Українські «коли», «поки», «перед тим як», «після того як», «щойно» мають близькі відповідники. Португальська особливо важлива для українця через взаємодію часових форм із subjuntivo та інфінітивом.",
 comparisonUk:"quando ≈ «коли», enquanto ≈ «поки», antes que ≈ «перед тим як», depois que ≈ «після того як», assim que ≈ «щойно».",
 regional:"Основні часові сполучники спільні для PT-BR і PT-PT. Регіональні відмінності частіше стосуються вибору альтернативних конструкцій, часових форм та стилістики, а не базової семантики.",
 sources
})
];
