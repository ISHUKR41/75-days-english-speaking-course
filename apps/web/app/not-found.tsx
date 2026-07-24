// ============================================================
// 404 Not Found Page - Premium design
// Shows a helpful 404 message with navigation options
// ============================================================

import Link from "next/link";
import { GraduationCap, ArrowLeft, Home, BookOpen, Target } from "lucide-react";

// ─── Quick links to help user navigate ────────────────────────
const QUICK_LINKS = [
  { label: "Go to Dashboard", href: "/dashboard", icon: Home, desc: "Your learning hub" },
  { label: "Start Day 1", href: "/day/1", icon: BookOpen, desc: "Begin your journey" },
  { label: "Mock Test", href: "/mock-test", icon: Target, desc: "Test your knowledge" },
];

export default function NotFound() {
  return (
    // Full-height centered layout
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-16">
      {/* Brand icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 mb-6">
        <GraduationCap className="h-8 w-8 text-primary" aria-hidden="true" />
      </div>

      {/* Error code — large and bold */}
      <h1 className="text-center text-8xl font-black tabular-nums text-primary opacity-30 leading-none" aria-label="Error 404">
        404
      </h1>

      {/* Error message */}
      <h2 className="mt-2 text-center text-xl font-bold text-foreground">
        Page Not Found
      </h2>
      <p className="mt-2 max-w-sm text-center text-sm text-muted-foreground">
        We couldn&apos;t find the page you were looking for. It may have moved or doesn&apos;t exist.
      </p>

      {/* ── Navigation options ── */}
      <div className="mt-8 w-full max-w-xs space-y-2">
        {QUICK_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-150 group"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <link.icon className="h-4 w-4 text-primary" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-foreground">{link.label}</div>
              <div className="text-xs text-muted-foreground">{link.desc}</div>
            </div>
            <ArrowLeft className="ml-auto h-4 w-4 text-muted-foreground rotate-180 group-hover:text-primary transition-colors" aria-hidden="true" />
          </Link>
        ))}
      </div>

      {/* Back link */}
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        Back to Home
      </Link>
    </main>
  );
}
