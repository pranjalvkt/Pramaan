import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { investigations, slugify } from "@/lib/data";
import { Eyebrow, Note, SupportCallout, Verdict } from "@/components/Site";
import { Breadcrumbs, investigationSchema, JsonLd } from "@/components/Seo";
import { createInvestigationMetadata, createSeoMetadata } from "@/lib/seo";
import InvestigationInteractive from "./interactive";
export function generateStaticParams() {
  return investigations.map((x) => ({ slug: x.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = investigations.find((x) => x.slug === slug);
  return item
    ? createInvestigationMetadata(item)
    : createSeoMetadata({
        title: "Investigation not found",
        description: "This investigation could not be found.",
        path: `/investigation/${slug}`,
        indexable: false,
      });
}
export default async function InvestigationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = investigations.find((x) => x.slug === slug);
  if (!item) notFound();
  const related = investigations
    .filter((x) => x.slug !== slug && x.category === item.category)
    .slice(0, 2);
  const articleData = investigationSchema(item);
  return (
    <>
      <div className="investigation-layout">
        <article className="investigation-article">
          <Breadcrumbs
            currentUrl={`/investigation/${item.slug}`}
            items={[
              { name: "Home", href: "/" },
              { name: "Investigations", href: "/investigations" },
              { name: item.category, href: `/category/${slugify(item.category)}` },
              { name: item.title },
            ]}
          />
          {articleData && <JsonLd data={articleData} />}
          <Note>
            This is a mock investigation record created to demonstrate the Pramaan format. Its
            claims, assessments, evidence and source records have not been researched or verified.
          </Note>
          <div style={{ marginTop: 24 }}>
            <Eyebrow>{item.category} · Mock investigation</Eyebrow>
          </div>
          <h1 className="investigation-title">{item.title}</h1>
          <p className="investigation-deck">{item.summary}</p>
          <div className="investigation-meta">
            {item.publishedAt ? (
              <time dateTime={item.publishedAt}>
                Published {new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date(item.publishedAt))}
              </time>
            ) : (
              <span>Mock record · unpublished</span>
            )}
            {item.updatedAt && (
              <time dateTime={item.updatedAt}>
                Updated {new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date(item.updatedAt))}
              </time>
            )}
            <span>·</span>
            <span>{item.read}</span>
          </div>
          <section className="article-section" id="claim">
            <h2>The claim</h2>
            <blockquote>“{item.claim}”</blockquote>
          </section>
          <section className="assessment" aria-labelledby="assessment-title">
            <span className="assessment-label">Assessment · Demonstration only</span>
            <h2 id="assessment-title">{item.verdict}</h2>
            <p>{item.context}</p>
          </section>
          <section className="article-section" id="short-answer">
            <h2>Short answer</h2>
            <p>
              {item.summary} This entry is mock content; the displayed assessment is not an
              evidence-based conclusion.
            </p>
          </section>
          <section className="article-section" id="background">
            <h2>Background</h2>
            <p>{item.context}</p>
          </section>
          <section className="article-section" id="origin">
            <h2>Where did this claim come from?</h2>
            <p>{item.origin}</p>
            <div className="origin-chain">
              <span>Original source</span>
              <i>↓</i>
              <span>Early reference</span>
              <i>↓</i>
              <span>Later interpretation</span>
              <i>↓</i>
              <span>Popular retelling</span>
              <i>↓</i>
              <span>Modern claim</span>
            </div>
          </section>
          <section className="article-section" id="evidence">
            <h2>What the evidence shows</h2>
            {item.evidence.map((e, i) => (
              <div className="evidence-card" key={e.title}>
                <div className="evidence-top">
                  <span>EVIDENCE {String(i + 1).padStart(2, "0")}</span>
                  <span>{e.date}</span>
                </div>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
                <span className="source-chip">{e.type}</span>
                <div style={{ marginTop: 15 }}>
                  <Link className="citation-link" href={`/source/${item.sources[0].slug}`}>
                    [1] {item.sources[0].title}
                  </Link>
                </div>
              </div>
            ))}
          </section>
          <section className="article-section" id="known">
            <h2>What we know</h2>
            <ul>
              {item.know.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>
          <section className="article-section" id="unknown">
            <h2>What we don’t know</h2>
            <ul>
              {item.unknown.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>
          <section className="article-section" id="disputed">
            <h2>What is disputed</h2>
            <p>
              For this mock record, no source review has been completed. A published investigation
              would describe disagreements between credible sources here, or state when no material
              dispute was found.
            </p>
          </section>
          <section className="article-section" id="timeline">
            <h2>Timeline</h2>
            <p>
              Illustrative timeline event for this mock investigation. No historical date is asserted.
            </p>
          </section>
          <section className="article-section" id="sources">
            <h2>Sources</h2>
            <p>Only illustrative, mock source metadata is attached to this demonstration.</p>
            {item.sources.map((source) => (
              <div className="source-card" key={source.id}>
                <small>
                  {source.type} · {source.nature}
                </small>
                <h3>{source.title}</h3>
                <p>{source.description}</p>
                <Link className="text-link" href={`/source/${source.slug}`}>
                  Open source record <span aria-hidden="true">↗</span>
                </Link>
                <InvestigationInteractive source={source} />
              </div>
            ))}
          </section>
          <section className="article-section" id="trail">
            <h2>Research trail</h2>
            <div className="step-list">
              {[
                "Claim identified",
                "Original source located",
                "Primary records searched",
                "Relevant evidence reviewed",
                "Conflicting evidence considered",
                "Investigation published",
              ].map((x, i) => (
                <div className="step-item" key={x}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{x}</h3>
                    <p>This is an illustrative step; no real research work is asserted.</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="article-section">
            <h2>Corrections & updates</h2>
            <p>Mock record created September 2026. No corrections or updates recorded.</p>
            <Link href="/report-error" className="citation-link">
              Report an error
            </Link>
          </section>
          <SupportCallout />
        </article>
        <aside className="investigation-aside">
          <div className="aside-box">
            <h3>In this investigation</h3>
            {[
              ["The claim", "claim"],
              ["Short answer", "short-answer"],
              ["Background", "background"],
              ["Claim origin", "origin"],
              ["Evidence", "evidence"],
              ["What we know", "known"],
              ["What we don’t know", "unknown"],
              ["Sources", "sources"],
              ["Research trail", "trail"],
            ].map(([t, id]) => (
              <a href={`#${id}`} key={id}>
                {t}
              </a>
            ))}
          </div>
          <div className="aside-box">
            <h3>Assessment</h3>
            <Verdict label={item.verdict} />
            <p style={{ fontSize: 10, lineHeight: 1.6, color: "#7a847a" }}>
              The assessment is not a substitute for evidence.
            </p>
          </div>
          <div className="aside-box">
            <h3>Share a question</h3>
            <Link href="/submit">
              Submit a claim <span>↗</span>
            </Link>
            <Link href="/methodology">
              How we work <span>↗</span>
            </Link>
          </div>
        </aside>
      </div>
      {related.length > 0 && (
        <section className="categories-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <Eyebrow>Continue exploring</Eyebrow>
                <h2>Related investigations</h2>
              </div>
            </div>
            <div className="feature-grid">
              {related.map((x) => (
                <Link href={`/investigation/${x.slug}`} key={x.slug} className="source-card">
                  <small>{x.category}</small>
                  <h3>{x.title}</h3>
                  <p>{x.summary}</p>
                  <span className="citation-link">Read investigation →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
