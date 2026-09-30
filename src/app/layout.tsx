import type { Metadata } from "next";
import "./globals.css";
import { PageShell } from "@/components/Site";
export const metadata: Metadata = {
  title: { default: "Pramaan — Evidence before belief", template: "%s — Pramaan" },
  description:
    "Independent investigations into claims, myths, and historical narratives. Follow the claim. Find the evidence.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
