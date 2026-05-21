const NAV_COLUMNS = [
  [
    { label: "About us", href: "/about" },
    { label: "Services", href: "/services" },
  ],
  [
    { label: "Our Work", href: "/work" },
    { label: "Contact us", href: "/contact" },
  ],
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden mt-auto"
      style={{ background: "#020408" }}
    >
      {/* Top-right blue glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px]"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, #0285FE 0%, #0285FE00 70%)",
          opacity: 0.25,
          filter: "blur(80px)",
        }}
      />

      {/* Main Parent */}
      <div className="relative z-10 px-[30px] py-[80px] md:px-[80px] md:pb-[48px] md:pt-[195px]">
        <div className="flex flex-col gap-14 md:flex-row md:items-start md:justify-between">
          {/* Left — headline + CTA */}
          <div className="flex flex-col" style={{ gap: 24 }}>
            <p
              className="text-white max-w-[550px]"
              style={{ fontSize: 24, fontWeight: 400, lineHeight: "100%" }}
            >
              Share your ideas with us, and we&apos;ll help turn
              <br />
              them into reality.
            </p>
            <button className="w-fit bg-white text-black text-base font-medium leading-none px-7 py-4 rounded-sm transition-opacity duration-200 hover:opacity-75">
              Contact Us
            </button>
          </div>

          {/* Right — nav columns */}
          <nav className="grid grid-cols-2 gap-x-10 gap-y-6 md:flex md:flex-row md:gap-20">
            {NAV_COLUMNS.map((col, ci) => (
              <ul key={ci} className="flex flex-col gap-6">
                {col.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-base font-normal leading-none transition-opacity duration-200 hover:text-white/90 whitespace-nowrap"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>
      </div>

      {/* CONNECT logo */}
      <img
        src="/FooterLogo.png"
        alt="Connect"
        className="pointer-events-none select-none w-full"
      />

      {/* Divider — true 100% width */}
      <div className="h-px w-full bg-white/10" />

      {/* Bottom row */}
      <div
        className="px-[30px] pb-[80px] pt-6 flex items-center justify-between gap-2 text-white/40 text-[12px] md:text-base md:px-[80px] md:pb-[48px]"
        style={{
          fontWeight: 400,
          lineHeight: "100%",
          letterSpacing: "-0.04em",
        }}
      >
        <span>All rights reserved 2026</span>
        <div className="flex gap-6">
          <a
            href="#"
            className="transition-colors duration-200 hover:text-white/70"
          >
            Terms &amp; Condition
          </a>
          <a
            href="#"
            className="transition-colors duration-200 hover:text-white/70"
          >
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
}
