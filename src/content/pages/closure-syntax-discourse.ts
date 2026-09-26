import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_II = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const GULBENKIAN_III = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const CAMOES_PLE = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id:"interjections", slug:"interjections", category:"pragmatics",
    titleUk:"Вигуки та вигукові конструкції", titlePt:"Interjeições e construções interjetivas", titleEn:"Interjections and interjective constructions",
    summary:"Форми й конструкції, що виражають реакцію, заклик, оцінку або керування взаємодією без звичайної предикації.",
    aliases:["вигуки","interjections","interjeições","вигукові конструкції"],
    related:["exclamative-sentences","discourse-markers","vocative","minimal-answers","punctuation-system"],
    status:"review", origin:"handwritten", depth:"high", ukrainianContrast:"high",
    intro:"Вигук у португальській не слід зводити до переліку емоційних слів. Interjeições можуть виражати реакцію мовця, привертати увагу, спонукати до дії, сигналізувати згоду або незгоду, оформлювати соціальний контакт і навіть відтворювати звуки. Частина вигуків є простими лексемами, інші мають складену форму або виникають із інших частин мови. Їхня інтерпретація сильно залежить від інтонації, ситуації та пунктуації.",
    definition:"Вигук — одиниця або конструкція, що функціонує як відносно самостійний компонент висловлення та без повної пропозиційної структури передає реакцію, звернення, волевиявлення чи інший прагматичний сигнал.",
    formation:"До типових форм належать ah, oh, ai, ui, ufa, olá, psiu та інші. Деякі одиниці можуть мати омонімні або лексикалізовані вживання поза вигуковою функцією. Вигук може бути самостійним реплічним ходом або входити до ширшого речення.",
    uses:[
      {title:"Емоційна реакція",body:"Вигук безпосередньо сигналізує здивування, біль, полегшення, захоплення чи іншу реакцію.",examples:[ex("Ah! Agora entendi.","А! Тепер я зрозумів/зрозуміла."),ex("Ai! Isso dói.","Ай! Це болить.")]},
      {title:"Привітання й контакт",body:"Окремі вигуки організовують соціальну взаємодію та привертають увагу.",examples:[ex("Olá! Tudo bem?","Привіт! Усе добре?"),ex("Psst! Vem cá.","Псс! Іди сюди.")]},
      {title:"Заклик або спонукання",body:"Вигукова одиниця може привертати увагу перед наказовою або іншою конструкцією.",examples:[ex("Psiu! Olha aqui.","Псс! Подивись сюди."),ex("Ei, espera!","Гей, зачекай!")]},
      {title:"Самостійна репліка",body:"Вигук може становити цілу комунікативну репліку, а її точне значення відновлюється із ситуації.",examples:[ex("— Ufa!","— Фух!"),ex("— Ah!","— А!")]},
      {title:"Звуконаслідування та графічна передача",body:"Письмо може передавати звуки або реакції, але такі форми сильніше залежать від жанру й авторського стилю.",examples:[ex("Pum! A porta fechou.","Бух! Двері зачинилися."),ex("Toc, toc!","Стук-стук!")] }
    ],
    examples:[ex("Ah! Agora percebi.","А! Тепер я зрозумів/зрозуміла.",{purpose:"production"}),ex("Ai!","Ай!",{purpose:"comprehension"}),ex("Ei, espera!","Гей, зачекай!",{purpose:"production"}),ex("Ufa! Finalmente.","Фух! Нарешті.",{purpose:"comprehension"})],
    mistakes:[
      mistake("вважати кожне емоційне слово вигуком у будь-якому контексті","визначати синтаксичну й прагматичну функцію конкретного вживання","Та сама форма може мати звичайне лексичне значення в іншій конструкції.","editorial","high"),
      mistake("ставити знак оклику після кожного вигуку без урахування структури репліки","розглядати пунктуацію разом з інтонацією та жанром","Вигуковість не автоматично визначає один-єдиний знак пунктуації.","editorial","medium"),
      mistake("перекладати вигуки буквально, не враховуючи ситуацію","підбирати український еквівалент за комунікативною функцією","Міжмовні відповідники часто не є формально тотожними.","predicted-l1-transfer","high")
    ],
    ukrainian:"Українська має дуже розвинену систему вигуків — «ах», «ой», «гей», «фух», «псс». Тому базовий принцип добре знайомий. Відмінність полягає в конкретному наборі форм, їхній частотності та прагматичних відтінках; португальський вигук краще вивчати разом із типовою ситуацією.",
    regional:"Основний фонд вигуків зрозумілий у PT-BR та PT-PT, але частотність, вимова й інтерпретація окремих форм можуть змінюватися за регіоном і поколінням. Розмовні цифрові форми особливо нестабільні.",
    sources:[{label:"Fundação Calouste Gulbenkian — Gramática do Português, Vol. II",url:GULBENKIAN_II},{label:"Fundação Calouste Gulbenkian — Gramática do Português, Vol. III",url:GULBENKIAN_III},{label:"Camões — Referencial Camões PLE",url:CAMOES_PLE}]
  }),
  page({
    id:"comparative-clauses", slug:"comparative-clauses", category:"syntax",
    titleUk:"Порівняльні підрядні конструкції", titlePt:"Orações comparativas", titleEn:"Comparative clauses",
    summary:"Порівняння якості, кількості або способу дії через конструкції tão... como, mais/menos... do que, tal como та споріднені моделі.",
    aliases:["порівняльні підрядні","comparative clauses","orações comparativas","порівняння"],
    related:["comparisons","subordinate-clauses","degree-complements","conjunctions","adverbs-degree"],
    status:"review", origin:"handwritten", depth:"high", ukrainianContrast:"high",
    intro:"Португальське порівняння охоплює не одну конструкцію. Воно може зіставляти ступінь ознаки, кількість, спосіб дії або характер двох ситуацій. Частини порівняльної конструкції можуть бути симетричними, еліптичними або містити повну предикацію. Для українського студента головна небезпека — механічно перекладати «ніж», «як», «так само як» одним португальським сполучником, не враховуючи тип порівняння.",
    definition:"Порівняльна підрядна конструкція виражає співвідношення між двома ступенями, кількостями, властивостями або ситуаціями, часто через корелятивні чи сполучникові моделі.",
    formation:"Для рівності типовими є tão... como та tanto... como; для нерівності — mais/menos... do que; для способу дії — como, tal como та складніші моделі. Після порівняльного маркера частина предикації може бути опущена, якщо її легко відновити.",
    uses:[
      {title:"Рівність якості",body:"Корелятивна конструкція зіставляє ступінь прикметникової або прислівникової ознаки.",examples:[ex("A Ana é tão alta como a irmã.","Ана така ж висока, як її сестра."),ex("Ele trabalha tão bem como antes.","Він працює так само добре, як раніше.")]},
      {title:"Нерівність ступеня",body:"Mais та menos утворюють порівняння з do que.",examples:[ex("Este livro é mais interessante do que aquele.","Ця книжка цікавіша за ту."),ex("Hoje estou menos cansado do que ontem.","Сьогодні я менш втомлений, ніж учора.")]},
      {title:"Порівняння кількості",body:"Tanto та його варіанти зіставляють кількість і можуть супроводжувати іменники або дієслова.",examples:[ex("Tenho tantos livros como ele.","У мене стільки ж книжок, як у нього."),ex("Ela trabalha tanto como o irmão.","Вона працює стільки ж, як її брат.")]},
      {title:"Порівняння способу дії",body:"Como та споріднені вирази порівнюють спосіб або модель ситуації.",examples:[ex("Faz como eu faço.","Роби так, як роблю я."),ex("Tal como esperávamos, chegou cedo.","Як ми й очікували, він/вона прийшов/прийшла рано.")]},
      {title:"Еліптичне порівняння",body:"Після маркера порівняння може залишатися лише той компонент, який несе нову інформацію.",examples:[ex("A Maria lê mais do que o João.","Марія читає більше, ніж Жуан."),ex("Ele chegou mais cedo do que eu.","Він прийшов раніше, ніж я.")]}
    ],
    examples:[ex("A casa é tão grande como a outra.","Будинок такий самий великий, як інший.",{purpose:"production"}),ex("Hoje trabalho mais do que ontem.","Сьогодні я працюю більше, ніж учора.",{purpose:"production"}),ex("Ela canta tão bem como a mãe.","Вона співає так само добре, як мати.",{purpose:"comprehension"}),ex("Faz como eu disse.","Роби так, як я сказав/сказала.",{purpose:"contrast"})],
    mistakes:[
      mistake("використовувати como для всіх типів порівняння","спочатку визначати рівність, нерівність, кількість або спосіб дії","Тип порівняння визначає набір маркерів.","predicted-l1-transfer","high"),
      mistake("вважати do que тотожним українському одному слову «ніж» у будь-якій позиції","аналізувати всю порівняльну конструкцію","Португальський маркер залежить від конструкції та синтаксичної ролі порівнюваного компонента.","editorial","high"),
      mistake("ігнорувати еліпсис і шукати після como/do que повне речення щоразу","відновлювати пропущені компоненти з контексту","Порівняльні конструкції часто скорочуються без втрати граматичної зрозумілості.","editorial","medium")
    ],
    ukrainian:"Українська має паралельні моделі «такий самий... як», «більш... ніж», «так... як». Тому семантика знайома, але португальські корелятивні форми потрібно засвоювати як цілісні граматичні шаблони, особливо tão/tanto та mais/menos.",
    regional:"Основні порівняльні моделі є спільними для PT-BR та PT-PT. Розмовна мова може скорочувати або перебудовувати конструкцію, тому письмову нормативну модель не слід автоматично сприймати як єдину можливу усну реалізацію.",
    sources:[{label:"Fundação Calouste Gulbenkian — Gramática do Português, Vol. II",url:GULBENKIAN_II},{label:"Fundação Calouste Gulbenkian — Gramática do Português, Vol. III",url:GULBENKIAN_III},{label:"Camões — Referencial Camões PLE",url:CAMOES_PLE}]
  }),
  page({
    id:"discourse-paraphrase", slug:"discourse-paraphrase", category:"discourse",
    titleUk:"Парафразування та переформулювання висловлення", titlePt:"Paráfrase e reformulação discursiva", titleEn:"Paraphrase and discourse reformulation",
    summary:"Як змінювати форму висловлення, зберігаючи його пропозиційний зміст, і як маркувати пояснення, уточнення, виправлення чи переформулювання.",
    aliases:["парафраз","paraphrase","paráfrase","reformulação","переформулювання"],
    related:["discourse-markers","direct-indirect-speech","information-structure","topic-comment","nominalization"],
    status:"review", origin:"handwritten", depth:"high", ukrainianContrast:"high",
    intro:"Парафраз — це не просто заміна слів синонімами. У дискурсі мовець може перебудувати порядок компонентів, змінити активну конструкцію на пасивну, замінити дієслівну предикацію іменною, уточнити референта або пояснити попереднє твердження. Португальська має цілий набір маркерів reformulação, за допомогою яких мовець сигналізує: «іншими словами», «точніше», «тобто», «краще сказати».",
    definition:"Парафразування — переформулювання попереднього змісту іншою мовною конструкцією з максимально можливим збереженням релевантного смислу; reformulação може також додавати уточнення, корекцію або переакцентування.",
    formation:"Парафраза може будуватися через лексичну заміну, синтаксичну перебудову, номіналізацію, пасивізацію, зміну інформаційної структури або дискурсивні маркери: ou seja, isto é, quer dizer, melhor dizendo, em outras palavras. Конкретний маркер визначає, чи це нейтральне пояснення, чи корекція.",
    uses:[
      {title:"Пояснення",body:"Ou seja та isto é вводять переформулювання, яке має зробити попередній зміст зрозумілішим.",examples:[ex("Ele recusou, ou seja, não aceitou a proposta.","Він відмовився, тобто не прийняв пропозицію."),ex("Isto é, precisamos de mais tempo.","Тобто нам потрібно більше часу.")]},
      {title:"Уточнення",body:"Мовець звужує або конкретизує попереднє твердження.",examples:[ex("Melhor dizendo, foi ontem.","Точніше кажучи, це було вчора."),ex("Em outras palavras, o prazo acabou.","Іншими словами, строк закінчився.")]},
      {title:"Синтаксична перебудова",body:"Один зміст можна подати через різні граматичні структури без зміни центральної пропозиції.",examples:[ex("O governo aprovou a medida.","Уряд схвалив захід."),ex("A medida foi aprovada pelo governo.","Захід був схвалений урядом.")]},
      {title:"Корекція сказаного",body:"Reformulação може виправляти попередній вислів, а не просто повторювати його.",examples:[ex("Na segunda-feira — melhor, na terça-feira.","У понеділок — точніше, у вівторок."),ex("Quer dizer, não exatamente.","Тобто, не зовсім.")]},
      {title:"Компресія",body:"Розгорнуте висловлення можна замінити компактнішою номінальною або лексичною конструкцією.",examples:[ex("Ele decidiu que sairia.","Він вирішив, що піде."),ex("Ele decidiu sair.","Він вирішив піти.")]}
    ],
    examples:[ex("Ou seja, começamos amanhã.","Тобто ми починаємо завтра.",{purpose:"production"}),ex("Melhor dizendo, não concordo.","Точніше кажучи, я не погоджуюся.",{purpose:"comprehension"}),ex("Em outras palavras, o problema continua.","Іншими словами, проблема залишається.",{purpose:"production"}),ex("A medida foi aprovada pelo governo.","Захід був схвалений урядом.",{purpose:"contrast"})],
    mistakes:[
      mistake("вважати парафразою будь-яку синонімічну заміну","перевіряти, який саме зміст і дискурсивна функція зберігаються","Парафраз може змінювати структуру й фокус, але має бути співвіднесений із попереднім змістом.","editorial","high"),
      mistake("використовувати ou seja для справжньої корекції без зміни маркера","розрізняти пояснення, уточнення та виправлення","Різні маркери задають різний дискурсивний зв'язок.","editorial","medium"),
      mistake("перекладати em outras palavras буквально як сталу українську формулу в кожному жанрі","обирати відповідник відповідно до регістру","Дискурсивні маркери мають стилістичні відмінності.","predicted-l1-transfer","medium")
    ],
    ukrainian:"Українська має майже прямі функціональні відповідники «тобто», «іншими словами», «точніше кажучи», «краще сказати». Тому основна складність — не концепція, а розрізнення португальських маркерів за силою пояснення, уточнення та корекції.",
    regional:"Базові маркери зрозумілі в PT-BR і PT-PT. Розмовна частотність та вибір окремих форм можуть відрізнятися, а письмовий академічний стиль зазвичай сильніше стандартизує reformulação.",
    sources:[{label:"Fundação Calouste Gulbenkian — Gramática do Português, Vol. II",url:GULBENKIAN_II},{label:"Fundação Calouste Gulbenkian — Gramática do Português, Vol. III",url:GULBENKIAN_III},{label:"Camões — Referencial Camões PLE",url:CAMOES_PLE}]
  })
];
