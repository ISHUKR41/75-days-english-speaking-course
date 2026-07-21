---
name: Progress save route
description: How api/progress/save/route.ts stores subtopic progress; why it must use static IDs not DB cuid lookups
---

# Progress Save Route — Static Subtopic IDs

## The Rule
`app/api/progress/save/route.ts` stores the `subtopicId` from the request body **directly** into `SubtopicProgress.subtopicId`. It must NOT look up the DB subtopic record and use its cuid.

**Why:** The day page client (`components/learning/day-page-client.tsx`) fetches completed subtopics and compares them against **static config IDs** (e.g., `"d1-t1-s1"`). If progress is saved with DB cuids, the day page never finds them and subtopics never show as completed.

**How to apply:**
- Request body carries `subtopicId: string` (e.g., `"d1-t1-s1"`) from `SubtopicLesson` component which passes `subtopic.id` (from static config)
- Store this directly: `SubtopicProgress.upsert({ where: { userId_subtopicId: { userId, subtopicId } }, ... })`
- The DB subtopic lookup (`db.subtopic.findFirst(...)`) is still done for the Score table foreign key only — wrap it in `.catch(() => null)` and make it non-blocking
- The unique constraint `userId_subtopicId` on `SubtopicProgress` works fine with static IDs

## The Bug (for reference)
Original code did `db.subtopic.findFirst({ where: { topic: { day: { dayNumber } } } })` and used that record's cuid as the subtopicId, grabbing the *first* DB subtopic of the day regardless of which subtopic the user completed.
