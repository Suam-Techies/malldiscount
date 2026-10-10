import { siteUrl } from "./site-url";

export default function sitemap() {
  return [
    {
      url: siteUrl.toString(),
      changeFrequency: "always",
      priority: 1,
    },
  ];
}
