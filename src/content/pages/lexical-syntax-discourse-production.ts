import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_II = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const CAMOES_PLE = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "collocations-overview",
    slug: "collocations-overview",
    category: "lexical",
    titleUk: "Колокації: система",
    titlePt: "Colocações: sistema",
    titleEn: "Collocations overview",
    summary: "Усталені або статистично й лексично типовi поєднання слів, вибір яких не завжди випливає з окремих значень компонентів.",
    aliases: ["колокації", "collocations", "colocações", "сполучуваність"],
    related: ["verb-noun-collocations", "adjective-government", "verb-government-alternations", "false-friends"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Колокація — це поєднання лексем, у якому вибір одного компонента обмежений звичною сполучуваністю іншого. Для учня важливо відрізняти колокацію від вільного словосполучення та фразеологізму: tomar uma decisão є типовим лексичним поєднанням, але його не слід аналізувати так, ніби кожен дієслівний вибір у ньому абсолютно вільний.",
    definition: "Колокація — лексично й конструкційно привілейоване поєднання слів, яке є звичним для носіїв мови й часто не має прямої однословної відповідності в іншій мові.",
    uses: [
      { title: "Дієслово + іменник", body: "Типові дієслівні партнери допомагають будувати природні висловлення.", examples: [ex("tomar uma decisão", "прийняти рішення", { purpose: "production" }), ex("prestar atenção", "звернути увагу", { purpose: "production" })] },
      { title: "Прикметник + прийменник", body: "Частина колокацій включає керування: прикметник разом із типовим прийменником.", examples: [ex("interessado em música", "зацікавлений у музиці", { purpose: "contrast" })] },
      { title: "Лексичний шаблон", body: "Колокацію корисно вчити як модель, але не робити з неї абсолютне правило: продуктивність різних комбінацій різна.", examples: [ex("ter acesso a informação", "мати доступ до інформації", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("tomar uma decisão importante", "прийняти важливе рішення", { purpose: "production" }),
      ex("prestar atenção aos detalhes", "звернути увагу на деталі", { purpose: "production" }),
      ex("levantar uma questão", "порушити / поставити питання", { purpose: "comprehension" }),
      ex("assumir a responsabilidade", "взяти на себе відповідальність", { purpose: "contrast" }),
      ex("ter em conta os custos", "брати до уваги витрати", { purpose: "production" })
    ],
    mistakes: [
      mistake("будувати колокацію лише за дослівним українським перекладом", "перевіряти типове португальське поєднання цілком", "Мови по-різному розподіляють лексичні партнери.", "predicted-l1-transfer", "high"),
      mistake("вважати кожне частотне словосполучення фразеологізмом", "розрізняти вільні, колокаційні та фразеологізовані конструкції", "Колокація може мати прозоре значення й водночас обмежену сполучуваність.", "editorial", "high"),
      mistake("запам'ятовувати слово без типових партнерів", "додавати до картки приклади з керуванням і колокаціями", "Контекст показує, як слово реально функціонує.", "editorial", "medium")
    ],
    ukrainian: "Українська й португальська можуть називати ту саму ситуацію різними лексичними комбінаціями. Тому корисно вчити не тільки переклад окремого слова, а й 2–3 типові партнери та їхнє керування.",
    regional: "Базові колокації переважно спільні для PT-BR і PT-PT, але частотність, лексичний вибір і розмовні альтернативи можуть різнитися за різновидами та жанрами.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "verb-noun-collocations",
    slug: "verb-noun-collocations",
    category: "lexical",
    titleUk: "Колокації дієслово + іменник",
    titlePt: "Colocações verbo-nome",
    titleEn: "Verb–noun collocations",
    summary: "Типові поєднання дієслова з іменником, у яких вибір дієслова є частиною лексичної норми.",
    aliases: ["дієслово іменник колокації", "verb-noun collocations", "colocações verbo-nome"],
    related: ["collocations-overview", "verb-government-arguments", "verb-complement-types", "false-friends"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "У сполуках verbo + nome португальська часто віддає перевагу конкретному дієслову, навіть якщо український переклад використовує інше. Це особливо помітно в академічній та адміністративній мові: tomar uma decisão, prestar atenção, fazer uma pergunta. Такі поєднання краще засвоювати разом, не перетворюючи їх на механічний список.",
    definition: "Дієслівно-іменна колокація — звичне поєднання дієслова та іменної групи з відносно обмеженим вибором лексичних партнерів.",
    uses: [
      { title: "Номіналізована дія", body: "Португальська часто використовує дієслово + абстрактний іменник там, де українська може віддати перевагу одному дієслову.", examples: [ex("tomar uma decisão", "прийняти рішення", { purpose: "production" })] },
      { title: "Дія з абстрактним іменником", body: "Такі колокації поширені в нейтральному та формальному мовленні.", examples: [ex("assumir uma responsabilidade", "взяти на себе відповідальність", { purpose: "production" })] },
      { title: "Керування всередині колокації", body: "Іменна група може мати прийменниковий компонент, який теж треба засвоювати разом із конструкцією.", examples: [ex("dar atenção a algo", "приділити увагу чомусь", { purpose: "contrast" })] }
    ],
    examples: [
      ex("tomar uma decisão", "прийняти рішення", { purpose: "production" }),
      ex("fazer uma pergunta", "поставити запитання", { purpose: "production" }),
      ex("prestar atenção", "звернути увагу", { purpose: "comprehension" }),
      ex("assumir um compromisso", "взяти на себе зобов'язання", { purpose: "contrast" }),
      ex("levantar uma hipótese", "висунути гіпотезу", { purpose: "production" })
    ],
    mistakes: [
      mistake("перекладати українське дієслово слово в слово", "спочатку визначати португальську колокацію", "Лексичні партнери не мають обов'язково збігатися між мовами.", "predicted-l1-transfer", "high"),
      mistake("плутати fazer, tomar, dar, ter лише за загальним значенням", "вивчати дієслово разом із типовим іменником", "Значення в колокації формується конструкцією.", "editorial", "high"),
      mistake("ігнорувати прийменник після іменника", "вчити всю рамку словосполучення", "Керування є частиною практичної моделі.", "editorial", "medium")
    ],
    ukrainian: "Українські «поставити запитання», «прийняти рішення», «звернути увагу» показують, наскільки різними можуть бути лексичні моделі. Навіть коли переклад звучить близько, португальська колокація має бути засвоєна як окрема конструкція.",
    regional: "Основні колокації широко спільні для PT-BR і PT-PT. Відмінності частіше стосуються розмовних альтернатив, частотності та жанру.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "adjective-government",
    slug: "adjective-government",
    category: "lexical",
    titleUk: "Керування прикметників",
    titlePt: "Regência dos adjetivos",
    titleEn: "Adjective government",
    summary: "Прийменникові та інші залежні компоненти, які вибирають конкретні прикметники.",
    aliases: ["керування прикметників", "adjective government", "regência dos adjetivos"],
    related: ["collocations-overview", "verb-preposition", "prepositions-overview", "false-friends"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Деякі португальські прикметники мають типовий спосіб приєднання залежного компонента. Після interessado вживається em, після capaz — de, після contente — com у відповідних значеннях. Це не просто вибір прийменника за українським перекладом: прикметник і його complement утворюють конструкцію.",
    definition: "Керування прикметника — закономірний вибір залежного компонента, часто прийменникової групи або інфінітива, який визначається конкретним прикметником та його значенням.",
    uses: [
      { title: "Прикметник + прийменник", body: "Прийменник є частиною конструкції й не завжди має прямий український відповідник.", examples: [ex("interessado em linguística", "зацікавлений у лінгвістиці", { purpose: "production" })] },
      { title: "Прикметник + de + infinitivo", body: "Частина прикметників приєднує інфінітив через de.", examples: [ex("capaz de resolver o problema", "здатний розв'язати проблему", { purpose: "contrast" })] },
      { title: "Зміна прийменника зі значенням", body: "Один прикметник може мати різні рамки залежно від семантики.", examples: [ex("responsável por isto", "відповідальний за це", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("interessado em história", "зацікавлений в історії", { purpose: "production" }),
      ex("capaz de trabalhar sozinho", "здатний працювати самостійно", { purpose: "production" }),
      ex("contente com o resultado", "задоволений результатом", { purpose: "contrast" }),
      ex("responsável por esta área", "відповідальний за цю сферу", { purpose: "comprehension" }),
      ex("favorável à proposta", "прихильний до пропозиції", { purpose: "production" })
    ],
    mistakes: [
      mistake("обирати прийменник за українським перекладом", "вчити прикметник разом із його рамкою", "Різні мови можуть кодувати те саме відношення різними прийменниками.", "predicted-l1-transfer", "high"),
      mistake("вважати один прийменник універсальним після прикметників", "перевіряти лексичну модель", "Керування є властивістю конкретної конструкції.", "editorial", "high"),
      mistake("не враховувати crase перед à", "спочатку визначати прийменник a, а потім перевіряти контракцію з означеним артиклем", "Керування та crase — пов'язані, але різні рівні аналізу.", "editorial", "medium")
    ],
    ukrainian: "В українській керування теж є важливим, але прийменникові відповідності не збігаються системно. Тому «зацікавлений у» не дає підстав автоматично переносити прийменник у португальську.",
    regional: "Основні моделі керування спільні для PT-BR і PT-PT. Окремі прикметники можуть мати варіантність залежно від регістру та лексичного вжитку.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "false-friends",
    slug: "false-friends",
    category: "lexical",
    titleUk: "Хибні друзі перекладача",
    titlePt: "Falsos amigos",
    titleEn: "False friends",
    summary: "Схожі за формою слова, значення або вживання яких не збігається з очікуванням з іншої мови.",
    aliases: ["хибні друзі", "false friends", "falsos amigos"],
    related: ["collocations-overview", "adjective-government", "lexical-grammar", "register"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Хибні друзі — це слова, схожість форми яких створює хибне очікування щодо значення або вживання. Для українськомовного учня вони можуть виникати через міжнародну лексику, англійські запозичення та слова, подібні до українських або російських. Надійна стратегія — перевіряти значення в реченні, граматичну рамку та регістр, а не довіряти графічній схожості.",
    definition: "False friend — лексема або форма, яка нагадує слово іншої мови, але має відмінне значення, розподіл уживання або стилістичний статус.",
    uses: [
      { title: "Формальна схожість", body: "Подібна форма може мати інше основне значення.", examples: [ex("pretender ajuda", "просити про допомогу", { purpose: "contrast" })] },
      { title: "Схоже слово, інша конструкція", body: "Навіть близьке значення може вимагати іншої граматичної рамки.", examples: [ex("assistir a uma reunião", "бути присутнім на зустрічі", { purpose: "production" })] },
      { title: "Регістр і значення", body: "Слово може бути формально схожим, але його сучасне вживання залежить від регістру або різновиду.", examples: [ex("atualmente", "нині, зараз", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Pretendo estudar português.", "Я планую вивчати португальську.", { purpose: "contrast" }),
      ex("Ele pretende mudar de emprego.", "Він планує змінити роботу.", { purpose: "production" }),
      ex("Estou atualmente em Lisboa.", "Нині я в Лісабоні.", { purpose: "production" }),
      ex("Assistimos à conferência ontem.", "Учора ми були присутні на конференції.", { purpose: "comprehension" }),
      ex("O assunto é muito atual.", "Ця тема дуже актуальна / сучасна.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("вибирати значення лише за схожістю з українським або англійським словом", "перевіряти контекст і словникове значення", "Форма не гарантує семантичної відповідності.", "predicted-l1-transfer", "high"),
      mistake("вважати false friend обов'язково повним антонімом", "перевіряти точний розподіл значень", "Розбіжність може бути частковою.", "editorial", "medium"),
      mistake("вчити список без контексту", "вчити слово в типовій фразі", "Конструкція часто одразу показує справжнє значення.", "editorial", "medium")
    ],
    ukrainian: "Для українськомовного учня особливо небезпечні слова, які «впізнаються» до того, як речення прочитане повністю. Корисно фіксувати не лише переклад, а й приклад та типову граматичну рамку.",
    regional: "Хибні друзі можуть мати різну силу в PT-BR і PT-PT через різну частотність, запозичення та регістр. Приклади слід перевіряти саме в потрібному різновиді.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "nominalization",
    slug: "nominalization",
    category: "syntax",
    titleUk: "Номіналізація",
    titlePt: "Nominalização",
    titleEn: "Nominalization",
    summary: "Перетворення предикативного або властивісного змісту на іменну конструкцію.",
    aliases: ["номіналізація", "nominalization", "nominalização"],
    related: ["word-formation-affixes", "complex-predicates", "collocations-overview", "infinitive-prepositions"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Номіналізація дає змогу подати подію, процес або властивість як іменний компонент. Португальська використовує дериваційні іменники на кшталт decisão, construção, desenvolvimento, але також інфінітивні та інші конструкції. Вибір номіналізації впливає на те, де опиняються аргументи предиката, наскільки щільним стає текст і який регістр він набуває.",
    definition: "Номіналізація — утворення або використання іменної структури для представлення змісту, який в іншому контексті може бути виражений предикацією.",
    uses: [
      { title: "Дериваційний іменник", body: "Дієслово або прикметник може мати пов'язаний іменник.", examples: [ex("a construção da ponte", "будівництво мосту", { purpose: "production" })] },
      { title: "Номіналізація в академічному стилі", body: "Іменні конструкції дозволяють ущільнювати інформацію та будувати складні ланцюги залежностей.", examples: [ex("a análise dos resultados", "аналіз результатів", { purpose: "production" })] },
      { title: "Порівняння з дієслівною конструкцією", body: "Одна подія може бути подана як предикація або як іменна структура з різним інформаційним фокусом.", examples: [ex("A equipa analisou os resultados.", "Команда проаналізувала результати.", { purpose: "contrast" }), ex("A análise dos resultados foi concluída.", "Аналіз результатів було завершено.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("o desenvolvimento do projeto", "розвиток проєкту", { purpose: "production" }),
      ex("a decisão de sair", "рішення піти", { purpose: "production" }),
      ex("a redução dos custos", "скорочення витрат", { purpose: "comprehension" }),
      ex("A empresa reduziu os custos.", "Компанія скоротила витрати.", { purpose: "contrast" }),
      ex("A análise dos dados demorou duas semanas.", "Аналіз даних тривав два тижні.", { purpose: "production" })
    ],
    mistakes: [
      mistake("вважати номіналізацію лише словотвірним процесом", "враховувати також синтаксичну й дискурсивну перебудову", "Номіналізація змінює структуру речення, а не тільки форму слова.", "editorial", "high"),
      mistake("переносити українське керування на португальський іменник", "перевіряти модель конкретного іменника", "Номіналізований предикат може мати інше керування.", "predicted-l1-transfer", "high"),
      mistake("вважати складніший іменний стиль завжди формальнішим і кращим", "порівнювати жанр, ясність і щільність інформації", "Номіналізація — ресурс стилю, а не універсальна перевага.", "editorial", "medium")
    ],
    ukrainian: "Українська також активно використовує номіналізацію, тому сама категорія не є чужою. Складність виникає там, де португальський іменник має інше керування або де український природний переклад повертає конструкцію до дієслова.",
    regional: "Номіналізаційні моделі є спільними для PT-BR і PT-PT. Відмінності частіше стосуються стилю, жанру та частотності окремих дериваційних форм.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "complex-predicates",
    slug: "complex-predicates",
    category: "syntax",
    titleUk: "Складні предикати",
    titlePt: "Predicados complexos",
    titleEn: "Complex predicates",
    summary: "Конструкції, де кілька вербальних або предикативних компонентів утворюють функціональну єдність.",
    aliases: ["складні предикати", "complex predicates", "predicados complexos"],
    related: ["periphrases", "causative-constructions", "raising-and-control", "verb-valency-frames"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Складний предикат не слід автоматично трактувати як два незалежні дієслова. У португальській допоміжні, фазові, модальні, каузативні та інші конструкції можуть створювати єдину предикативну структуру. Аналіз має враховувати час, аспект, модальність, контроль суб'єкта, валентність і можливість заміни всієї конструкції одним предикатом.",
    definition: "Складний предикат — синтаксична структура, у якій кілька предикативних компонентів взаємодіють так, що їхні функції та аргументи не дорівнюють простій сумі двох незалежних речень.",
    uses: [
      { title: "Фазові конструкції", body: "Começar a, acabar de, voltar a та інші моделі додають початок, недавність або повторення.", examples: [ex("Começou a trabalhar cedo.", "Він/вона почав/почала працювати рано.", { purpose: "production" })] },
      { title: "Модально-вербальні конструкції", body: "Модальні дієслова можуть змінювати статус інфінітивної події.", examples: [ex("Pode entrar.", "Можна / він може увійти.", { purpose: "contrast" })] },
      { title: "Каузативні та контрольні структури", body: "Fazer/deixar + infinitivo та конструкції контролю мають окрему аргументну організацію.", examples: [ex("Ela fez o filho estudar.", "Вона змусила сина вчитися.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Tenho de sair agora.", "Я мушу зараз піти.", { purpose: "production" }),
      ex("Acabou de chegar.", "Він/вона щойно прийшов/прийшла.", { purpose: "production" }),
      ex("Voltámos a tentar.", "Ми знову спробували.", { purpose: "comprehension" }),
      ex("Ela deixou os filhos brincar.", "Вона дозволила дітям гратися.", { purpose: "contrast" }),
      ex("Podemos começar a trabalhar.", "Ми можемо почати працювати.", { purpose: "production" })
    ],
    mistakes: [
      mistake("аналізувати кожне дієслово як незалежний предикат", "перевіряти, чи утворюють компоненти перифрастичну або іншу складну конструкцію", "Допоміжний компонент може додавати час, аспект або модальність.", "editorial", "high"),
      mistake("плутати складний предикат із двома координованими діями", "перевіряти спільний аргументний і семантичний каркас", "Coordenação має іншу синтаксичну організацію.", "predicted-l1-transfer", "high"),
      mistake("ігнорувати контроль суб'єкта інфінітива", "визначати, хто є учасником кожної предикації", "В одному реченні може бути кілька предикацій з різними або контрольованими суб'єктами.", "editorial", "high")
    ],
    ukrainian: "Українська також має аналітичні й фазові конструкції, тому категорія загалом зрозуміла. Проте конкретні португальські перифрази не мають автоматичних українських відповідників; їх краще вчити як предикативні рамки.",
    regional: "Базові складні предикати спільні для PT-BR і PT-PT. Особливо помітні регіональні відмінності в прогресивних моделях та окремих розмовних перифразах.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "discourse-overview",
    slug: "discourse-overview",
    category: "discourse",
    titleUk: "Дискурс: огляд",
    titlePt: "Discurso: visão geral",
    titleEn: "Discourse overview",
    summary: "Організація висловлень понад рівнем окремого речення: зв'язність, структура інформації та комунікативна функція.",
    aliases: ["дискурс", "discourse overview", "discurso"],
    related: ["discourse-markers", "information-structure", "cohesion-reference", "speech-acts"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Дискурс охоплює те, як окремі речення та висловлення утворюють зв'язний текст або розмову. Для граматики важливі не тільки локальні форми, а й те, як мовець вводить тему, продовжує її, змінює фокус, посилається на вже згадане та сигналізує відношення між частинами тексту.",
    definition: "Дискурс — рівень організації мовлення, на якому інтерпретація висловлення залежить від попереднього, наступного та ширшого комунікативного контексту.",
    uses: [
      { title: "Тема і фокус", body: "Позиція компонента може показувати, що є темою, а що новою або контрастивною інформацією.", examples: [ex("Quanto ao projeto, falamos amanhã.", "Щодо проєкту, поговоримо завтра.", { purpose: "production" })] },
      { title: "Зв'язок між висловленнями", body: "Дискурс-маркери та лексичні повтори допомагають читачеві відновити логічні відношення.", examples: [ex("No entanto, decidimos continuar.", "Однак ми вирішили продовжити.", { purpose: "contrast" })] },
      { title: "Контекстуальна інтерпретація", body: "Займенники, еліпсис і нульові компоненти часто потребують попереднього контексту.", examples: [ex("Ele chegou tarde. Depois, saiu.", "Він прийшов пізно. Потім пішов.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Em primeiro lugar, precisamos de dados.", "По-перше, нам потрібні дані.", { purpose: "production" }),
      ex("Além disso, o custo aumentou.", "Крім того, вартість зросла.", { purpose: "production" }),
      ex("Por outro lado, há vantagens.", "З іншого боку, є переваги.", { purpose: "contrast" }),
      ex("Quanto a este ponto, voltaremos a falar dele.", "Щодо цього питання, ми ще до нього повернемося.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("зводити дискурс до набору сполучників", "розглядати також тему, фокус, референцію та контекст", "Дискурсивна організація ширша за список маркерів.", "editorial", "high"),
      mistake("вважати порядок речень чисто стилістичним", "аналізувати інформаційну структуру", "Позиція може впливати на те, як читач відновлює тему й нову інформацію.", "editorial", "medium"),
      mistake("перекладати дискурс-маркери як взаємозамінні", "враховувати відношення, регістр і позицію", "Маркери мають різні дискурсивні функції.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська має подібні дискурсивні ресурси, тому головна проблема не в самій категорії, а в розподілі конкретних маркерів і структур. Не слід очікувати, що український маркер завжди має одного португальського відповідника.",
    regional: "Дискурсивні функції спільні для PT-BR і PT-PT, але частотність маркерів, звертань та розмовних форм може помітно різнитися.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "discourse-markers",
    slug: "discourse-markers",
    category: "discourse",
    titleUk: "Дискурс-маркери",
    titlePt: "Marcadores discursivos",
    titleEn: "Discourse markers",
    summary: "Елементи, що сигналізують відношення між висловленнями або організують перебіг комунікації.",
    aliases: ["дискурс-маркери", "discourse markers", "marcadores discursivos"],
    related: ["discourse-overview", "cohesion-reference", "connective-adverbs", "information-structure"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Дискурс-маркери допомагають слухачеві або читачеві зрозуміти, як нове висловлення пов'язане з попереднім: як додаток, контраст, висновок, пояснення, зміна теми чи повернення до неї. Їх не слід прирівнювати до одного класу слів: маркерами можуть бути прислівникові, сполучникові та інші конструкційні елементи.",
    definition: "Дискурс-маркер — елемент, функція якого полягає в організації інтерпретації висловлення або його зв'язку з дискурсивним контекстом.",
    uses: [
      { title: "Додавання", body: "Маркери на кшталт além disso організують додаткову інформацію.", examples: [ex("Além disso, precisamos de mais tempo.", "Крім того, нам потрібно більше часу.", { purpose: "production" })] },
      { title: "Контраст", body: "No entanto, porém, por outro lado та подібні засоби сигналізують зіставлення.", examples: [ex("No entanto, o resultado foi diferente.", "Однак результат був іншим.", { purpose: "contrast" })] },
      { title: "Висновок", body: "Portanto, assim, por isso та інші засоби можуть маркувати висновок або наслідок на дискурсивному рівні.", examples: [ex("Portanto, devemos esperar.", "Отже, ми повинні почекати.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Além disso, há outro problema.", "Крім того, є ще одна проблема.", { purpose: "production" }),
      ex("No entanto, decidimos avançar.", "Однак ми вирішили рухатися далі.", { purpose: "contrast" }),
      ex("Por isso, ficámos em casa.", "Тому ми залишилися вдома.", { purpose: "production" }),
      ex("Em suma, a proposta é viável.", "Підсумовуючи, пропозиція життєздатна.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вважати всі дискурс-маркери повними синонімами", "визначати дискурсивне відношення та регістр", "Маркери відрізняються функцією й позиційними властивостями.", "editorial", "high"),
      mistake("плутати дискурсивний тому з причинним сполучником у кожному випадку", "аналізувати синтаксичний і дискурсивний рівні", "Por isso може пов'язувати вже сформульовані висловлення.", "predicted-l1-transfer", "medium"),
      mistake("ігнорувати пунктуацію", "перевіряти типову позицію та інтонаційну автономність", "Багато маркерів мають особливу пунктуаційну поведінку.", "editorial", "medium")
    ],
    ukrainian: "Українські «отже», «однак», «крім того», «тому» дають корисні паралелі, але не утворюють точних пар. Найкраще вчити маркер разом із функцією та типовою позицією.",
    regional: "Розподіл дискурс-маркерів має багато спільного в PT-BR і PT-PT, але розмовна частотність, частки та окремі маркери можуть відрізнятися.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "cohesion-reference",
    slug: "cohesion-reference",
    category: "discourse",
    titleUk: "Когезія та референція",
    titlePt: "Coesão e referência",
    titleEn: "Cohesion and reference",
    summary: "Засоби, що пов'язують частини тексту через повтор, займенникову референцію, еліпсис та інші механізми.",
    aliases: ["когезія", "cohesion reference", "coesão e referência"],
    related: ["discourse-overview", "discourse-markers", "reference-overview", "ellipsis"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Когезія забезпечує формальні та лексичні зв'язки між частинами тексту. Референція дозволяє встановити, до кого або чого відноситься займенник чи інший вираз; еліпсис дозволяє не повторювати відновлюваний матеріал. Для учня важливо відрізняти граматичну форму від способу, у який контекст робить її зрозумілою.",
    definition: "Когезія — сукупність формальних засобів зв'язку в тексті; референція — відношення між виразом і його референтом або дискурсивним представленням.",
    uses: [
      { title: "Займенникова референція", body: "Особові та вказівні займенники можуть відсилати до вже введеного референта.", examples: [ex("A Maria chegou. Ela sentou-se.", "Марія прийшла. Вона сіла.", { purpose: "production" })] },
      { title: "Лексичний повтор", body: "Повтор або лексична заміна підтримує тему тексту.", examples: [ex("O projeto cresceu. O trabalho aumentou também.", "Проєкт виріс. Обсяг роботи теж збільшився.", { purpose: "comprehension" })] },
      { title: "Еліпсис", body: "Контекст може дозволяти опускати вже відновлюваний матеріал.", examples: [ex("Eu fui ontem; ela, hoje.", "Я пішов/пішла вчора; вона — сьогодні.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("O relatório foi publicado. Ele recebeu muitos comentários.", "Звіт опублікували. Він отримав багато коментарів.", { purpose: "production" }),
      ex("A empresa mudou de estratégia. Essa decisão surpreendeu os clientes.", "Компанія змінила стратегію. Це рішення здивувало клієнтів.", { purpose: "production" }),
      ex("Uns preferem a primeira opção; outros, a segunda.", "Дехто віддає перевагу першому варіанту, інші — другому.", { purpose: "comprehension" }),
      ex("O problema é conhecido, mas ainda não foi resolvido.", "Проблема відома, але її досі не розв'язано.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("шукати референт займенника лише в тому самому реченні", "враховувати ширший дискурс", "Референція часто встановлюється попереднім контекстом.", "predicted-l1-transfer", "high"),
      mistake("вважати будь-який повтор стилістичною помилкою", "розрізняти корисний лексичний повтор і надмірність", "Повтор може підтримувати когезію.", "editorial", "medium"),
      mistake("сприймати еліпсис як граматичну помилку", "перевіряти, чи матеріал легко відновлюється", "Еліпсис є системним засобом організації тексту.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська використовує ті самі загальні механізми, тому складність переважно виникає в конкретних португальських займенниках, нульових підметах, узгодженні та порядку слів.",
    regional: "Когезійні механізми спільні для PT-BR і PT-PT. Відмінності в нульових підметах, займенниках та розмовній референції можуть впливати на те, як легко відновлюється референт.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "modal-particles",
    slug: "modal-particles",
    category: "pragmatics",
    titleUk: "Модальні частки",
    titlePt: "Partículas modais",
    titleEn: "Modal particles",
    summary: "Невеликі дискурсивно чутливі елементи, що модифікують ставлення мовця, очікування, наголос або взаємодію.",
    aliases: ["модальні частки", "modal particles", "partículas modais"],
    related: ["modality-overview", "discourse-markers", "speech-acts", "register-and-directness"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Модальні частки — особливо контекстно залежні елементи, які не просто додають предметне значення, а впливають на ставлення мовця до пропозиції або на організацію взаємодії. У португальській такі функції можуть реалізовуватися частками, прислівниками та іншими дискурсивними елементами. Тому категорію не слід зводити до одного закритого списку слів.",
    definition: "Модальна частка — елемент із переважно дискурсивною або модальною функцією, який змінює інтерпретацію висловлення щодо впевненості, очікування, наголосу, обмеження чи взаємодії.",
    uses: [
      { title: "Ставлення мовця", body: "Елементи на кшталт mesmo, já, afinal та контекстні частки можуть сигналізувати позицію мовця.", examples: [ex("Afinal, o que aconteceu?", "То що ж зрештою сталося?", { purpose: "production" })] },
      { title: "Очікування та корекція", body: "Частка може показувати, що мовець переглядає очікування або наголошує на певному аспекті.", examples: [ex("Ele já chegou.", "Він уже прийшов.", { purpose: "contrast" })] },
      { title: "Інтерактивна функція", body: "У розмові короткі елементи можуть організовувати згоду, заперечення, уточнення чи реакцію.", examples: [ex("Pois, é verdade.", "Так, справді.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Afinal, temos de decidir.", "Зрештою, нам треба вирішити.", { purpose: "production" }),
      ex("Ele já sabe disso.", "Він уже це знає.", { purpose: "contrast" }),
      ex("Pois, vamos começar.", "Гаразд, почнімо.", { purpose: "production" }),
      ex("Mesmo ele percebeu o problema.", "Навіть він зрозумів проблему.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("шукати один сталий український переклад для кожної частки", "описувати функцію в контексті", "Прагматичне значення часто залежить від інтонації та попереднього дискурсу.", "predicted-l1-transfer", "high"),
      mistake("вважати модальну частку звичайним прислівником за словниковим класом", "аналізувати її синтаксичну та дискурсивну роль", "Одна й та сама форма може мати різні функції.", "editorial", "high"),
      mistake("використовувати розмовну частку без урахування регістру", "перевіряти жанр і різновид португальської", "Інтерактивні елементи особливо чутливі до регістру.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українська теж має частки й дискурсивні елементи, але відповідність не є один-до-одного. Для навчання краще фіксувати «форма → функція → типовий контекст», а не лише переклад.",
    regional: "PT-BR і PT-PT мають спільний набір багатьох дискурсивних ресурсів, але частотність і розмовне забарвлення окремих часток можуть істотно різнитися.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  })
];
