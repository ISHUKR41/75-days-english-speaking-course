// ============================================================
// Landing Page - 75 Days Hard English Course
// Hero section + features + CTA
// ============================================================

import { redirect } from "next/navigation";
import { safeAuth } from "@/lib/safe-auth";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingFeatures } from "@/components/landing/landing-features";
import { LandingCurriculum } from "@/components/landing/landing-curriculum";
import { LandingTestimonials } from "@/components/landing/landing-testimonials";
import { LandingCTA } from "@/components/landing/landing-cta";
import { LandingNavbar } from "@/components/landing/landing-navbar";
import { LandingFooter } from "@/components/landing/landing-footer";

// This page is shown to users who are NOT logged in
// Logged-in users are redirected to the dashboard
export default async function HomePage() {
  // Check if user is already authenticated (safe wrapper handles invalid Clerk keys)
  const { userId } = await safeAuth();

  // Redirect authenticated users to dashboard
  if (userId) {
    redirect("/dashboard");
  }

  // Show the beautiful landing page for new visitors
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Navigation header */}
      <LandingNavbar />

      {/* Hero section - main value proposition */}
      <LandingHero />

      {/* Features section - what they will learn */}
      <LandingFeatures />

      {/* Curriculum overview - 75 days breakdown */}
      <LandingCurriculum />

      {/* Social proof - testimonials */}
      <LandingTestimonials />

      {/* Call to action - sign up */}
      <LandingCTA />

      {/* Footer */}
      <LandingFooter />
    </main>
  );
}
