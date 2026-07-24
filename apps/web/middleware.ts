// ============================================================
// Middleware - Smart Clerk v5 authentication
// Conditionally applies Clerk auth based on whether the
// secret key is properly configured.
// When key is missing/placeholder → dev mode (all routes open)
// When key is valid → protects all non-public routes
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

// ─── Development passthrough middleware ───────────────────────
// Used when Clerk is not configured — allows all routes without auth
// This lets developers preview the app before adding the Clerk key
function devMiddleware(_request: NextRequest): NextResponse {
  // Allow ALL requests through — no auth required in dev mode
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
// Use Clerk when configured; the protected layout handles missing sessions.
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
