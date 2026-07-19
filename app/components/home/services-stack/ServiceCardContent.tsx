interface ServiceCardContentProps {
  index: number;
  title: string;
  description: string;
}

export default function ServiceCardContent({ index, title, description }: ServiceCardContentProps) {
  return (
    <div className="flex flex-col gap-3 px-8 py-7 md:px-10 md:py-8">
      <span
        className="text-[#0285FE]"
        style={{
          fontFamily: "'Inter Tight', Inter, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          letterSpacing: "0.12em",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3
        className="text-white"
        style={{
          fontFamily: "Manrope, sans-serif",
          fontWeight: 600,
          fontSize: "clamp(22px, 2.4vw, 28px)",
          lineHeight: "120%",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h3>

      <p
        className="text-white/55"
        style={{
          fontFamily: "'Inter Tight', Inter, sans-serif",
          fontWeight: 400,
          fontSize: 15,
          lineHeight: "160%",
          letterSpacing: "-0.006em",
        }}
      >
        {description}
      </p>
    </div>
  );
}
