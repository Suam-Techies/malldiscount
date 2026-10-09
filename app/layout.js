import "./globals.css";

export const metadata = {
  title: "Goodkind | Your Gift Card Field Guide",
  description:
    "Simple, independent tips for checking, using, and keeping your gift cards safe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
