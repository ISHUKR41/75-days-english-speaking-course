// ============================================================
// Database Client - Prisma singleton for 75 Days English
// Creates a single PrismaClient instance to avoid connection
// pool exhaustion in development (hot reloads create new instances)
// ============================================================

import { PrismaClient } from "@prisma/client";

// ─── Global Declaration ──────────────────────────────────────
// We need to declare the global prisma variable for TypeScript
declare global {
  // Allow global `prisma` variable in development
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// ─── Prisma Client Instance ──────────────────────────────────
// In production: always create a fresh instance
// In development: reuse the existing instance across hot reloads
export const db =
  globalThis.prisma ??
  new PrismaClient({
    // Log level based on environment
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
    
    // Error format
    errorFormat: "pretty",
  });

// In development mode, save the client to global scope
// This prevents creating a new client on every hot reload
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

// ─── Database Health Check ────────────────────────────────────
// Call this to verify database connectivity on startup
export async function checkDatabaseConnection(): Promise<boolean> {
  try {
    // Simple query to test connection
    await db.$queryRaw`SELECT 1`;
    return true;
  } catch (error) {
    console.error("Database connection failed:", error);
    return false;
  }
}

export default db;
