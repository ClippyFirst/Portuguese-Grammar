import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

export const pages: GrammarPage[] = [
  {
    id: "impersonal-infinitive",
    slug: "impersonal",
    category: "infinitive",
    titleUk: "Infinitivo impessoal",
    titlePt: "Infinitivo impessoal",
    titleEn: "Impersonal infinitive",
    summary: "Словникова форма й підмет = підмет головного.",
    aliases: [
      "безособовий інфінітив",
      "infinitivo impessoal",
      "інфінітив",
      "infinitivo",
      "словникова форма",
    ],
    related: ["personal-infinitive", "infinitive-prepositions", "personal-vs-impersonal"],
    intro:
      "Безособовий інфінітив (*infinitivo impessoal*) — це словникова форма дієслова: `falar`, `ser`, `pôr`, `trazer`. Вона не змінюється за особою й числом. Португальська використовує її там, де підмет інфінітива той самий, що й у головному реченні, або де підмет взагалі не потрібно називати.\n\nВ українській інфінітив теж незмінний (`говорити`, `бути`). Відмінність не в формі, а в тому, що португальська має ще й *особовий* інфінітив. Безособовий — це не «простіша версія», а окремий вибір: коли особу інфінітива вже видно з головного дієслова, флексія зайва.\n\nПісля модальних `poder`, `dever`, `querer`, `saber`, `conseguir` стоїть саме безособовий інфінітив: `posso falar`, не `posso falarmos`. Те саме після `ir` у перифрастичному майбутньому: `vamos sair`.",
    formulas: [
      {
        label: "Модальне + інфінітив",
        pattern: "S + Vmod + INF",
        negative: "S + NEG + Vmod + INF",
        note: "Vmod = poder, dever, querer, saber, conseguir, ir, ter de. INF завжди безособовий.",
      },
      {
        label: "Прийменник + інфінітив (той самий підмет)",
        pattern: "S + V + PREP + INF",
        note: "Підмет INF збігається з підметом головного дієслова.",
      },
    ],
    formation:
      "Безособовий інфінітив — це форма на `-ar`, `-er`, `-ir` (і `pôr` з похідними). Наголос на тематичному голосному: `fa**lar**`, `co**mer**`, `par**tir**`.\n\nНемає особових закінчень. Форма одна для всіх осіб: `falar` може відповідати «говорити мені / тобі / їй / нам», якщо контекст уже задав підмет.\n\nКлитики в PT-PT часто енклітичні: `quero vê-lo`. У розмовному PT-BR — проклітичні: `quero o ver` майже не кажуть; частіше `quero ver ele` або `quero vê-lo` у більш старанній мові.",
    uses: [
      {
        title: "Після модальних і фазових дієслів",
        body: "`poder`, `dever`, `querer`, `saber` («уміти»), `conseguir`, `precisar` (PT-BR часто без прийменника), `ir`, `voltar a`, `começar a`, `deixar de`, `acabar de` вимагають безособового інфінітива. Підмет уже стоїть при модальному.",
        examples: [
          ex("Não consigo dormir.", "Я не можу заснути."),
          ex("Ela quer sair agora.", "Вона хоче зараз вийти."),
          ex("Vamos esperar aqui.", "Зачекаємо тут."),
          ex("Acabo de chegar.", "Я щойно приїхав / приїхала."),
        ],
      },
      {
        title: "Той самий підмет після прийменника",
        body: "Якщо той, хто виконує інфінітив, уже є підметом головного речення, безособова форма нормальна й часто єдина природна: `Saí sem dizer nada`. Особова `sem eu dizer` тут звучала б як підкреслення «саме я», а не як нейтральна граматика.",
        examples: [
          ex("Ele saiu sem pagar.", "Він пішов, не заплативши."),
          ex("Estudei para passar no exame.", "Я вчився, щоб скласти іспит."),
          ex("Depois de jantar, fomos passear.", "Після вечері ми пішли прогулятися."),
        ],
      },
      {
        title: "Безособові та узагальнені конструкції",
        body: "`É preciso trabalhar`, `É importante ouvir`, `Proibido fumar` — підмет інфінітива загальний («люди», «ніхто конкретно»). Особова форма з’являється лише коли треба назвати виконавця: `É preciso trabalharmos juntos`.",
        examples: [
          ex("É difícil dizer.", "Важко сказати."),
          ex("Não vale a pena insistir.", "Не варто наполягати."),
          ex("Proibido estacionar.", "Паркування заборонено."),
        ],
      },
      {
        title: "Підметовий інфінітив",
        body: "Інфінітив може сам бути підметом: `Viajar cansa`, `Mentir não ajuda`. Це близька до української конструкція (`Подорожувати втомлює`).",
        examples: [
          ex("Fumar faz mal.", "Курити шкідливо."),
          ex("Chegar cedo nunca é demais.", "Приходити рано ніколи не завадить."),
        ],
      },
      {
        title: "Після дієслів сприйняття й каузації (часто безособовий)",
        body: "`ver`, `ouvir`, `sentir`, `fazer`, `deixar`, `mandar` часто беруть безособовий інфінітив навіть із іншим виконавцем: `Vi-os chegar`, `Deixa-o falar`. Особу тоді кодує додаток (`os`, `o`), а не флексія інфінітива.",
        examples: [
          ex("Ouvi a porta fechar-se.", "Я чув, як зачинилися двері."),
          ex("Deixa-me explicar.", "Дай мені пояснити."),
          ex("Mandei vir o mecânico.", "Я викликав механіка."),
        ],
      },
    ],
    examples: [
      ex("Quero falar contigo.", "Хочу з тобою поговорити.", { variety: "PT" }),
      ex("Quero falar com você.", "Хочу з тобою поговорити.", { variety: "BR" }),
      ex("Não podemos atrasar.", "Ми не можемо запізнитися."),
      ex("Ela foi ao mercado comprar pão.", "Вона пішла на ринок купити хліба."),
      ex("É melhor esperar.", "Краще зачекати."),
    ],
    markers: [
      "poder + INF",
      "dever + INF",
      "querer + INF",
      "ir + INF",
      "começar a + INF",
      "é preciso + INF",
      "sem + INF",
      "depois de + INF",
    ],
    exceptions:
      "Безособовий інфінітив *не* ставиться, коли треба однозначно показати особу інфінітива, відмінну від головного підмета, і немає іншого маркера особи (займенника-додатка, іменника). Тоді потрібен особовий інфінітив або повне речення з кон'юнктивом: не `para chegar cedo` у значенні «щоб *ви* приїхали рано», а `para chegarem cedo` / `para que cheguem cedo`.\n\nПісля `a` в європейському прогресиві (`estou a trabalhar`) інфінітив завжди безособовий: підмет уже є в `estar`.",
    mistakes: [
      mistake(
        "Nós podemos falarmos agora?",
        "Nós podemos falar agora?",
        "Після модального інфінітив безособовий. Особу вже кодує `podemos`.",
      ),
      mistake(
        "Eu quero que sair.",
        "Eu quero sair.",
        "`querer` з тим самим підметом бере інфінітив, не `que` + кон'юнктив. `Quero que saias` — лише якщо виходить *інша* людина.",
      ),
      mistake(
        "É importante que trabalhar.",
        "É importante trabalhar.",
        "Узагальнена оцінка — безособовий інфінітив. Кон'юнктив потрібен, коли є конкретний підмет: `É importante que trabalhes`.",
      ),
    ],
    ukrainian:
      "Український інфінітив завжди «безособовий» у португальському сенсі: `хочу говорити`, `можемо вийти`. Тому безособовий португальський інфінітив інтуїтивний.\n\nПастка в інший бік: українською часто кажуть `щоб вийти`, `перед тим як сказати` без особи, навіть коли виконавці різні. Португальська в таких місцях часто вимагає особового інфінітива або `para que` + кон'юнктив. Безособовий `para sair` прочитають як «щоб (сам підмет) вийти».",
    brPt:
      "Безособовий інфінітив спільний для всіх різновидів. Різниця — у сусідах: PT-PT `estou a trabalhar`, PT-BR `estou trabalhando`; PT-PT частіше `ter de` + INF, PT-BR — `ter que` + INF. Сама форма `trabalhar` / `trabalhar` не змінюється.",
    regional:
      "В африканських різновидах безособовий інфінітив після модальних — норма, як і в PT-PT та PT-BR. У креольському впливі Кабо-Верде в неформальному мовленні інфінітив іноді стоїть там, де стандарт очікує особову форму; у нормативній писемній мові Анголи й Мозамбіку орієнтир — європейська модель.",
    tables: [
      {
        caption: "Коли безособовий інфінітив — правильний вибір",
        headers: ["Контекст", "Форма", "Приклад"],
        rows: [
          ["Модальне дієслово", "безособовий", "posso ir"],
          ["Той самий підмет", "безособовий", "saí sem falar"],
          ["Узагальнення", "безособовий", "é preciso esperar"],
          ["Інший підмет без маркера", "особовий / кон'юнктив", "para chegarem / para que cheguem"],
        ],
      },
    ],
  },
  {
    id: "personal-infinitive",
    slug: "personal",
    category: "infinitive",
    titleUk: "Infinitivo pessoal",
    titlePt: "Infinitivo pessoal",
    titleEn: "Personal infinitive",
    summary: "Особовий / флексійний інфінітив: унікальна риса португальської.",
    aliases: [
      "особовий інфінітив",
      "infinitivo pessoal",
      "infinitivo flexionado",
      "флексійний інфінітив",
      "para eu fazer",
      "infinitivo flexionado",
    ],
    related: [
      "impersonal-infinitive",
      "infinitive-vs-subjunctive",
      "futuro-subjuntivo",
      "personal-vs-impersonal",
      "infinitive-prepositions",
    ],
    intro:
      "Особовий інфінітив (*infinitivo pessoal*, також *infinitivo flexionado*) — форма, якої немає в іспанській, французькій, італійській чи українській. Інфінітив отримує особові закінчення: `ser`, `seres`, `ser`, `sermos`, `serdes`, `serem`.\n\nЦе не «майбутній час» і не кон'юнктив. Це інфінітив, який *називає особу свого підмета*. Його ставлять тоді, коли підмет інфінітива треба показати — бо він інший, ніж у головному реченні, бо він множинний, бо інакше речення двозначне, або бо після прийменника стоїть розгорнута дія з власним виконавцем.\n\nДля правильних дієслів особовий інфінітив *виглядає так само*, як майбутній кон'юнктив (`futuro do conjuntivo`). Це головна пастка. Для неправильних дієслів форми **різні**: інфінітив `sermos`, кон'юнктив `formos`; інфінітив `termos`, кон'юнктив `tivermos`. Не змішуйте парадигми.\n\nОсобовий інфінітив живий і в PT-BR, і в PT-PT. У європейській нормі він частотніший і «обов’язковіший»; у бразильській розмові його нерідко уникають на користь безособового або конструкції `para mim fazer`, яку школа вважає помилкою.",
    formulas: [
      {
        label: "Прийменник + особовий інфінітив",
        pattern: "PREP + (S) + INF-flex",
        note: "INF-flex = інфінітив з особовим закінченням. Підмет у називному відмінку: para eu falar, не para mim falar.",
      },
      {
        label: "Оцінка / необхідність",
        pattern: "é + adj + INF-flex",
        note: "É importante chegarmos cedo. Безособове é importante chegar — узагальнення без конкретної особи.",
      },
    ],
    formation:
      "Закінчення особового інфінітива додаються до безособового інфінітива:\n\n1 ос. одн. — нуль (`falar`, `ser`, `pôr`)\n2 ос. одн. — `-es` (`falares`, `seres`, `pores`)\n3 ос. одн. — нуль (`falar`, `ser`, `pôr`)\n1 ос. мн. — `-mos` (`falarmos`, `sermos`, `pormos`)\n2 ос. мн. — `-des` (`falardes`, `serdes`, `pordes`)\n3 ос. мн. — `-em` (`falarem`, `serem`, `porem`)\n\n1-ша й 3-тя особа однини збігаються з безособовим інфінітивом. Саме тому `para eu falar` і `para ela falar` виглядають як «незмінений» інфінітив — але це *особова* форма з нульовим закінченням. Підмет тоді часто ставлять явно: `para eu falar`, `para tu falares`.\n\n**Правильні дієслова** не змінюють основу. **Неправильні** теж тримають інфінітивну основу — на відміну від майбутнього кон'юнктива, який бере основу 3-ї особи множини pretérito perfeito.\n\nПорівняйте `ter`:\nособовий інфінітив — `ter, teres, ter, termos, terdes, terem`\nмайбутній кон'юнктив — `tiver, tiveres, tiver, tivermos, tiverdes, tiverem`\n\nІ `ser` / `ir`:\nособовий інфінітив `ser` — `ser, seres, ser, sermos, serdes, serem`\nособовий інфінітив `ir` — `ir, ires, ir, irmos, irdes, irem`\nмайбутній кон'юнктив обох — `for, fores, for, formos, fordes, forem`\n\n`pôr` зберігає циркумфлекс у 1-й і 3-й однині: `pôr`, `pores`, `pôr`, `pormos`, `pordes`, `porem`.\n\nФорма 2-ї особи множини (`-des`: `serdes`, `falardes`) у сучасній мові рідкісна: вона йде з `vós`. У живому мовленні її місце займає 3-тя множина з `vocês`: `para vocês serem`.",
    uses: [
      {
        title: "Підмет інфінітива інший, ніж у головному реченні",
        body: "Це ядерна функція. `Trouxe o livro para leres` — приніс я, читатимеш ти. Безособове `para ler` означало б «щоб (я) почитав» або було б двозначним. Флексія `-es` знімає двозначність без повного підрядного `para que leias`.",
        examples: [
          ex(
            "Fechei a porta para as crianças não saírem.",
            "Я зачинив двері, щоб діти не вийшли.",
          ),
          ex(
            "Isto é para tu fazeres, não para ele.",
            "Це тобі робити, не йому.",
          ),
          ex(
            "O professor pediu silêncio para começarmos.",
            "Викладач попросив тиші, щоб ми почали.",
          ),
        ],
      },
      {
        title: "Після прийменників: para, de, por, sem, até, após, ao",
        body: "Португальська *не* ставить кон'юнктив безпосередньо після прийменника. Після `para`, `de`, `por`, `sem`, `até`, `depois de`, `antes de`, `apesar de`, `a fim de`, `em vez de` стоїть інфінітив — особовий, якщо особу треба показати.\n\n`ao` + інфінітив = «коли / у момент»: `ao chegarmos` «коли ми прибули / прибудемо». Безособове `ao chegar` нормальне, якщо підмет той самий або очевидний.",
        examples: [
          ex("Saímos cedo para chegarmos a tempo.", "Ми вийшли рано, щоб встигнути."),
          ex("Apesar de sermos vizinhos, quase não nos falamos.", "Хоч ми й сусіди, майже не розмовляємо."),
          ex("Ao entrares, apaga a luz.", "Як увійдеш, вимкни світло."),
          ex("Até provares o contrário, fico com esta versão.", "Поки не доведеш протилежне, я тримаюся цієї версії."),
        ],
      },
      {
        title: "Явний називний підмет: para eu, para tu, para nós",
        body: "Після прийменника підмет інфінітива стоїть у *називному* відмінку, бо він підмет, а не додаток прийменника: `para eu fazer`, `para tu fazeres`, `para nós fazermos`. Конструкція `para mim fazer` трактує `mim` як додаток прийменника й залишає інфінітив без узгодження — поширена в розмовному PT-BR, але не нормативна.\n\n`eu` у `para eu fazer` потрібне саме тому, що 1-ша однина не має видимого закінчення.",
        examples: [
          ex("Deixa o bolo arrefecer para eu cortar.", "Дай торту охолонути, щоб я розрізав.", { variety: "PT" }),
          ex("Deixa o bolo esfriar para eu cortar.", "Дай торту охолонути, щоб я розрізав.", { variety: "BR" }),
          ex("Isto é para nós decidirmos juntos.", "Це нам вирішувати разом."),
        ],
      },
      {
        title: "Безособові оцінки з конкретним виконавцем",
        body: "`É importante`, `é preciso`, `é melhor`, `é possível`, `convém`, `basta` з узагальненим агенсом беруть безособовий інфінітив. Коли виконавець конкретний — особовий: `É importante chegarmos às nove`, `Convém seres sincero`. Альтернатива — `que` + кон'юнктив: `É importante que cheguemos`.",
        examples: [
          ex("É melhor irmos agora.", "Краще нам піти зараз."),
          ex("Não é preciso gritares.", "Не треба кричати (тобі)."),
          ex("Foi um erro vendermos a casa.", "Було помилкою продавати хату (нам)."),
        ],
      },
      {
        title: "Підкреслення особи навіть при спільному підметі",
        body: "Навіть коли підмети збігаються, особова форма може підкреслити виконавця, особливо в 1-й і 2-й особі множини: `Lamentámos não podermos ir` звучить щільніше, ніж `Lamentámos não poder ir`. Це не обов’язок, а стилістичний і дискурсивний вибір; PT-PT робить його частіше.",
        examples: [
          ex(
            "Ficámos tristes por não podermos ajudar.",
            "Нам було сумно, що не змогли допомогти.",
          ),
          ex(
            "Orgulho-me de sermos honestos neste processo.",
            "Я пишаюся тим, що ми чесні в цьому процесі.",
          ),
        ],
      },
      {
        title: "Відносні й іменникові конструкції",
        body: "Особовий інфінітив може залежати від іменника: `a ideia de partirmos`, `o facto de estares aqui`, `medo de perderem o emprego`. Це дуже продуктивна писемна модель. У розмові її часто замінюють на `que` + особове дієслово.",
        examples: [
          ex("A hipótese de sermos transferidos preocupa-me.", "Мене турбує гіпотеза, що нас переведуть.", { variety: "PT" }),
          ex("O facto de eles não terem ligado é estranho.", "Те, що вони не зателефонували, дивно."),
        ],
      },
      {
        title: "Заперечення й особа",
        body: "`sem` + особовий інфінітив = «не зробивши» з названим агенсом: `saímos sem eles perceberem`. Це стисліше за `saímos sem que eles percebessem` і дуже природне.",
        examples: [
          ex("Entrou sem nós virmos.", "Він увійшов, ми не бачили.", {
            note: "virmos — особовий інфінітив ver, не майбутній кон'юнктив vir «приходити».",
          }),
          ex("Assinou sem lermos o contrato.", "Підписав, а ми контракт не читали."),
        ],
      },
      {
        title: "Час особового інфінітива",
        body: "Сам інфінітив не несе часу. Час задає головне речення. `para chegarmos` може бути майбутнім, теперішнім або навіть минулим залежно від `vamos` / `é preciso` / `trouxe`. Складений особовий інфінітив `termos chegado` кодує *передування*: `apesar de termos chegado cedo` «хоч ми (уже) приїхали рано».",
        examples: [
          ex("Apesar de termos avisado, ninguém veio.", "Хоч ми й попередили, ніхто не прийшов."),
          ex("Lembro-me de te teres queixado disso.", "Пам’ятаю, що ти на це скаржився."),
        ],
      },
    ],
    examples: [
      ex("Trouxe isto para tu veres.", "Я приніс це, щоб ти побачив."),
      ex("É tempo de irmos embora.", "Час нам іти."),
      ex("Ao saberes a verdade, mudaste de ideias.", "Дізнавшись правду, ти змінив думку."),
      ex("Deram-nos o mapa para não nos perdermos.", "Нам дали мапу, щоб ми не заблукали."),
      ex("Antes de seres pai, não percebes.", "Поки не станеш батьком, не розумієш."),
      ex(
        "Quando for altura de partirmos, aviso.",
        "Коли буде час вирушати, попереджу.",
        {
          note: "for — майбутній кон'юнктив ser; partirmos — особовий інфінітив partir. Дві різні парадигми в одному реченні.",
        },
      ),
      ex("Não saiam sem eu chegar.", "Не виходьте, поки я не прийду."),
      ex("O certo é eles não saberem de nada.", "Ясно одне: вони нічого не знають."),
    ],
    markers: [
      "para eu / para tu / para nós + INF-flex",
      "ao + INF-flex",
      "depois de / antes de + INF-flex",
      "sem + INF-flex",
      "apesar de + INF-flex",
      "é importante / preciso / melhor + INF-flex",
      "o facto de + INF-flex",
      "a fim de + INF-flex",
    ],
    exceptions:
      "Не ставте особовий інфінітив після модальних: `*podemos falarmos` неправильно.\n\nНе ставте його замість майбутнього кон'юнктива після `quando` / `se` у значенні майбутньої відкритої події: `*quando sermos ricos` → `quando formos ricos`. Після сполучника часу/умови потрібен *особовий спосіб* (кон'юнктив), не інфінітив.\n\n`para que` + кон'юнктив і `para` + особовий інфінітив часто синонімічні, але не завжди взаємозамінні: після чистого прийменника `para` кон'юнктива немає; після сполучника `para que` інфінітива немає.\n\nЗ дієсловами сприйняття додаток уже кодує особу, тому особовий інфінітив рідкісний: `vi-os chegar`, не зазвичай `vi-os chegarem` (друге трапляється, але звучить важче).\n\n2-га особа множини `-des` — книжна. Не вставляйте `falardes` у нейтральний текст із `vocês`.",
    mistakes: [
      mistake(
        "Fiz isto para mim descansar.",
        "Fiz isto para eu descansar.",
        "Підмет інфінітива — називний `eu`, не прийменниковий `mim`. `para mim` було б «для мене» як адресата, без інфінітива: `isto é para mim`.",
      ),
      mistake(
        "Quando sermos grandes, percebemos.",
        "Quando formos grandes, percebemos.",
        "`quando` у майбутньому відкритому значенні бере майбутній кон'юнктив `formos`, не особовий інфінітив `sermos`.",
      ),
      mistake(
        "É importante que chegarmos cedo.",
        "É importante chegarmos cedo. / É importante que cheguemos cedo.",
        "Або прийменника/сполучника немає — тоді особовий інфінітив; або є `que` — тоді кон'юнктив. Мішати `que` + інфінітив не можна.",
      ),
      mistake(
        "Vi eles chegarem.",
        "Vi-os chegar. / Vi eles chegar.",
        "Після `ver` особу кодує додаток. Безособовий інфінітив тут норма. (Розмовне PT-BR `vi eles chegar` без клитика.)",
      ),
      mistake(
        "Podemos irmos juntos?",
        "Podemos ir juntos?",
        "Модальне вже має особу. Інфінітив безособовий.",
      ),
      mistake(
        "Para teres sucesso, tiveres de trabalhar.",
        "Para teres sucesso, tens de trabalhar.",
        "`para teres` — особовий інфінітив (добре). У головному реченні потрібен індикатив `tens`, не майбутній кон'юнктив `tiveres`.",
      ),
      mistake(
        "Apesar de formos amigos, discutimos.",
        "Apesar de sermos amigos, discutimos.",
        "Після прийменника `apesar de` — особовий інфінітив `sermos`. `formos` — майбутній кон'юнктив, його місце після `se` / `quando`.",
      ),
    ],
    ukrainian:
      "В українській інфінітив не відмінюється, а особу в конструкціях на кшталт `щоб нам вийти`, `перед тим як вам казати` кодує давальний або окреме речення (`щоб ми вийшли`). Португальський особовий інфінітив — це третій шлях: інфінітив *сам* несе закінчення.\n\nКалька `для мене зробити` дає `para mim fazer`. Це зрозуміло, але граматично це змішує прийменниковий додаток із підметом. Норма: `para eu fazer` — як українське `щоб я зробив`, стиснуте до інфінітива.\n\nЩе одна українська звичка — залишати інфінітив без особи, коли виконавці різні: `Я зачинив двері, щоб не виходили`. Португальською безособове `para não sair` прочитають як «щоб (я) не вийшов». Потрібно `para (eles) não saírem` або `para que não saiam`.\n\nНе шукайте відповідника серед українських дієприслівників (`зачинивши`, `прийшовши`). `ao chegarmos` іноді перекладається дієприслівником, але це лише один зі вжитків, і множина `-mos` у дієприслівнику українською не відтворюється.",
    brPt:
      "Особовий інфінітив існує в обох нормах. PT-PT використовує його ширше, зокрема при спільному підметі (`lamentámos não podermos ir`) і в писемному стилі.\n\nУ PT-BR розмовна мова часто ставить безособовий інфінітив навіть при різному підметі, покладаючись на займенник: `isso é para você fazer` замість `para você fazeres` / `para fazeres`. З `você` 3-тя особа однини й так має нульове закінчення, тому різниця невидима: `para você falar`. Контраст проявляється в множині: нормативне `para vocês falarem`, розмовне інколи `para vocês falar`.\n\n`para mim fazer` — стійка розмовна бразильська модель. У формальному PT-BR її уникають: `para eu fazer`.\n\nКлитики: PT-PT `para o vermos`, `para vê-lo nós` (рідше); частіше `para o vermos`. PT-BR: `para a gente ver`, `para nós vermos`.",
    regional:
      "В Анголі й Мозамбіку писемна норма орієнтується на європейський особовий інфінітив (`para chegarmos`). У міському розмовному мовленні, як і в Бразилії, частотні безособові спрощення.\n\nФорми на `-des` (`serdes`) живі майже лише в літургійному, військовому або свідомо архаїчному стилі з `vós`. Для української аудиторії достатньо впізнавати їх, не продукувати.",
    tables: [
      {
        caption: "Особовий інфінітив правильних дієслів",
        headers: ["Особа", "falar", "comer", "partir"],
        rows: [
          ["eu", "falar", "comer", "partir"],
          ["tu", "falares", "comeres", "partires"],
          ["ele / você", "falar", "comer", "partir"],
          ["nós", "falarmos", "comermos", "partirmos"],
          ["vós", "falardes", "comerdes", "partirdes"],
          ["eles / vocês", "falarem", "comerem", "partirem"],
        ],
        note: "Для правильних дієслів ці форми збігаються з futuro do conjuntivo. Не поширюйте цей збіг на ser, ter, ir, ver, vir, pôr, fazer, dizer.",
      },
      {
        caption: "Неправильні: особовий інфінітив ≠ майбутній кон'юнктив",
        headers: ["Дієслово", "INF. pessoal (nós / eles)", "Fut. conjuntivo (nós / eles)"],
        rows: [
          ["ser", "sermos / serem", "formos / forem"],
          ["ir", "irmos / irem", "formos / forem"],
          ["ter", "termos / terem", "tivermos / tiverem"],
          ["estar", "estarmos / estarem", "estivermos / estiverem"],
          ["haver", "havermos / haverem", "houvermos / houverem"],
          ["ver", "vermos / verem", "virmos / virem"],
          ["vir", "virmos / virem", "viermos / vierem"],
          ["pôr", "pormos / porem", "pusermos / puserem"],
          ["fazer", "fazermos / fazerem", "fizermos / fizerem"],
          ["dizer", "dizermos / dizerem", "dissermos / disserem"],
          ["dar", "darmos / darem", "dermos / derem"],
          ["poder", "podermos / poderem", "pudermos / puderem"],
          ["saber", "sabermos / saberem", "soubermos / souberem"],
          ["querer", "querermos / quererem", "quisermos / quiserem"],
          ["trazer", "trazermos / trazerem", "trouxermos / trouxerem"],
        ],
        note: "ver → virmos (інфінітив) vs virmos (кон'юнктив ver) збігаються в 1.pl, але 3.pl: verem vs virem. vir «приходити»: virmos / virem (INF) vs viermos / vierem (conj.).",
        scroll: true,
      },
      {
        caption: "Називний підмет після прийменника",
        headers: ["Норма", "Розмовне (часто PT-BR)", "Значення"],
        rows: [
          ["para eu falar", "para mim falar", "щоб я говорив"],
          ["para tu falares", "para você falar", "щоб ти говорив"],
          ["para nós falarmos", "para a gente falar", "щоб ми говорили"],
          ["para eles falarem", "para eles falar", "щоб вони говорили"],
        ],
      },
    ],
  },
  {
    id: "personal-vs-impersonal",
    slug: "personal-vs-impersonal",
    category: "infinitive",
    titleUk: "Особовий vs безособовий інфінітив",
    titlePt: "Pessoal vs impessoal",
    titleEn: "Personal vs impersonal infinitive",
    summary: "Коли флексія потрібна, коли зайва.",
    aliases: [
      "особовий безособовий",
      "pessoal impessoal",
      "коли особовий інфінітив",
      "infinitivo flexionado vs impessoal",
    ],
    related: ["personal-infinitive", "impersonal-infinitive", "infinitive-vs-subjunctive"],
    intro:
      "Вибір між особовим і безособовим інфінітивом — це питання *чи треба кодувати підмет інфінітива окремо*. Якщо підмет уже стоїть на головному дієслові й збігається з виконавцем інфінітива, флексія зайва. Якщо виконавець інший, множинний, контрастивний або інакше неочевидний — флексія (або повне речення) потрібна.\n\nЦе не правило «у складних реченнях ставте особовий». Коротке `saí sem dizer nada` правильне. Довге `é importante que todos nós, depois da reunião, falar` — ні: тут особа вже не випливає сама, потрібне `falarmos` або `que falemos`.",
    formulas: [
      {
        label: "Той самий підмет",
        pattern: "S + V + PREP + INF",
        note: "Saí para comprar pão.",
      },
      {
        label: "Інший або виділений підмет",
        pattern: "S1 + V + PREP + (S2) + INF-flex",
        note: "Saí para comprares pão. / Saímos para comprarmos pão.",
      },
    ],
    formation:
      "Форми див. на сторінках особового й безособового інфінітива. Для рішення достатньо трьох запитань:\n\n1. Хто виконує інфінітив?\n2. Чи це той самий підмет, що в головного дієслова?\n3. Чи особа вже закодована іншим способом (клитик, іменник-додаток, модальне дієслово)?\n\nЯкщо відповідь на (2) «так» і на (3) не потрібна — безособовий. Якщо (2) «ні» і (3) «ні» — особовий або `que` + кон'юнктив.",
    uses: [
      {
        title: "Мінімальні пари",
        body: "Одна лексема, різний підмет — різний вибір. Читайте особу, не «складність речення».",
        examples: [
          ex("Estudei para passar.", "Я вчився, щоб скласти (сам)."),
          ex("Estudei para passares.", "Я вчився, щоб склав ти."),
          ex("Ficámos para ajudar.", "Ми залишилися, щоб допомогти (самі)."),
          ex("Ficámos para eles ajudarem.", "Ми залишилися, щоб допомогли вони."),
        ],
      },
      {
        title: "Множина як причина флексії",
        body: "Навіть при спільному підметі 1-ша множина часто бере особову форму, бо `-mos` знімає читання «хтось взагалі»: `É melhor esperarmos`. Безособове `É melhor esperar` — загальна рекомендація, не обов’язково «нам».",
        examples: [
          ex("É melhor esperar.", "Краще зачекати. (загалом)"),
          ex("É melhor esperarmos.", "Краще нам зачекати."),
        ],
      },
      {
        title: "Коли безособовий залишається правильним при іншому агенсі",
        body: "Якщо агенс уже є додатком головного дієслова, інфінітив може лишитися безособовим: `mandei-os sair`, `vi a Ana chegar`, `deixa a criança dormir`. Флексія була б дублюванням.",
        examples: [
          ex("Mandei os miúdos dormir.", "Я велів дітям спати.", { variety: "PT" }),
          ex("Fiz o motor arrancar.", "Я змусив мотор завестися."),
        ],
      },
      {
        title: "Двозначність як критерій",
        body: "`Trouxe o relatório para analisar` — хто аналізує? Я? Ти? Комісія? У реальному тексті контекст часто рятує. Якщо не рятує — `para analisarmos` / `para analisares` / `para ser analisado`.",
        examples: [
          ex("Trouxe o relatório para analisar.", "Приніс звіт проаналізувати. (двозначно)"),
          ex("Trouxe o relatório para analisarmos.", "Приніс звіт, щоб ми проаналізували."),
        ],
      },
    ],
    examples: [
      ex("Ela saiu sem se despedir.", "Вона пішла, не попрощавшись."),
      ex("Ela saiu sem nos despedirmos.", "Вона пішла, а ми не попрощалися."),
      ex("Trabalho muito para viver.", "Я багато працюю, щоб жити."),
      ex("Trabalho muito para viverem confortavelmente.", "Я багато працюю, щоб вони жили комфортно."),
    ],
    markers: ["той самий підмет → INF", "інший підмет → INF-flex", "модальні → INF", "оцінка + конкретна особа → INF-flex"],
    exceptions:
      "У юридичних і канцелярських текстах особовий інфінітив інколи ставлять скрізь, навіть де безособовий був би природнішим. У газетному заголовку навпаки стискають до безособового. Орієнтуйтеся на особу й двозначність, не на «офіційність».",
    mistakes: [
      mistake(
        "Nós saímos para comprar pão e voltarmos cedo.",
        "Nós saímos para comprar pão e voltar cedo. / ...para comprarmos pão e voltarmos cedo.",
        "Не змішуйте в координації безособовий і особовий без причини. Або обидва безособові (спільний підмет), або обидва особові.",
      ),
      mistake(
        "Quero falarmos sobre isso.",
        "Quero que falemos sobre isso. / Quero falar sobre isso.",
        "`querer` + інфінітив = той самий підмет (`quero falar`). Інший підмет — `querer que` + кон'юнктив, не особовий інфінітив безпосередньо після `querer`.",
      ),
    ],
    ukrainian:
      "Українською критерій «той самий підмет чи ні» теж існує (`хочу вийти` vs `хочу, щоб ти вийшов`), але всередині інфінітива особа не з’являється. Тому спокуса завжди ставити безособовий португальський інфінітив зрозуміла. Перевіряйте: якщо українською ви вже перейшли на `щоб` + особове дієслово, португальською майже напевно потрібен особовий інфінітив або кон'юнктив.",
    brPt:
      "PT-PT частіше обирає особовий при 1-й множині навіть без зміни підмета. PT-BR частіше лишає безособовий і додає `a gente`: `é melhor a gente esperar` ≈ `é melhor esperarmos`.",
    regional:
      "У всіх лузофонних нормах логіка та сама. Відрізняється поріг, з якого мовець вважає особу «неочевидною».",
    tables: [
      {
        caption: "Швидке рішення",
        headers: ["Ситуація", "Форма", "Приклад"],
        rows: [
          ["Модальне дієслово", "impessoal", "devemos sair"],
          ["Той самий підмет, однина", "impessoal", "saí para comprar"],
          ["Той самий підмет, nós (підкреслення)", "часто pessoal", "saímos para comprarmos"],
          ["Інший підмет", "pessoal", "saí para comprares"],
          ["Агенс уже в додатку", "impessoal", "vi-os chegar"],
          ["Оцінка без особи", "impessoal", "é preciso esperar"],
          ["Оцінка з особою", "pessoal", "é preciso esperarmos"],
        ],
      },
    ],
  },
  {
    id: "infinitive-vs-subjunctive",
    slug: "infinitive-vs-subjunctive",
    category: "infinitive",
    titleUk: "Інфінітив vs кон'юнктив",
    titlePt: "Infinitivo vs conjuntivo",
    titleEn: "Infinitive vs subjunctive",
    summary: "para fazer vs para que faça.",
    aliases: [
      "інфінітив кон'юнктив",
      "para que",
      "infinitivo vs conjuntivo",
      "infinitivo vs subjuntivo",
      "para fazer para que faça",
    ],
    related: [
      "personal-infinitive",
      "purpose-clauses",
      "presente-subjuntivo",
      "indicative-vs-subjunctive",
    ],
    intro:
      "Після ідеї мети, оцінки, очікування португальська має два синтаксичні шляхи: стислий інфінітив (`para chegar cedo`, `para chegarmos cedo`) і повне підрядне з кон'юнктивом (`para que chegue cedo`, `para que cheguemos cedo`).\n\nЦе не два часи й не «формальний / неформальний» ярлик. Різниця структурна: прийменник бере інфінітив; сполучник `que` (у `para que`, `a fim de que`, `sem que`) бере особове дієслово в кон'юнктиві.\n\nОбидва шляхи часто перекладаються українським `щоб` + особове дієслово. Не калькуйте `щоб` завжди як `que`.",
    formulas: [
      {
        label: "Мета інфінітивом",
        pattern: "V + para + (S) + INF / INF-flex",
        note: "Para eu ver. Para vermos.",
      },
      {
        label: "Мета кон'юнктивом",
        pattern: "V + para que + S + Vconj",
        note: "Para que eu veja. Para que vejamos.",
      },
    ],
    formation:
      "Інфінітив після прийменника: `para`, `a fim de`, `sem`, `até`, `antes de`, `depois de`, `apesar de`.\n\nКон'юнктив після сполучника з `que`: `para que`, `a fim de que`, `sem que`, `até que`, `antes que`, `embora`.\n\nДеякі пари майже паралельні:\n`antes de sairmos` ≈ `antes que saiamos`\n`sem eles perceberem` ≈ `sem que eles percebam`\n`para chegarmos` ≈ `para que cheguemos`\n\nАле `depois de` майже завжди інфінітив або індикатив (`depois que` + індикатив, бо подія подається як факт). `embora` майже завжди кон'юнктив, не інфінітив.",
    uses: [
      {
        title: "Мета: para + INF vs para que + conjuntivo",
        body: "Якщо підмет той самий, природніший інфінітив: `Falo devagar para ser entendido`. Якщо підмет інший, обидва варіанти живі: `Falo devagar para me entenderem` / `para que me entendam`. Кон'юнктив трохи більш «реченнєвий», інфінітив — стисліший.",
        examples: [
          ex("Abre a janela para ventilar.", "Відчини вікно, щоб провітрити. (той самий агенс)"),
          ex("Abre a janela para o quarto ventilar.", "Відчини вікно, щоб кімната провітрилася."),
          ex("Abre a janela para que o quarto ventile.", "Відчини вікно, щоб кімната провітрилася."),
        ],
      },
      {
        title: "Оцінка: інфінітив або que + кон'юнктив",
        body: "`É importante chegar cedo` (узагальнення) / `É importante chegarmos cedo` (нам) / `É importante que cheguemos cedo` (повноцінне підрядне). З явним `que` кон'юнктив обов’язковий: `*é importante que chegar` не існує.",
        examples: [
          ex("É pena perderes este comboio.", "Шкода, що ти втратиш цей потяг.", { variety: "PT" }),
          ex("É pena que percas este comboio.", "Шкода, що ти втратиш цей потяг."),
        ],
      },
      {
        title: "Воля: querer + INF vs querer que + conjuntivo",
        body: "Тут вибір жорсткий і залежить від підмета, не від стилю. Той самий підмет — тільки інфінітив: `quero sair`. Інший — тільки `que` + кон'юнктив: `quero que saias`. Особовий інфінітив після `querer` без прийменника не граматичний: `*quero saíres`.",
        examples: [
          ex("Quero descansar.", "Хочу відпочити."),
          ex("Quero que descanses.", "Хочу, щоб ти відпочив."),
        ],
      },
      {
        title: "Час: antes de / antes que, até / até que",
        body: "`antes de` + інфінітив — нейтральна норма. `antes que` + кон'юнктив підкреслює, що подія ще не сталася й розглядається як не-факт. `Até` + інфінітив (`até chegar`) vs `até que` + кон'юнктив (`até que chegue`) — подібна пара.",
        examples: [
          ex("Sai antes de ele chegar.", "Вийди до того, як він прийде."),
          ex("Sai antes que ele chegue.", "Вийди, поки він не прийшов."),
          ex("Espera até eu ligar.", "Чекай, доки я не зателефоную."),
          ex("Espera até que eu ligue.", "Чекай, доки я не зателефоную."),
        ],
      },
      {
        title: "Коли кон'юнктив не замінюється інфінітивом",
        body: "Після `embora`, `mesmo que`, `caso`, `desde que` («за умови»), `talvez` інфінітива немає. Після `quando` / `se` у майбутньому відкритому — майбутній кон'юнктив, не інфінітив. Після `que` як сполучника додаткового підрядного — особове дієслово.",
        examples: [
          ex("Embora estejamos cansados, continuamos.", "Хоч ми й стомлені, продовжуємо."),
          ex("Caso chova, ficamos em casa.", "Якщо дощитиме, лишаємось удома."),
        ],
      },
    ],
    examples: [
      ex("Fechei a porta para não acordar ninguém.", "Я зачинив двері, щоб нікого не розбудити."),
      ex("Fechei a porta para que ninguém acordasse.", "Я зачинив двері, щоб ніхто не прокинувся."),
      ex("Diz-me para eu perceber.", "Скажи мені, щоб я зрозумів."),
      ex("Diz-me para que eu perceba.", "Скажи мені, щоб я зрозумів."),
    ],
    markers: [
      "para + INF",
      "para que + conj.",
      "antes de + INF",
      "antes que + conj.",
      "sem + INF",
      "sem que + conj.",
      "querer + INF",
      "querer que + conj.",
    ],
    exceptions:
      "`depois que` бере індикатив, не кон'юнктив: подія подається як факт. `depois de` бере інфінітив. Не створюйте `*depois que cheguemos` у значенні «після того як ми приїдемо» — для майбутнього є `depois que chegarmos` (майбутній кон'юнктив) або `depois de chegarmos` (особовий інфінітив).\n\nУ PT-BR `para` + інфінітив значно частотніший за `para que`. `Para que` не помилковий, просто важчий.",
    mistakes: [
      mistake(
        "Quero que sair cedo.",
        "Quero sair cedo.",
        "Той самий підмет: інфінітив без `que`.",
      ),
      mistake(
        "Quero saíres cedo.",
        "Quero que saias cedo.",
        "Інший підмет після `querer` — тільки `que` + кон'юнктив, не особовий інфінітив.",
      ),
      mistake(
        "Para que chegar cedo, saímos às sete.",
        "Para chegar cedo, saímos às sete. / Para que chegássemos cedo…",
        "Після `para que` обов’язковий кон'юнктив. Для спільного підмета природніше `para` + інфінітив.",
      ),
      mistake(
        "Quando chegarmos, para que começar.",
        "Quando chegarmos, começamos.",
        "`quando` + майбутній кон'юнктив уже задає час. Мета тут ні до чого.",
      ),
    ],
    ukrainian:
      "Українське `щоб` покриває і `para` + INF, і `para que` + кон'юнктив, і `querer que`. Тому переклад не підкаже вибір. Дивіться на два параметри: чи є сполучник `que`, і чи збігаються підмети.\n\n`Хочу вийти` → `quero sair`.\n`Хочу, щоб ти вийшов` → `quero que saias`.\n`Вийшов рано, щоб встигнути` → `saí cedo para chegar a tempo`.\n`Говорю повільно, щоб ви зрозуміли` → `falo devagar para perceberem` / `para que percebam`.",
    brPt:
      "PT-BR віддає перевагу інфінітиву (`para você entender`). PT-PT частіше чергує з `para que percebas` / `para que perceba`, особливо в писемній мові. Зміст той самий.",
    regional:
      "В африканських стандартах писемна мова добре зберігає `para que` + кон'юнктив. Усна частіше йде інфінітивним шляхом, як у Бразилії.",
    tables: [
      {
        caption: "Паралельні конструкції",
        headers: ["Інфінітив", "Кон'юнктив", "Коли лише один шлях"],
        rows: [
          ["para (nós) sairmos", "para que saiamos", "спільний підмет → зазвичай INF"],
          ["antes de ele chegar", "antes que ele chegue", "обидва живі"],
          ["sem eles verem", "sem que eles vejam", "обидва живі"],
          ["é importante irmos", "é importante que vamos", "з que тільки conj."],
          ["—", "embora saia", "embora не бере INF"],
          ["quero sair", "quero que saias", "підмет вирішує жорстко"],
        ],
      },
    ],
  },
  {
    id: "infinitive-prepositions",
    slug: "after-prepositions",
    category: "infinitive",
    titleUk: "Інфінітив після прийменників",
    titlePt: "Infinitivo após preposição",
    titleEn: "Infinitive after prepositions",
    summary: "de, a, para, por, sem, até + infinitivo.",
    aliases: [
      "прийменник інфінітив",
      "ao chegar",
      "depois de",
      "antes de",
      "preposição infinitivo",
    ],
    related: ["personal-infinitive", "compound-prepositions", "impersonal-infinitive", "por-para"],
    intro:
      "Після прийменника португальське дієслово стоїть в інфінітиві, не в герундії на зразок англійського `-ing` і не в особовій формі. `depois de chegar`, `sem falar`, `ao sair`, `para viver`. Українською це часто дієприслівник (`прийшовши`), іменник (`після приходу`) або `щоб` + дієслово.\n\nПрийменник задає відношення (час, мета, причина, відсутність); інфінітив називає ситуацію. Особу за потреби додає особовий інфінітив.",
    formulas: [
      {
        label: "Прийменник + інфінітив",
        pattern: "PREP + INF",
        note: "depois de chegar, sem dizer, para viver",
      },
      {
        label: "ao + інфінітив (одночасність / момент)",
        pattern: "ao + INF",
        note: "Ao chegar, liguei. «Коли приїхав / у момент приїзду».",
      },
      {
        label: "PT-PT прогресив",
        pattern: "estar + a + INF",
        ptEu: "S + estar + a + INF",
        br: "S + estar + GER",
      },
    ],
    formation:
      "Найчастотніші прийменники з інфінітивом:\n\n`de` — після іменників, прикметників, дієслів з регенцією (`gostar de`, `acabar de`, `antes de`, `depois de`, `a fim de`, `apesar de`)\n`a` — напрямок до дії, європейський прогресив, `começar a`, `voltar a`, `aprender a`, `ao` + INF\n`para` — мета, адресат дії\n`por` — причина, обмін, «за те що»\n`sem` — без виконання дії\n`até` — межа в часі\n`em` — рідше: `em se tratando de`, `hesitar em`\n`com` — `com` + INF рідкісний; частіше `com` + іменник або герундій у BR (`com o tempo passando`)\n\nСкладені: `a fim de`, `apesar de`, `em vez de`, `depois de`, `antes de`, `ao` (контракція `a` + `o`).",
    uses: [
      {
        title: "de + infinitivo",
        body: "Дуже широкий клас. Регенція дієслова (`gosto de nadar`, `acabei de chegar`), час (`depois de jantar`, `antes de sair`), поступка (`apesar de estar doente`), іменник (`a ideia de partir`, `medo de perder`).",
        examples: [
          ex("Gosto de caminhar de manhã.", "Люблю ходити пішки вранці."),
          ex("Depois de ler o contrato, assinei.", "Прочитавши контракт, я підписав."),
          ex("Estou farto de esperar.", "Я ситий очікуванням.", { variety: "PT" }),
          ex("Estou cansado de esperar.", "Я втомився чекати."),
        ],
      },
      {
        title: "a + infinitivo",
        body: "`começar a chover`, `voltar a tentar`, `aprender a conduzir`. Окремо: PT-PT прогресив `está a chover`. `ao` + INF — часова рамка: `Ao ouvir isto, ela riu`.",
        examples: [
          ex("Começou a nevar.", "Почав падати сніг."),
          ex("Estou a escrever-te agora.", "Я тобі зараз пишу.", { variety: "PT" }),
          ex("Ao virar a esquina, vi o café.", "Завернувши за ріг, я побачив кав’ярню."),
        ],
      },
      {
        title: "para + infinitivo",
        body: "Мета й призначеність: `água para beber`, `vim para ficar`, `estudo para entender`. З іншим підметом — особовий інфінітив.",
        examples: [
          ex("Isto não é para deitar fora.", "Це не для того, щоб викидати."),
          ex("Chamou-me para eu ver o problema.", "Покликав мене, щоб я подивився на проблему."),
        ],
      },
      {
        title: "por + infinitivo",
        body: "Причина або «за те, що»: `obrigado por vir`, `foi preso por mentir`, `por ser tarde, voltámos`. Не плутати з `para` (мета).",
        examples: [
          ex("Obrigado por teres vindo.", "Дякую, що прийшов."),
          ex("Por sermos muitos, alugámos uma van.", "Оскільки нас багато, ми взяли бус."),
        ],
      },
      {
        title: "sem, até, após",
        body: "`sem` заперечує виконання: `saiu sem pagar`. `até` ставить межу: `fica até eu voltar`. `após` — формальніший синонім `depois de`.",
        examples: [
          ex("Saiu sem dizer uma palavra.", "Пішов, не сказавши ні слова."),
          ex("Fica até eu voltar.", "Залишайся, доки я не повернуся."),
          ex("Após concluir o curso, candidatou-se.", "Закінчивши курс, він подав заявку.", { register: "formal" }),
        ],
      },
    ],
    examples: [
      ex("Em vez de reclamar, propõe uma solução.", "Замість скаржитися, запропонуй рішення."),
      ex("A fim de evitar erros, revemos o texto.", "Щоб уникнути помилок, ми переглядаємо текст."),
      ex("Não hesite em ligar.", "Не вагайтеся телефонувати."),
      ex("Passámos o serôo a conversar.", "Ми провели вечір за розмовою.", { variety: "PT" }),
    ],
    markers: [
      "depois de",
      "antes de",
      "ao + INF",
      "para + INF",
      "por + INF",
      "sem + INF",
      "apesar de",
      "a fim de",
      "em vez de",
      "acabar de",
      "começar a",
    ],
    exceptions:
      "Англійська калька `after arriving` → `*depois de chegando` неправильна. Після прийменника — інфінітив, не герундій.\n\nВиняток: деякі абсолютні конструкції з герундієм без прийменника (`Estando cansado, fui-me embora`) і бразильське `em` + герундій (`em se tratando de…`).\n\n`de` зникає перед `que` в деяких нормах (`tenho certeza que` vs `tenho certeza de que`); перед інфінітивом `de` зазвичай лишається: `certeza de estar certo`.",
    mistakes: [
      mistake(
        "Depois de chegando, liguei.",
        "Depois de chegar, liguei.",
        "Після прийменника інфінітив, не gerúndio.",
      ),
      mistake(
        "Obrigado para vir.",
        "Obrigado por vir. / Obrigado por teres vindo.",
        "Подяка за вже виконану дію — `por`, не `para`. `para` було б метою.",
      ),
      mistake(
        "Comecei de trabalhar às nove.",
        "Comecei a trabalhar às nove.",
        "`começar a` + INF. `começar de` — не та регенція.",
      ),
      mistake(
        "Gosto a nadar.",
        "Gosto de nadar.",
        "`gostar de`, завжди `de`.",
      ),
    ],
    ukrainian:
      "Українські прийменники з інфінітивом обмежені (`для того щоб`, `замість`). Часто ми кажемо віддієслівний іменник (`після приходу`) або дієприслівник (`прийшовши`). Португальська майже завжди лишається в інфінітиві: це не «іменник дії», а саме дієслово без часу.\n\nНе перекладайте український дієприслівник автоматично португальським герундієм після прийменника.",
    brPt:
      "PT-PT: `estar a` + INF як прогресив; `ao` + INF дуже частотне. PT-BR: прогресив `estar` + gerúndio; `ao chegar` існує, але в розмові часто `quando eu cheguei` / `chegando`. `ter que` + INF частотніше в BR, `ter de` — в обох, з перевагою PT-PT.",
    regional:
      "`ao` + INF живе в усіх стандартах. У розмовному PT-BR його частка нижча. В Анголі писемна мова близько до PT-PT у цих конструкціях.",
    tables: [
      {
        caption: "Прийменник + інфінітив: ядро",
        headers: ["Прийменник", "Типове значення", "Приклад"],
        rows: [
          ["de", "регенція, час, поступка", "depois de sair, gostar de ler"],
          ["a", "початок, прогресив PT-PT", "começar a falar, estar a falar"],
          ["ao", "момент дії", "ao chegar"],
          ["para", "мета", "para viver"],
          ["por", "причина, подяка", "por ter vindo"],
          ["sem", "відсутність дії", "sem pagar"],
          ["até", "межа", "até voltar"],
          ["após", "після (формальніше)", "após concluir"],
        ],
      },
    ],
  },
];
