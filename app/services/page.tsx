import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import FaqSection from "../components/common/FaqSection";
import ContactSection from "../components/home/ContactSection";

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
          <h1
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
          </h1>
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
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.08]">
          {servicesData.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col border-r border-b border-white/[0.08] transition-all duration-300 hover:-translate-y-0.5"
              style={{ padding: 40, minHeight: 260 }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "rgba(2,133,254,0.04)" }}
              />
              <div className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(2,133,254,0.6)]">
                {service.icon}
              </div>
              <div className="mt-10 flex flex-col gap-4 relative z-10">
                <h2
                  className="text-white"
                  style={{
                    fontFamily: "'Inter Tight', Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: 22,
                    lineHeight: "100%",
                  }}
                >
                  {service.title}
                </h2>
                <p
                  style={{
                    fontFamily: "'Inter Tight', Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "180%",
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>

    <FaqSection />
    <ContactSection />
    </>
  );
}
