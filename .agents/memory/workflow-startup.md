---
name: Reliable workspace startup
description: Startup requirements for this monorepo's Replit workflow
---

The workflow must install dependencies from the repository root, then run Prisma commands from `apps/web` with the SQLite `DATABASE_URL` exported. Startup commands should fail loudly instead of redirecting errors to `/dev/null` or truncating them with `tail`.

**Why:** Installing from the nested web workspace can leave the shared npm dependency tree incomplete, and suppressed output makes a failed install look like a port problem.

**How to apply:** Keep the workflow's install, schema push, seed, and dev-server steps chained with `set -e`; use port 5000 for the web preview.