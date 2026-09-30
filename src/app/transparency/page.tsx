import Link from "next/link";
import { PageIntro } from "@/components/Site";

export default function TransparencyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Open by design"
        title="Transparency"
        description="An independent research project should make its purpose, funding principles and correction process visible."
      />
      <div className="page-body">
        <h2>Why Pramaan exists</h2>
        <p>
          Pramaan is built around a simple question: “How do we know this?” It aims to make claims,
          evidence, sources, context, and uncertainty easier to inspect.
        </p>
        <h2>Who maintains it</h2>
        <p>
          Pramaan is independently developed and maintained by a solo developer. Research and
          editorial roles will be identified on published investigations as they are added.
        </p>
        <h2>Funding</h2>
        <p>
          Pramaan is independently maintained and supported by its creator and readers who choose to
          contribute through Buy Me a Coffee. Contributions may help cover infrastructure, hosting,
          research tools, development, storage, domain costs, and maintenance. No exact operating
          costs are published unless verified figures are available.
        </p>
        <p>
          Support Pramaan through the{" "}
          <Link className="citation-link" href="/support">
            support page
          </Link>
          .
        </p>
        <h2>Editorial independence</h2>
        <div className="callout">
          <strong>
            Financial support does not influence which claims Pramaan investigates, how evidence is
            evaluated, or what conclusions are published.
          </strong>
        </div>
        <h2>Corrections policy</h2>
        <p>
          When an error is reported and verified, the relevant investigation will be updated with a
          dated note describing the change.
        </p>
      </div>
    </>
  );
}
