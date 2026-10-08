import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

const packageIds = [
  "ayodhya-same-day",
  "varanasi-same-day",
  "ayodhya-1n-2d",
  "varanasi-1n-2d",
  "varanasi-ayodhya-2n3d",
  "prayagraj-same-day",
  "ayodhya-darshan",
  "ayodhya-varanasi",
  "ayodhya-prayagraj-varanasi",
  "lucknow-ayodhya",
  "ayodhya-varanasi-chitrakoot",
  "full-ramayana-circuit",
  "sarnath-buddhist-tour",
  "buddhist-circuit-tour",
  "kashi-heritage-tour",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/thank-you`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  const packageRoutes: MetadataRoute.Sitemap = packageIds.map((id) => ({
    url: `${baseUrl}/packages/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...packageRoutes];
}
