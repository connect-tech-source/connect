"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

export default function Reveal({
  children,
  className,
  style,
  delay = 0,
  duration = 0.6,
  y = 24,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
