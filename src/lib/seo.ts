import type { Metadata } from "next";

export const siteName = "Pramaan";
export const siteDescription =
  "Pramaan investigates claims, myths, historical narratives, statistics, and popular theories by tracing them back to evidence and original sources.";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://pramaan-lab.netlify.app").replace(/\/$/, "");

export function absoluteUrl(path = "/") {
  return new URL(path.replace(/^\//, ""), `${siteUrl}/`).toString();
}

export function formatPublicDate(value?: string) {
  if (!value) return "Mock example · unpublished";
  return new Intl.DateTimeFormat("en", { dateStyle: "medium", timeZone: "UTC" }).format(
    new Date(value)
  );
}

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  indexable?: boolean;
  type?: "website" | "article";
  image?: string;
  absoluteTitle?: boolean;
};

export function createSeoMetadata({
  title,
  description,
  path,
  indexable = true,
  type = "website",
  image = "/opengraph-image",
  absoluteTitle = false,
}: SeoOptions): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = absoluteTitle ? title : `${title} — ${siteName}`;
  const imageUrl = absoluteUrl(image);

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: true, googleBot: { index: false, follow: true } },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      locale: "en_US",
      type,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: `${siteName} — Evidence before belief` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: imageUrl, alt: `${siteName} — Evidence before belief` }],
    },
  };
}

export function createInvestigationMetadata(item: {
  title: string;
  summary: string;
  slug: string;
  isMock: boolean;
  publishedAt?: string;
  updatedAt?: string;
  author?: { name: string; url?: string };
}): Metadata {
  const path = `/investigation/${item.slug}`;
  const image = `/investigation/${item.slug}/opengraph-image`;
  const base = createSeoMetadata({
    title: item.title,
    description: item.summary,
    path,
    indexable: !item.isMock && Boolean(item.publishedAt),
    type: "article",
    image,
  });

  return {
    ...base,
    openGraph: {
      title: `${item.title} — ${siteName}`,
      description: item.summary,
      url: absoluteUrl(path),
      siteName,
      locale: "en_US",
      type: "article",
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: `${item.title} — Pramaan investigation`,
        },
      ],
      ...(item.publishedAt ? { publishedTime: item.publishedAt } : {}),
      ...(item.updatedAt ? { modifiedTime: item.updatedAt } : {}),
      ...(item.author ? { authors: [item.author.url || item.author.name] } : {}),
    },
  };
}
