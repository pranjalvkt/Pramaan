import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Seo";
import { allSources, investigations } from "@/lib/data";
import { Note, PageIntro } from "@/components/Site";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Sources",
  description:
    "Explore the source records behind Pramaan investigations, including source type, provenance, and related research.",
  path: "/sources",
  indexable: allSources.some(
    (source) =>
      !source.isMock &&
      investigations.some(
        (item) =>
          !item.isMock &&
          item.publishedAt &&
          item.sources.some((related) => related.id === source.id)
      )
  ),
});

export default function SourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Sources" }]} />
      <PageIntro
        eyebrow="The record behind the research"
        title="Sources"
        description="Sources are first-class records in Pramaan. Explore what a source is, how it is described, and which investigations reference it."
      />
      <div className="container" style={{ paddingTop: 25 }}>
        <Note>
          Source entries shown here are mock records for product demonstration. They are not
          verified citations.
        </Note>
      </div>
      <section className="page-cards">
        {allSources.map((source) => (
          <article className="source-card" key={source.id}>
            <small>
              {source.type} · {source.nature}
            </small>
            <h3>
              <Link href={`/source/${source.slug}`}>{source.title}</Link>
            </h3>
            <p>{source.description}</p>
            <div className="source-attrs">
              <span>{source.author}</span>
              <span>{source.publisher}</span>
              <span>{source.date}</span>
            </div>
            <small>Referenced in</small>
            {investigations
              .filter((x) => x.sources.some((s) => s.id === source.id))
              .map((x) => (
                <Link
                  className="text-link"
                  href={`/investigation/${x.slug}`}
                  key={x.slug}
                  style={{ marginTop: 12 }}
                >
                  {x.title} ↗
                </Link>
              ))}
          </article>
        ))}
      </section>
    </>
  );
}
