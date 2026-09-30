import { ImageResponse } from "next/og";

export const alt = "Pramaan — Evidence before belief";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#f7f6f1",
          background: "linear-gradient(135deg, #34483d, #46574b)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 28 }}>
          <span
            style={{
              display: "flex",
              width: 54,
              height: 54,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 27,
              color: "#34483d",
              background: "#e8ede5",
              fontSize: 34,
            }}
          >
            प्रमाण
          </span>
          <span>pramaan</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ color: "#d2b590", fontSize: 24, letterSpacing: 4 }}>INDEPENDENT RESEARCH</div>
          <div style={{ fontSize: 76, lineHeight: 1.05 }}>Evidence before belief.</div>
        </div>
        <div style={{ color: "#d2d8d0", fontFamily: "sans-serif", fontSize: 20 }}>
          Follow the claim. Find the evidence.
        </div>
      </div>
    ),
    size
  );
}
