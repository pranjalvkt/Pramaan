import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Seo";
import { PageIntro } from "@/components/Site";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Corrections and updates",
  description:
    "Pramaan’s corrections policy explains how readers can report errors and how verified changes are documented.",
  path: "/corrections",
});

export default function CorrectionsPage() {
  return (
    <>
      <Breadcrumbs currentUrl="/corrections" items={[{ name: "Home", href: "/" }, { name: "Corrections" }]} />
      <PageIntro
        eyebrow="The record can change"
        title="Corrections & updates"
        description="Research improves when errors can be found, explained and corrected in the open."
      />
      <div className="page-body">
        <h2>Our corrections policy</h2>
        <p>
          We review error reports, verify them against the underlying evidence, and make material
          corrections visible on the relevant investigation with a date and explanation.
        </p>
        <div className="callout">No investigations have published corrections yet.</div>
        <h2>Report an error</h2>
        <p>
          Include the investigation title, the passage in question, and any supporting evidence.
        </p>
        {/* corrections@pramaan.org */}
        <a className="text-link" href="mailto:pranjalvktripathi@gmail.com">
          Email pranjalvktripathi@gmail.com →
        </a>
      </div>
    </>
  );
}
