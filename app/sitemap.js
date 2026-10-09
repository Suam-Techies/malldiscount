import { siteUrl } from "./site-url";

export default function sitemap() {
  return [
    {
      url: siteUrl.toString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
