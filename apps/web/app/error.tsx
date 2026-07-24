"use client";
// ============================================================
// Global Error Page - 75 Days Hard English Course
// Catches unexpected errors during rendering
// MUST be a client component (required by Next.js)
// ============================================================

// React core imports
import { useEffect } from "react";
// Next.js Link for navigation
import Link from "next/link";

// ─── Error Page Props ─────────────────────────────────────────
// Next.js provides error and reset props automatically
interface ErrorPageProps {
  error: Error & { digest?: string };  // The error that occurred
  reset: () => void;                   // Function to retry rendering
}

// ─── Error Page Component ─────────────────────────────────────
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  // Log error to console for debugging
  useEffect(() => {
    console.error("[Error Page] Caught error:", error);
  }, [error]);

  return (
    // Full-screen error display
    <div
      className="min-h-screen flex items-center justify-center bg-background px-4"
      role="alert"
      aria-live="assertive"
    >
      {/* Error content card */}
      <div className="max-w-md w-full text-center">

        {/* Error emoji */}
        <div className="text-6xl mb-6" role="img" aria-label="Error">
          ⚠️
        </div>

        {/* Title */}
        <h1 className="text-3xl font-black text-foreground mb-3">
          Something went wrong
        </h1>

        {/* Friendly message */}
        <p className="text-muted-foreground text-base mb-2">
          An unexpected error occurred. Don&apos;t worry — your progress is safe!
        </p>

        {/* Error message (development hint) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-4 mb-6 rounded-xl border border-rose-500/20 bg-rose-500/5 px-4 py-3 text-left">
            <p className="text-xs font-mono text-rose-400 break-all">
              {error.message}
            </p>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">

          {/* Retry button */}
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25 hover:-translate-y-0.5"
          >
            🔄 Try Again
          </button>

          {/* Dashboard link */}
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 py-3 font-semibold text-foreground hover:bg-accent transition-all duration-200"
          >
            📚 Back to Dashboard
          </Link>
        </div>

        {/* Support message */}
        <p className="mt-8 text-xs text-muted-foreground/60">
          If this keeps happening, try refreshing the page or clearing your browser cache.
        </p>

      </div>
    </div>
  );
}
