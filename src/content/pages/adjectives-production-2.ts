import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const G1 = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/";
const G2 = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const CAM = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "adjective-coordination", slug: "adjective-coordination", category: "adjectives",
    titleUk: "Однорідні прикметники", titlePt: "Coordenação de adjetivos", titleEn: "Adjective coordination",
    summary: "Як поєднувати два або більше прикметників у межах однієї іменної групи.",
    aliases: ["однорідні прикметники", "adjective coordination", "coordenação de adjetivos"],
    related: ["adjective-agreement", "adjective-position", "coordinating", "adjective-agreement"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Два чи більше прикметників можуть спільно характеризувати один іменник. Важливо розрізняти просте накопичення характеристик, координацію через сполучник і складні випадки, де порядок прикметників впливає на інтерпретацію.",
    definition: "Координація прикметників — синтаксичне поєднання прикметників, які мають спільний зв'язок із тією самою іменною групою та можуть бути поєднані сполучником або іншим координувальним засобом.",
    uses: [
      { title: "Перелік", body: "Прикметники можуть подавати кілька окремих характеристик.", examples: [ex("uma casa grande e bonita", "великий і гарний будинок")] },
      { title: "Спільне узгодження", body: "Кожен прикметник має відповідати іменнику за релевантними категоріями.", examples: [ex("duas casas grandes e bonitas", "два великі й гарні будинки")] },
      { title: "Пунктуація та сполучники", body: "Коми й координувальні сполучники допомагають показати структуру, але їхня конкретна вживаність залежить від конструкції.", examples: [ex("um livro curto, claro e útil", "коротка, зрозуміла й корисна книжка")] }
    ],
    examples: [ex("uma casa grande e bonita", "великий і гарний будинок", { purpose: "production" }), ex("duas casas grandes e bonitas", "два великі й гарні будинки", { purpose: "comprehension" })],
    mistakes: [mistake("узгоджувати лише останній прикметник", "перевіряти кожен прикметник окремо та визначати, до якого іменника він належить", "Українська також узгоджує однорідні прикметники, тому помилка тут не є автоматичною для українськомовного студента.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська має дуже близьку модель однорідних прикметників, тому базова синтаксична схема легко переноситься. Окремо треба стежити за португальськими формами узгодження та пунктуацією.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: G1 }, { label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. II", url: G2 }]
  }),
  page({
    id: "adjective-intensification", slug: "adjective-intensification", category: "adjectives",
    titleUk: "Підсилення прикметників", titlePt: "Intensificação dos adjetivos", titleEn: "Adjective intensification",
    summary: "Як виражати вищий ступінь ознаки за допомогою прислівників та словотвірних форм.",
    aliases: ["підсилення прикметників", "adjective intensification", "intensificação dos adjetivos"],
    related: ["adverbs-degree", "absolute-superlative", "comparatives", "superlatives"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Португальська має кілька засобів посилити прикметникову ознаку: прислівники міри, зокрема muito, та суфіксальні форми на -íssimo. Ці засоби не є повними синонімами: вони можуть відрізнятися за структурою, стилістичним ефектом і лексичною доступністю.",
    definition: "Інтенсифікація прикметника — збільшення ступеня вираженої ознаки за допомогою прислівникового, морфологічного або іншого конструкційного засобу.",
    uses: [
      { title: "Прислівникова інтенсифікація", body: "Muito може посилювати прикметник без зміни його морфологічної форми.", examples: [ex("muito importante", "дуже важливий")] },
      { title: "Суфіксальна форма", body: "Форми на -íssimo виражають високий ступінь ознаки.", examples: [ex("importantíssimo", "надзвичайно важливий")] },
      { title: "Не плутати з порівнянням", body: "Інтенсифікація не обов'язково встановлює порівняння з іншими референтами.", examples: [ex("A solução é muito simples.", "Рішення дуже просте.")] }
    ],
    examples: [ex("muito importante", "дуже важливий", { purpose: "production" }), ex("importantíssimo", "надзвичайно важливий", { purpose: "comprehension" }), ex("A solução é muito simples.", "Рішення дуже просте.", { purpose: "contrast" })],
    mistakes: [mistake("ототожнювати -íssimo з найвищим ступенем у групі", "розрізняти інтенсивність ознаки та порівняння одного референта з групою", "Українські «дуже» і «най-» також розрізняють ці значення, тому корисно використовувати цю позитивну аналогію.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська має прислівникове підсилення та суфіксальні моделі, тому функціональна відмінність між «дуже» і «най-» добре переноситься. Португальські форми та їхній стиль треба засвоювати окремо.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. I", url: G1 }, { label: "Camões — Referencial Camões PLE", url: CAM }]
  })];
