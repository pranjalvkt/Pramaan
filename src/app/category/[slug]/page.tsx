import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Seo";
import { InvestigationCard, PageIntro, Note } from "@/components/Site";
import { categories, investigations, slugify } from "@/lib/data";
import { createSeoMetadata } from "@/lib/seo";

function getCategory(slug: string) {
  return categories.find((category) => slugify(category) === slug);
}

export function generateStaticParams() {
  return Array.from(new Set(investigations.map((item) => slugify(item.category)))).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) {
    return createSeoMetadata({
      title: "Category not found",
      description: "This research category could not be found.",
      path: `/category/${slug}`,
      indexable: false,
    });
  }
  const published = investigations.filter(
    (item) => item.category === category && !item.isMock && item.publishedAt
  );
  return createSeoMetadata({
    title: `${category} investigations`,
    description: `Explore Pramaan’s evidence-led investigations related to ${category.toLowerCase()}.`,
    path: `/category/${slug}`,
    indexable: published.length > 0,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category || !investigations.some((item) => item.category === category)) notFound();
  const entries = investigations.filter((item) => item.category === category);

  return (
    <>
      <Breadcrumbs
        currentUrl={`/category/${slug}`}
        items={[
          { name: "Home", href: "/" },
          { name: "Categories", href: "/categories" },
          { name: category },
        ]}
      />
      <PageIntro
        eyebrow="Research category"
        title={category}
        description={`Explore claims and investigations filed under ${category.toLowerCase()}. Each published investigation connects its assessment to evidence, sources, context, and uncertainty.`}
      />
      {entries.some((item) => item.isMock) && (
        <div className="container category-note">
          <Note>Demonstration records are shown as examples and are not verified research.</Note>
        </div>
      )}
      <section className="page-cards">
        {entries.length ? (
          entries.map((item) => <InvestigationCard item={item} key={item.slug} />)
        ) : (
          <p className="empty-state">No published investigations in this category yet.</p>
        )}
      </section>
    </>
  );
}
