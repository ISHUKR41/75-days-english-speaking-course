---
name: Vocabulary-based question generator
description: Auto-generates 3 practice questions per vocabulary word, solving the 80-100 questions per subtopic requirement for all 75 days
---

# Question Generator

## Rule
`data/questions/question-generator.ts` generates practice questions from vocabulary data at runtime (client-side only).

**Why:** Manually writing 80-100 questions × 18 subtopics × 75 days = ~108,000 questions is infeasible. The generator creates 3 questions per vocabulary word:
1. **Translation**: "Hindi word" → English (fill-blank type)
2. **Fill blank**: Uses `example1` sentence with the word replaced by `_____`
3. **MCQ**: 4-option meaning question with randomized distractor answers

**How to apply:**
- `practice-section.tsx` calls `getVocabGeneratedQuestions()` which slices vocab by subtopic number (15 words/subtopic = 45 questions per subtopic)
- For Day 1: handwritten questions (d1-t4-*) + generated (always added)
- For Day 2: handwritten questions + generated
- For Days 3-75: 45 generated questions from Day 1 vocabulary as fallback
- The generator uses `Math.random()` — safe because `practice-section.tsx` is `"use client"`, so `useState` initializer only runs client-side (no SSR hydration issue)

## Vocabulary slice logic
```typescript
const subtopicNum = parseInt(subtopicId.split("-s").pop() || "1", 10);
const wordsPerSubtopic = 15;
const startIdx = ((subtopicNum - 1) * wordsPerSubtopic) % vocab.length;
```
This gives different vocab words for each subtopic without overlap (within a day).
