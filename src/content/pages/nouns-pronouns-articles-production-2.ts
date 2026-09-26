import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_II = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const CAMOES_PLE = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "compound-nouns",
    slug: "compound-nouns",
    category: "nouns",
    titleUk: "Складні іменники",
    titlePt: "Nomes compostos",
    titleEn: "Compound nouns",
    summary: "Складені лексичні одиниці, утворені з двох або більше основ, та їхнє число, рід і написання.",
    aliases: ["складні іменники", "compound nouns", "nomes compostos", "guarda-chuva", "segunda-feira"],
    related: ["noun-gender", "noun-number", "plural-formation", "word-formation-affixes", "hyphenation"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Складний іменник не варто сприймати як механічне складання двох перекладних слів. У португальській складена одиниця може мати власне лексичне значення, окрему модель множини та усталене написання. Для учня важливо розрізняти лексикалізований складний іменник, звичайне словосполучення та слово, яке історично було складеним, але в сучасному правописі пишеться разом.",
    definition: "Складний іменник (nome composto) — лексична одиниця, у якій дві або більше основ утворюють єдину номінацію. Її граматична поведінка визначається не лише формою компонентів, а й тим, наскільки конструкція лексикалізована.",
    uses: [
      { title: "Назва одного поняття", body: "Компоненти разом називають предмет, особу або явище, яке не дорівнює простій сумі значень.", examples: [ex("guarda-chuva", "парасоля", { purpose: "comprehension" }), ex("segunda-feira", "понеділок", { purpose: "production" })] },
      { title: "Різні типи будови", body: "Складені іменники можуть містити іменник + іменник, дієслівну основу + іменник або інші комбінації.", examples: [ex("passatempo", "проведення часу; хобі", { purpose: "comprehension" }), ex("beija-flor", "колібрі", { purpose: "contrast" })] },
      { title: "Множина залежить від моделі", body: "Не можна автоматично додати -s до останнього слова: потрібно знати лексичну модель конкретної одиниці.", examples: [ex("guarda-chuvas", "парасолі", { purpose: "production" }), ex("segundas-feiras", "понеділки", { purpose: "production" })] }
    ],
    examples: [
      ex("Comprei um guarda-chuva novo.", "Я купив/купила нову парасолю.", { purpose: "production" }),
      ex("As segundas-feiras são mais tranquilas.", "Понеділки спокійніші.", { purpose: "production" }),
      ex("Ele tem um passatempo interessante.", "У нього є цікаве хобі.", { purpose: "comprehension" }),
      ex("Vimos vários beija-flores no jardim.", "Ми побачили кількох колібрі в саду.", { purpose: "contrast" }),
      ex("Esses guarda-chuvas estão molhados.", "Ці парасолі мокрі.", { purpose: "production" })
    ],
    mistakes: [
      mistake("утворювати множину механічно за останнім компонентом", "перевіряти модель множини всієї складеної одиниці", "У різних типів складних іменників множина формується по-різному.", "predicted-l1-transfer", "high"),
      mistake("писати кожну прозору комбінацію через дефіс", "розрізняти лексикалізовану одиницю та вільне словосполучення", "Написання визначається сучасною орфографічною нормою, а не лише прозорістю значення.", "editorial", "high"),
      mistake("перекладати два компоненти окремо й отримувати неіснуючу назву", "вчити складний іменник як цілісну лексему", "Лексикалізація може змінювати значення всієї одиниці.", "pedagogical", "medium")
    ],
    ukrainian: "Українська також має складні іменники та складені назви, але правила написання й моделі множини не збігаються з португальськими. Особливо небезпечно переносити український дефіс або спосіб творення множини на португальську без перевірки конкретної лексеми.",
    regional: "Базові складні іменники здебільшого спільні для PT-BR і PT-PT. Орфографічні варіанти після Acordo Ortográfico потрібно перевіряти окремо; усні та регіональні лексичні альтернативи не слід узагальнювати на всю португаломовну систему.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "common-epicene",
    slug: "common-epicene",
    category: "nouns",
    titleUk: "Спільний рід і епіценні іменники",
    titlePt: "Nomes comuns de dois e epicenos",
    titleEn: "Common-gender and epicene nouns",
    summary: "Іменники, у яких форма не однаково кодує стать референта, зокрема comum de dois та epiceno.",
    aliases: ["спільний рід", "епіцен", "comum de dois", "epiceno", "estudante", "criança"],
    related: ["noun-gender", "gender-vs-ukrainian", "professions-gender", "adjective-agreement"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Португальський граматичний рід і стать референта не є одним і тим самим. У частини іменників форма залишається однаковою, а рід показує артикль або інший детермінатив; в інших іменників граматичний рід лексикалізований, тоді як стать тварини чи людини уточнюється додатково. Тому модель comum de dois не слід змішувати з epiceno.",
    definition: "Comum de dois — іменник з однією формою, який може мати чоловічий або жіночий рід залежно від детермінатива: o estudante / a estudante. Epiceno — іменник, переважно для тварин, у якого граматичний рід фіксований, а стать уточнюється словами macho/fêmea або контекстом.",
    uses: [
      { title: "Comum de dois", body: "Форма іменника не змінюється, але артикль і прикметники узгоджуються з граматичним родом.", examples: [ex("O estudante chegou cedo.", "Студент прийшов рано.", { purpose: "production" }), ex("A estudante chegou cedo.", "Студентка прийшла рано.", { purpose: "production" })] },
      { title: "Epiceno", body: "Граматичний рід не змінюється разом зі статтю тварини.", examples: [ex("A cobra macho é grande.", "Самець змії великий.", { purpose: "contrast" }), ex("A cobra fêmea é grande.", "Самка змії велика.", { purpose: "contrast" })] },
      { title: "Узгодження", body: "При comum de dois рід детермінатива визначає узгодження; при epiceno узгодження лишається з граматичним родом іменника.", examples: [ex("A estudante dedicada apresentou o trabalho.", "Старанна студентка представила роботу.", { purpose: "production" })] }
    ],
    examples: [
      ex("O artista recebeu o prémio.", "Художник отримав премію.", { purpose: "comprehension" }),
      ex("A artista recebeu o prémio.", "Художниця отримала премію.", { purpose: "production" }),
      ex("A criança estava cansada.", "Дитина була втомлена.", { purpose: "contrast" }),
      ex("O animal é uma cobra macho.", "Тварина — самець змії.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("робити жіночу форму кожного іменника, що позначає людину", "спочатку визначати тип іменника", "У comum de dois форма може бути незмінною: o/a estudante.", "predicted-l1-transfer", "high"),
      mistake("вважати epiceno синонімом українського «спільний рід»", "розрізняти граматичний рід і модель називання статі", "Epiceno має фіксований граматичний рід.", "editorial", "high"),
      mistake("узгоджувати прикметник зі статтю тварини, а не з граматичним родом іменника", "перевіряти граматичний рід головного іменника", "A cobra continua жіночого роду незалежно від macho/fêmea.", "predicted-l1-transfer", "medium")
    ],
    ukrainian: "Українська теж має слова на кшталт «студент», «студентка», а також слова, стать яких визначається контекстом. Проте португальська система comum de dois та epiceno має власні граматичні правила. Не переносіть українське відчуття природного роду на узгодження португальського іменника.",
    regional: "Основне розрізнення comum de dois / epiceno є загальнопортугальським. Лексичні назви професій і тварин можуть мати регіональні або історичні варіанти, тому окрему форму не слід оголошувати універсальною без джерельної перевірки.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "professions-gender",
    slug: "professions-gender",
    category: "nouns",
    titleUk: "Назви професій і граматичний рід",
    titlePt: "Género das profissões",
    titleEn: "Gender in profession nouns",
    summary: "Чоловічі та жіночі форми назв професій, посад і ролей та їхнє узгодження.",
    aliases: ["професії та рід", "professions gender", "género das profissões", "médica", "presidenta"],
    related: ["noun-gender", "common-epicene", "gender-vs-ukrainian", "articles-professions-roles"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Назви професій і посад особливо добре показують, чому граматичний рід не можна зводити до одного універсального суфікса. У сучасній португальській існують продуктивні жіночі форми, незмінні форми та лексеми з історичною варіативністю. Форма має узгоджуватися з реальною граматичною структурою, а не автоматично копіювати український відповідник.",
    definition: "Назви професій можуть мати окремі форми для різних родів, спільну форму з різним детермінативом або лексично обмежені моделі. Граматичний рід проявляється через артикль, прикметник та інші елементи узгодження.",
    uses: [
      { title: "Окремі жіночі форми", body: "Багато назв утворюють регулярну жіночу форму.", examples: [ex("A médica chegou cedo.", "Лікарка прийшла рано.", { purpose: "production" }), ex("A professora trabalha aqui.", "Учителька працює тут.", { purpose: "production" })] },
      { title: "Одна форма, різний детермінатив", body: "Деякі професійні назви поводяться як comum de dois.", examples: [ex("O estudante é brasileiro.", "Студент — бразилець.", { purpose: "contrast" }), ex("A estudante é brasileira.", "Студентка — бразилійка.", { purpose: "contrast" })] },
      { title: "Узгодження всієї групи", body: "Рід і число професійної назви визначають узгодження прикметників та інших залежних компонентів.", examples: [ex("A nova diretora apresentou o relatório.", "Нова директорка представила звіт.", { purpose: "production" })] }
    ],
    examples: [
      ex("O professor respondeu às perguntas.", "Учитель відповів на запитання.", { purpose: "comprehension" }),
      ex("A professora respondeu às perguntas.", "Учителька відповіла на запитання.", { purpose: "production" }),
      ex("A diretora assinou o documento.", "Директорка підписала документ.", { purpose: "production" }),
      ex("O presidente falou com a imprensa.", "Президент виступив перед пресою.", { purpose: "contrast" }),
      ex("A presidente falou com a imprensa.", "Президентка виступила перед пресою.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вважати одну українську форму єдиним можливим перекладом", "перевіряти португальську парадигму назви професії", "Між мовами можуть відрізнятися моделі словотвору та рід.", "predicted-l1-transfer", "high"),
      mistake("узгоджувати тільки іменник, але залишати неправильний рід артикля або прикметника", "перевіряти всю іменну групу", "Рід проявляється через кілька компонентів.", "editorial", "high"),
      mistake("оголошувати конкретну жіночу форму «неправильною» лише через незвичність для українця", "розрізняти нормативну форму та регістр/варіант", "Наявність форми має перевірятися за сучасними нормативними та описовими джерелами.", "editorial", "medium")
    ],
    ukrainian: "Українська має розвинену систему фемінітивів, але конкретні словотвірні відповідники не збігаються з португальськими. Не треба переносити український суфікс на португальську форму; спершу визначайте, чи має професійна назва окрему форму, чи є comum de dois.",
    regional: "PT-BR і PT-PT можуть відрізнятися частотністю окремих жіночих форм та стилістичними уподобаннями. Це не означає, що одна система «правильна», а інша ні; для конкретної форми важливі сучасний регістр і джерело.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "diminutives",
    slug: "diminutives",
    category: "nouns",
    titleUk: "Зменшувальні форми",
    titlePt: "Diminutivos",
    titleEn: "Diminutives",
    summary: "Суфіксальні форми, що можуть виражати малий розмір, пестливість, інтенсивність або прагматичну оцінку.",
    aliases: ["зменшувальні", "diminutives", "diminutivos", "-inho", "-zinho"],
    related: ["augmentatives", "word-formation-affixes", "noun-gender", "adjective-intensification"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Португальський diminutivo не означає автоматично «маленький». Суфікси -inho/-inha та -zinho/-zinha можуть позначати фізичний розмір, пестливість, близькість, пом'якшення, іноді іронію або суб'єктивну оцінку. Значення визначається не тільки словотвором, а й контекстом та регістром.",
    definition: "Зменшувальна форма — дериваційна форма, яка додає до базової лексеми оцінний або розмірний компонент. Найтиповіші моделі включають -inho/-inha та -zinho/-zinha, але їхня семантика не зводиться до фізичної малості.",
    uses: [
      { title: "Фізичний розмір", body: "Форма може буквально вказувати на менший предмет.", examples: [ex("uma casinha pequena", "маленький будиночок", { purpose: "comprehension" })] },
      { title: "Пестливість і близькість", body: "У звертанні або розмові diminutivo може виражати ставлення мовця.", examples: [ex("Vem cá, filhinho.", "Іди сюди, синочку.", { purpose: "contrast" })] },
      { title: "Прагматичне пом'якшення", body: "Форма може робити прохання або оцінку менш категоричною, але ефект залежить від контексту.", examples: [ex("Espera um pouquinho.", "Зачекай трішки.", { purpose: "production" })] }
    ],
    examples: [
      ex("Ele mora numa casinha perto daqui.", "Він живе в маленькому будиночку неподалік.", { purpose: "comprehension" }),
      ex("Só mais um pouquinho, por favor.", "Ще трішки, будь ласка.", { purpose: "production" }),
      ex("Ela comprou um livrinho para o filho.", "Вона купила книжечку для сина.", { purpose: "contrast" }),
      ex("Minha avó sempre me chamava de netinho.", "Бабуся завжди називала мене онучком.", { purpose: "comprehension" }),
      ex("Espera um minutinho.", "Зачекай хвилинку.", { purpose: "production" })
    ],
    mistakes: [
      mistake("перекладати кожен diminutivo лише як «маленький»", "визначати розмірне, пестливе або прагматичне значення", "Суфікс може змінювати ставлення мовця без зміни реального розміру.", "predicted-l1-transfer", "high"),
      mistake("вважати -inho нейтральним словотвором у всіх регістрах", "враховувати розмовність і прагматику", "У формальному тексті така форма може бути стилістично маркованою.", "editorial", "medium"),
      mistake("вибирати суфікс лише за українським відповідником", "засвоювати португальську словотвірну модель разом із контекстом", "Українське «-еньк-/-очк-» не має механічного португальського еквівалента.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська має багато зменшувальних суфіксів і тому сама категорія інтуїтивно знайома. Але українське пестливе значення часто кодується багатше, а португальське -inho може мати функцію, яку українською краще передати не суфіксом, а окремим словом або контекстом.",
    regional: "Diminutivos особливо чутливі до усного мовлення, віку співрозмовників, соціальної дистанції та регіонального стилю. У PT-BR вони дуже продуктивні в розмовному мовленні; це не підстава вважати всі такі форми суто бразильськими або неприйнятними в PT-PT.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "augmentatives",
    slug: "augmentatives",
    category: "nouns",
    titleUk: "Збільшувальні та інтенсивні форми",
    titlePt: "Aumentativos",
    titleEn: "Augmentatives",
    summary: "Дериваційні форми, що можуть виражати великий розмір, силу, інтенсивність або оцінку.",
    aliases: ["збільшувальні", "augmentatives", "aumentativos", "-ão", "-ona", "-aço"],
    related: ["diminutives", "word-formation-affixes", "noun-gender", "adjective-intensification"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Aumentativo, як і diminutivo, не є просто арифметичним «збільшенням» предмета. Суфіксальна форма може виражати великий розмір, інтенсивність, захоплення, грубість, іронію або негативну оцінку. Тому її інтерпретація залежить від лексеми та контексту.",
    definition: "Збільшувальна форма — дериваційна одиниця з розмірним, інтенсивним або оцінним значенням. Типові суфікси включають -ão/-ona, -aço/-aça та інші продуктивні або лексикалізовані моделі.",
    uses: [
      { title: "Великий розмір", body: "Форма може позначати предмет, більший за типовий.", examples: [ex("um casarão antigo", "великий старий будинок", { purpose: "comprehension" })] },
      { title: "Інтенсивність або оцінка", body: "Форма може посилювати характеристику, а не описувати фізичний розмір.", examples: [ex("Foi um golaço!", "Це був неймовірний гол!", { purpose: "contrast" })] },
      { title: "Іронічний або негативний ефект", body: "Оцінка може бути позитивною, негативною або іронічною залежно від ситуації.", examples: [ex("Que carrão!", "Яка крута/величезна машина!", { purpose: "production" })] }
    ],
    examples: [
      ex("Eles compraram um casarão no centro.", "Вони купили великий будинок у центрі.", { purpose: "comprehension" }),
      ex("Que carrão!", "Яка крута машина!", { purpose: "production" }),
      ex("Foi um golaço.", "Це був чудовий гол.", { purpose: "contrast" }),
      ex("Ele vive numa mansão enorme.", "Він живе у величезному особняку.", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вважати будь-який суфікс -ão простим aumentativo", "перевіряти лексикалізоване значення слова", "Не кожне слово на -ão є продуктивним збільшувальним.", "editorial", "high"),
      mistake("перекладати форму тільки через «великий»", "аналізувати оцінку та контекст", "Aumentativo може виражати інтенсивність або ставлення.", "predicted-l1-transfer", "high"),
      mistake("використовувати розмовний aumentativo в нейтральному формальному тексті без стилістичної причини", "оцінювати регістр", "Частина форм має виразний розмовний або експресивний характер.", "pedagogical", "medium")
    ],
    ukrainian: "Українська має суфікси збільшення та експресивності, але їхні словотвірні й стилістичні межі не збігаються з португальськими. Особливо важливо не прирівнювати -ão до одного українського суфікса: конкретна форма може мати лексикалізоване значення.",
    regional: "Aumentativos існують у всіх основних різновидах португальської, але продуктивність і частотність окремих форм залежать від регістру та локальної лексики. Для PT-BR характерна висока продуктивність експресивних суфіксів у розмовній мові, але не всі такі форми є суто бразильськими.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "articles-geography",
    slug: "articles-geography",
    category: "articles",
    titleUk: "Артикль із географічними назвами",
    titlePt: "Artigo com nomes geográficos",
    titleEn: "Articles with geographical names",
    summary: "Уживання означеного та нульового артикля з країнами, містами, річками, регіонами й іншими топонімами.",
    aliases: ["артикль географічні назви", "articles geography", "nomes geográficos", "topónimos"],
    related: ["articles-definite", "articles-proper-names", "articles-regional", "pt-br-pt-pt"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Португальські географічні назви не поводяться як одна однорідна група. Частина країн та регіонів уживається з означеним артиклем, частина — без нього; міста мають інші моделі, а річки та гірські назви часто мають власну традицію. Тому правило «перед назвою країни завжди ставимо o/a» так само ненадійне, як і правило «власні назви завжди без артикля».",
    definition: "Артикль із топонімом залежить від типу географічної назви та її лексикалізованої норми. У реченні артикль може бути частиною назви або граматично оформлювати топонім як іменну групу.",
    uses: [
      { title: "Країни та регіони", body: "Назви можуть мати артикль або вживатися без нього.", examples: [ex("O Brasil é grande.", "Бразилія велика.", { purpose: "production" }), ex("Portugal fica na Europa.", "Португалія розташована в Європі.", { purpose: "production" })] },
      { title: "Міста", body: "Для багатьох назв міст типовий нульовий артикль, але конкретні топоніми мають власну традицію.", examples: [ex("Lisboa é bonita.", "Лісабон красивий.", { purpose: "comprehension" })] },
      { title: "Річки та інші об'єкти", body: "Назви природних об'єктів часто утворюють іменні групи з артиклем.", examples: [ex("O Amazonas atravessa vários países.", "Амазонка протікає через кілька країн.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Viajei para o Brasil.", "Я поїхав/поїхала до Бразилії.", { purpose: "production" }),
      ex("Vivo em Portugal.", "Я живу в Португалії.", { purpose: "production" }),
      ex("Fomos a Lisboa em junho.", "Ми поїхали до Лісабона в червні.", { purpose: "comprehension" }),
      ex("O Douro é conhecido pelos seus vinhos.", "Дору відомий своїми винами.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("додавати артикль до кожної назви країни за аналогією з Brasil", "вчити топонім разом із типовим детермінатором", "Географічні назви мають лексично закріплену поведінку.", "predicted-l1-transfer", "high"),
      mistake("вважати всі міста безартиклевими без перевірки", "перевіряти конкретний топонім", "Є назви з історично або регіонально закріпленим артиклем.", "editorial", "medium"),
      mistake("ігнорувати контрактування прийменника з артиклем", "розглядати топонім як повну іменну групу", "de + o → do, em + o → no тощо.", "editorial", "high")
    ],
    ukrainian: "В українській немає португальського артикля, тому українськомовний учень часто сприймає топонім як незмінний власний іменник. У португальській треба засвоювати не лише назву, а й її синтаксичну поведінку: O Brasil, em Portugal, para a França тощо.",
    regional: "Уживання артикля з топонімами має регіональні та стилістичні відмінності, особливо з деякими особовими та географічними назвами. PT-BR і PT-PT не слід описувати одним механічним правилом; для конкретної назви важлива сучасна норма відповідного різновиду.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "articles-regional",
    slug: "articles-regional",
    category: "articles",
    titleUk: "Артиклі: регіональні відмінності",
    titlePt: "Artigos: variação regional",
    titleEn: "Regional variation in article use",
    summary: "Регіональна та стилістична варіативність артиклів, зокрема з власними назвами й присвійними.",
    aliases: ["регіональні артиклі", "articles regional", "artigos variação", "PT-BR PT-PT articles"],
    related: ["articles-definite", "articles-proper-names", "articles-possessives", "pt-br-pt-pt"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Артикль у португальській має нормативну граматику, але реальна частотність деяких моделей залежить від різновиду мови, регіону та регістру. Найвиразніше це видно з особовими іменами та присвійними конструкціями. Варіантність не означає відсутності норми: потрібно описувати конкретну модель, її поширення та стилістичні умови.",
    definition: "Регіональна варіативність артикля — систематична різниця у виборі або частотності детермінатора між різновидами португальської. Вона не скасовує загальних правил, а уточнює їхню сферу застосування.",
    uses: [
      { title: "Власні імена", body: "Перед особовими іменами в PT-PT та PT-BR можливі різні типові моделі.", examples: [ex("A Maria chegou cedo.", "Марія прийшла рано.", { purpose: "contrast" }), ex("Maria chegou cedo.", "Марія прийшла рано.", { purpose: "contrast" })] },
      { title: "Присвійні конструкції", body: "Уживання артикля перед meu/teu/seu має регіональні та стилістичні закономірності.", examples: [ex("O meu livro está aqui.", "Моя книжка тут.", { purpose: "production" }), ex("Meu livro está aqui.", "Моя книжка тут.", { purpose: "production" })] },
      { title: "Регістр", body: "Розмовний варіант не слід переносити автоматично в офіційний текст.", examples: [ex("A minha mãe ligou.", "Моя мама подзвонила.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("A Maria vive em Lisboa.", "Марія живе в Лісабоні.", { purpose: "contrast" }),
      ex("Maria vive em Lisboa.", "Марія живе в Лісабоні.", { purpose: "contrast" }),
      ex("O meu irmão trabalha aqui.", "Мій брат працює тут.", { purpose: "production" }),
      ex("Meu irmão trabalha aqui.", "Мій брат працює тут.", { purpose: "production" })
    ],
    mistakes: [
      mistake("називати один регіональний варіант єдиною нормою для всієї мови", "позначати PT-BR/PT-PT та регістр", "Плурицентрична мова має варіанти з різним поширенням.", "editorial", "high"),
      mistake("вважати відсутність артикля автоматично помилкою", "перевіряти різновид, контекст і тип власної назви", "Нульовий артикль може бути нормативним у конкретній системі.", "predicted-l1-transfer", "high"),
      mistake("переносити розмовну модель у формальний документ без перевірки", "аналізувати регістр", "Регіональна варіативність і стилістична маркованість — різні параметри.", "pedagogical", "medium")
    ],
    ukrainian: "Для українськомовного студента головна пастка — сприймати артикль як обов'язковий «аналог відмінка». Насправді вибір залежить від структури іменної групи, власної назви, різновиду португальської та регістру.",
    regional: "Ця сторінка саме про варіативність. PT-BR і PT-PT можуть відрізнятися типовою частотністю артикля з іменами та присвійними. Окремі регіони всередині Бразилії й Португалії також не є однорідними; тому твердження без просторової або стилістичної кваліфікації слід уникати.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "voces-vos",
    slug: "voces-vos",
    category: "pronouns",
    titleUk: "vocês і vós",
    titlePt: "vocês e vós",
    titleEn: "vocês vs vós",
    summary: "Сучасний множинний займенник другої особи та історично/регіонально обмежене vós.",
    aliases: ["vocês", "vós", "друга особа множини", "ви множина"],
    related: ["tu-voce", "forms-of-address", "imperative-regional", "pt-br-pt-pt"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "vocês є сучасною формою звернення до кількох співрозмовників у більшості сучасних різновидів португальської. Формально це займенник, що узгоджується з дієсловом у третій особі множини: vocês fazem, vocês foram. vós — історична друга особа множини, яка зберігається в окремих релігійних, архаїзованих, літературних або стилістично маркованих контекстах.",
    definition: "vocês — сучасний займенник другої особи множини з формами дієслова третьої особи множини. vós — традиційний займенник другої особи множини з власними дієслівними формами, нині обмежений за вживанням.",
    uses: [
      { title: "vocês + 3-тя особа множини", body: "Займенник семантично звернений до адресатів, але морфологічно керує формою множини третьої особи.", examples: [ex("Vocês sabem a resposta.", "Ви знаєте відповідь.", { purpose: "production" })] },
      { title: "vós у старих або стилізованих текстах", body: "Форма може з'являтися в релігійній, історичній чи літературній мові.", examples: [ex("Vós sois testemunhas.", "Ви є свідками.", { purpose: "comprehension" })] },
      { title: "Присвійні та об'єктні форми", body: "Для vocês сучасна система використовує відповідні форми третьої особи множини, що треба відрізняти від vos.", examples: [ex("Eu falei com vocês.", "Я поговорив/поговорила з вами.", { purpose: "production" })] }
    ],
    examples: [
      ex("Vocês podem entrar.", "Ви можете зайти.", { purpose: "production" }),
      ex("Vocês já terminaram?", "Ви вже закінчили?", { purpose: "production" }),
      ex("Falei com vocês ontem.", "Я говорив/говорила з вами вчора.", { purpose: "comprehension" }),
      ex("Vós sois bem-vindos.", "Ви ласкаво просимо.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("спрягати vocês як другу особу множини", "використовувати vocês + 3-тю особу множини", "Нормальна сучасна модель: vocês fazem, vocês têm.", "predicted-l1-transfer", "high"),
      mistake("вважати vós звичайним сучасним еквівалентом ustedes/ви", "позначати стиль і сучасну частотність", "vós стилістично та історично обмежений.", "editorial", "high"),
      mistake("плутати vos як форму vós з сучасним vocês", "розрізняти займенник і клитичну форму", "vos має іншу граматичну поведінку й не замінює vocês у всіх позиціях.", "editorial", "medium")
    ],
    ukrainian: "Українське «ви» охоплює і множину, і ввічливе звертання до однієї особи. У португальській це інша система: vocês — множинний адресат, а форма дієслова є третьою особою множини. vós не є звичайним сучасним відповідником українського «ви».",
    regional: "vocês є загальновживаним у сучасній португаломовній системі, хоча конкретні стратегії звертання відрізняються за країнами. vós має значно вужчу сферу. У PT-BR та PT-PT основне питання для учня — не «яка форма правильна», а який адресат, регістр і різновид мови маються на увазі.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "nos-a-gente",
    slug: "nos-a-gente",
    category: "pronouns",
    titleUk: "nós і a gente",
    titlePt: "nós e a gente",
    titleEn: "nós vs a gente",
    summary: "Дві сучасні моделі для значення «ми» з різною граматичною поведінкою та стилістичним розподілом.",
    aliases: ["nós", "a gente", "ми", "nós vs a gente"],
    related: ["subject-pronouns", "agreement-sv", "tu-voce", "register-and-directness"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "nós і a gente можуть позначати групу, до якої входить мовець, але граматично це не одна й та сама конструкція. nós є особовим займенником першої особи множини та вимагає форми дієслова першої особи множини. a gente — іменна конструкція, яка в сучасному вживанні часто має референцію «ми», але узгоджується з дієсловом у третій особі однини.",
    definition: "nós — стандартний займенник першої особи множини. a gente — лексикалізована іменна конструкція з колективною референцією, дуже продуктивна в сучасному усному мовленні, особливо в PT-BR, і типово поєднана з дієсловом третьої особи однини.",
    uses: [
      { title: "nós + 1-ша особа множини", body: "Модель прозора для системи особових займенників.", examples: [ex("Nós vamos amanhã.", "Ми їдемо завтра.", { purpose: "production" })] },
      { title: "a gente + 3-тя особа однини", body: "Попри значення «ми», дієслово має форму однини.", examples: [ex("A gente vai amanhã.", "Ми їдемо завтра.", { purpose: "production" })] },
      { title: "Регістр і стиль", body: "Вибір між моделями залежить від різновиду, жанру та комунікативної ситуації.", examples: [ex("Nós precisamos de mais tempo.", "Нам потрібно більше часу.", { purpose: "contrast" }), ex("A gente precisa de mais tempo.", "Нам потрібно більше часу.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Nós estudamos português todos os dias.", "Ми вчимо португальську щодня.", { purpose: "production" }),
      ex("A gente estuda português todos os dias.", "Ми вчимо португальську щодня.", { purpose: "production" }),
      ex("A gente chegou tarde.", "Ми прийшли пізно.", { purpose: "comprehension" }),
      ex("Nós chegámos tarde.", "Ми прийшли пізно.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("казати a gente vamos", "узгоджувати a gente з 3-ю особою однини", "Типова сучасна модель: a gente vai, a gente chegou.", "predicted-l1-transfer", "high"),
      mistake("вважати a gente лише буквальним «люди» в кожному контексті", "визначати його референцію", "У сучасній розмовній мові конструкція часто має інклюзивне значення «ми».", "editorial", "high"),
      mistake("вважати nós і a gente повністю взаємозамінними за стилем", "враховувати регістр і різновид", "Граматичний контраст не зводиться до синонімії.", "pedagogical", "medium")
    ],
    ukrainian: "Українське «ми» не змінює дієслово за моделлю, аналогічною a gente. Для українця головна пастка — семантично перекладати обидві конструкції як «ми», а потім автоматично ставити 1-шу особу множини після a gente.",
    regional: "a gente особливо продуктивна в PT-BR, але не відсутня в PT-PT. Її частотність, соціальна маркованість і конкуренція з nós залежать від регіону та жанру; тому не слід перетворювати «a gente = тільки Бразилія» на правило.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "prepositional-pronouns",
    slug: "prepositional-pronouns",
    category: "pronouns",
    titleUk: "Займенники після прийменників",
    titlePt: "Pronomes pessoais preposicionados",
    titleEn: "Prepositional pronouns",
    summary: "Форми mim, ti, si, nós/vós та складені форми після прийменників.",
    aliases: ["займенники після прийменників", "prepositional pronouns", "pronomes preposicionados", "mim", "ti", "si"],
    related: ["personal-pronouns", "object-pronouns", "prep-com", "possessives"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Після багатьох прийменників португальська використовує не підметові форми eu/tu, а спеціальні форми mim/ti/si та інші прийменникові займенники. Окрему увагу треба приділити конструкціям com, де виникають злиті форми comigo, contigo, consigo, connosco/conosco. Це граматична система, а не довільний набір винятків.",
    definition: "Прийменниковий особовий займенник — форма, яка функціонує після прийменника або входить до конструкції, де прийменник вибирає спеціальну займенникову форму: para mim, de ti, sem nós, com ela.",
    uses: [
      { title: "Після звичайного прийменника", body: "Після para, de, sem, entre та інших прийменників уживаються відповідні форми займенника.", examples: [ex("Isto é para mim.", "Це для мене.", { purpose: "production" }), ex("Ele falou de ti.", "Він говорив про тебе.", { purpose: "production" })] },
      { title: "si для рефлексивної/кореферентної інтерпретації", body: "si не є просто формальнішим ti; воно має власні рефлексивні та кореферентні умови.", examples: [ex("Ela levou o livro consigo.", "Вона взяла книжку із собою.", { purpose: "contrast" })] },
      { title: "com + займенник", body: "com утворює лексикалізовані злиті форми.", examples: [ex("Vem comigo.", "Іди зі мною.", { purpose: "production" }), ex("Fala connosco.", "Поговори з нами.", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("Entre mim e ti, está tudo bem.", "Між мною і тобою все гаразд.", { purpose: "production" }),
      ex("Isto fica para ti.", "Це залишається тобі.", { purpose: "production" }),
      ex("Ela veio comigo.", "Вона прийшла зі мною.", { purpose: "comprehension" }),
      ex("Ele trouxe o documento consigo.", "Він приніс документ із собою.", { purpose: "contrast" }),
      ex("Precisamos de falar com eles.", "Нам потрібно поговорити з ними.", { purpose: "production" })
    ],
    mistakes: [
      mistake("використовувати eu/tu після кожного прийменника", "запам'ятовувати парадигму прийменникових форм", "Нормальні форми: para mim, de ti, sem nós.", "predicted-l1-transfer", "high"),
      mistake("вважати mim формою, яка може бути звичайним підметом", "розрізняти синтаксичну позицію", "Після прийменника mim не стає підметовим займенником.", "editorial", "high"),
      mistake("утворювати *com mim або *com ti", "використовувати злиті форми comigo, contigo тощо", "com має окрему парадигму з особовими займенниками.", "editorial", "high")
    ],
    ukrainian: "Українські форми після прийменників частково розрізняються від форм називного відмінка, тому сама ідея не чужа. Проте португальська не має відмінювання займенника за українською моделлю: треба засвоїти конкретні форми mim, ti, si, comigo тощо.",
    regional: "Основна система спільна. Написання connosco/conosco та деякі варіанти займенникових форм можуть відрізнятися між PT-PT і PT-BR, тому в матеріалі важливо зберігати регіональну мітку там, де форма справді варіює.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  })
,
  page({
    id: "demonstratives",
    slug: "demonstratives",
    category: "pronouns",
    titleUk: "Вказівні займенники й детермінативи",
    titlePt: "Demonstrativos",
    titleEn: "Demonstratives",
    summary: "este, esse, aquele та isto, isso, aquilo: просторове, дискурсивне й анафоричне відсилання.",
    aliases: ["вказівні", "demonstratives", "demonstrativos", "este", "esse", "aquele"],
    related: ["personal-pronouns", "articles-definite", "prep-demonstrative", "information-structure"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Португальські demonstrativos не зводяться до механічної трійки «цей — той — он той». Вибір este/esse/aquele може залежати від простору, дискурсу, спільної уваги та різновиду португальської. Окремо треба розрізняти атрибутивні форми este livro та самостійні isto, isso, aquilo.",
    definition: "Вказівний займенник або детермінатив указує на референт через просторовий, дискурсивний чи анафоричний зв'язок із ситуацією мовлення.",
    uses: [
      { title: "Вказування в просторі", body: "Три серії можуть протиставляти близькість і віддаленість, але просторові межі не є математичними.", examples: [ex("Este livro está aqui.", "Ця книжка тут.", { purpose: "production" }), ex("Aquele prédio fica ali.", "Та будівля он там.", { purpose: "comprehension" })] },
      { title: "Дискурсивне відсилання", body: "Вказівний може відсилати не до фізичного предмета, а до вже сказаного або наступного змісту.", examples: [ex("Isso é importante.", "Це важливо.", { purpose: "contrast" })] },
      { title: "Самостійні форми", body: "isto, isso, aquilo не узгоджуються з пропущеним іменником так, як este/essa.", examples: [ex("Não quero isso.", "Я цього не хочу.", { purpose: "production" })] }
    ],
    examples: [
      ex("Este problema é difícil.", "Ця проблема складна.", { purpose: "production" }),
      ex("Esse problema já foi resolvido.", "Цю/ту проблему вже розв'язано.", { purpose: "contrast" }),
      ex("Aquele dia foi inesquecível.", "Той день був незабутнім.", { purpose: "comprehension" }),
      ex("Isto não faz sentido.", "Це не має сенсу.", { purpose: "production" })
    ],
    mistakes: [
      mistake("вибирати este/esse/aquele лише за українським «цей/той»", "враховувати простір і дискурс", "Дискурсивна відстань може бути важливішою за фізичну.", "predicted-l1-transfer", "high"),
      mistake("плутати este з isto та esse з isso", "розрізняти форми перед іменником і самостійні форми", "Este livro та isto são diferentes за синтаксичною будовою.", "editorial", "high"),
      mistake("вважати систему однаковою в усіх різновидах", "позначати регіональну варіативність", "У PT-BR і PT-PT розподіл серій може частково відрізнятися.", "editorial", "medium")
    ],
    ukrainian: "Українські «цей/той» також мають просторове й дискурсивне значення, тому базова категорія знайома. Водночас португальська має три серії та окремі нейтральні форми isto/isso/aquilo; українське «це» не дає автоматичної відповідності кожній із них.",
    regional: "Розподіл este/esse/aquele є однією з ділянок, де опис PT-BR і PT-PT не варто зводити до однієї схеми. Значення формується простором, дискурсом і локальною нормою.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "possessives",
    slug: "possessives",
    category: "pronouns",
    titleUk: "Присвійні форми",
    titlePt: "Possessivos",
    titleEn: "Possessives",
    summary: "meu, teu, seu, nosso, vosso та їхні форми: узгодження, референція й неоднозначність.",
    aliases: ["присвійні", "possessives", "possessivos", "meu", "seu", "nosso"],
    related: ["articles-possessives", "determiners-agreement", "personal-pronouns", "prepositional-pronouns"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Португальські присвійні форми узгоджуються насамперед із позначуваним предметом, а не з власником. meu livro і minha casa показують рід і число речі. Особливої уваги потребує seu, який може бути неоднозначним щодо того, кому саме належить предмет.",
    definition: "Присвійна форма виражає відношення володіння або належності. У португальській вона має форми, що узгоджуються з іменником за родом і числом, тоді як особа власника кодується самою парадигмою.",
    uses: [
      { title: "Узгодження з річчю", body: "meu/minha та nosso/nossa змінюються відповідно до іменника.", examples: [ex("o meu livro", "моя книжка? — ні, моя книга: мій підручник", { purpose: "contrast" }), ex("a minha casa", "мій будинок? — ні, мій дім; форма жіночого роду", { purpose: "contrast" })] },
      { title: "Референція власника", body: "seu може стосуватися різних осіб, тому контекст або явна конструкція часто потрібні для зняття неоднозначності.", examples: [ex("Ele encontrou o seu irmão.", "Він зустрів свого/його брата.", { purpose: "comprehension" })] },
      { title: "Артикль і присвійний", body: "Окремо треба вчити, коли присвійна група має артикль у відповідному різновиді та регістрі.", examples: [ex("O meu carro está aqui.", "Моя машина тут.", { purpose: "production" })] }
    ],
    examples: [
      ex("A minha irmã mora aqui.", "Моя сестра живе тут.", { purpose: "production" }),
      ex("Os nossos amigos chegaram.", "Наші друзі прийшли.", { purpose: "production" }),
      ex("Ele perdeu o seu passaporte.", "Він загубив свій/його паспорт.", { purpose: "contrast" }),
      ex("Onde estão as tuas chaves?", "Де твої ключі?", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("узгоджувати meu/minha з власником", "узгоджувати присвійне з іменником", "meu livro, minha casa: рід визначає річ.", "predicted-l1-transfer", "high"),
      mistake("вважати seu однозначним", "перевіряти референцію власника за контекстом", "Для ясності може знадобитися dele/dela або інша конструкція.", "editorial", "high"),
      mistake("переносити модель артикля з одного різновиду на інший", "перевіряти PT-BR/PT-PT та регістр", "Артикль перед присвійним має регіональні й стилістичні закономірності.", "editorial", "medium")
    ],
    ukrainian: "Українське «мій/моя/моє» теж узгоджується з предметом, тому тут є корисна паралель. Складність для українця виникає через систему артикля та через неоднозначність seu, яка не має простого українського відповідника.",
    regional: "У PT-BR і PT-PT є відмінності у частотності артикля перед присвійним. Форми самого присвійного в основному спільні, але конкретна конструкція залежить від різновиду й регістру.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "indefinites",
    slug: "indefinites",
    category: "pronouns",
    titleUk: "Неозначені займенники та детермінативи",
    titlePt: "Pronomes e determinantes indefinidos",
    titleEn: "Indefinites",
    summary: "alguém, ninguém, algum, nenhum, todo, tudo та інші форми невизначеної референції.",
    aliases: ["неозначені", "indefinites", "indefinidos", "alguém", "ninguém", "todo"],
    related: ["negation-ninguem", "quantifiers-overview", "articles-indefinite", "generic-reference"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Неозначені форми утворюють не один список, а систему різних типів референції: особа невідома, кількість невизначена, вибір довільний, множина охоплена повністю тощо. alguém і algum не є взаємозамінними, так само як tudo і todo.",
    definition: "Неозначені займенники та детермінативи кодують невизначену або неідентифіковану референцію, кількість, вибір чи охоплення множини.",
    uses: [
      { title: "Особа чи річ", body: "alguém і ninguém типово стосуються людей, тоді як algo і nada — речей або ситуацій.", examples: [ex("Alguém ligou.", "Хтось подзвонив.", { purpose: "production" }), ex("Ninguém respondeu.", "Ніхто не відповів.", { purpose: "production" })] },
      { title: "Детермінатив перед іменником", body: "algum, nenhum, todo та інші форми супроводжують іменник і узгоджуються з ним.", examples: [ex("Alguns alunos chegaram.", "Деякі студенти прийшли.", { purpose: "comprehension" })] },
      { title: "Займенникове вживання", body: "todo і tudo мають різну граматичну будову: перше узгоджується з іменником, друге є самостійною формою.", examples: [ex("Tudo está pronto.", "Усе готово.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Algum aluno sabe a resposta.", "Якийсь студент знає відповідь.", { purpose: "production" }),
      ex("Nenhum aluno faltou.", "Жоден студент не був відсутній.", { purpose: "production" }),
      ex("Tudo correu bem.", "Усе пройшло добре.", { purpose: "comprehension" }),
      ex("Qualquer pessoa pode participar.", "Будь-яка людина може взяти участь.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("плутати alguém/algum і tudo/todo", "визначати синтаксичну позицію та тип референції", "Неозначені форми мають різні граматичні ролі.", "predicted-l1-transfer", "high"),
      mistake("вживати *ninguém não як універсальну модель", "враховувати negative concord", "Заперечні елементи взаємодіють із não за правилами португальського речення.", "editorial", "high"),
      mistake("вважати qualquer простим синонімом algum", "розрізняти невизначеність і довільний вибір", "У конкретному контексті значення може бути «будь-хто/будь-який».", "semantic", "medium")
    ],
    ukrainian: "Українські «хтось/ніхто/щось/ніщо/кожен/будь-хто» дають добру семантичну опору, але синтаксична класифікація не збігається повністю. Особливо важливо не перекладати todo і tudo одним словом «все» без урахування їхньої форми.",
    regional: "Базова система неозначених форм спільна для PT-BR і PT-PT. Різниця частіше стосується частотності, розмовних альтернатив та дискурсивних уподобань.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "interrogative-pronouns",
    slug: "interrogative-pronouns",
    category: "pronouns",
    titleUk: "Питальні займенники",
    titlePt: "Pronomes interrogativos",
    titleEn: "Interrogative pronouns",
    summary: "que, quem, qual, quanto та їхня роль у спеціальних питаннях.",
    aliases: ["питальні займенники", "interrogative pronouns", "interrogativos", "que", "quem", "qual"],
    related: ["wh-questions", "question-word-order", "relative-pronouns"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Питальні форми визначають не тільки «питальне слово», а й тип інформації, яку шукає мовець. que зазвичай запитує про ідентичність або клас предмета, quem — про особу, qual — про вибір у множині можливостей, quanto — про кількість або міру.",
    definition: "Питальний займенник — форма, що займає синтаксичну позицію невідомого компонента та формує спеціальне питання.",
    uses: [
      { title: "Особа", body: "quem запитує про людину або людей.", examples: [ex("Quem chegou?", "Хто прийшов?", { purpose: "production" })] },
      { title: "Предмет або зміст", body: "que та o que беруть участь у питаннях про предмет, подію або зміст.", examples: [ex("O que aconteceu?", "Що сталося?", { purpose: "production" })] },
      { title: "Вибір і кількість", body: "qual/qual(is) та quanto(a/os/as) узгоджуються з відповідними іменними структурами.", examples: [ex("Qual livro preferes?", "Яку книжку ти віддаєш перевагу?", { purpose: "contrast" }), ex("Quantos livros leste?", "Скільки книжок ти прочитав/прочитала?", { purpose: "production" })] }
    ],
    examples: [
      ex("Quem telefonou?", "Хто подзвонив?", { purpose: "production" }),
      ex("O que procuras?", "Що ти шукаєш?", { purpose: "production" }),
      ex("Qual é a tua escolha?", "Який твій вибір?", { purpose: "comprehension" }),
      ex("Quanto custa?", "Скільки це коштує?", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("використовувати quem для предметів", "розрізняти особу та неособовий референт", "Для предмета типово que/o que або відповідна конструкція.", "predicted-l1-transfer", "high"),
      mistake("вважати qual повним синонімом que", "розрізняти ідентифікацію та вибір", "qual часто передбачає вибір із набору.", "semantic", "high"),
      mistake("ігнорувати узгодження quanto", "узгоджувати форму з іменником", "quanto/quantos/quantas мають граматичні форми.", "editorial", "medium")
    ],
    ukrainian: "Українські «хто/що/який/скільки» добре показують семантичний поділ, але португальські конструкції мають власні обмеження й позиційні моделі. Особливо не слід механічно переносити українське «що» на всі значення que/o que.",
    regional: "Основні питальні форми спільні. Відмінності PT-BR/PT-PT помітні передусім у синтаксисі питань, а не в самій базовій парадигмі займенників.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  }),
  page({
    id: "relative-pronouns",
    slug: "relative-pronouns",
    category: "pronouns",
    titleUk: "Відносні займенники: система",
    titlePt: "Pronomes relativos",
    titleEn: "Relative pronouns",
    summary: "Огляд que, quem, o qual, cujo, onde та їхньої синтаксичної ролі у відносних конструкціях.",
    aliases: ["відносні займенники", "relative pronouns", "pronomes relativos", "que", "quem", "cujo"],
    related: ["relative-que", "relative-quem", "relative-o-qual", "relative-cujo", "relative-onde"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Відносний займенник одночасно пов'язує підрядну частину з антецедентом і займає синтаксичну позицію всередині підрядної. Тому вибір que, quem, o qual, cujo або onde залежить не тільки від перекладу «який/хто/чий», а й від типу антецедента, прийменника та потрібного зв'язку.",
    definition: "Відносний займенник — елемент відносної конструкції, який встановлює зв'язок з антецедентом і виконує синтаксичну роль у підрядній частині.",
    uses: [
      { title: "Загальний відносний que", body: "que є найчастотнішою формою для багатьох антецедентів.", examples: [ex("O livro que comprei é novo.", "Книжка, яку я купив/купила, нова.", { purpose: "production" })] },
      { title: "Особа та прийменник", body: "quem особливо типовий для людських антецедентів у відповідних конструкціях.", examples: [ex("A pessoa com quem falei chegou.", "Людина, з якою я говорив/говорила, прийшла.", { purpose: "contrast" })] },
      { title: "Посесивний зв'язок", body: "cujo узгоджується з наступним іменником, а не з власником.", examples: [ex("A autora cujo livro li chegou.", "Авторка, книжку якої я прочитав/прочитала, прийшла.", { purpose: "production" })] }
    ],
    examples: [
      ex("A casa onde moro é antiga.", "Будинок, де я живу, старий.", { purpose: "production" }),
      ex("O professor a quem escrevi respondeu.", "Викладач, якому я написав/написала, відповів.", { purpose: "comprehension" }),
      ex("O projeto no qual trabalho é grande.", "Проєкт, над яким я працюю, великий.", { purpose: "contrast" }),
      ex("Conheci a pessoa cujo trabalho admiras.", "Я познайомився/познайомилася з людиною, чию роботу ти цінуєш.", { purpose: "production" })
    ],
    mistakes: [
      mistake("перекладати всі відносні форми одним українським «який»", "визначати синтаксичну роль і тип антецедента", "Форми мають різні обмеження.", "predicted-l1-transfer", "high"),
      mistake("плутати cujo з присвійним займенником", "перевіряти узгодження з наступним іменником", "cujo livro, cuja casa.", "editorial", "high"),
      mistake("ігнорувати прийменник перед відносною формою", "вивчати всю рамку: com quem, a quem, no qual тощо", "Прийменник часто є частиною синтаксичної моделі.", "editorial", "high")
    ],
    ukrainian: "Українська має відносні «який, хто, чий, де», тому категорія добре знайома. Водночас португальський вибір форми тісно пов'язаний із прийменником і структурою відносної конструкції. Особливо важливо не переносити українське «який» на cujo або quem.",
    regional: "Базовий інвентар спільний. PT-BR і PT-PT можуть відрізнятися в розмовних стратегіях прийменникових відносних конструкцій, тому формальний o qual не слід трактувати як єдину модель у всіх регістрах.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ]
  })

];
