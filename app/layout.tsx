import type { Metadata } from "next";
import { Inter, Sora } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const sora = Sora({ subsets: ["latin"], weight: ['600', '700', '800'], variable: '--font-sora' });

export const metadata: Metadata = {
  metadataBase: new URL("https://embconception.ca"),
  title: "EMB Conception | Conception mécanique de précision",
  description: "Expert en transformation du métal à froid et systèmes de manutention. Conception 3D, outillages, matriçage, roll forming, convoyeurs et cartonneurs.",
  keywords: ["Conception 3D", "Transformation métal à froid", "SolidWorks", "Poinçons et matrice", "Roll forming", "Convoyeurs", "Cartonneurs", "Matriçage"],
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  themeColor: "#E10026",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
