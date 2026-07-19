---
name: Hydration Safety Rules
description: Rules for avoiding React hydration mismatches in this Next.js app
---

## Rule: Never use Math.random() in SSR components

Any component that renders on the server AND client must produce identical output.

**Known instances fixed:**
- `DayCard` — was using `Math.random()` for placeholder stats → replaced with `((dayNumber * 17 + 23) % 45) + 20`
- `generatePlaceholderDays()` in `dashboard-client.tsx` — was using `Math.random()` for topic counts → replaced with `((i * 7 + 3) % 4) + 2`

**Why:** Next.js App Router renders on the server first, then hydrates on the client. Any value that differs between the two causes a hydration error and React warnings.

**How to apply:** When you need a "random-looking" value per item, use a deterministic formula based on the item's index or ID.
