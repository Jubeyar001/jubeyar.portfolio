"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { timeline } from "@/data/config";

export default function Timeline() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="experience" className="border-t border-border px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-sm tracking-[0.2em] text-brass"
        >
          TIMELINE
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-14 font-display text-3xl text-paper md:text-4xl"
        >
          The path so far.
        </motion.h2>

        <div className="flex flex-col md:flex-row md:items-stretch md:gap-2">
          {timeline.map((item, i) => {
            const isActive = active === item.label;
            return (
              <motion.a
                key={item.label}
                href={item.chapterId ? `#${item.chapterId}` : "#about"}
                onMouseEnter={() => setActive(item.label)}
                onMouseLeave={() => setActive(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group flex flex-1 flex-col justify-between gap-6 border-t py-6 transition-colors duration-300 md:border-t-0 md:border-l md:px-6 md:py-2 ${
                  isActive ? "border-brass" : "border-border"
                }`}
              >
                <span
                  className={`font-display text-xl transition-colors duration-300 ${
                    isActive ? "text-brass" : "text-paper"
                  }`}
                >
                  {item.year}
                </span>
                <div>
                  <p className="text-base text-paper">{item.label}</p>
                  <p className="text-sm text-mist">{item.detail}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
