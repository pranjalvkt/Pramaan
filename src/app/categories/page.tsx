import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Seo";
import { categories, investigations, slugify } from "@/lib/data";
import { PageIntro } from "@/components/Site";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Categories",
  description:
    "Browse Pramaan’s research topics, from history and science to culture, governance, and statistics.",
  path: "/categories",
  indexable: categories.some((category) =>
    investigations.some((item) => !item.isMock && item.publishedAt && item.category === category)
  ),
});

export default function CategoriesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Explore by subject"
        title="Categories"
        description="Claims cross disciplines. Browse the topics Pramaan investigates, from historical narratives to statistics and public life."
      />
      <Breadcrumbs currentUrl="/categories" items={[{ name: "Home", href: "/" }, { name: "Categories" }]} />
      <section className="page-cards category-catalog">
        {categories.map((cat, i) => {
          const matching = investigations.filter((x) => x.category === cat);
          return (
            <Link
              className="source-card category-tile"
              href={`/category/${slugify(cat)}`}
              key={cat}
            >
              <small>TOPIC {String(i + 1).padStart(2, "0")}</small>
              <h3>{cat}</h3>
              <p>
                {matching.length
                  ? `${matching.length} mock investigation${matching.length > 1 ? "s" : ""} in the archive`
                  : "Research archive category"}
              </p>
              <span className="citation-link">Explore topic →</span>
            </Link>
          );
        })}
      </section>
    </>
  );
}
