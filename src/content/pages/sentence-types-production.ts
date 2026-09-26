import type { GrammarPage } from "../types";
import { ex, mistake, page } from "../helpers";

const GULBENKIAN_II = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/";
const GULBENKIAN_III = "https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/";
const CAMOES_PLE = "https://www.instituto-camoes.pt/activity/centro-virtual/referencial-camoes-ple";

export const pages: GrammarPage[] = [
  page({
    id: "rhetorical-questions", slug: "rhetorical-questions", category: "syntax",
    titleUk: "Риторичні питання", titlePt: "Perguntas retóricas", titleEn: "Rhetorical questions",
    summary: "Питальна форма, яка виконує не лише функцію пошуку інформації.",
    aliases: ["риторичні питання", "rhetorical questions", "perguntas retóricas"],
    related: ["questions-yesno", "wh-questions", "speech-acts", "emphasis-focus"],
    status: "draft", origin: "handwritten", depth: "high", ukrainianContrast: "high",
    intro: "Риторичне питання має граматичну форму питання, але його комунікативна функція може бути іншою: підкреслення очевидності, докір, оцінка, сумнів або спонукання до роздумів. Сам знак питання не доводить риторичність; її визначає контекст і очікувана інтерпретація.",
    definition: "Риторичне питання — питальна конструкція, використана в контексті, де основною метою є не отримання невідомої відповіді, а інша дискурсивна дія.",
    uses: [
      { title: "Очевидна відповідь", body: "Питання може підкреслювати, що відповідь уже передбачається контекстом.", examples: [ex("Quem poderia acreditar nisso?", "Хто міг би в це повірити?")] },
      { title: "Оцінка або докір", body: "Питальна форма може посилити оцінку чи докір без реального очікування інформаційної відповіді.", examples: [ex("Como pudeste fazer isso?", "Як ти міг/могла так зробити?")] }
    ],
    examples: [ex("Quem poderia acreditar nisso?", "Хто міг би в це повірити?", { purpose: "comprehension" }), ex("Como pudeste fazer isso?", "Як ти міг/могла так зробити?", { purpose: "contrast" })],
    mistakes: [mistake("визначати риторичне питання лише за знаком ?", "перевіряти, чи контекст справді робить інформаційну відповідь основною метою", "Риторичність належить до прагматичної інтерпретації, а не до окремої граматичної форми.", "predicted-l1-transfer", "medium")],
    ukrainian: "Українська використовує риторичні питання так само, тому базова функціональна аналогія корисна. Не слід, однак, вважати конкретну українську частку або порядок слів обов'язковим португальським еквівалентом.",
    regional: "Риторичний ефект значною мірою залежить від інтонації, жанру й контексту; письмовий текст часто потребує ширшого контексту для правильної інтерпретації.",
    sources: [{ label: "Fundação Calouste Gulbenkian — Gramática do Português, Vol. III", url: GULBENKIAN_III }, { label: "Camões — Referencial Camões PLE", url: CAMOES_PLE }]
  })];
