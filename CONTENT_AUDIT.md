# Content & static-reference audit

**Audit target:** `codex/complete-static-reference`  
**Catalog:** 225 topics  
**Dedicated content modules:** 93 topics  
**Coverage fallback:** 132 topics  
**Effective navigation coverage:** 225 / 225

## 1. What was fixed

### Catalog coverage

Previously, the catalog contained 225 topics while only 93 had a page module. The remaining 132 topics could be listed by the UI but resolved to 404.

The repository now has a conservative static fallback provider:

- `src/content/generated-pages.ts`
- `src/content/load.ts`

A dedicated hand-written module always wins. The fallback only supplies the missing page provider.

This restores navigation integrity without pretending that generated material has already passed the same linguistic review as the hand-written modules.

### Navigation contracts

`scripts/content-audit.mjs` checks:

- duplicate catalog IDs;
- duplicate dedicated page IDs;
- catalog → page-provider coverage;
- `related` references;
- `ESSENTIAL_IDS`;
- `COMPARISON_IDS`.

The check is exposed as:

```bash
npm run audit:content
```

### CI

`.github/workflows/reference-qa.yml` runs:

1. TypeScript typecheck;
2. ESLint;
3. content audit;
4. production build.

The current CI install step uses `npm install` because the checked-in lockfile has existing peer-resolution drift: the current toolchain asks for `lru-cache@11.5.3`, while the lockfile only contains the older 5.1.1 entry. This is an infrastructure debt item, not a content decision.

### Runtime simplification

The root reference shell no longer mounts the unused authentication provider. The grammar pages themselves do not depend on accounts, sessions, database state, connectors, or user data.

## 2. Content status

### Dedicated / linguistically reviewed layer

The strongest material remains in the dedicated modules, especially:

- fundamentals;
- articles;
- clitics;
- contractions;
- crase;
- infinitive;
- moods;
- negation;
- questions;
- se;
- syntax;
- regional;
- agreement;
- conjunctions;
- numerals.

These modules contain the deeper explanatory structure: formulas, examples, mistakes, Ukrainian notes, regional notes, and tables where appropriate.

### Coverage layer

The 132 fallback topics are intentionally conservative. They contain:

- title and summary from the catalog;
- a structured introduction;
- a reference formula;
- examples;
- common-mistake block;
- Ukrainian-specific note;
- regional / PT-BR / PT-PT note;
- related topics;
- a small navigation table.

They are **not** treated as equivalent to a fully fact-checked grammar article.

## 3. Next linguistic pass

The next pass should replace fallback pages with dedicated articles in this order:

1. core verbs: `ser`, `estar`, `ficar`, `ter`, `haver`;
2. tense system: `presente`, `pretérito perfeito`, `imperfeito`, `perfeito vs imperfeito`;
3. prepositions: `a`, `de`, `em`, `por`, `para`, `por/para`, verb valency;
4. pronouns and clitics: direct/indirect objects, `lhe` vs `o/a`, `tu/você`, `nós/a gente`;
5. gerund / progressive and PT-BR vs PT-PT;
6. relative and subordinate clauses;
7. passive / impersonal / existential constructions;
8. spelling and noun/adjective systems;
9. remaining lower-frequency topics.

For every promoted page, verify claims against authoritative Portuguese reference sources and explicitly distinguish:

- common core;
- PT-BR;
- PT-PT;
- African / other Lusophone variation;
- register;
- descriptive variation vs normative recommendation.

## 4. Acceptance criteria

The project should be considered content-complete only when:

- every catalog topic has a dedicated, fact-checked article;
- every example has been checked for grammaticality and translation;
- every PT-BR / PT-PT label is justified;
- every related link resolves;
- essential/comparison/table navigation contains no dead targets;
- typecheck, lint, content audit and production build pass in CI;
- the reference does not require authentication or database state;
- SEO/accessibility/static-hosting behavior has been verified on the deployed build.

**Important:** 225/225 navigation coverage is now achieved, but this is not the same as 225/225 linguistic fact-check coverage.
