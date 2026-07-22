import type { Metadata } from "next";
import HeroSection from "./components/home/HeroSection";
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

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* ── HERO SECTION ── */}
      <HeroSection />

      {/* Section divider */}
      <div className="h-px w-full bg-white/10" />

      {/* ── GROWTH PARTNER SECTION ── */}
      <div id="growth-partner">
        <GrowthPartnerSection />
      </div>

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
