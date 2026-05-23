"use client";

import { useState } from "react";

// ── Reusable sub-components ──────────────────────────────────────────────────

function SectionHeader({ heading, description }: { heading: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center" style={{ gap: 14 }}>
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
        {heading}
      </h2>
      <p
        className="max-w-[620px]"
        style={{
          fontFamily: "'Inter Tight', Inter, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(14px, 1.3vw, 18px)",
          lineHeight: "24px",
          letterSpacing: "-0.006em",
          color: "rgba(255,255,255,0.7)",
        }}
      >
        {description}
      </p>
    </div>
  );
}

function FormField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div
      className="flex flex-col gap-6 rounded-lg"
      style={{
        padding: "24px 40px",
        background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <label
        className="text-white"
        style={{
          fontFamily: "'Inter Tight', Inter, sans-serif",
          fontWeight: 500,
          fontSize: 22,
          lineHeight: "150%",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder ?? "Type here"}
        className="bg-transparent outline-none w-full border-b pb-2"
        style={{
          fontFamily: "'Inter Tight', Inter, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          color: "white",
          borderColor: "rgba(255,255,255,0.15)",
        }}
      />
    </div>
  );
}

function CheckboxField({ label }: { label: string }) {
  const [checked, setChecked] = useState(false);
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="w-4 h-4 accent-white cursor-pointer"
      />
      <span
        className="text-white/70"
        style={{
          fontFamily: "'Inter Tight', Inter, sans-serif",
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        {label}
      </span>
    </label>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

const CONTACT_REASONS = ["Web Design", "Collaboration", "Mobile App Design", "Others"];

// ── Main Component ────────────────────────────────────────────────────────────

export default function ContactSection() {
  const [budget, setBudget] = useState(2500);

  return (
    <section className="relative bg-black overflow-hidden">
      {/* Blue glow — bottom */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(2,133,254,0.12) 0%, transparent 70%)" }}
      />

      {/* Top divider */}
      <div className="h-px w-full bg-white/10" />

      <div className="relative z-10 px-[14px] py-[40px] pt-[80px] md:px-[130px] md:pt-[200px]">

        {/* Divider + heading */}
        <div className="h-px w-full bg-white/10 mb-10" />

        <div className="flex flex-col items-center gap-8">
          <SectionHeader
            heading="Thank you for your Interest in CONNECT."
            description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
          />

          {/* Form container */}
          <div className="w-full flex flex-col gap-5 md:rounded-2xl md:px-[80px] md:py-[80px] md:border md:border-white/[0.08] md:bg-white/[0.02]">
            {/* Row 1 — Full Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField label="Full Name" />
              <FormField label="Email" type="email" />
            </div>

            {/* Contact reason */}
            <div
              className="flex flex-col gap-6 rounded-lg"
              style={{
                padding: "24px 40px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-white"
                style={{
                  fontFamily: "'Inter Tight', Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 22,
                  lineHeight: "150%",
                }}
              >
                Why are you contacting us?
              </span>
              <div className="grid grid-cols-2 gap-4">
                {CONTACT_REASONS.map((r) => (
                  <CheckboxField key={r} label={r} />
                ))}
              </div>
            </div>

            {/* Budget slider */}
            <div
              className="flex flex-col gap-6 rounded-lg"
              style={{
                padding: "24px 40px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex flex-col gap-1">
                <span
                  className="text-white"
                  style={{
                    fontFamily: "'Inter Tight', Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: 22,
                    lineHeight: "150%",
                  }}
                >
                  Your Budget
                </span>
                <span
                  style={{
                    fontFamily: "'Inter Tight', Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  Slide to indicate your budget range
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <input
                  type="range"
                  min={1000}
                  max={5000}
                  step={100}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-1 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #0285FE ${((budget - 1000) / 4000) * 100}%, rgba(255,255,255,0.15) ${((budget - 1000) / 4000) * 100}%)`,
                    accentColor: "#0285FE",
                  }}
                />
                <div className="flex justify-between">
                  <span style={{ fontFamily: "'Inter Tight', Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)" }}>$1000</span>
                  <span style={{ fontFamily: "'Inter Tight', Inter, sans-serif", fontSize: 14, color: "white", fontWeight: 500 }}>${budget.toLocaleString()}</span>
                  <span style={{ fontFamily: "'Inter Tight', Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)" }}>$5000</span>
                </div>
              </div>
            </div>

            {/* Message */}
            <div
              className="flex flex-col gap-6 rounded-lg"
              style={{
                padding: "24px 40px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-white"
                style={{
                  fontFamily: "'Inter Tight', Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 22,
                  lineHeight: "150%",
                }}
              >
                Your Message
              </span>
              <textarea
                placeholder="Type here"
                rows={5}
                className="bg-transparent outline-none w-full border-b resize-none pb-2"
                style={{
                  fontFamily: "'Inter Tight', Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  color: "white",
                  borderColor: "rgba(255,255,255,0.15)",
                }}
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-2">
              <button
                className="bg-white text-black font-medium transition-opacity duration-200 hover:opacity-75"
                style={{
                  fontFamily: "'Inter Tight', Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  padding: "8px 32px",
                  borderRadius: 2,
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px w-full bg-white/10" />
    </section>
  );
}
