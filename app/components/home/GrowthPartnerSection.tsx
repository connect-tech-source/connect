"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FeatureCards from "../ui/FeatureCards";
import RevealText from "../ui/RevealText";
import Reveal from "../ui/Reveal";

const CARDS = [
  {
    image: "/MissionImage.png",
    heading: "Your Success Is Our Mission",
    description:
      "Our team collaborates closely with you to craft solutions tailored to your goals and long-term vision.",
  },
  {
    image: "/VisionImage.png",
    heading: "From Vision to Reality",
    description:
      "We turn your ideas into high-performing digital products that engage users and accelerate growth.",
  },
];

export default function GrowthPartnerSection({ showButton = true }: { showButton?: boolean }) {
  return (
    <section className="relative px-[14px] py-[80px] md:px-[130px] md:py-[100px] flex flex-col items-center text-center gap-6">

      {/* Section top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      {/* Blue glow */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px]"
        style={{ background: "radial-gradient(circle at 100% 0%, rgba(2,133,254,0.1) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <RevealText
          as="h2"
          className="text-white max-w-[780px]"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: "100%",
            letterSpacing: "0em",
          }}
        >
          We&apos;re More Than an Agency — We&apos;re Your Growth Partner
        </RevealText>

        <Reveal delay={0.3}>
          <p
            className="text-white/60 max-w-[580px]"
            style={{
              fontFamily: "'Inter Tight', Inter, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(12px, 1.3vw, 18px)",
              lineHeight: "24px",
              letterSpacing: "-0.006em",
            }}
          >
            At Connect, we combine creativity, strategy, and technology to build digital experiences that drive real business results.
          </p>
        </Reveal>

        {showButton && (
          <Reveal delay={0.4}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/about"
                className="inline-block bg-white text-black font-medium transition-opacity duration-200 hover:opacity-75"
                style={{
                  fontFamily: "'Inter Tight', Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  height: 40,
                  padding: "8px 16px",
                  borderRadius: 2,
                }}
              >
                Know more About us
              </Link>
            </motion.div>
          </Reveal>
        )}
      </div>

      {/* Top divider */}
      <div className="relative z-10 h-px w-screen -mx-[14px] md:-mx-[130px] bg-white/10" />

      {/* Cards row */}
      <FeatureCards cards={CARDS} />

      {/* Bottom divider */}
      <div className="relative z-10 h-px w-screen -mx-[14px] md:-mx-[130px] bg-white/10" />
    </section>
  );
}
