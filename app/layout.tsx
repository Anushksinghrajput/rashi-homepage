import type { Metadata, Viewport } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import TopToolbar from "./components/TopToolbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Rashi.AI - Extract Insights from the Internet",
  description:
    "Rashi is a generative insights engine. Bespoke, contextual intelligence to your corpus of data. Our algorithms reduce research time and costs while improving accuracy and speed.",
  openGraph: {
    title: "Rashi.AI - Extract Insights from the Internet",
    description:
      "Generative insights at your fingertips. Let AI do the heavy lifting and unlock deeper insights faster.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${greatVibes.variable} font-sans antialiased bg-black text-white`}>
        <a href="#hero" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-[var(--neon-pink)] focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <TopToolbar />
        {children}
      </body>
    </html>
  );
}
