// ============================================================
// Vocabulary Page - Browse all 75-day vocabulary
// ============================================================

import { Metadata } from "next";
import { auth } from "@/lib/safe-auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { VocabularyClient } from "@/components/vocabulary/vocabulary-client";

export const metadata: Metadata = {
  title: "Vocabulary Bank",
  description: "Browse and study all vocabulary words from your 75-day course",
};

async function getVocabData() {
  try {
    const [words, days] = await Promise.all([
      db.dayVocabulary.findMany({
        take: 200,
        orderBy: [{ day: { dayNumber: "asc" } }, { word: "asc" }],
        include: {
          day: { select: { dayNumber: true, title: true } },
        },
      }),
      db.day.findMany({
        orderBy: { dayNumber: "asc" },
        select: { id: true, dayNumber: true, title: true },
      }),
    ]);

    return { words, days };
  } catch {
    return { words: [], days: [] };
  }
}

export default async function VocabPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const { words, days } = await getVocabData();

  return (
    <div className="py-2">
      <VocabularyClient initialWords={words as any} days={days} />
    </div>
  );
}
