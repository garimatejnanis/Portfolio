import type { Metadata, Viewport } from "next";
import Script from "next/script";

import "./bootstrap/css/bootstrap.min.css";
import "./globals.css";

import Cabecera from "../src/components/Cabecera";
import Pie from "../src/components/Footer";
import ScrollToTop from "../src/components/ScrollToTop";
import ClientScripts from "../src/components/ClientScripts";

// SEO: metadata único para toda la web (página única con anclas)
export const metadata: Metadata = {
  metadataBase: new URL("https://garimatejnanis.vercel.app/"), // ⚠️ cambia al publicar

  title: "Garima Tejnani – Desarrolladora Web",

  description:
    "Portafolio profesional de Garima Tejnani, desarrolladora web especializada en PHP, MySQL, WordPress y JavaScript. Desarrollo de aplicaciones web modernas, rápidas y escalables.",

  icons: {
    icon: "/favicon-1024.png",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    title: "Garima Tejnani – Desarrolladora Web",
    description:
      "Portafolio profesional de Garima Tejnani, desarrolladora web especializada en PHP, MySQL, WordPress y JavaScript.",
    siteName: "Garima Tejnani",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Garima Tejnani – Desarrolladora Web",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Datos estructurados
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Garima Tejnani",
  jobTitle: "Desarrolladora Web",
  description:
    "Desarrolladora web especializada en PHP, MySQL, WordPress y JavaScript.",
  url: "https://TU-DOMINIO-FINAL.com",
  sameAs: [
    "https://es.linkedin.com/in/garima-ts-6b8252248",
    "https://github.com/garimatejnanis/",
  ],
  knowsAbout: ["PHP", "MySQL", "WordPress", "JavaScript", "React", "Next.js"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* ⭐ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RCK8F0E9YR"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RCK8F0E9YR');
          `}
        </Script>

        {/* ⭐ Google Search Console */}
        <meta name="google-site-verification" content="bCsW_FyHhV5pPuPVYz90L5pKU_J5nho4hdFwstchThM" />
      </head>


      <body>
        <div id="cursor-blur"></div>

        <ScrollToTop />
        <Cabecera />

        {children}

        <Pie />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <ClientScripts />
      </body>
    </html>
  );
}
