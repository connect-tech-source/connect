"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Paintbrush, Monitor, Smartphone, PenTool } from "lucide-react";
import RevealText from "../ui/RevealText";
import Reveal from "../ui/Reveal";
import ServicesStack from "./services-stack/ServicesStack";

const SERVICES = [
  {
    icon: <Paintbrush color="#0285FE" strokeWidth={1.5} />,
    title: "UI/UX Design",
    description:
      "We craft intuitive and visually stunning interfaces that deliver seamless user experiences and drive engagement across all platforms.",
  },
  {
    icon: <Monitor color="#0285FE" strokeWidth={1.5} />,
    title: "Website Development",
    description:
      "From landing pages to complex web apps, we build fast, scalable, and modern websites tailored to your business needs.",
  },
  {
    icon: <Smartphone color="#0285FE" strokeWidth={1.5} />,
    title: "Mobile App",
    description:
      "We develop high-performance iOS and Android applications that provide smooth experiences and solve real user problems.",
  },
  {
    icon: <PenTool color="#0285FE" strokeWidth={1.5} />,
    title: "Branding",
    description:
      "We build powerful brand identities that communicate your values, stand out in the market, and leave a lasting impression.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-black">

      {/* Top divider */}
      <div className="h-px w-full bg-white/10" />

      {/* Section content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4 md:gap-6 px-[14px] py-[40px] md:px-[130px]">
        <RevealText
          as="h2"
          className="text-white"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: "100%",
            letterSpacing: "0em",
          }}
        >
          Our Services
        </RevealText>

        <Reveal delay={0.25}>
          <p
            className="text-white/50 max-w-[520px]"
            style={{
              fontFamily: "'Inter Tight', Inter, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.3vw, 18px)",
              lineHeight: "24px",
              letterSpacing: "-0.006em",
            }}
          >
            Transform your brand with our innovative digital solutions that captivate and engage your audience.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/services"
              className="inline-block bg-white text-black font-medium transition-opacity duration-200 hover:opacity-75"
              style={{
                fontFamily: "'Inter Tight', Inter, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                lineHeight: "24px",
                padding: "8px 16px",
                borderRadius: 2,
              }}
            >
              Show all
            </Link>
          </motion.div>
        </Reveal>
      </div>

      {/* Scroll-pinned card stack */}
      <ServicesStack services={SERVICES} />

      {/* Section bottom divider — full width */}
      <div className="h-px w-full bg-white/10" />

    </section>
  );
}
