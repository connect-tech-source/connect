"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import { StaggerGroup, StaggerItem } from "../ui/StaggerGrid";

const CONTACT_DETAILS: { icon: ReactNode; text: string }[] = [
  {
    icon: <MapPin size={20} strokeWidth={1.5} />,
    text: "Ashta, Sehore District, Madhya Pradesh - 466116, India",
  },
  {
    icon: <Mail size={20} strokeWidth={1.5} />,
    text: "connecttechnologiesofficial@gmail.com",
  },
  {
    icon: <Phone size={20} strokeWidth={1.5} />,
    text: "+91 95895-40876",
  },
];

export default function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[1100px] mx-auto overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 0,
        boxShadow: "0 0 80px rgba(2,133,254,0.08), 0 0 0 1px rgba(2,133,254,0.04)",
        padding: "40px",
      }}
    >
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[350px] h-[250px]"
        style={{ background: "radial-gradient(circle at 0% 100%, rgba(2,133,254,0.08) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[350px] h-[250px]"
        style={{ background: "radial-gradient(circle at 100% 100%, rgba(2,133,254,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col md:flex-row gap-10 md:gap-16">

        {/* Left */}
        <div className="flex-1 flex flex-col">
          <h3
            className="text-white"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 3vw, 40px)",
              lineHeight: "100%",
              letterSpacing: "-2px",
              marginBottom: 32,
            }}
          >
            Get in Touch
          </h3>

          <p
            className="max-w-[420px]"
            style={{
              fontFamily: "'Inter Tight', Inter, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 1.8vw, 24px)",
              lineHeight: "100%",
              letterSpacing: "-0.54px",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Reach out to us using the details below, and our team will get back to you as soon as possible.
          </p>
        </div>

        {/* Vertical divider — desktop only */}
        <div className="hidden md:block w-px bg-white/[0.08] self-stretch" />

        {/* Right */}
        <div className="flex-1 flex flex-col gap-8">
          <span
            style={{
              fontFamily: "'Inter Tight', Inter, sans-serif",
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
            }}
          >
            Office
          </span>

          <StaggerGroup className="flex flex-col gap-6">
            {CONTACT_DETAILS.map(({ icon, text }) => (
              <StaggerItem key={text}>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.25 }} className="flex items-center gap-4">
                  {/* Icon container */}
                  <motion.div
                    whileHover={{ scale: 1.1, borderColor: "rgba(2,133,254,0.5)", color: "#0285FE" }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 flex items-center justify-center text-white/70"
                    style={{
                      width: 40,
                      height: 40,
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 8,
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    {icon}
                  </motion.div>

                  {/* Text */}
                  <span
                    className="text-white break-all"
                    style={{
                      fontFamily: "'Inter Tight', Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(14px, 1.5vw, 20px)",
                      lineHeight: "140%",
                      letterSpacing: "0px",
                    }}
                  >
                    {text}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </motion.div>
  );
}
