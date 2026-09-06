"use client";

import { motion } from "framer-motion";
import { lessons } from "@/data/config";

export default function Lessons() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-sm tracking-[0.2em] text-brass"
        >
          WHAT EXPERIENCE TAUGHT ME
        </motion.p>

        <div className="flex flex-col gap-16 md:gap-20">
          {lessons.map((lesson, i) => (
            <motion.div
              key={lesson.statement}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-2 border-b border-border pb-16 last:border-0 md:flex-row md:items-baseline md:justify-between md:gap-8"
            >
              <h3 className="font-display text-3xl italic text-paper md:text-4xl">
                {lesson.statement}
              </h3>
              <p className="max-w-xs text-sm text-mist md:text-right">{lesson.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
