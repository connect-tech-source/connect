"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

interface ScrollProgressProps {
  progress: MotionValue<number>;
  total: number;
}

export default function ScrollProgress({ progress, total }: ScrollProgressProps) {
  const activeNumber = useTransform(progress, (v) =>
    String(Math.min(Math.round(v * (total - 1)) + 1, total)).padStart(2, "0")
  );

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 md:bottom-1/2 md:translate-y-1/2 flex md:flex-col items-center gap-3 z-20">
      <span
        className="text-white tabular-nums"
        style={{ fontFamily: "'Inter Tight', Inter, sans-serif", fontWeight: 500, fontSize: 14 }}
      >
        <motion.span>{activeNumber}</motion.span>
      </span>

      <div className="relative w-24 h-px md:w-px md:h-24 bg-white/15 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[#0285FE] origin-left md:origin-top"
          style={{ scaleX: progress, scaleY: progress }}
        />
      </div>

      <span
        className="text-white/40 tabular-nums"
        style={{ fontFamily: "'Inter Tight', Inter, sans-serif", fontWeight: 400, fontSize: 14 }}
      >
        {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}
