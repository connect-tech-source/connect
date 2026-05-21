"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  review: string;
  name: string;
  designation: string;
  image?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    review:
      "Connect transformed our vision into a stunning digital product. Their team's attention to detail and strategic thinking helped us launch faster than expected with exceptional quality.",
    name: "Sarah Johnson",
    designation: "CEO, TechStart Inc.",
    image: "",
  },
  {
    id: 2,
    review:
      "Working with Connect was a game-changer for our brand. They delivered a world-class website that perfectly captures our identity and has significantly boosted our conversions.",
    name: "Michael Chen",
    designation: "Founder, GrowthLab",
    image: "",
  },
  {
    id: 3,
    review:
      "The team at Connect is incredibly talented and professional. They understood our goals from day one and delivered a mobile app that our users absolutely love.",
    name: "Priya Sharma",
    designation: "Product Manager, NovaTech",
    image: "",
  },
];

function AvatarPlaceholder() {
  return (
    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0255a8]">
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 opacity-60">
        <circle cx="40" cy="28" r="16" fill="white" />
        <ellipse cx="40" cy="68" rx="26" ry="16" fill="white" />
      </svg>
    </div>
  );
}

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const t = TESTIMONIALS[current];

  return (
    <section className="relative bg-black overflow-hidden">
      {/* Top divider */}
      <div className="h-px w-full bg-white/10" />

      <div className="relative z-10 px-[14px] py-[40px] pt-[80px] md:px-[130px] md:pt-[200px]">
        {/* Heading */}
        <div className="h-px w-full bg-white/10 mb-10" />
        <h2
          className="text-white text-center mb-10 mt-10"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: "100%",
            letterSpacing: "0em",
          }}
        >
          What Clients Say About CONNECT
        </h2>

        {/* Carousel */}
        <div className="relative w-full">
          {/* Card — full width */}
          <div
            className="relative w-full flex flex-col md:flex-row overflow-hidden transition-all duration-500"
            style={{
              background: "linear-gradient(135deg, #027FF3 0%, #0265c4 100%)",
              borderRadius: 24,
              boxShadow: "0 0 60px rgba(2,127,243,0.25), inset 0 0 80px rgba(255,255,255,0.04)",
            }}
          >
            {/* Background quote icons */}
            <svg className="absolute top-6 left-6 opacity-[0.15] pointer-events-none" width="80" height="80" viewBox="0 0 24 24" fill="#0255a8">
              <path d="M11.3 6C8 7.1 5.8 9.7 5.8 13v5h5.5v-5H7.8c0-2.2 1.4-4.1 3.5-4.9V6zm8 0c-3.3 1.1-5.5 3.7-5.5 7v5h5.5v-5h-3.5c0-2.2 1.4-4.1 3.5-4.9V6z"/>
            </svg>
            <svg className="absolute bottom-6 right-6 opacity-[0.15] pointer-events-none rotate-180" width="80" height="80" viewBox="0 0 24 24" fill="#0255a8">
              <path d="M11.3 6C8 7.1 5.8 9.7 5.8 13v5h5.5v-5H7.8c0-2.2 1.4-4.1 3.5-4.9V6zm8 0c-3.3 1.1-5.5 3.7-5.5 7v5h5.5v-5h-3.5c0-2.2 1.4-4.1 3.5-4.9V6z"/>
            </svg>

            {/* Left — content (desktop) + full card (mobile) */}
            <div className="relative z-10 flex-1 flex flex-col gap-6 px-5 py-6 md:px-12 md:py-12 md:justify-between md:gap-10">
              <p
                className="text-black max-w-[520px]"
                style={{
                  fontFamily: "'Inter Tight', Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(16px, 1.5vw, 20px)",
                  lineHeight: "150%",
                  letterSpacing: "0em",
                }}
              >
                {t.review}
              </p>

              <div className="flex flex-col gap-1">
                <span
                  className="text-black"
                  style={{
                    fontFamily: "'Inter Tight', Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "130%",
                  }}
                >
                  {t.name}
                </span>
                <span
                  className="text-black/60"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "130%",
                  }}
                >
                  {t.designation}
                </span>
              </div>

              {/* Mobile only — avatar or image below user details */}
              <div className="md:hidden">
                {t.image ? (
                  <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                ) : (
                  <AvatarPlaceholder />
                )}
              </div>
            </div>

            {/* Right — image (desktop only) */}
            <div className="hidden md:block relative w-[320px] shrink-0 rounded-r-[24px] overflow-hidden">
              {t.image ? (
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              ) : (
                <AvatarPlaceholder />
              )}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[52px] h-[52px] flex items-center justify-center rounded-full border border-white/20 text-white hover:border-white/60 transition-all duration-200 z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[52px] h-[52px] flex items-center justify-center rounded-full border border-white/20 text-white hover:border-white/60 transition-all duration-200 z-10"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-[#027FF3]" : "w-1.5 bg-white/30"}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px w-full bg-white/10" />
    </section>
  );
}
