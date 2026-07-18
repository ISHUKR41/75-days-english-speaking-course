// ============================================================
// Middleware - Clerk v5 authentication for route protection
// Protects all /dashboard, /day/*, /progress, /vocabulary etc.
// Public routes: /, /sign-in, /sign-up, /api/clerk/webhook
// ============================================================

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define which routes are public (no auth required)
const isPublicRoute = createRouteMatcher([
  "/",                          // Landing page
  "/sign-in(.*)",               // Sign in pages (Clerk handles sub-routes)
  "/sign-up(.*)",               // Sign up pages
  "/api/clerk/webhook(.*)",     // Clerk webhook endpoint
  "/api/health(.*)",            // Health check endpoint
]);

// Apply Clerk middleware using Clerk v5 syntax (no auth().protect() - deprecated)
export default clerkMiddleware(async (auth, request) => {
  // Only protect non-public routes
  if (!isPublicRoute(request)) {
    // Clerk v5 way: await auth.protect() - redirects to sign-in if not authenticated
    await auth.protect();
  }
});

// Middleware config - match all routes except Next.js internals and static files
export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
