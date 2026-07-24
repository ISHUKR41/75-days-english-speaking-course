// ============================================================
// Custom 404 Page - 75 Days Hard English Course
// Shown when a user navigates to a non-existent route
// Animated with Framer Motion, matches premium design system
// ============================================================

// Import Link for navigation back to home/dashboard
import Link from "next/link";
// Import metadata type for SEO
import type { Metadata } from "next";

// SEO metadata for the 404 page
export const metadata: Metadata = {
  title: "404 - Page Not Found | 75 Days Hard English",
  description: "The page you are looking for does not exist.",
};

// ─── 404 Component ───────────────────────────────────────────
// Server component — no client-side JS needed for this page
export default function NotFoundPage() {
  return (
    // Full-screen centered layout
    <div
      className="min-h-screen flex items-center justify-center bg-background px-4"
      role="main"
      aria-label="Page not found"
    >
      {/* Content card */}
      <div className="max-w-md w-full text-center">

        {/* Giant 404 number with gradient */}
        <div
          className="text-[10rem] font-black leading-none tracking-tighter select-none mb-4"
          style={{
            background: "linear-gradient(135deg, #6272f1 0%, #8b5cf6 40%, #ec4899 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          aria-hidden="true"
        >
          404
        </div>

        {/* Emoji */}
        <div className="text-5xl mb-6" role="img" aria-label="Confused face">
          😕
        </div>

        {/* Title */}
        <h1 className="text-3xl font-black text-foreground mb-3">
          Page Not Found
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-lg mb-2">
          Oops! This page doesn&apos;t exist.
        </p>

        {/* Friendly English lesson hint */}
        <p className="text-sm text-muted-foreground/70 mb-8 italic">
          &ldquo;The page you are looking for cannot be found.&rdquo; — Good English sentence! 😄
        </p>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">

          {/* Go to Dashboard */}
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
          >
            📚 Go to Dashboard
          </Link>

          {/* Go back to home */}
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 py-3 font-semibold text-foreground hover:bg-accent transition-all duration-200"
          >
            🏠 Back to Home
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider font-semibold">
            Quick Links
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {/* Common pages user might want */}
            {[
              { href: "/day/1", label: "Day 1" },
              { href: "/vocabulary", label: "Vocabulary" },
              { href: "/speaking", label: "Speaking Lab" },
              { href: "/progress", label: "My Progress" },
              { href: "/mock-test", label: "Mock Test" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs rounded-full border border-border px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
