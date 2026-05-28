import type { Metadata } from "next";
import ContactHero from "../components/contact/ContactHero";
import ContactCard from "../components/contact/ContactCard";
import ContactSection from "../components/home/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Connect Technologies",
  description:
    "Get in touch with Connect Technologies. We'd love to hear about your project and help bring your ideas to life. Reach us at our office in Madhya Pradesh, India.",
  keywords: [
    "contact Connect Technologies",
    "Connect Technologies contact",
    "hire digital agency India",
    "get in touch Connect",
    "Connect Technologies office",
  ],
  alternates: { canonical: "https://www.connecttechnologies.in/contact" },
  openGraph: {
    url: "https://www.connecttechnologies.in/contact",
    title: "Contact Us | Connect Technologies",
    description:
      "Have a project in mind? Get in touch with Connect Technologies and let's build something great together.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact Connect Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Connect Technologies",
    description: "Have a project in mind? Let's build something great together.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <main className="relative bg-black min-h-screen overflow-hidden">

      {/* Page ambient glows */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px]"
        style={{ background: "radial-gradient(circle at 0% 0%, rgba(2,133,254,0.07) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px]"
        style={{ background: "radial-gradient(circle at 100% 0%, rgba(2,133,254,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col items-center px-6 pt-[120px] pb-10 md:px-20 md:pt-[100px] md:pb-20">

        {/* Hero */}
        <ContactHero />

        {/* Card */}
        <div className="w-full mt-[50px] md:mt-[80px]">
          <ContactCard />
        </div>

      </div>

      <ContactSection />
    </main>
  );
}
