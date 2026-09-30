import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

type BreadcrumbItem = { name: string; href?: string };

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const serialized = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialized }} />;
}

export function Breadcrumbs({
  items,
  currentUrl,
}: {
  items: BreadcrumbItem[];
  currentUrl?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href || index === items.length - 1
        ? { item: absoluteUrl(item.href || currentUrl || "/") }
        : {}),
    })),
  };

  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          {items.map((item, index) => (
            <li key={`${item.name}-${index}`}>
              {item.href && index < items.length - 1 ? (
                <Link href={item.href}>{item.name}</Link>
              ) : (
                <span aria-current="page">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={schema} />
    </>
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pramaan",
    alternateName: "प्रमाण",
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon.svg"),
    description:
      "An independent evidence-driven knowledge platform investigating claims, myths, and historical narratives.",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Pramaan",
    url: absoluteUrl("/"),
  };
}

export function investigationSchema(item: {
  title: string;
  summary: string;
  slug: string;
  image: string;
  publishedAt?: string;
  updatedAt?: string;
  author?: { name: string; url?: string };
  isMock: boolean;
}) {
  if (item.isMock || !item.publishedAt || !item.author?.name) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.summary,
    image: [item.image],
    datePublished: item.publishedAt,
    ...(item.updatedAt ? { dateModified: item.updatedAt } : {}),
    author: {
      "@type": "Person",
      name: item.author.name,
      ...(item.author.url ? { url: item.author.url } : {}),
    },
    mainEntityOfPage: absoluteUrl(`/investigation/${item.slug}`),
    publisher: {
      "@type": "Organization",
      name: "Pramaan",
      url: absoluteUrl("/"),
      logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") },
    },
  };
}
