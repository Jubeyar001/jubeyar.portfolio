"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { currentlyLearning } from "@/data/config";

export default function CurrentChapter() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div className="flex h-64 items-center justify-center md:h-80">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8 }}
            className="flex h-40 w-40 items-center justify-center rounded-full border border-border bg-surface md:h-48 md:w-48"
          >
            <BookOpen size={48} strokeWidth={1.2} className="text-brass" />
          </motion.div>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm tracking-[0.2em] text-brass"
          >
            {currentlyLearning.status.toUpperCase()}
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-3xl italic text-paper balance md:text-4xl"
          >
            {currentlyLearning.heading}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base text-paper"
          >
            {currentlyLearning.university}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-sm text-mist"
          >
            {currentlyLearning.degree} — {currentlyLearning.expectedGraduation}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-md text-base leading-relaxed text-mist"
          >
            {currentlyLearning.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex items-center gap-3 text-sm text-mist"
          >
            <span className="rounded-full border border-border px-3 py-1.5 text-paper">Work</span>
            <span className="text-border">+</span>
            <span className="rounded-full border border-border px-3 py-1.5 text-paper">
              Learning
            </span>
            <span className="text-border">=</span>
            <span className="rounded-full border border-brass px-3 py-1.5 text-brass">
              Growth
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
