"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData } from "@/data/servicesData";
import { StaggerGroup, StaggerItem } from "../components/ui/StaggerGrid";

export default function ServicesGrid() {
  return (
    <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.08]">
      {servicesData.map((service) => (
        <StaggerItem key={service.slug}>
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="h-full">
            <Link
              href={`/services/${service.slug}`}
              className="group relative flex flex-col h-full border-r border-b border-white/[0.08] transition-all duration-300"
              style={{ padding: 40, minHeight: 260 }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "rgba(2,133,254,0.04)" }}
              />
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(2,133,254,0.6)] w-fit"
              >
                <motion.div variants={{ rest: { scale: 1, rotate: 0 }, hover: { scale: 1.15, rotate: -8 } }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                  {service.icon}
                </motion.div>
              </motion.div>
              <div className="mt-10 flex flex-col gap-4 relative z-10">
                <h2
                  className="text-white"
                  style={{
                    fontFamily: "'Inter Tight', Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: 22,
                    lineHeight: "100%",
                  }}
                >
                  {service.title}
                </h2>
                <p
                  style={{
                    fontFamily: "'Inter Tight', Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "180%",
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </Link>
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
