// ============================================================
// Subtopic LEARN Page - Dedicated theory & concept learning view
// Opens as its own full page (not a tab) for better UX
// Includes: why learn, concept, rules, examples, story, dialogue
// Each section is richly formatted with animations and visuals
// ============================================================

// Import Next.js navigation helpers for routing and 404 handling
import { notFound, redirect } from "next/navigation";
// Import safe auth wrapper to enforce login requirement
import { auth } from "@/lib/safe-auth";
// Import Metadata type for SEO optimization
import { Metadata } from "next";
// Import the client-side learn page component
import { LearnPageClient } from "@/components/learning/learn-page-client";
// Import static course configuration (all 75 days)
import { COURSE_DAYS_DATA } from "@/data/course-content/days-config";

// ─── Route Params Type ────────────────────────────────────────
// Defines the shape of URL parameters passed by Next.js App Router
interface LearnPageParams {
  params: {
    dayNumber: string;   // Day number in the course (1-75)
    topicId: string;     // Unique topic ID (e.g., "d1-t1")
    subtopicId: string;  // Unique subtopic ID (e.g., "d1-t1-s1")
  };
}

// ─── SEO Metadata Generator ───────────────────────────────────
// Generates dynamic title and description for search engines
export async function generateMetadata({ params }: LearnPageParams): Promise<Metadata> {
  // Parse the day number from string to integer
  const dayNum = parseInt(params.dayNumber);
  // Find the day configuration in static course data
  const day = COURSE_DAYS_DATA.find((d) => d.dayNumber === dayNum);
  // Return fallback if day not found
  if (!day) return { title: "Lesson Not Found | 75 Days English" };

  // Find the topic within the day
  const topic = day.topics.find((t) => t.id === params.topicId);
  // Find the specific subtopic within the topic
  const subtopic = topic?.subtopics.find((s) => s.id === params.subtopicId);

  // Build rich SEO metadata
  return {
    title: subtopic
      ? `Learn: ${subtopic.title} | Day ${dayNum} | 75 Days Hard English`
      : `Day ${dayNum} Learn | 75 Days Hard English`,
    description: subtopic?.description
      ? `Learn ${subtopic.title}: ${subtopic.description}. Part of 75 Days Hard English Course - Day ${dayNum}: ${day.title}`
      : `Learn English with 75 Days Hard Course - Day ${dayNum}`,
    // Open Graph metadata for social sharing
    openGraph: {
      title: `Learn: ${subtopic?.title || `Day ${dayNum} Lesson`}`,
      description: subtopic?.description || `Day ${dayNum} of 75 Days Hard English`,
      type: "article",
    },
    // Twitter card metadata
    twitter: {
      card: "summary",
      title: `Learn: ${subtopic?.title || `Day ${dayNum} Lesson`}`,
      description: subtopic?.description || `Day ${dayNum} of 75 Days Hard English`,
    },
  };
}

// ─── Main Learn Page Server Component ────────────────────────
// This is a server component that validates params and renders the client
export default async function LearnPage({ params }: LearnPageParams) {
  // ── Authentication: Enforce login requirement ──────────────
  // No day content should be accessible without signing in
  const { userId } = await auth();
  // Redirect unauthenticated users to sign-in page
  if (!userId) redirect("/sign-in");

  // ── Validate day number parameter ─────────────────────────
  const dayNum = parseInt(params.dayNumber);
  // Show 404 if day number is invalid or out of range
  if (isNaN(dayNum) || dayNum < 1 || dayNum > 75) notFound();

  // ── Find the day in static course configuration ────────────
  const day = COURSE_DAYS_DATA.find((d) => d.dayNumber === dayNum);
  // Show 404 if day configuration doesn't exist
  if (!day) notFound();

  // ── Find the topic within the day ─────────────────────────
  const topic = day.topics.find((t) => t.id === params.topicId);
  // Show 404 if topic not found
  if (!topic) notFound();

  // ── Find the specific subtopic within the topic ───────────
  const subtopic = topic.subtopics.find((s) => s.id === params.subtopicId);
  // Show 404 if subtopic not found
  if (!subtopic) notFound();

  // ── Calculate navigation: prev/next subtopics ─────────────
  // Find the current subtopic's index within the topic
  const currentSubtopicIndex = topic.subtopics.indexOf(subtopic);
  // Get the previous subtopic (if any)
  const prevSubtopic = topic.subtopics[currentSubtopicIndex - 1];
  // Get the next subtopic (if any)
  const nextSubtopic = topic.subtopics[currentSubtopicIndex + 1];

  // ── Calculate navigation: prev/next topics ─────────────────
  // Find the current topic's index within the day
  const currentTopicIndex = day.topics.indexOf(topic);
  // Get the next topic (if any)
  const nextTopic = day.topics[currentTopicIndex + 1];

  // ── Render the client component with all data ──────────────
  return (
    <LearnPageClient
      // Pass day information
      dayNumber={dayNum}
      dayTitle={day.title}
      dayEmoji={day.emoji}
      // Pass topic information
      topic={topic}
      // Pass subtopic information
      subtopic={subtopic}
      // Pass navigation data for prev/next buttons
      prevSubtopicId={prevSubtopic?.id}
      nextSubtopicId={nextSubtopic?.id}
      nextTopicId={nextTopic?.id}
      nextTopicFirstSubtopicId={nextTopic?.subtopics[0]?.id}
      // Pass user ID for progress tracking
      userId={userId}
    />
  );
}
