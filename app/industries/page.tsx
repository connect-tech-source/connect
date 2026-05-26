import type { Metadata } from "next";
import IndustriesSection from "../components/industries/IndustriesSection";
import FaqSection from "../components/common/FaqSection";
import ContactSection from "../components/home/ContactSection";

export const metadata: Metadata = {
  title: "Industries We Serve | Connect Technologies",
  description:
    "Connect Technologies delivers scalable digital solutions across retail, pharma, healthcare, fintech, education, logistics, agri-tech, food, travel, and more. Trusted by businesses across India.",
  keywords: [
    "digital solutions for retail India",
    "healthcare digital agency India",
    "fintech web development",
    "education app development India",
    "logistics software India",
    "agri-tech digital solutions",
    "Connect Technologies industries",
    "industry specific digital agency",
  ],
  alternates: { canonical: "https://www.connecttechnologies.in/industries" },
  openGraph: {
    url: "https://www.connecttechnologies.in/industries",
    title: "Industries We Serve | Connect Technologies",
    description:
      "Scalable digital solutions for retail, pharma, healthcare, fintech, education, logistics, and more across India.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Connect Technologies Industries" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Connect Technologies",
    description: "Scalable digital solutions across retail, healthcare, fintech, education, logistics, and more.",
    images: ["/og-image.png"],
  },
};

export default function IndustriesPage() {
  return (
    <main className="bg-black">
      <IndustriesSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
