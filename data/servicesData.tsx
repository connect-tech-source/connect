import { Paintbrush, Monitor, Smartphone, PenTool, Lightbulb, BarChart2 } from "lucide-react";
import { ReactNode } from "react";

export interface Service {
  title: string;
  slug: string;
  description: string;
  icon: ReactNode;
}

export const servicesData: Service[] = [
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "We craft intuitive and visually stunning interfaces that deliver seamless user experiences and drive engagement across all platforms.",
    icon: <Paintbrush size={32} color="white" strokeWidth={1.5} />,
  },
  {
    title: "Website Development",
    slug: "website-development",
    description:
      "From landing pages to complex web apps, we build fast, scalable, and modern websites tailored to your business needs.",
    icon: <Monitor size={32} color="white" strokeWidth={1.5} />,
  },
  {
    title: "Mobile App Design",
    slug: "mobile-app-design",
    description:
      "We develop high-performance iOS and Android applications that provide smooth experiences and solve real user problems.",
    icon: <Smartphone size={32} color="white" strokeWidth={1.5} />,
  },
  {
    title: "Branding & Identity",
    slug: "branding-and-identity",
    description:
      "We build powerful brand identities that communicate your values, stand out in the market, and leave a lasting impression.",
    icon: <PenTool size={32} color="white" strokeWidth={1.5} />,
  },
  {
    title: "Product Strategy",
    slug: "product-strategy",
    description:
      "We help you define, validate, and execute a product roadmap that aligns with your business goals and user needs.",
    icon: <Lightbulb size={32} color="white" strokeWidth={1.5} />,
  },
  {
    title: "SEO & Marketing",
    slug: "seo-and-marketing",
    description:
      "We grow your digital presence through data-driven SEO, content strategy, and performance marketing campaigns.",
    icon: <BarChart2 size={32} color="white" strokeWidth={1.5} />,
  },
];
