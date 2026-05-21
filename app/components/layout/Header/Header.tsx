"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Our Work", href: "/work" },
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

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
            <div className="relative w-[120px] h-[36px]">
              <Image
                src="/HeaderLogo.png"
                alt="Connect"
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1 text-white/80 hover:text-[#0285FE] transition-colors duration-200"
                  style={{ fontFamily: "'Inter Tight', Inter, sans-serif", fontSize: 16, fontWeight: 400, lineHeight: "100%", letterSpacing: "-0.01em" }}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={14} className="opacity-60" />}
                </a>
              ))}
            </nav>

            {/* Desktop Contact button */}
            <button
              className="hidden md:block bg-white text-black text-sm font-medium px-5 py-2 transition-opacity duration-200 hover:opacity-75"
              style={{ borderRadius: 2 }}
            >
              Contact Us
            </button>

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

      {/* Drawer overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full z-[60] flex flex-col md:hidden transition-transform duration-300 ease-in-out ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ width: "80%", background: "#050816", boxShadow: "-4px 0 40px rgba(2,133,254,0.15)" }}
      >
        {/* Drawer top glow */}
        <div
          className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
          style={{ background: "radial-gradient(circle at 100% 0%, rgba(2,133,254,0.2) 0%, transparent 70%)" }}
        />

        {/* Close button */}
        <div className="flex justify-end p-5">
          <button onClick={() => setDrawerOpen(false)} className="text-white/70 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex flex-col flex-1 px-8 pt-4">
          {NAV_LINKS.map((link, i) => (
            <div key={link.label}>
              <a
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className="flex items-center justify-between py-5 text-white/80 hover:text-[#0285FE] transition-colors duration-200"
                style={{ fontSize: 22, fontWeight: 400, letterSpacing: "-0.01em" }}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={18} className="opacity-50" />}
              </a>
              {i < NAV_LINKS.length - 1 && (
                <div className="h-px w-full" style={{ background: "rgba(2,133,254,0.12)" }} />
              )}
            </div>
          ))}
        </nav>

        {/* Drawer Contact button */}
        <div className="px-8 pb-10">
          <button
            className="w-full bg-white text-black font-medium py-3 transition-opacity duration-200 hover:opacity-75"
            style={{ borderRadius: 2 }}
            onClick={() => setDrawerOpen(false)}
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
