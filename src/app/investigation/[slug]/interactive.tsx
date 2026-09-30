"use client";
import { useState } from "react";
import type { Source } from "@/lib/data";
import SourcePreview from "./SourcePreview";
export default function InvestigationInteractive({
  source,
  label = "View source details",
}: {
  source: Source;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="source-chip" onClick={() => setOpen(true)}>
        {label} <span aria-hidden="true">↗</span>
      </button>
      <SourcePreview source={open ? source : null} onClose={() => setOpen(false)} />
    </>
  );
}
