"use client";

import { motion } from "framer-motion";
import ChapterVisual from "./ChapterVisual";
import Counter from "./Counter";
import type { chapters } from "@/data/config";

type Chapter = (typeof chapters)[number];

export default function ChapterSection({ chapter, index }: { chapter: Chapter; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <section
      id={chapter.id}
      className="border-t border-border px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div className={reversed ? "md:order-2" : ""}>
          <ChapterVisual type={chapter.visual} />
        </div>

        <div className={reversed ? "md:order-1" : ""}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex flex-wrap items-baseline gap-3 text-sm text-mist"
          >
            <span className="font-display text-2xl text-brass">{chapter.year}</span>
            <span>{chapter.dateRange}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-sm text-paper"
          >
            {chapter.company}
            {chapter.campaign ? ` · ${chapter.campaign}` : ""}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mb-6 text-sm text-mist"
          >
            {chapter.role}
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl leading-tight text-paper balance md:text-4xl"
          >
            {chapter.heading}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-md text-base leading-relaxed text-mist"
          >
            {chapter.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3 text-sm text-mist"
          >
            {chapter.process.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-border px-3 py-1.5 text-paper">
                  {step}
                </span>
                {i < chapter.process.length - 1 && <span className="text-border">→</span>}
              </span>
            ))}
          </motion.div>

          {chapter.stats.length > 0 && (
            <div className="mt-10 flex gap-10">
              {chapter.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl text-paper">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs text-mist">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
