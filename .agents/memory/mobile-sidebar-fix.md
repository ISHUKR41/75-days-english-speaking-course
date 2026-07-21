---
name: Mobile sidebar fix
description: How the mobile sidebar was fixed so it doesn't block content on first load.
---

## Problem

`SidebarProvider` has `defaultOpen={true}` so the sidebar is open on all screen sizes including mobile on first load. On mobile the sidebar is `position: fixed` and overlays the entire content area, making the app unusable until manually closed.

## Solution

Created `apps/web/components/layout/sidebar-mobile-closer.tsx` — a tiny client component that calls `setOpen(false)` on mount if `window.innerWidth < 1024` (the lg Tailwind breakpoint). Placed inside `SidebarProvider` in `app/(main)/layout.tsx`.

```tsx
// sidebar-mobile-closer.tsx
"use client";
import { useEffect } from "react";
import { useSidebar } from "@/components/ui/sidebar";

export function SidebarMobileCloser() {
  const { setOpen } = useSidebar();
  useEffect(() => {
    if (window.innerWidth < 1024) setOpen(false);
  }, []);
  return null;
}
```

**Why:** Cannot set `defaultOpen` conditionally in the server layout since `window` is not available. The client component fires immediately on first render, so mobile users see content without the sidebar blocking it. Desktop (≥1024px) is unaffected.

**How to apply:** If the `SidebarProvider` is ever moved or replicated, ensure `SidebarMobileCloser` is placed as a direct child inside it so it can access the sidebar context.
