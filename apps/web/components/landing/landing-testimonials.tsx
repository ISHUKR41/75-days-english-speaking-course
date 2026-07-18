"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  { name: "Priya Sharma", role: "Software Engineer", text: "After 75 days, I speak English in my office meetings with full confidence. The daily vocabulary and practice questions are amazing!", stars: 5, city: "Bangalore" },
  { name: "Rahul Kumar", role: "MBA Student", text: "I used to make grammar mistakes in every sentence. Now I write emails and give presentations without fear. This course changed everything.", stars: 5, city: "Delhi" },
  { name: "Anjali Patel", role: "HR Manager", text: "The speaking practice with microphone feature is brilliant. I can now conduct interviews in English and communicate with international clients.", stars: 5, city: "Mumbai" },
  { name: "Vikash Singh", role: "Teacher", text: "Best English course I have ever seen. The Hindi explanations make it very easy to understand. My students love it too!", stars: 5, city: "Lucknow" },
  { name: "Meena Reddy", role: "Fresher", text: "I cracked my dream company's interview because of this course. The interview English section is especially helpful.", stars: 5, city: "Hyderabad" },
  { name: "Amir Khan", role: "Freelancer", text: "200 new words every day with examples is incredible. My vocabulary has grown so much in just one month.", stars: 5, city: "Pune" },
];

export function LandingTestimonials() {
  return (
    <section className="section bg-muted/30">
      <div className="page-container">
        <div className="text-center mb-12">
          <h2 className="section-title"><span className="text-gradient-brand">Students Love</span> This Course</h2>
          <p className="section-subtitle mx-auto mt-4">Join 12,800+ students already speaking fluent English</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="card-base rounded-2xl space-y-3">
              <div className="flex gap-0.5">{Array(t.stars).fill(0).map((_, j) => <Star key={j} className="h-4 w-4 fill-gold-400 text-gold-400" />)}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role} · {t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
