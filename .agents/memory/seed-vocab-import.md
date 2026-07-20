---
name: Seed vocabulary import pattern
description: How the seed.ts imports vocabulary from static files and the dev user seeding defaults
---

## Rule
The seed imports `ALL_DAY_1_VOCABULARY` from `../data/vocabulary/day-1-vocabulary` and maps it to DB format.

**Why:** The static TS vocabulary files have 200 words each; the old hardcoded seed array only had ~41. Always import from the static file to avoid maintaining two lists.

**How to apply:**
- `difficulty` field: `(v.difficulty as string).toUpperCase()` — static file uses lowercase `"beginner"`, DB requires `"BEGINNER"`
- `synonyms`/`antonyms`: `JSON.stringify(v.synonyms ?? [])` — static file has arrays, DB stores as JSON string
- For Day 2+ vocabulary: add import of `ALL_DAY_2_VOCABULARY` etc. and seed similarly when `dayMeta.n === 2`

## Dev user defaults (seeded in createDevUser())
- `currentDay: 10` — lets the dev user access Days 1–11 without having to complete lessons
- `totalXp: 350`, `level: 2`, `streak: 3`
- The `update` block in the upsert also sets these so re-running seed refreshes them
