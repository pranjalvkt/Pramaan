import type { Metadata } from "next";
import Link from "next/link";
import { allSources, investigations } from "@/lib/data";
import { Note, PageIntro } from "@/components/Site";
export const metadata: Metadata = { title: "Sources" };
export default function SourcesPage() {
  return (
    <>
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
            <h3>{source.title}</h3>
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
