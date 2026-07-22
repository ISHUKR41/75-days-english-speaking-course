// ============================================================
// Subtopic Practice Page - Interactive practice with Speak & Type
// Supports real-time speech recognition, typing, hint system,
// positive/negative scoring, streak tracking, and immediate feedback.
// ============================================================

// Import Next.js navigation utilities for routing and error handling
import { notFound, redirect } from "next/navigation";
// Import safe authentication wrapper to ensure user is logged in
import { auth } from "@/lib/safe-auth";
// Import Metadata type for SEO optimization
import { Metadata } from "next";
// Import PracticeSection component which handles the interactive practice UI
import { PracticeSectionClient } from "./practice-client";
// Import static course configuration for day, topic, and subtopic metadata
import { COURSE_DAYS_DATA } from "@/data/course-content/days-config";

// Interface defining the route parameters passed by Next.js App Router
interface PracticePageParams {
  params: {
    dayNumber: string; // The day number in the 75-day course (1-75)
    topicId: string;   // Unique topic ID (e.g., d1-t1)
    subtopicId: string; // Unique subtopic ID (e.g., d1-t1-s1)
  };
}

// Dynamic metadata generator for search engines and page title
export async function generateMetadata({ params }: PracticePageParams): Promise<Metadata> {
  // Parse day number from params
  const dayNum = parseInt(params.dayNumber);
  // Find the day configuration in static master course data
  const day = COURSE_DAYS_DATA.find((d) => d.dayNumber === dayNum);
  // Return fallback title if day does not exist
  if (!day) return { title: "Practice Not Found" };

  // Find topic and subtopic
  const topic = day.topics.find((t) => t.id === params.topicId);
  const subtopic = topic?.subtopics.find((s) => s.id === params.subtopicId);

  // Return dynamic metadata title and description
  return {
    title: subtopic ? `Practice: ${subtopic.title} | Day ${dayNum}` : `Day ${dayNum} Practice`,
    description: `Interactive practice questions for ${subtopic?.title || "English lesson"} with voice speaking and typing options.`,
  };
}

// Main server component for the practice page
export default async function PracticePage({ params }: PracticePageParams) {
  // Authenticate user using safe auth helper
  const { userId } = await auth();
  // Redirect unauthenticated users to sign-in page (strict sign-in requirement)
  if (!userId) redirect("/sign-in");

  // Validate day number parameter
  const dayNum = parseInt(params.dayNumber);
  if (isNaN(dayNum) || dayNum < 1 || dayNum > 75) notFound();

  // Find day from static course configuration
  const day = COURSE_DAYS_DATA.find((d) => d.dayNumber === dayNum);
  if (!day) notFound();

  // Find topic from day topics
  const topic = day.topics.find((t) => t.id === params.topicId);
  if (!topic) notFound();

  // Find subtopic from topic subtopics
  const subtopic = topic.subtopics.find((s) => s.id === params.subtopicId);
  if (!subtopic) notFound();

  // Render client component for interactive practice flow
  return (
    <PracticeSectionClient
      dayNumber={dayNum}
      subtopicId={subtopic.id}
      subtopicTitle={subtopic.title}
      topicColor={topic.color || "#6272f1"}
      userId={userId}
    />
  );
}
