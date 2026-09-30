import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Seo";
import { Eyebrow, PageIntro, Note } from "@/components/Site";
import { allSources, investigations } from "@/lib/data";
import { createSeoMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return allSources.map((source) => ({ slug: source.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const source = allSources.find((entry) => entry.slug === slug);
  if (!source) {
    return createSeoMetadata({
      title: "Source not found",
      description: "This source record could not be found.",
      path: `/source/${slug}`,
      indexable: false,
    });
  }

  const related = investigations.filter((item) => item.sources.some((entry) => entry.id === source.id));
  return createSeoMetadata({
    title: source.title,
    description: source.description,
    path: `/source/${source.slug}`,
    indexable: !source.isMock && related.some((item) => !item.isMock && item.publishedAt),
  });
}

export default async function SourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const source = allSources.find((entry) => entry.slug === slug);
  if (!source) notFound();

  const related = investigations.filter((item) =>
    item.sources.some((entry) => entry.id === source.id)
  );

  return (
    <>
      <Breadcrumbs
        currentUrl={`/source/${source.slug}`}
        items={[
          { name: "Home", href: "/" },
          { name: "Sources", href: "/sources" },
          { name: source.title },
        ]}
      />
      <PageIntro
        eyebrow={`${source.type} · ${source.nature}`}
        title={source.title}
        description={source.description}
      />
      <div className="page-body source-detail">
        {source.isMock && (
          <Note>This source is illustrative mock metadata, not a verified citation.</Note>
        )}
        <dl className="source-detail-meta">
          <div><dt>Author</dt><dd>{source.author}</dd></div>
          <div><dt>Publisher</dt><dd>{source.publisher}</dd></div>
          <div><dt>Publication date</dt><dd>{source.date}</dd></div>
          <div><dt>Source type</dt><dd>{source.type}</dd></div>
          <div><dt>Classification</dt><dd>{source.nature}</dd></div>
        </dl>
        <h2>Why this source matters</h2>
        <p>{source.description}</p>
        {source.url && (
          <p><a className="text-link" href={source.url} target="_blank" rel="noopener noreferrer">Open original source ↗</a></p>
        )}
        <section className="source-related">
          <Eyebrow>Research trail</Eyebrow>
          <h2>Investigations referencing this source</h2>
          {related.length ? (
            related.map((item) => (
              <Link className="source-related-link" href={`/investigation/${item.slug}`} key={item.slug}>
                <span>{item.title}</span><span aria-hidden="true">↗</span>
              </Link>
            ))
          ) : (
            <p>No published investigations reference this source.</p>
          )}
        </section>
      </div>
    </>
  );
}
