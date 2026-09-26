
import type { GrammarPage } from "../types";
import { ex, mistake } from "../helpers";

export const pages: GrammarPage[] = [
  {
    id: "bare-nominals", slug: "bare-nominals", category: "articles",
    titleUk: "Голі іменні групи: іменник без явного детермінатива",
    titlePt: "Sintagmas nominais nus", titleEn: "Bare nominals",
    summary: "Коли португальська допускає іменну групу без артикля та чому його відсутність не завжди є помилкою.",
    aliases: ["голі іменні групи", "bare nominals", "sintagmas nominais nus"],
    related: ["zero-article","article-omission","generic-reference","specificity","articles-definite","articles-indefinite"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Гола іменна група — це іменна група без явно вираженого артикля або іншого детермінатива: Cães precisam de espaço, Comprei livros, Água é essencial. Для україномовного студента це важливо, бо українська не має артиклів. У португальській нульова детермінація може бути граматично мотивованою і залежить від референції, кількості, узагальнення, типу іменника та конструкції. Тому правило «перед кожним іменником постав артикль» так само неправильне, як і «артиклі можна завжди пропускати».",
    definition: "Іменна група без overt determiner, яка отримує референційне або предикативне значення з контексту та конструкції.",
    formation: "Нульова детермінація особливо природна з генеричними множинними іменниками та деякими масовими іменниками. Порівнюйте Cães precisam de espaço, Comprei livros і Os livros estão na mesa: у першому випадку йдеться про клас, у другому — про невизначену множину, у третьому — про ідентифіковану групу.",
    uses: [
      { title: "Генеричне значення", body: "Гола множина може позначати клас або вид.", examples: [ex("Cães precisam de exercício.", "Собакам потрібні фізичні вправи.", { purpose: "production" })] },
      { title: "Невизначена множина", body: "Гола множина може вводити невизначену кількість без uns/umas.", examples: [ex("Comprei livros ontem.", "Я вчора купив/купила книжки.", { purpose: "production" }), ex("Comprei uns livros ontem.", "Я вчора купив/купила кілька книжок.", { purpose: "contrast" })] },
      { title: "Масові іменники", body: "Нульова детермінація часто природна, коли речовина подається загалом.", examples: [ex("Água é essencial.", "Вода необхідна.", { purpose: "comprehension" }), ex("A água da garrafa está fria.", "Вода в пляшці холодна.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Cães precisam de espaço.", "Собакам потрібен простір.", { purpose: "production" }),
      ex("Comprei livros ontem.", "Я вчора купив/купила книжки.", { purpose: "production" }),
      ex("Os livros estão na mesa.", "Книжки лежать на столі.", { purpose: "contrast" }),
      ex("Comprei uns livros ontem.", "Я вчора купив/купила кілька книжок.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("ставити означений артикль перед кожним іменником", "визначати тип референції та конструкцію", "Португальська має системні контексти нульової детермінації.", "predicted-l1-transfer", "high"),
      mistake("вважати кожну голу множину помилкою", "розрізняти генеричне, невизначене та конкретне читання", "Відсутність артикля може бути граматично мотивованою.", "editorial", "high")
    ],
    ukrainian: "Українська дозволяє сказати просто «книжки», «вода», «собаки». У португальській треба додатково встановити, чи референт конкретний, уже відомий, генеричний, невизначений або масовий. Переклад не є автоматичним правилом.",
    regional: "Базові моделі нульової детермінації спільні, але частотність артикля в окремих іменних групах може відрізнятися між національними стандартами.",
    brPt: "PT-BR і PT-PT мають спільне ядро, але в окремих контекстах відрізняються частотністю артикля. Конкретний випадок треба аналізувати в межах цільового різновиду.",
    sources: [
      { label: "Dicionário Terminológico — Direção-Geral da Educação", url: "https://area.dge.mec.pt/gramatica/DT_2008.pdf" },
      { label: "Dicionário Terminológico — Listagem de domínios", url: "https://area.dge.mec.pt/gramatica/Listagem_Dominios.pdf" }
    ],
    reviewedAt: "2026-09-25"
  },
  {
    id: "brazilian-topic-subject", slug: "brazilian-topic-subject", category: "syntax",
    titleUk: "Тема-підмет у бразильській португальській",
    titlePt: "Construções de tópico-sujeito no português brasileiro",
    titleEn: "Brazilian Portuguese topic-subject constructions",
    summary: "Конструкції, у яких переддієслівний компонент має тематичне значення та бере участь в узгодженні дієслова.",
    aliases: ["тема-підмет","topic-subject","tópico-sujeito"],
    related: ["topicalization","subject-object-order","information-structure","pt-br-pt-pt","agreement-sv","null-subject"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Tópico-sujeito — важлива конструкція в описі PT-BR, у якій переддієслівний іменний компонент має тематичне значення та може контролювати узгодження дієслова. У літературі відомі генітивні та локативні типи: O carro furou o pneu та Essa casa bate muito sol. Це не просто вільна перестановка слів і не універсальна модель усієї португаломовної системи.",
    definition: "У навчальному описі topic-subject — конструкція PT-BR, де переддієслівний компонент інтерпретується як тема цілого/частини або локативна тема та має властивості, пов'язані з позицією підмета й узгодженням.",
    formation: "Вчіть конструкцію через контраст із неканонічною формою. O carro furou o pneu пов'язує O carro з частиною o pneu без звичайного genitive de. У Essa casa bate muito sol переддієслівна тема має локативне значення. Не зводьте такі речення до простого SVO.",
    uses: [
      { title: "Ціле → частина", body: "Переддієслівна тема може позначати ціле, частина якого є аргументом дієслова.", examples: [ex("O carro furou o pneu.", "У автомобіля пробило шину.", { variety: "BR", purpose: "comprehension" }), ex("A mesa quebrou o pé.", "У столу зламалася ніжка.", { variety: "BR", purpose: "comprehension" })] },
      { title: "Локативна тема", body: "Тема може позначати місце, пов'язане з подією.", examples: [ex("Essa casa bate muito sol.", "У цей будинок сильно світить сонце.", { variety: "BR", purpose: "comprehension" }), ex("Essa gaveta cabe muita coisa.", "У цю шухляду вміщається багато речей.", { variety: "BR", purpose: "comprehension" })] },
      { title: "Не плутати з topicalization", body: "Звичайна topicalization не обов'язково створює той самий зв'язок узгодження.", examples: [ex("Este livro, eu já li.", "Цю книжку я вже прочитав/прочитала.", { variety: "BR", purpose: "contrast" }), ex("O carro furou o pneu.", "У автомобіля пробило шину.", { variety: "BR", purpose: "contrast" })] }
    ],
    examples: [
      ex("O carro furou o pneu.", "У автомобіля пробило шину.", { variety: "BR", purpose: "production" }),
      ex("A mesa quebrou o pé.", "У столу зламалася ніжка.", { variety: "BR", purpose: "comprehension" }),
      ex("Essa casa bate muito sol.", "У цей будинок сильно світить сонце.", { variety: "BR", purpose: "comprehension" }),
      ex("Essa gaveta cabe muita coisa.", "У цю шухляду вміщається багато речей.", { variety: "BR", purpose: "comprehension" })
    ],
    mistakes: [
      mistake("називати O carro звичайним агентивним підметом", "аналізувати відношення ціле–частина", "Конструкція не є простим еквівалентом O pneu do carro furou.", "predicted-l1-transfer", "high"),
      mistake("вважати topic-subject синонімом будь-якої topicalization", "розрізняти тематизацію та спеціальні конструкції з узгодженням", "У дослідницькій літературі topic-subject описується як окремий клас PT-BR конструкцій.", "editorial", "high"),
      mistake("переносити конструкцію без маркування на PT-PT", "позначати її як PT-BR-specific phenomenon", "У порівняльних дослідженнях вона вирізняється саме для PT-BR.", "documented", "high")
    ],
    ukrainian: "Українська має відмінкові способи виразити подібні відношення: «у машини пробило шину». Переклад приховує, чому португальська конструкція має такий порядок і узгодження. Вчіть її як окрему PT-BR модель.",
    regional: "Topic-subject є насамперед феноменом PT-BR у сучасній описовій літературі. Не переносіть його як нейтральну модель PT-PT.",
    brPt: "PT-BR допускає topic-subject constructions, які в літературі протиставляються європейській португальській. PT-PT має власні стратегії тематизації.",
    sources: [
      { label: "Munhoz & Naves — Construções de tópico-sujeito", url: "https://www.ojs.uel.br/revistas/uel/index.php/signum/article/view/11759" },
      { label: "Morais & Toledo — Tópico-sujeito", url: "https://periodicos.unb.br/index.php/cs/article/view/32258" },
      { label: "Kato & Ordóñez — Topic Subjects in Brazilian Portuguese", url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/synt.12180" }
    ],
    reviewedAt: "2026-09-25"
  },
  {
    id: "emphatic-affirmation", slug: "emphatic-affirmation", category: "syntax",
    titleUk: "Підсилене ствердження", titlePt: "Afirmação enfática", titleEn: "Emphatic affirmation",
    summary: "Як португальська підсилює позитивне висловлення без зміни його базової полярності.",
    aliases: ["підсилене ствердження","emphatic affirmation","afirmação enfática"],
    related: ["sentence-basics","negation-nao","discourse-markers","information-structure","sentence-type-vs-speech-act"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Емфатичне ствердження — не окремий «п'ятий тип речення», а спосіб зробити позитивну пропозицію помітнішою, контрастивною або категоричною. У португальській для цього працюють інтонація, порядок компонентів, sim та окремі фокусні конструкції. Важливо розрізняти полярність, тип речення та прагматичний ефект підсилення.",
    definition: "Емфатичне ствердження — позитивне висловлення, у якому форма або контекст робить стверджувану інформацію особливо помітною.",
    formation: "Базове Ele veio може отримати емфатичне читання в Ele veio, sim. Cleft-конструкція Foi a Maria que comprou o livro фокусує конкретний компонент. Не вчіть sim або cleft як універсальні «слова для наголосу»: вони мають окремі синтаксичні й дискурсивні функції.",
    uses: [
      { title: "sim як підтвердження", body: "sim може підтверджувати позитивне твердження всупереч попередньому запереченню.", examples: [ex("Ele veio, sim.", "Він таки прийшов.", { purpose: "production" }), ex("— Ele não veio. — Veio, sim.", "— Він не прийшов. — Таки прийшов.", { purpose: "contrast" })] },
      { title: "Фокусування", body: "Foi X que виділяє компонент як інформаційний фокус.", examples: [ex("Foi a Maria que comprou o livro.", "Саме Марія купила книжку.", { purpose: "contrast" }), ex("Foi ontem que ele chegou.", "Саме вчора він прийшов.", { purpose: "contrast" })] },
      { title: "Інтонація", body: "В усному мовленні просодія може підсилювати позитивне твердження без окремого морфологічного маркера.", examples: [ex("Eu quero isto.", "Я хочу це.", { purpose: "comprehension" }), ex("Eu quero isto, sim.", "Я таки хочу це.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Ele veio, sim.", "Він таки прийшов.", { purpose: "production" }),
      ex("Foi a Maria que comprou o livro.", "Саме Марія купила книжку.", { purpose: "contrast" }),
      ex("Foi ontem que ele chegou.", "Саме вчора він прийшов.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("вважати емфазу окремим граматичним часом або способом", "відрізняти полярність, тип речення та інформаційну структуру", "Підсилення часто виникає на дискурсивному рівні.", "editorial", "high"),
      mistake("перекладати кожне sim як «так»", "дивитися на функцію sim у контексті", "sim може бути відповіддю, підтвердженням або емфатичним маркером.", "predicted-l1-transfer", "medium"),
      mistake("використовувати Foi X que як універсальний спосіб поставити наголос", "визначати, чи потрібна саме cleft-конструкція", "Cleft має власну синтаксичну структуру.", "editorial", "high")
    ],
    ukrainian: "Українська має близькі ресурси: «таки», інтонаційний наголос і конструкції «саме X». Це позитивний перенос, але португальські sim, cleft та інтонація не є взаємозамінними.",
    regional: "Емфаза реалізується комбінацією граматики, лексики, інтонації та дискурсу; конкретні розмовні моделі можуть відрізнятися між різновидами.",
    brPt: "Базові засоби фокусування спільні, але частотність окремих конструкцій та розмовні стратегії можуть відрізнятися.",
    sources: [
      { label: "Dicionário Terminológico — Direção-Geral da Educação", url: "https://area.dge.mec.pt/gramatica/DT_2008.pdf" },
      { label: "Ciberdúvidas — Análise sintáctica de uma oração", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/analise-sintactica-de-uma-oracao/24981" }
    ],
    reviewedAt: "2026-09-25"
  },
  {
    id: "biased-polar-questions", slug: "biased-polar-questions", category: "syntax",
    titleUk: "Полярні питання з очікуваною відповіддю",
    titlePt: "Perguntas polares orientadas", titleEn: "Biased polar questions",
    summary: "Питання так/ні, у яких контекст, частки або форма сигналізують очікування мовця щодо відповіді.",
    aliases: ["питання з очікуваною відповіддю","biased polar questions","perguntas polares orientadas"],
    related: ["questions-yesno","question-word-order","discourse-markers","emphatic-affirmation","speech-acts","question-tags"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Полярне питання має відповідь типу так/ні, але не кожне таке питання є нейтральним запитом інформації. Мовець може вже мати припущення, очікувати підтвердження, дивуватися або м'яко підштовхувати співрозмовника до певної відповіді. Тому треба розрізняти граматичну форму питання та його прагматичну орієнтацію.",
    definition: "Biased polar question — полярне питання, у якому форма або контекст робить одну відповідь прагматично більш очікуваною для мовця.",
    formation: "Нейтральне Vens amanhã? може просто запитувати про майбутню подію. Então vens amanhã? перевіряє або підсилює припущення. Não vens amanhã? може виражати здивування або очікування заперечення залежно від контексту та інтонації. Не вчіть não як механічний маркер відповіді «ні».",
    uses: [
      { title: "Підтвердження припущення", body: "Дискурсивний контекст робить питання перевіркою вже сформованого припущення.", examples: [ex("Então vens amanhã?", "То ти завтра приходиш?", { variety: "PT", purpose: "production" }), ex("Então você vem amanhã?", "То ти завтра приходиш?", { variety: "BR", purpose: "production" })] },
      { title: "Здивування або очікуване заперечення", body: "Заперечна форма може сигналізувати подив або перевірку очікування.", examples: [ex("Não vens amanhã?", "Ти що, завтра не приходиш?", { variety: "PT", purpose: "comprehension" }), ex("Você não vem amanhã?", "Ти завтра не приходиш?", { variety: "BR", purpose: "comprehension" })] },
      { title: "Питання як непряме прохання", body: "Питальна форма може мати директивний ефект, але це окремий прагматичний аналіз.", examples: [ex("Pode trazer o livro amanhã?", "Можете принести книжку завтра?", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Vens amanhã?", "Ти завтра приходиш?", { variety: "PT", purpose: "production" }),
      ex("Então vens amanhã?", "То ти завтра приходиш?", { variety: "PT", purpose: "contrast" }),
      ex("Você vem amanhã?", "Ти завтра приходиш?", { variety: "BR", purpose: "production" }),
      ex("Você não vem amanhã?", "Ти завтра не приходиш?", { variety: "BR", purpose: "comprehension" }),
      ex("Pode trazer o livro amanhã?", "Можете принести книжку завтра?", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("вважати кожне заперечне питання питанням із очікуваною відповіддю «ні»", "аналізувати контекст та інтонацію", "Заперечна форма може виражати різні прагматичні ефекти.", "editorial", "high"),
      mistake("вважати всі питання прагматично нейтральними", "розрізняти форму питання та очікування мовця", "Одна форма може мати різні дискурсивні інтерпретації.", "predicted-l1-transfer", "high"),
      mistake("ототожнювати Pode...? з буквальним запитом про здатність", "перевіряти, чи питання функціонує як непряме прохання", "Контекст може робити питання директивним.", "documented", "high")
    ],
    ukrainian: "Українська має близькі ресурси: «То ти завтра приходиш?», «Ти завтра не приходиш?». Це допомагає зрозуміти прагматику, але португальські займенники, інтонація та порядок слів треба вчити окремо.",
    regional: "Полярні питання є в усіх основних різновидах португальської. Поверхнева форма може відрізнятися через порядок слів, займенники та інтонацію.",
    brPt: "У PT-PT часткові питання з інверсією можуть бути типовішими, тоді як PT-BR частіше допускає порядок із переддієслівним підметом. Це окрема від pragmatic bias властивість, але вона впливає на форму питання.",
    sources: [
      { label: "Ciberdúvidas — O verbo na interrogativa direta", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/o-verbo-na-interrogativa-direta/31627" },
      { label: "Ciberdúvidas — Posição do sujeito nas interrogativas parciais", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/posicao-do-sujeito-nas-interrogativas-parciais/21978" },
      { label: "Ciberdúvidas — Ato ilocutório diretivo e intenção perlocutória", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/ato-ilocutorio-diretivo-e-intencao-perlocutoria/37803" }
    ],
    reviewedAt: "2026-09-25"
  },
  {
    id: "definite-null-subjects", slug: "definite-null-subjects", category: "syntax",
    titleUk: "Означені нульові підмети", titlePt: "Sujeitos nulos definidos", titleEn: "Definite null subjects",
    summary: "Невиражений підмет із конкретним референтом, який відновлюється з морфології або дискурсу.",
    aliases: ["означений нульовий підмет","definite null subjects","sujeito nulo definido"],
    related: ["null-subject","subject-pronouns","subject-placement","discourse-reference","indefinite-null-subjects","expletive-null-subjects"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Означений нульовий підмет — конкретний референт без вираженого займенника: Cheguei cedo, A Maria entrou e Ø sentou-se. Португальська системно допускає такі підмети, але їхня інтерпретація залежить від морфології дієслова та дискурсу. Для україномовного студента це знайоме явище, але важливо розрізняти конкретний нульовий підмет, невизначений нульовий підмет і експлетивний нульовий підмет.",
    definition: "Definite null subject — нульовий підмет із конкретним референтом, який можна ідентифікувати з контексту або граматичних ознак.",
    formation: "У першій особі Cheguei дає сильну підказку eu. У третій особі Chegou може мати кілька конкретних референтів, тому контекст стає важливішим. Явний займенник може бути потрібний для контрасту або зміни референта: Eu quero ir, mas ele quer ficar.",
    uses: [
      { title: "Морфологічне відновлення", body: "Перша та друга особа часто дозволяють легко відновити референт.", examples: [ex("Cheguei cedo.", "Я прийшов/прийшла рано.", { purpose: "production" }), ex("Vais ao Porto amanhã?", "Ти завтра їдеш до Порту?", { variety: "PT", purpose: "production" })] },
      { title: "Дискурсивне відновлення", body: "У третій особі попередня згадка часто визначає нульовий підмет.", examples: [ex("A Maria entrou e Ø sentou-se.", "Марія увійшла і сіла.", { purpose: "production" }), ex("O João chegou. Ø Estava cansado.", "Жуан прийшов. Він був втомлений.", { purpose: "comprehension" })] },
      { title: "Явний займенник для контрасту", body: "Виражений займенник може сигналізувати контраст або зміну референта.", examples: [ex("Eu quero ir, mas ele quer ficar.", "Я хочу піти, а він хоче залишитися.", { purpose: "contrast" })] }
    ],
    examples: [
      ex("Cheguei cedo.", "Я прийшов/прийшла рано.", { purpose: "production" }),
      ex("A Maria entrou e Ø sentou-se.", "Марія увійшла і сіла.", { purpose: "production" }),
      ex("O João chegou. Ø Estava cansado.", "Жуан прийшов. Він був втомлений.", { purpose: "comprehension" }),
      ex("Eu quero ir, mas ele quer ficar.", "Я хочу піти, а він хоче залишитися.", { purpose: "contrast" })
    ],
    mistakes: [
      mistake("повторювати eu/ele/ela перед кожним дієсловом", "перевіряти, чи референт уже відновлюється", "Явний займенник часто потрібен для контрасту або ясності, а не як обов'язковий маркер.", "predicted-l1-transfer", "high"),
      mistake("ототожнювати будь-який нульовий підмет із невизначеним", "розрізняти definite та indefinite null subjects", "Конкретний референт може бути відновлений із контексту.", "documented", "high"),
      mistake("вважати Chegou однозначним", "перевіряти discourse reference", "Третя особа без контексту може мати кілька можливих референтів.", "editorial", "high")
    ],
    ukrainian: "Українська також часто опускає особовий займенник, тому це зона позитивного переносу. Проте португальська має власний розподіл нульових та явних підметів, а PT-BR і PT-PT відрізняються за частотністю.",
    regional: "Нульовий підмет є системною властивістю португальської, але його розподіл змінюється між різновидами.",
    brPt: "PT-PT широко використовує референтні нульові підмети. У сучасному PT-BR явні суб'єктні займенники частотніші, хоча нульові підмети не зникли повністю.",
    sources: [
      { label: "Ciberdúvidas — Sujeito nulo subentendido", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/sujeito-nulo-subentendido/30517" },
      { label: "Ciberdúvidas — Sujeito subentendido", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/sujeito-obrigatorio/37247" },
      { label: "Kato & Ordóñez — Topic Subjects in Brazilian Portuguese", url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/synt.12180" }
    ],
    reviewedAt: "2026-09-25"
  },
  {
    id: "secondary-stress", slug: "secondary-stress", category: "spelling",
    titleUk: "Вторинний наголос у португальській", titlePt: "Acento secundário", titleEn: "Secondary stress",
    summary: "Другорядна просодична виділеність у багатоскладових словах і чому вона не дорівнює другому графічному акценту.",
    aliases: ["вторинний наголос","secondary stress","acento secundário"],
    related: ["stress","stress-phonology","accentuation-advanced","diacritics"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "medium",
    intro: "Португальське слово зазвичай має одну головну наголошену складову, але в довших словах можуть виникати додаткові точки просодичної виділеності, які описують як acento secundário. Для студента важливо відокремити головний наголос, вторинну просодичну виділеність та графічний знак наголосу. Вторинний наголос не означає, що слово автоматично отримує другий ´ або ^ на письмі.",
    definition: "Вторинний наголос — другорядна просодична виділеність складу, слабша за головний словесний наголос.",
    formation: "У багатоскладових і похідних словах вторинна виділеність може з'являтися на переднаголошених складах. Це фонетико-просодична властивість, а не окрема орфографічна категорія. Тому спеціальне позначення grave у деяких фонетичних описах не слід копіювати в сучасне написання слова.",
    uses: [
      { title: "Головний і вторинний наголос", body: "Головний наголос є основною просодичною вершиною; вторинний слабший.", examples: [ex("retórica", "риторика", { purpose: "comprehension" }), ex("estrondosamente", "дуже гучно / оглушливо", { purpose: "comprehension" })] },
      { title: "Не плутати з графічним акцентом", body: "Орфографічний знак має власні правила і не є транскрипцією всіх просодичних властивостей.", examples: [ex("café", "кава", { purpose: "contrast" }), ex("automóvel", "автомобіль", { purpose: "contrast" })] },
      { title: "Похідні слова", body: "Довгі слова можуть мати складні ритмічні структури, але це не створює нової морфологічної категорії.", examples: [ex("automóvelzinho", "автомобільчик", { purpose: "comprehension" })] }
    ],
    examples: [
      ex("café", "кава", { purpose: "contrast" }),
      ex("automóvel", "автомобіль", { purpose: "contrast" }),
      ex("automóvelzinho", "автомобільчик", { purpose: "comprehension" }),
      ex("estrondosamente", "дуже гучно / оглушливо", { purpose: "comprehension" })
    ],
    mistakes: [
      mistake("вважати вторинний наголос другим графічним акцентом", "розділяти просодію та орфографію", "Вторинний наголос описує вимову; графічний знак підпорядковується орфографічним правилам.", "predicted-l1-transfer", "high"),
      mistake("ставити ´ або ^ на кожен склад із додатковою виділеністю", "застосовувати правила акцентуації окремо від фонетичного опису", "Орфографічний акцент не є транскрипцією всіх просодичних властивостей.", "editorial", "high"),
      mistake("вважати позначення grave у фонетичному прикладі частиною сучасного написання", "перевіряти, чи джерело подає орфографію чи фонетичну транскрипцію", "Деякі описи використовують додаткові знаки для передачі вторинного наголосу.", "documented", "high")
    ],
    ukrainian: "Українська також має складну ритмічну організацію мовлення, але письмо не позначає вторинний наголос окремим знаком. Найважливіше — не змішувати «де слово звучить сильніше» з «де португальська орфографія ставить акцент».",
    regional: "Вторинний наголос належить до просодії й може залежати від темпу, ритму, структури слова та різновиду. Не слід перетворювати один фонетичний опис на орфографічну норму.",
    brPt: "Ритм і реалізація ненаголошених складів відрізняються між PT-BR та PT-PT, тому конкретна акустична реалізація може варіювати. Орфографічні правила при цьому не слід виводити з фонетичного варіювання.",
    sources: [
      { label: "Ciberdúvidas — Dupla acentuação", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/dupla-acentuacao/69" },
      { label: "Ciberdúvidas — Transcrição fonética de retórica", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/transcricao-fonetica-de-retorica/30276" }
    ],
    reviewedAt: "2026-09-25"
  }
];
