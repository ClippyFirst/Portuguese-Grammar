export type ContentStatus =
  | "planned"
  | "catalogued"
  | "draft"
  | "review"
  | "release-ready"
  | "deprecated";

export type Variety = "universal" | "BR" | "PT" | "AFR" | "AO" | "MZ" | "CV" | "GW" | "STP" | "TL" | "other";

export type Register = "neutral" | "colloquial" | "formal" | "literary" | "rare" | "spoken" | "written";

export type ArticleType =
  | "concept"
  | "form"
  | "construction"
  | "contrast"
  | "usage"
  | "reference"
  | "error"
  | "variation"
  | "system";

export type ArticleDepth = "core" | "extended" | "advanced";

export type ReviewStatus =
  | "catalog-only"
  | "fallback"
  | "review-needed"
  | "reviewed";

export type EvidenceKind =
  | "reference"
  | "normative"
  | "descriptive"
  | "corpus"
  | "academic"
  | "editorial"
  | "learner-evidence"
  | "predicted-interference"
  | "needs-review";

export type ContentBlock = {
  text: string;
  notes?: string[];
};

export type ExamplePurpose =
  | "comprehension"
  | "contrast"
  | "production"
  | "error-correction";

export type Example = {
  pt: string;
  uk: string;
  variety?: Variety;
  register?: Register;
  note?: string;
  annotation?: string;
  purpose?: ExamplePurpose;
  context?: string;
  function?: string;
};

export type Mistake = {
  wrong: string;
  right: string;
  why: string;
  source?: "documented" | "learner-corpus" | "predicted-l1-transfer" | "editorial";
  confidence?: "high" | "medium" | "low";
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

export type ContrastiveBlock = {
  ukrainianAnalogy?: ContentBlock;
  ukrainianDifference?: ContentBlock;
  absentInUkrainian?: ContentBlock;
  falseEquivalence?: ContentBlock;
  translationTrap?: ContentBlock;
  transferRisk?: ContentBlock;
  ukrainianAdvantage?: ContentBlock;
};

export type VariationRecord = {
  variety: Variety;
  grammaticality?: "standard" | "accepted" | "restricted" | "nonstandard";
  standardStatus?: string;
  frequency?: string;
  register?: Register;
  channel?: "spoken" | "written" | "both";
  socialContext?: string;
  note: string;
  evidence?: string[];
};

export type RelatedRelation =
  | "prerequisite"
  | "advanced"
  | "contrast"
  | "extension"
  | "exception"
  | "form"
  | "function"
  | "common-error"
  | "next";

export type RelatedTopic = {
  id: string;
  relation: RelatedRelation;
};

export type EvidenceRecord = {
  id: string;
  kind: EvidenceKind;
  claim?: string;
  sourceId: string;
  note?: string;
};

export type MinimalPair = {
  id: string;
  a: Example;
  b: Example;
  difference: string;
};

export type Diagnostic = {
  question: string;
  ifYes?: string;
  ifNo?: string;
};

export type TerminologyBlock = {
  canonicalUk?: string;
  canonicalPt?: string;
  aliases?: string[];
};

/**
 * Target model for reviewed content.
 * Legacy GrammarPage remains supported during gradual migration.
 */
export type GrammarArticle = {
  id: string;
  type: ArticleType;
  category: string;
  title: {
    uk: string;
    pt: string;
    en?: string;
  };
  aliases: {
    uk: string[];
    pt: string[];
    en?: string[];
  };
  summary: string;
  depth: ArticleDepth;
  definition: ContentBlock;
  forms?: ContentBlock;
  functions?: ContentBlock;
  usage?: ContentBlock;
  distribution?: ContentBlock;
  constraints?: ContentBlock;
  ukrainianContrast?: ContrastiveBlock;
  examples: Example[];
  minimalPairs?: MinimalPair[];
  diagnostics?: Diagnostic[];
  commonErrors?: Mistake[];
  exceptions?: ContentBlock;
  variation?: VariationRecord[];
  register?: ContentBlock;
  terminology?: TerminologyBlock;
  related: RelatedTopic[];
  evidence?: EvidenceRecord[];
  sources?: string[];
  cefr?: string[];
  lastReviewed?: string;
  reviewStatus: ReviewStatus;
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
  depth?: "high" | "medium" | "short";
  register?: Register;
  variety?: Variety[];
  ukrainianContrast?: "high" | "medium" | "low" | "none";

  intro: string;
  formulas?: Formula[];
  formation?: string;
  uses?: UseCase[];
  examples?: Example[];
  definition?: string;
  nonUses?: UseCase[];
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
  ukrainianContrast?: "high" | "medium" | "low" | "none";
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
