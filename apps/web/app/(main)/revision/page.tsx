// ============================================================
// Revision Page
// Smart revision system: Flashcards, Quick Quiz, Grammar Rules
// Builds long-term retention through spaced repetition
// ============================================================

import { Metadata } from "next";
import { auth } from "@/lib/safe-auth";
import { redirect } from "next/navigation";
import { RevisionClient } from "@/components/revision/revision-client";

export const metadata: Metadata = {
  title: "Revision — 75 Days Hard English",
  description:
    "Review and reinforce everything you have learned — flashcards, quick quiz, and grammar rules reference.",
};

export default async function RevisionPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return <RevisionClient userId={userId} />;
}
