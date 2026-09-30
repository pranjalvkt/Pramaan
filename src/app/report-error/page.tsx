import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Seo";
import { PageIntro } from "@/components/Site";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Report an error",
  description: "Tell Pramaan about an error, missing context, or broken source in an investigation.",
  path: "/report-error",
  indexable: false,
});

export default function ReportErrorPage() {
  return (
    <>
      <Breadcrumbs currentUrl="/report-error" items={[{ name: "Home", href: "/" }, { name: "Report an error" }]} />
      <PageIntro
        eyebrow="Help improve the record"
        title="Report an error"
        description="If you spot an error, missing context or a broken source, tell us what you found and where we should look."
      />
      <div className="page-body">
        {/* corrections@pramaan.org */}
        <p>
          Email{" "}
          <a className="citation-link" href="mailto:pranjalvktripathi@gmail.com">
            pranjalvktripathi@gmail.com
          </a>{" "}
          with the investigation URL, the passage in question, and supporting material when
          available. Reports are reviewed against the underlying evidence. Verified corrections are
          published transparently.
        </p>
        <p>
          Mock investigation pages are demonstrations and do not represent verified editorial
          research.
        </p>
      </div>
    </>
  );
}
