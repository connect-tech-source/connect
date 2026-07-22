"use client";

import { useEffect, useState, type ReactElement } from "react";
import PinnedContainer from "../../ui/PinnedContainer";
import ServiceCard from "./ServiceCard";
import ScrollProgress from "./ScrollProgress";
import { MOBILE_BREAKPOINT, TRANSITION_VH_DESKTOP, TRANSITION_VH_MOBILE } from "./constants";

interface Service {
  icon: ReactElement<{ size?: number }>;
  title: string;
  description: string;
}

interface ServicesStackProps {
  services: Service[];
}

function usePinTransitionVh() {
  const [vh, setVh] = useState(TRANSITION_VH_DESKTOP);

  useEffect(() => {
    const update = () => {
      setVh(window.innerWidth < MOBILE_BREAKPOINT ? TRANSITION_VH_MOBILE : TRANSITION_VH_DESKTOP);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return vh;
}

export default function ServicesStack({ services }: ServicesStackProps) {
  const transitionVh = usePinTransitionVh();
  const heightVh = 100 + (services.length - 1) * transitionVh;

  return (
    <PinnedContainer heightVh={heightVh} className="relative">
      {(progress) => (
        <>
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              progress={progress}
              index={i}
              total={services.length}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
          <ScrollProgress progress={progress} total={services.length} />
        </>
      )}
    </PinnedContainer>
  );
}
