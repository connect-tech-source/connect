export default function ContactHero() {
  return (
    <div className="flex flex-col items-center text-center gap-6 md:gap-10">
      <h1
        className="text-white"
        style={{
          fontFamily: "Manrope, sans-serif",
          fontWeight: 600,
          fontSize: "clamp(40px, 5vw, 64px)",
          lineHeight: "110%",
          letterSpacing: "-0.04em",
        }}
      >
        Contact us
      </h1>

      <h2
        className="text-white"
        style={{
          fontFamily: "Manrope, sans-serif",
          fontWeight: 600,
          fontSize: "clamp(18px, 3vw, 40px)",
          lineHeight: "110%",
          letterSpacing: "-0.04em",
        }}
      >
        Let&apos;s Build Something Great Together
      </h2>

      <p
        className="max-w-[700px]"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "100%",
          letterSpacing: "-0.03em",
          color: "rgba(255,255,255,0.65)",
          textAlign: "center",
        }}
      >
        Have a project in mind or need help bringing your ideas to life? We&apos;d love to hear from you.
      </p>
    </div>
  );
}
