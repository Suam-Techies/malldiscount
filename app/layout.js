import "./globals.css";
import { siteUrl } from "./site-url";

export const metadata = {
  metadataBase: siteUrl,
  title: {
    default: "GiftCardMall & MyGift Guide | Balance & Activation",
    template: "%s | GiftCardMall & MyGift Guide",
  },
  description:
    "Independent GiftCardMall and MyGift card guide with balance-check tips, activation info, Visa use and answers to common questions. Confirm details with your card issuer.",
  applicationName: "Goodkind",
  keywords: [
    "GiftCardMall MyGift",
    "GiftCardMall balance",
    "MyGift balance guide",
    "GiftCardMall card activation",
    "MyGift Visa usage",
    "prepaid gift card help",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Goodkind",
    title: "GiftCardMall & MyGift Guide | Balance & Activation",
    description:
      "Independent GiftCardMall and MyGift card guide with balance-check tips, activation info, Visa use and answers to common questions. Confirm details with your card issuer.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Independent GiftCardMall and MyGift balance and activation guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GiftCardMall & MyGift Guide | Balance & Activation",
    description:
      "Independent GiftCardMall and MyGift card guide with balance-check tips, activation info, Visa use and answers to common questions. Confirm details with your card issuer.",
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
