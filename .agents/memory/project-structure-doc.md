---
name: Project structure documentation
description: PROJECT_STRUCTURE.md at repo root contains the full file/folder tree, architecture rules, and current working status — read it first to save tokens.
---

# Project Structure Documentation

**File**: `PROJECT_STRUCTURE.md` at the repository root.

## What it contains
- Complete monorepo directory tree (apps/web, apps/mobile, packages/)
- All 112 TypeScript/TSX files listed with purpose descriptions
- Critical architecture rules (auth passthrough, static config vs DB, question loading, answer modes)
- Database schema summary (all Prisma models and their key fields)
- Course structure for Days 1-75 with content status
- Environment variable reference
- UI/design system overview
- Working pages list (verified 2026-07-24)
- Known gaps and TODO items

## Why to use it
Every time a new AI session needs to understand the project, reading PROJECT_STRUCTURE.md first saves reading 10-20+ individual files.

**Why:** The project has 112 TS/TSX files. Without this index, each session spends most of its token budget just exploring the file tree.

**How to apply:** At the start of any task on this project, read PROJECT_STRUCTURE.md before any other file exploration. Update it when new files are added or architecture changes.
