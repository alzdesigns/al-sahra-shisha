import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Al Sahra Shisha Delivery — Premium Shisha to Your Door · Melbourne",
  description:
    "Build your perfect shisha online — fresh fruit heads, premium flavours, delivered hot across Melbourne. Customise base, flavour, head and add-ons in three steps.",
  authors: [{ name: "Al Sahra" }],
  openGraph: {
    title: "Al Sahra Shisha Delivery — Melbourne",
    description: "Premium shisha delivered. Fresh heads, premium flavours, all Melbourne.",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@alsahra.shisha",
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
      className={`${inter.variable} ${cormorant.variable} ${greatVibes.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
