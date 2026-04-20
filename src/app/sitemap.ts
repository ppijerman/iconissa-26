import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/src/app/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  if (!siteUrl) {
    return [];
  }

  return [
    {
      url: siteUrl.toString(),
      lastModified: "2026-04-20T00:00:00.000Z",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL("/iconic-2026", siteUrl).toString(),
      lastModified: "2026-04-20T00:00:00.000Z",
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
