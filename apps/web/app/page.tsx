// ============================================================
// Landing Page - 75 Days Hard English Course
// Shows landing page to ALL visitors (dev or not)
// Redirects ONLY when Clerk is properly configured + user is logged in
// ============================================================

import type { Metadata } from "next";
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

// ─── SEO metadata ────────────────────────────────────────────────
// Optimised for: "75 days hard English course", "learn English in 75 days",
// "English speaking course", "fluent English online"
export const metadata: Metadata = {
  title: "75 Days Hard English Course — Learn English in 75 Days | Fluent English Online",
  description:
    "Transform your English in just 75 days. Structured daily lessons covering grammar, vocabulary (15,000+ words), speaking practice, and mock tests. Used by 50,000+ learners. Start free today.",
  keywords: [
    "75 days hard English course",
    "learn English in 75 days",
    "English speaking course",
    "fluent English online",
    "English grammar course",
    "English vocabulary course",
    "spoken English course",
    "English learning app",
    "75 days English challenge",
    "daily English practice",
    "English for beginners",
    "professional English course",
    "learn English fast",
    "English fluency program",
  ],
  authors: [{ name: "75 Days Hard English" }],
  openGraph: {
    title: "75 Days Hard English Course — Become Fluent in 75 Days",
    description:
      "Structured English course: grammar, 15,000+ vocabulary words, speaking labs, mock tests — all in 75 daily lessons. Join 50,000+ learners.",
    type: "website",
    locale: "en_IN",
    siteName: "75 Days Hard English Course",
  },
  twitter: {
    card: "summary_large_image",
    title: "75 Days Hard English Course",
    description:
      "Learn English fluently in 75 days with structured grammar, vocabulary, speaking & mock tests. Join 50,000+ learners!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

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
