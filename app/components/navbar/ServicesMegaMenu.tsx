"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "@/data/servicesData";

export default function ServicesMegaMenu() {
  const [open, setOpen] = useState(false);
  const [triangleLeft, setTriangleLeft] = useState("50%");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const triggerCenter = rect.left + rect.width / 2;
      const dropdownWidth = Math.min(1200, window.innerWidth * 0.96);
      const dropdownLeft = (window.innerWidth - dropdownWidth) / 2;
      const relativeLeft = triggerCenter - dropdownLeft;
      setTriangleLeft(`${relativeLeft}px`);
    }
  }, [open]);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button
        ref={triggerRef}
        className="flex items-center gap-1 text-white/80 hover:text-[#0285FE] transition-colors duration-200"
        style={{
          fontFamily: "'Inter Tight', Inter, sans-serif",
          fontSize: 16,
          fontWeight: 400,
          lineHeight: "100%",
          letterSpacing: "-0.01em",
        }}
      >
        Services
        <ChevronDown
          size={14}
          className="opacity-60 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed left-1/2 -translate-x-1/2 z-[100]"
            style={{ top: 72, width: "min(1200px, 96vw)" }}
          >
            {/* Triangle pointer aligned to Services trigger */}
            <div
              className="absolute -top-[9px] w-4 h-4"
              style={{
                left: triangleLeft,
                transform: "translateX(-50%) rotate(45deg)",
                background: "#0a0a0a",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                borderLeft: "1px solid rgba(255,255,255,0.08)",
              }}
            />

            {/* Dropdown container */}
            <div
              className="relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0d0d0d 0%, #080808 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 0,
                boxShadow: "0 24px 80px rgba(2,133,254,0.12), 0 8px 32px rgba(0,0,0,0.6)",
                padding: 56,
              }}
            >
              {/* Ambient glows */}
              <div
                className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[300px]"
                style={{ background: "radial-gradient(circle at 0% 100%, rgba(2,133,254,0.08) 0%, transparent 70%)" }}
              />
              <div
                className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[300px]"
                style={{ background: "radial-gradient(circle at 100% 100%, rgba(2,133,254,0.06) 0%, transparent 70%)" }}
              />

              {/* Heading */}
              <h2
                className="text-white text-center mb-14 relative z-10"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 600,
                  fontSize: 32,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                Our Services
              </h2>

              {/* Grid */}
              <div className="relative z-10 grid grid-cols-3 border-t border-l border-white/[0.08]">
                {servicesData.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setOpen(false)}
                    className="group relative flex flex-col border-r border-b border-white/[0.08] transition-all duration-300 hover:-translate-y-0.5"
                    style={{ padding: 32, minHeight: 240 }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: "rgba(2,133,254,0.04)" }}
                    />
                    <div className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(2,133,254,0.6)]">
                      {service.icon}
                    </div>
                    <div className="mt-10 flex flex-col gap-4 relative z-10">
                      <h3
                        className="text-white"
                        style={{
                          fontFamily: "'Inter Tight', Inter, sans-serif",
                          fontWeight: 500,
                          fontSize: 22,
                          lineHeight: "100%",
                        }}
                      >
                        {service.title}
                      </h3>
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

              {/* Show All button */}
              <div className="relative z-10 flex justify-center mt-10">
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center text-white transition-all duration-300 hover:bg-white/[0.06]"
                  style={{
                    fontFamily: "'Inter Tight', Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: 15,
                    height: 52,
                    paddingLeft: 32,
                    paddingRight: 32,
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "transparent",
                  }}
                >
                  Show All
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
