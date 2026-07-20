---
name: SubtopicProgress requires dayProgressId
description: SubtopicProgress.create requires dayProgressId (FK to DayProgress). Must upsert DayProgress first, then use the returned ID.
---

## Rule
`SubtopicProgress.create` requires `dayProgressId` — always upsert `DayProgress` first to get the ID.

**Why:** The schema has `SubtopicProgress.dayProgressId String` (non-optional). Creating without it throws a Prisma validation error.

**How to apply:** In `/api/progress/save/route.ts` and any other progress-saving code:
1. Upsert `DayProgress` → capture `dp.id`
2. Only then create/upsert `SubtopicProgress` with `dayProgressId: dp.id`
