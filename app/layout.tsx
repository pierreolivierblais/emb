import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
});

const siteUrl = "https://embconception.ca";
const siteTitle = "EMB Conception | Conception mécanique de précision à Thetford Mines";
const siteDescription =
  "EMB Conception, à Thetford Mines, QC, accompagne les entreprises en conception mécanique, transformation du métal à froid, matriçage, roll forming et manutention industrielle.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "EMB Conception",
      inLanguage: "fr-CA",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: "EMB Conception",
      url: siteUrl,
      image: `${siteUrl}/hero2.png`,
      logo: `${siteUrl}/logo.svg`,
      telephone: "+1-581-724-0163",
      address: {
        "@type": "PostalAddress",
        streetAddress: "658 Des Rosiers",
        addressLocality: "Thetford Mines",
        addressRegion: "QC",
        postalCode: "G6G 5Y1",
        addressCountry: "CA",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Thetford Mines",
        },
        {
          "@type": "AdministrativeArea",
          name: "Québec",
        },
      ],
      sameAs: ["https://www.linkedin.com/company/emb-conception-inc/"],
      description: siteDescription,
      knowsAbout: [
        "Conception mécanique",
        "Transformation du métal à froid",
        "Matriçage",
        "Roll forming",
        "Manutention industrielle",
        "Conception 3D",
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "EMB Conception",
  icons: {
    icon: "/favicon.svg",
  },
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "conception mécanique Thetford Mines",
    "conception mécanique Québec",
    "transformation du métal à froid",
    "matriçage",
    "roll forming",
    "manutention industrielle",
    "conception 3D",
    "cartonneurs industriels",
    "convoyeurs",
    "poinçons et matrices",
  ],
  category: "industrial engineering",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "EMB Conception", url: siteUrl }],
  creator: "EMB Conception",
  publisher: "EMB Conception",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: siteUrl,
    siteName: "EMB Conception",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/hero2.png",
        width: 896,
        height: 1017,
        alt: "EMB Conception - conception mécanique industrielle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/hero2.png"],
  },
  other: {
    "geo.region": "CA-QC",
    "geo.placename": "Thetford Mines",
    "ICBM": "46.0931, -71.3034",
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
    <html lang="fr-CA" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify(structuredData)}
        </Script>
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
