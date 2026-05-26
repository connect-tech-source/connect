import {
  ShoppingCart,
  Pill,
  Factory,
  Store,
  HeartPulse,
  Landmark,
  GraduationCap,
  Truck,
  Sprout,
  UtensilsCrossed,
  Plane,
  CalendarDays,
} from "lucide-react";
import { ReactNode } from "react";

export interface Industry {
  title: string;
  description: string;
  icon: ReactNode;
}

export const industriesData: Industry[] = [
  {
    title: "Retail & FMCG",
    description:
      "Empowering retail and FMCG brands with digital storefronts, inventory systems, and customer engagement platforms.",
    icon: <ShoppingCart size={36} color="white" strokeWidth={1.5} />,
  },
  {
    title: "Pharmaceuticals",
    description:
      "Building compliant, secure digital solutions for pharma companies — from portals to supply chain management.",
    icon: <Pill size={36} color="white" strokeWidth={1.5} />,
  },
  {
    title: "Manufacturing",
    description:
      "Digitising manufacturing operations with smart dashboards, workflow automation, and real-time reporting tools.",
    icon: <Factory size={36} color="white" strokeWidth={1.5} />,
  },
  {
    title: "E-commerce",
    description:
      "Crafting high-converting e-commerce experiences with seamless UX, fast performance, and scalable architecture.",
    icon: <Store size={36} color="white" strokeWidth={1.5} />,
  },
  {
    title: "Healthcare & Wellness",
    description:
      "Designing patient-centric digital products for clinics, hospitals, and wellness brands that prioritise trust.",
    icon: <HeartPulse size={36} color="white" strokeWidth={1.5} />,
  },
  {
    title: "Banking & Finance",
    description:
      "Delivering secure, intuitive fintech solutions — from banking apps to investment platforms and payment systems.",
    icon: <Landmark size={36} color="white" strokeWidth={1.5} />,
  },
  {
    title: "Education",
    description:
      "Building engaging EdTech platforms, LMS systems, and learning apps that make education accessible and effective.",
    icon: <GraduationCap size={36} color="white" strokeWidth={1.5} />,
  },
  {
    title: "Logistics & Transportation",
    description:
      "Streamlining logistics with real-time tracking, fleet management, and end-to-end supply chain digital tools.",
    icon: <Truck size={36} color="white" strokeWidth={1.5} />,
  },
  {
    title: "Agri-tech",
    description:
      "Connecting farmers and agri-businesses with smart digital tools for crop management, trade, and market access.",
    icon: <Sprout size={36} color="white" strokeWidth={1.5} />,
  },
  {
    title: "Food & Restaurant",
    description:
      "Creating seamless ordering, delivery, and restaurant management platforms that delight customers and operators.",
    icon: <UtensilsCrossed size={36} color="white" strokeWidth={1.5} />,
  },
  {
    title: "Travel, Hospitality & Tourism",
    description:
      "Building immersive booking experiences, hotel management systems, and travel apps for modern explorers.",
    icon: <Plane size={36} color="white" strokeWidth={1.5} />,
  },
  {
    title: "Event Management",
    description:
      "Powering event companies with ticketing platforms, attendee management, and live event digital experiences.",
    icon: <CalendarDays size={36} color="white" strokeWidth={1.5} />,
  },
];
