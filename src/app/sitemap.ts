import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.giftcardmallactivation.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-10-12"),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
