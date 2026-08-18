import { MetadataRoute } from "next";

//Para configurar el archivo sitemap.xml

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://garimatejnanis.vercel.app/"; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}