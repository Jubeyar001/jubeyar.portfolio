"use client";

import { motion } from "framer-motion";
import { about, profile } from "@/data/config";

export default function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-sm tracking-[0.2em] text-brass"
          >
            ABOUT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-3xl italic text-paper balance md:text-5xl"
          >
            {about.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-sm text-mist"
          >
            {profile.location}
          </motion.p>

          {/* Replace this block with an actual <img> or next/image once you have a photo. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex aspect-[4/5] max-w-[220px] items-center justify-center rounded-2xl border border-dashed border-border text-center text-xs text-mist"
          >
            Add your photo here
            <br />
            (/public/photo.jpg)
          </motion.div>
        </div>

        <div className="flex flex-col gap-6">
          {about.body.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="max-w-prose text-lg leading-relaxed text-mist"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
