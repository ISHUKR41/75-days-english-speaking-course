"use client";
// ============================================================
// App Header - Top navigation bar for authenticated pages
// Shows: menu toggle, search, notifications, user menu
// ============================================================

import { useState } from "react";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Flame,
  Menu,
  Search,
  X,
  Zap,
  Star,
  Command,
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

// Mock notifications (will come from API)
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
  const { setOpen, open } = useSidebar();

  // Notification panel state
  const [showNotifications, setShowNotifications] = useState(false);
  // Search state
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Get current page title
  const pageTitle = PAGE_TITLES[pathname] || "75 Days English";

  // Count unread notifications
  const unreadCount = MOCK_NOTIFICATIONS.filter((n) => !n.read).length;

  // Mock user XP (will come from store/API)
  const userXp = 2450;
  const userStreak = 7;

  return (
    <header
      className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border
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
        {/* XP display */}
        <div
          className="hidden sm:flex items-center gap-1.5 rounded-full 
                     border border-border/60 bg-card px-3 py-1.5 text-sm"
        >
          <Zap className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
          <span className="font-semibold text-foreground">{userXp}</span>
          <span className="text-muted-foreground text-xs">XP</span>
        </div>

        {/* Streak display */}
        <div
          className="hidden sm:flex items-center gap-1.5 rounded-full 
                     border border-border/60 bg-card px-3 py-1.5 text-sm"
        >
          <Flame className="h-3.5 w-3.5 text-orange-400 animate-flicker" aria-hidden="true" />
          <span className="font-semibold text-foreground">{userStreak}</span>
          <span className="text-muted-foreground text-xs">days</span>
        </div>

        {/* Search button */}
        <button
          onClick={() => setShowSearch(true)}
          className="btn-ghost p-2 relative group"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
          {/* Keyboard shortcut hint */}
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
            {/* Unread badge */}
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
                {/* Backdrop */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowNotifications(false)}
                />

                {/* Panel */}
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-80 z-50 
                             rounded-2xl border border-border bg-card shadow-card-xl"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <h3 className="font-semibold text-sm">Notifications</h3>
                    {unreadCount > 0 && (
                      <button className="text-xs text-primary hover:underline">
                        Mark all read
                      </button>
                    )}
                  </div>

                  {/* Notification list */}
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
                        {/* Indicator dot */}
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

        {/* User menu (Clerk) */}
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-9 w-9 rounded-xl",
              userButtonTrigger: "rounded-xl focus:shadow-none",
            },
          }}
        />
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
              onClick={() => setShowSearch(false)}
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
                  placeholder="Search topics, vocabulary, grammar..."
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground
                             focus:outline-none text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button
                  onClick={() => setShowSearch(false)}
                  className="btn-ghost p-1.5 rounded-lg"
                  aria-label="Close search"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Search results placeholder */}
              <div className="p-4 text-sm text-muted-foreground text-center">
                {searchQuery ? (
                  <p>Searching for &quot;{searchQuery}&quot;...</p>
                ) : (
                  <p>Type to search for topics, words, grammar rules...</p>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
