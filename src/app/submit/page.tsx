import { PageIntro } from "@/components/Site";
import ClaimForm from "./ClaimForm";
export default function SubmitPage() {
  return (
    <>
      <PageIntro
        eyebrow="A question begins here"
        title="Have you encountered a claim worth investigating?"
        description="Tell us what you heard, where you found it, and what made you curious. The more context you can share, the better."
      />
      <div className="form-card">
        <ClaimForm />
      </div>
    </>
  );
}
