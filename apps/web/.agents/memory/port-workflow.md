---
name: Port and Workflow Setup
description: How the dev server is configured for Replit
---

# Port and Workflow Setup

## The Rule
The app MUST run on port 5000. The Replit webview only proxies port 5000 by default.

**Why:** Next.js dev server defaults to port 3000. Replit's preview pane requires port 5000 to show the app.

**How to apply:**
- `apps/web/package.json` dev script: `next dev --port 5000`
- Workflow name: "Start application"
- Workflow command: `cd apps/web && DATABASE_URL='file:./prisma/dev.db' npm run dev`
- The `DATABASE_URL` must be set inline in the workflow command (not just in .env.local) for the seed scripts to work

## Database
- SQLite via Prisma at `apps/web/prisma/dev.db`
- `DATABASE_URL=file:./prisma/dev.db` (relative to `apps/web/` directory)
- Dev user clerkId: `dev_user_75days_english` (created in the DB, needed for dev mode)
