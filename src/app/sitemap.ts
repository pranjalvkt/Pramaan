import type { MetadataRoute } from "next";
import { investigations } from "@/lib/data";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pramaan.org";
  const pages = [
    "",
    "about",
    "investigations",
    "categories",
    "sources",
    "timeline",
    "methodology",
    "transparency",
    "submit",
    "support",
    "corrections",
  ];
  return [
    ...pages.map((path) => ({
      url: path ? `${base}/${path}` : base,
      lastModified: new Date("2026-09-30"),
      changeFrequency: "weekly" as const,
      priority: path ? 0.7 : 1,
    })),
    ...investigations.map((item) => ({
      url: `${base}/investigation/${item.slug}`,
      lastModified: new Date(item.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
