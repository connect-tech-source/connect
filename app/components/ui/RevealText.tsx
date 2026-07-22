"use client";

import { motion, type Variants } from "framer-motion";
import { Fragment, type CSSProperties } from "react";

const MOTION_TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  p: motion.p,
  span: motion.span,
  div: motion.div,
} as const;

type RevealTag = keyof typeof MOTION_TAGS;

interface RevealTextProps {
  children: string;
  as?: RevealTag;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  wordDelay?: number;
}

const wordVariants: Variants = {
  hidden: { y: "115%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function RevealText({
  children,
  as = "span",
  className,
  style,
  delay = 0,
  wordDelay = 0.045,
}: RevealTextProps) {
  const words = children.split(" ");
  const MotionTag = MOTION_TAGS[as];

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: wordDelay, delayChildren: delay } },
  };

  return (
    <MotionTag
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
    >
      {words.map((word, i) => (
        <Fragment key={i}>
          <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
            <motion.span
              variants={wordVariants}
              style={{ display: "inline-block", willChange: "transform" }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </MotionTag>
  );
}
