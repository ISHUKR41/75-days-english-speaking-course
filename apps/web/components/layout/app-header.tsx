"use client";
// ============================================================
// App Header - Top navigation bar for authenticated pages
// Shows: menu toggle, search, notifications, user menu
// Enhanced: animated XP bar, prominent streak with fire emoji,
// Day-in-progress notification bar
// ============================================================

import { useState, useMemo, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useUserStats } from "@/hooks/use-user-stats";
import {
  Bell,
  Flame,
  Menu,
  Search,
  X,
  Zap,
  Command,
  BookOpen,
  LayoutDashboard,
  TrendingUp,
  BookMarked,
  Mic,
  PenLine,
  RefreshCcw,
  Trophy,
  Target,
  Calendar,
} from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

// Map of route paths to page titles
const PAGE_TITLES: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/progress": "My Progress",
  "/vocabulary": "Vocabulary",
  "/speaking": "Speaking Lab",
  "/writing": "Writing Lab",
  "/revision": "Revision",
  "/leaderboard": "Leaderboard",
  "/mock-test": "Mock Tests",
  "/profile": "Profile",
  "/settings": "Settings",
};

// All 75 days for search
const ALL_DAYS = [
  { day: 1,  title: "Basic of English" },
  { day: 2,  title: "Self Introduction" },
  { day: 3,  title: "Imperative Sentence" },
  { day: 4,  title: "Be Verb" },
  { day: 5,  title: "Demonstrative Pronoun" },
  { day: 6,  title: "Has / Have" },
  { day: 7,  title: "Had" },
  { day: 8,  title: "Will Have" },
  { day: 9,  title: "Use of There" },
  { day: 10, title: "Revision + Practice" },
  { day: 11, title: "Use of Want" },
  { day: 12, title: "Use of Wanted" },
  { day: 13, title: "Use of Let" },
  { day: 14, title: "Use of Let's" },
  { day: 15, title: "Would Like To" },
  { day: 16, title: "Can" },
  { day: 17, title: "Should" },
  { day: 18, title: "May" },
  { day: 19, title: "Must" },
  { day: 20, title: "Revision + Speaking" },
  { day: 21, title: "Used To" },
  { day: 22, title: "Could" },
  { day: 23, title: "Should Have" },
  { day: 24, title: "Must Have" },
  { day: 25, title: "Could Have" },
  { day: 26, title: "Would Have" },
  { day: 27, title: "May Have" },
  { day: 28, title: "Might Have" },
  { day: 29, title: "Will / Shall" },
  { day: 30, title: "Would + Ought To" },
  { day: 31, title: "Revision" },
  { day: 32, title: "Tenses Part 1" },
  { day: 33, title: "Tenses Part 2" },
  { day: 34, title: "Tenses Part 3" },
  { day: 35, title: "Tenses Part 4" },
  { day: 36, title: "Prepositions Part 1" },
  { day: 37, title: "Prepositions Part 2" },
  { day: 38, title: "Has To / Have To" },
  { day: 39, title: "Had To / Will Have To" },
  { day: 40, title: "Make / Get" },
  { day: 41, title: "Going To" },
  { day: 42, title: "About To" },
  { day: 43, title: "Want To / Wanted To" },
  { day: 44, title: "Need To / Needed To" },
  { day: 45, title: "Fond Of" },
  { day: 46, title: "Able To" },
  { day: 47, title: "Conjunctions" },
  { day: 48, title: "WH Words" },
  { day: 49, title: "Passive Voice Part 1" },
  { day: 50, title: "Passive Voice Part 2" },
  { day: 51, title: "Advance Sentences Part 1" },
  { day: 52, title: "Advance Sentences Part 2" },
  { day: 53, title: "Verb List" },
  { day: 54, title: "Idioms & Phrases" },
  { day: 55, title: "Important Vocabulary" },
  { day: 56, title: "Miscellaneous Vocabulary" },
  { day: 57, title: "Stationery Vocabulary" },
  { day: 58, title: "Foods & Tastes" },
  { day: 59, title: "Relations & Weather" },
  { day: 60, title: "Professions & Occupations" },
  { day: 61, title: "Buildings & Insects" },
  { day: 62, title: "Flowers & Fruits" },
  { day: 63, title: "Maths Vocabulary" },
  { day: 64, title: "Body & Diseases" },
  { day: 65, title: "Industry Vocabulary" },
  { day: 66, title: "Colours & Judiciary" },
  { day: 67, title: "Birds & Astrology" },
  { day: 68, title: "Factory & Sports" },
  { day: 69, title: "Application Writing" },
  { day: 70, title: "Letter Writing" },
  { day: 71, title: "E-mail Writing" },
  { day: 72, title: "Paragraph Writing" },
  { day: 73, title: "Notice & Writing Skills" },
  { day: 74, title: "Grammar + Vocabulary + Speaking" },
  { day: 75, title: "Complete Mock Test + Final Revision" },
];

// Navigation items for search
const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, desc: "Your learning hub" },
  { label: "My Progress", href: "/progress", icon: TrendingUp, desc: "Track your XP & stats" },
  { label: "Vocabulary Bank", href: "/vocabulary", icon: BookMarked, desc: "Browse all words" },
  { label: "Speaking Lab", href: "/speaking", icon: Mic, desc: "Practice pronunciation" },
  { label: "Writing Lab", href: "/writing", icon: PenLine, desc: "Email, letter, story writing" },
  { label: "Revision", href: "/revision", icon: RefreshCcw, desc: "Flashcards & grammar" },
  { label: "Leaderboard", href: "/leaderboard", icon: Trophy, desc: "See top learners" },
  { label: "Mock Tests", href: "/mock-test", icon: Target, desc: "Test your English" },
];

// Mock notifications
const MOCK_NOTIFICATIONS = [
  {
    id: "1",
    type: "streak",
    message: "You're on a 7-day streak! Keep it up 🔥",
    time: "2 min ago",
    read: false,
  },
  {
    id: "2",
    type: "achievement",
    message: "You earned the 'First Step' badge! 🏆",
    time: "1 hour ago",
    read: false,
  },
  {
    id: "3",
    type: "reminder",
    message: "Don't forget to practice today's vocabulary",
    time: "3 hours ago",
    read: true,
  },
];

export function AppHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { setOpen, open } = useSidebar();

  // Notification panel state
  const [showNotifications, setShowNotifications] = useState(false);
  // Search state
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Get current page title
  const getPageTitle = () => {
    if (PAGE_TITLES[pathname]) return PAGE_TITLES[pathname];
    const subtopicMatch = pathname?.match(/^\/day\/(\d+)\/topic\/[^/]+\/subtopic\//);
    if (subtopicMatch) return `Day ${subtopicMatch[1]} · Lesson`;
    const dayMatch = pathname?.match(/^\/day\/(\d+)/);
    if (dayMatch) return `Day ${dayMatch[1]} of 75`;
    return "75 Days English";
  };
  const pageTitle = getPageTitle();

  // Count unread notifications
  const unreadCount = MOCK_NOTIFICATIONS.filter((n) => !n.read).length;

  // Real user stats from API
  const { stats: userStats } = useUserStats();
  const userXp = userStats.totalXp;
  const userStreak = userStats.streak;
  const userLevel = userStats.level ?? 1;
  const userCurrentDay = userStats.currentDay ?? 1;

  // XP within current level (each level needs 1000 XP)
  const xpInLevel = userXp % 1000;
  const xpProgressPct = Math.min(100, Math.round((xpInLevel / 1000) * 100));

  // Track previous XP so we can pulse when it increases
  const prevXpRef = useRef(userXp);
  const [xpPulse, setXpPulse] = useState(false);

  useEffect(() => {
    // Trigger pulse animation when XP increases
    if (userXp > prevXpRef.current) {
      setXpPulse(true);
      const timer = setTimeout(() => setXpPulse(false), 800);
      prevXpRef.current = userXp;
      return () => clearTimeout(timer);
    }
  }, [userXp]);

  // Search results — computed from query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return { days: [], pages: [] };
    const q = searchQuery.toLowerCase().trim();

    const matchedDays = ALL_DAYS.filter(
      (d) =>
        d.title.toLowerCase().includes(q) ||
        `day ${d.day}`.includes(q) ||
        d.day.toString() === q
    ).slice(0, 6);

    const matchedPages = NAV_ITEMS.filter(
      (n) =>
        n.label.toLowerCase().includes(q) ||
        n.desc.toLowerCase().includes(q)
    ).slice(0, 4);

    return { days: matchedDays, pages: matchedPages };
  }, [searchQuery]);

  const hasResults =
    searchResults.days.length > 0 || searchResults.pages.length > 0;

  const handleSearchSelect = (href: string) => {
    setShowSearch(false);
    setSearchQuery("");
    router.push(href);
  };

  return (
    <div className="sticky top-0 z-20">
      {/* ── Day-in-progress notification bar ── */}
      <div
        className="hidden sm:flex items-center justify-center gap-3 px-4 py-1.5 text-xs font-semibold"
        style={{
          background: "linear-gradient(90deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 50%, rgba(99,102,241,0.15) 100%)",
          borderBottom: "1px solid rgba(99,102,241,0.2)",
        }}
      >
        {/* Animated pulsing dot */}
        <motion.div
          className="h-1.5 w-1.5 rounded-full bg-violet-400"
          animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-violet-300">
          📅 Day {userCurrentDay} of 75 in progress
        </span>
        <span className="text-muted-foreground">·</span>
        <span className="text-muted-foreground">
          Keep your {userStreak > 0 ? `${userStreak}-day streak alive` : "streak going"}!
        </span>
      </div>

    <header
      className="flex h-14 items-center gap-3 border-b border-border
                 bg-background/95 backdrop-blur-xl px-4 md:px-6"
    >
      {/* Mobile menu toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden btn-ghost p-2 -ml-2"
        aria-label="Toggle sidebar"
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

      {/* Page title */}
      <div className="flex-1 min-w-0">
        <h1 className="text-base font-semibold text-foreground truncate">
          {pageTitle}
        </h1>
        <p className="text-xs text-muted-foreground hidden sm:block">
          75 Days Hard English Course
        </p>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-2">
        {/* ── XP display with animated progress bar ── */}
        <motion.div
          animate={xpPulse ? { scale: [1, 1.08, 1] } : {}}
          transition={{ duration: 0.4 }}
          className={cn(
            "hidden sm:flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-all duration-300",
            xpPulse
              ? "border-amber-400/60 bg-amber-500/15 shadow-[0_0_12px_rgba(251,191,36,0.3)]"
              : "border-border/60 bg-card"
          )}
        >
          {/* Zap icon pulses on XP gain */}
          <motion.div
            animate={xpPulse ? { rotate: [0, -15, 15, 0], scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.4 }}
          >
            <Zap className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
          </motion.div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1">
              <span className="font-bold text-foreground text-xs tabular-nums">{userXp.toLocaleString()}</span>
              <span className="text-muted-foreground text-[10px]">XP · Lv {userLevel}</span>
            </div>
            {/* Mini XP bar */}
            <div className="h-1 w-20 rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500"
                initial={{ width: 0 }}
                animate={{ width: `${xpProgressPct}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={xpPulse ? { boxShadow: "0 0 6px rgba(251,191,36,0.7)" } : {}}
              />
            </div>
          </div>
        </motion.div>

        {/* ── Streak display — prominent with fire emoji ── */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={cn(
            "hidden sm:flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm cursor-default",
            userStreak >= 7
              ? "border-orange-500/40 bg-orange-500/10"
              : "border-border/60 bg-card"
          )}
        >
          {/* Animated flame for streaks ≥ 1 */}
          {userStreak > 0 ? (
            <motion.span
              animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
              className="text-sm leading-none"
            >
              🔥
            </motion.span>
          ) : (
            <Flame className="h-3.5 w-3.5 text-orange-400" aria-hidden="true" />
          )}
          <span className={cn(
            "font-black text-base tabular-nums leading-none",
            userStreak >= 7 ? "text-orange-400" : "text-foreground"
          )}>
            {userStreak}
          </span>
          <span className="text-muted-foreground text-xs">day{userStreak !== 1 ? "s" : ""}</span>
        </motion.div>

        {/* Search button */}
        <button
          onClick={() => setShowSearch(true)}
          className="btn-ghost p-2 relative group"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
          <span
            className="absolute top-full right-0 mt-1 hidden group-hover:flex 
                       items-center gap-1 whitespace-nowrap rounded-md border border-border 
                       bg-card px-2 py-1 text-xs text-muted-foreground shadow-card"
          >
            <Command className="h-3 w-3" />K
          </span>
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="btn-ghost p-2 relative"
            aria-label={`Notifications${unreadCount > 0 ? ` (${unreadCount} unread)` : ""}`}
          >
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center 
                           justify-center rounded-full bg-rose-500 text-[10px] 
                           font-bold text-white"
              >
                {unreadCount}
              </motion.span>
            )}
          </button>

          {/* Notifications dropdown */}
          <AnimatePresence>
            {showNotifications && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowNotifications(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-80 z-50 
                             rounded-2xl border border-border bg-card shadow-card-xl"
                >
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <h3 className="font-semibold text-sm">Notifications</h3>
                    {unreadCount > 0 && (
                      <button className="text-xs text-primary hover:underline">
                        Mark all read
                      </button>
                    )}
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {MOCK_NOTIFICATIONS.map((notif) => (
                      <div
                        key={notif.id}
                        className={cn(
                          "flex gap-3 p-4 border-b border-border/50 last:border-0",
                          "hover:bg-accent transition-colors cursor-pointer",
                          !notif.read && "bg-primary/5"
                        )}
                      >
                        <div
                          className={cn(
                            "mt-1.5 h-2 w-2 shrink-0 rounded-full",
                            !notif.read ? "bg-primary" : "bg-transparent"
                          )}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-foreground">{notif.message}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {notif.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Theme toggle */}
        <ThemeToggle />

        {/* User avatar */}
        <a
          href="/profile"
          className="flex h-9 w-9 shrink-0 items-center justify-center
                     rounded-xl bg-gradient-to-br from-brand-400 to-purple-500
                     text-white text-sm font-bold ring-2 ring-border/60
                     hover:ring-border transition-all overflow-hidden"
          aria-label="Profile"
          title={userStats.firstName ?? "Profile"}
        >
          {userStats.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={userStats.imageUrl} alt="avatar" className="w-full h-full object-cover" />
          ) : (
            <span>{userStats.firstName ? userStats.firstName[0].toUpperCase() : "S"}</span>
          )}
        </a>
      </div>

      {/* ── Search overlay ── */}
      <AnimatePresence>
        {showSearch && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              onClick={() => { setShowSearch(false); setSearchQuery(""); }}
            />

            {/* Search modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed left-1/2 top-20 z-50 w-full max-w-2xl -translate-x-1/2 
                         rounded-2xl border border-border bg-card shadow-card-xl"
            >
              {/* Search input */}
              <div className="flex items-center gap-3 p-4 border-b border-border">
                <Search className="h-5 w-5 text-muted-foreground shrink-0" />
                <input
                  type="search"
                  placeholder="Search topics, vocabulary, days..."
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground
                             focus:outline-none text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Escape") { setShowSearch(false); setSearchQuery(""); }
                  }}
                />
                <button
                  onClick={() => { setShowSearch(false); setSearchQuery(""); }}
                  className="btn-ghost p-1.5 rounded-lg"
                  aria-label="Close search"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Search results */}
              <div className="max-h-96 overflow-y-auto">
                {!searchQuery.trim() ? (
                  /* Quick links when no query */
                  <div className="p-3">
                    <p className="text-xs font-medium text-muted-foreground px-2 mb-2 uppercase tracking-wider">
                      Quick Navigation
                    </p>
                    <div className="space-y-1">
                      {NAV_ITEMS.slice(0, 6).map((item) => (
                        <button
                          key={item.href}
                          onClick={() => handleSearchSelect(item.href)}
                          className="flex items-center gap-3 w-full rounded-xl px-3 py-2.5 text-left hover:bg-accent transition-colors"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <item.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">{item.label}</p>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : hasResults ? (
                  <div className="p-3 space-y-4">
                    {/* Matched pages */}
                    {searchResults.pages.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-muted-foreground px-2 mb-2 uppercase tracking-wider">
                          Pages
                        </p>
                        <div className="space-y-1">
                          {searchResults.pages.map((item) => (
                            <button
                              key={item.href}
                              onClick={() => handleSearchSelect(item.href)}
                              className="flex items-center gap-3 w-full rounded-xl px-3 py-2.5 text-left hover:bg-accent transition-colors"
                            >
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                <item.icon className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-foreground">{item.label}</p>
                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Matched days */}
                    {searchResults.days.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-muted-foreground px-2 mb-2 uppercase tracking-wider">
                          Days
                        </p>
                        <div className="space-y-1">
                          {searchResults.days.map((d) => (
                            <button
                              key={d.day}
                              onClick={() => handleSearchSelect(`/day/${d.day}`)}
                              className="flex items-center gap-3 w-full rounded-xl px-3 py-2.5 text-left hover:bg-accent transition-colors"
                            >
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-foreground">
                                  Day {d.day}: {d.title}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Go to Day {d.day} →
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-8 text-center text-muted-foreground">
                    <BookOpen className="h-8 w-8 mx-auto mb-2 opacity-40" />
                    <p className="text-sm">No results for &quot;{searchQuery}&quot;</p>
                    <p className="text-xs mt-1">Try searching for a day number or topic name</p>
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div className="flex items-center justify-between px-4 py-2.5 border-t border-border text-xs text-muted-foreground">
                <span>Press <kbd className="px-1 py-0.5 rounded bg-muted font-mono text-[10px]">↵</kbd> to navigate</span>
                <span>Press <kbd className="px-1 py-0.5 rounded bg-muted font-mono text-[10px]">Esc</kbd> to close</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
    </div>
  );
}
