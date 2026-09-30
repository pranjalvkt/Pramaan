import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { investigations } from "@/lib/data";

export const alt = "Pramaan investigation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function InvestigationImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = investigations.find((investigation) => investigation.slug === slug);
  if (!item) notFound();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 76px",
          color: "#f7f6f1",
          background: "linear-gradient(135deg, #34483d, #46574b)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", color: "#d2b590", fontSize: 21 }}>
          <span>PRAMAAN · INVESTIGATION</span>
          <span>{item.category.toUpperCase()}</span>
        </div>
        <div style={{ display: "flex", maxWidth: 1030, fontSize: 58, lineHeight: 1.13 }}>
          {item.title}
        </div>
        <div style={{ color: "#d2d8d0", fontFamily: "sans-serif", fontSize: 20 }}>
          Evidence before belief.
        </div>
      </div>
    ),
    size
  );
}
