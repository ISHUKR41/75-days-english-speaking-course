// ============================================================
// Subtopic Page - Server component entry point for lesson pages
// Fetches subtopic data from API, resolves prev/next navigation,
// then delegates rendering to the SubtopicLessonPage client component.
// Route: /day/[dayNumber]/topic/[topicId]/subtopic/[subtopicId]
// ============================================================
import { auth } from "@clerk/nextjs/server"; // Clerk server-side auth helper
import { redirect } from "next/navigation"; // Next.js redirect utility
import { SubtopicLessonPage } from "@/components/learning/subtopic-lesson-page"; // Main lesson UI

// ─── Types ────────────────────────────────────────────────────────────────────
// Shape of a minimal subtopic object returned by the day API
interface SubtopicRef {
  id: string; // Subtopic unique ID
  orderIndex: number; // Position within topic
  title: string; // Display title
  topicId: string; // Parent topic ID
}

// Shape of a minimal topic returned by the day API
interface TopicRef {
  id: string; // Topic unique ID
  orderIndex: number; // Position within day
  subtopics?: SubtopicRef[]; // Nested subtopics
}

// Full day shape used for navigation resolution
interface DayDetail {
  id: string; // Day unique ID
  dayNumber: number; // Day number (1-75)
  title: string; // Day display title
  topics?: TopicRef[]; // All topics in this day
}

// ─── Page Props ───────────────────────────────────────────────────────────────
// Next.js 14 dynamic route params arrive as a promise
interface PageProps {
  params: Promise<{
    dayNumber: string; // Dynamic segment from URL
    topicId: string; // Dynamic segment from URL
    subtopicId: string; // Dynamic segment from URL
  }>;
}

// ─── Helper: Resolve prev / next subtopic IDs ─────────────────────────────────
// Walks all topics/subtopics in order to find the subtopic before and after
// the current one, enabling "Previous" and "Next" navigation buttons.
function resolvePrevNext(
  day: DayDetail | null,
  currentTopicId: string,
  currentSubtopicId: string
): {
  prevSubtopicId?: string; // ID of the previous subtopic (if any)
  nextSubtopicId?: string; // ID of the next subtopic (if any)
  prevTopicId?: string; // Topic ID of the previous subtopic
  nextTopicId?: string; // Topic ID of the next subtopic
} {
  if (!day?.topics) return {}; // Guard: no topics loaded

  // Flatten all subtopics in order across all topics
  const flat: { subtopicId: string; topicId: string }[] = [];
  const sorted = [...day.topics].sort((a, b) => a.orderIndex - b.orderIndex); // Sort topics by index

  for (const topic of sorted) { // Iterate topics in order
    const subs = [...(topic.subtopics || [])].sort(
      (a, b) => a.orderIndex - b.orderIndex // Sort subtopics within topic
    );
    for (const sub of subs) { // Iterate subtopics in order
      flat.push({ subtopicId: sub.id, topicId: topic.id }); // Add to flat list
    }
  }

  // Find position of the current subtopic in the flat list
  const idx = flat.findIndex((s) => s.subtopicId === currentSubtopicId);
  if (idx === -1) return {}; // Not found, return empty navigation

  const prev = idx > 0 ? flat[idx - 1] : undefined; // Previous entry
  const next = idx < flat.length - 1 ? flat[idx + 1] : undefined; // Next entry

  return {
    prevSubtopicId: prev?.subtopicId, // Previous subtopic ID
    nextSubtopicId: next?.subtopicId, // Next subtopic ID
    prevTopicId: prev?.topicId, // Previous subtopic's topic ID
    nextTopicId: next?.topicId, // Next subtopic's topic ID
  };
}

// ─── Server Component ─────────────────────────────────────────────────────────
export default async function SubtopicPage({ params }: PageProps) {
  // Await the params promise (Next.js 14 async params pattern)
  const { dayNumber, topicId, subtopicId } = await params;

  // 1. Authenticate the user — redirect to sign-in if not logged in
  const { userId } = await auth();
  if (!userId) redirect("/sign-in"); // Protect the page behind auth

  // 2. Fetch the full subtopic data (content, vocab, questions) from API
  let subtopicData = null; // Will hold full subtopic including content
  try {
    // Use absolute URL for server-side fetch (Next.js server components need full URLs)
    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL || // Production URL from env
      `http://localhost:${process.env.PORT || 3000}`; // Development fallback

    const res = await fetch(`${baseUrl}/api/subtopics/${subtopicId}`, {
      cache: "no-store", // Always fetch fresh data for lesson pages
    });

    if (res.ok) { // Only parse if HTTP 200
      const json = await res.json();
      subtopicData = json.data || json; // Handle both wrapped and unwrapped responses
    }
  } catch (err) {
    console.error("[SubtopicPage] Failed to fetch subtopic:", err); // Log for debugging
    // Continue without subtopicData — SubtopicLessonPage handles null gracefully
  }

  // 3. Fetch the day structure to resolve previous/next navigation
  let dayData: DayDetail | null = null; // Will hold day with topics/subtopics
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL ||
      `http://localhost:${process.env.PORT || 3000}`;

    const dayRes = await fetch(`${baseUrl}/api/days/${dayNumber}`, {
      cache: "no-store", // Fresh data for accurate navigation
    });

    if (dayRes.ok) { // Only parse on success
      const dayJson = await dayRes.json();
      dayData = dayJson.data || dayJson; // Unwrap API response
    }
  } catch (err) {
    console.error("[SubtopicPage] Failed to fetch day:", err); // Log for debugging
  }

  // 4. Resolve prev/next navigation from flat subtopic list
  const { prevSubtopicId, nextSubtopicId, prevTopicId, nextTopicId } =
    resolvePrevNext(dayData, topicId, subtopicId);

  // 5. Render the full lesson UI with all resolved data
  return (
    <SubtopicLessonPage
      dayNumber={parseInt(dayNumber, 10)} // Convert string param to number
      dayTitle={dayData?.title || `Day ${dayNumber}`} // Fallback title
      topicId={topicId} // Current topic ID for navigation
      subtopicId={subtopicId} // Current subtopic ID
      subtopicData={subtopicData} // Full subtopic with content, vocab, questions
      prevSubtopicId={prevSubtopicId} // Previous lesson link
      nextSubtopicId={nextSubtopicId} // Next lesson link
      prevTopicId={prevTopicId} // Topic context for prev navigation
      nextTopicId={nextTopicId} // Topic context for next navigation
      userId={userId} // Clerk user ID for tracking answers
    />
  );
}
