import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Seo";
import { PageIntro } from "@/components/Site";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Historical timeline",
  description:
    "Explore dated records, historical events, and later interpretations in context through Pramaan’s timeline.",
  path: "/timeline",
  indexable: false,
});
const items = [
  [
    "1947",
    "A record is created",
    "Contemporary record",
    "This is an illustrative historical timeline event. No real event or source is asserted.",
  ],
  [
    "1965",
    "A story is retold",
    "Later interpretation",
    "The timeline design distinguishes records created at the time from later interpretations.",
  ],
  [
    "2026",
    "A question is investigated",
    "Present-day research",
    "A real timeline would connect dated events to structured sources and evidence.",
  ],
];
export default function TimelinePage() {
  return (
    <>
      <Breadcrumbs currentUrl="/timeline" items={[{ name: "Home", href: "/" }, { name: "Timeline" }]} />
      <PageIntro
        eyebrow="Historical mode"
        title="Events in context."
        description="A timeline can make the distance between an event, its contemporary records, and later retellings visible."
      />
      <div className="container" style={{ paddingTop: 24 }}>
        <div className="mock-note">
          Illustrative timeline only. Entries are not claims about real historical events.
        </div>
      </div>
      <div className="timeline-page">
        <div className="timeline-line" />
        {items.map(([year, title, type, body]) => (
          <article className="timeline-event" key={year}>
            <span>{year}</span>
            <i />
            <b>{title}</b>
            <small>{type}</small>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </>
  );
}
