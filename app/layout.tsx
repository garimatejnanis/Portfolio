import type { Metadata, Viewport } from "next";

import "./bootstrap/css/bootstrap.min.css";
import "./globals.css";

import Cabecera from "../src/components/Cabecera";
import Pie from "../src/components/Footer";
import ScrollToTop from "../src/components/ScrollToTop";
import ClientScripts from "../src/components/ClientScripts";

// SEO: metadata único para toda la web (página única con anclas)
export const metadata: Metadata = {
  metadataBase: new URL("https://TU-DOMINIO-FINAL.com"), // ⚠️ cambia al publicar

  title: "Garima Tejnani – Desarrolladora Web",

  description:
    "Portafolio profesional de Garima Tejnani, desarrolladora web especializada en PHP, MySQL, WordPress y JavaScript. Desarrollo de aplicaciones web modernas, rápidas y escalables.",

  icons: {
    icon: "/favicon-1024.png",
  },

  alternates: {
    canonical: "/",
  },

  // Cómo se ve el link al compartirlo (WhatsApp, LinkedIn, etc.)
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
        url: "/og-image.jpg", // ⚠️ 1200x630px
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

// Datos estructurados: ayuda a Google a entender quién eres (persona/profesión)
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
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

        {/* Scripts que solo deben ejecutarse en el cliente */}
        <ClientScripts />
      </body>
    </html>
  );
}