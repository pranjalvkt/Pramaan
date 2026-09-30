import { PageIntro } from "@/components/Site";
export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Your information"
        title="Privacy"
        description="A simple privacy-first approach for an independent research project."
      />
      <div className="page-body">
        <h2>Current demonstration</h2>
        <p>
          This version uses a local, client-side claim suggestion form and does not send form data
          to a server. Support contributions are completed externally through Buy Me a Coffee.
          Pramaan does not receive or store payment details.
        </p>
        <h2>External support</h2>
        <p>
          Buy Me a Coffee manages supporter information and payment processing. Pramaan stores only
          the public profile URL used to link to the external service.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy questions, email{" "}
          <a className="citation-link" href="mailto:hello@pramaan.org">
            hello@pramaan.org
          </a>
          .
        </p>
      </div>
    </>
  );
}
