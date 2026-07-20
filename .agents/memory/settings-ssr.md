---
name: Settings page SSR fix
description: SettingsClient uses Zustand (localStorage) + next-themes — both are client-only, so SSR produces mismatching HTML. Must load with ssr: false.
---

## Rule
`SettingsClient` must be loaded via `dynamic(..., { ssr: false })` in the settings page.

**Why:** The component reads `soundEnabled` from Zustand (persisted to localStorage) and `theme` from `next-themes`. Both are undefined on the server but have real values on the client. Any conditional rendering based on these (icon choice, toggle state, theme selection) causes React hydration mismatches. `suppressHydrationWarning` on the container div does NOT suppress deeply nested SVG mismatches.

**How to apply:** In `app/(main)/settings/page.tsx`, use:
```ts
const SettingsClient = dynamic(
  () => import("@/components/settings/settings-client").then((m) => ({ default: m.SettingsClient })),
  { ssr: false }
);
```
