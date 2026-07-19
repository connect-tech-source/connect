"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative flex flex-col gap-6 w-full h-full px-[50px] py-[50px] md:px-[24px] md:py-[80px] overflow-hidden"
    >
      {/* Hover tint */}
      <motion.div
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(2,133,254,0.07) 0%, transparent 100%)" }}
      />

      {/* Top accent line */}
      <motion.div
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#0285FE] origin-left"
      />

      <motion.div
        variants={{ rest: { scale: 1, rotate: 0 }, hover: { scale: 1.15, rotate: -8 } }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-fit"
      >
        {icon}
      </motion.div>

      <div className="relative z-10 flex flex-col gap-4">
        <h3
          className="text-white"
          style={{
            fontFamily: "'Inter Tight', Inter, sans-serif",
            fontWeight: 600,
            fontSize: 24,
            lineHeight: "150%",
            letterSpacing: "-0.006em",
          }}
        >
          {title}
        </h3>
        <p
          className="text-white/50"
          style={{
            fontFamily: "'Inter Tight', Inter, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: "-0.006em",
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
