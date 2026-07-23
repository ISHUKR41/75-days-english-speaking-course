#!/usr/bin/env bash
# ============================================================
# setup.sh — First-run setup for 75 Days Hard English Course
# Run this once after cloning or importing the project.
# It installs dependencies, pushes the DB schema, and seeds
# the 75-day course content + dev user.
# ============================================================

set -e  # Exit immediately if any command fails

echo ""
echo "=================================================="
echo "  75 Days Hard English Course — Setup"
echo "=================================================="
echo ""

# ── Step 1: Install Node dependencies ─────────────────────────
echo "📦 Installing dependencies..."
cd apps/web
npm install
echo "✅ Dependencies installed"
echo ""

# ── Step 2: Push Prisma schema to SQLite database ─────────────
echo "🗄️  Setting up database schema..."
DATABASE_URL='file:./prisma/dev.db' npx prisma db push --accept-data-loss
echo "✅ Database schema ready"
echo ""

# ── Step 3: Seed the database with 75 days of course content ──
echo "🌱 Seeding 75-day course content..."
DATABASE_URL='file:./prisma/dev.db' npx tsx prisma/seed.ts
echo "✅ Database seeded (75 days, 470 subtopics, vocabulary, badges)"
echo ""

echo "=================================================="
echo "  Setup complete! Start the app with:"
echo "  cd apps/web && DATABASE_URL='file:./prisma/dev.db' npm run dev"
echo "=================================================="
echo ""
