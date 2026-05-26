import { industriesData } from "./industriesData";
import IndustryCard from "./IndustryCard";

export default function IndustriesSection() {
  return (
    <section className="bg-black w-full px-6 pt-[120px] pb-0 md:px-20 md:pt-[100px]">

      {/* Top full-width divider */}
      <div className="h-px -mx-6 md:-mx-20 bg-white/10 mb-[50px] md:mb-[100px]" />

      {/* Top content */}
      <div className="flex flex-col gap-6 mb-[50px] md:mb-[100px]">
        <h2
          className="text-white"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(32px, 5vw, 64px)",
            lineHeight: "120%",
            letterSpacing: "-2px",
          }}
        >
          Industries We Serve
        </h2>

        <p
          className="max-w-[500px]"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "100%",
            letterSpacing: "-0.03em",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          We partner with businesses across diverse industries to deliver scalable, secure, and future-ready digital solutions.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industriesData.map((industry) => (
          <IndustryCard key={industry.title} {...industry} />
        ))}
      </div>

      {/* Bottom spacing + full-width divider */}
      <div className="mt-[50px] md:mt-[100px]">
        <div className="h-px -mx-6 md:-mx-20 bg-white/10" />
      </div>

    </section>
  );
}
