---
name: Next dev cache and Prisma path
description: Replit-specific constraints that keep this Next.js and Prisma setup stable
---

The Replit workflow must remove `apps/web/.next` before starting Next dev, and production builds must not run while the dev workflow is using the same `.next` directory.

**Why:** Concurrent or stale Next 14 webpack output can produce intermittent missing-chunk errors even when the source compiles successfully.

**How to apply:** Restart the workflow after dependency/config changes, run production builds only with the dev workflow stopped, and keep `DATABASE_URL=file:./dev.db` when Prisma commands run from `apps/web`; that resolves to `apps/web/prisma/dev.db`.