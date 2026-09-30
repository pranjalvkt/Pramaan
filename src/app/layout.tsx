import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";
import { PageShell } from "@/components/Site";
import { siteDescription, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  applicationName: "Pramaan",
  title: { default: "Pramaan — Evidence Before Belief", template: "%s — Pramaan" },
  description: siteDescription,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
  openGraph: {
    title: "Pramaan — Evidence Before Belief",
    description: siteDescription,
    url: "/",
    siteName: "Pramaan",
    locale: "en_US",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Pramaan — Evidence before belief" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pramaan — Evidence Before Belief",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = { themeColor: "#f7f6f1" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
