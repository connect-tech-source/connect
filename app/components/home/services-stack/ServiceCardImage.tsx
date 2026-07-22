import { cloneElement, type ReactElement } from "react";

interface ServiceCardImageProps {
  icon: ReactElement<{ size?: number }>;
}

export default function ServiceCardImage({ icon }: ServiceCardImageProps) {
  return (
    <div
      className="relative flex-1 min-h-0 overflow-hidden rounded-t-[28px]"
      style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
        backgroundColor: "rgba(255,255,255,0.02)",
      }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 w-[65%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(2,133,254,0.35) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {cloneElement(icon, { size: 64 })}
      </div>
    </div>
  );
}
