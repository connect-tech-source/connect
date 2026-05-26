import type { Metadata } from "next";
import HeroSection from "../components/about/HeroSection";
import WhyConnectSection from "../components/about/WhyConnectSection";
import OurValuesSection from "../components/about/OurValuesSection";
import GrowthPartnerSection from "../components/home/GrowthPartnerSection";
import FaqSection from "../components/common/FaqSection";

export const metadata: Metadata = {
  title: "About Connect Technologies | Digital Agency India",
  description:
    "Learn about Connect Technologies — India's leading digital agency. We combine strategy, design, and technology to build digital experiences that convert and scale for startups and enterprises.",
  keywords: [
    "About Connect Technologies",
    "Connect Technologies team",
    "digital agency about",
    "Connect India agency",
    "who is Connect Technologies",
  ],
  alternates: { canonical: "https://www.connecttechnologies.in/about" },
  openGraph: {
    url: "https://www.connecttechnologies.in/about",
    title: "About Connect Technologies | Digital Agency India",
    description:
      "India's leading digital agency combining strategy, design, and technology to build exceptional digital products.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About Connect Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Connect Technologies | Digital Agency India",
    description: "India's leading digital agency combining strategy, design, and technology.",
    images: ["/og-image.png"],
  },
};

export default function About() {
  return (
    <main className="bg-black">
      <HeroSection />
      <WhyConnectSection />
      <OurValuesSection />
      <div className="h-px w-full bg-white/10" />
      <GrowthPartnerSection showButton={false} />
      <FaqSection />
    </main>
  );
}