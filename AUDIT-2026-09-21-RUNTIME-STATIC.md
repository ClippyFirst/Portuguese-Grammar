# Runtime + static-architecture audit — 21.09.2026

**Repository:** `ClippyFirst/Portuguese-Grammar`  
**Branch:** `chore/local-development`  
**Purpose:** canonical work plan for the current stabilization phase.  
**Status:** ACTIVE — do not treat individual runtime errors as isolated page bugs.

---

## 1. Executive finding

The repository passes the current structural content audit and a clean production build, but the freshly built local preview still fails at runtime:

`Invalid grammar page data in content loader: pronouns/personal has examples=string; expected an array.`

This is **not a stale-preview problem**. The old process on port 8081 was terminated, a fresh preview was started from the newly generated `.vercel/output`, and the same error remained.

The immediate problem is therefore a **content-model / page-helper contract mismatch**.

The broader architectural finding is equally important:

> The production target for this grammar reference is a **static GitHub Pages site**. The current TanStack Start + Nitro/Vercel preview stack must not become a reason to introduce server-side workarounds into the content layer.

The next work should therefore fix the content contract and static build architecture systematically, rather than patching individual article routes.

---

## 2. Reproduced runtime failure

Fresh build sequence:

```text
Remove-Item .vercel
Remove-Item dist
Remove-Item node_modules/.vite
npm run build
npx vite preview --host 127.0.0.1 --port 8081
```

Build result:

- `npm run audit:content` → **38 modules, 260 pages, 260 catalog entries, 260 unique category/slug paths**
- Vite client build → successful
- Vite SSR build → successful
- Nitro production build → successful
- `.vercel/output` generated successfully
- database migration skipped because `DATABASE_URL` is absent; this is expected for the local PGLite fallback

The first preview attempt failed only because port 8081 was occupied by an old process. After that process disappeared, a fresh preview started successfully:

```text
Local: http://127.0.0.1:8081/
Build Directory: .vercel/output
```

The fresh preview still produced:

```text
Invalid grammar page data in content loader:
pronouns/personal has examples=string; expected an array.
```

Therefore the error is confirmed against the current build artifact.

---

## 3. Exact root cause found in `pronouns.ts`

Current compact helper:

```ts
const p = (
  id: string,
  slug: string,
  t: string,
  pt: string,
  en: string,
  s: string,
  i: string,
  e: GrammarPage["examples"],
  r: string[] = [],
): GrammarPage => ({
  id,
  slug,
  category: "pronouns",
  titleUk: t,
  titlePt: pt,
  titleEn: en,
  summary: s,
  aliases: [t, slug],
  related: r,
  intro: i,
  examples: e,
});
```

But the affected calls have the shape:

```text
id
slug
titleUk
titlePt
titleEn
summary
intro
another explanatory string
examples[]
related[]
```

The helper expects:

```text
id
slug
titleUk
titlePt
titleEn
summary
intro
examples[]
related[]
```

Thus the positional arguments are shifted.

For `personal`, for example, the second explanatory string is received as `e`, so:

```text
examples = string
```

The actual examples array becomes the value intended for `r`, and the final related array is ignored because the helper has no parameter for it.

This explains why the UI eventually crashed on `.map()`, and why the runtime shape validator correctly converted the opaque error into a precise diagnostic.

### Important correction to workflow

Do **not** fix only `pronouns/personal`.

The same compact-helper pattern may exist across other content modules. We must audit all `p(...)` declarations before changing the helper contract.

---

## 4. Why the existing `audit:content` did not catch this

The current audit verifies:

- catalog ↔ page existence;
- canonical `category/slug` paths;
- related IDs;
- presence of examples in compact pages;
- structural page metadata.

It does **not yet validate the runtime type of every positional argument passed through compact helpers**.

This is a gap in the audit.

The lesson is:

> Static source parsing must validate the content contract, not merely the existence of page declarations.

The audit should eventually reject a page before build when `examples`, `related`, `tables`, etc. are shifted or otherwise malformed.

---

## 5. Required content-model contract

The canonical `GrammarPage` model currently contains collection fields that must remain arrays:

```text
aliases      → string[]
related      → string[]
formulas     → Formula[]
uses         → UseCase[]
examples     → Example[]
markers      → string[]
mistakes     → Mistake[]
tables       → TableData[]
```

Nested structures also need validation:

```text
examples[]
├── pt → string
├── uk → string
├── variety? → string
└── register? → string

formulas[]
├── pattern → string
└── explanation? → string

mistakes[]
├── wrong → string
├── correct → string
└── why → string

tables[]
├── headers → string[]
└── rows → string[][]
```

The exact nested schema must be checked against `src/content/types.ts` before implementation. Do not invent fields merely to satisfy the validator.

---

## 6. Required audit phase before more content work

### Phase A — inventory all page declaration mechanisms

Identify every page-construction pattern under `src/content/pages/`:

1. explicit `GrammarPage` objects;
2. `p(...)` helpers;
3. `page({...})` helpers;
4. any other local constructors or transformations.

Record which modules use each mechanism.

### Phase B — audit every compact helper call

For every `p(...)` call:

- count/identify positional arguments;
- compare them with the helper signature;
- determine whether the argument represents `intro`, `examples`, `related`, or another field;
- detect ignored trailing arguments;
- detect strings passed where arrays are expected;
- detect arrays passed into the wrong positional slot.

**Do not change the helper signature until this inventory is complete.**

### Phase C — audit all runtime collection fields

Run a source/build-time validation over all 260 pages.

The validation must fail with actionable output such as:

```text
pronouns/personal
  field: examples
  expected: Example[]
  actual: string
  source: src/content/pages/pronouns.ts
  constructor: p(...)
```

### Phase D — only then repair the model

Choose the smallest coherent model repair.

Preference order:

1. make the page constructor explicit and type-safe;
2. eliminate fragile positional arguments where practical;
3. preserve existing content rather than silently discarding fields;
4. update all affected modules consistently;
5. add regression tests/audit rules.

---

## 7. Static-site architecture requirement

The final production architecture is:

```text
Grammar content
      ↓
static build
      ↓
HTML + CSS + minimal JS/assets
      ↓
GitHub Pages
```

The project should **not require**:

- a Node server in production;
- Nitro runtime;
- Vercel Functions;
- a database;
- PGLite;
- server-side page loading;
- runtime content transformation for ordinary article pages.

The current `src/content/load.ts` runtime loader may remain useful during the transition if it supports the chosen framework, but the final deployment must emit self-contained static article routes.

### Static-site acceptance criteria

The final build must support:

- direct navigation to every article URL;
- browser refresh on an article URL;
- all 260 currently catalogued routes resolving to actual pages;
- no server-side dependency for article rendering;
- GitHub Pages-compatible asset paths;
- stable internal links;
- generated sitemap;
- SEO metadata;
- accessible 404 page;
- static search/index strategy appropriate for the final site.

---

## 8. Important architectural decision

Do **not** spend the next phase making the current Nitro preview behave like a production server.

Use the current preview only as a diagnostic tool while the content model is repaired.

The production question is:

> Can the same source content be deterministically transformed into a complete static GitHub Pages artifact?

That is the acceptance criterion.

---

## 9. Current known-good safeguards

Keep the runtime validation in `src/content/load.ts`.

It is useful because it:

- catches malformed content before React renders it;
- reports the exact category/slug;
- reports the exact malformed field;
- prevents opaque `.map is not a function` errors;
- verifies that modules export `pages[]`.

However, runtime validation is **defense in depth**, not the primary fix. The primary fix belongs in source/content validation and the page-construction contract.

---

## 10. What must NOT be done

### Do not

- patch only `pronouns/personal`;
- replace malformed arrays with `[]`;
- coerce strings into arrays automatically;
- suppress the runtime validator;
- add server/database dependencies to solve static-content problems;
- create duplicate catalog entries just to satisfy an audit;
- restore old false-positive findings from the historical audit;
- generate filler articles merely to make the route count pass;
- change the linguistic content while fixing a structural argument-shift bug unless necessary.

### Do

- preserve existing authored content;
- find all affected constructor calls;
- validate the complete content model;
- make the constructor contract explicit;
- test the entire 260-page set;
- then migrate/verify static deployment.

---

## 11. Current work queue

### P0 — Content contract

- [ ] Inventory every page constructor/helper.
- [ ] Audit every `p(...)` call.
- [ ] Find all argument-shifted pages.
- [ ] Preserve all currently supplied explanatory text.
- [ ] Repair the constructor/model coherently.
- [ ] Add automated regression checks.

### P0 — Runtime/build correctness

- [ ] Run `npm run audit:content`.
- [ ] Run typecheck.
- [ ] Run tests.
- [ ] Run clean production build.
- [ ] Preview the fresh artifact.
- [ ] Verify representative routes across every category.
- [ ] Verify that no `.map is not a function` / content-shape error remains.

### P1 — Static GitHub Pages

- [ ] Identify current framework/static-output constraints.
- [ ] Remove or isolate unnecessary SSR/runtime dependencies.
- [ ] Produce static routes for all catalogued pages.
- [ ] Configure GitHub Pages base path/assets correctly.
- [ ] Add static 404.
- [ ] Add sitemap/robots/SEO metadata.
- [ ] Verify deep links and refreshes.
- [ ] Add GitHub Actions build/deploy validation.

### P1 — Search

- [ ] Decide on static search implementation.
- [ ] Ensure article text, not merely catalog metadata, is searchable.
- [ ] Keep search compatible with GitHub Pages.

### P2 — Content quality

Only after structural/runtime stability:

- linguistic audit;
- PT-BR/PT-PT accuracy audit;
- Ukrainian explanatory quality;
- examples and minimal pairs;
- terminology consistency;
- regional/register metadata;
- coverage gaps.

---

## 12. Working principle for the next sessions

**First make the content system trustworthy. Then make the static site deployable. Then deepen the grammar. Then polish the UI.**

The current runtime error is therefore recorded as a **systemic content-contract finding**, not as a one-page bug.

**Next concrete task:** complete Phase A–B — inventory and audit all compact page constructors/calls across the repository before modifying their signatures.
