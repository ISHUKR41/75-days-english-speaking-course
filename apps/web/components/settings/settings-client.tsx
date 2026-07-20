"use client";
// ============================================================
// Settings Client - Sound, theme, notifications, language, etc.
// ============================================================

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
// useUser removed — we use safe API fetch instead
import { motion } from "framer-motion";
import {
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Monitor,
  Bell,
  Globe,
  Trash2,
  UserX,
  ChevronRight,
  Check,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/use-app-store";
import { useSound } from "@/hooks/use-sound";
import toast from "react-hot-toast";

const LANGUAGES = [
  { code: "en", label: "English (Default)" },
  { code: "hi", label: "Hindi" },
  { code: "te", label: "Telugu" },
  { code: "ta", label: "Tamil" },
  { code: "kn", label: "Kannada" },
  { code: "mr", label: "Marathi" },
  { code: "gu", label: "Gujarati" },
  { code: "bn", label: "Bengali" },
];

export function SettingsClient() {
  const { theme, setTheme } = useTheme();
  const { isSoundEnabled, toggleSound, playClick } = useSound();
  const { reset } = useAppStore();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const [notifications, setNotifications] = useState({
    dailyReminder: true,
    streakAlert: true,
    achievementAlert: true,
    weeklyReport: false,
  });
  const [language, setLanguage] = useState("en");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [isClearing, setIsClearing] = useState(false);

  const handleClearProgress = async () => {
    setIsClearing(true);
    try {
      reset();
      toast.success("Local progress cleared successfully");
    } catch {
      toast.error("Failed to clear progress");
    } finally {
      setIsClearing(false);
      setShowClearConfirm(false);
    }
  };

  const sectionClass =
    "rounded-2xl border border-border bg-card overflow-hidden";
  const rowClass =
    "flex items-center justify-between p-4 hover:bg-accent/30 transition-colors";
  const dividerClass = "h-px bg-border";

  return (
    // suppressHydrationWarning: theme/sound values come from localStorage,
    // so server HTML will never match client; suppress the mismatch warning
    <div className="max-w-2xl mx-auto space-y-6" suppressHydrationWarning>
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">⚙️ Settings</h1>
        <p className="text-muted-foreground mt-1">
          Customize your learning experience
        </p>
      </div>

      {/* Sound */}
      <div className={sectionClass}>
        <div className="p-4 border-b border-border">
          <h2 className="font-semibold">Sound</h2>
        </div>
        <div className={rowClass}>
          <div className="flex items-center gap-3">
            {/* Always Volume2 pre-mount (default soundEnabled=true), correct icon after mount */}
            {!mounted || isSoundEnabled ? (
              <Volume2 className="h-5 w-5 text-primary" />
            ) : (
              <VolumeX className="h-5 w-5 text-muted-foreground" />
            )}
            <div>
              <p className="font-medium text-sm">Sound Effects</p>
              <p className="text-xs text-muted-foreground">
                Play sounds for correct/wrong answers, level ups
              </p>
            </div>
          </div>
          {mounted && (
            <Toggle
              checked={isSoundEnabled}
              onChange={() => {
                toggleSound();
                setTimeout(() => {
                  if (!isSoundEnabled) playClick();
                }, 100);
              }}
            />
          )}
        </div>
      </div>

      {/* Theme */}
      <div className={sectionClass}>
        <div className="p-4 border-b border-border">
          <h2 className="font-semibold">Appearance</h2>
        </div>
        <div className="p-4">
          <p className="text-sm text-muted-foreground mb-3">Theme</p>
          <div className="grid grid-cols-3 gap-3">
            {(
              [
                { key: "light", label: "Light", icon: Sun },
                { key: "dark", label: "Dark", icon: Moon },
                { key: "system", label: "System", icon: Monitor },
              ] as const
            ).map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setTheme(key)}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-xl border p-4 text-sm font-medium transition-all",
                  theme === key
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:bg-accent"
                )}
              >
                <Icon className="h-5 w-5" />
                {label}
                {theme === key && <Check className="h-3 w-3" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className={sectionClass}>
        <div className="p-4 border-b border-border">
          <h2 className="font-semibold flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </h2>
        </div>
        {(
          [
            {
              key: "dailyReminder" as const,
              label: "Daily Reminder",
              desc: "Get reminded to study each day",
            },
            {
              key: "streakAlert" as const,
              label: "Streak Alert",
              desc: "Don't lose your streak!",
            },
            {
              key: "achievementAlert" as const,
              label: "Achievements",
              desc: "Celebrate when you earn badges",
            },
            {
              key: "weeklyReport" as const,
              label: "Weekly Report",
              desc: "Summary of your weekly progress",
            },
          ] as const
        ).map(({ key, label, desc }, i, arr) => (
          <div key={key}>
            <div className={rowClass}>
              <div>
                <p className="text-sm font-medium">{label}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
              <Toggle
                checked={notifications[key]}
                onChange={() =>
                  setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
                }
              />
            </div>
            {i < arr.length - 1 && <div className={dividerClass} />}
          </div>
        ))}
      </div>

      {/* Language */}
      <div className={sectionClass}>
        <div className="p-4 border-b border-border">
          <h2 className="font-semibold flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Language
          </h2>
        </div>
        <div className="p-4">
          <p className="text-xs text-muted-foreground mb-3">
            Hindi translations will appear in this language
          </p>
          <div className="grid grid-cols-2 gap-2">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={cn(
                  "flex items-center justify-between rounded-lg border px-3 py-2 text-sm transition-all",
                  language === lang.code
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:bg-accent"
                )}
              >
                <span>{lang.label}</span>
                {language === lang.code && <Check className="h-3 w-3" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Account info */}
      <div className={sectionClass}>
        <div className="p-4 border-b border-border">
          <h2 className="font-semibold">Account</h2>
        </div>
        <div className="p-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">
            D
          </div>
          <div>
            <p className="font-medium">Your Account</p>
            <p className="text-sm text-muted-foreground">Signed in</p>
          </div>
          <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      {/* Danger Zone */}
      <div className="rounded-2xl border border-red-500/30 bg-red-500/5 overflow-hidden">
        <div className="p-4 border-b border-red-500/20">
          <h2 className="font-semibold text-red-500 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Danger Zone
          </h2>
        </div>

        {/* Clear progress */}
        <div className="p-4">
          {!showClearConfirm ? (
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Clear Local Progress</p>
                <p className="text-xs text-muted-foreground">
                  Reset your local XP, level, and completed subtopics
                </p>
              </div>
              <button
                onClick={() => setShowClearConfirm(true)}
                className="flex items-center gap-2 rounded-lg border border-red-500/30 px-3 py-1.5 text-sm text-red-500 hover:bg-red-500/10 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
                Clear
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              <p className="text-sm text-red-500 font-medium">
                Are you sure? This cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleClearProgress}
                  disabled={isClearing}
                  className="flex-1 rounded-lg bg-red-500 text-white py-2 text-sm font-medium hover:bg-red-600 disabled:opacity-50"
                >
                  {isClearing ? "Clearing..." : "Yes, Clear"}
                </button>
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="flex-1 rounded-lg border border-border py-2 text-sm hover:bg-accent"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          )}
        </div>

        <div className={dividerClass} />

        {/* Account deletion */}
        <div className="p-4">
          {!showDeleteConfirm ? (
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Delete Account</p>
                <p className="text-xs text-muted-foreground">
                  Permanently delete your account and all data
                </p>
              </div>
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="flex items-center gap-2 rounded-lg border border-red-500/30 px-3 py-1.5 text-sm text-red-500 hover:bg-red-500/10 transition-colors"
              >
                <UserX className="h-4 w-4" />
                Delete
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              <p className="text-sm text-red-500 font-medium">
                This will permanently delete your account. This cannot be undone!
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    toast.error(
                      "Please contact support to delete your account."
                    );
                    setShowDeleteConfirm(false);
                  }}
                  className="flex-1 rounded-lg bg-red-500 text-white py-2 text-sm font-medium hover:bg-red-600"
                >
                  Contact Support
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 rounded-lg border border-border py-2 text-sm hover:bg-accent"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground pb-4">
        75 Days Hard English Course • Version 1.0.0
      </p>
    </div>
  );
}

// ─── Toggle Component ──────────────────────────────────────────
function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={cn(
        "relative h-6 w-11 rounded-full transition-all duration-200",
        checked ? "bg-primary" : "bg-muted"
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-all duration-200",
          checked ? "left-[22px]" : "left-0.5"
        )}
      />
    </button>
  );
}
