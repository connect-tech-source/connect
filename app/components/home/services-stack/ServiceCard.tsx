"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import type { ReactElement } from "react";
import ServiceCardImage from "./ServiceCardImage";
import ServiceCardContent from "./ServiceCardContent";
import {
  ENTER_Y,
  ENTER_SCALE,
  ENTER_ROTATE,
  RECEDE_Y_NEAR,
  RECEDE_SCALE_NEAR,
  RECEDE_OPACITY_NEAR,
  RECEDE_Y_FAR,
  RECEDE_SCALE_FAR,
  RECEDE_OPACITY_FAR,
  RECEDE_EXTRA_DEPTH,
} from "./constants";

interface ServiceCardProps {
  progress: MotionValue<number>;
  index: number;
  total: number;
  icon: ReactElement<{ size?: number }>;
  title: string;
  description: string;
}

export default function ServiceCard({ progress, index, total, icon, title, description }: ServiceCardProps) {
  const segments = Math.max(total - 1, 1);
  const rotateSign = index % 2 === 0 ? 1 : -1;

  const stops = [index - 1, index, index + 1, index + 1 + RECEDE_EXTRA_DEPTH].map((r) => r / segments);

  const opacity = useTransform(progress, stops, [0, 1, RECEDE_OPACITY_NEAR, RECEDE_OPACITY_FAR]);
  const scale = useTransform(progress, stops, [ENTER_SCALE, 1, RECEDE_SCALE_NEAR, RECEDE_SCALE_FAR]);
  const y = useTransform(progress, stops, [ENTER_Y, 0, -RECEDE_Y_NEAR, -RECEDE_Y_FAR]);
  const rotate = useTransform(progress, [stops[0], stops[1]], [ENTER_ROTATE * rotateSign, 0]);

  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: index }}>
      <motion.div
        style={{
          opacity,
          scale,
          y,
          rotate,
          width: "min(88vw, 440px)",
          height: "clamp(400px, 66vh, 600px)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
          willChange: "transform, opacity",
        }}
        className="flex flex-col rounded-[28px] border border-white/10 bg-[#0a0a0a] overflow-hidden"
      >
        <ServiceCardImage icon={icon} />
        <ServiceCardContent index={index} title={title} description={description} />
      </motion.div>
    </div>
  );
}
