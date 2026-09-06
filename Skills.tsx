"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/config";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-sm tracking-[0.2em] text-brass"
        >
          SKILLS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-14 font-display text-3xl text-paper md:text-4xl"
        >
          What I bring to a conversation.
        </motion.h2>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ backgroundColor: "rgba(214,169,74,0.06)" }}
              className="group bg-ink p-8 transition-colors"
            >
              <h3 className="font-display text-xl text-paper transition-colors duration-300 group-hover:text-brass">
                {skill.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{skill.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
