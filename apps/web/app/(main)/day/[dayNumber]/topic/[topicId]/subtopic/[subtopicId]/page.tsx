// ============================================================
// Subtopic Overview Page - Section selection hub
// Shows all 4 sections as clickable cards:
//   1. Learn   → /learn   (theory, concepts, rules)
//   2. Vocabulary → /vocabulary (words, flashcards)
//   3. Practice  → /practice  (type or speak answers)
//   4. Test      → /test      (graded 50-question test)
// Each section opens on its OWN full page
// ============================================================

// Import Next.js routing and error helpers
import { notFound, redirect } from "next/navigation";
// Import safe auth for login enforcement
import { auth } from "@/lib/safe-auth";
// Import Metadata type for SEO
import { Metadata } from "next";
// Import the section overview client component
import { SubtopicOverview } from "@/components/learning/subtopic-overview";
// Import static course configuration
import { COURSE_DAYS_DATA } from "@/data/course-content/days-config";
// Import database for progress tracking
import { db } from "@/lib/db";

// ─── Route Params Type ────────────────────────────────────────
interface SubtopicPageParams {
  params: {
    dayNumber: string;   // Day number (1-75)
    topicId: string;     // Topic ID (e.g., "d1-t1")
    subtopicId: string;  // Subtopic ID (e.g., "d1-t1-s1")
  };
}

// ─── SEO Metadata Generator ───────────────────────────────────
export async function generateMetadata({ params }: SubtopicPageParams): Promise<Metadata> {
  // Parse day number
  const dayNum = parseInt(params.dayNumber);
  // Find the day in static config
  const day = COURSE_DAYS_DATA.find((d) => d.dayNumber === dayNum);
  // Return fallback if not found
  if (!day) return { title: "Lesson Not Found | 75 Days English" };

  // Find topic and subtopic
  const topic = day.topics.find((t) => t.id === params.topicId);
  const subtopic = topic?.subtopics.find((s) => s.id === params.subtopicId);

  // Build rich SEO title and description
  return {
    title: subtopic
      ? `${subtopic.title} | Day ${dayNum} | 75 Days Hard English`
      : `Day ${dayNum} Lesson | 75 Days Hard English`,
    description: subtopic?.description
      ? `${subtopic.title}: ${subtopic.description}. Learn, practice, and test your English with 75 Days Hard Course.`
      : `English lesson for Day ${dayNum} of 75 Days Hard Course.`,
    // Open Graph for social sharing
    openGraph: {
      title: subtopic?.title || `Day ${dayNum} Lesson`,
      description: subtopic?.description || `Day ${dayNum} English lesson`,
      type: "article",
    },
  };
}

// ─── Main Subtopic Page Server Component ─────────────────────
export default async function SubtopicPage({ params }: SubtopicPageParams) {
  // ── Authentication enforcement ─────────────────────────────
  // No lesson content without signing in
  const { userId } = await auth();
  // Redirect to sign-in if not authenticated
  if (!userId) redirect("/sign-in");

  // ── Validate day number ────────────────────────────────────
  const dayNum = parseInt(params.dayNumber);
  // Show 404 for invalid day numbers
  if (isNaN(dayNum) || dayNum < 1 || dayNum > 75) notFound();

  // ── Find the day in static configuration ──────────────────
  const day = COURSE_DAYS_DATA.find((d) => d.dayNumber === dayNum);
  // 404 if day doesn't exist
  if (!day) notFound();

  // ── Find the topic ─────────────────────────────────────────
  const topic = day.topics.find((t) => t.id === params.topicId);
  // 404 if topic doesn't exist
  if (!topic) notFound();

  // ── Find the subtopic ──────────────────────────────────────
  const subtopic = topic.subtopics.find((s) => s.id === params.subtopicId);
  // 404 if subtopic doesn't exist
  if (!subtopic) notFound();

  // ── Calculate navigation context ──────────────────────────
  // Index of current subtopic within its topic
  const subtopicIndex = topic.subtopics.indexOf(subtopic);
  // Previous subtopic in the same topic
  const prevSubtopic = topic.subtopics[subtopicIndex - 1];
  // Next subtopic in the same topic
  const nextSubtopic = topic.subtopics[subtopicIndex + 1];
  // Index of current topic within the day
  const topicIndex = day.topics.indexOf(topic);
  // Next topic (for cross-topic navigation)
  const nextTopic = day.topics[topicIndex + 1];

  // ── Fetch user progress from database ─────────────────────
  // Track which sections the user has already completed
  let completedSections: string[] = [];
  try {
    // Find the user in the database
    const user = await db.user.findUnique({
      where: { clerkId: userId },
      select: { id: true },
    });

    if (user) {
      // Find the day record
      const dbDay = await db.day.findUnique({ where: { dayNumber: dayNum } });
      if (dbDay) {
        // Find the day's progress record
        const dayProgress = await db.dayProgress.findFirst({
          where: { userId: user.id, dayId: dbDay.id },
        });
        if (dayProgress) {
          // Find all completed subtopic sections
          const scores = await db.score.findMany({
            where: {
              userId: user.id,
              dayId: dbDay.id,
            },
            select: { activity: true, subtopicId: true },
          });
          // Extract which activities have been completed for this subtopic
          completedSections = scores
            .filter((s) => s.subtopicId === subtopic.id)
            .map((s) => s.activity);
        }
      }
    }
  } catch (err) {
    // Non-blocking: progress fetch failure doesn't prevent page from loading
    console.warn("Subtopic page: progress fetch skipped:", err);
  }

  // ── Render the section overview ────────────────────────────
  return (
    <SubtopicOverview
      // Day information
      dayNumber={dayNum}
      dayTitle={day.title}
      dayEmoji={day.emoji}
      // Topic information
      topic={topic}
      // Subtopic information
      subtopic={subtopic}
      // Navigation
      prevSubtopicId={prevSubtopic?.id}
      nextSubtopicId={nextSubtopic?.id}
      nextTopicId={nextTopic?.id}
      nextTopicFirstSubtopicId={nextTopic?.subtopics[0]?.id}
      // User data
      userId={userId}
      // Progress tracking
      completedSections={completedSections}
    />
  );
}
