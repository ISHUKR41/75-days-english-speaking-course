#!/usr/bin/env bash
# ============================================================
# scripts/setup-db.sh — Database initialisation helper
# Pushes Prisma schema and seeds the 75-day course data.
# Safe to re-run: seed.ts clears old data before inserting.
# Usage:  cd apps/web && bash scripts/setup-db.sh
# ============================================================

set -e  # Abort on any error

# Resolve the directory this script lives in
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# Go to apps/web root (one level up from scripts/)
cd "$SCRIPT_DIR/.."

echo "🗄️  Pushing Prisma schema..."
DATABASE_URL='file:./dev.db' npx prisma db push --accept-data-loss
echo "✅ Schema up to date"

echo "🌱 Seeding course content..."
DATABASE_URL='file:./dev.db' npx tsx prisma/seed.ts
echo "✅ Seed complete"
