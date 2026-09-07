"use client";

// The single restrained on-scroll reveal for section intros (DESIGN.md §4:
// "one page-load reveal, not fade-up on every section"). Applied ONLY around
// each section's heading + lead — never per-card, per-tag, or per-list-item.
// Respects prefers-reduced-motion by skipping the hidden initial state
// entirely (content never hidden, matching the pattern already established
// by the hero and the roster detail panel).

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_EXPO_OUT } from "@/lib/motion";

export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: EASE_EXPO_OUT }}
    >
      {children}
    </motion.div>
  );
}
