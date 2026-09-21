# Grammar Content Verification & Sources

## Purpose

This document defines the evidence policy for the Portuguese grammar reference. The goal is not to attach a citation to every trivial example, but to ensure that normative, regional, or disputed claims can be traced to a reliable source.

## Source hierarchy

### Tier 1 — reference grammars and official language institutions

Use these for structural and normative claims.

1. **Gramática do Português — Fundação Calouste Gulbenkian**
   - Comprehensive reference grammar.
   - Covers syntax, semantics, pragmatics, discourse, morphology, phonology and phonetics.
   - Explicitly discusses contrasts between European Portuguese and Brazilian Portuguese and includes information about Portuguese in Angola and Mozambique.
   - https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/
   - https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/

2. **Camões — Instituto da Cooperação e da Língua**
   - Official Portuguese-language teaching resources.
   - Useful for phonetics, pronunciation and learning-oriented explanations.
   - https://cvc.instituto-camoes.pt/fonetica

3. **Acordo Ortográfico / VOC**
   - Use for spelling and orthographic-status claims.
   - Camões identifies the Vocabulário Ortográfico Comum as the platform containing the instruments that determine Portuguese orthography for the CPLP member states.
   - https://ww3.instituto-camoes.pt/activity/o-que-fazemos/ensinar-portugues/acordo-ortografico

### Tier 2 — specialist linguistic reference

**Ciberdúvidas da Língua Portuguesa**

Use for targeted questions where the answer depends on usage, variation, disputed rules or the interaction of syntax and style.

Particularly useful areas already relevant to this project:

- personal vs impersonal infinitive;
- infinitive after prepositions;
- infinitive + pronoun placement;
- verb government;
- BR/PT differences.

Examples consulted during this audit:

- https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/a-selecao-do-infinitivo-por-diferentes-classes-gramaticais/36113
- https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/o-uso-do-infinitivo/30857
- https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/infinitivo-pessoal-e-o-pronome-o/38940
- https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/preposicao-seguida-de-artigo-definido-sem-contracao/32586
- https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/preciso-de-estudar-e-preciso-estudar/22875

## Important verification principles

### 1. Do not turn tendencies into absolute rules

Portuguese grammar contains areas where grammars explicitly describe tendencies rather than categorical rules, especially infinitive selection. The guide should therefore distinguish:

- obligatory;
- strongly preferred;
- common;
- possible;
- marked/formal/literary;
- colloquial/regional;
- disputed.

Avoid statements such as "X is always wrong" unless the evidence supports a genuinely categorical restriction.

### 2. BR/PT differences need labels

A construction can be grammatical in both varieties but have different frequency, register or syntactic preference.

The guide should prefer:

> PT-PT: more frequent / standard preference X
> PT-BR: more frequent / standard preference Y

over categorical statements that one variety "uses X" and the other "uses Y".

### 3. Examples are evidence-bearing content

Every example teaches more than its translation. Before accepting an example, check:

- grammaticality;
- intended meaning;
- variety;
- register;
- agreement;
- government;
- clitic placement;
- whether the Ukrainian translation preserves the same pragmatic force.

### 4. Contrastive explanations must compare systems, not words

For Ukrainian learners, explanations should identify the structural source of the error.

Bad model:

> Portuguese para = Ukrainian "для".

Better model:

> Portuguese para + infinitive frequently expresses purpose, where Ukrainian may use "щоб + finite verb", an infinitive, a verbal noun or a different construction.

### 5. Phonetics must not use one pronunciation as universal

The pronunciation pages should distinguish:

- phoneme;
- phonetic realization;
- orthographic representation;
- PT-BR;
- PT-PT;
- regional variation.

Camões teaching resources explicitly treat contrasts such as r/R, s/z, ô/o and l/lh as phonetic learning targets, supporting the decision to give phonetics its own structured section.

## Current quality gate

Before adding another large batch of topics, review each new page against:

- [ ] definition is technically accurate;
- [ ] examples are grammatical;
- [ ] examples have correct variety/register labels;
- [ ] no tendency is presented as an absolute rule without evidence;
- [ ] BR/PT differences are not caricatured;
- [ ] Ukrainian comparison describes a structural difference;
- [ ] related-topic IDs actually exist;
- [ ] page is reachable through the category loader;
- [ ] catalog metadata matches the page ID/slug/category;
- [ ] the topic is not a duplicate of an existing page;
- [ ] normative claims have an identifiable reference source.

## Verification status

The current repository has moved from simple topic expansion toward an evidence-aware reference architecture. The next audit should focus on claim-level verification of existing pages, not merely on increasing topic count.

## Verification pass: September 2026

This pass prioritizes high-risk claims over adding more topic count.

### Infinitive: avoid mechanical rules

The personal infinitive should be described in terms of subject structure, coreference, emphasis and construction rather than as a simple “different subject = personal infinitive” algorithm. Ciberdúvidas explicitly describes the choice as involving tendencies and stylistic factors, and gives examples where both personal and impersonal forms are possible with the same subject.

Practical policy:
- say **usually / tends to / in this construction** where the distribution is a tendency;
- reserve **required** for contexts where the construction genuinely excludes the alternative;
- do not treat `para + infinitive`, `a + infinitive`, or modal verbs as universal triggers independent of clause structure;
- distinguish the infinitive's subject from the subject of the matrix clause.

Reference checks:
- Ciberdúvidas, “Infinitivo pessoal, ou impessoal?” — both forms can be acceptable when the subjects are the same, with a preference for the impersonal form in the cited context.
- Ciberdúvidas, “Infinitivo flexionado” — describes the use of the personal infinitive in terms of tendencies rather than exclusively mechanical rules.
- Ciberdúvidas, “A seleção do infinitivo pessoal por diferentes classes gramaticais” — explicitly relates personal infinitive to an infinitive clause with its own subject and discusses emphasis.

### African Portuguese

Do not write “African Portuguese = European Portuguese” as a categorical identity. A historical description may say that European Portuguese was the standard model in Angola, Mozambique and other Portuguese-speaking African/Asian contexts, but current descriptions also discuss emerging national varieties/norms and contact-induced changes.

Practical policy:
- distinguish **historical/educational standard orientation** from **actual spoken usage**;
- do not generalize Angola and Mozambique into one grammar;
- do not label contact features as errors;
- if a concrete feature is attributed to Angola or Mozambique, provide a source for that feature rather than extrapolating from the existence of language contact.

### BR/PT contrasts

A table entry such as “PT-BR = X / PT-PT = Y” is acceptable only when the text immediately makes clear whether the distinction is normative, frequent, colloquial, regional, register-specific, or a pedagogical simplification.

The preferred wording is **typical / frequent / especially common / in formal writing / in colloquial speech**, not an unqualified universal.

### Source hierarchy

1. Fundação Calouste Gulbenkian, *Gramática do Português* — reference grammar.
2. Camões / official orthographic and language-learning materials — pedagogical and normative support.
3. Ciberdúvidas — targeted usage questions and explanations; useful for disputed or variable constructions.
4. Descriptive/academic sources for national and regional varieties.

When sources disagree, preserve the disagreement and explain the scope rather than collapsing it into a single “correct” rule.

## Reference anchors

For broad grammatical description, the project uses the *Gramática do Português* (Fundação Calouste Gulbenkian) as a principal reference work. Its published description explicitly treats the language descriptively, includes European Portuguese together with Brazilian, Angolan and Mozambican varieties, and incorporates multiple registers and spoken/written data. See:

- https://gulbenkian.pt/publications/gramatica-do-portugues-vol-i/
- https://gulbenkian.pt/publications/gramatica-do-portugues-vol-ii/
- https://gulbenkian.pt/publications/gramatica-do-portugues-vol-iii/

These references should not be treated as a single prescriptive authority. Where the project makes a normative claim, the claim should be separately checked against the relevant orthographic, educational or specialist normative source.

