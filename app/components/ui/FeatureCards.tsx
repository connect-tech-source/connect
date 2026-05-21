import Image from "next/image";

interface Card {
  image: string;
  heading: string;
  description: string;
}

interface FeatureCardsProps {
  cards: Card[];
}

export default function FeatureCards({ cards }: FeatureCardsProps) {
  return (
    <div className="relative z-10 flex flex-col md:flex-row w-full">
      <div className="flex flex-col gap-6 text-left flex-1" style={{ padding: "50px 50px" }}>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image src={cards[0].image} alt={cards[0].heading} fill className="object-cover" />
        </div>
        <h3
          className="text-white"
          style={{ fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: "clamp(22px, 2.2vw, 30px)", lineHeight: "150%", letterSpacing: "-0.006em" }}
        >
          {cards[0].heading}
        </h3>
        <p
          className="text-white/60"
          style={{ fontFamily: "'Inter Tight', Inter, sans-serif", fontWeight: 400, fontSize: 18, lineHeight: "24px", letterSpacing: "-0.006em" }}
        >
          {cards[0].description}
        </p>
      </div>

      {/* Center divider — absolute so it ignores card padding and touches top/bottom dividers */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
      <div className="md:hidden h-px w-full bg-white/10" />

      <div className="flex flex-col gap-6 text-left flex-1" style={{ padding: "50px 50px" }}>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image src={cards[1].image} alt={cards[1].heading} fill className="object-cover" />
        </div>
        <h3
          className="text-white"
          style={{ fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: "clamp(22px, 2.2vw, 30px)", lineHeight: "150%", letterSpacing: "-0.006em" }}
        >
          {cards[1].heading}
        </h3>
        <p
          className="text-white/60"
          style={{ fontFamily: "'Inter Tight', Inter, sans-serif", fontWeight: 400, fontSize: 18, lineHeight: "24px", letterSpacing: "-0.006em" }}
        >
          {cards[1].description}
        </p>
      </div>
    </div>
  );
}
