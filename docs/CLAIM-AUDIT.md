# Claim-level audit

This log tracks the highest-risk grammar claims in the reference. It is deliberately separate from the coverage audit: page count does not establish factual reliability.

## Status

- **Verified/reframed** — the claim was checked against the project's evidence policy and rewritten when an unconditional formulation was not justified.
- **Priority review** — requires a source-backed pass before release.
- **Usage-sensitive** — must distinguish standard, frequency, register, region, or variety.

## Completed high-risk pass

| Area | Risk | Status | Editorial rule applied |
|---|---|---|---|
| Clitic placement | PT-BR/PT-PT variation; proclisis/enclisis | Verified/reframed | Avoid “Brazil always / Portugal always”; scope claims by construction and register. |
| Personal infinitive | Subject identity and agreement | Verified/reframed | Treat personal infinitive as construction- and context-sensitive; avoid mechanical subject-difference rules. |
| Mood selection | indicative/subjunctive after lexical triggers | Verified/reframed | Describe default readings and discourse effects rather than universal trigger rules. |
| Agreement | collective and mixed-gender agreement | Verified/reframed | Distinguish formal agreement from semantic agreement and construction. |
| Articles | definite/zero article and proper names | Verified/reframed | Use typical patterns with variety/context labels rather than categorical claims. |
| Existential haver | agreement and subject analysis | Verified/reframed | Describe existential *haver* as impersonal in the relevant construction. |
| African varieties | Angola/Mozambique generalizations | Verified/reframed | Separate educational/written standard orientation from spoken usage; do not infer specific grammar solely from language contact. |
| BR/PT comparison | “one rule per country” framing | Verified/reframed | Mark differences as normative, frequent, colloquial, regional, or register-specific. |

## Remaining release-gate review

The next pass should inspect every substantive page, not only pages listed above.

### Priority order

1. Phonetics and pronunciation — phoneme vs realization; PT-BR/PT-PT and regional variation.
2. Determiners and quantification — scope, genericity, specificity, agreement.
3. Valency and government — argument/complement terminology and competing grammatical traditions.
4. Semantics — aspect, modality, reference, scope.
5. Advanced syntax — raising/control, causatives, reduced clauses, relatives.
6. Discourse/pragmatics — distinguish grammatical meaning from pragmatic inference.
7. Lexical grammar — collocation frequency vs grammatical possibility.
8. Regional pages — verify every country/region-specific claim independently.

## Claim-writing standard

A claim should be written with the narrowest scope supported by evidence:

- **categorical** only when the construction is genuinely restricted;
- **typical/default** for the ordinary neutral pattern;
- **frequent/common** for usage-frequency claims;
- **formal/colloquial/literary/rare** for register;
- **PT-BR/PT-PT/AO/MZ/CV** only when the variety is actually evidenced;
- **possible/attested** when alternatives exist;
- **disputed/analysis-dependent** when grammatical terminology or analysis varies.

Avoid using “always”, “never”, “only”, “must”, or their Portuguese/Ukrainian equivalents as shortcuts for tendencies.

## Example audit

Examples are evidence-bearing data, not decoration. Each high-value example should be checked for:

1. grammaticality;
2. intended meaning;
3. agreement;
4. government;
5. clitic placement;
6. variety;
7. register;
8. Ukrainian translation;
9. whether it actually demonstrates the stated rule.

A future release should treat an unexplained example/register mismatch as a content defect.

## Release gate

The reference should not be called fully audited until:

- every high-risk page has been reviewed;
- categorical claims have either been sourced or scoped;
- BR/PT labels are consistent;
- regional claims have evidence;
- examples have been checked;
- catalog/page/related graphs are clean;
- local typecheck, lint, tests, and production build have been run successfully.

GitHub Actions are intentionally out of scope for this local-only project.

### Follow-up claim pass: September 2026

Additional high-risk refinements completed after the first pass:

- **Coordination/subordination and mood:** removed the shortcut that treated coordination as preserving the independent-clause mood and subordination as triggering conjuntivo. Mood selection is construction-, semantics- and context-sensitive.
- **se agreement:** scoped “3rd-person singular” to genuinely impersonal se; passive se remains subject-agreeing (`Vendem-se casas`).
- **Adjective government:** corrected an overly narrow `capaz de` rule. `capaz de` is the ordinary model for ability to perform an action, while `capaz para` is attested in the sense of suitability/capacity for something.
- **African varieties:** avoided calling Angolan Portuguese an “oral standard” and avoided presenting Mozambican spoken patterns as a single system. National variety, written-standard orientation and spoken variation are now separated.
- **Lexical examples:** `eventualmente` remains explicitly context-sensitive; the guide does not reduce it to an English false friend without acknowledging attested semantic extension.

These changes reinforce the project's central editorial rule: a useful learner reference must distinguish **grammatical possibility, standard preference, frequency, register and regional distribution** instead of collapsing them into binary right/wrong rules.

### Example-level pass: September 2026

A targeted example pass has now been extended into the older article, comparison, contraction, crase, valency, and infinitive modules. The pass corrected or scoped examples where the problem was not raw grammaticality but misleading presentation: regional distribution presented too categorically, government described as a spelling issue, Ukrainian translations carrying an artificial demonstrative meaning, and terminology artifacts in Ukrainian explanations.

Particular attention was paid to:

- proper-name and possessive article distribution in PT-PT vs PT-BR;
- `até às` / `até as` as a usage-sensitive construction rather than a universal error rule;
- `assistir a` vs direct-object usage in PT-BR/PT-PT;
- `a` + demonstratives and the distinction between `a este` and `àquele`;
- `de ele + infinitivo` versus the contracted `dele`;
- examples where a Ukrainian translation could accidentally imply that `o/a` means «цей/ця»;
- Ukrainian terminology for government (`керування`) across content modules.

This is a **continuing pass**, not a declaration that every example in the repository has been independently verified. The release gate remains unchanged.

## Automated structural gate

The repository includes `npm run audit:content` via `scripts/audit-grammar-content.mjs`. It checks duplicate page IDs/slugs, page↔catalog presence and metadata consistency, broken `related` references, and flags absolute-language claims for human review. Structural inconsistencies fail the command; absolute-language findings are warnings because some categorical statements are legitimate when they describe a scoped normative rule.

This audit is intentionally static and local. It does not replace linguistic verification against reference grammars, corpora, or specialist sources.



## Tooling and high-risk follow-up: September 2026

- The content audit script was hardened so page metadata is extracted from multiline page objects rather than assuming `id`, `slug`, and `category` occur on one line.
- Slug uniqueness is now checked by the real route key `category/slug`, not globally; the same slug such as `overview` is valid in different categories.
- The crase pass now distinguishes ordinary `a uma` from time expressions such as `à uma hora`, and scopes `até às` / `até as` to the relevant variety instead of presenting them as free variation.
- The infinitive pass now treats `ao + infinitivo` as a constructional temporal/subordinate pattern rather than mechanically as ordinary article contraction before a verb. It also avoids presenting `para chegar` as inherently wrong when the infinitive subject is recoverable from context.
- The mood pass removes an erroneous/garbled sentence around future subjunctive usage and avoids explaining African Portuguese spoken variation as simply a copy of conversational PT-BR.
- These changes remain part of the continuing claim/example review; they do not mean every example in the repository has been independently checked against a primary or reference grammar.


### Follow-up example pass: September 2026 — questions, numerals, word formation, regional syntax

The continuing pass also corrected several small but learner-relevant precision issues:

- **porque / por que / porquê:** the PT-PT description now distinguishes interrogative `porque` from prepositional `por que` in constructions such as `por que motivo`; PT-BR `por que` / `por quê` remains explicitly scoped as the Brazilian orthographic convention.
- **Time expressions:** the example `São três e dez` is now translated as 3:10 rather than carrying an incorrect minute/clock interpretation.
- **Word formation:** `movimento` is analysed from `mover`, not mechanically from `movimentar`; the text no longer suggests that new technical terms preferentially choose `-ção` without lexical evidence.
- **Regional address systems:** Brazilian `tu`/`você` and African address patterns are now described as regionally and socially variable rather than as country-wide binary rules.
- **Advanced syntax:** a relative-clause variation note was moved conceptually out of the definition of complex predicates and rewritten so that it does not imply that the relative construction is part of the predicate system.

These are deliberately small edits: the objective is to remove misleading learner shortcuts without replacing them with equally strong counter-claims.


### Follow-up pass: September 2026 — semantics, pragmatics, syntax and phonetics

The newer reference layers received a precision pass as well:

- **Semantics:** aspect is kept distinct from Ukrainian grammatical aspect; `pretérito perfeito` and `imperfeito` are not treated as automatic Ukrainian perfective/imperfective equivalents.
- **Pragmatics:** questions, imperatives and modal forms are described as capable of performing different speech acts depending on context, rather than being assigned one fixed communicative function.
- **Politeness:** `você` is not presented as a universal polite equivalent of Ukrainian `Ви`; address forms are explicitly region- and situation-sensitive.
- **Syntax:** information structure and inversion are separated from the basic SVO description; explicit subject pronouns are not described with evaluative claims such as “egocentric”.
- **Phonetics:** the overview now distinguishes lexical stress from orthographic accent and avoids presenting a single `r` realization as universal.

The purpose of this pass is consistency: the same evidence standard now applies not only to the older core grammar pages but also to the newer semantic, pragmatic, discourse, lexical and pronunciation material.
