import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const G = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const C = "https://ciberduvidas.iscte-iul.pt/consultorio/areas/gramatica/3";
const CAM = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "adverb-scope", slug: "adverb-scope", category: "adverbs",
    titleUk: "Область дії прислівника",
    titlePt: "Escopo dos advérbios",
    titleEn: "Adverb scope",
    summary: "Як визначати, до якого компонента, предиката або всього висловлення належить прислівник.",
    aliases: ["область дії прислівника", "adverb scope", "escopo dos advérbios", "scope"],
    related: ["adverbs-overview", "adverb-position", "sentence-adverbs", "semantic-ambiguity", "adverbs-degree"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Положення прислівника важливе не лише для стилю: воно може показувати, яку частину висловлення він модифікує. Порівняйте Apenas a Ana falou com o diretor і A Ana falou apenas com o diretor. У першому випадку apenas природно обмежує учасника «Ана», у другому — об'єкт/напрям комунікації. Область дії не завжди визначається механічно одним правилом позиції, тому її треба аналізувати разом із семантикою та контекстом.",
    definition: "Область дії прислівника (escopo) — компонент або пропозиція, над яким прислівник здійснює семантичну модифікацію.",
    formation: "Для аналізу спочатку визначте значення прислівника, потім знайдіть компонент, який він логічно модифікує, і лише після цього оцінюйте його позицію. Прислівники способу часто належать до події: Ele respondeu rapidamente. Ступеневі прислівники можуть модифікувати прикметник: muito interessante. Деякі прислівники мають пропозиційний scope: Provavelmente, ele chega amanhã. У двозначних реченнях контекст може вибрати одну з інтерпретацій.",
    uses: [
      { title: "Модифікація дієслівної події", body: "Прислівник способу, частотності або часу може характеризувати саму подію.", examples: [
        ex("Ela respondeu rapidamente.", "Вона швидко відповіла.", { purpose: "production" }),
        ex("Ele trabalha frequentemente em casa.", "Він часто працює вдома.", { purpose: "production" })
      ] },
      { title: "Модифікація прикметника або іншого прислівника", body: "Ступеневі прислівники зазвичай мають вузьку область дії всередині групи.", examples: [
        ex("É muito interessante.", "Це дуже цікаво.", { purpose: "production" }),
        ex("Ela fala bastante claramente.", "Вона говорить досить чітко.", { purpose: "comprehension" })
      ] },
      { title: "Область дії над усією пропозицією", body: "Епістемічні та оцінні прислівники можуть коментувати все висловлення.", examples: [
        ex("Provavelmente, ele vem amanhã.", "Ймовірно, він прийде завтра.", { purpose: "production" }),
        ex("Infelizmente, perdemos o comboio.", "На жаль, ми пропустили потяг.", { purpose: "comprehension" })
      ] },
      { title: "Позиція може створювати контраст", body: "Переміщення прислівника іноді змінює або уточнює те, що він обмежує.", examples: [
        ex("Apenas a Ana falou com o diretor.", "Лише Ана говорила з директором.", { purpose: "contrast" }),
        ex("A Ana falou apenas com o diretor.", "Ана говорила лише з директором.", { purpose: "contrast" })
      ] },
      { title: "Контекст розв'язує неоднозначність", body: "Одна позиція може допускати більше однієї інтерпретації; не кожну неоднозначність треба штучно зводити до одного правила.", examples: [
        ex("Ele quase terminou o trabalho.", "Він майже закінчив роботу.", { purpose: "comprehension" }),
        ex("Quase todos chegaram.", "Майже всі прийшли.", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Ela respondeu rapidamente.", "Вона швидко відповіла.", { purpose: "production" }),
      ex("É muito interessante.", "Це дуже цікаво.", { purpose: "production" }),
      ex("Provavelmente, ele vem amanhã.", "Ймовірно, він прийде завтра.", { purpose: "production" }),
      ex("Apenas a Ana falou com o diretor.", "Лише Ана говорила з директором.", { purpose: "contrast" }),
      ex("A Ana falou apenas com o diretor.", "Ана говорила лише з директором.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("вважати, що кожен прислівник змінює лише дієслово", "визначати фактичний scope", "muito може модифікувати прикметник, а provavelmente — всю пропозицію.", "predicted-l1-transfer", "high"),
      mistake("вважати будь-яку зміну позиції суто стилістичною", "перевіряти, чи змінюється інтерпретація", "apenas може давати різний фокус залежно від позиції.", "editorial", "high"),
      mistake("виводити scope лише з найближчого слова", "аналізувати синтаксичну групу та значення", "Семантична область дії не завжди збігається з фізично найближчим компонентом.", "editorial", "high")
    ],
    ukrainian: "Українська також має прислівники з вузькою та широкою областю дії: «лише Олена» і «Олена лише з директором» демонструють той самий принцип фокусування. Важливо не переносити португальську позицію механічно: порядок слів і просодія взаємодіють.",
    regional: "Scope є семантико-синтаксичною властивістю, спільною для різновидів португальської. Частотність конкретних позицій та інтонаційна реалізація можуть варіювати.",
    brPt: "У PT-BR і PT-PT основні scope-відношення зберігаються, але інформаційна структура та природність окремих позицій можуть різнитися. Для нормативного письма завжди враховуйте конкретний різновид.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: G },
      { label: "Ciberdúvidas — Gramática", url: C },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  }),

  page({
    id: "sentence-adverbs", slug: "sentence-adverbs", category: "adverbs",
    titleUk: "Прислівники всього речення",
    titlePt: "Advérbios de frase",
    titleEn: "Sentence adverbs",
    summary: "Прислівники, що коментують пропозицію, ступінь упевненості або ставлення мовця до висловленого.",
    aliases: ["прислівники речення", "sentence adverbs", "advérbios de frase", "пропозиційні прислівники"],
    related: ["adverbs-overview", "epistemic-adverbs", "discourse-markers", "adverb-position", "adverb-scope"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Не всі прислівники описують спосіб виконання дії. Слова на кшталт provavelmente, infelizmente, certamente або realmente можуть стосуватися всього висловлення: вони повідомляють не стільки «як відбулася дія», скільки як мовець оцінює або кваліфікує пропозицію. Такі елементи часто стоять на периферії речення, але можуть переміщуватися залежно від фокусу та стилю.",
    definition: "Прислівник речення — прислівниковий елемент, чия семантична область охоплює пропозицію або ставлення мовця до неї, а не лише окрему дію.",
    formation: "Розрізняйте щонайменше три типи: епістемічні (Provavelmente ele vem), оцінні (Felizmente, ele veio) та інші пропозиційні модифікатори. Кома часто відображає просодичне відокремлення в письмі, але пунктуація не створює семантичну категорію сама по собі. У середині речення позиція може бути менш помітною: Ele provavelmente vem amanhã.",
    uses: [
      { title: "Епістемічна оцінка", body: "Мовець оцінює ймовірність істинності пропозиції.", examples: [
        ex("Provavelmente, ele chega amanhã.", "Ймовірно, він приїде завтра.", { purpose: "production" }),
        ex("Certamente, ela sabe a resposta.", "Безперечно, вона знає відповідь.", { purpose: "comprehension" })
      ] },
      { title: "Оцінка ситуації", body: "Прислівник може виражати позитивну або негативну оцінку самого факту.", examples: [
        ex("Felizmente, ninguém se feriu.", "На щастя, ніхто не постраждав.", { purpose: "production" }),
        ex("Infelizmente, perdemos o comboio.", "На жаль, ми пропустили потяг.", { purpose: "production" })
      ] },
      { title: "Внутрішньореченнєва позиція", body: "Пропозиційний прислівник може стояти перед дієсловом або в іншій внутрішній позиції.", examples: [
        ex("Ele provavelmente vem amanhã.", "Він, ймовірно, приїде завтра.", { purpose: "production" }),
        ex("Ela certamente conhece a cidade.", "Вона напевно знає місто.", { purpose: "production" })
      ] },
      { title: "Не плутати зі способом дії", body: "Швидко у «вона швидко відповіла» характеризує спосіб, тоді як provavelmente у «вона, ймовірно, відповість» коментує пропозицію.", examples: [
        ex("Ela respondeu rapidamente.", "Вона швидко відповіла.", { purpose: "contrast" }),
        ex("Ela provavelmente respondeu.", "Вона, ймовірно, відповіла.", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Provavelmente, ele chega amanhã.", "Ймовірно, він приїде завтра.", { purpose: "production" }),
      ex("Felizmente, ninguém se feriu.", "На щастя, ніхто не постраждав.", { purpose: "production" }),
      ex("Ele provavelmente vem amanhã.", "Він, ймовірно, приїде завтра.", { purpose: "production" }),
      ex("Ela respondeu rapidamente.", "Вона швидко відповіла.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("називати всі прислівники обставинами способу", "розрізняти event-level і sentence-level modification", "Provavelmente не описує спосіб приходу.", "editorial", "high"),
      mistake("вважати кому обов'язковою ознакою sentence adverb", "визначати синтаксичну й семантичну функцію", "Позиція та пунктуація можуть змінюватися.", "editorial", "medium"),
      mistake("перекладати «ймовірно» як частину дієслівної дії", "бачити його як модифікатор пропозиції", "Епістемічний прислівник виражає ставлення до істинності висловлення.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українські «ймовірно», «напевно», «на щастя», «на жаль» мають дуже близьку функцію. Відмінність для студента полягає передусім у португальській позиції, просодії та взаємодії з порядком слів.",
    regional: "Категорія прислівників речення не прив'язана до одного різновиду. Відмінності PT-BR/PT-PT стосуються насамперед частотності та стилістичних уподобань окремих форм.",
    brPt: "У PT-BR та PT-PT sentence adverbs активно використовуються в нейтральному мовленні. Позиційна варіантність не повинна автоматично трактуватися як помилка.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: G },
      { label: "Ciberdúvidas — Gramática", url: C }
    ]
  }),

  page({
    id: "epistemic-adverbs", slug: "epistemic-adverbs", category: "adverbs",
    titleUk: "Епістемічні прислівники",
    titlePt: "Advérbios epistémicos",
    titleEn: "Epistemic adverbs",
    summary: "Як прислівники виражають ступінь упевненості, припущення та оцінку істинності пропозиції.",
    aliases: ["епістемічні прислівники", "epistemic adverbs", "advérbios epistémicos", "ймовірність"],
    related: ["sentence-adverbs", "modality-overview", "adverb-scope", "modal-particles", "adverb-position"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Епістемічні прислівники показують, наскільки мовець вважає пропозицію певною, імовірною або сумнівною. Provavelmente, talvez, certamente, possivelmente та sem dúvida не є простими синонімами: вони займають різні місця на шкалі епістемічної оцінки й мають різну синтаксичну поведінку. Особливо важливо не змішувати talvez із conjuntivo як формою: прислівник і спосіб дієслова взаємодіють, але це різні граматичні засоби.",
    definition: "Епістемічний прислівник — прислівник, який модифікує пропозицію з погляду ступеня знання, впевненості або припущення мовця.",
    formation: "Епістемічна модифікація може поєднуватися з різними способами дієслова. Talvez може з'являтися з conjuntivo: Talvez ele venha. Certamente та provavelmente часто поєднуються з indicativo, хоча вибір способу залежить від конструкції й семантики, а не від одного механічного правила. Позиція на початку речення часто створює сильне пропозиційне читання; внутрішня позиція може бути нейтральнішою.",
    uses: [
      { title: "Ймовірність", body: "Provavelmente та possivelmente сигналізують, що мовець не подає факт як безумовно встановлений.", examples: [
        ex("Provavelmente, ele está em casa.", "Ймовірно, він удома.", { purpose: "production" }),
        ex("Possivelmente, eles chegam amanhã.", "Можливо, вони приїдуть завтра.", { purpose: "comprehension" })
      ] },
      { title: "Висока впевненість", body: "Certamente, sem dúvida та подібні елементи підсилюють ступінь упевненості.", examples: [
        ex("Certamente, ela conhece o assunto.", "Безперечно, вона знає цю тему.", { purpose: "production" }),
        ex("Sem dúvida, é uma boa solução.", "Без сумніву, це хороше рішення.", { purpose: "production" })
      ] },
      { title: "Talvez + conjuntivo", body: "Talvez часто поєднується з conjuntivo, коли мовець подає можливість як невизначену.", examples: [
        ex("Talvez ele venha amanhã.", "Можливо, він прийде завтра.", { purpose: "production" }),
        ex("Talvez seja melhor esperar.", "Можливо, краще почекати.", { purpose: "production" })
      ] },
      { title: "Позиція та scope", body: "Переміщення епістемічного прислівника може змінити його інформаційний акцент, хоча базова епістемічна функція зберігається.", examples: [
        ex("Ele provavelmente vem amanhã.", "Він, ймовірно, приїде завтра.", { purpose: "production" }),
        ex("Provavelmente, ele vem amanhã.", "Ймовірно, він приїде завтра.", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Provavelmente, ele está em casa.", "Ймовірно, він удома.", { purpose: "production" }),
      ex("Certamente, ela conhece o assunto.", "Безперечно, вона знає цю тему.", { purpose: "production" }),
      ex("Talvez ele venha amanhã.", "Можливо, він прийде завтра.", { purpose: "production" }),
      ex("Talvez seja melhor esperar.", "Можливо, краще почекати.", { purpose: "production" })
    ],
    mistakes: [
      mistake("вважати talvez просто синонімом «можливо» без зміни граматичної конструкції", "вивчати talvez разом із типовою взаємодією з conjuntivo", "У багатьох конструкціях після talvez очікується conjuntivo.", "predicted-l1-transfer", "high"),
      mistake("вважати всі епістемічні прислівники взаємозамінними", "розрізняти ступінь упевненості та стиль", "provavelmente і sem dúvida не мають однакової сили твердження.", "editorial", "high"),
      mistake("зводити епістемічність до майбутнього часу", "розрізняти час і модальність", "Ймовірність можна оцінювати щодо минулих, теперішніх і майбутніх подій.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українські «можливо», «ймовірно», «безперечно» функціонально близькі. Проте португальська взаємодія talvez із conjuntivo — важлива окрема граматична модель, яку не слід виводити з українського перекладу.",
    regional: "Епістемічні прислівники функціонують у всіх основних різновидах португальської. Конкретна частотність та позиція можуть залежати від регістру.",
    brPt: "PT-BR і PT-PT мають спільний базовий набір епістемічних прислівників. Відмінності у вживанні conjuntivo, порядку слів і стилістичних уподобаннях краще вивчати на прикладах конкретного різновиду.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: G },
      { label: "Camões — Referencial Camões PLE", url: CAM },
      { label: "Ciberdúvidas — Gramática", url: C }
    ]
  }),

  page({
    id: "connective-adverbs", slug: "connective-adverbs", category: "adverbs",
    titleUk: "Зв'язкові прислівники",
    titlePt: "Advérbios conectivos",
    titleEn: "Connective adverbs",
    summary: "Прислівникові елементи, які встановлюють логічний або дискурсивний зв'язок між висловленнями.",
    aliases: ["зв'язкові прислівники", "connective adverbs", "advérbios conectivos", "conjunctive adverbs"],
    related: ["adverbs-overview", "discourse-markers", "coordinating", "subordinating", "sentence-adverbs"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Зв'язкові прислівники на кшталт portanto, contudo, porém, além disso та entretanto допомагають читачеві встановити відношення між частинами дискурсу: висновок, протиставлення, додавання, часовий перехід. Вони не слід автоматично прирівнювати до сполучників. На письмі вони можуть стояти між реченнями або всередині речення та взаємодіяти з пунктуацією.",
    definition: "Зв'язковий прислівник — прислівниковий або дискурсивний елемент, що сигналізує логічний чи текстовий зв'язок між пропозиціями або частинами дискурсу.",
    formation: "Вивчайте такі елементи за функцією: conclusão (portanto), contraste (contudo, porém), adição (além disso), sequência/continuidade (entretanto, depois). Важливо розрізняти лексичне значення і синтаксичний статус. Наприклад, portanto не просто означає «тому»: його позиція та пунктуація залежать від того, як воно організовує висловлення.",
    uses: [
      { title: "Висновок", body: "Portanto сигналізує результат або висновок із попередньої інформації.", examples: [
        ex("Estava a chover; portanto, ficámos em casa.", "Йшов дощ; тому ми залишилися вдома.", { variety: "PT", purpose: "production" }),
        ex("Ele estudou muito. Portanto, passou no exame.", "Він багато вчився. Отже, він склав іспит.", { purpose: "production" })
      ] },
      { title: "Протиставлення", body: "Contudo та porém вводять контраст із попереднім висловленням.", examples: [
        ex("Queria sair; contudo, fiquei em casa.", "Я хотів/хотіла вийти, але залишився/залишилася вдома.", { purpose: "production" }),
        ex("Ele prometeu ajudar. Porém, não apareceu.", "Він обіцяв допомогти. Проте він не прийшов.", { purpose: "comprehension" })
      ] },
      { title: "Додавання", body: "Além disso додає новий аргумент або факт.", examples: [
        ex("O curso é útil. Além disso, é gratuito.", "Курс корисний. Крім того, він безплатний.", { purpose: "production" }),
        ex("Ela fala português e, além disso, francês.", "Вона говорить португальською і, крім того, французькою.", { purpose: "comprehension" })
      ] },
      { title: "Не плутати зі сполучником", body: "Сполучник безпосередньо бере участь у синтаксичному зв'язуванні, тоді як connective adverb часто зберігає більшу синтаксичну автономність.", examples: [
        ex("Estava cansado, mas continuei.", "Я був/була втомлений/втомлена, але продовжив/продовжила.", { purpose: "contrast" }),
        ex("Estava cansado; contudo, continuei.", "Я був/була втомлений/втомлена; проте продовжив/продовжила.", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Ele estudou muito. Portanto, passou no exame.", "Він багато вчився. Отже, він склав іспит.", { purpose: "production" }),
      ex("Queria sair; contudo, fiquei em casa.", "Я хотів/хотіла вийти; проте залишився/залишилася вдома.", { purpose: "production" }),
      ex("O curso é útil. Além disso, é gratuito.", "Курс корисний. Крім того, він безплатний.", { purpose: "production" }),
      ex("Estava cansado, mas continuei.", "Я був/була втомлений/втомлена, але продовжив/продовжила.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("вважати portanto/contudo повними синонімами сполучників", "розрізняти дискурсивну функцію і синтаксичний статус", "Пунктуація та позиція connective adverb відрізняються від простого coordinating conjunction.", "editorial", "high"),
      mistake("ставити кому після кожного connective adverb", "аналізувати конкретну конструкцію", "Пунктуація залежить від позиції та синтаксичної структури.", "editorial", "high"),
      mistake("перекладати porém/contudo однаково в будь-якому контексті", "вивчати функцію контрасту та регістр", "Їхня позиція може впливати на стиль і просодію.", "editorial", "medium")
    ],
    ukrainian: "Українські «отже», «проте», «крім того» також можуть організовувати зв'язок між реченнями, тому функція добре інтуїтивно зрозуміла. Але португальський синтаксичний статус і пунктуацію не варто копіювати з української.",
    regional: "Базові connective adverbs спільні для PT-BR та PT-PT, але частотність, позиція й стилістична маркованість окремих форм можуть різнитися.",
    brPt: "У PT-BR também, porém, contudo, portanto та além disso широко представлені в письмовій мові; в усному мовленні вибір дискурсивних маркерів може бути іншим. У PT-PT частина книжних форм також активно використовується у формальному письмі.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: G },
      { label: "Ciberdúvidas — Gramática", url: C }
    ]
  }),

  page({
    id: "adverbs-mente", slug: "adverbs-mente", category: "adverbs",
    titleUk: "Прислівники на -mente",
    titlePt: "Advérbios em -mente",
    titleEn: "Adverbs ending in -mente",
    summary: "Як утворюються прислівники на -mente, як поводяться їхні наголос, форма прикметника та позиція.",
    aliases: ["прислівники на -mente", "adverbs in -mente", "advérbios em -mente", "-mente"],
    related: ["adverbs-overview", "adverb-position", "manner-adverbs", "adjective-agreement", "stress"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Суфікс -mente утворює велику групу прислівників від прикметників: claro → claramente, rápido → rapidamente, feliz → felizmente. Формально це проста модель, але вона має важливі деталі: вибір форми прикметника, збереження графічного наголосу та можливість координації кількох прислівників. Тому правило не зводиться до механічного «додай -mente».",
    definition: "Прислівник на -mente — прислівникова форма, історично пов'язана з прикметником і утворена за продуктивною моделлю з елементом -mente.",
    formation: "Для більшості прикметників використовується жіноча форма однини: claro → claramente, rápida → rapidamente. Якщо прикметник має одну форму для родів, вона зберігається: feliz → felizmente. Графічний наголос прикметника зберігається, якщо це потрібно орфографією: fácil → facilmente. У послідовності кількох однорідних прислівників -mente може з'являтися лише в останнього в певних стилістичних конструкціях, але для нейтрального навчання безпечніше повторювати форму.",
    uses: [
      { title: "Утворення від прикметника", body: "Найтиповіша модель — жіноча форма однини + -mente.", examples: [
        ex("rápida → rapidamente", "швидка → швидко", { purpose: "comprehension" }),
        ex("clara → claramente", "ясна → ясно/чітко", { purpose: "comprehension" })
      ] },
      { title: "Прикметники без родової зміни", body: "Для двостатевих прикметників основа не змінюється.", examples: [
        ex("feliz → felizmente", "щасливий/щаслива → щасливо", { purpose: "comprehension" }),
        ex("simples → simplesmente", "простий/проста → просто", { purpose: "comprehension" })
      ] },
      { title: "Наголос і написання", body: "Графічний наголос прикметникової основи не зникає лише через додавання -mente.", examples: [
        ex("fácil → facilmente", "легкий → легко", { purpose: "production" }),
        ex("rápido → rapidamente", "швидкий → швидко", { purpose: "production" })
      ] },
      { title: "Функція способу", body: "Багато -mente forms характеризують спосіб виконання дії.", examples: [
        ex("Ela respondeu claramente.", "Вона чітко відповіла.", { purpose: "production" }),
        ex("Ele explicou cuidadosamente.", "Він обережно/ретельно пояснив.", { purpose: "production" })
      ] },
      { title: "Не всі -mente мають однаковий scope", body: "Частина форм може бути оцінною або пропозиційною.", examples: [
        ex("Felizmente, ninguém se feriu.", "На щастя, ніхто не постраждав.", { purpose: "contrast" }),
        ex("Provavelmente, ele vem amanhã.", "Ймовірно, він прийде завтра.", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Ela respondeu claramente.", "Вона чітко відповіла.", { purpose: "production" }),
      ex("Ele explicou cuidadosamente.", "Він ретельно пояснив.", { purpose: "production" }),
      ex("Felizmente, ninguém se feriu.", "На щастя, ніхто не постраждав.", { purpose: "contrast" }),
      ex("fácil → facilmente", "легкий → легко", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("утворювати форму від чоловічого прикметника без перевірки жіночої основи", "перевіряти форму прикметника перед -mente", "clara → claramente, а не claro-mente.", "predicted-l1-transfer", "high"),
      mistake("прибирати наголос механічно", "зберігати потрібну орфографічну акцентуацію", "fácil → facilmente зберігає наголошений í.", "editorial", "high"),
      mistake("вважати всі -mente прислівниками способу", "визначати scope і функцію", "felizmente та provavelmente можуть модифікувати всю пропозицію.", "editorial", "high")
    ],
    ukrainian: "В українській прислівники часто утворюються суфіксами -о/-е («швидко», «ясно»), тому португальське -mente не має прямого формального відповідника. Зате український переклад допомагає зрозуміти функцію.",
    regional: "Модель -mente спільна для PT-BR та PT-PT. Відмінності стосуються не базового словотворення, а окремих лексичних і стилістичних уподобань.",
    brPt: "У двох основних різновидах португальської форми на -mente продуктивні. Позиція прислівника та його дискурсивна функція можуть варіювати залежно від стилю.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: G },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  }),

  page({
    id: "adverbial-locutions", slug: "adverbial-locutions", category: "adverbs",
    titleUk: "Прислівникові сполуки",
    titlePt: "Locuções adverbiais",
    titleEn: "Adverbial locutions",
    summary: "Багатослівні конструкції, які функціонують як прислівникові одиниці.",
    aliases: ["прислівникові сполуки", "adverbial locutions", "locuções adverbiais", "adverbial phrases"],
    related: ["adverbs-overview", "adverb-position", "prepositions-overview", "time-adverbs", "manner-adverbs"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Прислівникова функція не обов'язково виражається одним словом. Конструкції de manhã, à tarde, de repente, em silêncio, com cuidado та безліч інших одиниць функціонують у реченні як модифікатори часу, способу, раптовості або інших характеристик події. Їх корисно вивчати як цілісні конструкції, але водночас розуміти внутрішню граматику.",
    definition: "Прислівникова сполука — багатослівна конструкція, яка виконує в реченні функцію, типову для прислівника, часто виражаючи час, місце, спосіб, причину або іншу обставинну характеристику.",
    formation: "Типова структура містить прийменник + іменну групу: de manhã, à tarde, com cuidado, em silêncio. Частина сполук лексикалізується настільки, що їх краще засвоювати як усталені одиниці. Водночас не кожна прийменникова група є locução adverbial: важлива її функція в конкретному реченні.",
    uses: [
      { title: "Час", body: "Сполуки можуть позначати момент або частину дня.", examples: [
        ex("Trabalho de manhã.", "Я працюю вранці.", { purpose: "production" }),
        ex("À tarde, estudo português.", "Удень/після обіду я вчу португальську.", { purpose: "production" })
      ] },
      { title: "Спосіб", body: "Конструкція може описувати спосіб виконання дії.", examples: [
        ex("Ele respondeu com cuidado.", "Він відповів обережно.", { purpose: "production" }),
        ex("Ela falou em silêncio.", "Вона говорила мовчки.", { purpose: "comprehension" })
      ] },
      { title: "Раптовість та інші лексикалізовані значення", body: "Деякі одиниці мають значення, яке не варто перекладати буквально слово за словом.", examples: [
        ex("De repente, começou a chover.", "Раптом почався дощ.", { purpose: "production" }),
        ex("No fim, aceitaram a proposta.", "Зрештою вони прийняли пропозицію.", { purpose: "comprehension" })
      ] },
      { title: "Позиція в реченні", body: "Часові та інші обставинні сполуки можуть переміщуватися для організації інформації.", examples: [
        ex("De manhã, trabalho em casa.", "Вранці я працюю вдома.", { purpose: "production" }),
        ex("Trabalho em casa de manhã.", "Я працюю вдома вранці.", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Trabalho de manhã.", "Я працюю вранці.", { purpose: "production" }),
      ex("À tarde, estudo português.", "Удень/після обіду я вчу португальську.", { purpose: "production" }),
      ex("De repente, começou a chover.", "Раптом почався дощ.", { purpose: "production" }),
      ex("Ele respondeu com cuidado.", "Він відповів обережно.", { purpose: "production" })
    ],
    mistakes: [
      mistake("вважати кожну прийменникову групу словниковою locução", "визначати функцію в конкретному реченні", "em Lisboa — переважно локативна група, а de repente — лексикалізована прислівникова одиниця.", "editorial", "high"),
      mistake("перекладати всі компоненти буквально", "запам'ятовувати лексикалізовані сполуки цілком", "de repente не варто аналізувати як буквальне «з раптовості».", "predicted-l1-transfer", "high"),
      mistake("ігнорувати crase у à tarde", "вчити форму разом із прийменниковою структурою", "à може бути результатом a + a та має окрему орфографічну реалізацію.", "predicted-l1-transfer", "high")
    ],
    ukrainian: "Українська має аналогічні багатослівні обставинні конструкції: «вранці», «після обіду», «з обережністю», «раптом». Але португальська часто виражає їх прийменниковими сполуками, а український переклад може бути одним прислівником.",
    regional: "Базові locuções adverbiais спільні для різновидів. Окремі лексикалізовані сполуки та їх частотність можуть мати регіональні або стилістичні відмінності.",
    brPt: "У PT-BR і PT-PT основні часові та способові locuções зрозумілі однаково. Для продуктивного вживання варто вивчати готову конструкцію разом із прийменником.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: G },
      { label: "Ciberdúvidas — Gramática", url: C }
    ]
  }),

  page({
    id: "manner-adverbs", slug: "manner-adverbs", category: "adverbs",
    titleUk: "Прислівники способу",
    titlePt: "Advérbios de modo",
    titleEn: "Manner adverbs",
    summary: "Як описувати спосіб, у який відбувається дія або стан.",
    aliases: ["прислівники способу", "manner adverbs", "advérbios de modo", "modo"],
    related: ["adverbs-overview", "adverb-position", "adverbs-mente", "sentence-adverbs", "adverb-scope"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Прислівники способу відповідають на питання «як?» лише в приблизному педагогічному сенсі: граматично важливіше те, що вони модифікують спосіб або характер перебігу події. Типові форми — bem, mal, assim, depressa, devagar, cuidadosamente та прислівники на -mente. Їхня позиція може залежати від довжини прислівника, типу предиката та інформаційної структури.",
    definition: "Прислівник способу — прислівниковий модифікатор, який характеризує спосіб, манеру або характер виконання дії чи перебігу події.",
    formation: "До цієї групи належать прості лексичні прислівники (bem, mal, assim, depressa), а також продуктивні форми на -mente. Деякі одиниці мають суплетивні або нерегулярні відповідності: bom → bem, mau → mal. Не можна вивести всі форми способом додавання -mente.",
    uses: [
      { title: "Bem і mal", body: "Найуживаніші базові форми характеризують якість або спосіб виконання дії.", examples: [
        ex("Ele trabalha bem.", "Він добре працює.", { purpose: "production" }),
        ex("Ela canta mal.", "Вона погано співає.", { purpose: "production" })
      ] },
      { title: "Швидкість і темп", body: "Depressa та devagar описують швидкість виконання дії.", examples: [
        ex("Fala mais devagar, por favor.", "Говоріть повільніше, будь ласка.", { purpose: "production" }),
        ex("Ele saiu depressa.", "Він швидко пішов.", { purpose: "production" })
      ] },
      { title: "Форми на -mente", body: "Такі форми часто деталізують спосіб дії.", examples: [
        ex("Ela respondeu claramente.", "Вона чітко відповіла.", { purpose: "production" }),
        ex("Ele explicou cuidadosamente.", "Він ретельно пояснив.", { purpose: "production" })
      ] },
      { title: "Позиція", body: "Спосібові прислівники можуть стояти після дієслова або в інших позиціях, якщо структура та інформаційний фокус це дозволяють.", examples: [
        ex("Ele respondeu rapidamente.", "Він швидко відповів.", { purpose: "production" }),
        ex("Rapidamente, ele respondeu.", "Швидко він відповів.", { purpose: "contrast" })
      ] }
    ],
    examples: [
      ex("Ele trabalha bem.", "Він добре працює.", { purpose: "production" }),
      ex("Ela canta mal.", "Вона погано співає.", { purpose: "production" }),
      ex("Fala mais devagar, por favor.", "Говоріть повільніше, будь ласка.", { purpose: "production" }),
      ex("Ela respondeu claramente.", "Вона чітко відповіла.", { purpose: "production" })
    ],
    mistakes: [
      mistake("утворювати bem як *bommente", "вивчити bem як окремий нерегулярний прислівник", "bom і bem мають споріднене значення, але різні форми.", "predicted-l1-transfer", "high"),
      mistake("вважати всі прислівники способу формами на -mente", "вчити прості лексичні форми окремо", "bem, mal, assim, depressa не утворені за однією продуктивною схемою.", "editorial", "high"),
      mistake("вважати початкову позицію неможливою", "оцінювати позицію разом із фокусом і стилем", "Rapidamente, ele respondeu можливе як контекстно марковане розташування.", "editorial", "medium")
    ],
    ukrainian: "Українські «добре», «погано», «швидко», «повільно» функціонально близькі. Відмінність полягає в португальських лексичних формах і продуктивності -mente.",
    regional: "Категорія спільна для PT-BR та PT-PT. Позиційна та лексична частотність може варіювати за стилем і різновидом.",
    brPt: "У PT-BR та PT-PT bem/mal, depressa/devagar і форми на -mente є звичайними. Не переносіть український порядок слів без перевірки інформаційної структури.",
    sources: [
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: G },
      { label: "Camões — Referencial Camões PLE", url: CAM }
    ]
  })
];
