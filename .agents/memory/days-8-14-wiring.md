---
name: Days 8-14 wiring
description: How vocab, questions, and lesson content for Days 8-14 are connected to the UI components
---

# Days 8-14 Wiring

## Three layers required for each day range

1. **Vocabulary** — `practice-section.tsx` has a conditional chain that maps `dayNumber` to the correct vocab file. Days 8-14 are now wired to `ALL_DAY_8_VOCABULARY` … `ALL_DAY_14_VOCABULARY`. Days 15+ fall through to `getVocabularyForDay(dayNumber, 60)`.

2. **Practice questions** — `loadQuestionsForSubtopic()` in `practice-section.tsx` handles the range `dayNumber >= 8 && dayNumber <= 14` by calling `getDays8to14Questions(dayNumber, subtopicId)` (from `data/questions/days-8-14-questions.ts`), then supplements with vocab-generated questions for variety.

3. **Lesson content** — `getSubtopicSpecificContent()` in `topic-content-map.ts` first checks the `SUBTOPIC_CONTENT_MAP` (Days 3-9), then falls back to `DAYS_8_TO_14_CONTENT` imported from `data/course-content/days-8-14-content.ts`. Days 10-14 are also added to `SPECIFIC_DAY_CONTENT` using their first subtopic content objects.

**Why:** The content existed in data files but was never imported or referenced by the UI components, so Days 8-14 lessons showed generic auto-generated content instead of the rich handcrafted material.

**How to apply:** Any new day range (e.g. Days 15-21) needs the same three edits: vocab chain in practice-section, question branch in loadQuestionsForSubtopic, and content lookup in getSubtopicSpecificContent.
