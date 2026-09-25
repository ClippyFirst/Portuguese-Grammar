# Portuguese Grammar Content Production Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Begin systematic production of reviewed, Ukrainian-L1-oriented Portuguese grammar articles from the canonical inventory, while preserving the repository's existing schema and loader architecture.

**Architecture:** Keep the existing category-based `src/content/pages/*.ts` loader. Add focused production modules only where canonical topics are not already represented, and upgrade existing pages in-place where they are the authoritative implementation. Use the canonical `GrammarPage` schema during the migration period, with explicit status/origin/evidence/variation metadata where supported.

**Tech Stack:** TypeScript, Astro content modules, existing `GrammarPage` types/helpers, GitHub Contents API.

**Spec:** `docs/ARTICLE-REQUIREMENTS.md`, `docs/CANONICAL-GRAMMAR-INVENTORY.md`, `docs/GRAMMAR-REFERENCE-STANDARD.md`, `docs/CONTENT-QA.md`, `docs/CONTRASTIVE-METHODOLOGY.md`, `docs/EVIDENCE-POLICY.md`, `docs/CONTENT-REWRITE.md`.

## Global Constraints

- Audience: Ukrainian L1 speakers learning Portuguese.
- Preserve the distinction between form, function, meaning, distribution, constraints, register, and variety.
- Never present predicted L1 interference as documented learner error.
- Never turn frequency into grammaticality or a BR/PT tendency into a binary rule.
- High-risk claims require evidence metadata or remain explicitly review-needed.
- Examples must have a pedagogical purpose and natural Ukrainian translations.
- Avoid mechanically identical article templates; use only relevant modules.
- Do not replace the existing large content modules wholesale without first verifying their ownership of canonical IDs.
- Keep `main` untouched during production; all work lands on this branch first.

## Review Focus

- Ukrainian transfer caused by the absence of grammatical articles or different case marking.
- PT-BR/PT-PT differences being accidentally presented as universal Portuguese.
- Terminology differences between grammatical traditions being mistaken for different constructions.
- Examples that are grammatically possible but pedagogically misleading because their context is underspecified.
- Absolute wording (always/never/only) that should instead be scoped to construction, variety, register, or evidence.

### Task 1: Production branch and plan

**Files:**
- Create: `docs/superpowers/plans/2026-09-25-content-production.md`

- [x] Create the production branch from `main`.
- [x] Save this implementation plan on the production branch.

### Task 2: Complete one semantic block before expanding breadth

**Files:**
- Modify existing authoritative page modules when their canonical IDs already exist.
- Create focused `src/content/pages/<category>-production.ts` modules only for missing canonical IDs.

- [ ] Audit each selected canonical ID against the current page modules before creating it.
- [ ] Rewrite the selected pages using the mandatory core: definition, form where relevant, function/meaning, distribution/constraints, examples, Ukrainian contrast, related topics, review/evidence metadata.
- [ ] Add conditional diagnostics, minimal pairs, errors, variation, register, or terminology only when they solve a real learner decision.
- [ ] Mark content `draft`/review-needed until evidence and QA gates are satisfied.

### Task 3: First production block — valency/government

**Files:**
- Modify: `src/content/pages/valency.ts`

- [ ] Audit the existing valency pages for canonical closure rather than mere mention.
- [ ] Separate argument structure from government and from adjuncthood.
- [ ] Make semantic roles and complement types explicit without pretending terminology is theory-neutral.
- [ ] Scope all BR/PT examples and remove unsupported learner-error claims.
- [ ] Add evidence/review metadata to high-risk government claims.

### Task 4: Second production block — reference/determiners

**Files:**
- Modify the existing article/determiner modules as authoritative owners of their IDs.

- [ ] Treat definite, indefinite, and zero determination as a contrastive system.
- [ ] Explicitly distinguish definiteness, specificity, genericity, and discourse reference.
- [ ] Cover proper names, professions/roles, mass nouns, and fixed/prepositional environments where they are canonical topics.
- [ ] Scope PT-BR/PT-PT variation and register.
- [ ] Add diagnostics only where Ukrainian learners face a recurring choice.

### Task 5: Third production block — pronouns/clitics

**Files:**
- Modify: `src/content/pages/clitics.ts` and related pronoun modules.

- [ ] Separate argument role, clitic form, placement, and variety.
- [ ] Cover `lhe` vs `o/a`, proclisis/enclisis, clitic clusters, and BR/PT distribution as distinct learner problems.
- [ ] Avoid using Ukrainian case labels as one-to-one Portuguese equivalents.

### Task 6: Fourth production block — infinitive/mood/subordination

**Files:**
- Modify: `src/content/pages/infinitive.ts`, `src/content/pages/moods.ts`, and subordinate-clause modules.

- [ ] Explain personal infinitive through subject structure and construction, not a mechanical trigger list.
- [ ] Separate indicative/conjunctive selection from Ukrainian `що/щоб`.
- [ ] Cover future conjunctive and reduced/non-finite clauses with explicit temporal and subject contrasts.
- [ ] Distinguish PT-BR/PT-PT progressive constructions without reducing them to mutually exclusive rules.

### Task 7: Verification and integration

**Files:**
- Modify only files that fail the QA pass.

- [ ] Run repository structural/type/content checks available in the project.
- [ ] Check duplicate IDs, catalog/page correspondence, related-link integrity, and malformed arrays.
- [ ] Perform linguistic, contrastive, evidence, pedagogical, Ukrainian, and Portuguese QA on representative pages.
- [ ] Create a reviewable PR from the production branch; do not merge to `main` until the resulting diff is inspected.

## Definition of Done

The first production tranche is complete when its selected canonical IDs have real authored content (not fallback/generated placeholders), valid graph links, Ukrainian contrast, scoped variation/register, evidence status for high-risk claims, and pass structural/content QA. Remaining unreviewed claims must be explicitly marked rather than silently treated as settled.
