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
    default: "Connect Technologies | #1 Digital Agency in India",
    template: "%s | Connect Technologies",
  },
  description:
    "Connect Technologies is India's premier digital agency specialising in UI/UX design, web development, mobile app development, and branding. Trusted by startups and enterprises to build world-class digital products.",
  keywords: [
    "Connect Technologies",
    "Connect",
    "Connect Tech",
    "Connect digital agency",
    "Connect Technologies India",
    "digital agency India",
    "UI UX design agency India",
    "web development company India",
    "mobile app development India",
    "branding agency India",
    "startup digital agency",
    "product design agency",
    "best digital agency India",
    "top web development company",
    "SEO agency India",
    "software development company India",
  ],
  authors: [{ name: "Connect Technologies", url: BASE_URL }],
  creator: "Connect Technologies",
  publisher: "Connect Technologies",
  category: "Digital Agency",
  classification: "Business",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Connect Technologies",
    title: "Connect Technologies | #1 Digital Agency in India",
    description:
      "Connect Technologies is India's premier digital agency. We build world-class UI/UX, websites, mobile apps, and brand identities for startups and enterprises.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Connect Technologies — Digital Agency India",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@connecttechIN",
    creator: "@connecttechIN",
    title: "Connect Technologies | #1 Digital Agency in India",
    description:
      "India's premier digital agency for UI/UX design, web development, mobile apps, and branding.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "V_ytzr12ppazY3z0cdTUM77xyIxkIxH8zRBHblNv0so",
  },
  other: {
    "theme-color": "#000000",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Connect Technologies",
              alternateName: ["Connect", "Connect Tech"],
              url: "https://www.connecttechnologies.in",
              logo: "https://www.connecttechnologies.in/HeaderLogo.png",
              description:
                "Connect Technologies is India's premier digital agency specialising in UI/UX design, web development, mobile app development, and branding.",
              foundingDate: "2020",
              areaServed: "IN",
              serviceType: [
                "UI/UX Design",
                "Web Development",
                "Mobile App Development",
                "Branding",
                "Product Strategy",
                "SEO & Marketing",
              ],
              sameAs: [
                "https://www.linkedin.com/company/connecttechnologies",
                "https://www.instagram.com/connecttechnologies",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi"],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
