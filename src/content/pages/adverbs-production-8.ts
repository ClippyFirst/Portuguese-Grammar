import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const sources = [
  { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: "https://gulbenkian.pt/publications/gramatica-do-portugues/" },
  { label: "Ciberdúvidas da Língua Portuguesa", url: "https://ciberduvidas.iscte-iul.pt/" }
];

export const pages: GrammarPage[] = [
  page({
    id: "adverb-agreement-and-invariability", slug: "adverb-agreement-and-invariability", category: "adverbs",
    titleUk: "Незмінність прислівників і псевдопогодження", titlePt: "Invariabilidade dos advérbios e concordância aparente", titleEn: "Adverb agreement and invariability",
    summary: "Чому типовий португальський прислівник не узгоджується, як прикметник, і як відрізняти прислівник від формально подібних слів.",
    aliases: ["незмінність прислівників","adverb agreement and invariability","invariabilidade dos advérbios"],
    related: ["adverbs-vs-adjectives","adverb-formation","adverb-adjective","adverb-position"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Типові прислівники португальської є незмінними: вони не змінюють закінчення через рід і число слова, яке модифікують. Найчастіше помилка виникає тоді, коли учень бачить форму, що семантично відповідає українському прикметнику, і намагається узгодити її. Інша проблема — слова на кшталт mesmo, meio або bastante, які в одних конструкціях можуть мати прикметникову чи займенникову природу, а в інших — прислівникову.",
    definition: "Прислівникова незмінність означає відсутність морфологічного узгодження типового прислівника з родом і числом модифікованого компонента.",
    formulas: [
      { label: "Незмінний прислівник", pattern: "ADV + verbo/adjetivo/advérbio", note: "Форма ADV не змінюється." },
      { label: "Прикметниковий омонім", pattern: "ADJ → gênero/número", note: "Якщо слово є прикметником, узгодження можливе." },
      { label: "Перевірка", pattern: "qual é a função da palavra?", note: "Функція важливіша за поверхневу форму." }
    ],
    formation: "Незмінність є граматичною властивістю прислівникового вживання. Деякі лексеми мають паралельне вживання як прикметники, займенники або кількісні визначники, тому їхня форма не завжди достатня для класифікації.",
    uses: [
      { title: "Типові незмінні форми", body: "bem, mal, muito у прислівниковому значенні та інші типові прислівники не узгоджуються.", examples: [ex("Elas trabalham muito.", "Вони багато працюють.", { purpose: "contrast" })] },
      { title: "Пограничні випадки", body: "У конструкції meio cansada meio є прислівником ступеня й залишається незмінним; у meio-dia це вже частина іншої лексичної структури.", examples: [ex("Ela está meio cansada.", "Вона трохи втомлена.", { purpose: "contrast" })] },
      { title: "Прикметникове вживання", body: "Те саме слово може змінювати поведінку, якщо переходить у прикметникову функцію.", examples: [ex("Eles estão sós.", "Вони самі.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Elas trabalham muito.", "Вони багато працюють.", { purpose: "contrast" }),
      ex("Ela está meio cansada.", "Вона трохи втомлена.", { purpose: "contrast" }),
      ex("Eles chegaram cedo.", "Вони прийшли рано.", { purpose: "production" }),
      ex("Eles estão sós.", "Вони самі.", { purpose: "contrast" })
    ],
    nonUses: ["Не додавайте -a/-as/-os до прислівника лише тому, що підмет має жіночий або множинний рід.", "Не визначайте частину мови лише за перекладом українською.", "Не переносіть прикметникове узгодження на прислівникове вживання лексем із кількома функціями."],
    markers: ["bem","mal","muito","meio","cedo","só"],
    mistakes: [
      mistake("Elas trabalham muitas", "Elas trabalham muito", "У прислівниковому значенні muito незмінне."),
      mistake("Ela está meia cansada", "Ela está meio cansada", "У цій конструкції meio — прислівник ступеня."),
      mistake("Відсутність узгодження означає, що слово не може бути прислівником", "визначати функцію за синтаксичним оточенням", "Незмінність якраз типова для прислівників.")
    ],
    ukrainian: "Українська також має незмінні прислівники, тому базовий принцип знайомий. Особливо важливо для українського учня не переносити узгодження з прикметників на португальські прислівники.",
    comparisonUk: "«Вони багато працюють» → elas trabalham muito: muito не стає muitas. Натомість прикметникове слово узгоджується там, де воно справді має прикметникову функцію.",
    regional: "Незмінність типових прислівників є базовою властивістю португальської в різновидах PT-BR і PT-PT. Пограничні лексеми можуть мати різні синтаксичні функції залежно від конструкції.",
    sources
  }),
  page({
    id: "adverbs-ending-in-mente", slug: "adverbs-ending-in-mente", category: "adverbs",
    titleUk: "Прислівники на -mente", titlePt: "Advérbios terminados em -mente", titleEn: "Adverbs ending in -mente",
    summary: "Утворення прислівників на -mente, вибір прикметникової основи, наголос і поведінка в реченні.",
    aliases: ["прислівники на mente","adverbs ending in mente","advérbios terminados em mente"],
    related: ["adverb-formation","semantic-interpretation-of-mente-adverbs","adverb-position","secondary-stress"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Суфікс -mente є одним із найпродуктивніших засобів творення португальських прислівників від прикметників. Він дозволяє перетворити прикметникову характеристику на обставинну або модифікаторну: claro → claramente, rápido → rapidamente. Проте словотвір не зводиться до механічного додавання букв: для жіночих форм прикметника діє окрема морфологічна закономірність, а семантична інтерпретація залежить від типу прикметника та контексту.",
    definition: "Прислівник на -mente — похідний прислівник, утворений від прикметникової основи за допомогою суфікса -mente.",
    formulas: [
      { label: "Звичайна основа", pattern: "clara + mente → claramente", note: "Для прикметників на -o/-a орієнтиром є жіноча форма." },
      { label: "Основа без зміни", pattern: "feliz + mente → felizmente", note: "Для багатьох інших прикметників форма збігається з основою." },
      { label: "Координація", pattern: "lenta e cuidadosamente", note: "У серії прислівників -mente може повторюватися або опускатися за стилістичними правилами." }
    ],
    formation: "За традиційним описом -mente приєднується до жіночої форми прикметника: rápida → rapidamente, clara → claramente. Якщо прикметник має одну форму для роду, вона є основою: feliz → felizmente. У похідних прислівниках наголос і ритм слова мають власну просодичну організацію.",
    uses: [
      { title: "Спосіб дії", body: "Прислівник може описувати спосіб виконання дії.", examples: [ex("Ele respondeu rapidamente.", "Він швидко відповів.", { purpose: "production" })] },
      { title: "Оцінна або дискурсивна інтерпретація", body: "Деякі форми на -mente коментують не саму фізичну дію, а ставлення мовця до ситуації.", examples: [ex("Felizmente, tudo correu bem.", "На щастя, усе минуло добре.", { purpose: "contrast" })] },
      { title: "Поширені прикметникові основи", body: "Основою можуть бути прикметники різних семантичних класів.", examples: [ex("Ela explicou claramente o problema.", "Вона чітко пояснила проблему.", { purpose: "production" })] }
    ],
    examples: [
      ex("Ele respondeu rapidamente.", "Він швидко відповів.", { purpose: "production" }),
      ex("Ela explicou claramente o problema.", "Вона чітко пояснила проблему.", { purpose: "production" }),
      ex("Felizmente, tudo correu bem.", "На щастя, усе минуло добре.", { purpose: "contrast" }),
      ex("O relatório foi cuidadosamente revisto.", "Звіт було ретельно переглянуто.", { purpose: "production" })
    ],
    nonUses: ["Не творіть форму на -mente від довільного слова без перевірки його прикметникового статусу.", "Не вважайте всі -mente-прислівники обставинами способу.", "Не вважайте -mente українським суфіксом із повністю тотожним розподілом значень."],
    markers: ["-mente","claramente","rapidamente","felizmente","cuidadosamente"],
    mistakes: [
      mistake("rápido + mente → rapidomente", "rápida + mente → rapidamente", "У нормативній словотвірній моделі враховується жіноча форма прикметника."),
      mistake("felizmente = «щасливо» тільки як спосіб дії", "перевіряти область дії та дискурсивну функцію", "У felizmente можливе оцінне реченнєве вживання."),
      mistake("Кожне слово на -mente має однакову синтаксичну позицію", "враховувати scope і тип модифікації", "Позиція залежить від функції та інформаційної структури.")
    ],
    ukrainian: "Українські прислівники часто мають інші словотвірні моделі, тому порівнювати треба не буквальну форму, а функцію. Для українського учня особливо корисно бачити зв'язок прикметник → -mente-прислівник як регулярну португальську модель.",
    comparisonUk: "rápida → rapidamente відповідає українському «швидка → швидко», clara → claramente — «чітка → чітко», але конкретна семантика може ширшою за просту обставину способу.",
    regional: "Словотвір на -mente продуктивний у PT-BR і PT-PT. Різниця між різновидами частіше проявляється у частотності окремих форм та їхньому стилістичному розподілі, а не в базовому словотвірному правилі.",
    sources
  }),
  page({
    id: "semantic-interpretation-of-mente-adverbs", slug: "semantic-interpretation-of-mente-adverbs", category: "adverbs",
    titleUk: "Семантична інтерпретація прислівників на -mente", titlePt: "Interpretação semântica dos advérbios em -mente", titleEn: "Semantic interpretation of -mente adverbs",
    summary: "Як відрізняти модифікацію способу, оцінку, епістемічність та інші значення прислівників на -mente.",
    aliases: ["семантика прислівників на mente","semantic interpretation of mente adverbs","interpretação semântica dos advérbios em mente"],
    related: ["adverbs-ending-in-mente","adverb-scope","sentence-adverbs","evaluative-adverbs","epistemic-adverbs"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Форма на -mente не визначає автоматично значення. Одна й та сама словотвірна модель може дати прислівник способу, оцінний коментар або модифікатор ступеня впевненості. Тому для правильної інтерпретації треба визначити область дії прислівника: чи він описує спосіб події, чи коментує всю пропозицію.",
    definition: "Семантична інтерпретація -mente-прислівника — визначення того компонента значення висловлення, який модифікується похідним прислівником.",
    formulas: [
      { label: "Спосіб", pattern: "[VP ADV]", note: "Прислівник характеризує спосіб виконання дії." },
      { label: "Оцінка", pattern: "ADV, [clause]", note: "Мовець оцінює ситуацію загалом." },
      { label: "Епістемічність", pattern: "ADV, [clause]", note: "Модифікується ступінь упевненості в пропозиції." }
    ],
    formation: "Форма однакова словотвірно, але інтерпретація визначається лексичним значенням прикметникової основи, синтаксичною позицією, prosody та контекстом.",
    uses: [
      { title: "Модифікація способу", body: "Прислівник відповідає на питання про спосіб виконання дії.", examples: [ex("Ele falou calmamente.", "Він спокійно говорив.", { purpose: "production" })] },
      { title: "Оцінна модифікація", body: "Прислівник виражає оцінку ситуації.", examples: [ex("Infelizmente, o prazo terminou.", "На жаль, термін завершився.", { purpose: "contrast" })] },
      { title: "Модифікація пропозиції", body: "Деякі прислівники на -mente можуть стосуватися істиннісної або модальної оцінки.", examples: [ex("Provavelmente, haverá mudanças.", "Ймовірно, будуть зміни.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Ele falou calmamente.", "Він спокійно говорив.", { purpose: "production" }),
      ex("Infelizmente, o prazo terminou.", "На жаль, термін завершився.", { purpose: "contrast" }),
      ex("Provavelmente, haverá mudanças.", "Ймовірно, будуть зміни.", { purpose: "contrast" }),
      ex("Ela respondeu cuidadosamente.", "Вона відповіла обережно/ретельно.", { purpose: "production" })
    ],
    nonUses: ["Не класифікуйте всі -mente-прислівники як manner adverbs.", "Не визначайте scope тільки за позицією.", "Не ототожнюйте український переклад із єдиною можливою португальською інтерпретацією."],
    markers: ["calmamente","cuidadosamente","infelizmente","felizmente","provavelmente"],
    mistakes: [
      mistake("Infelizmente = «нещасливо» як спосіб виконання дії", "перевіряти, чи є конкретна дія, яку можна описати цим прислівником", "Часто це оцінний коментар до всієї ситуації."),
      mistake("Provavelmente описує спосіб дії", "перевіряти епістемічний scope", "Йдеться про міру впевненості мовця.")
    ],
    ukrainian: "Українська теж розрізняє «спокійно говорив» та «на жаль, ...», хоча формально обидва елементи можуть бути прислівниковими. Тому найкращий метод — аналізувати область дії, а не тільки частину мови.",
    comparisonUk: "calmamente ≈ «спокійно» у manner-вживанні; infelizmente ≈ «на жаль»; provavelmente ≈ «ймовірно». Переклад показує функцію, але не замінює синтаксичний аналіз.",
    regional: "Основні семантичні класи -mente-прислівників є спільними для PT-BR і PT-PT. Позиційні та просодичні переваги можуть різнитися залежно від різновиду й жанру.",
    sources
  }),
  page({
    id: "portuguese-vs-ukrainian-adverb-placement", slug: "portuguese-vs-ukrainian-adverb-placement", category: "adverbs",
    titleUk: "Розміщення прислівників: португальська та українська", titlePt: "Posição dos advérbios: português e ucraniano", titleEn: "Portuguese vs Ukrainian adverb placement",
    summary: "Зіставлення позиції прислівників у португальській та українській: дієслівна група, реченнєві модифікатори, фокус і просодія.",
    aliases: ["португальська та українська позиція прислівників","Portuguese vs Ukrainian adverb placement","posição dos advérbios português ucraniano"],
    related: ["adverb-position","adverb-scope","adverbial-modification-of-clause","focus-adverbs"],
    status: "review", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Українська має значно вільніший порядок слів, тому буквальне перенесення позиції прислівника з українського речення на португальське може створювати неприродний або змінений фокус. Португальська теж допускає кілька позицій, але вони взаємодіють із типом прислівника, синтаксичною інтеграцією, інформаційною структурою та просодією.",
    definition: "Зіставний аналіз позиції прислівників описує не «правильне одне місце», а набір позицій і факторів, що визначають їхню природність.",
    formulas: [
      { label: "Початкова позиція", pattern: "ADV, oração", note: "Часто природна для реченнєвої рамки або дискурсивного коментаря." },
      { label: "Після підмета", pattern: "S + ADV + V", note: "Можлива для багатьох прислівників, але не універсальна." },
      { label: "Після дієслова", pattern: "V + ADV", note: "Типова для багатьох manner adverbs." }
    ],
    formation: "Позиція залежить від класу прислівника: manner, frequency, degree, focus, sentence adverb та інші класи мають різні синтаксичні властивості. Контекст і prosody можуть робити кілька позицій прийнятними.",
    uses: [
      { title: "Реченнєва рамка", body: "Часові або оцінні модифікатори можуть стояти на початку.", examples: [ex("Hoje, trabalhamos em casa.", "Сьогодні ми працюємо вдома.", { purpose: "contrast" })] },
      { title: "Модифікація дії", body: "Manner adverb часто розміщується близько до дієслівної групи.", examples: [ex("Ela respondeu calmamente.", "Вона спокійно відповіла.", { purpose: "production" })] },
      { title: "Фокус", body: "Focus adverbs мають стояти так, щоб їхня область дії була однозначною.", examples: [ex("Só ele respondeu.", "Лише він відповів.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Hoje, trabalhamos em casa.", "Сьогодні ми працюємо вдома.", { purpose: "contrast" }),
      ex("Ela respondeu calmamente.", "Вона спокійно відповіла.", { purpose: "production" }),
      ex("Só ele respondeu.", "Лише він відповів.", { purpose: "contrast" }),
      ex("Ele provavelmente chegará amanhã.", "Він, імовірно, приїде завтра.", { purpose: "contrast" })
    ],
    nonUses: ["Не вважайте українську перестановку слів автоматично португальською.", "Не робіть висновок про неприродність тільки тому, що позиція відрізняється від підручникової.", "Не аналізуйте позицію без урахування scope і prosody."],
    markers: ["hoje","calmamente","só","provavelmente","amanhã"],
    mistakes: [
      mistake("Ставити кожен прислівник у будь-яке місце, як в українській", "визначати клас і область дії", "Португальська допускає варіативність, але не необмежену перестановку."),
      mistake("Só ele respondeu і Ele respondeu só однакові за focus", "перевіряти область дії só", "Позиція може змінити те, що обмежується.")
    ],
    ukrainian: "Українська вільніша у перестановці компонентів завдяки розвиненій морфології. Португальська сильніше покладається на позицію, синтаксис і просодію для інтерпретації.",
    comparisonUk: "Порівнюйте не слова окремо, а область дії: «лише він відповів» і «він відповів лише...» можуть мати різний focus. Українська дозволяє більше перестановок без зміни базової граматичної структури.",
    regional: "PT-BR і PT-PT мають спільну базову систему, але розмовна мова та окремі позиційні переваги можуть відрізнятися. Конкретний варіант слід оцінювати разом із жанром і prosody.",
    sources
  })
];
