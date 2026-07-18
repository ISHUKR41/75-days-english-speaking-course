"use client";
// ============================================================
// LearnTab - Full teacher-style lesson content display
// Shows: motivation, concept, Hindi explanation, rules,
//        examples, mistakes, tips, stories, and summary.
// All with Framer Motion entrance animations.
// ============================================================
import { useState } from "react"; // React state for accordion sections
import { motion } from "framer-motion"; // Animation library
import {
  AlertTriangle, // Warning icon for common mistakes
  BookOpen, // Book icon for content sections
  CheckCircle2, // Checkmark icon for grammar rules
  Heart, // Heart icon for motivation section
  Lightbulb, // Lightbulb icon for memory tricks
  MessageSquare, // Chat icon for conversations
  Mic, // Mic icon for speaking tips
  Sparkles, // Sparkles for story section
  Target, // Target icon for professional usage
  ChevronDown, // Chevron for accordion
} from "lucide-react";
import { cn } from "@/lib/utils"; // CSS class merge utility

// ─── Types ────────────────────────────────────────────────────────────────────
interface LearnTabProps {
  content: SubtopicContent | null; // Lesson content from API (null shows skeleton)
  subtopicTitle: string; // Title displayed in headings
  topicColor: string; // Accent color for visual variety
  onComplete: () => void; // Callback to advance to next tab
}

// Mirrors the SubtopicContent DB model
interface SubtopicContent {
  whyLearnThis: string; // Motivation paragraph
  conceptExplanation: string; // Main teaching content
  simpleExplanation: string; // Simplified ELI5 version
  hindiExplanation: string; // Hindi-language explanation
  rules: string; // Grammar rules (text or JSON)
  exceptions: string; // Exceptions to rules
  sentencePatterns: string; // Sentence structure guide
  commonMistakes: string; // Common errors with corrections
  advancedMistakes: string; // Advanced-level mistakes
  speakingTips: string; // Tips for fluent speaking
  pronunciationGuide: string; // Pronunciation guide
  memoryTricks: string; // Mnemonics / memory tricks
  professionalUsage: string; // Office context examples
  dailyUsage: string; // Everyday usage examples
  officeUsage: string; // Office-specific examples
  interviewUsage: string; // Interview context examples
  emailUsage: string; // Email writing examples
  businessUsage: string; // Business context examples
  story: string; // Short story using the concepts
  essay: string; // Essay example
  dialogue: string; // Dialogue examples
  conversation: string; // Conversation templates
  summary: string; // Summary of key takeaways
}

// ─── Animation variants ───────────────────────────────────────────────────────
// Stagger children so each section fades in sequentially
const containerVariants = {
  hidden: { opacity: 0 }, // Parent starts invisible
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }, // Cascade effect
  },
};

// Each child fades and slides up individually
const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // Start below and invisible
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }, // Smooth 400ms slide
  },
};

// ─── Helper: Parse text that may be JSON array or plain text ─────────────────
// The DB stores rules/examples as either plain text or JSON arrays
function parseLines(raw: string | undefined | null): string[] {
  if (!raw) return []; // Guard against null/undefined
  try {
    const parsed = JSON.parse(raw); // Try JSON parse first
    if (Array.isArray(parsed)) return parsed.filter(Boolean); // Filter empty strings
  } catch {
    // Not JSON — split by newline and filter empty lines
  }
  return raw
    .split("\n") // Split plain text by newline
    .map((s) => s.trim()) // Trim whitespace
    .filter(Boolean); // Remove empty strings
}

// ─── Sub-components ───────────────────────────────────────────────────────────
// Reusable section card with icon, title, and content
function SectionCard({
  icon: Icon, // Lucide icon component
  title, // Section heading
  color, // Tailwind color class (e.g. "text-blue-500")
  bgColor, // Tailwind background class (e.g. "bg-blue-500/10")
  borderColor, // Tailwind border class (e.g. "border-blue-500/30")
  children, // Content inside the card
}: {
  icon: React.ElementType;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={itemVariants} // Use stagger item animation
      className={cn(
        "rounded-2xl border p-5 md:p-6", // Card base styles
        bgColor, // Background tint
        borderColor // Border color
      )}
    >
      {/* Section header: icon + title */}
      <div className="flex items-center gap-2 mb-4">
        <Icon className={cn("h-5 w-5 shrink-0", color)} aria-hidden="true" /> {/* Icon */}
        <h2 className={cn("text-lg font-bold", color)}>{title}</h2> {/* Title */}
      </div>
      {children} {/* Section content */}
    </motion.div>
  );
}

// Accordion section for long content that starts collapsed
function AccordionSection({
  title, // Section title
  icon: Icon, // Section icon
  color, // Icon color class
  children, // Hidden content
  defaultOpen = false, // Whether to start expanded
}: {
  title: string;
  icon: React.ElementType;
  color: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen); // Tracks expanded state

  return (
    <motion.div
      variants={itemVariants} // Fade-up animation
      className="rounded-2xl border border-border bg-card overflow-hidden" // Card base
    >
      {/* Accordion trigger button */}
      <button
        onClick={() => setOpen(!open)} // Toggle open/closed
        className="flex w-full items-center justify-between p-5 text-left" // Full-width button
        aria-expanded={open} // ARIA expanded state
      >
        <div className="flex items-center gap-2">
          <Icon className={cn("h-5 w-5", color)} aria-hidden="true" /> {/* Section icon */}
          <span className="font-bold text-foreground">{title}</span> {/* Section title */}
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-300", // Rotate animation
            open && "rotate-180" // Point up when open
          )}
        />
      </button>
      {/* Collapsible content */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }} // Start collapsed
          animate={{ height: "auto", opacity: 1 }} // Expand to natural height
          exit={{ height: 0, opacity: 0 }} // Collapse on close
          transition={{ duration: 0.3 }} // Smooth transition
          className="px-5 pb-5" // Inner padding
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}

// ─── Loading Skeleton ─────────────────────────────────────────────────────────
function LearnSkeleton() {
  return (
    <div className="space-y-4 animate-pulse"> {/* Pulse animation on skeleton */}
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="rounded-2xl border border-border bg-card p-6"> {/* Skeleton card */}
          <div className="h-5 bg-muted rounded-full w-1/3 mb-4" /> {/* Title skeleton */}
          <div className="space-y-2">
            <div className="h-3 bg-muted rounded-full w-full" /> {/* Line 1 */}
            <div className="h-3 bg-muted rounded-full w-5/6" /> {/* Line 2 */}
            <div className="h-3 bg-muted rounded-full w-4/6" /> {/* Line 3 */}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function LearnTab({
  content,
  subtopicTitle,
  topicColor,
  onComplete,
}: LearnTabProps) {

  // Show skeleton while content is loading
  if (!content) {
    return (
      <div className="space-y-4">
        <LearnSkeleton /> {/* Skeleton placeholder */}
        {/* Fallback message */}
        <div className="card-base rounded-2xl text-center py-8">
          <BookOpen className="h-10 w-10 text-muted-foreground mx-auto mb-3" /> {/* Icon */}
          <p className="text-muted-foreground text-sm">
            Lesson content is being prepared. Check back soon! {/* User-facing message */}
          </p>
          <button onClick={onComplete} className="btn-primary mt-4 mx-auto"> {/* Skip button */}
            Continue to Vocabulary →
          </button>
        </div>
      </div>
    );
  }

  // Parse structured fields from raw text
  const rules = parseLines(content.rules); // Grammar rules as array
  const mistakes = parseLines(content.commonMistakes); // Common mistakes as array
  const patterns = parseLines(content.sentencePatterns); // Sentence patterns
  const speakingTips = parseLines(content.speakingTips); // Speaking tips array
  const memoryTricks = parseLines(content.memoryTricks); // Memory tricks array

  return (
    <motion.div
      variants={containerVariants} // Stagger children
      initial="hidden" // Start hidden
      animate="visible" // Animate to visible
      className="space-y-5" // Vertical gap between sections
    >
      {/* ── 1. Why Learn This ── */}
      {content.whyLearnThis && (
        <SectionCard
          icon={Heart} // Heart icon for motivation
          title="Why Learn This? 💡" // Section title
          color="text-rose-500" // Rose color for motivation
          bgColor="bg-rose-500/5" // Subtle rose tint
          borderColor="border-rose-500/20" // Rose border
        >
          <p className="text-foreground leading-relaxed text-base"> {/* Readable body text */}
            {content.whyLearnThis} {/* Motivation paragraph from DB */}
          </p>
        </SectionCard>
      )}

      {/* ── 2. Main Concept Explanation ── */}
      {content.conceptExplanation && (
        <SectionCard
          icon={BookOpen} // Book icon for main content
          title={`Understanding ${subtopicTitle}`} // Dynamic title
          color="text-primary" // Primary brand color
          bgColor="bg-primary/5" // Subtle brand tint
          borderColor="border-primary/20" // Brand border
        >
          {/* Main explanation — may contain newlines */}
          <div className="prose prose-invert max-w-none">
            {content.conceptExplanation.split("\n\n").map((para, i) => (
              <p key={i} className="text-foreground leading-relaxed mb-4 last:mb-0 text-base"> {/* Paragraph spacing */}
                {para} {/* One paragraph per double-newline */}
              </p>
            ))}
          </div>
        </SectionCard>
      )}

      {/* ── 3. Simple (ELI5) Explanation ── */}
      {content.simpleExplanation && (
        <SectionCard
          icon={Sparkles} // Sparkles for simplified content
          title="Simply Put... 🌟" // Friendly heading
          color="text-emerald-500" // Emerald for clarity
          bgColor="bg-emerald-500/5" // Subtle tint
          borderColor="border-emerald-500/20" // Emerald border
        >
          <p className="text-foreground leading-relaxed text-base"> {/* Body text */}
            {content.simpleExplanation} {/* ELI5 explanation */}
          </p>
        </SectionCard>
      )}

      {/* ── 4. Hindi Explanation ── */}
      {content.hindiExplanation && (
        <SectionCard
          icon={MessageSquare} // Chat bubble for Hindi
          title="हिंदी में समझें 🇮🇳" // "Understand in Hindi" heading
          color="text-purple-500" // Purple for Hindi section
          bgColor="bg-purple-500/5" // Purple tint
          borderColor="border-purple-500/30" // Purple border (slightly stronger)
        >
          <p className="text-foreground leading-relaxed text-base font-medium"> {/* Slightly bolder for Hindi */}
            {content.hindiExplanation} {/* Hindi explanation text */}
          </p>
        </SectionCard>
      )}

      {/* ── 5. Grammar Rules ── */}
      {rules.length > 0 && (
        <SectionCard
          icon={CheckCircle2} // Checkmark for rules
          title="Grammar Rules 📋" // Rules section title
          color="text-blue-500" // Blue for rules
          bgColor="bg-blue-500/5" // Blue tint
          borderColor="border-blue-500/20" // Blue border
        >
          <ol className="space-y-3"> {/* Numbered list for rules */}
            {rules.map((rule, i) => (
              <li key={i} className="flex gap-3 items-start"> {/* Rule row */}
                {/* Rule number badge */}
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white mt-0.5"
                  style={{ backgroundColor: topicColor }} // Dynamic topic color badge
                >
                  {i + 1} {/* Rule number */}
                </span>
                <span className="text-foreground leading-relaxed text-sm">{rule}</span> {/* Rule text */}
              </li>
            ))}
          </ol>
        </SectionCard>
      )}

      {/* ── 6. Sentence Patterns ── */}
      {patterns.length > 0 && (
        <SectionCard
          icon={Target} // Target for patterns
          title="Sentence Patterns 🔧" // Patterns title
          color="text-amber-500" // Amber for patterns
          bgColor="bg-amber-500/5" // Amber tint
          borderColor="border-amber-500/20" // Amber border
        >
          <div className="space-y-2"> {/* Pattern list */}
            {patterns.map((pattern, i) => (
              <div
                key={i}
                className="rounded-xl bg-card border border-border px-4 py-3 font-mono text-sm text-foreground" // Monospace for patterns
              >
                {pattern} {/* Sentence pattern */}
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {/* ── 7. Common Mistakes ── */}
      {mistakes.length > 0 && (
        <SectionCard
          icon={AlertTriangle} // Warning icon for mistakes
          title="Common Mistakes to Avoid ⚠️" // Mistakes title
          color="text-rose-500" // Red for errors
          bgColor="bg-rose-500/5" // Red tint
          borderColor="border-rose-500/20" // Red border
        >
          <div className="space-y-2"> {/* Mistakes list */}
            {mistakes.map((mistake, i) => (
              <div
                key={i}
                className="flex gap-3 items-start rounded-xl bg-rose-500/10 border border-rose-500/20 p-3" // Error card
              >
                <span className="text-rose-500 text-lg shrink-0">✗</span> {/* Error symbol */}
                <p className="text-sm text-foreground">{mistake}</p> {/* Mistake description */}
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {/* ── 8. Speaking Tips ── */}
      {speakingTips.length > 0 && (
        <SectionCard
          icon={Mic} // Mic for speaking
          title="Speaking Tips 🎤" // Tips title
          color="text-emerald-500" // Emerald for positive advice
          bgColor="bg-emerald-500/5" // Emerald tint
          borderColor="border-emerald-500/20" // Emerald border
        >
          <div className="space-y-2"> {/* Tips list */}
            {speakingTips.map((tip, i) => (
              <div
                key={i}
                className="flex gap-3 items-start rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3" // Tip card
              >
                <span className="text-emerald-500 text-lg shrink-0">✓</span> {/* Check symbol */}
                <p className="text-sm text-foreground">{tip}</p> {/* Tip text */}
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {/* ── 9. Memory Tricks ── */}
      {memoryTricks.length > 0 && (
        <SectionCard
          icon={Lightbulb} // Lightbulb for memory tricks
          title="Memory Tricks 🧠" // Memory tricks title
          color="text-amber-500" // Amber for tricks
          bgColor="bg-amber-500/5" // Amber tint
          borderColor="border-amber-500/20" // Amber border
        >
          <div className="space-y-3"> {/* Tricks list */}
            {memoryTricks.map((trick, i) => (
              <div
                key={i}
                className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4" // Trick card
              >
                <p className="text-sm text-foreground font-medium">{trick}</p> {/* Memory trick */}
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {/* ── 10. Professional & Daily Usage ── */}
      {(content.professionalUsage || content.dailyUsage) && (
        <AccordionSection
          icon={Target} // Target icon
          title="Usage Examples 💼" // Examples title
          color="text-blue-500" // Blue for examples
          defaultOpen={false} // Start collapsed to save space
        >
          <div className="space-y-4">
            {/* Professional usage */}
            {content.professionalUsage && (
              <div>
                <h4 className="text-sm font-bold text-blue-400 mb-2">🏢 Professional / Office</h4> {/* Sub-heading */}
                <p className="text-sm text-foreground leading-relaxed">{content.professionalUsage}</p> {/* Examples */}
              </div>
            )}
            {/* Daily usage */}
            {content.dailyUsage && (
              <div>
                <h4 className="text-sm font-bold text-emerald-400 mb-2">🏠 Daily Life</h4> {/* Sub-heading */}
                <p className="text-sm text-foreground leading-relaxed">{content.dailyUsage}</p> {/* Examples */}
              </div>
            )}
            {/* Office examples */}
            {content.officeUsage && (
              <div>
                <h4 className="text-sm font-bold text-purple-400 mb-2">💻 Office Conversations</h4> {/* Sub-heading */}
                <p className="text-sm text-foreground leading-relaxed">{content.officeUsage}</p> {/* Examples */}
              </div>
            )}
            {/* Interview examples */}
            {content.interviewUsage && (
              <div>
                <h4 className="text-sm font-bold text-amber-400 mb-2">🤝 Interview</h4> {/* Sub-heading */}
                <p className="text-sm text-foreground leading-relaxed">{content.interviewUsage}</p> {/* Examples */}
              </div>
            )}
            {/* Email examples */}
            {content.emailUsage && (
              <div>
                <h4 className="text-sm font-bold text-pink-400 mb-2">📧 Email Writing</h4> {/* Sub-heading */}
                <p className="text-sm text-foreground leading-relaxed">{content.emailUsage}</p> {/* Examples */}
              </div>
            )}
          </div>
        </AccordionSection>
      )}

      {/* ── 11. Story ── */}
      {content.story && (
        <AccordionSection
          icon={Sparkles} // Sparkles for story
          title="Story Time 📖" // Story section title
          color="text-pink-500" // Pink for story
          defaultOpen={false} // Collapsed by default
        >
          <div className="prose prose-invert max-w-none"> {/* Story prose */}
            {content.story.split("\n\n").map((para, i) => (
              <p key={i} className="text-foreground leading-relaxed mb-3 last:mb-0 text-sm"> {/* Paragraph */}
                {para} {/* Story paragraph */}
              </p>
            ))}
          </div>
        </AccordionSection>
      )}

      {/* ── 12. Conversation / Dialogue ── */}
      {(content.dialogue || content.conversation) && (
        <AccordionSection
          icon={MessageSquare} // Chat icon for dialogue
          title="Conversations & Dialogues 💬" // Dialogue title
          color="text-cyan-500" // Cyan for conversations
          defaultOpen={false} // Collapsed
        >
          <div className="space-y-4">
            {content.dialogue && (
              <pre className="whitespace-pre-wrap text-sm text-foreground font-sans leading-relaxed"> {/* Preserve formatting */}
                {content.dialogue} {/* Raw dialogue text */}
              </pre>
            )}
            {content.conversation && (
              <pre className="whitespace-pre-wrap text-sm text-foreground font-sans leading-relaxed mt-4">
                {content.conversation} {/* Conversation template */}
              </pre>
            )}
          </div>
        </AccordionSection>
      )}

      {/* ── 13. Essay ── */}
      {content.essay && (
        <AccordionSection
          icon={BookOpen} // Book for essay
          title="Essay Example ✍️" // Essay title
          color="text-violet-500" // Violet for essay
          defaultOpen={false} // Collapsed
        >
          <div className="prose prose-invert max-w-none">
            {content.essay.split("\n\n").map((para, i) => (
              <p key={i} className="text-foreground leading-relaxed mb-3 last:mb-0 text-sm"> {/* Paragraph */}
                {para} {/* Essay paragraph */}
              </p>
            ))}
          </div>
        </AccordionSection>
      )}

      {/* ── 14. Summary ── */}
      {content.summary && (
        <SectionCard
          icon={CheckCircle2} // Checkmark for summary
          title="Summary & Key Takeaways ✅" // Summary title
          color="text-emerald-500" // Emerald for completion
          bgColor="bg-emerald-500/5" // Emerald tint
          borderColor="border-emerald-500/30" // Stronger border for emphasis
        >
          <p className="text-foreground leading-relaxed font-medium"> {/* Slightly bold summary */}
            {content.summary} {/* Summary text */}
          </p>
        </SectionCard>
      )}

      {/* ── Complete button ── */}
      <motion.div
        variants={itemVariants} // Fade up with rest of content
        className="pt-4" // Extra top padding
      >
        <button
          onClick={onComplete} // Advance to vocabulary tab
          className="btn-primary w-full py-4 text-base font-bold" // Full-width primary button
        >
          Continue to Vocabulary →  {/* CTA text */}
        </button>
      </motion.div>
    </motion.div>
  );
}
