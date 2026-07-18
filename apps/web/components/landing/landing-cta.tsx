"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export function LandingCTA() {
  return (
    <section className="section">
      <div className="page-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-purple-600 to-pink-600 p-8 md:p-12 text-center text-white">
          <div className="absolute inset-0 grid-dots opacity-20" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">Start Speaking English Today</h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto">75 days. 200 words daily. 80+ practice questions. One goal — fluent English.</p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/sign-up" className="inline-flex items-center gap-2 bg-white text-primary font-bold rounded-2xl px-8 py-4 text-base hover:bg-white/90 transition-colors shadow-card-xl">
                <Zap className="h-5 w-5" /> Start Free — Day 1 Now <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
            <p className="text-white/60 text-sm">No credit card required · Free forever · Start in 30 seconds</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
