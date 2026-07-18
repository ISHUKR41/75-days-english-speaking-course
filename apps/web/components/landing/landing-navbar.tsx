"use client";
// ============================================================
// Landing Navbar - Sticky navigation for the landing page
// Professional look inspired by Vercel/Linear
// ============================================================

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Menu, X, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

// Navigation links for the landing page
const NAV_LINKS = [
  { label: "Course", href: "#curriculum" },
  { label: "Features", href: "#features" },
  { label: "Progress", href: "#progress" },
  { label: "FAQ", href: "#faq" },
];

export function LandingNavbar() {
  // Track scroll position to change navbar background
  const [scrolled, setScrolled] = useState(false);
  // Mobile menu open state
  const [mobileOpen, setMobileOpen] = useState(false);

  // Listen for scroll events to add glass background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Main navbar */}
      <header
        className={cn(
          // Base styles - fixed at top, full width
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          // Add glass background when scrolled
          scrolled
            ? "border-b border-border/50 bg-background/80 backdrop-blur-xl shadow-card"
            : "bg-transparent"
        )}
      >
        <nav className="page-container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-lg no-tap-highlight"
          >
            {/* Animated logo icon */}
            <motion.div
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-glow-brand"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="h-5 w-5 text-white" aria-hidden="true" />
            </motion.div>
            {/* App name with gradient */}
            <span className="hidden sm:block">
              <span className="text-gradient-brand">75 Days</span>
              <span className="text-foreground ml-1">English</span>
            </span>
          </Link>

          {/* Desktop navigation links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-lg
                             transition-colors duration-200 hover:text-foreground hover:bg-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <ThemeToggle />

            {/* Sign in link */}
            <Link
              href="/sign-in"
              className="hidden sm:block text-sm font-medium text-muted-foreground
                         transition-colors hover:text-foreground"
            >
              Sign in
            </Link>

            {/* Get started CTA button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/sign-up"
                className="btn-primary text-sm px-4 py-2 gap-1.5"
              >
                <Zap className="h-4 w-4" aria-hidden="true" />
                <span>Start Free</span>
              </Link>
            </motion.div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden btn-ghost p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 border-b border-border
                       bg-background/95 backdrop-blur-xl px-4 pb-4 md:hidden"
          >
            {/* Mobile nav links */}
            <ul className="mt-4 flex flex-col gap-1" role="list">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-4 py-3 rounded-xl text-base font-medium
                               text-muted-foreground hover:text-foreground hover:bg-accent
                               transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Mobile auth buttons */}
            <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-border">
              <Link
                href="/sign-in"
                className="btn-secondary justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="/sign-up"
                className="btn-primary justify-center"
                onClick={() => setMobileOpen(false)}
              >
                <Zap className="h-4 w-4" />
                Start Free — 75 Days
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
