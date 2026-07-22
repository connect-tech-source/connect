"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import RevealText from "../ui/RevealText";

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
    name: "Rachit Bhagya",
    designation: "Founder, BhagyaRach",
    image: "/BhagyaRachLogoClient.jpg",
  },
  {
    id: 2,
    review:
      "Working with Connect was a game-changer for our brand. They delivered a world-class website that perfectly captures our identity and has significantly boosted our conversions.",
    name: "Arjun Mehta",
    designation: "CEO, Visual Infotech",
    image: "/VisualInfotecLogoClient.png",
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

function QuoteMark() {
  return (
    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 30V18C0 12 2 7 6 3L9 0l3 2c-3 2.6-4.6 5.6-5 9H14V30H0zm20 0V18c0-6 2-11 6-15l3-3 3 2c-3 2.6-4.6 5.6-5 9h6.7V30H20z"
        fill="#0285FE"
      />
    </svg>
  );
}

function FallbackImage() {
  return (
    <div className="w-full h-full bg-[#0265c4] flex items-center justify-center">
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 opacity-30">
        <circle cx="40" cy="28" r="16" fill="white" />
        <ellipse cx="40" cy="68" rx="26" ry="16" fill="white" />
      </svg>
    </div>
  );
}

function StarRating() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.3, ease: "easeOut" }}
        >
          <Star size={18} className="text-[#0285FE] fill-[#0285FE]" />
        </motion.div>
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));
  };
  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  const t = TESTIMONIALS[current];

  return (
    <section className="bg-black relative overflow-hidden">
      {/* Top divider */}
      <div className="h-px w-full bg-white/[0.08]" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0285FE]/[0.06] blur-[120px]" />

      <div className="relative px-6 py-10 md:px-20 md:py-24">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[#0285FE] mb-3"
          style={{
            fontFamily: "'Inter Tight', Inter, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: "0.18em",
          }}
        >
          TESTIMONIALS
        </motion.p>

        {/* Heading */}
        <RevealText
          as="h2"
          delay={0.1}
          className="text-white text-center mx-auto max-w-[320px] md:max-w-none"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(32px, 5vw, 64px)",
            lineHeight: "110%",
            letterSpacing: "-0.04em",
          }}
        >
          What Clients Say About CONNECT
        </RevealText>

        {/* Underline accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-[3px] w-12 bg-[#0285FE] mx-auto mt-6 mb-4 origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center text-white/50 mb-10 md:mb-14"
          style={{ fontFamily: "'Inter Tight', Inter, sans-serif", fontSize: 15 }}
        >
          Real stories from real clients who trusted us with their ideas.
        </motion.p>

        {/* ── CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -4, borderColor: "rgba(2,133,254,0.35)" }}
          className="relative max-w-[900px] mx-auto rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent px-6 py-10 md:px-14 md:py-14 transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(2,133,254,0.12)]"
        >
          {/* Arrows — desktop, side-mounted */}
          <button
            onClick={prev}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/15 bg-black/60 backdrop-blur items-center justify-center text-white hover:border-[#0285FE] hover:text-[#0285FE] transition-colors duration-200 z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={20} strokeWidth={2} />
          </button>
          <button
            onClick={next}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/15 bg-black/60 backdrop-blur items-center justify-center text-white hover:border-[#0285FE] hover:text-[#0285FE] transition-colors duration-200 z-10"
            aria-label="Next"
          >
            <ChevronRight size={20} strokeWidth={2} />
          </button>

          {/* Arrows — mobile, top row */}
          <div className="flex md:hidden items-center justify-between mb-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/15 bg-black/60 flex items-center justify-center text-white hover:border-[#0285FE] hover:text-[#0285FE] transition-colors duration-200"
              aria-label="Previous"
            >
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/15 bg-black/60 flex items-center justify-center text-white hover:border-[#0285FE] hover:text-[#0285FE] transition-colors duration-200"
              aria-label="Next"
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={t.id}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col md:flex-row items-center gap-10"
            >
              {/* Text */}
              <div className="flex-1 flex flex-col gap-5 order-2 md:order-1">
                <QuoteMark />
                <p
                  className="text-white/80"
                  style={{
                    fontFamily: "'Inter Tight', Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: 18,
                    lineHeight: "160%",
                  }}
                >
                  {t.review}
                </p>

                <StarRating />

                <div className="h-px w-10 bg-[#0285FE]/50" />

                <div className="flex flex-col gap-1">
                  <span
                    className="text-white"
                    style={{
                      fontFamily: "'Inter Tight', Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 17,
                    }}
                  >
                    {t.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter Tight', Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {t.designation}
                  </span>
                </div>
              </div>

              {/* Avatar */}
              <div className="shrink-0 order-1 md:order-2">
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full p-[3px]"
                  style={{
                    background: "linear-gradient(135deg, #0285FE, transparent 60%)",
                    boxShadow: "0 0 40px rgba(2,133,254,0.25)",
                  }}
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
                    {t.image ? (
                      <Image src={t.image} alt={t.name} fill className="object-cover" />
                    ) : (
                      <FallbackImage />
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
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
