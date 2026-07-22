// ============================================================
// Subtopic Vocabulary Page - Dedicated vocabulary learning view
// Displays 200+ unique topic words with audio pronunciation (TTS),
// Hindi meanings, IPA symbols, example sentences, and flashcards.
// ============================================================

// Import Next.js navigation utilities
import { notFound, redirect } from "next/navigation";
// Import safe auth wrapper
import { auth } from "@/lib/safe-auth";
// Import Metadata type for SEO
import { Metadata } from "next";
// Import VocabularySection component
import { VocabularySection } from "@/components/vocabulary/vocabulary-section";
// Import static course configuration
import { COURSE_DAYS_DATA } from "@/data/course-content/days-config";

// Interface for route parameters
interface VocabularyPageParams {
  params: {
    dayNumber: string;
    topicId: string;
    subtopicId: string;
  };
}

// Dynamic metadata generator for search engines
export async function generateMetadata({ params }: VocabularyPageParams): Promise<Metadata> {
  const dayNum = parseInt(params.dayNumber);
  const day = COURSE_DAYS_DATA.find((d) => d.dayNumber === dayNum);
  if (!day) return { title: "Vocabulary Not Found" };

  const topic = day.topics.find((t) => t.id === params.topicId);
  const subtopic = topic?.subtopics.find((s) => s.id === params.subtopicId);

  return {
    title: subtopic ? `Vocabulary: ${subtopic.title} | Day ${dayNum}` : `Day ${dayNum} Vocabulary`,
    description: `Master 200+ unique vocabulary words for ${subtopic?.title || "English lesson"} with Hindi translation and audio.`,
  };
}

// Main server component for subtopic vocabulary
export default async function SubtopicVocabularyPage({ params }: VocabularyPageParams) {
  // Enforce user authentication
  const { userId } = await auth();
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

  return (
    <div className="container max-w-5xl mx-auto px-4 py-6">
      {/* Interactive vocabulary section with speech audio and flashcards */}
      <VocabularySection
        dayNumber={dayNum}
        subtopicId={subtopic.id}
        subtopicTitle={subtopic.title}
        topicColor={topic.color || "#6272f1"}
        userId={userId}
      />
    </div>
  );
}
