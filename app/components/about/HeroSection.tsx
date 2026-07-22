"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import RevealText from "../ui/RevealText";
import Reveal from "../ui/Reveal";

export default function HeroSection() {
  return (
    <section className="bg-black px-6 pt-[120px] pb-20 md:px-20 md:pt-[100px] md:pb-[120px]">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <RevealText
          as="h1"
          className="text-white w-full md:max-w-[760px]"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(32px, 5vw, 64px)",
            lineHeight: "110%",
            letterSpacing: "-0.04em",
          }}
        >
          We Build Digital Products That Drive Real Growth
        </RevealText>

        <div className="flex flex-col items-start gap-5 md:max-w-[320px] md:pt-2 md:shrink-0">
          <Reveal delay={0.35}>
            <p
              className="text-white/[0.72]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "100%",
                letterSpacing: "-0.03em",
              }}
            >
              Connect is a digital agency built for ambitious brands. We combine strategy, design, and technology to create experiences that convert and scale.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/contact"
                className="inline-block bg-white text-black transition-opacity duration-200 hover:opacity-75"
                style={{
                  fontFamily: "'Inter Tight', Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: "24px",
                  padding: "8px 16px",
                  borderRadius: 2,
                }}
              >
                Contact us
              </Link>
            </motion.div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.2} y={40} className="mt-6 md:mt-10 w-full overflow-hidden rounded-lg">
        <Image
          src="/AboutHero.png"
          alt="About Connect"
          width={1280}
          height={600}
          className="w-full object-cover h-[300px] md:h-[560px] transition-transform duration-700 ease-out hover:scale-105"
          priority
        />
      </Reveal>
    </section>
  );
}
