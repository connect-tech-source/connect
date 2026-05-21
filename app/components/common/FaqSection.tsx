"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  faqs?: FaqItem[];
}

const DEFAULT_FAQS: FaqItem[] = [
  {
    id: 1,
    question: "What services does Connect offer?",
    answer:
      "Connect offers a full range of digital services including UI/UX design, website development, mobile app development, and branding. We work with startups and established businesses to deliver high-quality digital products.",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A standard website typically takes 4–8 weeks, while a full mobile app can take 3–6 months. We provide a detailed timeline during our initial consultation.",
  },
  {
    id: 3,
    question: "Do you work with startups or only established businesses?",
    answer:
      "We work with both. Whether you're a startup with a fresh idea or an established business looking to scale digitally, our team adapts to your needs and budget to deliver the best possible outcome.",
  },
  {
    id: 4,
    question: "What is your development process?",
    answer:
      "Our process follows four key phases: Discovery & Strategy, Design, Development, and Launch & Support. We keep you involved at every stage to ensure the final product aligns perfectly with your vision.",
  },
  {
    id: 5,
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We offer ongoing maintenance and support packages to ensure your product stays updated, secure, and performing at its best after launch.",
  },
];

export default function FaqSection({ title = "Frequently Asked Questions", faqs = DEFAULT_FAQS }: FaqSectionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

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
          {title}
        </h2>

        {/* Accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id}>
                {/* Divider above each item */}
                <div className="h-px w-full bg-white/10" />

                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-start gap-6 px-6 py-6 text-left transition-colors duration-300"
                  style={{ background: isOpen ? "#0285FE" : "transparent" }}
                >
                  {/* Number */}
                  <span
                    className="shrink-0 text-white/40 mt-0.5"
                    style={{
                      fontFamily: "'Inter Tight', Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: 20,
                      lineHeight: "100%",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Question + Answer */}
                  <div className="flex-1 flex flex-col gap-4">
                    <span
                      className="text-white"
                      style={{
                        fontFamily: "'Inter Tight', Inter, sans-serif",
                        fontWeight: 400,
                        fontSize: 20,
                        lineHeight: "100%",
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {faq.question}
                    </span>

                    {isOpen && (
                      <p
                        className="text-white/80"
                        style={{
                          fontFamily: "'Inter Tight', Inter, sans-serif",
                          fontWeight: 400,
                          fontSize: 16,
                          lineHeight: "100%",
                          letterSpacing: "-0.04em",
                        }}
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>

                  {/* Icon */}
                  <span className="shrink-0 text-white mt-0.5">
                    {isOpen ? <X size={18} /> : <Plus size={18} />}
                  </span>
                </button>
              </div>
            );
          })}

          {/* Bottom divider of last item */}
          <div className="h-px w-full bg-white/10" />
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px w-full bg-white/10" />
    </section>
  );
}
