import type { Metadata } from "next";
import FaqSection from "../components/common/FaqSection";
import ContactSection from "../components/home/ContactSection";
import RevealText from "../components/ui/RevealText";
import Reveal from "../components/ui/Reveal";
import ServicesGrid from "./ServicesGrid";

export const metadata: Metadata = {
  title: "Our Services | UI/UX, Web, Mobile App & Branding",
  description:
    "Explore Connect Technologies' full range of services — UI/UX design, website development, mobile app development, branding, product strategy, and SEO & marketing for startups and businesses across India.",
  keywords: [
    "UI UX design services India",
    "web development services India",
    "mobile app development services",
    "branding services India",
    "product strategy agency",
    "SEO marketing India",
    "Connect Technologies services",
    "digital services India",
  ],
  alternates: { canonical: "https://www.connecttechnologies.in/services" },
  openGraph: {
    url: "https://www.connecttechnologies.in/services",
    title: "Our Services | Connect Technologies",
    description:
      "UI/UX design, web development, mobile apps, branding, product strategy, and SEO for startups and businesses.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Connect Technologies Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Connect Technologies",
    description: "UI/UX design, web development, mobile apps, branding, and more.",
    images: ["/og-image.png"],
  },
};

export default function ServicesPage() {
  return (
    <>
    <main className="bg-black min-h-screen">
      <section className="px-6 pt-[120px] pb-20 md:px-20 md:pt-[100px] md:pb-[100px]">

        {/* Heading */}
        <div className="flex flex-col gap-6 mb-[50px] md:mb-[80px]">
          <RevealText
            as="h1"
            className="text-white"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 5vw, 64px)",
              lineHeight: "110%",
              letterSpacing: "-0.04em",
            }}
          >
            Our Services
          </RevealText>
          <Reveal delay={0.3}>
            <p
              className="max-w-[520px]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "160%",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              We combine strategy, design, and technology to build digital experiences that drive real business results.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <ServicesGrid />
      </section>
    </main>

    <FaqSection />
    <ContactSection />
    </>
  );
}
