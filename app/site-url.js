const isProduction = process.env.NODE_ENV === "production";
const productionSiteOrigin = "https://www.giftcardmallactivation.com";
const configuredOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (isProduction
    ? productionSiteOrigin
    : process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL);

function getSiteUrl() {
  if (!configuredOrigin) {
    return new URL("http://localhost:3000");
  }

  let url;
  try {
    url = new URL(
      configuredOrigin.includes("://")
        ? configuredOrigin
        : `https://${configuredOrigin}`
    );
  } catch {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be a valid site origin, such as https://www.example.com."
    );
  }

  if (
    !["https:", ...(isProduction ? [] : ["http:"])].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be a public site origin without credentials, a path, query, or fragment."
    );
  }

  const hostname = url.hostname.toLowerCase();
  if (
    isProduction &&
    (hostname === "localhost" ||
      hostname.endsWith(".localhost") ||
      hostname.endsWith(".local") ||
      hostname.startsWith("127.") ||
    hostname.startsWith("[") ||
    /^\d{1,3}(?:\.\d{1,3}){3}$/.test(hostname))
  ) {
    throw new Error("Production site URLs must use a public HTTPS domain.");
  }

  return new URL(url.origin);
}

export const siteUrl = getSiteUrl();
