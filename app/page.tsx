"use client";

import Image from "next/image";
import { MouseLogo } from "../public/svgs.js";
import FeatureCards from "./components/ui/FeatureCards";
import ServicesSection from "./components/home/ServicesSection";
import TestimonialSection from "./components/home/TestimonialSection";
import FaqSection from "./components/common/FaqSection";
import ContactSection from "./components/home/ContactSection";

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

function DownArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3v10M3 8l5 5 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* ── HERO SECTION ── */}
      <section className="relative isolate min-h-screen flex flex-col items-center justify-center px-[14px] md:px-[130px] text-center overflow-hidden bg-black">

        {/* z-0 — Gradient1: top right */}
        <Image
          src="/Gradient1.png"
          alt=""
          width={1500}
          height={1500}
          className="pointer-events-none select-none absolute z-0 max-w-none hidden md:block"
          style={{ top: "-28%", right: "-45%", opacity: 0.22, mixBlendMode: "screen" }}
          priority
        />
        <Image
          src="/Gradient1.png"
          alt=""
          width={950}
          height={950}
          className="pointer-events-none select-none absolute z-0 max-w-none md:hidden"
          style={{ top: "-15%", right: "-120%", opacity: 0.18, mixBlendMode: "screen" }}
          priority
        />

        {/* z-0 — Gradient2: bottom left */}
        <Image
          src="/Gradient2.png"
          alt=""
          width={1100}
          height={1100}
          className="pointer-events-none select-none absolute z-0 max-w-none hidden md:block"
          style={{ bottom: "-50%", left: "-40%", opacity: 0.16, mixBlendMode: "screen" }}
          priority
        />
        <Image
          src="/Gradient2.png"
          alt=""
          width={800}
          height={800}
          className="pointer-events-none select-none absolute z-0 max-w-none md:hidden"
          style={{ bottom: "-35%", left: "-110%", opacity: 0.14, mixBlendMode: "screen" }}
          priority
        />

        {/* z-1 — heavy black overlay */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/55" />

        {/* z-2 — radial vignette */}
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{ background: "radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.75) 100%)" }}
        />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6">
          <h1
            className="text-white max-w-[900px]"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(36px, 5.5vw, 64px)",
              lineHeight: "127%",
              letterSpacing: "-0.03em",
              textAlign: "center",
              textShadow: "0 2px 40px rgba(0,0,0,0.6)",
            }}
          >
            Your Vision, Our Expertise — Let&apos;s Build Something Exceptional Together
          </h1>

          <p
            className="text-white/60 max-w-[600px]"
            style={{
              fontFamily: "'Inter Tight', Inter, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.5vw, 20px)",
              lineHeight: "100%",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            We help startups and businesses transform ideas into powerful digital products through strategy, design, and development.
          </p>

          <button
            className="bg-white text-black font-medium transition-opacity duration-200 hover:opacity-75"
            style={{
              fontFamily: "'Inter Tight', Inter, sans-serif",
              fontWeight: 500,
              fontSize: 16,
              lineHeight: "24px",
              padding: "8px 16px",
              borderRadius: 2,
            }}
          >
            Start your Project
          </button>

          {/* Scroll indicator */}
          <div className="animate-float flex flex-col items-center gap-2 mt-8 opacity-60">
            <MouseLogo width={22} height={32} color="white" />
            <span style={{ fontFamily: "'Inter Tight', Inter, sans-serif", fontSize: 12, fontWeight: 400 }}>
              Scroll down
            </span>
            <DownArrow />
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="h-px w-full bg-white/10" />

      {/* ── GROWTH PARTNER SECTION ── */}
      <section className="relative px-[14px] py-[80px] md:px-[130px] md:py-[100px] flex flex-col items-center text-center gap-6">

        {/* Blue glow */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px]"
          style={{ background: "radial-gradient(circle at 100% 0%, rgba(2,133,254,0.1) 0%, transparent 65%)" }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2
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
          </h2>

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

          <button
            className="bg-white text-black font-medium transition-opacity duration-200 hover:opacity-75"
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
          </button>

          {/* Feature cards */}
        </div>

        {/* Top divider */}
        <div className="relative z-10 h-px w-screen -mx-[14px] md:-mx-[130px] bg-white/10" />

        {/* Cards row */}
        <FeatureCards cards={CARDS} />

        {/* Bottom divider */}
        <div className="relative z-10 h-px w-screen -mx-[14px] md:-mx-[130px] bg-white/10" />
      </section>

      {/* ── SERVICES SECTION ── */}
      <ServicesSection />

      {/* ── TESTIMONIAL SECTION ── */}
      <TestimonialSection />

      {/* ── FAQ SECTION ── */}
      <FaqSection />

      {/* ── CONTACT SECTION ── */}
      <ContactSection />

    </main>
  );
}
