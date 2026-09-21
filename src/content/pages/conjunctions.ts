import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

export const pages: GrammarPage[] = [
  {
    id: "nem",
    slug: "nem",
    category: "conjunctions",
    titleUk: "Сурядні сполучники",
    titlePt: "Conjunções coordenativas",
    titleEn: "Coordinating conjunctions",
    summary:
      "e, nem, ou, mas, porém, portanto: зв'язок рівноправних частин без зміни способу дієслова.",
    aliases: ["сурядні", "e", "mas", "ou", "nem", "porém", "coordenativas"],
    related: ["nem", "coordination", "subordinating", "negation-nao"],
    intro:
      "Сурядні сполучники (`conjunções coordenativas`) з'єднують рівноправні члени або речення: слова з словами, групи з групами, речення з реченнями. Вони **не відкривають підрядного** і самі по собі не вимагають кон'юнктива.\n\nКласи традиційної граматики: **єднальні** (`aditivas`: `e`, `nem`), **протиставні** (`adversativas`: `mas`, `porém`, `contudo`, `todavia`), **розділові** (`alternativas` / `disjuntivas`: `ou`, `ora… ora`, `quer… quer`), **пояснювальні** (`explicativas`: `pois`, `que`, `porque` у сурядному вжитку), **висновкові** (`conclusivas`: `logo`, `portanto`, `pois` після коми).\n\nДля українця `nem` — найважливіший пункт: це не просто «і не», а повноцінний єднальний сполучник заперечення, часто з negative concord.",
    formulas: [
      {
        label: "Сурядність",
        pattern: "P1 + Conj + P2",
        note: "P1 і P2 рівноправні. Спосіб дієслова в P2 не змінюється лише через сполучник.",
      },
    ],
    uses: [
      {
        title: "Єднання: e / nem",
        body: "`e` додає. Перед голосним може звучати як [i], але пишеться `e`. `nem` єднає заперечні елементи: `Não comeu nem bebeu.` Повтор `nem… nem…` = «ні… ні…».",
        examples: [
          ex("Comprou pão e queijo.", "Купив хліб і сир."),
          ex("Não comeu nem bebeu.", "Не їв і не пив."),
          ex("Nem comeu nem bebeu.", "Ні їв, ні пив."),
        ],
      },
      {
        title: "Протиставлення: mas / porém",
        body: "`mas` — нейтральне «але». `porém`, `contudo`, `todavia` — книжніші, часто після крапки або крапки з комою, не обов'язково між двома короткими групами.",
      },
      {
        title: "Розділові: ou",
        body: "`ou` — альтернатива. `ou… ou…` підкреслює взаємовиключення. `quer… quer…`, `seja… seja…` — «чи то… чи то…».",
      },
    ],
    examples: [
      ex("Abriu a janela e deixou entrar o ar.", "Відчинив вікно й впустив повітря."),
      ex("Quer ficar, mas tem de sair.", "Хоче лишитися, але мусить вийти."),
      ex("Podes vir de comboio ou de autocarro.", "Можеш приїхати поїздом або автобусом.", { variety: "PT" }),
      ex("Não ligou nem mandou mensagem.", "Не подзвонив і не надіслав повідомлення."),
      ex("Estava cansado; porém, acabou o trabalho.", "Був утомлений; проте роботу закінчив."),
      ex("Penso, logo existo.", "Мислю, отже існую."),
    ],
    markers: ["e", "nem", "ou", "mas", "porém", "contudo", "todavia", "logo", "portanto", "pois"],
    exceptions:
      "`pois` буває сурядним висновковим (`Está frio, pois fecha a janela` — рідше) і пояснювальним (`Fecha, pois está frio`). У PT-PT `pois` ще й дискурсивний маркер відповіді («так», «ну»). Не плутайте сурядне `porque` («бо») з підрядним причини, яке відкриває залежне речення: межа іноді тонка, але інтонація й кома допомагають.",
    mistakes: [
      mistake(
        "Não comeu e bebeu. (якщо мали на увазі «не їв і не пив»)",
        "Não comeu nem bebeu. / Não comeu e não bebeu.",
        "`e` не переносить заперечення автоматично на другий дієслівний член. Для «і не» ставте `nem` або повторіть `não`.",
      ),
      mistake(
        "Mas porém ele veio.",
        "Mas ele veio. / Porém, ele veio.",
        "Два протиставні сполучники поспіль — надлишок.",
      ),
    ],
    ukrainian:
      "Українські *і / та / а / але / або / ні… ні* добре лягають на `e / mas / ou / nem… nem`. Пастки: (1) українське *а* то протиставне, то єднальне — португальською протиставлення майже завжди `mas`, не `e`; (2) *ні* на початку (`Ні прийшов, ні подзвонив`) = `Nem veio nem ligou`, часто без окремого `não` на дієслові, якщо `nem` уже стоїть перед ним.",
    brPt:
      "Набір сполучників спільний. PT-PT частіше вживає `pois` як реакцію в діалозі. PT-BR у висновках любить `então` як дискурсний маркер поруч із `portanto`. На сурядну граматику це майже не впливає.",
    tables: [
      {
        caption: "Класи сурядних",
        headers: ["Клас", "Головні сполучники", "Значення"],
        rows: [
          ["aditivas", "e, nem, não só… mas também", "додавання"],
          ["adversativas", "mas, porém, contudo, todavia", "протиставлення"],
          ["alternativas", "ou, ou… ou, quer… quer", "альтернатива"],
          ["conclusivas", "logo, portanto, por isso, pois", "висновок"],
          ["explicativas", "pois, que, porque", "пояснення"],
        ],
      },
    ],
  },
  {
    id: "subordinating",
    slug: "subordinating",
    category: "conjunctions",
    titleUk: "Підрядні сполучники",
    titlePt: "Conjunções subordinativas",
    titleEn: "Subordinating conjunctions",
    summary:
      "Огляд класів підрядних сполучників і того, як вони вибирають індикатив чи кон'юнктив.",
    aliases: ["підрядні сполучники", "subordinativas", "embora", "porque", "se", "quando"],
    related: [
      "subjunctive-triggers",
      "conditional-clauses",
      "purpose-clauses",
      "temporal-clauses",
      "indicative-vs-subjunctive",
    ],
    intro:
      "Підрядні сполучники (`conjunções subordinativas`) відкривають залежне речення. Важливо не запам'ятати «список слів», а зрозуміти **клас**: причина, час, умова, мета, допустовість, порівняння, наслідок, комплемент.\n\nВід класу залежить спосіб дієслова. Причина з `porque` про факт — індикатив. Мета з `para que` — кон'юнктив, бо ситуація ще не факт. Допустове `embora` — кон'юнктив майже завжди. Часове `quando` про майбутнє — **майбутній кон'юнктив**, візитівка португальської.\n\nСполучник може бути простим (`que`, `se`, `quando`) або складеним (`locução conjuncional`: `ainda que`, `apesar de que`, `assim que`, `já que`).",
    formulas: [
      {
        label: "Підрядність",
        pattern: "P_головне + Conj + P_залежне (спосіб за семантикою)",
        note: "Не сполучник «магічно» ставить кон'юнктив, а значення: факт vs не-факт, мета, оцінка, ірреальність.",
      },
    ],
    uses: [
      {
        title: "Комплемент: que",
        body: "`Digo que…`, `Acho que…` — індикатив, якщо мовець подає зміст як судження/факт. `Quero que…`, `Duvido que…` — кон'юнктив. Див. [[complement-clauses]] і [[subjunctive-triggers]].",
      },
      {
        title: "Час і умова",
        body: "`quando`, `assim que`, `logo que` + майбутня дія: futuro do conjuntivo (`quando chegares`). `se` реальної умови в майбутньому — теж futuro do conjuntivo (`se chover`). Контрфакт: `se` + imperfeito do conjuntivo.",
      },
      {
        title: "Мета, допуст, причина",
        body: "`para que`, `a fim de que` — кон'юнктив. `embora`, `mesmo que`, `ainda que` — кон'юнктив. `porque`, `já que`, `como` (причина на початку) — індикатив, коли причина подана як факт.",
      },
    ],
    examples: [
      ex("Acho que ele vem.", "Думаю, що він прийде. (індикатив: судження як зміст думки)"),
      ex("Quero que ele venha.", "Хочу, щоб він прийшов. (кон'юнктив: бажання)"),
      ex("Quando chegares, liga.", "Як приїдеш, зателефонуй.", { variety: "PT" }),
      ex("Quando você chegar, liga.", "Як приїдеш, зателефонуй.", { variety: "BR" }),
      ex("Embora esteja cansada, continua.", "Хоч вона втомилася, продовжує."),
      ex("Falo devagar para que entendas.", "Говорю повільно, щоб ти зрозумів.", { variety: "PT" }),
      ex("Como estava frio, ficámos em casa.", "Оскільки було холодно, ми лишилися вдома.", { variety: "PT" }),
    ],
    markers: [
      "que",
      "se",
      "quando",
      "porque",
      "embora",
      "para que",
      "ainda que",
      "assim que",
      "já que",
      "como",
    ],
    exceptions:
      "Той самий ланцюжок може бути прийменником, а не сполучником: `apesar de` + інфінітив / іменник vs `apesar de que` + особове речення. `como` буває порівняльним, причинним і відносним. `que` — найбагатофункціональніше слово мови: сполучник, відносний займенник, експлетив.",
    mistakes: [
      mistake(
        "Quando você vai chegar, me liga. (як нейтральне майбутнє в підрядному)",
        "Quando você chegar, liga. / Quando chegares, liga.",
        "У часовому підрядному про майбутнє португальська ставить futuro do conjuntivo, не futuro do indicativo й не `ir` + inf як єдину норму.",
      ),
      mistake(
        "Embora ela está cansada…",
        "Embora ela esteja cansada…",
        "`embora` відкриває кон'юнктив. Індикатив тут — типова калька з української *хоч вона втомлена* як факт.",
      ),
    ],
    ukrainian:
      "Українські *що / щоб / якщо / коли / хоч / бо* частково відповідають, але **спосіб** інший. Українське *щоб* уже маркує мету/бажання морфологією; португальське `que` саме по собі цього не робить — спосіб на дієслові (`vem` vs `venha`) несе різницю. *Коли приїдеш* у майбутньому — український майбутній час; португальською це кон'юнктив, не `quando chegarás`.",
    brPt:
      "Сполучники спільні. Різниця — у формі дієслова після них: PT-PT `quando chegares` (`tu`), PT-BR `quando você chegar`. `Se` + futuro do conjuntivo живе в обох стандартах (`se chover`, `se você puder`). У розмовному PT-BR інколи чути індиктив замість кон'юнктива після `embora` — у писемній нормі це не зразок.",
    tables: [
      {
        caption: "Клас → типовий спосіб",
        headers: ["Клас", "Сполучники", "Типовий спосіб"],
        rows: [
          ["completivas", "que, se", "залежить від головного дієслова"],
          ["causais", "porque, já que, como", "indicativo (факт)"],
          ["temporais", "quando, assim que, enquanto", "futuro do conjuntivo, якщо майбутнє"],
          ["condicionais", "se, caso, desde que", "futuro / imperfeito do conjuntivo"],
          ["finais", "para que, a fim de que", "conjuntivo"],
          ["concessivas", "embora, mesmo que, ainda que", "conjuntivo"],
        ],
        scroll: true,
      },
    ],
  },
  {
    id: "que-de-que",
    slug: "que-de-que",
    category: "conjunctions",
    titleUk: "que / de que",
    titlePt: "que e de que",
    titleEn: "que vs de que",
    summary:
      "Гніздо дієслова й іменника: tenho certeza de que, gosto que vs gosto de que — коли de обов'язкове.",
    aliases: ["de que", "que", "regência", "certeza de que"],
    related: ["complement-clauses", "verb-preposition", "gostar", "subordinating"],
    intro:
      "Багато іменників, прикметників і дієслів вимагають прийменника `de` перед комплементом. Коли комплемент — речення з `que`, прийменник **не зникає**: `tenho certeza de que…`, `gosto de que…` (якщо взагалі беруть речення), `preciso de que…`.\n\nПропуск `de` — одна з найчастотніших рис розмовної мови і водночас типова помилка в формальному тексті: `tenho certeza que` чути постійно, норма писемності — `tenho certeza de que`.\n\nЦе не «два сполучники `que` і `de que`». Сполучник завжди `que`; `de` належить **керування** головного слова. Є зворотний випадок — *queísmo* навпаки не стоїть у фокусі: зайве `de` там, де дієслово його не хоче (`penso de que` замість `penso que`).",
    formulas: [
      {
        label: "керування зберігається",
        pattern: "V/N/Adj + de + que + P",
        note: "Якщо без речення було б de + іменник, з реченням буде de que.",
      },
      {
        label: "Прямий комплемент",
        pattern: "V + que + P",
        note: "dizer que, achar que, pensar que — без de.",
      },
    ],
    formation:
      "Тест простий: замініть підрядне на іменник. `certeza de isso` → `certeza disso` → `certeza de que`. `penso isso` → `penso que`. `gosto de música` → якщо берете речення, логічно `gosto de que…`, хоча частіше перебудовують: `gosto que` у мовленні, або `gosto de` + інфінітив.\n\n`precisar`: PT-BR часто `preciso que` + кон'юнктив; PT-PT `preciso de que` або, природніше, `preciso que` теж зустрічається. Перевіряйте керування конкретного слова.",
    uses: [
      {
        title: "Іменники й прикметники з de",
        body: "`certeza`, `ideia`, `dúvida`, `medo`, `esperança`, `convencido`, `consciente` — майже завжди `de que`.",
        examples: [
          ex("Tenho certeza de que ele vem.", "Я впевнений, що він прийде."),
          ex("Estou convencido de que é verdade.", "Я переконаний, що це правда."),
        ],
      },
      {
        title: "Дієслова без de",
        body: "`dizer`, `achar`, `pensar`, `acreditar` (у значенні «вважати»), `afirmar` — прямий `que`.",
        examples: [
          ex("Penso que vai chover.", "Думаю, що буде дощ."),
          ex("Acho que não.", "Гадаю, що ні."),
        ],
      },
    ],
    examples: [
      ex("Gosto que venhas.", "Мені приємно, що ти приходиш.", {
        note: "Модель gostar que + conjuntivo вживається; не переносіть автоматично de з gostar de + іменник." ,
      }),
      ex("Lembro-me de que o disse.", "Пам'ятаю, що він це сказав."),
      ex("Preciso de que me ajudes.", "Мені потрібно, щоб ти допоміг.", { variety: "PT" }),
      ex("Preciso que você me ajude.", "Мені потрібно, щоб ти допоміг.", { variety: "BR" }),
      ex("A ideia de que isso resolve tudo é ingénua.", "Ідея, ніби це все вирішує, наївна.", {
        variety: "PT",
      }),
      ex("Não há dúvida de que funcionou.", "Немає сумніву, що спрацювало."),
    ],
    markers: ["de que", "que", "certeza de", "lembrar-se de", "gostar de", "pensar que"],
    exceptions:
      "`acreditar em` vs `acreditar que`: віра в щось — `em`; зміст думки — `que` без `de`. `insistir em que`, `concordar em que` / `concordar que`. Деякі слова вагаються між нормами — тоді дивіться словник керування, а не інтуїцію з української.",
    mistakes: [
      mistake(
        "Penso de que vai chover.",
        "Penso que vai chover.",
        "Зайве `de` (dequeísmo). `pensar` бере прямий комплемент.",
      ),
      mistake(
        "Tenho certeza que é verdade. (у формальному тексті)",
        "Tenho certeza de que é verdade.",
        "Іменник `certeza` вимагає `de`. У мовленні пропуск частий; у тексті ставте `de`.",
      ),
      mistake(
        "Lembro que (якщо мають на увазі «пам'ятаю, що», з pronominal)",
        "Lembro-me de que… / Lembro que… (непрономінальне, PT-BR)",
        "`lembrar-se` бере `de`. Непрономінальне `lembrar` (часто PT-BR) може брати прямий комплемент.",
      ),
    ],
    ukrainian:
      "Українське *впевнений, що* не вимагає прийменника перед *що*. Португальське `certo` / `certeza` тримає `de`, бо конструкція та сама, що `certeza de uma coisa`. Думайте «іменник + de + зміст», а не «сполучник *що* = `que` завжди без прийменника».",
    brPt:
      "Пропуск `de` перед `que` частотніший у PT-BR, зокрема після `certeza`, `dúvida`, `precisar`. Писемні редакції Бразилії все одно часто вимагають `de que` там, де є керування. PT-PT у нормі консервативніший. `lembrar` vs `lembrar-se de` — окрема регіональна керування: PT-PT майже завжди прономінальне з `de`.",
    tables: [
      {
        caption: "Швидкий тест",
        headers: ["Головне слово", "З іменником", "З реченням"],
        rows: [
          ["pensar", "pensar isso", "pensar que"],
          ["dizer", "dizer a verdade", "dizer que"],
          ["certeza", "certeza disso", "certeza de que"],
          ["lembrar-se", "lembrar-se disso", "lembrar-se de que"],
          ["gostar", "gostar de música", "часто gostar de + inf / gosto que"],
          ["insistir", "insistir nisso", "insistir em que"],
        ],
        scroll: true,
      },
    ],
  },
];
