import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Seo";
import { PageIntro } from "@/components/Site";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Privacy",
  description: "How Pramaan handles claim suggestions and links to external support services.",
  path: "/privacy",
  indexable: false,
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs currentUrl="/privacy" items={[{ name: "Home", href: "/" }, { name: "Privacy" }]} />
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
        {/* hello@pramaan.org */}
        <p>
          For privacy questions, email{" "}
          <a className="citation-link" href="mailto:pranjalvktripathi@gmail.com">
            pranjalvktripathi@gmail.com
          </a>
          .
        </p>
      </div>
    </>
  );
}
