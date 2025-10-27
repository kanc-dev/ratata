import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ratata — Cute • Chaotic • Cheesy (Solana)",
  description: "Ratata: a playful NFT collection and meme token on Solana. Mint, stake, join the DAO, and collect cheese!",
  keywords: ["Ratata", "NFT", "Solana", "Crypto", "Meme Token", "$RATA"],
  openGraph: {
    title: "Ratata — Cute • Chaotic • Cheesy",
    description: "A playful NFT collection and meme token on Solana",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ratata — Cute • Chaotic • Cheesy",
    description: "A playful NFT collection and meme token on Solana",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50 text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
