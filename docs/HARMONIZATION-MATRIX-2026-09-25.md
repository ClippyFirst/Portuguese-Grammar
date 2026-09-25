# Harmonization matrix — Portuguese-Grammar

Branch: `harmonize/reference-standard-2026`

## Зберегти як основу

- великий canonical catalog;
- typed content model;
- PT-BR / PT-PT / Lusophone variety model;
- register metadata;
- pragmatic/discourse/semantic coverage;
- search-oriented aliases;
- static content QA.

## Підтягнути з French-Grammar

- чітке розділення lookup / learning / navigation;
- formal semantics of prerequisites / related / contrast / next;
- stronger article methodology;
- Ukrainian contrastive QA as explicit editorial gate;
- simple static-first architecture;
- explicit release statuses.

## Перебудувати

- `GrammarPage.related` → typed graph relations;
- `depth` → learning depth, independent from content status;
- catalog presence → separate from article readiness;
- generic fallback → explicit `generated/stub`, excluded from release-ready;
- sources/review state → first-class;
- search → include article body and terminology;
- category model → normalized taxonomy.

## Технічний борг

- виправити duplicate/invalid package scripts;
- провести dependency audit;
- прибрати runtime/database/auth scaffolding, якщо він не має реального consumer;
- окремо переглянути repository tooling/artifacts that are not part of the grammar product.

## Не переносити

- French-specific categories verbatim;
- overly small category granularity when it damages navigation;
- French article wording as Portuguese content.
