import type { MetadataRoute } from "next";
import { allSources, categories, investigations, slugify } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixedPages = [
    "",
    "/about",
    "/methodology",
    "/transparency",
    "/corrections",
    "/submit",
    "/support",
  ];

  const investigationPages = investigations
    .filter((item) => !item.isMock && Boolean(item.publishedAt))
    .map((item) => ({
      url: absoluteUrl(`/investigation/${item.slug}`),
      ...(item.updatedAt || item.publishedAt
        ? { lastModified: new Date(item.updatedAt || item.publishedAt!) }
        : {}),
    }));

  const sourcePages = allSources
    .filter(
      (source) =>
        !source.isMock &&
        investigations.some(
          (item) =>
            !item.isMock &&
            item.publishedAt &&
            item.sources.some((related) => related.id === source.id)
        )
    )
    .map((source) => ({ url: absoluteUrl(`/source/${source.slug}`) }));

  const categoryPages = categories
    .filter((category) =>
      investigations.some(
        (item) => !item.isMock && item.publishedAt && item.category === category
      )
    )
    .map((category) => ({ url: absoluteUrl(`/category/${slugify(category)}`) }));

  const hasPublishedInvestigation = investigations.some((item) => !item.isMock && item.publishedAt);
  const hasIndexableSource = sourcePages.length > 0;
  const hasIndexableCategory = categories.some((category) =>
    investigations.some(
      (item) => !item.isMock && item.publishedAt && item.category === category
    )
  );
  const archivePages = [
    ...(hasPublishedInvestigation ? ["/investigations"] : []),
    ...(hasIndexableSource ? ["/sources"] : []),
    ...(hasIndexableCategory ? ["/categories"] : []),
  ];

  return [
    ...fixedPages.map((path) => ({ url: absoluteUrl(path) })),
    ...archivePages.map((path) => ({ url: absoluteUrl(path) })),
    ...investigationPages,
    ...sourcePages,
    ...categoryPages,
  ];
}
