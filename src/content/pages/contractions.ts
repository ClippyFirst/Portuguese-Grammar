import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

export const pages: GrammarPage[] = [
  {
    id: "contractions-overview",
    slug: "overview",
    category: "contractions",
    titleUk: "Контракції: огляд",
    titlePt: "Contrações",
    titleEn: "Contractions overview",
    summary:
      "Обов'язкове злиття прийменника з артиклем: do, no, ao, pelo. Це морфонологічна парадигма, не список слів.",
    aliases: [
      "контракції",
      "contrações",
      "do",
      "no",
      "ao",
      "pelo",
      "злиття прийменника",
    ],
    related: [
      "de-article",
      "em-article",
      "a-article",
      "por-article",
      "articles-definite",
      "crase",
      "prep-a",
      "prep-demonstrative",
    ],
    intro:
      "Коли прийменники `de`, `em`, `a`, `por` стоять безпосередньо перед означеним артиклем `o/a/os/as`, португальська **зливає** їх в одну словоформу: `do`, `da`, `no`, `na`, `ao`, `à`, `pelo`, `pela`. У стандартній орфографії роздільне `de o`, `em a`, `por os` неможливе.\n\n"

    + "Українською це не має аналога: «з + той» не стає одним словом. Тому контракцію легко сприйняти як «ще 16 слів у словнику». Насправді це одна граматична операція: **прийменник + означений артикль**. Вивчивши чотири прийменники й чотири артиклі, ви вже маєте всю таблицю.\n\n"

    + "`à` (`a` + `a`) одночасно входить у цю парадигму і в орфографію crase. Не виривайте `à` з таблиці контракцій і не оголошуйте її «бразильською темою».",
    formulas: [
      {
        label: "Операція",
        pattern: "PREP + ART → контракція",
        note: "PREP ∈ {de, em, a, por}. ART ∈ {o, a, os, as}. У стандарті операція обов'язкова.",
      },
    ],
    formation:
      "Чотири прийменники дають чотири ряди. `de` + артикль → `d-` + артикль (`do da dos das`). `em` + артикль → `n-` + артикль (`no na nos nas`). `a` + артикль → `ao / à / aos / às`. `por` + артикль → `pel-` + артикль (`pelo pela pelos pelas`).\n\n"

    + "Інші прийменники з артиклем **не** зливаються: `para o`, `com a`, `sem os`, `sobre a`, `entre os`, `até a`. Виняток-ілюзія: розмовне `pra` < `para`, і далі `pro` / `pra` (`pra` + `o` → `pro` в мовленні PT-BR). Це регістр, не письмова парадигма `para`.\n\n"

    + "Перед неозначеним артиклем стандартна контракція з `de` / `em` / `a` / `por` **не** утворює `dum` як обов'язкову сучасну норму: пишуть `de um`, `em um` / `num` (останнє живе, особливо PT-PT і в мовленні), `a um`, `por um`. Ряд `dum / duma / dumuns` існує, але в сучасній прозі часто уникається на користь роздільного написання. Не змішуйте це з обов'язковими `do/da`.",
    uses: [
      {
        title: "Обов'язковість у стандарті",
        body: "Якщо артикль є, контракція є. Немає стилістичного варіанта `de o livro` в орфографії. Єдиний спосіб уникнути контракції — уникнути артикля (`de Portugal`, бо немає `o`).",
        examples: [
          ex("O livro do professor.", "Книжка викладача."),
          ex("Estou no Porto.", "Я в Порту."),
          ex("Vou ao mercado.", "Йду на ринок."),
          ex("Passei pela ponte.", "Я пройшов/пройшла через міст."),
        ],
      },
      {
        title: "Контракція діагностує артикль",
        body: "`no Brasil` одразу каже: є артикль. `em Portugal` — немає. Для україномовного це практичний тест топонімів і власних імен: почули `da Maria` — у цьому різновиді ім'я несе артикль.",
        examples: [
          ex("Venho da Ucrânia.", "Я з України. — a Ucrânia"),
          ex("Venho de Angola.", "Я з Анголи. — нуль"),
          ex("A casa da Maria.", "Дім Марії.", { variety: "PT" }),
          ex("A casa de Maria.", "Дім Марії.", { variety: "BR" }),
        ],
      },
    ],
    examples: [
      ex("Gosto do filme, não da série.", "Мені подобається фільм, не серіал."),
      ex("As chaves estão na gaveta.", "Ключі в шухляді."),
      ex("Chegámos ao aeroporto às sete.", "Ми прибули в аеропорт о сьомій."),
      ex("O texto foi assinado pelo diretor.", "Текст підписав директор. / Текст підписано директором."),
      ex("Falei do assunto com os colegas.", "Я говорив/говорила про це питання з колегами."),
      ex("Não vais ao cinema?", "Ти не йдеш у кіно?"),
    ],
    markers: [
      "do da dos das",
      "no na nos nas",
      "ao à aos às",
      "pelo pela pelos pelas",
    ],
    exceptions:
      "`para`, `com`, `sem`, `sobre`, `até`, `entre`, `desde`, `contra` не утворюють стандартних злиттів з означеним артиклем. `conosco` / `connosco`, `comigo` — інша система (прийменник + займенник).\n\n"

      + "Перед вказівними теж є контракції (`neste`, `deste`, `àquele`) — окрема сторінка, не плутати з артиклевими `no/do`.\n\n"

      + "Розмовне PT-BR `pro` (`pra + o`), `pra` (`para` / `para a`) не замінює письмові `para o` / `para a`. У формальному тексті пишіть `para o`.",
    mistakes: [
      mistake(
        "O livro de o professor.",
        "O livro do professor.",
        "Роздільне de o в стандартній орфографії неможливе. Українське «викладача» без злиття прийменника не виправдовує de o.",
      ),
      mistake(
        "Estou em o Brasil.",
        "Estou no Brasil.",
        "em + o → no. Те саме для na/nos/nas.",
      ),
      mistake(
        "Vou a o médico.",
        "Vou ao médico.",
        "a + o → ao. Для жіночого a + a → à (crase): vou à médica / vou à escola.",
      ),
      mistake(
        "por o parque",
        "pelo parque",
        "por + o → pelo, не po і не poro. Це окремий ряд, історично per + lo.",
      ),
    ],
    ukrainian:
      "Українські прийменники `з`, `у`, `до`, `через` не зливаються з вказівними. Є лише орфографічні речі на кшталт `з+з` → `із/зі` за милозвучністю — це не та сама операція. Португальська контракція **граматично обов'язкова** й змінює вигляд слова: `de` зникає як окремий графічний елемент.\n\n"

    + "Не перекладайте `do` завжди як «від / з / того». `do` = `de` + `o`, а значення дає сам `de` (належність, джерело, тема…). Український родовий (`книжка викладача`) часто відповідає `de` + артикль, але не кожен родовий = `do`.",
    brPt:
      "Таблиця `do/no/ao/pelo` спільна й обов'язкова в обох стандартах. Різниця знову в тому, **чи є артикль**: PT-PT `da Maria`, PT-BR часто `de Maria`. Сама форма `da` не «європейська».\n\n"

    + "Розмовні `pro/pra` — сильна прикмета PT-BR. У PT-PT розмовно є `pá` (інша етимологія, вигук) і скорочення, але письмова парадигма та сама.",
    regional:
      "В африканських різновидах писемна норма зберігає повну таблицю контракцій. Усне мовлення може розділяти або редукувати форми; для довідника орієнтир — стандартна орфографія.",
    tables: [
      {
        caption: "Чотири обов'язкові ряди",
        headers: ["", "o", "a", "os", "as"],
        rows: [
          ["de", "do", "da", "dos", "das"],
          ["em", "no", "na", "nos", "nas"],
          ["a", "ao", "à", "aos", "às"],
          ["por", "pelo", "pela", "pelos", "pelas"],
        ],
        note: "à = a + a; це і контракція, і crase на письмі.",
      },
    ],
  },
  {
    id: "de-article",
    slug: "de-article",
    category: "contractions",
    titleUk: "de + артикль",
    titlePt: "de + artigo",
    titleEn: "de + article",
    summary: "do, da, dos, das: обов'язкове злиття de з означеним артиклем.",
    aliases: ["do", "da", "dos", "das", "de o", "de a"],
    related: [
      "contractions-overview",
      "prep-de",
      "articles-definite",
      "possessives",
      "gostar",
    ],
    intro:
      "`de` + `o/a/os/as` дає `do/da/dos/das`. Це найчастотніший ряд: належність, джерело, матеріал, тема, частина `gostar de`, інфінітивні рамки `antes de`, `depois de`.\n\n"

    + "Не вчіть `do` як окремий прийменник «від». Спочатку бачте `de`, потім перевіряйте, чи наступне слово — означений артикль.",
    formulas: [
      {
        label: "Ряд de",
        pattern: "de + o/a/os/as → do/da/dos/das",
        negative: "de + Ø → de   (немає артикля — немає контракції)",
        note: "de um / de uma в сучасній прозі зазвичай роздільно; dum/duma трапляються.",
      },
    ],
    formation:
      "Графічно `de` втрачає `e`, артикль лишається: d- + o = `do`. Перед жіночим: `da`. Множина прозора: `dos`, `das`.\n\n"

    + "Якщо після `de` стоїть присвійний з артиклем: `de` + `o meu` → `do meu`. Якщо артикля немає (часто PT-BR): `de meu` — граматично можливо, але багато мовців усе одно скажуть `do meu` або змінять конструкцію.",
    uses: [
      {
        title: "Належність, автор, частина",
        body: "Близько до українського родового: `a casa do João`, `as obras da Pessoa`, `a porta da sala`. Це не окремий «присвійний відмінок», а `de` + визначена група.",
        examples: [
          ex("O carro do meu pai.", "Батькова машина. / Машина мого батька."),
          ex("A capital da Ucrânia é Kyiv.", "Столиця України — Київ."),
        ],
      },
      {
        title: "Джерело, матеріал, тема",
        body: "`venho da estação`, `uma mesa de madeira` (тут часто нуль: матеріал), `falámos do problema` (тема з артиклем, бо проблема ідентифікована).",
        examples: [
          ex("Volto da biblioteca às seis.", "Повертаюся з бібліотеки о шостій."),
          ex("Não quero falar do assunto.", "Не хочу говорити про цю тему."),
        ],
      },
      {
        title: "Регенція дієслова: gostar de та інші",
        body: "`gostar de`, `precisar de` (у PT-PT; PT-BR часто `precisar` без `de` перед іменником), `lembrar-se de`. Якщо додаток визначений — контракція: `gosto do filme`. Якщо речовина / нуль — `gosto de café`.",
        examples: [
          ex("Gosto do teu sotaque.", "Мені подобається твоя вимова."),
          ex("Gosto de música.", "Я люблю музику."),
          ex("Lembro-me da conversa.", "Я пам'ятаю розмову.", { variety: "PT" }),
        ],
      },
    ],
    examples: [
      ex("É um amigo dos meus pais.", "Це друг моїх батьків."),
      ex("Saí de casa às oito. / Saí da casa da Ana.", "Вийшов/вийшла з дому о восьмій. / Вийшов/вийшла з дому Ани."),
      ex("Depende do contexto.", "Залежить від контексту."),
      ex("O mapa da cidade está desatualizado.", "Мапа міста застаріла."),
      ex("Alguns dos alunos faltaram.", "Дехто з студентів був відсутній."),
    ],
    markers: ["do", "da", "dos", "das", "gostar de", "antes de / depois de"],
    exceptions:
      "`de` + неозначений: переважно `de um`, `de uma`. Форми `dum`, `duma` існують і в PT-PT відчуваються природніше в мовленні, ніж у формальній прозі.\n\n"

      + "Перед топонімом без артикля: `de Portugal`, `de Lisboa`, `de Angola`. Перед топонімом з артиклем: `do Brasil`, `da França`, `do Porto`.\n\n"

      + "`casa` в ідіомі `de casa` («з дому / домашній») vs `da casa` («з [того] будинку»).",
    mistakes: [
      mistake(
        "Gosto de o filme.",
        "Gosto do filme.",
        "Після de означений артикль зливається. Роздільне написання — орфографічна помилка.",
      ),
      mistake(
        "Venho do Portugal.",
        "Venho de Portugal.",
        "Portugal без артикля, отже контракції немає. Інтерференція з do Brasil.",
      ),
      mistake(
        "A casa de o João.",
        "A casa do João.",
        "Якщо ім'я несе артикль (типово PT-PT), de + o João → do João.",
      ),
    ],
    ukrainian:
      "Український родовий (`книжка брата`, `столиця України`) часто відповідає `de` + група. Але родовий також покриває частину відмінків, де португальська візьме інший прийменник (`про проблему` = `do assunto` / `sobre o assunto`). Не ставте `do` під кожен український родовий.",
    brPt:
      "Форми спільні. `da Maria` vs `de Maria` — наслідок артикля при імені, не наслідок іншої контракції. `preciso do livro` vs BR розмовне `preciso o livro` (без de) — уже регенція, не таблиця do/da.",
    tables: [
      {
        caption: "de + означений артикль",
        headers: ["", "Однина", "Множина"],
        rows: [
          ["Чоловічий", "de + o → do", "de + os → dos"],
          ["Жіночий", "de + a → da", "de + as → das"],
        ],
      },
    ],
  },
  {
    id: "em-article",
    slug: "em-article",
    category: "contractions",
    titleUk: "em + артикль",
    titlePt: "em + artigo",
    titleEn: "em + article",
    summary: "no, na, nos, nas: місце, час, стан. Не окремі прийменники «в».",
    aliases: ["no", "na", "nos", "nas", "em o", "em a"],
    related: [
      "contractions-overview",
      "prep-em",
      "articles-definite",
      "articles-geography",
      "ser-estar",
    ],
    intro:
      "`em` + означений артикль → `no/na/nos/nas`. Ряд покриває місце (`no Brasil`, `na mesa`), час (`no domingo`, `nas férias`), стан і рамки (`no escuro`, `na dúvida`).\n\n"

    + "Українське `у/в` не зливається з іменником. `no` виглядає як нове слово зі значенням «в», але це `em` + `o`. Якщо артикля немає, лишається `em`: `em Lisboa`, `em casa`, `em Portugal`.",
    formulas: [
      {
        label: "Ряд em",
        pattern: "em + o/a/os/as → no/na/nos/nas",
        note: "Немає артикля → em. Тест топонімів: no Brasil vs em Portugal.",
      },
    ],
    formation:
      "`em` + `o` історично дало `no` (n- з носового прийменника). Орфографія сучасна: завжди `no`, ніколи `em o`. Множина `nos` збігається графічно з займенником `nos` («нам/нас») — омографія: `Viram-nos no parque` (займенник + контракція) розрізняється синтаксисом.\n\n"

    + "`em um` → часто `num` / `numa` в мовленні й у PT-PT письмі; `em um` теж коректне, особливо в формальному PT-BR.",
    uses: [
      {
        title: "Місце",
        body: "`estar no escritório`, `viver na Ucrânia`, `entrar no comboio` / `no trem`. Конкретне вмістилище з артиклем дає контракцію; голі ідіоми — ні: `em casa`, `em sítio nenhum`.",
        examples: [
          ex("As chaves estão na cozinha.", "Ключі на кухні."),
          ex("Trabalho no centro.", "Я працюю в центрі."),
        ],
      },
      {
        title: "Час",
        body: "`no dia 3`, `no inverno`, `na segunda-feira` (часто), `nos anos 90`. Дні тижня з `em` + артикль типово «у (цю) неділю / по неділях» залежно від числа: `no domingo` vs `aos domingos` (вже ряд a).",
        examples: [
          ex("Nos últimos anos mudei de ideias.", "Останніми роками я змінив/змінила думку."),
          ex("Na sexta tenho reunião.", "У п'ятницю в мене нарада."),
        ],
      },
      {
        title: "Стан, сфера, «у межах»",
        body: "`no escuro`, `na prática`, `nos negócios`, `na universidade` (як інститут). Абстракції часто з артиклем, тому з контракцією.",
        examples: [
          ex("Na prática, a regra falha.", "На практиці правило не спрацьовує."),
          ex("Não decidas na hora da raiva.", "Не вирішуй у момент люті."),
        ],
      },
    ],
    examples: [
      ex("Estou no Brasil há dois anos.", "Я в Бразилії вже два роки."),
      ex("Estou em Portugal há dois anos.", "Я в Португалії вже два роки."),
      ex("Deixa o casaco no carro.", "Залиш куртку в машині."),
      ex("Há leite na nevera / no frigorífico.", "У холодильнику є молоко."),
      ex("Nos Açores o clima é húmido.", "На Азорських островах клімат вологий."),
    ],
    markers: ["no", "na", "nos", "nas", "em casa", "num / numa"],
    exceptions:
      "`em casa`, `em terra`, `em português` (мовою), `em silêncio` — нуль, без контракції. `na casa` = у (тому) будинку.\n\n"

      + "Міста: `em` + гола назва (`em Kyiv`). Винятки з артиклем: `no Porto`, `no Rio`, `no Cairo`.\n\n"

      + "Омограф `nos`: контракція `em+os` vs клитик `nos`. `Encontrei-nos` не існує в значенні місця; `Encontrei-os no café` — займенник `os` + місце `no`.",
    mistakes: [
      mistake(
        "Estou em a escola.",
        "Estou na escola.",
        "em + a → na. Українське «в школі» не підказує злиття.",
      ),
      mistake(
        "Vivo no Portugal.",
        "Vivo em Portugal.",
        "Немає артикля — немає no. Калька з no Brasil.",
      ),
      mistake(
        "Estou em o escritório.",
        "Estou no escritório.",
        "Обов'язкова контракція перед означеним артиклем.",
      ),
    ],
    ukrainian:
      "`у/в` + місцевий відмінок (`у школі`, `в Бразилії`) покриває і `no/na`, і голе `em`. Португальська різниця видима лише через наявність артикля. Навчіться питати «чи є o/a?», а не «як перекладається в».",
    brPt:
      "Парадигма спільна. Лексика вмістилищ різна (`comboio` PT / `trem` BR, `frigorífico` PT / `geladeira` BR), контракція та сама: `no trem`, `no comboio`. `num/numa` частотніші в європейському письмі, ніж у формальному бразильському, але зрозумілі скрізь.",
    tables: [
      {
        caption: "em + означений артикль",
        headers: ["", "Однина", "Множина"],
        rows: [
          ["Чоловічий", "em + o → no", "em + os → nos"],
          ["Жіночий", "em + a → na", "em + as → nas"],
        ],
      },
    ],
  },
  {
    id: "a-article",
    slug: "a-article",
    category: "contractions",
    titleUk: "a + артикль",
    titlePt: "a + artigo",
    titleEn: "a + article",
    summary:
      "ao, à, aos, às: напрямок, час, непрямий додаток. Жіноче à — це crase (a + a).",
    aliases: ["ao", "à", "aos", "às", "crase", "a o", "a a"],
    related: [
      "crase",
      "prep-a",
      "a-vs-crase",
      "contractions-overview",
      "articles-definite",
      "indirect-object",
    ],
    intro:
      "`a` + означений артикль → `ao` (чоловічий), `à` (жіночий), `aos`, `às`. Чоловічий ряд ніхто не називає crase; жіночий `à` — це і контракція, і орфографічна crase (гравіс).\n\n"

    + "Для україномовного важливо не розвести `ao` і `à` по різних полицях. Це **один ряд**. Різниця лише в роді артикля. Тест заміни на чоловічий іменник (якщо з'являється `ao`, жіночому потрібне `à`) працює саме тому, що ряд симетричний.\n\n"

    + "Прийменник `a` покриває напрямок (`vou ao médico`), час (`às três`, `aos domingos`), адресата (`dei o livro à Ana` / `ao João`), низку регенцій (`assistir a`, `obedecer a`).",
    formulas: [
      {
        label: "Ряд a",
        pattern: "a + o/a/os/as → ao/à/aos/às",
        note: "à = a (прийменник) + a (артиклю). На письмі гравіс. Вимова збігається з a в багатьох акцентах — звідси трудність.",
      },
    ],
    formation:
      "`a` + `o` → `ao` (два голосні, без гравіса). `a` + `a` → `à` (гравіс позначає злиття). Множина: `a` + `os` → `aos`; `a` + `as` → `às`.\n\n"

    + "Без артикля лишається голе `a`: `a Portugal` (рідко потрібне), `a pé`, `a Maria` в PT-BR як додаток без прийменника — інший `a` (артикль) або його відсутність. Не плутати три `a`: артикль, прийменник, клитик-займенник.",
    uses: [
      {
        title: "Напрямок, установа, адресат-місце",
        body: "`ir ao cinema`, `ir à escola`, `chegar ao aeroporto`, `voltar à estação`. Наявність артикля залежить від іменника (`escola`, `praia` типово з артиклем; `casa` в `ir para casa` / `ir a casa` — ідіома з нулем або коливанням).",
        examples: [
          ex("Vou ao médico amanhã.", "Завтра йду до лікаря."),
          ex("Vou à médica amanhã.", "Завтра йду до лікарки."),
          ex("Não fui à reunião.", "Я не пішов/пішла на нараду."),
        ],
      },
      {
        title: "Час",
        body: "`às três horas`, `ao meio-dia`, `à meia-noite`, `aos sábados`, `às vezes`. Це одні з найнадійніших обов'язкових crase у жіночій множині `às`.",
        examples: [
          ex("O comboio chega às 18h.", "Поїзд прибуває о 18:00.", { variety: "PT" }),
          ex("O trem chega às 18h.", "Поїзд прибуває о 18:00.", { variety: "BR" }),
          ex("Ao domingo descanso. / Aos domingos descanso.", "У неділю / по неділях відпочиваю."),
        ],
      },
      {
        title: "Непрямий додаток",
        body: "`dar / dizer / pedir / entregar` + `a` + адресат. Якщо адресат — визначена іменникова група, буде контракція: `ao chefe`, `à professora`, `aos alunos`. Якщо займенник: `a ele`, `a ela` (без crase — немає артикля).",
        examples: [
          ex("Entreguei o relatório ao diretor.", "Я віддав/віддала звіт директору."),
          ex("Entreguei o relatório à diretora.", "Я віддав/віддала звіт директорці."),
          ex("Entreguei o relatório a ela.", "Я віддав/віддала звіт їй."),
        ],
      },
    ],
    examples: [
      ex("Chegámos ao Porto de noite.", "Ми прибули в Порту вночі."),
      ex("Isto pertence à Ana.", "Це належить Ані.", { variety: "PT" }),
      ex("Refiro-me ao problema anterior.", "Я маю на увазі попередню проблему."),
      ex("Refiro-me à questão anterior.", "Я маю на увазі попереднє питання."),
      ex("Aos poucos o ruído diminuiu.", "Поволі шум стих."),
      ex("Fui à praia. / Fui ao mar.", "Я ходив/ходила на пляж. / …до моря."),
    ],
    markers: ["ao", "à", "aos", "às", "às vezes", "ao meio-dia", "ir a"],
    exceptions:
      "Перед чоловічим — ніколи гравіс: `ao`, не `ào`. Перед дієсловом: `começar a trabalhar` (прийменник + інфінітив, без артикля, без crase).\n\n"

      + "Перед `a` + жіноче ім'я crase часто **факультативна** (ім'я може не нести артикля). Перед `Portugal` артикля немає: `voltar a Portugal`, не `ao Portugal`.\n\n"

      + "Три функції `a` див. також на сторінках прийменника `a` і crase. Клитик `a` (`vi-a` «я її бачив») не утворює `à`.",
    mistakes: [
      mistake(
        "Vou a o cinema.",
        "Vou ao cinema.",
        "a + o завжди ao. Не лишайте пропуск за українським «до кінотеатру».",
      ),
      mistake(
        "Vou a a escola.",
        "Vou à escola.",
        "a + a не пишеться в два а. Це à. Деталі тесту — сторінка a vs à.",
      ),
      mistake(
        "Vou à Portugal.",
        "Vou a Portugal. / Volto para Portugal.",
        "Portugal без артикля — немає злиття. à тут помилкова crase.",
      ),
      mistake(
        "Disse à ele.",
        "Disse a ele. / Disse-lhe.",
        "ela/ele — займенники, не артиклі. Crase перед ele неможлива; перед ela стандарт теж не ставить à ela в цій рамці.",
      ),
    ],
    ukrainian:
      "Українські `до`, `на`, `о` (о третій), давальний адресата (`директору`) розмазані по кількох португальських прийменниках. `ao/à` — лише ті випадки, де вибрано саме `a` **і** є означений артикль. Давальний `їй` = `a ela` / `lhe`, не `à ela`.",
    brPt:
      "Ряд спільний. Школи в Бразилії окремо натаскуюють crase (`à`); у Португалії `à` часто пояснюють просто як контракцію `a+a`, без культу теми. Орфографія однакова. `ir à praia` / `ir ao médico` нормальні в обох різновидах.",
    tables: [
      {
        caption: "a + означений артикль",
        headers: ["", "Однина", "Множина"],
        rows: [
          ["Чоловічий", "a + o → ao", "a + os → aos"],
          ["Жіночий", "a + a → à", "a + as → às"],
        ],
        note: "Жіночий ряд на письмі — crase.",
      },
    ],
  },
  {
    id: "por-article",
    slug: "por-article",
    category: "contractions",
    titleUk: "por + артикль",
    titlePt: "por + artigo",
    titleEn: "por + article",
    summary:
      "pelo, pela, pelos, pelas: агенс, причина, маршрут, тривалість. Не плутати з pelo «волосся» (старе pêlo).",
    aliases: ["pelo", "pela", "pelos", "pelas", "por o"],
    related: [
      "contractions-overview",
      "prep-por",
      "por-para",
      "articles-definite",
      "ser-passive",
    ],
    intro:
      "`por` + означений артикль → `pelo/pela/pelos/pelas`. Історично `per` + `lo`. Сучасний мовець не збирає форму на ходу як `por+o`, але граматично ряд саме такий і **обов'язковий**: не пишуть `por o`.\n\n"

    + "Значення дає `por`: агенс пасиву (`assinado pelo diretor`), причина, плата, маршрут (`pelo parque`), тривалість (`pelo inverno` в низці контекстів), приблизна оцінка (`pelas duas horas`).",
    formulas: [
      {
        label: "Ряд por",
        pattern: "por + o/a/os/as → pelo/pela/pelos/pelas",
        note: "Немає *poro, *po o, *por o в стандарті.",
      },
    ],
    formation:
      "Основа `pel-` + артикль. Жіночий `pela` не має гравіса: тут немає `a+a`. Не ставте `pèla` / `péla`.\n\n"

      + "Омографи: `pelo` контракція vs старе `pêlo` «волосина» (після орфографічної угоди часто `pelo` без циркумфлекса — розрізняє контекст). `pela` контракція vs іменник `pela` (м'яч) у рідкісних уживаннях.",
    uses: [
      {
        title: "Агенс пасиву",
        body: "`ser` + дієприкметник + `por` + агенс. Якщо агенс визначений — `pelo/pela`.",
        examples: [
          ex("A lei foi aprovada pelo parlamento.", "Закон ухвалив парламент."),
          ex("O quadro foi pintado pela Maria.", "Картину намалювала Марія.", { variety: "PT" }),
        ],
      },
      {
        title: "Маршрут, простір «через / по»",
        body: "`passar pelo túnel`, `andar pela cidade`, `viajar pelo Brasil`.",
        examples: [
          ex("Viemos pelo interior.", "Ми їхали внутрішніми районами."),
          ex("Não passes pela rua escura.", "Не йди темною вулицею."),
        ],
      },
      {
        title: "Причина, обмін, приблизна година",
        body: "`pela chuva` (через дощ, в деяких рамках), `pelo preço` (за (цією) ціною), `pelas três` ≈ близько третьої. Не кожна причина бере `por`: `por causa da chuva` — складений прийменник, де `da` вже з ряду `de`.",
        examples: [
          ex("Ficámos em casa por causa da chuva.", "Ми лишилися вдома через дощ."),
          ex("Chega pelas oito.", "Прийде десь о восьмій."),
          ex("Paguei cinquenta pelo livro.", "Я заплатив/заплатила за книжку п'ятдесят."),
        ],
      },
    ],
    examples: [
      ex("O projeto foi liderado pelos engenheiros.", "Проєкт очолили інженери."),
      ex("Pela manhã estou mais lúcido.", "Вранці я ясніший / більш lucide."),
      ex("Pelo contrário.", "Навпаки."),
      ex("Lutámos pelo direito a traduzir.", "Ми боролися за право перекладати."),
      ex("Andámos pelas ruas da Baixa.", "Ми ходили вулицями Байші."),
    ],
    markers: ["pelo", "pela", "pelos", "pelas", "por causa de", "pelo contrário"],
    exceptions:
      "`por` + нуль: `por exemplo`, `por acaso`, `por telefone`, `por escrito`. Немає артикля — немає `pelo`.\n\n"

      + "`por um` / `por uma` роздільно. Не існує обов'язкового *pelum.\n\n"

      + "`para o` не стає `pelo`. Це головна плутанина por vs para на рівні контракцій: `para o diretor` (адресат/мета) vs `pelo diretor` (агенс/причина).",
    mistakes: [
      mistake(
        "assinado por o diretor",
        "assinado pelo diretor",
        "por + o → pelo. Обов'язково в стандарті.",
      ),
      mistake(
        "Fui pelo médico. (у значенні «пішов до лікаря»)",
        "Fui ao médico.",
        "Напрямок «до» — прийменник a (ao/à), не por. pelo médico = «через лікаря / лікарем (агенс)».",
      ),
      mistake(
        "para o parque → pelo parque як «скорочення»",
        "para o parque (мета) vs pelo parque (маршрут)",
        "Контракція не змінює прийменник. para не зливається з артиклем у стандарті.",
      ),
    ],
    ukrainian:
      "Українські `через`, `по`, `за` (за книжку заплатив), орудний агенса (`підписано директором`) можуть відповідати `por` і далі `pelo`, якщо є артикль. Але `до лікаря` — не `pelo`. Вибір прийменника первинний; контракція вторинна.",
    brPt:
      "Ряд спільний. `pela manhã` живе в обох; PT-BR також дуже любить `de manhã` (нуль). Обидва варіанти нормальні, різниця частотна.",
    tables: [
      {
        caption: "por + означений артикль",
        headers: ["", "Однина", "Множина"],
        rows: [
          ["Чоловічий", "por + o → pelo", "por + os → pelos"],
          ["Жіночий", "por + a → pela", "por + as → pelas"],
        ],
      },
    ],
  },
  {
    id: "prep-demonstrative",
    slug: "demonstrative",
    category: "contractions",
    titleUk: "Прийменник + вказівний",
    titlePt: "Preposição + demonstrativo",
    titleEn: "Preposition + demonstrative",
    summary:
      "neste, deste, àquele, daquilo: ті самі прийменники de / em / a, злиті з este / esse / aquele і isto / isso / aquilo.",
    aliases: [
      "neste",
      "deste",
      "àquele",
      "daquilo",
      "contraction demonstrative",
      "neste desta",
    ],
    related: [
      "demonstratives",
      "contractions-overview",
      "crase",
      "a-article",
      "articles-definite",
    ],
    intro:
      "Вказівні `este/esse/aquele` і нейтральні `isto/isso/aquilo` теж зливаються з `de`, `em`, `a`. Це продовження тієї самої системи, не нові прийменники. `neste` = `em` + `este`; `deste` = `de` + `este`; `àquele` = `a` + `aquele` (і знову гравіс, бо a+a).\n\n"

    + "Українські `цей/той` після прийменника лишаються окремими словами (`у цьому`, `з того`). Португальська зсуває межу слова.",
    formulas: [
      {
        label: "Модель",
        pattern: "de/em/a + demonstrativo → контракція",
        note: "por з вказівними зазвичай роздільно: por este, не *peleste.",
      },
    ],
    formation:
      "`de` + `este` → `deste` (також `desta`, `destes`, `destas`). `em` + `este` → `neste` / `nesta` / `nestes` / `nestas`. Так само з `esse` (`desse`, `nesse`) і `aquele` (`daquele`, `naquele`).\n\n"

      + "`a` + `aquele` → `àquele` / `àquela` / `àqueles` / `àquelas`. Гравіс обов'язковий: є злиття `a+a`. `a este` / `a essa` у багатьох описах **не** утворюють *àeste; пишуть `a este`, `a essa` або уникають рамки. На практиці `a este` роздільно; crase типово з `aquele`, бо той уже починається на `a`.\n\n"

      + "Нейтральні: `disto`, `disso`, `daquilo`; `nisto`, `nisso`, `naquilo`; `àquilo` (`a`+`aquilo`).",
    uses: [
      {
        title: "Простір і дискурс: neste / nesse / naquele",
        body: "`neste` — близьке до мовця / до тексту («у цьому»). `nesse` — до слухача / до вже сказаного. `naquele` — віддалене. Бразилія в мовленні часто зсуває `esse` на територію `este`.",
        examples: [
          ex("Neste edifício não há elevador.", "У цій будівлі немає ліфта."),
          ex("Nesse caso, espera.", "У такому разі зачекай."),
          ex("Naquele tempo não havia internet.", "У той час інтернету не було."),
        ],
      },
      {
        title: "Належність і джерело: deste / desse / daquele",
        body: "Те саме `de`, що в `do`, але з вказівним замість артикля.",
        examples: [
          ex("Gosto deste vinho.", "Мені подобається це вино."),
          ex("Não quero falar disso.", "Не хочу про це говорити."),
          ex("A culpa não é daquele aluno.", "Вина не того учня."),
        ],
      },
      {
        title: "Напрямок і адресат: àquele / a este",
        body: "`Refiro-me àquele artigo` (a+aquele). `Refiro-me a este artigo` (роздільно). Тест на crase тут морфологічний: чи наступне слово вже починається з `a-` вказівного `aquele`.",
        examples: [
          ex("Entrega o dossier àquela colega.", "Віддай теку тій колезі."),
          ex("Entrega o dossier a esta colega.", "Віддай теку цій колезі."),
          ex("Não ligo àquilo.", "Мені немає діла до того."),
        ],
      },
    ],
    examples: [
      ex("Mora neste bairro?", "Ти живеш у цьому районі?"),
      ex("Nunca tinha ouvido falar disso.", "Я ніколи про це не чув/чула."),
      ex("Àquela hora a estação já estava vazia.", "О тій годині вокзал уже був порожній."),
      ex("Daquilo que disseste, concordo com metade.", "З того, що ти сказав/сказала, я згоден/згодна з половиною."),
      ex("Neste momento não posso falar.", "Цієї миті я не можу говорити."),
      ex("Por este caminho é mais rápido.", "Цією дорогою швидше.", { note: "por + este зазвичай роздільно." }),
    ],
    markers: [
      "neste / nesta",
      "nesse / nessa",
      "naquele / naquela",
      "deste / desse / daquele",
      "àquele / àquela / àquilo",
      "disto / disso / daquilo",
    ],
    exceptions:
      "`por este`, `por essa`, `por aquele` — без обов'язкової контракції. Не створюйте *peleste.\n\n"

      + "`com este`, `para aquele`, `sem isso` роздільно (з тими самими винятками розмовного `praquele` тощо, яких немає в нейтральному письмі).\n\n"

      + "У PT-BR мовлення `nesse` часто покриває і «це (біля мене)». Нормативний опис трьох ступенів усе ще викладають, але живе вживання зміщене.",
    mistakes: [
      mistake(
        "em este bairro",
        "neste bairro",
        "em + este → neste. Та сама логіка, що em + o → no.",
      ),
      mistake(
        "de isso",
        "disso",
        "de + isso → disso. Стандартна контракція з нейтральним вказівним.",
      ),
      mistake(
        "a aquele homem",
        "àquele homem",
        "a + aquele → àquele. Пропуск гравіса — орфографічна помилка crase.",
      ),
      mistake(
        "à este artigo",
        "a este artigo",
        "este не починається на артиклеве a; crase тут немає. Не ставте гравіс за аналогією з àquele.",
      ),
    ],
    ukrainian:
      "`у цьому`, `з того`, `до того` — три слова. Португальська пакує прийменник у ту саму словоформу, що й вказівний. Для читання розбирайте `neste` назад на `em`+`este`, інакше здаватиметься, що є десятки прийменників.",
    brPt:
      "Форми спільні. Різниця — у виборі `este/esse` (PT-BR у мовленні частіше `esse` там, де PT-PT поставить `este`). Контракція тоді буде `nesse` замість `neste`, але правило злиття те саме.",
    tables: [
      {
        caption: "Контракції з вказівними (чоловічий однина як зразок)",
        headers: ["", "este", "esse", "aquele", "isto", "isso", "aquilo"],
        rows: [
          ["de", "deste", "desse", "daquele", "disto", "disso", "daquilo"],
          ["em", "neste", "nesse", "naquele", "nisto", "nisso", "naquilo"],
          ["a", "a este", "a esse", "àquele", "a isto", "a isso", "àquilo"],
        ],
        note: "Жіночі: desta, nesta, àquela тощо. por — роздільно.",
      },
    ],
  },
  {
    id: "prep-pronoun-contr",
    slug: "pronoun",
    category: "contractions",
    titleUk: "Прийменник + займенник",
    titlePt: "dele, nele, consigo",
    titleEn: "Preposition + pronoun",
    summary:
      "dele/dela, nele/nela, consigo: злиття з ele/ela та особливі форми з com. Відрізняйте dele від seu.",
    aliases: ["dele", "dela", "nele", "nela", "consigo", "comigo", "de ele"],
    related: [
      "prepositional-pronouns",
      "possessives",
      "contractions-overview",
      "articles-possessives",
      "personal-pronouns",
    ],
    intro:
      "`de` + `ele/ela/eles/elas` → `dele/dela/deles/delas`. `em` + ті самі займенники → `nele/nela/neles/nelas`. Це знову обов'язкові злиття: не пишуть `de ele` в стандарті (крім випадків, коли `ele` підмет інфінітивної групи: `antes de ele chegar` — інший синтаксис).\n\n"

    + "З `com` система супплетивна: `comigo`, `contigo`, `consigo`, `connosco` (PT-PT) / `conosco` (PT-BR), `convosco`. Тут немає `com + mim` у нейтральній нормі.\n\n"

    + "`dele` часто конкурує з `seu`: `o livro dele` vs `o seu livro`. Для україномовного `dele` прозоріший, бо однозначно «його», тоді як `seu` може бути «його / її / ваш».",
    formulas: [
      {
        label: "de / em + 3 особа",
        pattern: "de + ele → dele;   em + ele → nele",
        note: "Рід і число: dela, deles, delas; nela, neles, nelas.",
      },
      {
        label: "com + особовий",
        pattern: "comigo / contigo / consigo / connosco / convosco",
        br: "conosco (без подвійного n)",
        ptEu: "connosco (подвійне n)",
      },
    ],
    formation:
      "Графічно `de`+`ele` → `dele` (одне слово). Зі вставкою артикля немає: не `do ele`. Займенник `ele` уже закриває позицію, артикль не потрібен.\n\n"

      + "`a` + `ele` **не** зливається: `a ele`, `a ela`. Crase немає. `por ele`, `para ele`, `sem ela` теж роздільно.\n\n"

      + "Інфінітивний підмет після прийменника в PT-PT часто голий займенник без контракції: `apesar de ele ter razão`, `antes de eles saírem`. Тут `ele` — підмет особового інфінітива, не додаток `de`. Тому `apesar dele ter razão` вважають менш акуратною / розмовною (хоча вона трапляється).",
    uses: [
      {
        title: "dele / dela як присвійність",
        body: "Після іменника: `o carro dele`, `a ideia dela`, `os filhos deles`. Узгодження артикля — з річчю (`a casa dele` — дім чоловічий чий). Це прозорий спосіб уникнути багатозначності `seu`.",
        examples: [
          ex("O telefone dele está em cima da mesa.", "Його телефон на столі."),
          ex("A proposta dela convenceu-me.", "Її пропозиція мене переконала."),
        ],
      },
      {
        title: "nele / nela: місце і тема",
        body: "`Confio nele`, `há algo nela de inquietante`, `pensei nisso` (нейтральне). Регенція `pensar em`, `confiar em`, `reparar em`.",
        examples: [
          ex("Não confio nele.", "Я йому не довіряю."),
          ex("Há uma tristeza nela.", "У ній є якийсь сум."),
        ],
      },
      {
        title: "comigo / consigo",
        body: "`comigo`, `contigo` прозорі. `consigo` — 3 особа / você / o senhor: «з собою» або «з ним/вами» залежно від референта. Двозначність знімає контекст або заміна `com ele`.",
        examples: [
          ex("Vem comigo.", "Ходімо зі мною."),
          ex("Leve o documento consigo.", "Візьміть документ із собою."),
          ex("Não quero falar com ele.", "Не хочу з ним говорити.", { note: "com ele — не consigo, якщо мається на увазі інша особа без зворотності." }),
        ],
      },
    ],
    examples: [
      ex("Este lugar é dele, não meu.", "Це місце його, не моє."),
      ex("Preciso da assinatura deles.", "Мені потрібен їхній підпис."),
      ex("Nela encontro paz.", "У ній я знаходжу спокій."),
      ex("Fica connosco esta noite.", "Залишся з нами цієї ночі.", { variety: "PT" }),
      ex("Fica conosco esta noite.", "Залишся з нами цієї ночі.", { variety: "BR" }),
      ex("Antes de ele falar, li o relatório.", "Перш ніж він заговорив, я прочитав/прочитала звіт.", { note: "de ele — підмет інфінітива, не dele." }),
    ],
    markers: [
      "dele / dela / deles / delas",
      "nele / nela",
      "comigo / contigo / consigo",
      "connosco / conosco",
      "de ele + INF",
    ],
    exceptions:
      "`de eu`, `de tu` не існують як *deu (то було б інше слово). Перша й друга особи: `de mim`, `de ti`, `em mim`, `em ti`. Лише третя особа дає `dele/nele`.\n\n"

      + "`a mim`, `a ti`, `a si`, `a nós` роздільно. Є клітики `me/te/lhe`, які в цій позиції часто замінюють наголошену групу.\n\n"

      + "Розмовне `dèle` немає; наголос на `dele` падає на перший склад [`ˈdelɨ`] / [`ˈdeli`].",
    mistakes: [
      mistake(
        "o livro de ele",
        "o livro dele",
        "Присвійне de + ele зливається. Роздільне de ele лишають для підмета інфінітива.",
      ),
      mistake(
        "o seu livro dele",
        "o livro dele / o seu livro",
        "Подвійне маркування. Виберіть або seu, або dele, якщо немає спеціальної емфази.",
      ),
      mistake(
        "com mim",
        "comigo",
        "Стандарт вимагає синтетичної форми. com mim трапляється, але в нормі це відхилення (калька з іспанського conmigo, яке якраз злите — іронія інтерференції).",
      ),
      mistake(
        "consigo = завжди «з собою»",
        "consigo може бути «з вами/з ним» (você/o senhor) або справжня зворотність.",
        "Українське «з собою» не покриває всіх уживань consigo. Для «з ним» безпечніше com ele, якщо немає ввічливого você.",
      ),
    ],
    ukrainian:
      "`його книжка` = `o livro dele` або `o seu livro`. Українське `його` однозначніше за `seu`, тому `dele` часто рятує. `у ньому` = `nele`. `зі мною` = `comigo`, не калька «з + мене».\n\n"

    + "Не ставте артикль перед `ele`: *`o dele` як «його» можливе лише субстантивовано (`o dele está ali` = «його (предмет) там»), на зразок українського «його лежить там».",
    brPt:
      "`dele/nele` спільні. Різниця `connosco` (PT-PT) vs `conosco` (PT-BR) — орфографія після угоди: Бразилія пише одне `n`, Португалія зберігає `nn` у цій формі (як `conexão` vs старіші звички — тут саме стійка відмінність connosco/conosco).\n\n"

    + "PT-BR частіше розв'язує `seu` через `dele/dela` в мовленні, бо `seu` ще й «ваш (você)». У PT-PT `seu` часто «його/її», а «ваш» — `o seu` до senhor або `o teu` до tu.",
    tables: [
      {
        caption: "de / em + ele, ela",
        headers: ["", "ele", "ela", "eles", "elas"],
        rows: [
          ["de", "dele", "dela", "deles", "delas"],
          ["em", "nele", "nela", "neles", "nelas"],
          ["a", "a ele", "a ela", "a eles", "a elas"],
          ["por", "por ele", "por ela", "por eles", "por elas"],
        ],
      },
      {
        caption: "com + займенник",
        headers: ["Особа", "Форма"],
        rows: [
          ["1 одн.", "comigo"],
          ["2 одн. tu", "contigo"],
          ["você / 3 / si", "consigo"],
          ["1 множ. PT-PT", "connosco"],
          ["1 множ. PT-BR", "conosco"],
          ["2 множ. vós", "convosco"],
          ["com + vocês / eles", "com vocês / com eles (аналітично)"],
        ],
      },
    ],
  },
];
