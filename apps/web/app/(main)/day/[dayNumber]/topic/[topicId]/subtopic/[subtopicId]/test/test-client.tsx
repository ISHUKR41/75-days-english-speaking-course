"use client";

// ============================================================
// Test Section Client Wrapper - Renders TestSection component
// Handles test completion, score logging, and router refresh
// ============================================================

// Import React hooks and router
import { useRouter } from "next/navigation";
// Import TestSection core component
import { TestSection } from "@/components/practice/test-section";

// Interface for component props
interface TestSectionClientProps {
  dayNumber: number;
  subtopicId: string;
  subtopicTitle: string;
  topicColor: string;
  userId: string;
}

// Client wrapper component
export function TestSectionClient({
  dayNumber,
  subtopicId,
  subtopicTitle,
  topicColor,
  userId,
}: TestSectionClientProps) {
  // Router for updating server components on test finish
  const router = useRouter();

  // Handle test completion callback
  const handleComplete = (score: number, xpEarned: number) => {
    console.log(`Test completed with score: ${score}%, XP: ${xpEarned}`);
    router.refresh();
  };

  return (
    <div className="container max-w-5xl mx-auto px-4 py-6">
      {/* Interactive test component */}
      <TestSection
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
