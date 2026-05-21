import { type ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-6 w-full px-[50px] py-[50px] md:px-[24px] md:py-[80px]">
      <div>{icon}</div>

      <div className="flex flex-col gap-4">
        <h3
          className="text-white"
          style={{
            fontFamily: "'Inter Tight', Inter, sans-serif",
            fontWeight: 600,
            fontSize: 24,
            lineHeight: "150%",
            letterSpacing: "-0.006em",
          }}
        >
          {title}
        </h3>
        <p
          className="text-white/50"
          style={{
            fontFamily: "'Inter Tight', Inter, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: "-0.006em",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
