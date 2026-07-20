"use client";
// ============================================================
// Writing Lab Client Component
// Full-featured writing practice: Email, Letter, Application,
// Paragraph, Story, Dialogue — with real-time feedback
// Inspired by Notion / Linear / Stripe UI patterns
// ============================================================

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  FileText,
  BookOpen,
  MessageSquare,
  Edit3,
  CheckCircle2,
  Zap,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Star,
  Clock,
  Target,
  Lightbulb,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Writing Exercises Database ───────────────────────────────
const WRITING_EXERCISES = [
  // ── Email Writing ─────────────────────────────────────────
  {
    id: "email-1",
    category: "Email Writing",
    categoryIcon: "📧",
    level: "Beginner",
    title: "Write a Formal Email to Your Boss",
    instruction:
      "Write a formal email to your manager requesting a one-day leave for tomorrow due to a personal emergency. Include: Subject line, greeting, reason, apology, and closing.",
    hindi:
      "अपने manager को कल की एक दिन की छुट्टी के लिए formal email लिखें। Subject line, greeting, कारण, माफी, और closing शामिल करें।",
    format: `Subject: ___________

Dear Mr./Ms. [Name],

I hope this email finds you well.

[Your reason for leave]

[Apology for inconvenience]

[How work will be managed]

Thank you for your understanding.

Yours sincerely,
[Your Name]
[Designation]`,
    sampleAnswer: `Subject: Leave Request for Tomorrow — Personal Emergency

Dear Mr. Sharma,

I hope this email finds you well.

I am writing to request a one-day leave for tomorrow, 20th July, due to a personal family emergency that requires my immediate attention.

I sincerely apologize for the short notice and any inconvenience this may cause. I have already informed my teammate Priya to handle any urgent tasks in my absence and will ensure all pending work is completed when I return.

I would be grateful if you could kindly approve this request.

Thank you for your understanding and support.

Yours sincerely,
Rahul Verma
Software Developer`,
    keyPoints: [
      "Always use 'Dear Mr./Ms. [Last Name]' — not 'Dear Sir/Madam' unless you don't know the name",
      "State your purpose clearly in the first sentence",
      "Apologize for any inconvenience caused",
      "Show responsibility by mentioning how work will be managed",
      "Close with 'Yours sincerely' for semi-formal and 'Yours faithfully' for fully formal",
    ],
    commonMistakes: [
      "'Respected Sir' is Indian English — use 'Dear Mr. [Name]' in professional settings",
      "Don't write 'I am writing this mail' — say 'I am writing this email'",
      "Always use 'Please' — not 'Kindly do the needful'",
    ],
    wordLimit: "80-120 words",
    timeLimit: 15,
    xp: 30,
  },
  {
    id: "email-2",
    category: "Email Writing",
    categoryIcon: "📧",
    level: "Intermediate",
    title: "Thank You Email After Job Interview",
    instruction:
      "Write a professional thank-you email to your interviewer after attending a job interview for a Software Engineer position at TechCorp.",
    hindi:
      "TechCorp में Software Engineer पद के लिए interview के बाद interviewer को professional thank-you email लिखें।",
    format: `Subject: ___________

Dear [Interviewer's Name],

[Thank them for the interview]

[Express interest in the role]

[Highlight one strength/quality]

[Express excitement about next steps]

[Closing]`,
    sampleAnswer: `Subject: Thank You — Software Engineer Interview at TechCorp

Dear Ms. Kapoor,

Thank you so much for taking the time to interview me yesterday for the Software Engineer position at TechCorp. It was a pleasure meeting you and learning more about the role and your team.

Our conversation further confirmed my enthusiasm for this opportunity. I am particularly excited about TechCorp's focus on AI-driven solutions, which aligns perfectly with my experience in machine learning and backend development.

I believe my skills in Python and cloud infrastructure would allow me to contribute meaningfully from day one.

I look forward to hearing about the next steps in the process. Please do not hesitate to contact me if you need any additional information.

Thank you again for your time and consideration.

Warm regards,
Arjun Mehta
+91-98765-43210`,
    keyPoints: [
      "Send within 24 hours of the interview",
      "Reference something specific from the conversation — it shows you were attentive",
      "Reiterate your key strength relevant to the role",
      "Keep it concise — 100-150 words is ideal",
    ],
    commonMistakes: [
      "Don't be overly informal ('Hey' or 'Hi' in a professional email)",
      "Avoid desperate language like 'Please select me'",
      "Don't restate your entire resume — pick one key point",
    ],
    wordLimit: "100-150 words",
    timeLimit: 18,
    xp: 40,
  },
  // ── Letter Writing ────────────────────────────────────────
  {
    id: "letter-1",
    category: "Letter Writing",
    categoryIcon: "✉️",
    level: "Beginner",
    title: "Write a Formal Complaint Letter",
    instruction:
      "Write a formal complaint letter to the manager of ABC Restaurant about poor food quality and rude service during your recent visit.",
    hindi:
      "ABC Restaurant के manager को खराब खाने की quality और rude service के बारे में formal complaint letter लिखें।",
    format: `[Your Address]
[Date]

The Manager,
ABC Restaurant,
[Address]

Subject: ___________

Dear Sir/Madam,

[Introduction — when you visited]

[Description of the problem]

[Impact on your experience]

[What you expect as resolution]

Yours faithfully,
[Your Name]`,
    sampleAnswer: `14, Green Park Colony
New Delhi — 110016
20th July 2026

The Manager,
ABC Restaurant,
Connaught Place, New Delhi — 110001

Subject: Complaint Regarding Poor Food Quality and Rude Service

Dear Sir/Madam,

I am writing to formally complain about the extremely disappointing experience I had at your restaurant on 18th July 2026.

I visited your establishment with my family for dinner. The food we ordered was stale and lacked proper seasoning. My chicken curry smelled unpleasant, indicating it was not fresh. Additionally, when I brought this to the attention of the waiter, he responded in a rude and dismissive manner.

This experience was highly unacceptable, especially given the premium prices you charge. Such poor service damages the reputation of your establishment.

I request a formal apology and a full refund of our bill amounting to ₹2,500. I also urge you to address the food quality standards and train your staff in basic customer service.

I look forward to a prompt response within 7 working days.

Yours faithfully,
Rohan Gupta`,
    keyPoints: [
      "Your address goes at the top right (or left) — recipient's address below it",
      "Date format: 20th July 2026 (formal) or 20/07/2026 (semi-formal)",
      "Subject line after the salutation",
      "Clearly describe the problem, impact, and expected resolution",
      "Use 'Yours faithfully' when salutation is 'Dear Sir/Madam'",
      "Use 'Yours sincerely' when you used a specific name",
    ],
    commonMistakes: [
      "Don't confuse 'Yours faithfully' and 'Yours sincerely' — the rule is: Faithfully = no name, Sincerely = with name",
      "Avoid emotional/aggressive language — be firm but professional",
    ],
    wordLimit: "150-200 words",
    timeLimit: 20,
    xp: 45,
  },
  // ── Application Writing ───────────────────────────────────
  {
    id: "application-1",
    category: "Application Writing",
    categoryIcon: "📝",
    level: "Beginner",
    title: "Leave Application to School Principal",
    instruction:
      "Write a formal leave application to your school principal requesting 3 days leave for a family wedding.",
    hindi:
      "अपने school principal को family wedding के लिए 3 दिन की छुट्टी की application लिखें।",
    format: `[Your Name]
Class [X], Section [A]
Roll No. [XX]
[Date]

The Principal,
[School Name]
[Address]

Subject: Application for Leave

Respected Sir/Madam,

[Introduction — who you are]

[Reason for leave]

[Dates of leave requested]

[Promise of completion of missed work]

Thanking you,
Yours obediently,
[Name]`,
    sampleAnswer: `Priya Sharma
Class 10, Section A
Roll No. 24
20th July 2026

The Principal,
Delhi Public School,
R.K. Puram, New Delhi — 110022

Subject: Application for Leave of 3 Days

Respected Ma'am,

I am Priya Sharma, a student of Class 10-A. I am writing to respectfully request a leave of absence from school for 3 days, from 22nd to 24th July 2026.

The reason for this request is that I need to attend my elder sister's wedding, which is a very important family occasion. The wedding ceremonies require my presence, and I am unable to attend school during these dates.

I assure you that I will complete all missed classwork and homework immediately upon my return. My parents are also fully aware of this request.

I kindly request you to grant me leave for the mentioned days.

Thanking you,
Yours obediently,
Priya Sharma`,
    keyPoints: [
      "Always address the principal as 'Respected Sir/Ma'am' in school applications",
      "State your class and roll number clearly",
      "Give exact dates — not just 'a few days'",
      "Promise to complete missed work — this shows responsibility",
      "Use 'Yours obediently' for school applications (student to teacher/principal)",
    ],
    commonMistakes: [
      "'Your faithfully' — correct spelling is 'Yours faithfully' (with an 's')",
      "Don't write the subject BEFORE the salutation — it goes AFTER",
      "Don't use 'I humbly request' repeatedly — once is enough",
    ],
    wordLimit: "120-150 words",
    timeLimit: 15,
    xp: 35,
  },
  // ── Paragraph Writing ─────────────────────────────────────
  {
    id: "paragraph-1",
    category: "Paragraph Writing",
    categoryIcon: "📄",
    level: "Beginner",
    title: "My Daily Routine",
    instruction:
      "Write a paragraph (8-10 sentences) describing your daily routine from morning to evening. Use present tense throughout.",
    hindi:
      "सुबह से शाम तक अपनी daily routine का एक paragraph लिखें (8-10 sentences)। पूरे paragraph में present tense use करें।",
    format: `Topic Sentence: I follow a disciplined daily routine that helps me stay productive and healthy.

Supporting sentences: [Your routine from morning to night]

Concluding sentence: [Why this routine is important to you]`,
    sampleAnswer: `I follow a disciplined daily routine that helps me stay productive and healthy. I wake up at 6:00 AM every morning and spend the first 30 minutes doing yoga and light exercises in the garden. After freshening up, I have a nutritious breakfast that includes fruits, eggs, and green tea. I leave for the office at 8:30 AM and reach by 9:00 AM. During office hours, I focus on completing important tasks first before moving to smaller responsibilities. I take a 30-minute lunch break at 1:00 PM, usually eating a homemade meal. After returning home at 7:00 PM, I spend quality time with my family, have dinner together, and then dedicate an hour to reading or learning something new. I usually go to bed by 10:30 PM to ensure 7-8 hours of quality sleep. This structured routine keeps me energetic, focused, and mentally balanced throughout the day.`,
    keyPoints: [
      "A good paragraph has: Topic Sentence → Supporting Details → Concluding Sentence",
      "Use time connectors: first, then, after that, next, finally, later",
      "Keep all verbs in simple present tense for routine descriptions",
      "Each sentence should build on the previous one",
    ],
    commonMistakes: [
      "Don't mix tenses — if you start with present, stay in present",
      "Avoid starting every sentence with 'I' — use variety: 'After that, I...' / 'Then...'",
      "Don't make the paragraph too short (under 5 sentences) or too long (over 15 sentences)",
    ],
    wordLimit: "100-150 words",
    timeLimit: 12,
    xp: 30,
  },
  {
    id: "paragraph-2",
    category: "Paragraph Writing",
    categoryIcon: "📄",
    level: "Intermediate",
    title: "The Importance of Learning English",
    instruction:
      "Write a well-structured paragraph about why learning English is important in today's world. Include at least 3 specific reasons with examples.",
    hindi:
      "आज की दुनिया में English सीखना क्यों ज़रूरी है, इस पर एक अच्छा paragraph लिखें। कम से कम 3 specific reasons और examples दें।",
    format: `Topic sentence: [State why English is important]
Point 1: [Career opportunities]
Point 2: [Global communication]
Point 3: [Access to knowledge]
Conclusion: [Your personal commitment]`,
    sampleAnswer: `In today's interconnected world, English has become not just a language but a key that unlocks countless opportunities. First, English is the primary language of business and career advancement. Most multinational companies require employees to communicate in English, and professionals who can write and speak confidently in English earn significantly higher salaries. Second, English enables global communication — it connects people from different countries, cultures, and backgrounds. Whether you are traveling abroad, attending an international conference, or making online friends, English is the common thread that brings people together. Third, approximately 80% of digital content, scientific research, and books are available only in English, meaning those who cannot read English are cut off from a vast ocean of knowledge. For these compelling reasons, mastering English is no longer optional — it is an essential life skill that directly impacts one's professional success, personal growth, and confidence in the modern world.`,
    keyPoints: [
      "The PEEL structure: Point → Explain → Example → Link back",
      "Use transition words: First, Second, Third, Furthermore, Additionally, Therefore",
      "End with a strong conclusion that ties everything together",
      "Specific numbers and statistics make your argument stronger",
    ],
    commonMistakes: [
      "Don't just list points without explaining them",
      "Avoid vague statements like 'English is very important' without saying WHY",
    ],
    wordLimit: "150-200 words",
    timeLimit: 20,
    xp: 50,
  },
  // ── Dialogue Writing ──────────────────────────────────────
  {
    id: "dialogue-1",
    category: "Dialogue Writing",
    categoryIcon: "💬",
    level: "Beginner",
    title: "Job Interview Dialogue",
    instruction:
      "Write a short dialogue (6-8 exchanges) between an interviewer and a candidate for a Marketing Manager position. Make it professional and natural.",
    hindi:
      "एक interviewer और Marketing Manager position के candidate के बीच 6-8 exchanges का dialogue लिखें। Professional और natural रखें।",
    format: `[Title of Dialogue]

Interviewer: [Opening]
Candidate: [Response]
Interviewer: [Question]
Candidate: [Answer]
... (continue for 6-8 exchanges)
Interviewer: [Closing]
Candidate: [Closing response]`,
    sampleAnswer: `A Job Interview for Marketing Manager Position

Interviewer: Good morning! Please have a seat. I'm Ms. Anita Roy, Head of Marketing.
Candidate: Good morning, Ms. Roy. Thank you for having me. I'm Vikram Sharma.

Interviewer: Great, Vikram. Could you start by telling me a little about yourself?
Candidate: Certainly. I have 5 years of experience in digital marketing, specializing in social media campaigns and content strategy. I currently work at MediaEdge, where I led a campaign that increased brand engagement by 40%.

Interviewer: That's impressive. Why are you interested in leaving your current role?
Candidate: I'm grateful for my experience there, but I'm looking for a leadership role where I can manage a team and work on larger-scale campaigns. Your company's focus on data-driven marketing aligns perfectly with my expertise.

Interviewer: How do you handle tight deadlines and multiple projects simultaneously?
Candidate: I use project management tools like Asana to prioritize tasks and set clear milestones. I also believe in transparent communication with the team so we stay aligned even under pressure.

Interviewer: Do you have any questions for us?
Candidate: Yes, I'd love to understand the size of the marketing team and what success looks like in this role in the first 90 days.

Interviewer: Great questions! We'll be in touch within the week.
Candidate: Thank you so much, Ms. Roy. It was a pleasure speaking with you today.`,
    keyPoints: [
      "A dialogue has a clear beginning (introduction), middle (substance), and end (closing)",
      "Each speaker's name goes before the colon: Name: [dialogue]",
      "Use natural contractions in dialogue: I'm, it's, we'll (NOT I am, it is, we will)",
      "Show personality through dialogue — don't make it robotic",
    ],
    commonMistakes: [
      "Don't make dialogue too formal — real conversation uses contractions",
      "Each exchange should be relevant and move the conversation forward",
      "Don't make responses too long — keep each line 1-3 sentences",
    ],
    wordLimit: "150-200 words",
    timeLimit: 18,
    xp: 45,
  },
  // ── Story Writing ─────────────────────────────────────────
  {
    id: "story-1",
    category: "Story Writing",
    categoryIcon: "📖",
    level: "Intermediate",
    title: "A Lesson Learned the Hard Way",
    instruction:
      "Write a short story (150-200 words) about a time when you (or a character) learned an important life lesson through a difficult experience. Include: Setting, Problem, Action, and Moral.",
    hindi:
      "एक short story (150-200 words) लिखें जब आपने (या किसी character ने) एक कठिन experience से ज़रूरी life lesson सीखा। Setting, Problem, Action, और Moral include करें।",
    format: `[Story Title]

Setting: [Where and when]
Rising action: [The problem that arose]
Climax: [The critical moment]
Resolution: [How it was resolved]
Moral: [The lesson learned]`,
    sampleAnswer: `The Shortcut That Cost More

Rajan was a bright engineering student who always looked for shortcuts. When his final year project submission approached, he decided to copy parts of his assignment from the internet instead of doing the original research his professor had assigned.

He submitted the project confidently, expecting top marks. But the next morning, his professor called him aside. "Rajan," she said quietly, "this is not your work." She showed him the identical text from three different websites. Her expression was more disappointed than angry.

Rajan stood there, ashamed. He had not just lost marks — he had lost his professor's trust, which he had built over three years of hard work.

The professor gave him one week to redo the entire project legitimately. Rajan worked harder than ever before. He stayed up late, did real research, and submitted original work that he was genuinely proud of.

The lesson hit him deeply: there are no real shortcuts in life. The effort you avoid today becomes the regret you carry tomorrow.`,
    keyPoints: [
      "A good story has: Character → Setting → Problem → Action → Resolution → Moral",
      "Use past tense for story writing",
      "Show emotions through actions, not just stating them ('He stood ashamed' not 'He felt ashamed')",
      "End with a clear, concise moral that follows naturally from the story",
    ],
    commonMistakes: [
      "Don't start with 'Once upon a time' in formal/school story writing",
      "Avoid a rushed ending — spend time on the resolution",
      "The moral should be written as a statement, not a question",
    ],
    wordLimit: "150-200 words",
    timeLimit: 25,
    xp: 60,
  },
];

const CATEGORIES = [
  { id: "all", label: "All", icon: "📝" },
  { id: "Email Writing", label: "Email", icon: "📧" },
  { id: "Letter Writing", label: "Letter", icon: "✉️" },
  { id: "Application Writing", label: "Application", icon: "📋" },
  { id: "Paragraph Writing", label: "Paragraph", icon: "📄" },
  { id: "Dialogue Writing", label: "Dialogue", icon: "💬" },
  { id: "Story Writing", label: "Story", icon: "📖" },
];

const LEVEL_COLOR: Record<string, string> = {
  Beginner: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Intermediate: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Advanced: "text-purple-400 bg-purple-400/10 border-purple-400/20",
};

interface WritingLabClientProps {
  userId: string;
}

export function WritingLabClient({ userId }: WritingLabClientProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeExercise, setActiveExercise] = useState<typeof WRITING_EXERCISES[0] | null>(null);
  const [userText, setUserText] = useState("");
  const [showSample, setShowSample] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selfScore, setSelfScore] = useState<number | null>(null);
  const [copiedSample, setCopiedSample] = useState(false);
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [totalXp, setTotalXp] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const filteredExercises =
    activeCategory === "all"
      ? WRITING_EXERCISES
      : WRITING_EXERCISES.filter((e) => e.category === activeCategory);

  const wordCount = userText.trim()
    ? userText.trim().split(/\s+/).length
    : 0;

  const handleStart = (exercise: typeof WRITING_EXERCISES[0]) => {
    setActiveExercise(exercise);
    setUserText("");
    setShowSample(false);
    setSubmitted(false);
    setSelfScore(null);
    setTimeout(() => textareaRef.current?.focus(), 100);
  };

  const handleSubmit = () => {
    if (userText.trim().length < 20) return;
    setSubmitted(true);
    setShowSample(true);
  };

  const handleSelfScore = (score: number) => {
    setSelfScore(score);
    if (activeExercise && !completedIds.has(activeExercise.id)) {
      setCompletedIds((prev) => new Set([...prev, activeExercise.id]));
      const xp = Math.round(activeExercise.xp * (score / 5));
      setTotalXp((prev) => prev + xp);
    }
  };

  const handleCopySample = () => {
    if (activeExercise) {
      navigator.clipboard.writeText(activeExercise.sampleAnswer);
      setCopiedSample(true);
      setTimeout(() => setCopiedSample(false), 2000);
    }
  };

  const handleBack = () => {
    setActiveExercise(null);
    setUserText("");
    setShowSample(false);
    setSubmitted(false);
    setSelfScore(null);
  };

  // ── Exercise Detail View ───────────────────────────────────
  if (activeExercise) {
    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Back + Title */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to exercises
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border bg-card p-6"
        >
          {/* Exercise header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{activeExercise.categoryIcon}</span>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {activeExercise.category}
                </span>
                <span
                  className={cn(
                    "rounded-full border px-2 py-0.5 text-xs font-medium",
                    LEVEL_COLOR[activeExercise.level]
                  )}
                >
                  {activeExercise.level}
                </span>
              </div>
              <h2 className="text-xl font-bold text-foreground">
                {activeExercise.title}
              </h2>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground shrink-0">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {activeExercise.timeLimit} min
              </span>
              <span className="flex items-center gap-1 text-gold-400">
                <Zap className="h-3.5 w-3.5" />
                {activeExercise.xp} XP
              </span>
            </div>
          </div>

          {/* Instructions */}
          <div className="rounded-xl bg-primary/5 border border-primary/20 p-4 mb-4">
            <p className="text-sm font-medium text-foreground mb-1">
              📌 Task:
            </p>
            <p className="text-sm text-foreground leading-relaxed">
              {activeExercise.instruction}
            </p>
          </div>

          {/* Hindi translation */}
          <div className="rounded-xl bg-muted/50 p-3 mb-4">
            <p className="text-xs font-medium text-muted-foreground mb-1">
              🇮🇳 Hindi मे:
            </p>
            <p className="text-sm text-foreground/80">{activeExercise.hindi}</p>
          </div>

          {/* Format guide */}
          <div className="mb-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              📐 Format Guide
            </p>
            <pre className="rounded-xl bg-muted/30 border border-border p-4 text-xs text-muted-foreground whitespace-pre-wrap font-mono leading-relaxed">
              {activeExercise.format}
            </pre>
          </div>

          {/* Word limit + time */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>
              📏 Word limit:{" "}
              <strong className="text-foreground">{activeExercise.wordLimit}</strong>
            </span>
            <span>
              ⏱️ Recommended time:{" "}
              <strong className="text-foreground">{activeExercise.timeLimit} minutes</strong>
            </span>
          </div>
        </motion.div>

        {/* Writing Area */}
        {!submitted && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border bg-card overflow-hidden"
          >
            <div className="border-b border-border px-4 py-3 flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">
                ✍️ Your Answer
              </p>
              <span
                className={cn(
                  "text-xs font-medium transition-colors",
                  wordCount > 0 ? "text-primary" : "text-muted-foreground"
                )}
              >
                {wordCount} words
              </span>
            </div>
            <textarea
              ref={textareaRef}
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
              placeholder="Start writing here... Take your time. Quality matters more than speed."
              className="w-full min-h-[320px] p-5 bg-transparent text-foreground placeholder:text-muted-foreground/50 text-sm leading-relaxed resize-none focus:outline-none"
            />
            <div className="border-t border-border p-4 flex items-center justify-between">
              <button
                onClick={() => setUserText("")}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Clear
              </button>
              <button
                onClick={handleSubmit}
                disabled={userText.trim().length < 20}
                className="btn-primary px-6 py-2.5 text-sm disabled:opacity-40"
              >
                <CheckCircle2 className="h-4 w-4" />
                Submit & Compare
              </button>
            </div>
          </motion.div>
        )}

        {/* After submission: show submitted text + sample */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Your submitted text */}
            <div className="rounded-2xl border border-primary/30 bg-primary/5 overflow-hidden">
              <div className="border-b border-primary/20 px-4 py-3 flex items-center gap-2">
                <Edit3 className="h-4 w-4 text-primary" />
                <p className="text-sm font-medium text-primary">Your Answer</p>
                <span className="ml-auto text-xs text-muted-foreground">
                  {wordCount} words
                </span>
              </div>
              <div className="p-5 text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                {userText}
              </div>
            </div>

            {/* Sample answer */}
            {showSample && (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 overflow-hidden">
                <div className="border-b border-emerald-500/20 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-emerald-400" />
                    <p className="text-sm font-medium text-emerald-400">
                      Sample Answer
                    </p>
                  </div>
                  <button
                    onClick={handleCopySample}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {copiedSample ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                    {copiedSample ? "Copied!" : "Copy"}
                  </button>
                </div>
                <div className="p-5 text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap">
                  {activeExercise.sampleAnswer}
                </div>
              </div>
            )}

            {/* Self-assessment */}
            {selfScore === null && (
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-sm font-semibold text-foreground mb-4">
                  🤔 How would you rate your answer compared to the sample?
                </p>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { score: 1, label: "Needs Work", color: "border-red-500/30 hover:bg-red-500/10 hover:border-red-500/50" },
                    { score: 2, label: "Basic", color: "border-orange-500/30 hover:bg-orange-500/10 hover:border-orange-500/50" },
                    { score: 3, label: "Good", color: "border-yellow-500/30 hover:bg-yellow-500/10 hover:border-yellow-500/50" },
                    { score: 4, label: "Very Good", color: "border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-500/50" },
                    { score: 5, label: "Excellent!", color: "border-emerald-500/30 hover:bg-emerald-500/10 hover:border-emerald-500/50" },
                  ].map((s) => (
                    <button
                      key={s.score}
                      onClick={() => handleSelfScore(s.score)}
                      className={cn(
                        "flex-1 min-w-[80px] rounded-xl border py-3 px-2 text-sm font-medium transition-all",
                        s.color
                      )}
                    >
                      {s.score} — {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Score result */}
            {selfScore !== null && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="rounded-2xl border border-gold-400/30 bg-gold-400/5 p-5 text-center"
              >
                <p className="text-3xl font-black text-gold-400 mb-1">
                  {selfScore}/5
                </p>
                <p className="text-sm text-foreground font-medium mb-3">
                  {selfScore >= 4
                    ? "Excellent work! Keep it up! 🌟"
                    : selfScore >= 3
                    ? "Good effort! Review the key points below. 👍"
                    : "Keep practicing! Read the sample and try again. 💪"}
                </p>
                <p className="text-sm text-gold-400 font-semibold">
                  +{Math.round(activeExercise.xp * (selfScore / 5))} XP earned!
                </p>
              </motion.div>
            )}

            {/* Key points */}
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="h-4 w-4 text-amber-400" />
                <p className="text-sm font-semibold text-foreground">
                  Key Points to Remember
                </p>
              </div>
              <ul className="space-y-2">
                {activeExercise.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common mistakes */}
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="h-4 w-4 text-red-400" />
                <p className="text-sm font-semibold text-red-400">
                  Common Mistakes to Avoid
                </p>
              </div>
              <ul className="space-y-2">
                {activeExercise.commonMistakes.map((mistake, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                    <span className="text-foreground/90">{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleBack}
                className="btn-secondary flex-1 py-3"
              >
                ← Back to Exercises
              </button>
              <button
                onClick={() => {
                  setUserText("");
                  setShowSample(false);
                  setSubmitted(false);
                  setSelfScore(null);
                  setTimeout(() => textareaRef.current?.focus(), 100);
                }}
                className="btn-primary flex-1 py-3"
              >
                <RotateCcw className="h-4 w-4" />
                Try Again
              </button>
            </div>
          </motion.div>
        )}
      </div>
    );
  }

  // ── Exercise List View ─────────────────────────────────────
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-foreground flex items-center gap-3">
            ✍️ Writing Lab
          </h1>
          <p className="text-muted-foreground mt-1">
            Master English writing — emails, letters, applications, paragraphs, and stories
          </p>
        </div>
        {totalXp > 0 && (
          <div className="flex items-center gap-2 rounded-2xl border border-gold-400/30 bg-gold-400/10 px-4 py-3">
            <Zap className="h-5 w-5 text-gold-400" />
            <div>
              <p className="text-lg font-black text-gold-400">{totalXp}</p>
              <p className="text-xs text-muted-foreground">XP earned today</p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-all border",
              activeCategory === cat.id
                ? "bg-primary text-white border-primary shadow-glow-brand"
                : "border-border text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Exercises", value: WRITING_EXERCISES.length, icon: "📝", color: "text-primary" },
          { label: "Completed", value: completedIds.size, icon: "✅", color: "text-emerald-400" },
          { label: "Categories", value: 6, icon: "📁", color: "text-blue-400" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-border bg-card p-4 text-center"
          >
            <p className="text-2xl font-black text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Exercise Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredExercises.map((exercise, i) => {
          const isCompleted = completedIds.has(exercise.id);
          return (
            <motion.div
              key={exercise.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className={cn(
                "rounded-2xl border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer",
                isCompleted
                  ? "border-emerald-500/30 bg-emerald-500/5"
                  : "border-border hover:border-primary/30"
              )}
              onClick={() => handleStart(exercise)}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{exercise.categoryIcon}</span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {exercise.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {isCompleted && (
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  )}
                  <span
                    className={cn(
                      "rounded-full border px-2 py-0.5 text-xs font-medium",
                      LEVEL_COLOR[exercise.level]
                    )}
                  >
                    {exercise.level}
                  </span>
                </div>
              </div>

              <h3 className="font-bold text-foreground mb-2 leading-snug">
                {exercise.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                {exercise.instruction}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {exercise.timeLimit}m
                  </span>
                  <span className="flex items-center gap-1 text-gold-400 font-medium">
                    <Zap className="h-3 w-3" />
                    {exercise.xp} XP
                  </span>
                  <span className="flex items-center gap-1">
                    <Target className="h-3 w-3" />
                    {exercise.wordLimit}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-primary">
                  {isCompleted ? "Redo" : "Start"}
                  <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Tips banner */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5"
      >
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="h-5 w-5 text-amber-400" />
          <p className="font-semibold text-foreground">Writing Pro Tips</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Read the format guide before you start — structure matters more than vocabulary",
            "Write first, edit later — don't stop mid-sentence to fix mistakes",
            "Compare your answer with the sample to identify gaps",
            "Aim for clarity first, then add detail and sophistication",
          ].map((tip, i) => (
            <p key={i} className="text-xs text-foreground/80 flex items-start gap-2">
              <span className="text-amber-400 shrink-0">→</span>
              {tip}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
