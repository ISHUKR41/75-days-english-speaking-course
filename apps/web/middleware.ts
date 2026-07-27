// ============================================================
// Middleware - Smart Clerk v5 authentication
// Applies Clerk auth when configured; the protected layout and APIs reject
// access when configuration is absent instead of using a fake user.
// ============================================================

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// ─── Public routes (no auth required) ────────────────────────
// These routes are accessible without signing in
const isPublicRoute = createRouteMatcher([
  "/",                          // Landing page
  "/sign-in(.*)",               // Clerk sign-in (handles sub-routes)
  "/sign-up(.*)",               // Clerk sign-up (handles sub-routes)
  "/api/clerk/webhook(.*)",     // Clerk webhook (no auth needed)
  "/api/health(.*)",            // Health check endpoint
]);

// ─── Check if Clerk is properly configured ───────────────────
// Returns true only when a real (non-placeholder) secret key exists
const CLERK_SECRET = process.env.CLERK_SECRET_KEY ?? "";
const IS_CLERK_CONFIGURED =
  (CLERK_SECRET.startsWith("sk_test_") || CLERK_SECRET.startsWith("sk_live_")) &&
  CLERK_SECRET.length > 10 &&        // Valid Clerk secret key length check
  !CLERK_SECRET.includes("placeholder") && // Not our placeholder
  !CLERK_SECRET.includes("xxxxxxxxxxx");   // Not our placeholder

// ─── Configuration fallback middleware ────────────────────────
// Let requests reach the app when the secret is absent so the server layout
// can render the normal sign-in redirect. Public routes remain available.
function devMiddleware(_request: NextRequest): NextResponse {
  // Route-level auth is enforced by safeAuth() and protected layouts/APIs.
  return NextResponse.next();
}

// ─── Clerk middleware ─────────────────────────────────────────
// Protects all non-public routes when Clerk is properly configured
const clerkAuth = clerkMiddleware((auth, request) => {
  // If this is NOT a public route, require authentication
  if (!isPublicRoute(request)) {
    // auth.protect() redirects to /sign-in if not authenticated
    // Using type cast because the TypeScript types differ by Clerk version
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (auth as any).protect();
  }
});

// ─── Export the correct middleware ───────────────────────────
// Use Clerk when configured; protected layouts handle missing configuration.
export default IS_CLERK_CONFIGURED ? clerkAuth : devMiddleware;

// ─── Middleware config ────────────────────────────────────────
// Defines which routes the middleware runs on
export const config = {
  matcher: [
    // Skip Next.js internals and all static files (images, fonts, etc.)
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run middleware on API routes
    "/(api|trpc)(.*)",
  ],
};
