"use client";
// Landing Curriculum - Shows the 75-day course structure
import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const WEEKS = [
  { week: "Week 1-2", days: "Days 1-10", theme: "Foundations", color: "bg-blue-500", topics: ["Basic of English", "Self Introduction", "Be Verb", "Has/Have", "Demonstrative Pronouns", "Revision + Practice"] },
  { week: "Week 3-4", days: "Days 11-20", theme: "Modal Verbs", color: "bg-purple-500", topics: ["Use of Want/Wanted", "Use of Let/Let's", "Would Like To", "Can/Should/May/Must", "Speaking Practice"] },
  { week: "Week 5-6", days: "Days 21-31", theme: "Advanced Modals", color: "bg-pink-500", topics: ["Used To/Could", "Should Have/Must Have", "Would Have/May Have", "Will/Shall", "Complete Modal Revision"] },
  { week: "Week 7-8", days: "Days 32-50", theme: "All 12 Tenses", color: "bg-emerald-500", topics: ["Present Simple/Continuous", "Present/Past Perfect", "Future Tenses", "Prepositions", "Passive Voice"] },
  { week: "Week 9-10", days: "Days 51-68", theme: "Advanced English", color: "bg-amber-500", topics: ["Advance Level Sentences", "500+ Verb List", "Idioms & Phrases", "Vocabulary (All Topics)", "Body/Food/Nature Words"] },
  { week: "Week 11", days: "Days 69-75", theme: "Writing & Final Test", color: "bg-rose-500", topics: ["Application Writing", "Letter/Email Writing", "Paragraph/Essay Writing", "Full Revision", "Complete Mock Test"] },
];

export function LandingCurriculum() {
  const [activeWeek, setActiveWeek] = useState(0);
  return (
    <section id="curriculum" className="section">
      <div className="page-container">
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title">
            Your Complete <span className="text-gradient-brand">75-Day Roadmap</span>
          </motion.h2>
          <p className="section-subtitle mx-auto mt-4">Structured week by week so you always know what&apos;s next.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Week selector */}
          <div className="flex lg:flex-col gap-2 lg:w-48 overflow-x-auto lg:overflow-visible">
            {WEEKS.map((w, i) => (
              <button key={i} onClick={() => setActiveWeek(i)}
                className={cn("rounded-xl px-4 py-3 text-left transition-all shrink-0 text-sm font-medium",
                  activeWeek === i ? `${w.color} text-white shadow-card` : "border border-border hover:bg-accent text-muted-foreground")}>
                <div className="font-bold">{w.week}</div>
                <div className="text-xs opacity-80">{w.days}</div>
              </button>
            ))}
          </div>
          {/* Week content */}
          <div className="flex-1">
            <motion.div key={activeWeek} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }}
              className="card-base rounded-2xl">
              <div className={`inline-flex items-center gap-2 rounded-full ${WEEKS[activeWeek].color} text-white px-4 py-1.5 text-sm font-semibold mb-4`}>
                <BookOpen className="h-4 w-4" /> {WEEKS[activeWeek].theme} — {WEEKS[activeWeek].days}
              </div>
              <div className="space-y-3">
                {WEEKS[activeWeek].topics.map((topic, i) => (
                  <motion.div key={topic} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-3 rounded-xl border border-border p-3 hover:border-primary/30 transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span className="text-sm font-medium text-foreground">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
