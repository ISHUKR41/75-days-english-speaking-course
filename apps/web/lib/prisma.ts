// ============================================================
// Prisma re-export — keeps existing imports working
// All code should prefer importing { db } from "@/lib/db"
// ============================================================

export { db as prisma, db, checkDatabaseConnection } from "@/lib/db";
