import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Seo";
import { PageIntro } from "@/components/Site";
import { createSeoMetadata } from "@/lib/seo";
export const metadata: Metadata = createSeoMetadata({
  title: "Methodology",
  description:
    "How Pramaan selects claims, evaluates sources, weighs conflicting evidence, represents uncertainty, and corrects published research.",
  path: "/methodology",
});
const steps = [
  [
    "How claims are selected",
    "We consider whether a claim is specific, consequential, repeated, and possible to investigate. Selection does not imply agreement or disagreement with a claim.",
  ],
  [
    "How evidence is collected",
    "Researchers locate original material where possible, record relevant passages, and distinguish direct observation from interpretation.",
  ],
  [
    "How sources are evaluated",
    "We describe who created a source, when, why, and in what context. We explain limits and provenance rather than assigning a numerical reliability score.",
  ],
  [
    "How conflicts are handled",
    "When credible sources disagree, we represent the disagreement and explain what evidence each interpretation relies on.",
  ],
  [
    "How assessments are assigned",
    "Each assessment uses a defined label and written explanation. The conclusion is proportional to the evidence and never stands in for it.",
  ],
  [
    "How uncertainty is represented",
    "We separate what is established, what remains unknown, and what is actively disputed. Missing evidence is not treated as proof.",
  ],
  [
    "How corrections work",
    "Readers can report errors. Material updates are dated and described on the investigation so changes remain visible.",
  ],
  [
    "How AI-assisted research is reviewed",
    "AI may help suggest leads or organize material. A human researcher checks the underlying records; an editor reviews any conclusion before publication. AI never publishes verdicts autonomously.",
  ],
];
export default function MethodologyPage() {
  return (
    <>
      <Breadcrumbs currentUrl="/methodology" items={[{ name: "Home", href: "/" }, { name: "Methodology" }]} />
      <PageIntro
        eyebrow="How we work"
        title="Evidence first. Context always."
        description="Our methodology exists so readers can inspect the path from a claim to an assessment — and understand where that path is uncertain."
      />
      <div className="page-body">
        <div className="callout">
          <strong>Central principle:</strong> Evidence first. Context always. Certainty only when
          justified.
        </div>
        <div className="step-list">
          {steps.map(([title, body], i) => (
            <div className="step-item" key={title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
        <h2>Assessment language</h2>
        <p>
          Pramaan uses nuanced assessments such as Supported, Mostly Supported, Partially Supported,
          Misleading, Unsupported, False, Context Missing, Unverified and Disputed. Every assessment
          includes a written explanation. It does not replace the evidence.
        </p>
        <h2>Editorial and financial independence</h2>
        <p>
          Financial contributions do not influence claim selection, evidence evaluation, or
          conclusions. Financial support does not grant editorial privileges.
        </p>
      </div>
    </>
  );
}
