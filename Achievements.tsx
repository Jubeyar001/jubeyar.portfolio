"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/config";

export default function Achievements() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
        {achievements.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <p className="font-display text-4xl text-brass md:text-5xl">{item.value}</p>
            <p className="mt-2 text-sm text-mist">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
