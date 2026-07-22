"use client";

// ============================================================
// Practice Section Client Wrapper - Renders PracticeSection
// Handles completion routing and state updating
// ============================================================

// Import React hooks
import { useRouter } from "next/navigation";
// Import PracticeSection core component
import { PracticeSection } from "@/components/practice/practice-section";

// Interface for component props
interface PracticeSectionClientProps {
  dayNumber: number;
  subtopicId: string;
  subtopicTitle: string;
  topicColor: string;
  userId: string;
}

// Client wrapper component
export function PracticeSectionClient({
  dayNumber,
  subtopicId,
  subtopicTitle,
  topicColor,
  userId,
}: PracticeSectionClientProps) {
  // Router instance for navigation
  const router = useRouter();

  // Handle practice completion callback
  const handleComplete = (score: number) => {
    // Log completion
    console.log(`Practice completed with score: ${score}`);
    // Refresh router data to update progress
    router.refresh();
  };

  return (
    <div className="container max-w-5xl mx-auto px-4 py-6">
      {/* Interactive practice component with voice and text mode */}
      <PracticeSection
        dayNumber={dayNumber}
        subtopicId={subtopicId}
        subtopicTitle={subtopicTitle}
        topicColor={topicColor}
        userId={userId}
        onComplete={handleComplete}
      />
    </div>
  );
}
