import { MetadataRoute } from "next";

//Para configurar el archivo robots.txt

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://garimatejnanis.vercel.app/"; 

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}