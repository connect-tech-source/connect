"use client";

import { Industry } from "./industriesData";

export default function IndustryCard({ title, description, icon }: Industry) {
  return (
    <div
      className="group flex flex-col w-full transition-all duration-300 ease-out hover:-translate-y-1"
      style={{
        height: 299,
        padding: "32px 20px",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 20,
        boxShadow: "0 0 0 0 rgba(2,133,254,0)",
        transition: "transform 300ms ease-out, border-color 300ms ease-out, box-shadow 300ms ease-out",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.28)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(2,133,254,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.12)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 0 rgba(2,133,254,0)";
      }}
    >
      {/* Icon */}
      <div className="shrink-0">{icon}</div>

      {/* Gap between icon and heading */}
      <div className="mt-10 flex flex-col gap-4">
        <h3
          className="text-white"
          style={{
            fontFamily: "'Inter Tight', Inter, sans-serif",
            fontWeight: 500,
            fontSize: 24,
            lineHeight: "100%",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontFamily: "'Inter Tight', Inter, sans-serif",
            fontWeight: 400,
            fontSize: 15,
            lineHeight: "100%",
            letterSpacing: "-0.01em",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
