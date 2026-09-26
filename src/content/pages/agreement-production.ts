import type { GrammarPage } from "../types";
import { mistake } from "../helpers";

const draft = (p: GrammarPage): GrammarPage => ({
  ...p,
  status: "draft",
  origin: "handwritten",
});

export const pages: GrammarPage[] = [
  draft({
    id: "agreement-edge-cases", slug: "edge-cases", category: "agreement",
    titleUk: "Складні випадки узгодження", titlePt: "Casos especiais de concordância", titleEn: "Agreement edge cases",
    summary: "Як визначати граматичний центр узгодження у складних підметах, кількісних групах і конструкціях із незвичним порядком слів.",
    aliases: ["agreement edge cases","concordância"],
    related: ["agreement-sv"],
    depth: "high",
    ukrainianContrast: "high",
    intro: "У складних групах підмета, при узгодженні з колективними назвами або за незвичного порядку компонентів треба визначати граматичний центр конструкції, а не погоджувати дієслово з найближчим словом. У A mãe dos gémeos vive aqui ядром підмета є mãe, а не gémeos. У Chegaram os convidados постпозиційний підмет os convidados все одно визначає число дієслова. Для кількісних і колективних груп потрібен окремий аналіз, а не правило «узгоджуй із найближчим іменником».",
    definition: "Складні випадки узгодження — конструкції, де формальна структура та семантична інтерпретація можуть давати різні підказки. Головне питання — який компонент є граматичним центром, а де можливе варіантне узгодження через значення групи.",
    formation: "Розбирайте підмет від вершини до залежних компонентів: спочатку знайдіть іменну голову або координовану структуру, потім визначте число компонентів і лише після цього перевірте, чи конструкція належить до груп із варіантним узгодженням. Особливо не змішуйте a maioria dos alunos з os alunos: у першому випадку формальна вершина maioria є одниною, але множинне узгодження може з'являтися через семантичний фокус на членах групи.",

    uses: [
      { title: "Іменник із de", body: "У групі a mãe dos gémeos головним іменником є mãe; множина gémeos не змінює форму дієслова." },
      { title: "Складений підмет", body: "A Ana e o Pedro vivem aqui: координовані компоненти зазвичай утворюють множинний підмет." },
      { title: "Підмет після дієслова", body: "Chegaram os convidados: інверсія не скасовує узгодження." },
      { title: "Кількісні групи", body: "A maioria dos alunos chegou cedo. Тут однина відповідає формальній вершині maioria; множинне узгодження також може вживатися, коли мовець семантично висуває на перший план членів групи." },
      { title: "mais de um", body: "Конструкція mais de um зазвичай поєднується з дієсловом в однині: Mais de um aluno faltou. Не робіть множину базовим правилом." },
      { title: "Дроби й відсотки", body: "У dois terços dos alunos chegaram форма множини відповідає кількісній групі та її множинному референту. Із відсотками узгодження залежить від побудови групи та граматичного центру." },
      { title: "um dos", body: "У um dos alunos chegou cedo дієслово узгоджується з одниною um, а не з множиною alunos." }
    ],
    examples: [
      {"pt":"A mãe dos gémeos vive aqui.","uk":"Мати близнюків живе тут."},
      {"pt":"A Ana e o Pedro vivem aqui.","uk":"Ана і Педро живуть тут."},
      {"pt":"Chegaram os convidados.","uk":"Гості прийшли."},
      {"pt":"A maioria dos alunos chegou cedo.","uk":"Більшість студентів прийшла рано."},
      {"pt":"A maioria dos alunos chegaram cedo.","uk":"Більшість студентів прийшли рано.","purpose":"comprehension"},
      {"pt":"Mais de um aluno faltou.","uk":"Не прийшов більше ніж один учень.","purpose":"contrast"},
      {"pt":"Dois terços dos alunos chegaram cedo.","uk":"Дві третини студентів прийшли рано.","purpose":"production"},
      {"pt":"Um dos alunos chegou cedo.","uk":"Один зі студентів прийшов рано.","purpose":"contrast"}
    ],
    mistakes: [
      mistake("Os resultados do estudo mostra uma diferença.","Os resultados do estudo mostram uma diferença.","Підмет — resultados; do estudo є залежним компонентом.","predicted-l1-transfer","high"),
      mistake("A mãe dos gémeos vivem aqui.","A mãe dos gémeos vive aqui.","Головний іменник mãe має однину.","predicted-l1-transfer","high"),
      mistake("Chegou os convidados.","Chegaram os convidados.","Постпозиційний підмет також визначає узгодження.","predicted-l1-transfer","high"),
      mistake("A maioria dos alunos chegaram cedo як єдина нормативна модель.","A maioria dos alunos chegou cedo / A maioria dos alunos chegaram cedo — залежно від моделі узгодження та семантичного фокусу.","У кількісно-колективних групах можливе варіантне узгодження.","documented","high"),
      mistake("Um dos alunos chegaram cedo.","Um dos alunos chegou cedo.","Граматичний центр конструкції — um; dos alunos є залежною групою.","predicted-l1-transfer","high")
    ],
    ukrainian: "Українська має подібну проблему узгодження, але поверхневі підказки й порядок слів можуть відрізнятися.",
    regional: "Базові моделі спільні, але окремі кількісні та колективні конструкції можуть мати різну частотність узгодження в PT-BR та PT-PT. Для довідника важливо розрізняти обов'язкове узгодження від варіантного.",
    brPt: "У конструкціях на кшталт a maioria de, a parte de, um grupo de можливе чергування однини й множини залежно від граматичного та семантичного фокусу. Не подавайте один варіант як єдино можливий без уточнення контексту.",
    sources: [
      { label: "Ciberdúvidas — Concordância verbal com expressões quantificadoras", url: "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/concordancia-verbal-com-expressoes-quantificadoras/33318" },
      { label: "Gramática do Português — Fundação Calouste Gulbenkian", url: "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/" }
    ],
  }),
];
