"use client";

import { motion } from "framer-motion";
import { Phone, PhoneCall, Sun, Laptop } from "lucide-react";

type VisualType = "phone" | "call" | "sun" | "laptop";

const iconMap = {
  phone: Phone,
  call: PhoneCall,
  sun: Sun,
  laptop: Laptop,
};

const glowMap = {
  phone: "shadow-[0_0_80px_-20px_rgba(214,169,74,0.35)]",
  call: "shadow-[0_0_90px_-18px_rgba(214,169,74,0.4)]",
  sun: "shadow-[0_0_120px_-10px_rgba(214,169,74,0.55)]",
  laptop: "shadow-[0_0_90px_-18px_rgba(214,169,74,0.4)]",
};

export default function ChapterVisual({ type }: { type: VisualType }) {
  const Icon = iconMap[type];

  return (
    <div className="relative flex h-64 w-full items-center justify-center md:h-80">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`relative flex h-40 w-40 items-center justify-center rounded-full border border-border bg-surface md:h-48 md:w-48 ${glowMap[type]}`}
      >
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border border-brass/20"
        />
        <Icon size={52} strokeWidth={1.2} className="text-brass" />
      </motion.div>
    </div>
  );
}
