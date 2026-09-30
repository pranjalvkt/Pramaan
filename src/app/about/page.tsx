import { PageIntro } from "@/components/Site";
export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Pramaan"
        title="We don't ask you to trust us."
        description="We show the evidence, trace the sources, and make space for what remains uncertain."
      />
      <div className="page-body">
        <h2>What Pramaan is</h2>
        <p>
          Pramaan (प्रमाण) means evidence, proof or substantiation. It is an independent knowledge
          platform for investigating commonly repeated claims, myths, historical narratives, famous
          quotes, statistics and popular theories.
        </p>
        <h2>One question, followed carefully</h2>
        <p>
          How do we know this? Each investigation follows the claim through evidence, sources and
          context, then explains what is known and what cannot yet be established.
        </p>
        <h2>Who maintains it</h2>
        <p>
          Pramaan is independently developed and maintained by a solo developer. The platform is
          designed to keep its research trail public and its support separate from editorial
          decisions.
        </p>
        <div className="callout">
          <strong>
            Show the claim. Show the evidence. Show the source. Show the context. Show the
            uncertainty.
          </strong>
        </div>
      </div>
    </>
  );
}
