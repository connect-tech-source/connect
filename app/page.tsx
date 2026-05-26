import type { Metadata } from "next";
import { MouseLogo } from "../public/svgs.js";
import GrowthPartnerSection from "./components/home/GrowthPartnerSection";
import ServicesSection from "./components/home/ServicesSection";
import TestimonialSection from "./components/home/TestimonialSection";
import FaqSection from "./components/common/FaqSection";
import ContactSection from "./components/home/ContactSection";

export const metadata: Metadata = {
  title: "Connect Technologies | Best Digital Agency in India",
  description:
    "Connect Technologies builds world-class digital products for startups and businesses. Expert UI/UX design, web development, mobile apps, and branding. Get started today.",
  keywords: [
    "Connect Technologies",
    "Connect",
    "digital agency India",
    "web development India",
    "UI UX design India",
    "mobile app development",
    "branding agency",
    "startup agency India",
  ],
  alternates: { canonical: "https://www.connecttechnologies.in" },
  openGraph: {
    url: "https://www.connecttechnologies.in",
    title: "Connect Technologies | Best Digital Agency in India",
    description:
      "Connect Technologies builds world-class digital products. Expert UI/UX, web development, mobile apps, and branding for startups and enterprises.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Connect Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect Technologies | Best Digital Agency in India",
    description: "Expert UI/UX, web development, mobile apps, and branding for startups and enterprises.",
    images: ["/og-image.png"],
  },
};

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
      <section className="relative isolate min-h-screen h-screen flex flex-col items-center justify-center px-[14px] md:px-[130px] text-center overflow-hidden bg-black">

        {/* Gradient background — absolute full bleed */}
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
          <div className="animate-float flex flex-col items-center gap-2 mt-16 opacity-60">
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
      <GrowthPartnerSection />

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
