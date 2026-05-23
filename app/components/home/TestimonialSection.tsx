"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  review: string;
  name: string;
  designation: string;
  image: string;
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

function QuoteOpen() {
  return (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 18V10.8C0 7.2 1.2 4.2 3.6 1.8L5.4 0l1.8 1.2C5.4 2.8 4.4 4.6 4.2 6.6H8.4V18H0zm12 0V10.8c0-3.6 1.2-6.6 3.6-9L17.4 0l1.8 1.2c-1.8 1.6-2.8 3.4-3 5.4H20.4V18H12z" fill="black" fillOpacity="0.4"/>
    </svg>
  );
}

function QuoteClose() {
  return (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
      <path d="M0 18V10.8C0 7.2 1.2 4.2 3.6 1.8L5.4 0l1.8 1.2C5.4 2.8 4.4 4.6 4.2 6.6H8.4V18H0zm12 0V10.8c0-3.6 1.2-6.6 3.6-9L17.4 0l1.8 1.2c-1.8 1.6-2.8 3.4-3 5.4H20.4V18H12z" fill="black" fillOpacity="0.4"/>
    </svg>
  );
}

function FallbackImage() {
  return (
    <div className="w-full h-full bg-[#0265c4] flex items-center justify-center">
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-30">
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
    <section className="bg-black">
      {/* Top divider */}
      <div className="h-px w-full bg-white/[0.08]" />

      <div className="px-6 py-10 md:px-20 md:py-20">
        {/* Heading */}
        <h2
          className="text-white text-center mx-auto mb-8 md:mb-12 max-w-[320px] md:max-w-none"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(32px, 5vw, 64px)",
            lineHeight: "110%",
            letterSpacing: "-0.04em",
          }}
        >
          What Clients Say About CONNECT
        </h2>

        {/* ── DESKTOP CARD ── */}
        <div
          className="hidden md:flex items-center gap-12"
          style={{ background: "linear-gradient(135deg, #0285FE 0%, #0277E2 100%)" }}
        >
          {/* Left arrow */}
          <button
            onClick={prev}
            className="shrink-0 pl-12 text-black hover:opacity-60 transition-opacity duration-200"
            aria-label="Previous"
          >
            <ChevronLeft size={28} strokeWidth={2} />
          </button>

          {/* Center — quote + user */}
          <div className="flex-1 flex flex-col gap-8 py-12">
            <QuoteOpen />
            <p
              className="text-black max-w-[520px]"
              style={{
                fontFamily: "'Inter Tight', Inter, sans-serif",
                fontWeight: 400,
                fontSize: 20,
                lineHeight: "150%",
                letterSpacing: "0%",
              }}
            >
              {t.review}
            </p>
            <QuoteClose />

            <div className="flex flex-col gap-1">
              <span
                className="text-black"
                style={{
                  fontFamily: "'Inter Tight', Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: "140%",
                }}
              >
                {t.name}
              </span>
              <span
                style={{
                  fontFamily: "'Inter Tight', Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "140%",
                  color: "rgba(0,0,0,0.72)",
                }}
              >
                {t.designation}
              </span>
            </div>
          </div>

          {/* Right — image */}
          <div className="shrink-0 w-[320px] h-[220px] relative">
            {t.image ? (
              <Image src={t.image} alt={t.name} fill className="object-cover" />
            ) : (
              <FallbackImage />
            )}
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="shrink-0 pr-12 text-black hover:opacity-60 transition-opacity duration-200"
            aria-label="Next"
          >
            <ChevronRight size={28} strokeWidth={2} />
          </button>
        </div>

        {/* ── MOBILE CARD ── */}
        <div
          className="flex flex-col md:hidden"
          style={{ background: "linear-gradient(135deg, #0285FE 0%, #0277E2 100%)" }}
        >
          {/* Top row — arrows */}
          <div className="flex items-center justify-between px-6 pt-6">
            <button onClick={prev} className="text-black hover:opacity-60 transition-opacity duration-200" aria-label="Previous">
              <ChevronLeft size={22} strokeWidth={2} />
            </button>
            <button onClick={next} className="text-black hover:opacity-60 transition-opacity duration-200" aria-label="Next">
              <ChevronRight size={22} strokeWidth={2} />
            </button>
          </div>

          {/* Quote content */}
          <div className="flex flex-col gap-5 px-6 pt-4 pb-6">
            <QuoteOpen />
            <p
              className="text-black"
              style={{
                fontFamily: "'Inter Tight', Inter, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "150%",
                letterSpacing: "0%",
              }}
            >
              {t.review}
            </p>
            <QuoteClose />

            {/* User info */}
            <div className="flex flex-col gap-1">
              <span
                className="text-black"
                style={{
                  fontFamily: "'Inter Tight', Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: "140%",
                }}
              >
                {t.name}
              </span>
              <span
                style={{
                  fontFamily: "'Inter Tight', Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "140%",
                  color: "rgba(0,0,0,0.72)",
                }}
              >
                {t.designation}
              </span>
            </div>
          </div>

          {/* Image — full width */}
          <div className="w-full h-[260px] relative">
            {t.image ? (
              <Image src={t.image} alt={t.name} fill className="object-cover" />
            ) : (
              <FallbackImage />
            )}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-[#0285FE]" : "w-1.5 bg-white/30"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px w-full bg-white/[0.08]" />
    </section>
  );
}
