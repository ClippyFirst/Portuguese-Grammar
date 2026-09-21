import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

export const pages: GrammarPage[] = [
  {
    id: "crase",
    slug: "overview",
    category: "crase",
    titleUk: "Crase (à / às)",
    titlePt: "Crase",
    titleEn: "Crase",
    summary: "Злиття прийменника a з артиклем a (або з початковим a- вказівного aquele). Орфографія обох стандартів, не «бразильська вигадка».",
    aliases: ["crase", "à", "às", "краз", "a + a", "гравіс"],
    related: [
      "a-vs-crase",
      "prep-a",
      "a-article",
      "crase-rules",
      "crase-optional",
      "articles-definite",
      "contractions-overview",
    ],
    intro: "Crase — це **злиття двох a**: прийменника `a` і означеного артикля `a` (або `as`, або початкового `a` у `aquele/aquela/aquilo`). На письмі злиття позначають гравісом: `à`, `às`, `àquele`, `àquela`, `àquilo`. Вимова в багатьох акцентах збігається з простим `a` — тому явище передусім **орфографічне**.\n\nЦе не окрема «бразильська граматика». Гравіс на `à` є і в Португалії, і в Бразилії, і в африканських стандартах. Різниця педагогічна: бразильська школа зробила з crase окремий іспитовий жанр; європейські граматики частіше говорять просто про контракцію `a` + `a` у ряду `ao / à / aos / às`.\n\nНе існує crase з чоловічим іменником (`ao livro`, без гравіса), з дієсловом (`começar a ler`) чи з більшістю займенників (`a ela`). Там другого `a`-артикля немає — зливати нічого.",
    formulas: [
      {
        label: "Ядро",
        pattern: "a PREP + a ART → à",
        note: "Множина: a + as → às. Чоловічий відповідник без гравіса: a + o → ao.",
      },
      {
        label: "Із вказівним",
        pattern: "a + aquele → àquele",
        note: "Так само àquela, àqueles, àquelas, àquilo.",
      },
    ],
    formation: "Гравіс (`acento grave`) у сучасній португальській майже не використовується ні для чого, крім crase. Це не наголосовий знак на кшталт акута в `já`: він **сигналізує злиття**.\n\nЩоб виникла crase, потрібні одночасно: (1) синтаксична позиція, що вимагає прийменника `a`; (2) іменникова група, що вимагає означеного артикля `a/as` (або вказівного `aquele…`). Якщо бракує хоча б однієї умови — пишеться голе `a`.\n\nПрактичний тест (детально на сторінці a vs à): замініть жіночий іменник на чоловічий. Якщо з'являється `ao`, у жіночому потрібне `à`. Якщо лишається голе `a`, гравіса немає.",
    uses: [
      {
        title: "Прийменник a + жіночий означений іменник",
        body:  "Найчистіший випадок: `vou à escola` (пор. `vou ao colégio`), `entreguei à diretora` (пор. `ao diretor`), `refiro-me à questão`.",
        examples: [
          ex("Vou à estação.", "Йду на вокзал."),
          ex("Vou ao aeroporto.", "Йду в аеропорт.", { note: "Чоловічий відповідник того самого прийменника a." }),
          ex("Isto pertence à empresa.", "Це належить компанії."),
        ],
      },
      {
        title: "Часові вирази",
        body:  "`às duas horas`, `à meia-noite`, `à tarde` (часто), `às vezes`. `ao meio-dia`, `ao anoitecer` — той самий прийменник, чоловічий або інша структура, без гравіса.",
        examples: [
          ex("A aula começa às nove.", "Пара починається о дев'ятій."),
          ex("À noite a cidade esvazia-se.", "Уночі місто порожніє."),
        ],
      },
      {
        title: "àquele / àquela / àquilo",
        body:  "Тут друге `a` — не артикль, а початок вказівного. Злиття все одно позначають гравісом.",
        examples: [
          ex("Não me refiro àquele relatório.", "Я маю на увазі не той звіт."),
          ex("Àquela hora já era tarde.", "О тій годині вже було пізно."),
        ],
      },
      {
        title: "Locuções: à procura de, à espera de, à medida que",
        body:  "У багатьох сталих прийменникових і прислівникових виразах `à` застигло. Їх зручно вчити як рамки, не виводячи щоразу з нуля — але внутрішня структура все одно a+a.",
        examples: [
          ex("Estou à procura de um quarto.", "Я шукаю кімнату."),
          ex("À medida que lemos, a tese enfraquece.", "У міру читання теза слабшає."),
        ],
      },
    ],
    examples: [
      ex("Fui à praia cedo.", "Я рано ходив/ходила на пляж."),
      ex("Fui ao mar cedo.", "Я рано ходив/ходила до моря."),
      ex("Diga à Maria que ligo mais tarde.", "Скажіть Марії, що я зателефоную пізніше.", { variety: "PT", note: "Якщо ім'я несе артикль; інакше Diga a Maria — без crase." }),
      ex("As inscrições vão até às 17h? / até as 17h.", "Запис до 17:00?", { note: "після até crase часто обговорюють як факультативну / залежну від читання até + a." }),
      ex("Chegámos à Ucrânia de madrugada.", "Ми прибули в Україну над ранок."),
      ex("Chegámos a Portugal de madrugada.", "Ми прибули в Португалію над ранок."),
      ex("Não obedeço à pressão.", "Я не підкоряюся тиску."),
      ex("Vou a pé.", "Йду пішки.", { note: "Немає артикля — немає crase." }),
    ],
    markers: [
      "à",
      "às",
      "àquele / àquela / àquilo",
      "às vezes",
      "à noite",
      "à procura de",
      "à medida que",
    ],
    exceptions: "Crase **неможлива** перед чоловічим іменником, перед більшістю дієслів, перед `um/uma`, перед голими топонімами без артикля, перед `ela/você/quem` у типових рамках. Детальний розподіл — обов'язкова / факультативна / заборонена.\n\nНе плутати гравіс `à` з акутом `á` (літера в інших мовах; у португальській окремого слова `á` як crase немає) і з `á-` в старих орфографіях. Єдиний правильний знак crase — grave: `à`.",
    mistakes: [
      mistake(
        "Vou a escola.",
        "Vou à escola.",
        "Є і прийменник a (ir a), і артикль a (a escola). Без злиття фраза орфографічно неповна. Українське «до школи» не показує другого a.",
      ),
      mistake(
        "Vou à colégio.",
        "Vou ao colégio.",
        "colégio чоловічий: a + o → ao, без гравіса. Crase не ставиться «бо йдемо кудись».",
      ),
      mistake(
        "Começar à trabalhar.",
        "Começar a trabalhar.",
        "Після a стоїть інфінітив, не артикль. Зливати нічого.",
      ),
      mistake(
        "Crase існує тільки в Бразилії.",
        "à пишеться в усіх стандартах португальської.",
        "Бразильська школа більше екзаменує тему; явище орфографічне й спільне.",
      ),
    ],
    ukrainian: "Українська не має ні артикля, ні злиття `до+та`. `Йду до школи` = `vou à escola` лише як **цілий еквівалент**, не по частинах. Друге `a` українець не «чує», бо його рідна граматика не вимагає означеного артикля перед `escola`.\n\nСаме тому тест із чоловічим іменником корисніший, ніж спроба перекласти кожне `a`. Ви перевіряєте наявність артикля через `ao`, яке добре видно.",
    brPt: "Орфографія `à/às/àquele` спільна. PT-PT частіше пояснює явище як рядок контракцій `ao/à`. PT-BR має величезну шкільну літературу «crase obrigatória / facultativa / proibida». Зміст збігається більше, ніж тон підручників.\n\nВимова: в багатьох бразильських акцентах `a` і `à` майже омофони; у європейській португальській теж не варто розраховувати, що вухо завжди розрізнить. Тому правило письмове.",
    regional: "Африканські офіційні тексти використовують `à` за європейською орфографією. Немає окремої «ангольської crase». Помилки типу пропуску гравіса всюди однакові за механізмом: не побачили артикля.",
    tables: [
      {
        caption: "Симетрія з чоловічим рядом",
        headers: ["Жіночий", "Чоловічий відповідник"],
        rows: [
          ["à escola", "ao colégio / ao liceu"],
          ["à diretora", "ao diretor"],
          ["às alunas", "aos alunos"],
          ["àquela senhora", "àquele senhor"],
          ["às três horas", "ao meio-dia"],
          ["à Ucrânia", "ao Brasil  (але a Portugal — нуль)"],
        ],
      },
    ],
  },
  {
    id: "crase-rules",
    slug: "rules",
    category: "crase",
    titleUk: "Коли crase обов'язкова",
    titlePt: "Crase obrigatória",
    titleEn: "Obligatory crase",
    summary: "Жіночий визначений іменник після прийменника a, годинник às, locuções, àquele. Там, де чоловічий ряд дає ao.",
    aliases: ["à", "обов'язкова crase", "crase obrigatória", "às horas"],
    related: ["crase", "crase-optional", "a-vs-crase", "a-article", "prep-a"],
    intro: "Обов'язкова crase — не список «слів із à», а наслідок двох умов: прийменник `a` **і** жіночий означений артикль (або `aquele…`). Коли обидві умови стабільні, гравіс не стоїть на розсуд автора.\n\nНайстійкіші зони: напрямок / адресат із визначеною жіночою групою; час `às + година`; низка locuções adverbiais / prepositivas; контракція з `aquele`.",
    formulas: [
      {
        label: "Діагноз",
        pattern: "… a + a Nжін.означ. → à N",
        note: "Якщо чоловіча заміна дає ao — crase обов'язкова.",
      },
    ],
    formation: "Не додавайте гравіс до будь-якого `a` перед жіночим словом. Потрібен саме прийменник. У `a casa é antiga` перше `a` — артикль підмета, crase немає. У `fui à casa da Ana` прийменник + артикль — crase є.",
    uses: [
      {
        title: "Адресат і напрямок із визначеною жіночою групою",
        body:  "Дієслова з регенцією `a` (`ir a`, `chegar a`, `voltar a`, `pertencer a`, `obedecer a`, `assistir a` в значенні «дивитися/бути присутнім» у PT-PT, `referir-se a`, `dar a`). Якщо додаток — `a`+жіночий іменник з артиклем, пишемо `à`.",
        examples: [
          ex("Assistimos à peça.", "Ми були на виставі.", { variety: "PT" }),
          ex("O prémio pertence à equipa.", "Премія належить команді."),
          ex("Voltei à universidade em setembro.", "Я повернувся/повернулась в університет у вересні."),
        ],
      },
      {
        title: "Години й «о … годині»",
        body:  "`às 8h`, `às três e meia`, `à 1h` / `à uma hora` (тут `à` = a + a з `a uma`? Обережно: `à uma hora` = a + a (артиклю) + uma як числівник години; багато описів дають `à uma` як прийнятне саме в годиннику). Надійне ядро: `às` + числівник години в множинній рамці `horas`.",
        examples: [
          ex("Saio às cinco.", "Я виходжу о п'ятій."),
          ex("De à meia-noite às duas, a linha fecha.", "З півночі до другої лінія закрита."),
        ],
      },
      {
        title: "Locuções з застиглим à",
        body:  "`à procura de`, `à espera de`, `à frente de`, `à direita`, `à esquerda`, `à noite`, `à tarde`, `à vontade`, `à medida que`, `à proporção que`, `às vezes`, `às claras`, `à toa`. Деякі мають чоловічий близнюк: `ao lado de`, `ao acaso`.",
        examples: [
          ex("Fica à direita.", "Буде праворуч."),
          ex("Ficámos à espera do resultado.", "Ми чекали на результат."),
          ex("Não vivas à toa.", "Не живи абияк."),
        ],
      },
      {
        title: "àquele, àquela, àqueles, àquelas, àquilo",
        body:  "Завжди з гравісом, коли є прийменник `a`. Це не «факультативно, бо вказівний».",
        examples: [
          ex("Dirija-se àquela secretária.", "Зверніться до тієї секретарки / до того столу (secretária — двозначне)."),
          ex("Não dês ouvidos àquilo.", "Не слухай того."),
        ],
      },
      {
        title: "Перед жіночими топонімами, що несуть артикль",
        body:  "`chegar à França` / `à Ucrânia` / `à China`. Якщо топонім голий — crase немає: `chegar a Portugal`, `a Angola`. Обов'язковість тут наслідок лексикалізації артикля, не «бо країна жіноча українською».",
        examples: [
          ex("Viajámos à Alemanha de comboio.", "Ми поїхали до Німеччини поїздом.", { variety: "PT" }),
          ex("Viajámos a Portugal de comboio.", "Ми поїхали до Португалії поїздом."),
        ],
      },
    ],
    examples: [
      ex("Entregue o formulário à secretaria.", "Віднесіть формуляр до секретаріату."),
      ex("O convite destina-se às candidatas.", "Запрошення призначене для кандидаток."),
      ex("Cheguei à conclusão oposta.", "Я дійшов/дійшла протилежного висновку."),
      ex("Às vezes calar-se é a resposta.", "Інколи мовчання — це відповідь."),
      ex("Aos alunos, explico; às alunas, também.", "Учням пояснюю; ученицям теж."),
      ex("Não me habituei à ideia.", "Я не звик/звикла до цієї думки."),
    ],
    markers: [
      "ir à",
      "chegar à",
      "pertencer à",
      "às + година",
      "à procura de",
      "àquele",
      "às vezes",
    ],
    exceptions: "Навіть «обов'язкові» зони скасовуються, якщо артикль зникає: `ir a Lisboa` (місто без артикля), `assistir a espetáculos` (гола множина / нуль у деяких уживаннях), `chegar a casa` (ідіома).\n\n`assistir o jogo` без `a` — поширена регенція PT-BR («дивитися гру» з прямим додатком). Тоді crase немає, бо немає прийменника. PT-PT частіше `assistir ao jogo` / `à peça`. Різниця регенції, не різний знак crase.",
    mistakes: [
      mistake(
        "Cheguei a conclusão.",
        "Cheguei à conclusão.",
        "chegar a + a conclusão. Українське «дійшов висновку» без артикля; португальська група визначена.",
      ),
      mistake(
        "Vou à Lisboa.",
        "Vou a Lisboa.",
        "Місто без артикля. Обов'язкова crase не поширюється на голі топоніми. Пор. vou ao Porto.",
      ),
      mistake(
        "às vezes написане as vezes",
        "às vezes",
        "Застигла locução з a + as. as vezes читається як «ті рази» без прийменника.",
      ),
    ],
    ukrainian: "Список «завжди ставте à перед школою, пляжем, годиною» працює як милиця, але ламається на `Lisboa`, `Portugal`, `ela`, `trabalhar`. Тримати треба умови (прийменник + артикль), а милиці — як частотні ілюстрації.",
    brPt: "`assistir a` vs `assistir` (прямий додаток) змінює наявність crase: BR `assisti o jogo` (розмовно/поширено) vs PT `assisti ao jogo`. Перед `à peça` в обох, якщо регенція з `a` збережена.",
    tables: [
      {
        caption: "Обов'язкові ядра",
        headers: ["Рамка", "Приклад", "Чоловічий контроль"],
        rows: [
          ["ir a + означ. жін.", "ir à escola", "ir ao liceu"],
          ["hora", "às 18h", "ao meio-dia"],
          ["aquele", "àquele dia", "— (вже a+a)"],
          ["locução", "à procura de", "ao encontro de"],
          ["топонім з артиклем", "à Ucrânia", "ao Brasil"],
        ],
      },
    ],
  },
  {
    id: "crase-optional",
    slug: "optional",
    category: "crase",
    titleUk: "Факультативна й заборонена crase",
    titlePt: "Crase facultativa",
    titleEn: "Optional and forbidden crase",
    summary: "Перед жіночими іменами та присвійними гравіс часто на вибір; перед чоловічим, дієсловом, um, ela — його бути не може.",
    aliases: [
      "факультативна crase",
      "crase proibida",
      "заборонена crase",
      "à Maria",
    ],
    related: [
      "crase",
      "crase-rules",
      "a-vs-crase",
      "articles-proper-names",
      "articles-possessives",
    ],
    intro: "Шкільна тріада Бразилії — obrigatória / facultativa / proibida — зручна, якщо не перетворювати її на магію. Факультативність з'являється там, де **артиклю можна не бути**: жіноче особове ім'я, присвійний (особливо з огляду на PT-BR), деякі `até a`. Заборона — там, де другого `a` немає в принципі.\n\nФакультативне `à` не означає «ставте, щоб виглядало розумніше». Якщо ви пишете PT-BR з голим ім'ям, логічніше `a Maria`. Якщо пишете PT-PT з `a Maria` як артикль+ім'я після прийменника — `à Maria`.",
    formulas: [
      {
        label: "Факультативно (залежить від артикля)",
        pattern: "a + (ART?) + Nomeжін.  →  a Maria  |  à Maria",
        note: "Гравіс лише якщо ви реально ставите артикль.",
      },
      {
        label: "Заборонено",
        pattern: "a + Vinf / a + um / a + ele / a + Nчол.",
        note: "Немає артикля a — немає à.",
      },
    ],
    uses: [
      {
        title: "Жіночі особові імена",
        body:  "Якщо різновид / регістр ставить артикль перед ім'ям, після прийменника `a` буде crase: `fui à Ana`. Якщо ім'я голе — `fui a Ana`. Обидва орфографічно послідовні. Не змішуйте в одному тексті `a Ana chegou` (голе) і `fui à Ana` без причини.",
        examples: [
          ex("Entreguei as chaves à Maria.", "Я віддав/віддала ключі Марії.", { variety: "PT" }),
          ex("Entreguei as chaves a Maria.", "Я віддав/віддала ключі Марії.", { variety: "BR" }),
        ],
      },
      {
        title: "Перед присвійними жіночого роду",
        body:  "`fui a minha casa` vs `fui à minha casa`. PT-PT очікує артикль → crase природна. PT-BR без артикля → без crase. Шкільні граматики BR часто саме тому кажуть «facultativa перед присвійним».",
        examples: [
          ex("Vou à tua casa depois do almoço.", "Після обіду зайду до тебе.", { variety: "PT" }),
          ex("Vou a tua casa depois do almoço.", "Після обіду зайду до тебе.", { variety: "BR" }),
        ],
      },
      {
        title: "Заборона: немає другого a",
        body:  "Перед чоловічим іменником; перед інфінітивом; перед неозначеним `um/uma` (`a uma amiga` — прийменник + uma, не два артиклі a); перед більшістю займенників (`a ela`, `a você`, `a quem`); перед голими топонімами; у `a partir de`; у межах `de X a Y` без артикля (`de segunda a sexta`).",
        examples: [
          ex("Começou a chover.", "Почав іти дощ."),
          ex("Escrevi a uma colega.", "Я написав/написала колезі."),
          ex("Disse a ela a verdade.", "Я сказав/сказала їй правду."),
          ex("A partir de amanhã, novo horário.", "Від завтра — новий розклад."),
        ],
      },
      {
        title: "Оманливі жіночі слова",
        body:  "`a` перед жіночим ще не crase, якщо це лише артикль підмета/прямого додатка: `A aluna chegou`. `Vi a aluna` — прямий додаток, прийменника немає, гравіса немає. Crase з'являється лише коли `vi` замінюють на дієслово з `a` (`refiro-me à aluna`).",
        examples: [
          ex("Vi a diretora.", "Я бачив/бачила директорку. — без crase."),
          ex("Falei à diretora.", "Я говорив/говорила з директоркою. — є прийменник a."),
        ],
      },
    ],
    examples: [
      ex("Não fui a Roma, fui a Lisboa.", "Я їздив/їздила не в Рим, а в Лісабон."),
      ex("Não fui à Baixa.", "Я не ходив/ходила в Байшу.", { note: "Baixa в цьому вживанні має означений артикль: a Baixa → à Baixa." }),
      ex("Dirija-se a qualquer janela.", "Зверніться до будь-якого віконця.", { note: "qualquer — не означений артикль." }),
      ex("De janeiro a março.", "З січня по березень."),
      ex("De janeiro à Páscoa.", "З січня до Великодня.", { note: "a Páscoa з артиклем → можливе à." }),
      ex("Vou a pé e volto de metro.", "Туди пішки, назад метро."),
    ],
    markers: [
      "a Maria / à Maria",
      "a minha / à minha",
      "a ela",
      "a um / a uma",
      "a partir de",
      "começar a + INF",
    ],
    exceptions: "`até` + жіночий означений: шкільні джерела розходяться (`até às 15h` vs `até as 15h`). Обидва трапляються; `até às` читає `até` + прийменник `a` + артикль, `até as` — `até` безпосередньо + артикль. Виберіть одну логіку в тексті.\n\nПеред `senhora` / `madame` тощо crase часто є, бо артикль частини звертання: `à senhora`. Перед голим прізвищем — за моделлю імен.",
    mistakes: [
      mistake(
        "Falei à ela.",
        "Falei a ela. / Falei-lhe.",
        "ela — займенник. Другого a-артикля немає. Це одна з найчастотніших хибних crase.",
      ),
      mistake(
        "Vou à pé.",
        "Vou a pé.",
        "pé чоловічий і до того ж ідіома без артикля. Гравіс не ставиться «для краси».",
      ),
      mistake(
        "A aluna, vi-à ontem.",
        "A aluna, vi-a ontem.",
        "Тут a — клитик (її), не прийменник+артиклю. Клитик ніколи не отримує гравіса crase.",
      ),
      mistake(
        "Cheguei à uma conclusão. (як універсальне)",
        "Cheguei a uma conclusão.",
        "uma — неозначений артикль, не a. Злиття a+a немає. (Годинник à uma hora — інша рамка.)",
      ),
    ],
    ukrainian: "Заборонені зони збігаються з тим, де українець і так не шукає «означеності»: інфінітив, `вона`, `один`. Пастка — навпаки: після уроків про crase почати ставити `à` перед кожним жіночим словом. Фільтр: чи є прийменник `a`? чи є саме означений артикль `a`?",
    brPt: "Факультативність перед іменами й присвійними — майже прямий відбиток регіональної дистрибуції артикля. PT-PT зсуває ці зони до «практично обов'язково»; PT-BR — до «часто без». Шкільна етикетка facultativa корисна саме в бразильському контексті, де обидві орфографії живуть поруч.",
    regional: "Не оголошуйте факультативність універсальною нормою Африки чи Португалії. Описуйте її як наслідок опціональності артикля.",
    tables: [
      {
        caption: "Три кошики",
        headers: ["Обов'язкова", "Факультативна", "Заборонена"],
        rows: [
          ["à escola (ir a + a escola)", "à/a Maria", "a ela"],
          ["às 19h", "à/a minha casa", "a trabalhar"],
          ["àquele dia", "até às / até as 10h", "a um amigo"],
          ["à Ucrânia", "à/a Paula", "a Portugal"],
          ["à procura de", "—", "a pé"],
        ],
      },
    ],
  },
  {
    id: "a-vs-crase",
    slug: "a-vs-a",
    category: "crase",
    titleUk: "a vs à",
    titlePt: "a vs à",
    titleEn: "a vs à",
    summary: "Тест заміни на чоловічий іменник: якщо з'являється ao, жіночому потрібне à. Найнадійніший спосіб не вгадувати гравіс.",
    aliases: [
      "a чи à",
      "як перевірити crase",
      "ao teste",
      "teste do masculino",
      "гравіс перевірка",
    ],
    related: [
      "crase",
      "prep-a",
      "a-article",
      "crase-rules",
      "crase-optional",
      "articles-definite",
    ],
    intro: "Розрізнити `a` і `à` вухом важко. Надійний письмовий тест: **замініть жіночий іменник чоловічим** (з тим самим прийменником і тією самою визначеністю). Якщо в чоловічому варіанті бачите `ao`, у жіночому пишіть `à`. Якщо в чоловічому лишається голе `a`, гравіса немає.\n\nТест працює, бо `ao` / `à` — один ряд контракцій. Він не працює, коли ви підставляєте інший прийменник, знімаєте артикль або міняєте регенцію дієслова. Підставляти треба мінімально: рід іменника, більше нічого.\n\nТри графічні `a`, які плутають: артикль `a casa`; прийменник `a Portugal`; клитик `vi-a`. Гравіс стосується лише злиття прийменника з артиклем (або з `aquele`).",
    formulas: [
      {
        label: "Тест",
        pattern: "a + Nжін.  ?→  a + Nчол.",
        note: "Результат ao ⇒ пиши à. Результат a ⇒ пиши a. Результат àquele лишається окремим (вже a+a в корені).",
      },
    ],
    formation: "Алгоритм: (1) Чи є прийменник `a`? Якщо група — підмет або прямий додаток, стоп: артикль `a` без гравіса. (2) Чи є означений артикль жіночий / `aquele`? Якщо нуль, `um/uma`, займенник — стоп. (3) Зробіть чоловічу заміну. (4) Зафіксуйте орфографію.\n\nДля `às` тест множини: `aos` у чоловічому (`aos alunos` ⇒ `às alunas`). Для години чоловічий контроль — `ao meio-dia` поруч із `às três`.",
    uses: [
      {
        title: "Тест дає ao → пишемо à",
        body:  "Класичні пари, які варто тримати як камертон, а не як словник.",
        examples: [
          ex("Vou à farmácia.  ←  Vou ao supermercado.", "Йду в аптеку. / Йду в супермаркет."),
          ex("Entreguei à chefe.  ←  Entreguei ao chefe.", "Віддав/віддала начальниці. / начальнику."),
          ex("Refiro-me à lei.  ←  Refiro-me ao decreto.", "Маю на увазі закон. / декрет."),
          ex("Chegámos à estação.  ←  Chegámos ao apeadeiro.", "Прибули на вокзал. / на платформу."),
        ],
      },
      {
        title: "Тест дає голе a → гравіса немає",
        body:  "Чоловічий відповідник не утворює `ao`, бо немає артикля або немає того самого `a`.",
        examples: [
          ex("Vou a Lisboa.  ←  Vou a Madrid. / Vou ao Porto.", "До Лісабона без артикля; Порту з артиклем — уже ao Porto, отже o Porto виняток серед міст."),
          ex("Começou a gritar.  ←  Começou a gritar.", "Інфінітив в обох родах. Немає ao."),
          ex("Falei a ela.  ←  Falei a ele.", "Займенник. Пара симетрична без контракції."),
          ex("Escrevi a uma amiga.  ←  Escrevi a um amigo.", "Неозначений артикль: a um, не ao."),
        ],
      },
      {
        title: "Прямий додаток vs прийменниковий",
        body:  "`Vi a atriz` (бачив акторку — прямий додаток, артикль). Чоловічий контроль: `Vi o ator` — з'являється `o`, не `ao`. Отже в жіночому немає crase. Порівняйте `Me referi à atriz` / `Me referi ao ator`.",
        examples: [
          ex("Vi a atriz no café.", "Я бачив/бачила акторку в кафе. — a без гравіса."),
          ex("Me referi à atriz. / Referi-me à atriz.", "Я мав/мала на увазі акторку. — à.", { note: "Регенція referir-se a." }),
          ex("Vi o ator no café.", "Я бачив/бачила актора в кафе. — контроль: o, не ao."),
        ],
      },
      {
        title: "Топоніми: тест одночасно перевіряє артикль",
        body:  "Не всі жіночі країни дають crase після `a`: потрібен артикль. `a França` в багатьох уживаннях несе артикль → `à França`. `Portugal` не несе → `a Portugal`. Чоловічий контроль: `ao Brasil` vs `a Portugal` / `a Marrocos`.",
        examples: [
          ex("Voltei à Ucrânia.", "Я повернувся/повернулась в Україну.  ←  Voltei ao Brasil."),
          ex("Voltei a Portugal.", "Я повернувся/повернулась у Португалію.  ←  немає ao Portugal."),
          ex("Vou ao Porto.", "Їду в Порту. — місто з артиклем."),
          ex("Vou a Coimbra.", "Їду в Коїмбру. — місто без артикля."),
        ],
      },
    ],
    examples: [
      ex("Não vá à rua agora.", "Не виходьте зараз на вулицю.  ←  ao largo / ao pátio."),
      ex("Não vá a casa agora? / Não vá para casa.", "Не їдьте зараз додому?", { note: "ідіома casa часто з нулем; para casa уникає питання crase." }),
      ex("Isto é igual à anterior.", "Це тотожне попередній (версії).  ←  ao anterior."),
      ex("Isto é igual a zero.", "Це дорівнює нулю. — немає артикля a."),
      ex("Chegou a hora.", "Настала година/час. — a = артикль підмета, не прийменник."),
      ex("Chegou à hora marcada.", "Він/вона прибув(ла) о призначеній годині. — прийменник + артикль."),
      ex("Amo a língua portuguesa.", "Я люблю португальську мову. — прямий додаток, без crase."),
      ex("Dedico o livro à língua portuguesa.", "Присвячую книжку португальській мові. — a + a língua."),
    ],
    markers: [
      "teste do masculino",
      "ao ⇒ à",
      "a ele / a ela",
      "a + INF",
      "vi a vs referi-me à",
    ],
    exceptions: "Тест слабшає, коли чоловічого іменника з тим самим значенням немає (`à praia` — `ao mar` близьке, але не синонім). Тоді беріть будь-який чоловічий іменник **тієї самої синтаксичної рамки**: `vou à praia` / `vou ao clube`.\n\nЗ `aquele` тест не потрібен: форма вже містить `a-`. Пишіть `àquele`. З `este/esse` навпаки: `a este`, без гравіса.\n\nКлитик `a` після дієслова (`encontrar-a-emos` / `encontrá-la`) ніколи не перетворюється на `à` через тест: це не прийменник.",
    mistakes: [
      mistake(
        "Vou à supermercado.",
        "Vou ao supermercado.",
        "Тест не застосовують «навпаки». Чоловічий іменник бере ao, не à. Гравіс не є універсальним знаком напрямку.",
      ),
      mistake(
        "Vi à professora ontem.",
        "Vi a professora ontem.",
        "ver бере прямий додаток. Чоловічий контроль: vi o professor, не ao. Crase зайва.",
      ),
      mistake(
        "Vou a escola, бо «не чую артикля».",
        "Vou à escola.",
        "Українське вухо не детектує артикль. Тест: vou ao liceu → отже à escola.",
      ),
      mistake(
        "À Portugal, бо країна.",
        "A Portugal.",
        "Чоловічий контроль не ao Portugal, а a Portugal / a Marrocos. Країна без артикля.",
      ),
      mistake(
        "Referi-me a questão.",
        "Referi-me à questão.",
        "referir-se a вимагає прийменника; questão жіноча визначена. Контроль: ao assunto.",
      ),
    ],
    ukrainian: "Українська не допоможе почути різницю `a/à`. Допоможе **свідома підстановка**, якої в рідній мові немає. Зробіть тест звичкою на письмі, як перевірку роду: не інтуїція «чи жіноче», а «чи є ao в мінімальній парі».\n\nПерекладаючи на українську, і `vou a Lisboa`, і `vou à escola` стануть «їду до…». Різниця граматична внутрішня, її не треба зображати українським «ота школа».",
    brPt: "Тест спільний і в Ріо, і в Лісабоні. Відрізняється вхід: чи стоїть артикль перед `Maria` / `minha casa`. Сам механізм `ao ⇒ à` не регіональний. Не кажіть, що європейці «не роблять crase»: вони пишуть `à` так само, просто рідше влаштовують із цього окремий предмет.",
    regional: "В іспитах Бразилії (vestibular, concursos) цей тест — стандартний прийом. Він так само валідний для редагування європейського тексту. Користуйтеся ним як інструментом, не як національною емблемою.",
    tables: [
      {
        caption: "Камертон тесту",
        headers: ["Жіноче", "Чоловічий контроль", "Висновок"],
        rows: [
          ["vou à escola", "vou ao liceu", "à обов'язкове"],
          ["entreguei à Ana", "entreguei ao João", "à, якщо є артикль при імені"],
          ["entreguei a Ana", "entreguei a João", "без артикля — без à"],
          ["vi a atriz", "vi o ator", "не crase (прямий додаток)"],
          ["referi-me à atriz", "referi-me ao ator", "crase"],
          ["vou a Lisboa", "vou a Madrid", "без à"],
          ["vou à Bahia", "vou ao Recife", "топонім з артиклем"],
          ["a ela", "a ele", "заборонено"],
          ["a uma amiga", "a um amigo", "заборонено"],
          ["às alunas", "aos alunos", "às"],
        ],
      },
    ],
  },
];
