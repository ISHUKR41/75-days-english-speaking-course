// ============================================================
// Subtopic Test Page - Comprehensive 50-Question Graded Test
// Includes timer pressure, grade calculation, positive/negative score,
// XP rewards, and automatic database save.
// ============================================================

// Import Next.js navigation utilities
import { notFound, redirect } from "next/navigation";
// Import safe authentication wrapper
import { auth } from "@/lib/safe-auth";
// Import Metadata type for SEO
import { Metadata } from "next";
// Import TestSection client component wrapper
import { TestSectionClient } from "./test-client";
// Import static master course configuration
import { COURSE_DAYS_DATA } from "@/data/course-content/days-config";

// Interface for route parameters
interface TestPageParams {
  params: {
    dayNumber: string;
    topicId: string;
    subtopicId: string;
  };
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: TestPageParams): Promise<Metadata> {
  const dayNum = parseInt(params.dayNumber);
  const day = COURSE_DAYS_DATA.find((d) => d.dayNumber === dayNum);
  if (!day) return { title: "Test Not Found" };

  const topic = day.topics.find((t) => t.id === params.topicId);
  const subtopic = topic?.subtopics.find((s) => s.id === params.subtopicId);

  return {
    title: subtopic ? `Test: ${subtopic.title} | Day ${dayNum}` : `Day ${dayNum} Test`,
    description: `Comprehensive graded test for ${subtopic?.title || "lesson"}. Earn XP and unlock your next lesson!`,
  };
}

// Main server component for the test page
export default async function TestPage({ params }: TestPageParams) {
  // Authenticate user
  const { userId } = await auth();
  // Enforce mandatory sign-in requirement
  if (!userId) redirect("/sign-in");

  // Validate parameters
  const dayNum = parseInt(params.dayNumber);
  if (isNaN(dayNum) || dayNum < 1 || dayNum > 75) notFound();

  // Find day configuration
  const day = COURSE_DAYS_DATA.find((d) => d.dayNumber === dayNum);
  if (!day) notFound();

  // Find topic
  const topic = day.topics.find((t) => t.id === params.topicId);
  if (!topic) notFound();

  // Find subtopic
  const subtopic = topic.subtopics.find((s) => s.id === params.subtopicId);
  if (!subtopic) notFound();

  // Render client component for interactive test flow
  return (
    <TestSectionClient
      dayNumber={dayNum}
      subtopicId={subtopic.id}
      subtopicTitle={subtopic.title}
      topicColor={topic.color || "#6272f1"}
      userId={userId}
    />
  );
}
