"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { hero } from "@/data/config";

const words = hero.headline.split(" ");

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const wordVariant = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-28 md:px-10"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-sm tracking-[0.2em] text-mist"
      >
        {hero.subline.toUpperCase()}
      </motion.p>

      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl font-display text-[2.6rem] leading-[1.08] text-paper balance sm:text-6xl md:text-7xl"
      >
        {words.map((word, i) => (
          <span key={i} className="mr-[0.28em] inline-block overflow-hidden align-bottom">
            <motion.span variants={wordVariant} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="mt-8 max-w-md text-base leading-relaxed text-mist md:text-lg"
      >
        {hero.intro}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.3 }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <MagneticButton href="#story">Explore My Journey</MagneticButton>
        <MagneticButton href="#contact" variant="ghost">
          Let&rsquo;s Talk
        </MagneticButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-6 flex items-center gap-2 text-mist md:left-10"
      >
        <ChevronDown size={16} />
        <span className="text-xs tracking-widest">SCROLL</span>
      </motion.div>
    </section>
  );
}
