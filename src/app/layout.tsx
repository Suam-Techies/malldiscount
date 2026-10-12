import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.giftcardmallactivation.com"),
  title: "GiftCardMall/MyGift Balance Check Your Card Online | GiftCardMall",
  description:
    "Check your GiftCardMall/MyGift balance, activate your gift card, and review transactions online with this simple www.giftcardmall.com/mygift guide.",
  robots: "index, follow, max-snippet:-1",
  alternates: {
    canonical: "https://www.giftcardmallactivation.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.giftcardmallactivation.com/",
    title: "Prepaid Card Balance Check & Card Activation Guide",
    description:
      "Check your card balance, understand activation, use the balance planner, and find customer support guidance.",
    siteName: "GiftCardMall",
  },
  other: {
    "theme-color": "#eaf2fd",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%231e5bc6'/%3E%3Cpath d='M8 13h16v11H8zM6 9h20v4H6zM16 9v15' stroke='%23fff' stroke-width='2' fill='none'/%3E%3C/svg%3E"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  url: "/",
                  name: "GiftCardMall",
                  description:
                    "Independent balance check and card activation guide.",
                  inLanguage: "en-US",
                },
                {
                  "@type": "WebPage",
                  url: "/",
                  name: "Balance Check & Card Activation Guide",
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What is MyGift card service?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "MyGift refers to card management services associated with eligible prepaid gift cards to check available funds and review transactions.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How can I check my card balance online?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Visit the verified card management website printed on your card or packaging. Follow the instructions provided by the issuer to view your available funds.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How do I activate my card?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "First, check whether your card was activated when purchased. If further activation is required, follow the instructions supplied with your card.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
