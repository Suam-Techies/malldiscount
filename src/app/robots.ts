import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.giftcardmallactivation.com";

  const bots = [
    "*",
    "Googlebot",
    "Googlebot-Image",
    "Googlebot-Mobile",
    "Googlebot-News",
    "Bingbot",
    "msnbot",
    "Slurp",
    "DuckDuckBot",
    "Baiduspider",
    "YandexBot",
    "Applebot",
    "facebookexternalhit",
    "Facebot",
    "Twitterbot",
    "LinkedInBot",
    "Pinterestbot",
    "GPTBot",
    "ChatGPT-User",
    "ClaudeBot",
    "PerplexityBot",
  ];

  return {
    rules: bots.map((bot) => ({
      userAgent: bot,
      allow: "/",
    })),
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
