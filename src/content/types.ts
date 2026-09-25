export type ContentStatus =
  | "planned"
  | "catalogued"
  | "draft"
  | "review"
  | "release-ready"
  | "deprecated";

export type Variety =
  | "universal"
  | "BR"
  | "PT"
  | "AFR"
  | "AO"
  | "MZ"
  | "CV"
  | "GW"
  | "STP"
  | "TL"
  | "other";

export type Register =
  | "neutral"
  | "colloquial"
  | "formal"
  | "literary"
  | "rare"
  | "spoken"
  | "written";

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

export type Source = {
  label: string;
  url?: string;
  note?: string;
};

export type TopicRelations = {
  prerequisites?: string[];
  related?: string[];
  contrast?: string[];
  next?: string[];
  variant?: string[];
  partOf?: string;
};

export type GrammarPage = TopicRelations & {
  id: string;
  slug: string;
  category: string;

  titleUk: string;
  titlePt: string;
  titleEn: string;
  summary: string;
  aliases: string[];

  status?: ContentStatus;
  origin?: "handwritten" | "generated";
  depth: "high" | "medium" | "short";
  register?: Register;
  variety?: Variety[];
  ukrainianContrast: "high" | "medium" | "low" | "none";

  intro: string;
  definition?: string;
  formulas?: Formula[];
  formation?: string;
  uses?: UseCase[];
  nonUses?: UseCase[];
  examples?: Example[];
  markers?: string[];
  exceptions?: string;
  mistakes?: Mistake[];
  ukrainian?: string;
  comparisonUk?: string;
  regional?: string;
  brPt?: string;
  tables?: TableData[];

  sources?: Source[];
  reviewedAt?: string;
};

export type TopicMeta = TopicRelations & {
  id: string;
  slug: string;
  category: string;
  titleUk: string;
  titlePt: string;
  titleEn: string;
  summary: string;
  aliases: string[];
  depth: "high" | "medium" | "short";
  status?: ContentStatus;
  origin?: "handwritten" | "generated";
  ukrainianContrast: "high" | "medium" | "low" | "none";
  register?: Register;
  variety?: Variety[];
};

export type CategoryDef = {
  id: string;
  slug: string;
  titleUk: string;
  titlePt: string;
  description: string;
  group: "core" | "verb" | "syntax" | "ref";
};
