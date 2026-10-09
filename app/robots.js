import { siteUrl } from "./site-url";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/_next/",
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
