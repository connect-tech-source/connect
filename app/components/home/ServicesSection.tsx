"use client";

import Link from "next/link";
import { Paintbrush, Monitor, Smartphone, PenTool } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";

const SERVICES = [
  {
    icon: <Paintbrush size={22} color="#0285FE" />,
    title: "UI/UX Design",
    description:
      "We craft intuitive and visually stunning interfaces that deliver seamless user experiences and drive engagement across all platforms.",
    href: "/services",
  },
  {
    icon: <Monitor size={22} color="#0285FE" />,
    title: "Website Development",
    description:
      "From landing pages to complex web apps, we build fast, scalable, and modern websites tailored to your business needs.",
    href: "/services",
  },
  {
    icon: <Smartphone size={22} color="#0285FE" />,
    title: "Mobile App",
    description:
      "We develop high-performance iOS and Android applications that provide smooth experiences and solve real user problems.",
    href: "/services",
  },
  {
    icon: <PenTool size={22} color="#0285FE" />,
    title: "Branding",
    description:
      "We build powerful brand identities that communicate your values, stand out in the market, and leave a lasting impression.",
    href: "/services",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-black overflow-hidden">

      {/* Top divider */}
      <div className="h-px w-full bg-white/10" />

      {/* Section content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4 md:gap-6 px-[14px] py-[40px] md:px-[130px]">
        <h2
          className="text-white"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: "100%",
            letterSpacing: "0em",
          }}
        >
          Our Services
        </h2>

        <p
          className="text-white/50 max-w-[520px]"
          style={{
            fontFamily: "'Inter Tight', Inter, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(14px, 1.3vw, 18px)",
            lineHeight: "24px",
            letterSpacing: "-0.006em",
          }}
        >
          Transform your brand with our innovative digital solutions that captivate and engage your audience.
        </p>

        <Link
          href="/services"
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
          Show all
        </Link>
      </div>

      {/* Cards wrapper — padded on desktop, full border table feel */}
      <div className="md:px-20">
        {/* Top cards divider */}
        <div className="h-px w-full bg-white/10" />

        {/* Services grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:border-l md:border-r md:border-white/10">
          {SERVICES.map((service, i) => (
            <div key={service.title} className="relative">
              <ServiceCard {...service} />
              {/* Right divider between cards — not after last in each row */}
              {i < SERVICES.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-white/10" />
              )}
              {/* Tablet: right divider only for odd index */}
              {i % 2 === 0 && (
                <div className="hidden md:block lg:hidden absolute right-0 top-0 bottom-0 w-px bg-white/10" />
              )}
              {/* Mobile: bottom divider between stacked cards */}
              {i < SERVICES.length - 1 && (
                <div className="md:hidden h-px w-full bg-white/10" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom cards divider */}
        <div className="h-px w-full bg-white/10" />
      </div>

      {/* Section bottom divider — full width */}
      <div className="h-px w-full bg-white/10 mt-[40px]" />

    </section>
  );
}
