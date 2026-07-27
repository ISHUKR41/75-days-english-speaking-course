"use client";
// ============================================================
// Dashboard Chart - Weekly XP and questions chart with real data
// Uses Recharts for interactive, animated charts
// ============================================================

import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────
interface WeeklyDataPoint {
  day: string;
  xp: number;
  questions: number;
}

interface DashboardChartProps {
  weeklyData?: WeeklyDataPoint[];
}

// Tab options for chart type
type ChartTab = "xp" | "questions";

// Custom tooltip for the chart
const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number; dataKey: string }>;
  label?: string;
}) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-xl border border-border bg-card px-4 py-3 shadow-lg">
      <p className="text-sm font-semibold text-foreground mb-1">{label}</p>
      {payload.map((entry) => (
        <p key={entry.dataKey} className="text-xs text-muted-foreground">
          <span className="font-medium text-primary">{entry.value}</span>
          {" "}
          {entry.dataKey === "xp" ? "XP earned" : "questions answered"}
        </p>
      ))}
    </div>
  );
};

export function DashboardChart({ weeklyData }: DashboardChartProps) {
  const [activeTab, setActiveTab] = useState<ChartTab>("xp");

  const tabs: { key: ChartTab; label: string; color: string }[] = [
    { key: "xp", label: "XP Earned", color: "#6272f1" },
    { key: "questions", label: "Questions", color: "#f59e0b" },
  ];

  // Use real data or empty placeholders for each day of the week
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const chartData: WeeklyDataPoint[] = weeklyData && weeklyData.length > 0
    ? weeklyData
    : dayNames.map((day) => ({ day, xp: 0, questions: 0 }));

  // Get color for active tab
  const activeColor = tabs.find((t) => t.key === activeTab)?.color || "#6272f1";

  // Calculate totals for display
  const total = chartData.reduce((sum, d) => sum + d[activeTab], 0);
  const avg = chartData.length > 0 ? Math.round(total / chartData.length) : 0;

  // Compare to previous best day
  const maxDay = chartData.reduce(
    (best, d) => (d[activeTab] > best[activeTab] ? d : best),
    chartData[0] ?? { day: "-", xp: 0, questions: 0 }
  );

  const hasData = total > 0;

  return (
    <div className="card-base rounded-2xl h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="font-semibold flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Weekly Performance
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">
            Last 7 days activity
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-1 rounded-xl border border-border bg-muted p-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-xs font-medium transition-all",
                activeTab === tab.key
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Summary numbers */}
      <div className="flex gap-6 mb-6 flex-wrap">
        <div>
          <p className="text-2xl font-bold text-foreground tabular-nums">{total.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground">
            Total this week
          </p>
        </div>
        <div className="pl-6 border-l border-border">
          <p className="text-2xl font-bold text-foreground tabular-nums">{avg.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground">Daily average</p>
        </div>
        {hasData && (
          <div className="pl-6 border-l border-border">
            <div className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
              <p className="text-2xl font-bold text-emerald-500 tabular-nums">
                {maxDay[activeTab].toLocaleString()}
              </p>
            </div>
            <p className="text-xs text-muted-foreground">Best day ({maxDay.day})</p>
          </div>
        )}
      </div>

      {/* Chart */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="h-48"
      >
        {hasData ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 5, right: 5, bottom: 0, left: -20 }}
            >
              {/* Grid lines */}
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
                vertical={false}
              />

              {/* X-axis (days) */}
              <XAxis
                dataKey="day"
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />

              {/* Y-axis (values) */}
              <YAxis
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />

              {/* Custom tooltip */}
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ stroke: activeColor, strokeWidth: 1, strokeDasharray: "4 4" }}
              />

              {/* Area fill */}
              <defs>
                <linearGradient id={`gradient-${activeTab}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={activeColor} stopOpacity={0.2} />
                  <stop offset="95%" stopColor={activeColor} stopOpacity={0} />
                </linearGradient>
              </defs>

              <Area
                type="monotone"
                dataKey={activeTab}
                stroke={activeColor}
                strokeWidth={2}
                fill={`url(#gradient-${activeTab})`}
                dot={{ fill: activeColor, strokeWidth: 2, r: 4 }}
                activeDot={{
                  r: 6,
                  fill: activeColor,
                  stroke: "hsl(var(--background))",
                  strokeWidth: 2,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          // Empty state
          <div className="h-full flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border">
            <BarChart3 className="h-10 w-10 text-muted-foreground/30" />
            <p className="text-sm text-muted-foreground text-center">
              Complete lessons to see your<br />weekly performance chart
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
