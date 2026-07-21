"use client";
// ============================================================
// App Sidebar - Main navigation sidebar for authenticated users
// Uses real user data from API via useUserStats hook
// Features: day navigation, progress tracker, user info
// Premium design inspired by Linear and Vercel
// ============================================================

import { useState } from "react";
// Next.js navigation
import Link from "next/link";
import { usePathname } from "next/navigation";
// Animation library for smooth transitions
import { motion, AnimatePresence } from "framer-motion";
// Icons
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  Flame,
  LayoutDashboard,
  Mic,
  PenLine,
  Settings,
  Trophy,
  TrendingUp,
  Volume2,
  Zap,
  Target,
  BookMarked,
  GraduationCap,
  RefreshCcw,
  Lock,
  CheckCircle2,
  User,
  Sparkles,
  Star,
  ChevronLeft,
} from "lucide-react";
// Utility for conditional class names
import { cn } from "@/lib/utils";
// Sidebar context from shadcn
import { useSidebar } from "@/components/ui/sidebar";
// Real user stats hook
import { useUserStats } from "@/hooks/use-user-stats";

// ─── Navigation items ──────────────────────────────────────────
// Main navigation links shown in the sidebar
const MAIN_NAV = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", color: "text-blue-400" },
  { icon: TrendingUp, label: "My Progress", href: "/progress", color: "text-emerald-400" },
  { icon: BookMarked, label: "Vocabulary", href: "/vocabulary", color: "text-purple-400" },
  { icon: Mic, label: "Speaking Lab", href: "/speaking", color: "text-pink-400" },
  { icon: PenLine, label: "Writing Lab", href: "/writing", color: "text-amber-400" },
  { icon: RefreshCcw, label: "Revision", href: "/revision", color: "text-cyan-400" },
  { icon: Trophy, label: "Leaderboard", href: "/leaderboard", color: "text-yellow-400" },
  { icon: Target, label: "Mock Tests", href: "/mock-test", color: "text-rose-400" },
];

// ─── All 75 days ──────────────────────────────────────────────
const ALL_DAYS = [
  { day: 1,  title: "Basic of English",                   emoji: "📖" },
  { day: 2,  title: "Self Introduction",                   emoji: "👋" },
  { day: 3,  title: "Imperative Sentence",                 emoji: "⚡" },
  { day: 4,  title: "Be Verb",                             emoji: "🔵" },
  { day: 5,  title: "Demonstrative Pronoun",               emoji: "👆" },
  { day: 6,  title: "Has / Have",                          emoji: "✅" },
  { day: 7,  title: "Had",                                 emoji: "⏮️" },
  { day: 8,  title: "Will Have",                           emoji: "⏭️" },
  { day: 9,  title: "Use of There",                        emoji: "📍" },
  { day: 10, title: "Revision + Practice",                 emoji: "🔄" },
  { day: 11, title: "Use of Want",                         emoji: "💭" },
  { day: 12, title: "Use of Wanted",                       emoji: "💫" },
  { day: 13, title: "Use of Let",                          emoji: "🤝" },
  { day: 14, title: "Use of Let's",                        emoji: "🚀" },
  { day: 15, title: "Would Like To",                       emoji: "🙏" },
  { day: 16, title: "Can",                                 emoji: "💪" },
  { day: 17, title: "Should",                              emoji: "⚖️" },
  { day: 18, title: "May",                                 emoji: "🌸" },
  { day: 19, title: "Must",                                emoji: "⚠️" },
  { day: 20, title: "Revision + Speaking",                 emoji: "🗣️" },
  { day: 21, title: "Used To",                             emoji: "⏰" },
  { day: 22, title: "Could",                               emoji: "🌟" },
  { day: 23, title: "Should Have",                         emoji: "💡" },
  { day: 24, title: "Must Have",                           emoji: "🔑" },
  { day: 25, title: "Could Have",                          emoji: "🌈" },
  { day: 26, title: "Would Have",                          emoji: "✨" },
  { day: 27, title: "May Have",                            emoji: "🎯" },
  { day: 28, title: "Might Have",                          emoji: "🌙" },
  { day: 29, title: "Will / Shall",                        emoji: "📅" },
  { day: 30, title: "Would + Ought To",                    emoji: "🎓" },
  { day: 31, title: "Revision",                            emoji: "🔄" },
  { day: 32, title: "Tenses Part 1",                       emoji: "⏱️" },
  { day: 33, title: "Tenses Part 2",                       emoji: "📊" },
  { day: 34, title: "Tenses Part 3",                       emoji: "🌍" },
  { day: 35, title: "Tenses Part 4",                       emoji: "🎓" },
  { day: 36, title: "Prepositions Part 1",                 emoji: "📌" },
  { day: 37, title: "Prepositions Part 2",                 emoji: "🔗" },
  { day: 38, title: "Has To / Have To",                    emoji: "🛠️" },
  { day: 39, title: "Had To / Will Have To",               emoji: "🔧" },
  { day: 40, title: "Make / Get",                          emoji: "🔨" },
  { day: 41, title: "Going To",                            emoji: "🚀" },
  { day: 42, title: "About To",                            emoji: "⏳" },
  { day: 43, title: "Want To / Wanted To",                 emoji: "💬" },
  { day: 44, title: "Need To / Needed To",                 emoji: "🎭" },
  { day: 45, title: "Fond Of",                             emoji: "❤️" },
  { day: 46, title: "Able To",                             emoji: "💪" },
  { day: 47, title: "Conjunctions",                        emoji: "🔄" },
  { day: 48, title: "WH Words",                            emoji: "❓" },
  { day: 49, title: "Passive Voice Part 1",                emoji: "🗣️" },
  { day: 50, title: "Passive Voice Part 2",                emoji: "🎤" },
  { day: 51, title: "Advance Sentences Part 1",            emoji: "🚀" },
  { day: 52, title: "Advance Sentences Part 2",            emoji: "🌟" },
  { day: 53, title: "Verb List",                           emoji: "📋" },
  { day: 54, title: "Idioms & Phrases",                    emoji: "💡" },
  { day: 55, title: "Important Vocabulary",                emoji: "📚" },
  { day: 56, title: "Miscellaneous Vocabulary",            emoji: "🌈" },
  { day: 57, title: "Stationery Vocabulary",               emoji: "📎" },
  { day: 58, title: "Foods & Tastes",                      emoji: "🍎" },
  { day: 59, title: "Relations & Weather",                 emoji: "🌤️" },
  { day: 60, title: "Professions & Occupations",           emoji: "👔" },
  { day: 61, title: "Buildings & Insects",                 emoji: "🏗️" },
  { day: 62, title: "Flowers & Fruits",                    emoji: "🌸" },
  { day: 63, title: "Maths Vocabulary",                    emoji: "➕" },
  { day: 64, title: "Body & Diseases",                     emoji: "💊" },
  { day: 65, title: "Industry Vocabulary",                 emoji: "🏭" },
  { day: 66, title: "Colours & Judiciary",                 emoji: "🎨" },
  { day: 67, title: "Birds & Astrology",                   emoji: "🦅" },
  { day: 68, title: "Factory & Sports",                    emoji: "⚽" },
  { day: 69, title: "Application Writing",                 emoji: "✍️" },
  { day: 70, title: "Letter Writing",                      emoji: "📬" },
  { day: 71, title: "E-mail Writing",                      emoji: "📧" },
  { day: 72, title: "Paragraph Writing",                   emoji: "📝" },
  { day: 73, title: "Notice & Writing Skills",             emoji: "📢" },
  { day: 74, title: "Grammar + Vocabulary + Speaking",     emoji: "📚" },
  { day: 75, title: "Complete Mock Test + Final Revision", emoji: "✅" },
];

// ─── Sidebar component ─────────────────────────────────────────
export function AppSidebar() {
  // Get current URL path for highlighting active links
  const pathname = usePathname();
  // Sidebar open/close state from context
  const { open, setOpen } = useSidebar();
  // Real user stats from API
  const { stats, loading } = useUserStats();
  // Track whether the days list is expanded
  const [daysExpanded, setDaysExpanded] = useState(false);

  // Display name for the user
  const displayName =
    stats.firstName
      ? `${stats.firstName}${stats.lastName ? ` ${stats.lastName}` : ""}`
      : "Student";

  // Filter days to show accessible ones first
  const visibleDays = daysExpanded ? ALL_DAYS : ALL_DAYS.slice(0, 10);

  return (
    <aside
      className={cn(
        // Base layout styles
        "relative flex flex-col h-screen border-r border-border/60",
        "bg-sidebar transition-all duration-300 ease-in-out",
        // Width changes based on open/closed state
        open ? "w-[280px]" : "w-[68px]",
        // Fixed position on mobile, relative on desktop
        "fixed lg:relative z-30 lg:z-auto",
        // Hide on mobile when collapsed
        !open && "hidden lg:flex"
      )}
      aria-label="Main navigation"
    >
      {/* ── Header: Logo + App Name ── */}
      <div className="flex h-14 items-center border-b border-border/60 px-3">
        {/* Logo icon — always visible */}
        <Link
          href="/dashboard"
          className="flex items-center gap-3 min-w-0 no-tap-highlight"
        >
          {/* Brand icon */}
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center
                       rounded-xl bg-gradient-to-br from-brand-500 to-purple-600
                       shadow-glow-brand"
          >
            <GraduationCap className="h-5 w-5 text-white" aria-hidden="true" />
          </div>

          {/* App name — visible only when expanded */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="min-w-0"
              >
                <p className="font-bold text-sm text-foreground leading-tight truncate">
                  75 Days English
                </p>
                <p className="text-[10px] text-muted-foreground leading-tight">
                  Hard English Course
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>

        {/* Collapse/expand toggle button */}
        <AnimatePresence>
          {open && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center
                         rounded-lg text-muted-foreground hover:bg-accent
                         hover:text-foreground transition-colors"
              aria-label="Collapse sidebar"
            >
              <ChevronLeft className="h-4 w-4" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Expand button when collapsed */}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="ml-auto hidden lg:flex h-7 w-7 items-center justify-center
                       rounded-lg text-muted-foreground hover:bg-accent
                       hover:text-foreground transition-colors"
            aria-label="Expand sidebar"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* ── User stats bar (only when expanded) ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mx-3 mt-3 overflow-hidden"
          >
            <div className="rounded-xl border border-border/50 bg-card/60 p-3">
              {/* Day progress header */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                  Current Day
                </span>
                <span className="text-xs font-bold text-primary">
                  {loading ? "..." : `Day ${stats.currentDay} / 75`}
                </span>
              </div>

              {/* Overall course progress bar */}
              <div className="h-1.5 w-full rounded-full bg-border overflow-hidden mb-3">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
                  initial={{ width: 0 }}
                  animate={{
                    width: loading ? "0%" : `${((stats.currentDay - 1) / 75) * 100}%`,
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>

              {/* Stat row: Streak, XP, Level */}
              <div className="grid grid-cols-3 gap-2">
                {/* Streak */}
                <div className="flex flex-col items-center gap-0.5">
                  <Flame className="h-3.5 w-3.5 text-orange-500" aria-hidden="true" />
                  <span className="text-xs font-bold text-foreground">
                    {loading ? "-" : stats.streak}
                  </span>
                  <span className="text-[9px] text-muted-foreground">Streak</span>
                </div>

                {/* XP */}
                <div className="flex flex-col items-center gap-0.5">
                  <Zap className="h-3.5 w-3.5 text-yellow-500" aria-hidden="true" />
                  <span className="text-xs font-bold text-foreground">
                    {loading ? "-" : stats.totalXp.toLocaleString()}
                  </span>
                  <span className="text-[9px] text-muted-foreground">XP</span>
                </div>

                {/* Level */}
                <div className="flex flex-col items-center gap-0.5">
                  <Star className="h-3.5 w-3.5 text-purple-400" aria-hidden="true" />
                  <span className="text-xs font-bold text-foreground">
                    {loading ? "-" : stats.level}
                  </span>
                  <span className="text-[9px] text-muted-foreground">Level</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main navigation ── */}
      <nav
        className="flex-1 overflow-y-auto px-2 py-3 space-y-0.5 scrollbar-hide"
        aria-label="Main navigation links"
      >
        {/* Navigation items */}
        {MAIN_NAV.map((item) => {
          // Check if this link is currently active
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                // Base nav item styles
                "group flex items-center gap-3 rounded-lg px-3 py-2.5",
                "text-sm font-medium transition-all duration-150",
                // Active styles
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
              aria-current={isActive ? "page" : undefined}
              title={!open ? item.label : undefined}
            >
              {/* Icon — always visible */}
              <item.icon
                className={cn(
                  "h-4.5 w-4.5 shrink-0 transition-colors",
                  isActive ? "text-primary" : item.color
                )}
                aria-hidden="true"
              />

              {/* Label — only visible when expanded */}
              <AnimatePresence>
                {open && (
                  <motion.span
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -5 }}
                    transition={{ duration: 0.15 }}
                    className="truncate"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Active indicator dot when collapsed */}
              {!open && isActive && (
                <div className="absolute right-1 h-1.5 w-1.5 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}

        {/* ── Days section ── */}
        {open && (
          <div className="mt-4">
            {/* Section header */}
            <button
              onClick={() => setDaysExpanded(!daysExpanded)}
              className="flex w-full items-center justify-between px-3 py-2
                         text-[10px] font-semibold uppercase tracking-wider
                         text-muted-foreground hover:text-foreground transition-colors"
              aria-expanded={daysExpanded}
            >
              <span>Course Days</span>
              <motion.div
                animate={{ rotate: daysExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-3 w-3" aria-hidden="true" />
              </motion.div>
            </button>

            {/* Day list */}
            <AnimatePresence>
              <div className="space-y-0.5">
                {visibleDays.map((dayItem) => {
                  // Determine access level based on user's current day
                  const isCompleted = dayItem.day < stats.currentDay;
                  const isCurrent = dayItem.day === stats.currentDay;
                  const isLocked = dayItem.day > stats.currentDay;
                  const isDayActive = pathname === `/day/${dayItem.day}`;

                  return (
                    <Link
                      key={dayItem.day}
                      href={isLocked ? "#" : `/day/${dayItem.day}`}
                      className={cn(
                        "flex items-center gap-2 rounded-lg px-3 py-1.5",
                        "text-xs transition-all duration-150",
                        isLocked
                          ? "cursor-not-allowed text-muted-foreground/40"
                          : isDayActive
                          ? "bg-primary/10 text-primary font-medium"
                          : isCurrent
                          ? "text-foreground font-medium hover:bg-accent"
                          : isCompleted
                          ? "text-muted-foreground hover:bg-accent/50"
                          : "text-muted-foreground/60 hover:bg-accent/30"
                      )}
                      aria-label={`Day ${dayItem.day}: ${dayItem.title}${isLocked ? " (locked)" : ""}`}
                      onClick={isLocked ? (e) => e.preventDefault() : undefined}
                    >
                      {/* Day status icon */}
                      {isCompleted ? (
                        <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-500" />
                      ) : isCurrent ? (
                        <Sparkles className="h-3 w-3 shrink-0 text-primary animate-pulse" />
                      ) : isLocked ? (
                        <Lock className="h-3 w-3 shrink-0 text-muted-foreground/30" />
                      ) : (
                        <BookOpen className="h-3 w-3 shrink-0 text-muted-foreground/50" />
                      )}

                      {/* Day info */}
                      <span className="truncate">
                        <span className="font-medium">D{dayItem.day}</span>
                        {" · "}
                        {dayItem.title}
                      </span>

                      {/* Current day indicator */}
                      {isCurrent && (
                        <span className="ml-auto shrink-0 text-[9px] font-bold
                                        text-primary bg-primary/10 px-1 rounded">
                          NOW
                        </span>
                      )}
                    </Link>
                  );
                })}

                {/* Show more/less toggle */}
                <button
                  onClick={() => setDaysExpanded(!daysExpanded)}
                  className="flex w-full items-center justify-center gap-1.5
                             rounded-lg px-3 py-1.5 text-xs text-muted-foreground
                             hover:bg-accent/50 transition-colors mt-1"
                >
                  {daysExpanded ? (
                    <>
                      <ChevronDown className="h-3 w-3 rotate-180" />
                      Show less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-3 w-3" />
                      View all 75 days
                    </>
                  )}
                </button>
              </div>
            </AnimatePresence>
          </div>
        )}
      </nav>

      {/* ── Bottom: User info + Settings ── */}
      <div className="border-t border-border/60 p-3">
        {/* Settings link */}
        <Link
          href="/settings"
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2.5 mb-2",
            "text-sm font-medium text-muted-foreground",
            "hover:bg-accent hover:text-foreground transition-colors",
            pathname === "/settings" && "bg-primary/10 text-primary"
          )}
          title={!open ? "Settings" : undefined}
        >
          <Settings className="h-4.5 w-4.5 shrink-0" aria-hidden="true" />
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

        {/* User info */}
        <Link
          href="/profile"
          className="flex items-center gap-3 rounded-xl p-2 hover:bg-accent
                     transition-colors cursor-pointer"
          title={!open ? displayName : undefined}
        >
          {/* Avatar */}
          <div
            className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br
                       from-brand-400 to-purple-500 flex items-center justify-center
                       text-white text-xs font-bold ring-2 ring-border overflow-hidden"
          >
            {stats.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={stats.imageUrl}
                alt={displayName}
                className="w-full h-full object-cover"
              />
            ) : (
              // Show initials if no avatar
              <span>
                {stats.firstName ? stats.firstName[0].toUpperCase() : "S"}
              </span>
            )}
          </div>

          {/* Name + level — only visible when expanded */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-w-0 flex-1"
              >
                <p className="text-sm font-semibold text-foreground truncate">
                  {displayName}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  Level {stats.level} · {stats.totalXp.toLocaleString()} XP
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sound toggle — only visible when expanded */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Volume2 className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
      </div>
    </aside>
  );
}
