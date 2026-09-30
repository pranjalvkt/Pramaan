import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Seo";
import { PageIntro } from "@/components/Site";
import { createSeoMetadata } from "@/lib/seo";
import ClaimForm from "./ClaimForm";

export const metadata: Metadata = createSeoMetadata({
  title: "Submit a claim",
  description:
    "Suggest a claim for Pramaan to investigate. Share the exact wording, where you encountered it, and any useful sources or context.",
  path: "/submit",
});

export default function SubmitPage() {
  return (
    <>
      <Breadcrumbs currentUrl="/submit" items={[{ name: "Home", href: "/" }, { name: "Submit a claim" }]} />
      <PageIntro
        eyebrow="A question begins here"
        title="Have you encountered a claim worth investigating?"
        description="Tell us what you heard, where you found it, and what made you curious. The more context you can share, the better."
      />
      <div className="container submit-guidance">
        <p>
          Useful submissions include a specific claim, its original context or source, and why the
          question matters. A submission does not guarantee publication.
        </p>
      </div>
      <div className="form-card">
        <ClaimForm />
      </div>
    </>
  );
}
