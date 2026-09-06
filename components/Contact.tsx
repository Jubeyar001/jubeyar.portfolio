"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { contact, profile } from "@/data/config";

export default function ContactSection() {
  const links = [
    { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone },
    ...(profile.linkedin
      ? [{ label: "LinkedIn", href: profile.linkedin, icon: Linkedin }]
      : []),
  ];

  return (
    <section id="contact" className="border-t border-border px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl italic leading-tight text-paper balance md:text-6xl"
        >
          {contact.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-md text-lg text-mist"
        >
          {contact.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <MagneticButton href={`mailto:${profile.email}`}>{contact.cta}</MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 text-sm text-mist transition-colors duration-300 hover:text-brass"
            >
              <link.icon size={16} />
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
