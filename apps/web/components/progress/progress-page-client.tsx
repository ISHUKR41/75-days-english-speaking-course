"use client";
// ============================================================
// Progress Page Client - Visual progress with charts and stats
// ============================================================

import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import { Award, BookOpen, Brain, Calendar, CheckCircle2, Flame, Target, TrendingUp, Zap } from "lucide-react";
import { DashboardStreak } from "@/components/dashboard/dashboard-streak";

// Mock data
const xpData = [
  { week: "W1", xp: 850, questions: 120, words: 280 },
  { week: "W2", xp: 1200, questions: 180, words: 380 },
  { week: "W3", xp: 980, questions: 150, words: 320 },
  { week: "W4", xp: 1450, questions: 220, words: 460 },
  { week: "W5", xp: 1680, questions: 260, words: 540 },
  { week: "W6", xp: 2100, questions: 310, words: 620 },
];

const skillData = [
  { skill: "Grammar", score: 78 },
  { skill: "Vocabulary", score: 85 },
  { skill: "Speaking", score: 62 },
  { skill: "Writing", score: 71 },
  { skill: "Reading", score: 88 },
  { skill: "Listening", score: 74 },
];

interface ProgressPageClientProps { userId: string; }

export function ProgressPageClient({ userId }: ProgressPageClientProps) {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          My Learning Progress
        </h1>
        <p className="text-muted-foreground mt-1">Track your complete journey across all 75 days</p>
      </motion.div>

      {/* Overview stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { icon: Calendar, label: "Days Completed", value: "1/75", color: "text-primary", bg: "bg-primary/10" },
          { icon: Flame, label: "Current Streak", value: "7 days", color: "text-orange-500", bg: "bg-orange-500/10" },
          { icon: Zap, label: "Total XP", value: "2,450", color: "text-gold-500", bg: "bg-gold-400/10" },
          { icon: Target, label: "Accuracy", value: "87%", color: "text-emerald-500", bg: "bg-emerald-500/10" },
        ].map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
            className="card-base rounded-2xl flex items-center gap-3">
            <div className={`rounded-xl p-2.5 ${stat.bg}`}>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <div>
              <p className={`text-xl font-black ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* XP over time */}
        <div className="lg:col-span-2 card-base rounded-2xl">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Zap className="h-4 w-4 text-gold-500" /> XP Progress Over 6 Weeks
          </h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={xpData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="week" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "12px" }} />
                <defs>
                  <linearGradient id="xpGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6272f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6272f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="xp" stroke="#6272f1" strokeWidth={2} fill="url(#xpGrad)" dot={{ fill: "#6272f1", r: 4 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Streak */}
        <DashboardStreak streakDays={7} />
      </div>

      {/* Skills radar + 75-day grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skill radar chart */}
        <div className="card-base rounded-2xl">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Brain className="h-4 w-4 text-purple-500" /> Skills Overview
          </h3>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="skill" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                <Radar dataKey="score" stroke="#6272f1" fill="#6272f1" fillOpacity={0.2} dot={{ fill: "#6272f1", r: 4 }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Day completion grid */}
        <div className="card-base rounded-2xl">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Calendar className="h-4 w-4 text-blue-500" /> 75-Day Overview
          </h3>
          <div className="grid grid-cols-10 gap-1.5">
            {Array.from({ length: 75 }, (_, i) => {
              const day = i + 1;
              const completed = day === 1;
              const current = day === 2;
              return (
                <div key={day} title={`Day ${day}`}
                  className={`h-6 w-full rounded-sm text-[8px] font-bold flex items-center justify-center transition-all cursor-pointer hover:scale-110
                    ${completed ? "bg-emerald-500 text-white" : current ? "bg-primary text-white animate-pulse" : "bg-muted text-muted-foreground"}`}>
                  {day}
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5"><div className="h-3 w-3 rounded-sm bg-emerald-500" /> Completed</div>
            <div className="flex items-center gap-1.5"><div className="h-3 w-3 rounded-sm bg-primary" /> Current</div>
            <div className="flex items-center gap-1.5"><div className="h-3 w-3 rounded-sm bg-muted" /> Locked</div>
          </div>
        </div>
      </div>
    </div>
  );
}
