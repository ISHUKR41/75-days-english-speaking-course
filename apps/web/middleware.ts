// ============================================================
// Middleware - Clerk v5 authentication for route protection
// Protects all /dashboard, /day/*, /progress, /vocabulary etc.
// Public routes: /, /sign-in, /sign-up, /api/clerk/webhook
// ============================================================

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define which routes are public (no auth required)
// These routes can be accessed without signing in
const isPublicRoute = createRouteMatcher([
  "/",                          // Landing page - visible to everyone
  "/sign-in(.*)",               // Sign in pages (Clerk handles sub-routes)
  "/sign-up(.*)",               // Sign up pages (Clerk handles sub-routes)
  "/api/clerk/webhook(.*)",     // Clerk webhook endpoint (no auth needed)
  "/api/health(.*)",            // Health check endpoint (for monitoring)
]);

// Apply Clerk middleware - protects all non-public routes
// Uses Clerk v5 compatible syntax
export default clerkMiddleware((auth, request) => {
  // Only protect routes that are NOT in the public list
  if (!isPublicRoute(request)) {
    // auth.protect() redirects to /sign-in if user is not authenticated
    // This is the correct Clerk v5 middleware syntax
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (auth as any).protect();
  }
});

// Middleware config - match all routes except Next.js internals and static files
export const config = {
  matcher: [
    // Skip Next.js internals and all static files (images, fonts, etc.)
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes so they are also protected
    "/(api|trpc)(.*)",
  ],
};
