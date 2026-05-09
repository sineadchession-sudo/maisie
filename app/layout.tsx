import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maisieapp.com"),
  title: {
    default: "maisie — capture your baby's first year, one day at a time",
    template: "%s | maisie",
  },
  description:
    "maisie is the daily habit that helps mums capture and celebrate every moment — for their family, every year. One photo, one thought, one tiny win a day. Ends in a beautiful hardcover Storyboard book.",
  keywords: [
    "baby first year app",
    "baby memory app",
    "postpartum app",
    "baby scrapbook app",
    "baby journal app",
    "new mum app",
    "baby milestone app",
    "postnatal wellbeing",
    "baby keepsake book",
    "maisie app",
    "first year baby Ireland",
    "baby photo journal",
    "mum app all ages",
    "family memory app",
    "yearly family keepsake",
    "mum second baby app",
    "family scrapbook app Ireland",
    "best thing today app",
  ],
  authors: [{ name: "maisie", url: "https://maisieapp.com" }],
  creator: "maisie",
  publisher: "maisie",
  category: "lifestyle",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    alternateLocale: ["en_GB", "en_US"],
    url: "https://maisieapp.com",
    siteName: "maisie",
    title: "maisie — capture your baby's first year, one day at a time",
    description:
      "The daily habit that helps new mums capture and celebrate every moment of their baby's first year — ending in a beautiful hardcover Storyboard book.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "maisie — your baby's first year, beautifully captured",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "maisie — capture your baby's first year, one day at a time",
    description:
      "The daily habit for new mums. Every moment captured. Every tiny win celebrated. Ends in a hardcover Storyboard book.",
    images: ["/opengraph-image"],
    creator: "@maisieapp_",
    site: "@maisieapp_",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#A855F7" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://maisieapp.com",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "maisie",
  },
  other: {
    "msapplication-TileColor": "#A855F7",
    "theme-color": "#A855F7",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "maisie",
  url: "https://maisieapp.com",
  logo: "https://maisieapp.com/logo.png",
  description:
    "maisie is a daily capture and memory app for new mums, documenting their baby's first year and producing a hardcover Storyboard book.",
  foundingDate: "2025",
  foundingLocation: "Ireland",
  founder: [
    { "@type": "Person", name: "Sinead", jobTitle: "Founder & CEO" },
    { "@type": "Person", name: "Neve", jobTitle: "Co-Founder & CTO" },
  ],
  sameAs: [
    "https://instagram.com/maisieapp_",
    "https://tiktok.com/@maisie.app",
    "https://linkedin.com/company/maisie-app",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://maisieapp.com/waitlist",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
