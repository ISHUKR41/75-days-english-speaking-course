import { Metadata } from "next"; import { auth } from "@clerk/nextjs/server"; import { redirect } from "next/navigation";
export const metadata: Metadata = { title: "Writing Lab" };
export default async function WritingPage() { const { userId } = await auth(); if (!userId) redirect("/sign-in"); return <div className="max-w-4xl mx-auto"><h1 className="text-2xl font-bold mb-6">✍️ Writing Lab</h1><p className="text-muted-foreground">Practice English writing with structured exercises.</p></div>; }
