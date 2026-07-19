---
name: Course Content Architecture
description: How lesson content, vocabulary, and questions are served — static files vs DB
---

## The Split
- **Vocabulary** → `data/vocabulary/day-{N}-vocabulary.ts` (200 words each). Loaded client-side by `VocabularySection` via `loadVocabularyForDay()`.
- **Practice Questions** → `data/questions/day-{N}-questions.ts`. Loaded by `PracticeSection` via `loadQuestionsForSubtopic()`.
- **Lesson Content** → `lesson-content.tsx` has inline generators (`generateDay2Content()` etc.) for days 2+. Day 1 uses `day-1-content.ts`.
- **DB** → tracks user XP, progress, scores, streaks only. The `DayVocabulary` / `PracticeQuestion` DB tables are sparse and NOT used for content delivery.

## Progress Saving
API route at `/api/progress/save` (POST) accepts `{ dayNumber, subtopicId, type, score, xpEarned, correct, total }`. Upserts SubtopicProgress, DayProgress, and creates a Score record. Called non-blocking from SubtopicLesson after practice or test completion.

**Why:** Keeping content in static TS files avoids DB seeding complexity for 75 days × 200 words. DB is only needed for user-specific state.

## Day 2 Content
`data/course-content/day-2-content.ts` has detailed lesson content for d2-t1-s1 and d2-t1-s2. Not yet wired into lesson-content.tsx (which uses its own inline generator). Future: refactor lesson-content.tsx to import from day-N-content.ts files.
