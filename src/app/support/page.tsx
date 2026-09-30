import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { BuyMeACoffeeButton } from "@/components/BuyMeACoffeeButton";
import { Eyebrow, PageIntro } from "@/components/Site";

export const metadata: Metadata = {
  title: "Support Pramaan — Evidence Before Belief",
  description:
    "Support Pramaan's independent evidence research, source preservation, infrastructure, and ongoing development.",
};

const uses = [
  "Hosting, database and storage",
  "Research tools and source archiving",
  "Domain and infrastructure",
  "Development and maintenance",
];
const steps = [
  "Click Support Pramaan",
  "Continue to Buy Me a Coffee",
  "Choose a contribution and complete payment there",
];

export default function SupportPage() {
  return (
    <>
      <PageIntro
        eyebrow="Independent by design"
        title="Support Pramaan"
        description="Help keep independent evidence research online."
      />
      <section className="support-page container">
        <div className="support-page-intro">
          <p className="support-lead">
            Pramaan investigates claims, traces evidence, preserves sources, and provides context.
            Your support helps cover the work and infrastructure that keep this research available.
          </p>
          <BuyMeACoffeeButton className="button button-dark support-page-cta" />
          <p className="external-note">
            You’ll continue to Buy Me a Coffee to choose a contribution and complete payment there.
          </p>
        </div>

        <section className="support-page-section">
          <Eyebrow>What support helps cover</Eyebrow>
          <h2>Keep the research accessible.</h2>
          <ul className="support-use-list">
            {uses.map((item) => (
              <li key={item}>
                <ArrowRight size={15} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="support-page-section">
          <Eyebrow>How support works</Eyebrow>
          <h2>Simple and handled externally.</h2>
          <ol className="support-steps">
            {steps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="support-page-section independence-callout">
          <Eyebrow>Editorial independence</Eyebrow>
          <h2>Support never shapes the findings.</h2>
          <p>
            Financial support does not influence Pramaan’s research, evidence evaluation, or
            conclusions.
          </p>
          <p className="independence-emphasis">You cannot buy a verdict.</p>
        </section>
      </section>
    </>
  );
}
