import type { Metadata } from "next";
import HeroSection from "../components/about/HeroSection";
import WhyConnectSection from "../components/about/WhyConnectSection";
import OurValuesSection from "../components/about/OurValuesSection";
import GrowthPartnerSection from "../components/home/GrowthPartnerSection";
import FaqSection from "../components/common/FaqSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Connect Technologies — a digital agency built for ambitious brands. We combine strategy, design, and technology to create experiences that convert and scale.",
  alternates: { canonical: "https://www.connecttechnologies.in/about" },
  openGraph: {
    url: "https://www.connecttechnologies.in/about",
    title: "About Connect Technologies",
    description:
      "Learn about Connect Technologies — a digital agency built for ambitious brands.",
  },
};

export default function About() {
  return (
    <main className="bg-black">
      <HeroSection />
      <WhyConnectSection />
      <OurValuesSection />
      <div className="h-px w-full bg-white/10" />
      <GrowthPartnerSection />
      <FaqSection />
    </main>
  );
}