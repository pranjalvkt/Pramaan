import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { categories, investigations, slugify } from "@/lib/data";
import { Eyebrow, InvestigationCard, Note, SectionHeading, Verdict } from "@/components/Site";
import { JsonLd, organizationSchema, websiteSchema } from "@/components/Seo";
import { formatPublicDate } from "@/lib/seo";

export default function Home() {
  const featured = investigations.slice(0, 3);
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
      <section className="hero">
        <div className="hero-grain" />
        <div className="hero-inner">
          <div className="hero-copy">
            <Eyebrow light>Independent research · Est. 2026</Eyebrow>
            <h1>
              Evidence
              <br />
              <em>before belief.</em>
            </h1>
            <p className="hero-description">
              We investigate claims, myths and historical narratives — tracing them back to the
              evidence and original sources.
            </p>
            <div className="hero-buttons">
              <Link className="button button-light" href="/investigations">
                Explore investigations <ArrowRight size={17} />
              </Link>
              <Link className="button button-outline" href="/submit">
                Submit a claim <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="hero-assurance">
              <span>
                <i />
                Independent research
              </span>
              <span>
                <i />
                Transparent sources
              </span>
              <span>
                <i />
                Context included
              </span>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="hero-stamp">
              <span>ప్ర</span>
              <i>
                the pursuit
                <br />
                of evidence
              </i>
            </div>
            <div className="hero-footnote">
              A question is only
              <br />
              the beginning.
            </div>
          </div>
        </div>
        <a href="#featured" className="scroll-cue">
          <span>Scroll to explore</span>
          <ArrowDown size={14} />
        </a>
        <div className="hero-index">
          01 <span /> 04
        </div>
      </section>
      <section className="marquee-band">
        <div>
          <span>CLAIM</span>
          <i>→</i>
          <span>INVESTIGATION</span>
          <i>→</i>
          <span>EVIDENCE</span>
          <i>→</i>
          <span>SOURCE</span>
          <i>→</i>
          <span>CONTEXT</span>
          <i>→</i>
          <span>CONCLUSION</span>
          <i>→</i>
          <span>CLAIM</span>
          <i>→</i>
          <span>INVESTIGATION</span>
        </div>
      </section>
      <section className="section featured-section" id="featured">
        <div className="container">
          <Note>Featured examples are mock records for demonstrating the investigation format, not verified research.</Note>
          <SectionHeading
            label="The work"
            title="Featured investigations"
            link="View all investigations"
          />
          <div className="feature-grid">
            {featured.map((item, i) => (
              <InvestigationCard key={item.slug} item={item} featured={i === 0} />
            ))}
          </div>
        </div>
      </section>
      <section className="categories-section">
        <div className="container">
          <SectionHeading
            label="Explore a question"
            title="Knowledge has no single category."
            link="All categories"
            href="/categories"
          />
          <div className="category-grid">
            {categories.slice(0, 12).map((cat, i) => (
              <Link
                key={cat}
                className="category-tile"
                href={`/category/${slugify(cat)}`}
              >
                <span className="category-number">{String(i + 1).padStart(2, "0")}</span>
                <span>{cat}</span>
                <ArrowUpRight size={15} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="recent-section">
        <div className="container">
          <Note>These archive entries are mock examples. No published investigations are available yet.</Note>
          <SectionHeading
            label="Fresh perspective"
            title="Recently investigated"
            link="Browse the archive"
          />
          <div className="recent-list">
            {investigations.slice(3, 7).map((item, i) => (
              <Link href={`/investigation/${item.slug}`} className="recent-row" key={item.slug}>
                <span className="recent-number">0{i + 1}</span>
                <span className="recent-category">{item.category}</span>
                <span className="recent-title">{item.title}</span>
                <Verdict label={item.verdict} />
                <span className="recent-date">{item.publishedAt ? formatPublicDate(item.publishedAt) : "Mock"}</span>
                <ArrowUpRight className="recent-arrow" size={17} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="source-promo">
        <div className="source-text">
          <Eyebrow light>Trace it back</Eyebrow>
          <h2>
            Every conclusion
            <br />
            has a <em>paper trail.</em>
          </h2>
          <p>
            Explore the documents, records and research behind each investigation. No black boxes.
            No “trust us”.
          </p>
          <Link href="/sources" className="button button-light">
            Explore the source library <ArrowRight size={16} />
          </Link>
        </div>
        <div className="source-visual">
          <div className="document doc-back">
            <span>ARCHIVE / 1947</span>
            <div />
            <div />
            <div />
          </div>
          <div className="document doc-mid">
            <span>RESEARCH NOTE · 02</span>
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="document doc-front">
            <span className="doc-index">
              SOURCE <b>01</b>
            </span>
            <div className="doc-rule" />
            <strong>
              Original
              <br />
              records matter.
            </strong>
            <div className="doc-line" />
            <div className="doc-line short" />
            <div className="doc-foot">
              <span>PRIMARY MATERIAL</span>
              <ArrowUpRight size={13} />
            </div>
          </div>
          <span className="source-visual-label">THE PRAMAAN SOURCE LIBRARY</span>
        </div>
      </section>
      <section className="process-section">
        <div className="container process-layout">
          <div className="process-intro">
            <Eyebrow>Our approach</Eyebrow>
            <h2>
              Not just what.
              <br />
              <em>How do we know?</em>
            </h2>
            <p>
              We make the path from a repeated claim to the evidence visible, so you can follow the
              reasoning yourself.
            </p>
            <Link href="/methodology" className="text-link">
              Read our methodology <ArrowRight size={16} />
            </Link>
          </div>
          <div className="process-steps">
            <div className="process-line" />
            {[
              ["01", "Start with the claim", "What exactly is being said?"],
              ["02", "Find the evidence", "What records can we locate?"],
              ["03", "Check the source", "Who made it, and when?"],
              ["04", "Add the context", "What is known — and what isn't?"],
            ].map(([n, t, d]) => (
              <div className="process-step" key={n}>
                <span className="step-number">{n}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
                <ArrowUpRight size={15} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="timeline-teaser">
        <div className="container timeline-inner">
          <div>
            <Eyebrow>History, in perspective</Eyebrow>
            <h2>
              Some claims need
              <br />
              <em>a longer view.</em>
            </h2>
            <p>Follow events, records and later interpretations across time.</p>
            <Link href="/timeline" className="text-link">
              Explore the timeline <ArrowRight size={16} />
            </Link>
          </div>
          <div className="timeline-art">
            <div className="timeline-line" />
            <div className="timeline-event">
              <span>1947</span>
              <i />
              <b>A record is created</b>
              <small>Contemporary source</small>
            </div>
            <div className="timeline-event">
              <span>1965</span>
              <i />
              <b>A story is retold</b>
              <small>Later interpretation</small>
            </div>
            <div className="timeline-event">
              <span>2026</span>
              <i />
              <b>We investigate</b>
              <small>Research today</small>
            </div>
          </div>
        </div>
      </section>
      <section className="submit-band">
        <div className="submit-decoration">?</div>
        <div className="container submit-inner">
          <div>
            <Eyebrow light>Curiosity starts somewhere</Eyebrow>
            <h2>
              Heard something
              <br />
              that made you wonder?
            </h2>
            <p>Send a claim our way. A good question is where every investigation begins.</p>
          </div>
          <Link className="button button-light" href="/submit">
            Submit a claim <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="support-section">
        <div className="container">
          <div className="support-panel">
            <div className="support-mark">
              <Sparkles size={22} />
            </div>
            <div>
              <Eyebrow>Made to stay independent</Eyebrow>
              <h2>Help keep good questions open.</h2>
              <p>
                Pramaan is independently built and maintained. Reader support helps keep the
                research, and the sources, available to everyone.
              </p>
            </div>
            <Link href="/support" className="button button-dark">
              Support Pramaan <ArrowUpRight size={16} />
            </Link>
          </div>
          <p className="independence-line">
            Financial support does not influence our research, evidence evaluation or conclusions.
          </p>
        </div>
      </section>
    </>
  );
}
