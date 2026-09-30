"use client";
import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import type { Source } from "@/lib/data";
export default function SourcePreview({
  source,
  onClose,
}: {
  source: Source | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!source) return;
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [source, onClose]);
  if (!source) return null;
  return (
    <div
      className="source-preview"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="source-title"
        className="preview-panel"
      >
        <button className="preview-close" onClick={onClose} aria-label="Close source preview">
          <X size={16} />
        </button>
        <span className="eyebrow">
          <i />
          {source.type}
        </span>
        <h2 id="source-title">{source.title}</h2>
        <div className="preview-meta">
          <span>
            Author<b>{source.author}</b>
          </span>
          <span>
            Publisher<b>{source.publisher}</b>
          </span>
          <span>
            Publication date<b>{source.date}</b>
          </span>
          <span>
            Source nature<b>{source.nature}</b>
          </span>
          <span>
            Relevant section<b>Not specified</b>
          </span>
          <span>
            Archive URL<b>Not provided</b>
          </span>
        </div>
        <p>{source.description}</p>
        {source.url ? (
          <a className="button button-dark" href={source.url} target="_blank" rel="noreferrer">
            Open original source <ExternalLink size={14} />
          </a>
        ) : (
          <p className="mock-note">No original URL is provided for this mock source record.</p>
        )}
      </section>
    </div>
  );
}
