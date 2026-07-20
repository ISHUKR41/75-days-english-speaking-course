---
name: Day Page Architecture
description: How day/topic/subtopic pages use static config IDs vs DB IDs, and why.
---

## The Rule

`/day/[dayNumber]/page.tsx` **must** use `COURSE_DAYS_DATA` (static config) for topic/subtopic structure — NOT DB records. The DB is used only for user progress (DayProgress, SubtopicProgress).

**Why:** The subtopic page (`/day/[n]/topic/[topicId]/subtopic/[subtopicId]/page.tsx`) looks up topics and subtopics exclusively from `COURSE_DAYS_DATA` using static string IDs like `"d1-t1"`, `"d1-t1-s1"`. DB-seeded topics/subtopics get cuid() IDs that never match these static IDs. Any link generated from DB IDs will 404 on the subtopic page.

**How to apply:** When building/fixing the day page:
1. Get structure (title, topics, subtopics) from `COURSE_DAYS_DATA.find(d => d.dayNumber === dayNum)`
2. Use static IDs for all link generation: `/day/${n}/topic/${topic.id}/subtopic/${sub.id}`
3. Query DB only for: `DayProgress` (status, scores) and `SubtopicProgress` (completedSubtopicIds)
4. SubtopicProgress stores static config IDs (not DB cuid IDs) so progress lookup works

## Prisma Model Names

- DB client is exported as `db` from `@/lib/db` (NOT `prisma`)
- `@/lib/prisma` re-exports `db` as `prisma` for backward compatibility
- Model accessors: `db.user` (not `db.users`), `db.day`, `db.dayProgress`, `db.subtopicProgress`
- `Score` model has fields: `points`, `xp`, `coins` — NOT `score`/`maxScore`
- `DayProgress` status field values: `"NOT_STARTED"`, `"IN_PROGRESS"`, `"COMPLETED"` (not `completed: boolean`)

## Vocabulary Routes

- `/vocabulary` — full vocabulary bank (DB-backed via `DayVocabulary`)
- `/day/[n]/vocabulary` — redirects to `/vocabulary?day=n`
- Dashboard quick action "Today's Vocabulary" should link to `/vocabulary?day=${currentDay}`
