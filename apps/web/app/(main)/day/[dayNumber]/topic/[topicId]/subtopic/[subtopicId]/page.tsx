// ============================================================
// Subtopic Lesson Page - The actual learning content page
// Shows: theory, examples, vocabulary, practice questions
// Each subtopic opens in its OWN full page
// ============================================================

import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/safe-auth";
import { Metadata } from "next";
import { SubtopicLesson } from "@/components/learning/subtopic-lesson";
import { COURSE_DAYS_DATA } from "@/data/course-content/days-config";

interface PageParams {
  params: {
    dayNumber: string;
    topicId: string;
    subtopicId: string;
  };
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const dayNum = parseInt(params.dayNumber);
  const day = COURSE_DAYS_DATA.find((d) => d.dayNumber === dayNum);
  if (!day) return { title: "Lesson Not Found" };

  const topic = day.topics.find((t) => t.id === params.topicId);
  const subtopic = topic?.subtopics.find((s) => s.id === params.subtopicId);

  return {
    title: subtopic?.title || `Day ${dayNum} Lesson`,
    description: subtopic?.description || `Learn ${subtopic?.title} in Day ${dayNum}`,
  };
}

export default async function SubtopicPage({ params }: PageParams) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const dayNum = parseInt(params.dayNumber);
  if (isNaN(dayNum) || dayNum < 1 || dayNum > 75) notFound();

  // Find the day, topic, and subtopic in static config
  const day = COURSE_DAYS_DATA.find((d) => d.dayNumber === dayNum);
  if (!day) notFound();

  const topic = day.topics.find((t) => t.id === params.topicId);
  if (!topic) notFound();

  const subtopic = topic.subtopics.find((s) => s.id === params.subtopicId);
  if (!subtopic) notFound();

  // Find next subtopic for navigation
  const currentIndex = topic.subtopics.indexOf(subtopic);
  const nextSubtopic = topic.subtopics[currentIndex + 1];
  const prevSubtopic = topic.subtopics[currentIndex - 1];

  // Find next topic if no more subtopics
  const topicIndex = day.topics.indexOf(topic);
  const nextTopic = day.topics[topicIndex + 1];

  return (
    <SubtopicLesson
      dayNumber={dayNum}
      dayTitle={day.title}
      topic={topic}
      subtopic={subtopic}
      prevSubtopicId={prevSubtopic?.id}
      nextSubtopicId={nextSubtopic?.id}
      nextTopicId={nextTopic?.id}
      nextTopicFirstSubtopicId={nextTopic?.subtopics[0]?.id}
      userId={userId}
    />
  );
}
