# Goodkind

A responsive, independent gift-card information guide built with Next.js.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production URL and search visibility

The production canonical origin defaults to `https://www.giftcardmallactivation.com`. If the canonical domain changes, set `NEXT_PUBLIC_SITE_URL` to the public HTTPS origin (no trailing slash) in the hosting provider's **Production** environment variables, then rebuild and redeploy. This variable takes precedence over the built-in production default. Local development defaults to `http://localhost:3000`; Vercel's project URL is used there only when available.

The site provides:

- Page title, description, canonical URL, and social-sharing metadata.
- A custom SVG favicon, Apple touch icon, and generated social-sharing image.
- Search-engine directives at `/robots.txt` and a sitemap at `/sitemap.xml`.

After deploying to a public HTTPS domain:

1. Open `/robots.txt` and `/sitemap.xml` at `https://www.giftcardmallactivation.com` and confirm they contain the canonical domain.
2. Verify ownership of the domain in [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters/about), preferably using their DNS verification instructions.
3. Submit `https://www.giftcardmallactivation.com/sitemap.xml` in each service's sitemap tools.
4. Use each service's URL inspection tools to request a crawl of the home page.

Search engines decide when and whether to index a site; submitting a sitemap helps discovery but cannot guarantee visibility or ranking. Keep the public site useful, accurate, and accessible, and use one canonical HTTPS domain consistently.
