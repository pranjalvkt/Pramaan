import Link from "next/link";
import type { Metadata } from "next";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found — Pramaan",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="page-body">
      <span className="eyebrow">
        <i />
        Not found
      </span>
      <h1 className="investigation-title">This page isn’t in the record.</h1>
      <p>It may have moved, or the address may be mistyped. Search the research archive or explore a topic.</p>
      <div className="not-found-links">
        <Link className="button button-dark" href="/investigations"><Search size={15} /> Explore investigations</Link>
        <Link className="text-link" href="/categories">Browse categories →</Link>
        <Link className="text-link" href="/">Return to Pramaan →</Link>
      </div>
    </div>
  );
}
