"use client";

import Link from "next/link";
import { MouseLogo } from "../../../public/svgs.js";

function DownArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3v10M3 8l5 5 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HeroSection() {
  const handleScroll = () => {
    const target = document.getElementById("growth-partner");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative isolate min-h-screen h-screen flex flex-col items-center justify-center px-[14px] md:px-[130px] text-center overflow-hidden bg-black">

      {/* Gradient background */}
      <img
        src="/DesktopGradient.png"
        alt=""
        className="pointer-events-none select-none absolute inset-0 z-0 w-full h-full hidden md:block"
        style={{ objectFit: "cover", mixBlendMode: "screen" }}
      />
      <img
        src="/PhoneGradient.png"
        alt=""
        className="pointer-events-none select-none absolute inset-0 z-0 w-full h-full md:hidden"
        style={{ objectFit: "cover", mixBlendMode: "screen" }}
      />

      {/* Subtle vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.45) 100%)" }}
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

        <Link
          href="/contact"
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
        </Link>

        {/* Scroll indicator */}
        <button
          onClick={handleScroll}
          className="animate-float flex flex-col items-center gap-2 mt-16 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          aria-label="Scroll down"
        >
          <MouseLogo width={22} height={32} color="white" />
          <span style={{ fontFamily: "'Inter Tight', Inter, sans-serif", fontSize: 12, fontWeight: 400 }}>
            Scroll down
          </span>
          <DownArrow />
        </button>
      </div>
    </section>
  );
}
