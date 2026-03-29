import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/src/app/seo";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: siteUrl ? `${siteUrl.toString().replace(/\/$/, "")}/sitemap.xml` : undefined,
    host: siteUrl?.toString(),
  };
}
