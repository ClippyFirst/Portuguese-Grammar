import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_II = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const GULBENKIAN_III = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const CAMOES_PLE = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "null-direct-objects",
    slug: "null-direct-objects",
    category: "pronouns",
    titleUk: "Нульовий прямий додаток",
    titlePt: "Objetos diretos nulos",
    titleEn: "Null direct objects",
    summary: "Коли прямий додаток не вимовляється, але відновлюється з контексту.",
    aliases: ["нульовий прямий додаток", "null direct object", "objeto direto nulo"],
    related: ["direct-object", "object-pronouns", "ellipsis", "discourse-reference"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Португальське речення може не містити явного прямого додатка, хоча дієслово і контекст роблять його зміст зрозумілим. Це не те саме, що випадкове пропущення слова: референт може бути відновлений із дискурсу, ситуації або попередньої репліки.",
    definition: "Нульовий прямий додаток — невиражений аргумент прямого додатка, інтерпретація якого підтримується контекстом або властивостями конструкції.",
    uses: [
      { title: "Контекстуально відновлюваний об'єкт", body: "Коли вже зрозуміло, про який об'єкт ідеться, дієслово може вживатися без явного додатка.", examples: [ex("Já li.", "Я вже прочитав/прочитала.") ] },
      { title: "Ситуаційно зрозумілий об'єкт", body: "У конкретній ситуації адресат може відновити об'єкт без його повторення.", examples: [ex("Já comprei.", "Я вже купив/купила.") ] }
    ],
    examples: [ex("Eu trouxe o café e já bebi.", "Я приніс/принесла каву й уже випив/випила її.")],
    mistakes: [mistake("вважати кожне дієслово без додатка неперехідним","перевіряти, чи є контекстуально відновлюваний прямий аргумент","В українській подібне опущення також можливе, але португальську конструкцію треба аналізувати на рівні валентності й дискурсу.","predicted-l1-transfer","medium")],
    ukrainian: "Українська теж допускає нульовий об'єкт у відповідному контексті. Тому тут корисно не вигадувати артикль чи займенник, якщо референт уже відновлюється з дискурсу.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ],
    regional: "Ліцензування нульового об'єкта залежить від дієслова, контексту й різновиду; не прирівнюйте його до універсального правила «об'єкт можна пропускати»."
  }),
  page({
    id: "null-oblique-objects",
    slug: "null-oblique-objects",
    category: "syntax",
    titleUk: "Нульовий непрямий або прийменниковий додаток",
    titlePt: "Objetos oblíquos nulos",
    titleEn: "Null oblique objects",
    summary: "Як контекст дозволяє не повторювати прийменниковий аргумент дієслова.",
    aliases: ["нульовий непрямий додаток", "null oblique object", "objeto oblíquo nulo"],
    related: ["government-overview", "verb-valency-frames", "argument-vs-adjunct", "ellipsis"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Деякі португальські дієслова вибирають прийменниковий аргумент: gostar de, falar com, precisar de та інші. У контексті такий аргумент може не бути вимовлений, хоча його тип і зміст відновлюються. Це важливо для україномовного студента, бо відсутність прийменникової групи не означає автоматичної зміни керування.",
    definition: "Нульовий непрямий або прийменниковий аргумент — невиражений аргумент, який у повній конструкції реалізувався б як прийменникова група або інший обліковий додаток.",
    uses: [
      { title: "Повторно відновлюваний аргумент", body: "Після першої згадки прийменниковий додаток може не повторюватися.", examples: [ex("Ele não gosta de café, mas eu gosto.", "Він не любить кави, а я люблю.") ] },
      { title: "Еліптична відповідь", body: "У короткій відповіді частина валентної структури може бути зрозумілою із запитання.", examples: [ex("Precisas de ajuda? — Preciso.", "Тобі потрібна допомога? — Потрібна.") ] }
    ],
    examples: [ex("Falei com a Ana e depois não falei mais.", "Я поговорив/поговорила з Аною, а потім більше не говорив/говорила.")],
    mistakes: [mistake("вважати, що після пропуску прийменникового аргументу дієслово втратило своє керування","відновлювати повну валентну рамку з контексту","Нульова реалізація аргумента не тотожна іншій граматичній рамці.","predicted-l1-transfer","medium")],
    ukrainian: "Українська також має контекстуальне опущення додатків. Але під час вивчення португальської корисно зберігати в пам'яті повну модель дієслова з її прийменником.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }
    ],
    regional: "Нульова реалізація залежить від дієслова й дискурсу; не робіть висновку про керування лише з короткої репліки."
  }),
  page({
    id: "null-possessors",
    slug: "null-possessors",
    category: "syntax",
    titleUk: "Нульовий посесор",
    titlePt: "Possessores nulos",
    titleEn: "Null possessors",
    summary: "Як власник предмета або частини тіла відновлюється без займенника чи іменної групи.",
    aliases: ["нульовий посесор", "null possessor", "possessor omission"],
    related: ["possessives", "articles-possessives", "discourse-reference", "ellipsis"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "medium",
    intro: "У деяких конструкціях власник предмета або частини тіла не називається явно, бо його легко відновити з підмета, ситуації чи попереднього дискурсу. Особливо прозорими є конструкції з частинами тіла, де португальська може не вимагати явного meu/seu, якщо власник уже однозначний.",
    definition: "Нульовий посесор — невиражений власник, який інтерпретується з контексту або з аргументної структури конструкції.",
    uses: [
      { title: "Частини тіла", body: "Власник може відновлюватися з підмета, тому окремий присвійний займенник не завжди потрібен.", examples: [ex("Ela lavou as mãos.", "Вона помила руки.") ] },
      { title: "Контекстуально відомий власник", body: "У дискурсі власник може бути очевидним без повторного присвійного маркування.", examples: [ex("O rapaz levantou a cabeça.", "Хлопець підняв голову.") ] }
    ],
    examples: [ex("Ele fechou os olhos.", "Він заплющив очі.")],
    mistakes: [mistake("вставляти seu/sua щоразу, коли українською можна сказати «свій/свою»","перевіряти, чи власник уже відновлюється з конструкції","Португальська не вимагає явного присвійного займенника в кожному випадку належності.","predicted-l1-transfer","medium")],
    ukrainian: "Українська має власні способи вираження присвійності, зокрема свій. Португальську конструкцію краще вчити як співвідношення між аргументами, а не як буквальний переклад.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }
    ],
    regional: "Моделі присвійності залежать від конструкції; цей матеріал не означає, що явні possessivos загалом не вживаються."
  }),
  page({
    id: "vp-ellipsis",
    slug: "vp-ellipsis",
    category: "discourse",
    titleUk: "Еліпсис дієслівної групи",
    titlePt: "Elipse do sintagma verbal",
    titleEn: "VP ellipsis",
    summary: "Як повторювана дієслівна група відновлюється без повного повторення.",
    aliases: ["VP ellipsis", "дієслівний еліпсис", "elipse verbal"],
    related: ["ellipsis", "discourse-reference", "coordination", "information-structure"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "medium",
    intro: "У зв'язному мовленні португальська може не повторювати всю дієслівну групу, якщо її зміст уже відомий. Для навчання важливо відрізняти такий еліпсис від неповного речення: граматична структура інтерпретується завдяки попередній частині.",
    definition: "Еліпсис дієслівної групи — невираження частини предикативної структури, яку можна відновити з попереднього матеріалу.",
    uses: [
      { title: "Паралельні конструкції", body: "У двох частинах висловлення друга може не повторювати вже названу дію.", examples: [ex("Eu comprei o livro, e a Maria também.", "Я купив/купила книжку, і Марія теж.") ] },
      { title: "Контраст", body: "Еліпсис допомагає винести в контраст лише новий компонент.", examples: [ex("Eu fui de comboio, e ele de carro.", "Я поїхав/поїхала потягом, а він — автомобілем.") ] }
    ],
    examples: [ex("Uns estudaram muito; outros, pouco.", "Одні багато вчилися, інші — мало.")],
    mistakes: [mistake("вважати еліптичну репліку граматично неповною випадково","відновлювати пропущену структуру з попереднього речення","Еліпсис є способом організації дискурсу, а не просто помилкою або «обірваним» реченням.","predicted-l1-transfer","medium")],
    ukrainian: "Українська також широко використовує еліпсис. Найкорисніше порівнювати не буквальний переклад, а те, який компонент є новим і який відновлюється.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }
    ],
    regional: "Еліптичні моделі залежать від синтаксичної конструкції та дискурсу; окремі розмовні скорочення не слід ототожнювати з одним типом VP-еліпсису."
  }),
  page({
    id: "bare-nominals",
    slug: "bare-nominals",
    category: "articles",
    titleUk: "Голі іменні групи",
    titlePt: "Sintagmas nominais nus",
    titleEn: "Bare nominals",
    summary: "Іменні групи без артикля чи іншого явного детермінатора та їхня інтерпретація.",
    aliases: ["голі іменні групи", "bare nominals", "sintagmas nominais nus"],
    related: ["zero-article", "article-omission", "generic-reference-articles", "specificity"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Гола іменна група — це не просто «забутий артикль». У певних контекстах португальська допускає іменні групи без явного детермінатора, а їхня інтерпретація залежить від числа, масовості, предиката, референції, конструкції та різновиду мови. Особливо важливо не переносити один шаблон із бразильської португальської на всі різновиди.",
    definition: "Гола іменна група — іменна група без overt-детермінатора, яка має самостійну граматичну та семантичну інтерпретацію в конкретній конструкції.",
    uses: [
      { title: "Масові іменники", body: "Назви речовин можуть уживатися без артикля в узагальненому або неконкретному читанні.", examples: [ex("Café faz mal em excesso.", "Кава у надмірній кількості шкодить.")] },
      { title: "Генеричність", body: "Гола форма може мати узагальнювальне читання в окремих конструкціях.", examples: [ex("Crianças aprendem depressa.", "Діти швидко вчаться.") ] },
      { title: "Різновидна варіантність", body: "Частотність і набір дозволених голих груп не однакові в усіх різновидах португальської.", examples: [ex("Estudantes chegaram cedo.", "Студенти прийшли рано.", { variety: "BR" })] }
    ],
    examples: [ex("Água é essencial.", "Вода необхідна."), ex("Os estudantes chegaram.", "Студенти прийшли.")],
    mistakes: [mistake("вважати будь-який іменник без артикля правильним у всіх контекстах","визначати конструкцію, тип іменника та різновид португальської","Гола іменна група є конструкційно обмеженим явищем, а не універсальною альтернативою артиклю.","predicted-l1-transfer","high")],
    ukrainian: "Українська дуже часто використовує голі іменні групи, тому це одна з ділянок, де L1-перенесення особливо легко. Потрібно вчитися бачити португальські обмеження, а не вважати відсутність артикля нейтральною за замовчуванням.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III },
      { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }
    ],
    regional: "Голі іменні групи мають помітну варіантність, зокрема між PT-BR та PT-PT; частотність не слід перетворювати на категоричну граматичну заборону."
  }),
  page({
    id: "brazilian-topic-subject",
    slug: "brazilian-topic-subject",
    category: "syntax",
    titleUk: "Тема-підмет у бразильській португальській",
    titlePt: "Construções de tópico-sujeito no português brasileiro",
    titleEn: "Brazilian Portuguese topic-subject constructions",
    summary: "Конструкції, де початковий іменник задає тему, а предикат не оформлює його як звичайний граматичний підмет.",
    aliases: ["topic-subject", "тема-підмет", "tópico-sujeito", "бразильська португальська"],
    related: ["topicalization", "subject-object-order", "information-structure", "pt-br-pt-pt"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "У бразильській португальській описують конструкції, де іменна група на початку речення задає тему, а предикативний зв'язок із нею не збігається з простим SVO-підметом. Це важливо відрізняти від звичайної topicalização: структура може мати власні властивості узгодження, ролей і семантичного зв'язку.",
    definition: "Topic-subject — назва для групи бразильських португаломовних конструкцій, у яких початковий компонент має тематичний статус і водночас бере участь у предикації не так, як канонічний граматичний підмет.",
    uses: [
      { title: "Тематичний компонент", body: "Початкова іменна група встановлює область, щодо якої робиться твердження.", examples: [ex("Essa casa bate muito sol.", "У цьому будинку багато сонця.", { variety: "BR" })] },
      { title: "Не плутати зі звичайним SVO", body: "Формально перший іменник не обов'язково є звичайним підметом предиката; аналіз залежить від конкретної конструкції.", examples: [ex("Esse livro eu já li.", "Цю книжку я вже прочитав/прочитала.", { variety: "BR" })] }
    ],
    examples: [ex("Essa cidade tem muitos problemas.", "У цього міста багато проблем.", { variety: "BR" })],
    mistakes: [mistake("аналізувати кожен початковий компонент як звичайний підмет","розрізняти тему, граматичний підмет і тип предикації","Український переклад часто теж виносить тему на початок, тому формальна схожість може приховувати різницю структури.","predicted-l1-transfer","medium")],
    ukrainian: "Українська має власні тематичні конструкції, тому переклад може бути дуже природним. Але це не означає структурної тотожності: порівнюйте синтаксичні ролі, а не лише порядок слів.",
    sources: [
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III },
      { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: GULBENKIAN_II }
    ],
    regional: "Це явище треба маркувати саме як Brazilian Portuguese; не переносіть його як загальнопортугальську модель."
  })
];
