"use client";
// ============================================================
// App Sidebar - Main navigation sidebar for authenticated users
// Features: day list, progress tracker, user info, settings
// ============================================================

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  Flame,
  LayoutDashboard,
  Mic,
  PenLine,
  Settings,
  Star,
  Trophy,
  TrendingUp,
  User,
  Volume2,
  Zap,
  Calendar,
  Target,
  BookMarked,
  GraduationCap,
  RefreshCcw,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getDayColor } from "@/lib/utils";
import { useSidebar } from "@/components/ui/sidebar";

// ─── Navigation sections ──────────────────────────────────────
const MAIN_NAV = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/dashboard",
    color: "text-blue-400",
  },
  {
    icon: TrendingUp,
    label: "My Progress",
    href: "/progress",
    color: "text-emerald-400",
  },
  {
    icon: BookMarked,
    label: "Vocabulary",
    href: "/vocabulary",
    color: "text-purple-400",
  },
  {
    icon: Mic,
    label: "Speaking Lab",
    href: "/speaking",
    color: "text-pink-400",
  },
  {
    icon: PenLine,
    label: "Writing Lab",
    href: "/writing",
    color: "text-amber-400",
  },
  {
    icon: RefreshCcw,
    label: "Revision",
    href: "/revision",
    color: "text-cyan-400",
  },
  {
    icon: Trophy,
    label: "Leaderboard",
    href: "/leaderboard",
    color: "text-gold-400",
  },
  {
    icon: Target,
    label: "Mock Tests",
    href: "/mock-test",
    color: "text-rose-400",
  },
];

// ─── Day list for quick navigation ────────────────────────────
// Generate all 75 days with their topics
const DAYS_PREVIEW = [
  { day: 1, title: "Basic of English" },
  { day: 2, title: "Self Introduction" },
  { day: 3, title: "Imperative Sentence" },
  { day: 4, title: "Be Verb" },
  { day: 5, title: "Demonstrative Pronoun" },
  { day: 6, title: "Has / Have" },
  { day: 7, title: "Had" },
  { day: 8, title: "Will Have" },
  { day: 9, title: "Use of There" },
  { day: 10, title: "Revision + Practice" },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { user } = useUser();
  const { open, setOpen } = useSidebar();

  // Track which sections are expanded
  const [daysExpanded, setDaysExpanded] = useState(false);

  // Mock user stats (will come from API)
  const userStats = {
    currentDay: 2,
    streak: 7,
    totalXp: 2450,
    level: 5,
    completedDays: 1,
  };

  return (
    <aside
      className={cn(
        // Base styles
        "relative flex flex-col h-screen border-r border-border bg-sidebar",
        "transition-all duration-300 ease-in-out",
        // Width based on open state
        open ? "w-72" : "w-[72px]",
        // Fixed on desktop, overlay on mobile
        "fixed lg:relative z-30 lg:z-auto",
        // Hide on mobile when closed
        !open && "hidden lg:flex"
      )}
      aria-label="Main navigation"
    >
      {/* ── Logo & brand ── */}
      <div className="flex h-16 items-center border-b border-border px-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 min-w-0 no-tap-highlight"
        >
          {/* Logo icon - always visible */}
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center 
                       rounded-xl bg-primary shadow-glow-brand"
          >
            <GraduationCap className="h-5 w-5 text-white" aria-hidden="true" />
          </div>

          {/* App name - only visible when expanded */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="min-w-0"
              >
                <p className="font-bold text-sm text-foreground leading-tight">
                  75 Days English
                </p>
                <p className="text-xs text-muted-foreground">
                  Hard English Course
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
      </div>

      {/* ── User stats bar ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mx-3 mt-3 rounded-xl border border-border/50 bg-card p-3"
          >
            {/* Current day */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">Current Day</span>
              <span className="badge-primary text-xs font-bold">
                Day {userStats.currentDay} / 75
              </span>
            </div>

            {/* Progress bar */}
            <div className="progress-bar mb-3">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{
                  width: `${(userStats.completedDays / 75) * 100}%`,
                }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-2">
              {/* Streak */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Flame className="h-3.5 w-3.5 streak-fire" />
                  <span className="text-sm font-bold text-foreground">
                    {userStats.streak}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">Streak</p>
              </div>

              {/* XP */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Zap className="h-3.5 w-3.5 text-gold-400" />
                  <span className="text-sm font-bold text-foreground">
                    {userStats.totalXp}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">XP</p>
              </div>

              {/* Level */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-3.5 w-3.5 text-blue-400" />
                  <span className="text-sm font-bold text-foreground">
                    {userStats.level}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">Level</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main navigation ── */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1 scrollbar-hide">
        {/* Main nav items */}
        {MAIN_NAV.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium",
                "transition-all duration-200 group",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
              title={!open ? item.label : undefined}
            >
              {/* Icon */}
              <item.icon
                className={cn(
                  "h-5 w-5 shrink-0 transition-colors",
                  isActive ? "text-primary" : item.color
                )}
                aria-hidden="true"
              />

              {/* Label - only visible when expanded */}
              <AnimatePresence>
                {open && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 truncate"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Active indicator dot */}
              {isActive && !open && (
                <div className="absolute right-0 h-6 w-1 rounded-l-full bg-primary" />
              )}
            </Link>
          );
        })}

        {/* ── Days section ── */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pt-3"
            >
              {/* Section header */}
              <button
                onClick={() => setDaysExpanded(!daysExpanded)}
                className="flex w-full items-center justify-between px-3 py-2 
                           text-xs font-semibold uppercase tracking-wider 
                           text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5" />
                  Course Days
                </div>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    daysExpanded && "rotate-180"
                  )}
                />
              </button>

              {/* Expanded day list */}
              <AnimatePresence>
                {daysExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden mt-1 space-y-0.5"
                  >
                    {DAYS_PREVIEW.map((day) => {
                      const isCompleted = day.day < userStats.currentDay;
                      const isCurrent = day.day === userStats.currentDay;
                      const isLocked = day.day > userStats.currentDay;
                      const color = getDayColor(day.day);

                      return (
                        <Link
                          key={day.day}
                          href={
                            isLocked ? "#" : `/day/${day.day}`
                          }
                          className={cn(
                            "flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs",
                            "transition-colors duration-150",
                            isCurrent
                              ? "bg-primary/10 text-primary font-semibold"
                              : isCompleted
                              ? "text-muted-foreground hover:bg-accent hover:text-foreground"
                              : "text-muted-foreground/40 cursor-not-allowed"
                          )}
                          aria-disabled={isLocked}
                        >
                          {/* Day number badge */}
                          <div
                            className="flex h-5 w-5 shrink-0 items-center justify-center 
                                       rounded-full text-[10px] font-bold text-white"
                            style={{
                              backgroundColor: isLocked ? "transparent" : color,
                              border: isLocked
                                ? "1px solid hsl(var(--border))"
                                : "none",
                            }}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="h-3.5 w-3.5" />
                            ) : isLocked ? (
                              <Lock className="h-2.5 w-2.5 text-muted-foreground/40" />
                            ) : (
                              day.day
                            )}
                          </div>

                          {/* Day title */}
                          <span className="truncate">{day.title}</span>
                        </Link>
                      );
                    })}

                    {/* See all days link */}
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 px-3 py-2 text-xs
                                 text-primary hover:underline font-medium"
                    >
                      <ChevronRight className="h-3.5 w-3.5" />
                      See all 75 days
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Bottom user section ── */}
      <div className="border-t border-border p-3">
        {/* Settings link */}
        <Link
          href="/settings"
          className={cn(
            "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium",
            "text-muted-foreground hover:bg-accent hover:text-foreground transition-colors mb-2",
            pathname === "/settings" && "bg-primary/10 text-primary"
          )}
        >
          <Settings className="h-5 w-5 shrink-0" aria-hidden="true" />
          <AnimatePresence>
            {open && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Settings
              </motion.span>
            )}
          </AnimatePresence>
        </Link>

        {/* User profile */}
        <Link
          href="/profile"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5
                     hover:bg-accent transition-colors group"
        >
          {/* Avatar */}
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center 
                       rounded-full bg-gradient-to-br from-primary to-purple-500
                       text-white text-sm font-bold"
          >
            {user?.firstName?.charAt(0) || "U"}
          </div>

          {/* Name and email */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-w-0 flex-1"
              >
                <p className="text-sm font-medium text-foreground truncate">
                  {user?.fullName || "Student"}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {user?.primaryEmailAddress?.emailAddress || ""}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
      </div>

      {/* ── Collapse toggle button ── */}
      <button
        onClick={() => setOpen(!open)}
        className="absolute -right-3 top-20 z-10 flex h-6 w-6 items-center justify-center
                   rounded-full border border-border bg-card shadow-card
                   text-muted-foreground hover:text-foreground transition-colors
                   hover:bg-accent"
        aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
      >
        <ChevronRight
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
    </aside>
  );
}
