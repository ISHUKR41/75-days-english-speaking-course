// ============================================================
// Landing Page - 75 Days Hard English Course
// Shows landing page to ALL visitors (dev or not)
// Redirects ONLY when Clerk is properly configured + user is logged in
// ============================================================

// Check if Clerk is properly set up for authenticated navigation
import { IS_CLERK_CONFIGURED, safeAuth } from "@/lib/safe-auth";
import { redirect } from "next/navigation";
// Import all landing page section components
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingFeatures } from "@/components/landing/landing-features";
import { LandingCurriculum } from "@/components/landing/landing-curriculum";
import { LandingTestimonials } from "@/components/landing/landing-testimonials";
import { LandingCTA } from "@/components/landing/landing-cta";
import { LandingNavbar } from "@/components/landing/landing-navbar";
import { LandingFooter } from "@/components/landing/landing-footer";

// ─── Landing Page Server Component ──────────────────────────────
// This is shown to visitors who are NOT logged in
// Authenticated users (with real Clerk) go to dashboard
export default async function HomePage() {
  // Only redirect when Clerk is properly configured AND user is logged in
  // The landing page remains public whether auth is configured or not.
  if (IS_CLERK_CONFIGURED) {
    // Real Clerk auth is active — check if user is already signed in
    const { userId } = await safeAuth();
    // Redirect authenticated users directly to their dashboard
    if (userId) {
      redirect("/dashboard");
    }
  }
  // Show the full landing page for new visitors (or dev mode)
  return (
    // Full-page wrapper with dark background and hidden overflow
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Top navigation bar with logo, nav links, and CTA */}
      <LandingNavbar />

      {/* Hero section — main headline and value proposition */}
      <LandingHero />

      {/* Features section — 6 key features with icons */}
      <LandingFeatures />

      {/* Curriculum overview — 75 days breakdown */}
      <LandingCurriculum />

      {/* Social proof — testimonials from students */}
      <LandingTestimonials />

      {/* Bottom call-to-action — sign up prompt */}
      <LandingCTA />

      {/* Footer with links and copyright */}
      <LandingFooter />
    </main>
  );
}
