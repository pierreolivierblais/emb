import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://embconception.ca"),
  icons: {
    icon: "/favicon.svg",
  },
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BGEK9PL7LX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BGEK9PL7LX');
          `}
        </Script>
      </body>
    </html>
  );
}
