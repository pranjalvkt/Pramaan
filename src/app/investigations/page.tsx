import type { Metadata } from "next";
import { PageIntro, Note } from "@/components/Site";
import InvestigationList from "./InvestigationList";
export const metadata: Metadata = { title: "Investigations" };
export default async function InvestigationsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  return (
    <>
      <PageIntro
        eyebrow="The research archive"
        title="Investigations"
        description="Follow a claim through the evidence, sources and context. Each page shows what is known, what remains uncertain, and how we got there."
      />
      <div className="container" style={{ paddingTop: 24 }}>
        <Note>
          Initial investigation entries are clearly labeled mock examples. They demonstrate the
          platform and do not represent completed fact checks.
        </Note>
      </div>
      <InvestigationList initialCategory={params.category} />
    </>
  );
}
