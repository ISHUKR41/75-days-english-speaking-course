// ============================================================
// Landing Footer - Professional footer with links and brand
// Design: Stripe/Linear inspired minimal footer
// ============================================================

import Link from "next/link";
import { GraduationCap, Github, Globe, BookOpen, Mic, Trophy, Target, Zap } from "lucide-react";

// ─── Footer navigation sections ───────────────────────────────
const FOOTER_LINKS = [
  {
    heading: "Course",
    links: [
      { label: "Day 1 — Basic English", href: "/day/1" },
      { label: "Day 2 — Self Introduction", href: "/day/2" },
      { label: "Day 3 — Imperative", href: "/day/3" },
      { label: "All 75 Days", href: "/dashboard" },
      { label: "Vocabulary Bank", href: "/vocabulary" },
    ],
  },
  {
    heading: "Features",
    links: [
      { label: "Speaking Lab", href: "/speaking" },
      { label: "Mock Tests", href: "/mock-test" },
      { label: "Progress Tracker", href: "/progress" },
      { label: "Leaderboard", href: "/leaderboard" },
      { label: "Writing Lab", href: "/writing" },
    ],
  },
  {
    heading: "Account",
    links: [
      { label: "Sign In", href: "/sign-in" },
      { label: "Get Started Free", href: "/sign-up" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Profile", href: "/profile" },
      { label: "Settings", href: "/settings" },
    ],
  },
];

// ─── Feature badges for footer ─────────────────────────────────
const FOOTER_BADGES = [
  { icon: Zap, label: "75 Days" },
  { icon: BookOpen, label: "15K+ Words" },
  { icon: Mic, label: "Voice Practice" },
  { icon: Trophy, label: "Gamified" },
  { icon: Target, label: "50K+ Questions" },
  { icon: Globe, label: "Open Source" },
];

export function LandingFooter() {
  return (
    <footer className="border-t border-border bg-background" aria-label="Site footer">
      <div className="page-container py-12 md:py-16">
        {/* ── Main footer grid ── */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-lg">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-black leading-none">75 Days Hard</div>
                <div className="text-xs text-muted-foreground">English Course</div>
              </div>
            </div>

            {/* Brand description */}
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
              The world&apos;s most advanced free English learning platform. 
              From beginner to fluent in 75 days.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-1.5">
              {FOOTER_BADGES.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] text-primary font-medium"
                >
                  <badge.icon className="h-2.5 w-2.5" />
                  {badge.label}
                </span>
              ))}
            </div>

            {/* GitHub link */}
            <div>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="h-3.5 w-3.5" />
                Open Source on GitHub
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.heading} className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {section.heading}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © 2026 75 Days Hard English Course. Open Source under MIT License.
          </p>
          <p className="text-xs text-muted-foreground">
            Built to make{" "}
            <span className="text-primary font-semibold">fluent English</span>
            {" "}accessible to everyone.
          </p>
        </div>
      </div>
    </footer>
  );
}
