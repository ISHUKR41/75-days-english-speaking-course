---
name: Score model fields
description: The Score DB model uses activity/points/xp/coins/dayId/subtopicId — NOT scoreType/score/maxScore/percentage/correct/total/xpEarned/dayNumber.
---

## Rule
When creating a `Score` record, use these fields only:
- `userId` (required)
- `activity` — string label like "PRACTICE" or "TEST"
- `points` — number of correct answers
- `xp` — XP earned
- `coins` — coins earned (e.g., `Math.floor(xpEarned / 10)`)
- `dayId` — optional FK to Day
- `subtopicId` — optional FK to Subtopic

**Why:** Earlier code attempted to use `scoreType`, `score`, `maxScore`, `percentage`, `correct`, `total`, `xpEarned`, `dayNumber` — none of which exist in the Score model. The schema uses `activity`/`points`/`xp` pattern.

**How to apply:** Always check `prisma/schema.prisma` Score model before writing `db.score.create()`.
