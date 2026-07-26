---
name: TS MCQ arg order fix
description: Correct argument order for d3q() MCQ calls — wrong order causes TS2345
---

# d3q() MCQ Argument Order

## Correct order for MCQ calls

```ts
d3q(id, subtopicId, questionText, "mcq", correctAnswer, explanation, hindiExplanation, points, { a, b, c, d })
```

- param 6: `explanation` (string) — English explanation
- param 7: `hindiExplanation` (string) — triggers `hasHindi = true`
- param 8: `points` (number) — e.g. 5, 6, 7, 8
- param 9: `{ a, b, c, d }` — MCQ options object

## Wrong pattern that caused TS2345

```ts
// WRONG — options object in position 7 (expected string | number)
d3q(id, sub, q, "mcq", answer, 5, { a, b, c, d }, explanation, hindi)
```

This puts `{options}` where the type signature expects `string | number`, causing TS2345.

**Why:** The d3q function uses `typeof param7 === "string"` to detect whether hindi explanation is present. Passing an object there breaks both the type check and the runtime logic.

**How to apply:** Any time you write a new MCQ d3q call, always put the two string explanations first (English, then Hindi), then the number points, then the options object last.
