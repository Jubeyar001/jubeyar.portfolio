"use client";

import { motion } from "framer-motion";

export default function StoryIntro() {
  return (
    <section id="story" className="mx-auto max-w-3xl px-6 py-32 md:px-10 md:py-48">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-sm tracking-[0.2em] text-brass"
      >
        MY JOURNEY
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display text-4xl italic leading-tight text-paper balance md:text-5xl"
      >
        It started with a conversation.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-prose text-lg leading-relaxed text-mist"
      >
        My professional journey didn&rsquo;t begin with a sales title. It began by learning how
        to listen, understand people, and solve problems.
      </motion.p>
    </section>
  );
}
