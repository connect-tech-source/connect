"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RevealText from "../ui/RevealText";
import Reveal from "../ui/Reveal";

// ── Reusable sub-components ──────────────────────────────────────────────────

function SectionHeader({ heading, description }: { heading: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center" style={{ gap: 14 }}>
      <RevealText
        as="h2"
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
      </RevealText>
      <Reveal delay={0.3}>
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
      </Reveal>
    </div>
  );
}

function CheckboxField({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [reasons, setReasons] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  const toggleReason = (reason: string) => {
    setReasons((prev) =>
      prev.includes(reason) ? prev.filter((r) => r !== reason) : [...prev, reason]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/mbdbwlay", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          reasons: reasons.join(", "),
          message,
        }),
      });

      if (res.ok) {
        // Reset form
        setName("");
        setEmail("");
        setMessage("");
        setReasons([]);

        // Show snackbar
        setSnackbar(true);
        setTimeout(() => setSnackbar(false), 3000);
      }
    } catch {
      // silent fail
    } finally {
      setSubmitting(false);
    }
  };

  const fieldStyle = {
    padding: "24px 40px",
    background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
    border: "1px solid rgba(255,255,255,0.08)",
  };

  const inputStyle = {
    fontFamily: "'Inter Tight', Inter, sans-serif",
    fontWeight: 400,
    fontSize: 16,
    color: "white",
    borderColor: "rgba(255,255,255,0.15)",
  };

  const labelStyle = {
    fontFamily: "'Inter Tight', Inter, sans-serif",
    fontWeight: 500,
    fontSize: 22,
    lineHeight: "150%",
  };

  return (
    <section className="relative bg-black overflow-hidden">
      {/* Blue glow — bottom */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(2,133,254,0.12) 0%, transparent 70%)" }}
      />

      {/* Top divider */}
      <div className="h-px w-full bg-white/10" />

      <div className="relative z-10 px-[14px] py-[40px] pt-[100px] md:px-[130px] md:pt-[100px]">

        {/* Divider + heading */}
        <div className="h-px -mx-[14px] md:-mx-[130px] bg-white/10 mb-10" />

        <div className="flex flex-col items-center gap-8">
          <SectionHeader
            heading="Thank you for your Interest in CONNECT."
            description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
          />

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex flex-col gap-5 md:rounded-2xl md:px-[80px] md:py-[80px] md:border md:border-white/[0.08] md:bg-white/[0.02]"
          >
            {/* Row 1 — Full Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="flex flex-col gap-6 rounded-lg" style={fieldStyle}>
                <label className="text-white" style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  placeholder="Type here"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent outline-none w-full border-b pb-2"
                  style={inputStyle}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-6 rounded-lg" style={fieldStyle}>
                <label className="text-white" style={labelStyle}>Email</label>
                <input
                  type="email"
                  placeholder="Type here"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent outline-none w-full border-b pb-2"
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Contact reason */}
            <div className="flex flex-col gap-6 rounded-lg" style={fieldStyle}>
              <span className="text-white" style={labelStyle}>
                Why are you contacting us?
              </span>
              <div className="grid grid-cols-2 gap-4">
                {CONTACT_REASONS.map((r) => (
                  <CheckboxField
                    key={r}
                    label={r}
                    checked={reasons.includes(r)}
                    onChange={() => toggleReason(r)}
                  />
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-6 rounded-lg" style={fieldStyle}>
              <span className="text-white" style={labelStyle}>Your Message</span>
              <textarea
                placeholder="Type here"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-transparent outline-none w-full border-b resize-none pb-2"
                style={{ ...inputStyle, borderColor: "rgba(255,255,255,0.15)" }}
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-2">
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="bg-white text-black font-medium transition-opacity duration-200 hover:opacity-75 disabled:opacity-50"
                style={{
                  fontFamily: "'Inter Tight', Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  padding: "8px 32px",
                  borderRadius: 2,
                }}
              >
                {submitting ? "Submitting..." : "Submit"}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px w-full bg-white/10" />

      {/* Snackbar */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] transition-all duration-300 ${
          snackbar ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{
          background: "#000000",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 8,
          padding: "14px 24px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
        }}
      >
        <p
          className="text-white whitespace-nowrap"
          style={{
            fontFamily: "'Inter Tight', Inter, sans-serif",
            fontWeight: 400,
            fontSize: 15,
          }}
        >
          ✓ Your Form has been submitted, Our team will contact you shortly.
        </p>
      </div>
    </section>
  );
}
