import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Seo";
import { PageIntro } from "@/components/Site";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Terms",
  description: "Terms for reading and sharing Pramaan’s research and demonstration content.",
  path: "/terms",
  indexable: false,
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Terms" }]} />
      <PageIntro
        eyebrow="Using this site"
        title="Terms"
        description="Pramaan is an independent research publication. Please use and share its work thoughtfully."
      />
      <div className="page-body">
        <h2>Research and informational content</h2>
        <p>
          Published investigations are presented for public information. Readers should review the
          evidence, sources and context rather than treating an assessment as a substitute for their
          own judgment.
        </p>
        <h2>Demonstration content</h2>
        <p>
          Entries identified as mock or illustrative are design examples. They must not be cited as
          researched findings.
        </p>
        <h2>Questions</h2>
        {/* hello@pramaan.org */}
        <p>
          Contact{" "}
          <a className="citation-link" href="mailto:pranjalvktripathi@gmail.com">
            pranjalvktripathi@gmail.com
          </a>
          .
        </p>
      </div>
    </>
  );
}
