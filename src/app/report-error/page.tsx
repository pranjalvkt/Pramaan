import { PageIntro } from "@/components/Site";
export default function ReportErrorPage() {
  return (
    <>
      <PageIntro
        eyebrow="Help improve the record"
        title="Report an error"
        description="If you spot an error, missing context or a broken source, tell us what you found and where we should look."
      />
      <div className="page-body">
        <p>
          Email{" "}
          <a className="citation-link" href="mailto:corrections@pramaan.org">
            corrections@pramaan.org
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
