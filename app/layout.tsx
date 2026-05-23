import type { Metadata } from "next";
import { Inter, Manrope, DM_Sans, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const BASE_URL = "https://www.connecttechnologies.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Connect Technologies — Digital Agency for Startups & Businesses",
    template: "%s | Connect Technologies",
  },
  description:
    "Connect Technologies is a premium digital agency specialising in UI/UX design, web development, mobile apps, and branding. We help startups and businesses build exceptional digital products.",
  keywords: [
    "Connect Technologies",
    "Connect Tech",
    "digital agency",
    "UI UX design agency",
    "web development company",
    "mobile app development",
    "branding agency",
    "startup digital agency",
  ],
  authors: [{ name: "Connect Technologies", url: BASE_URL }],
  creator: "Connect Technologies",
  publisher: "Connect Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Connect Technologies",
    title: "Connect Technologies — Digital Agency for Startups & Businesses",
    description:
      "Premium digital agency specialising in UI/UX design, web development, mobile apps, and branding.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Connect Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect Technologies — Digital Agency",
    description:
      "Premium digital agency specialising in UI/UX design, web development, mobile apps, and branding.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${dmSans.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
