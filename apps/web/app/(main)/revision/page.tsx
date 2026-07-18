import { Metadata } from "next"; import { auth } from "@clerk/nextjs/server"; import { redirect } from "next/navigation";
export const metadata: Metadata = { title: "Revision" };
export default async function RevisionPage() { const { userId } = await auth(); if (!userId) redirect("/sign-in"); return <div className="max-w-4xl mx-auto"><h1 className="text-2xl font-bold mb-6">🔄 Revision</h1><p className="text-muted-foreground">Review and revise what you have learned so far.</p></div>; }
