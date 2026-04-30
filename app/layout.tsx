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
  title: "maisie — don't miss a thing in your postpartum blur",
  description:
    "The daily habit for new mothers. Capture the big moments, the small ones, and the ones hiding in your camera roll. Your first year becomes a beautiful hardcover Storyboard book.",
  openGraph: {
    title: "maisie — don't miss a thing in your postpartum blur",
    description:
      "The daily habit for new mothers. Capture the big moments, the small ones, and the ones hiding in your camera roll.",
    siteName: "maisie",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
