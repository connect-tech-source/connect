import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Connect Technologies' services — UI/UX design, website development, mobile app development, and branding for startups and businesses.",
  alternates: { canonical: "https://www.connecttechnologies.in/services" },
  openGraph: {
    url: "https://www.connecttechnologies.in/services",
    title: "Services | Connect Technologies",
    description:
      "UI/UX design, website development, mobile app development, and branding for startups and businesses.",
  },
};

const Services = () => {
  return (
    <div>Our Services</div>
  )
}

export default Services