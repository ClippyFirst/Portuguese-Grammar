export type Variety = "universal" | "BR" | "PT" | "AFR" | "AO" | "MZ" | "CV" | "other";

export type Register = "neutral" | "colloquial" | "formal" | "literary" | "rare";

export type Example = {
  pt: string;
  uk: string;
  variety?: Variety;
  register?: Register;
  note?: string;
  annotation?: string;
};

export type Mistake = {
  wrong: string;
  right: string;
  why: string;
};

export type Formula = {
  label?: string;
  pattern?: string;
  negative?: string;
  question?: string;
  note?: string;
  br?: string;
  ptEu?: string;
};

export type TableData = {
  caption?: string;
  headers: string[];
  rows: string[][];
  note?: string;
  scroll?: boolean;
};

export type UseCase = {
  title: string;
  body: string;
  examples?: Example[];
};

export type GrammarPage = {
  id: string;
  slug: string;
  category: string;
  titleUk: string;
  titlePt: string;
  titleEn: string;
  summary: string;
  aliases: string[];
  related: string[];
  intro: string;
  formulas?: Formula[];
  formation?: string;
  uses?: UseCase[];
  examples?: Example[];
  markers?: string[];
  exceptions?: string;
  mistakes?: Mistake[];
  ukrainian?: string;
  regional?: string;
  brPt?: string;
  tables?: TableData[];
};

export type TopicMeta = {
  id: string;
  slug: string;
  category: string;
  titleUk: string;
  titlePt: string;
  titleEn: string;
  summary: string;
  aliases: string[];
  related: string[];
  depth: "high" | "medium" | "short";
};

export type CategoryDef = {
  id: string;
  slug: string;
  titleUk: string;
  titlePt: string;
  description: string;
  group: "core" | "verb" | "syntax" | "ref";
};
