import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `https://www.connecttechnologies.in/services/${slug}` },
    openGraph: {
      url: `https://www.connecttechnologies.in/services/${slug}`,
      title: `${service.title} | Connect Technologies`,
      description: service.description as string,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <main className="bg-black min-h-screen">
      <section className="px-6 pt-[120px] pb-20 md:px-20 md:pt-[100px] md:pb-[100px]">

        {/* Back link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 mb-12 transition-opacity duration-200 hover:opacity-70"
          style={{
            fontFamily: "'Inter Tight', Inter, sans-serif",
            fontSize: 14,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          ← Back to Services
        </Link>

        {/* Hero */}
        <div className="flex flex-col gap-8 max-w-[760px]">
          <div className="transition-all duration-300 drop-shadow-[0_0_12px_rgba(2,133,254,0.4)]">
            {service.icon}
          </div>

          <h1
            className="text-white"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 5vw, 64px)",
              lineHeight: "110%",
              letterSpacing: "-0.04em",
            }}
          >
            {service.title}
          </h1>

          <p
            style={{
              fontFamily: "'Inter Tight', Inter, sans-serif",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: "170%",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            {service.description}
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-black transition-opacity duration-200 hover:opacity-75 w-fit"
            style={{
              fontFamily: "'Inter Tight', Inter, sans-serif",
              fontWeight: 500,
              fontSize: 16,
              padding: "10px 24px",
              borderRadius: 2,
            }}
          >
            Start a Project
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/[0.08] my-16" />

        {/* Other services */}
        <div className="flex flex-col gap-8">
          <h2
            className="text-white"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(24px, 3vw, 36px)",
              lineHeight: "110%",
              letterSpacing: "-0.03em",
            }}
          >
            Other Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.08]">
            {servicesData
              .filter((s) => s.slug !== slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group relative flex flex-col border-r border-b border-white/[0.08] transition-all duration-300 hover:-translate-y-0.5"
                  style={{ padding: 32, minHeight: 200 }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: "rgba(2,133,254,0.04)" }}
                  />
                  <div className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(2,133,254,0.6)] transition-all duration-300">
                    {s.icon}
                  </div>
                  <div className="mt-8 flex flex-col gap-3 relative z-10">
                    <h3
                      className="text-white"
                      style={{
                        fontFamily: "'Inter Tight', Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: 20,
                        lineHeight: "100%",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter Tight', Inter, sans-serif",
                        fontWeight: 400,
                        fontSize: 13,
                        lineHeight: "170%",
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      {s.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
