"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ChapterTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const fromOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);
  const toOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  const toY = useTransform(scrollYProgress, [0.5, 0.8], [10, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-[60vh] items-center justify-center overflow-hidden border-t border-border px-6"
    >
      <p className="absolute top-16 text-sm tracking-[0.2em] text-mist md:top-20">
        THEN I DISCOVERED SALES
      </p>
      <div className="relative h-16 w-full max-w-lg text-center">
        <motion.span
          style={{ opacity: fromOpacity }}
          className="absolute inset-0 font-display text-4xl italic text-mist md:text-5xl"
        >
          Conversation
        </motion.span>
        <motion.span
          style={{ opacity: toOpacity, y: toY }}
          className="absolute inset-0 font-display text-4xl italic text-brass md:text-5xl"
        >
          Opportunity
        </motion.span>
      </div>
    </section>
  );
}
