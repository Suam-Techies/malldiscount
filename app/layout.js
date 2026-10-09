import "./globals.css";
import { siteUrl } from "./site-url";

export const metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Goodkind | Your Gift Card Field Guide",
    template: "%s | Goodkind",
  },
  description:
    "Simple, independent tips for checking, using, and keeping your gift cards safe.",
  applicationName: "Goodkind",
  keywords: [
    "gift card tips",
    "check gift card balance safely",
    "gift card safety",
    "gift card FAQs",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Goodkind",
    title: "Goodkind | Your Gift Card Field Guide",
    description:
      "Simple, independent tips for checking, using, and keeping your gift cards safe.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Goodkind — your gift card field guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goodkind | Your Gift Card Field Guide",
    description:
      "Simple, independent tips for checking, using, and keeping your gift cards safe.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  themeColor: "#fbf8ef",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
