"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import ServicesMegaMenu from "@/app/components/navbar/ServicesMegaMenu";
import { servicesData } from "@/data/servicesData";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
];

function HamburgerMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="18" height="2" rx="1" fill="white" />
      <rect x="3" y="11" width="18" height="2" rx="1" fill="white" />
      <rect x="3" y="16" width="18" height="2" rx="1" fill="white" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.571l5.902-1.547A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.523-5.183-1.432l-.371-.22-3.502.918.935-3.41-.242-.382A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
    </svg>
  );
}

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Fixed header wrapper */}
      <header className="fixed md:relative top-0 left-0 right-0 z-50 flex justify-center px-[14px] py-4 md:px-[130px]">

        {/* Border container */}
        <div className="relative w-full rounded-[18px] border border-white/20">

          {/* Inner dark container */}
          <div
            className="relative flex items-center justify-between w-full rounded-[18px] px-6 py-3 md:px-8"
            style={{ background: "rgba(0,0,0,1)", backdropFilter: "blur(20px)" }}
          >
            {/* Logo */}
            <Link href="/" className="relative w-[120px] h-[36px] block">
              <Image
                src="/HeaderLogo.png"
                alt="Connect"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-[#0285FE] transition-colors duration-200"
                  style={{ fontFamily: "'Inter Tight', Inter, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: "100%", letterSpacing: "-0.01em" }}
                >
                  {link.label}
                </Link>
              ))}
              <ServicesMegaMenu />
            </nav>

            {/* Desktop Contact button */}
            <Link
              href="/contact"
              className="hidden md:block bg-white text-black text-sm font-medium px-5 py-2 transition-opacity duration-200 hover:opacity-75"
              style={{ borderRadius: 2 }}
            >
              Contact Us
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <HamburgerMenu />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(0,0,0,0.5)", backdropFilter: drawerOpen ? "blur(6px)" : "none" }}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full z-[60] flex flex-col md:hidden transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          width: "92%",
          background: "#000000",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Bottom ambient glow */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-[300px] h-[300px]"
          style={{ background: "radial-gradient(circle at 0% 100%, rgba(2,133,254,0.12) 0%, transparent 70%)" }}
        />

        {/* Top — logo + close */}
        <div
          className="flex items-center justify-between px-6 py-6"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="relative w-[110px] h-[32px]">
            <Image src="/HeaderLogo.png" alt="Connect" fill className="object-contain object-left" />
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-white hover:opacity-60 transition-opacity duration-200"
            aria-label="Close menu"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col flex-1 px-6 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <div key={link.label} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <Link
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className="flex items-center py-4 text-white hover:opacity-70 transition-opacity duration-200"
                style={{
                  fontFamily: "'Inter Tight', Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "140%",
                  letterSpacing: "0%",
                }}
              >
                {link.label}
              </Link>
            </div>
          ))}

          {/* Services accordion */}
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <button
              onClick={() => setServicesOpen((p) => !p)}
              className="w-full flex items-center justify-between py-4 text-white hover:opacity-70 transition-opacity duration-200"
              style={{
                fontFamily: "'Inter Tight', Inter, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "140%",
              }}
            >
              Services
              <ChevronDown
                size={16}
                className="text-white transition-transform duration-300"
                style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: servicesOpen ? "400px" : "0px" }}
            >
              <div className="flex flex-col pb-3" style={{ paddingTop: 8, paddingBottom: 12 }}>
                {servicesData.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setDrawerOpen(false)}
                    className="hover:opacity-100 transition-opacity duration-200"
                    style={{
                      fontFamily: "'Inter Tight', Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: "140%",
                      color: "rgba(255,255,255,0.75)",
                      paddingTop: 9,
                      paddingBottom: 9,
                    }}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Bottom section */}
        <div className="px-6 pb-10 flex flex-col gap-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24 }}>
          <Link
            href="/contact"
            onClick={() => setDrawerOpen(false)}
            className="text-white hover:opacity-70 transition-opacity duration-200"
            style={{
              fontFamily: "'Inter Tight', Inter, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "140%",
            }}
          >
            Contact us
          </Link>

          <div className="flex items-center gap-3">
            {[
              { icon: <LinkedInIcon />, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: <WhatsAppIcon />, href: "https://wa.me", label: "WhatsApp" },
              { icon: <InstagramIcon />, href: "https://instagram.com", label: "Instagram" },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center rounded-full transition-opacity duration-200 hover:opacity-75"
                style={{ width: 36, height: 36, background: "#0285FE", flexShrink: 0 }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
