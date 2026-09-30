import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Seo";
import { PageIntro, Note } from "@/components/Site";
import { investigations } from "@/lib/data";
import { createSeoMetadata } from "@/lib/seo";
import InvestigationList from "./InvestigationList";
export const metadata: Metadata = createSeoMetadata({
  title: "Investigations",
  description:
    "Explore Pramaan’s research archive and follow claims through evidence, sources, context, and uncertainty.",
  path: "/investigations",
  indexable: investigations.some((item) => !item.isMock && item.publishedAt),
});
export default async function InvestigationsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  return (
    <>
      <Breadcrumbs currentUrl="/investigations" items={[{ name: "Home", href: "/" }, { name: "Investigations" }]} />
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
