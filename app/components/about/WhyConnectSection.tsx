"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RevealText from "../ui/RevealText";
import { StaggerGroup, StaggerItem } from "../ui/StaggerGrid";

const FEATURES = [
  {
    title: "Strategic Approach",
    description:
      "We start every project with deep research and a clear strategy, ensuring every decision is aligned with your business goals and target audience.",
  },
  {
    title: "Creative Excellence",
    description:
      "Our design team crafts visually stunning, on-brand experiences that captivate users and set you apart from the competition.",
  },
  {
    title: "Scalable Solutions",
    description:
      "We build with growth in mind — clean architecture and modern tech stacks that scale seamlessly as your business evolves.",
  },
  {
    title: "Transparent Communication",
    description:
      "No surprises. We keep you informed at every stage with clear timelines, honest updates, and open collaboration throughout.",
  },
  {
    title: "Reliable Partnership",
    description:
      "We're not just a vendor — we're a long-term partner invested in your success, available beyond launch to support and iterate.",
  },
  {
    title: "Results-Driven Mindset",
    description:
      "Every pixel and line of code is purposeful. We measure success by the real impact we create for your users and your bottom line.",
  },
];

export default function WhyConnectSection() {
  return (
    <section className="w-full bg-[#0285FE] flex flex-col md:flex-row gap-10 p-6 md:p-20 md:items-stretch">
      {/* Left */}
      <div className="md:w-1/2 flex flex-col">
        <RevealText
          as="h2"
          className="text-black"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(36px, 4vw, 52px)",
            lineHeight: "110%",
            letterSpacing: "-0.04em",
            marginBottom: 32,
          }}
        >
          Why CONNECT ?
        </RevealText>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex-1 relative min-h-[300px] overflow-hidden"
        >
          <Image
            src="/WhyConnectImage.png"
            alt="Why Connect"
            width={600}
            height={500}
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
        </motion.div>
      </div>

      {/* Right */}
      <StaggerGroup className="md:w-1/2 flex flex-col justify-between">
        {FEATURES.map((feature, i) => (
          <StaggerItem key={feature.title}>
            <motion.div
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 py-4"
            >
              <h3
                className="text-black"
                style={{
                  fontFamily: "'Inter Tight', Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 20,
                  lineHeight: "140%",
                  letterSpacing: "-0.04em",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter Tight', Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "160%",
                  letterSpacing: "0%",
                  color: "rgba(0,0,0,0.72)",
                }}
              >
                {feature.description}
              </p>
            </motion.div>
            {i < FEATURES.length - 1 && (
              <div className="h-px w-full bg-[#9EC1FF]" />
            )}
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
