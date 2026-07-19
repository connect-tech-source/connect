"use client";

import { useRef, type ReactNode } from "react";
import { useScroll, useSpring, type MotionValue } from "framer-motion";

const SCROLL_SMOOTHING = { stiffness: 260, damping: 34, mass: 0.9 };

interface PinnedContainerProps {
  heightVh: number;
  children: (progress: MotionValue<number>) => ReactNode;
  className?: string;
}

export default function PinnedContainer({ heightVh, children, className }: PinnedContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, SCROLL_SMOOTHING);

  return (
    <div ref={containerRef} className={className} style={{ height: `${heightVh}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">{children(progress)}</div>
    </div>
  );
}
