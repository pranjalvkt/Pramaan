import { PageIntro } from "@/components/Site";
export default function CorrectionsPage() {
  return (
    <>
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
        <a className="text-link" href="mailto:corrections@pramaan.org">
          Email corrections@pramaan.org →
        </a>
      </div>
    </>
  );
}
