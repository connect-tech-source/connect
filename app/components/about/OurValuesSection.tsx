"use client";

import { motion } from "framer-motion";
import RevealText from "../ui/RevealText";
import { StaggerGroup, StaggerItem } from "../ui/StaggerGrid";

const VALUES = [
  {
    number: "01",
    title: "Innovation",
    description:
      "We embrace new ideas and technologies to deliver forward-thinking solutions.",
  },
  {
    number: "02",
    title: "Collaboration",
    description:
      "We work closely with our clients to ensure every project aligns with their goals.",
  },
  {
    number: "03",
    title: "Excellence",
    description:
      "We focus on quality, detail, and performance in everything we create.",
  },
  {
    number: "04",
    title: "Integrity",
    description:
      "We believe in honesty, transparency, and long-term partnerships.",
  },
];

export default function OurValuesSection() {
  return (
    <section className="bg-black w-full px-10 py-20 md:py-[100px]">

      <div className="py-4">
        <div className="h-px -mx-10 md:-mx-[100px] bg-white/[0.08]" />

        <div className="py-10 flex justify-center">
          <RevealText
            as="h2"
            className="text-white text-center"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 3.5vw, 48px)",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Our Values
          </RevealText>
        </div>
      </div>

      {/* Cards grid */}
      <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-white/[0.08]">
        {VALUES.map((value) => (
          <StaggerItem key={value.number}>
            <motion.div
              whileHover={{ backgroundColor: "rgba(2,133,254,0.05)" }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4 p-10 border-r border-b border-white/[0.08] h-full"
            >
              <motion.span
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="w-fit"
                style={{
                  fontFamily: "'Inter Tight', Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  color: "#0285FE",
                }}
              >
                {value.number}
              </motion.span>

              <h3
                className="text-white"
                style={{
                  fontFamily: "'Inter Tight', Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 24,
                  lineHeight: "140%",
                  letterSpacing: "0%",
                }}
              >
                {value.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Inter Tight', Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "150%",
                  letterSpacing: "-0.04em",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                {value.description}
              </p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      {/* Bottom divider */}
      <div className="h-px -mx-10 md:-mx-[100px] bg-white/[0.08] mt-10" />
    </section>
  );
}
