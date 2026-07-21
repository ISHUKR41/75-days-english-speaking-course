---
name: Vocabulary API filters
description: How the vocabulary API handles filtering and what params it accepts; profile stats nullish coalescing fix.
---

## Vocabulary API (/api/vocabulary)

The "all vocabulary" endpoint (no dayId/dayNumber/subtopicId) now supports:
- `difficulty` — maps directly to `DayVocabulary.difficulty` field (values: BEGINNER, INTERMEDIATE, ADVANCED)
- `partOfSpeech` — maps directly to `DayVocabulary.partOfSpeech` field (noun, verb, adjective, etc.)
- `search` — searches word, meaning, hindiMeaning via OR
- `limit` OR `pageSize` — both accepted (client used to send pageSize, API read limit)

**Why:** The vocabulary client sends these params but the original API only handled them for dayId-filtered requests, not for the "all" endpoint. Fixed by building a compound `allWhere` object.

**How to apply:** Any new filter added to the vocabulary client must also be added to the `allWhere` object in the "all vocabulary" branch of the API route.

## Profile stats — use `??` not `||` for numeric fields

```ts
// WRONG — 0 is falsy, shows fake fallback value:
xp: user?.totalXp || 350  // shows 350 when user has 0 XP

// CORRECT — only falls back when null/undefined:
xp: user?.totalXp ?? 0
```

**Why:** A new user with 0 XP and 0 streak days was displaying as "350 XP" and "3-day streak" due to `||` treating 0 as falsy. All numeric stats in profile-client.tsx now use `??`.
