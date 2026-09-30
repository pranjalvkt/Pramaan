"use client";
import { useMemo, useState } from "react";
import { investigations } from "@/lib/data";
import { InvestigationCard } from "@/components/Site";
export default function InvestigationList({ initialCategory = "" }: { initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(
    investigations.some((x) => x.category === initialCategory) ? initialCategory : "All categories"
  );
  const [verdict, setVerdict] = useState("All assessments");
  const results = useMemo(
    () =>
      investigations.filter(
        (x) =>
          (category === "All categories" || x.category === category) &&
          (verdict === "All assessments" || x.verdict === verdict) &&
          (!query ||
            `${x.title} ${x.claim} ${x.category} ${x.summary}`
              .toLowerCase()
              .includes(query.toLowerCase()))
      ),
    [query, category, verdict]
  );
  const cats = ["All categories", ...Array.from(new Set(investigations.map((x) => x.category)))];
  const verdicts = [
    "All assessments",
    ...Array.from(new Set(investigations.map((x) => x.verdict))),
  ];
  return (
    <>
      <div className="catalog-tools">
        <label className="search-field">
          <span className="sr-only">Search investigations</span>
          <span aria-hidden="true">⌕</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search claims, topics, people..."
          />
        </label>
        <select
          className="filter-select"
          aria-label="Filter by category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {cats.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
        <select
          className="filter-select"
          aria-label="Filter by assessment"
          value={verdict}
          onChange={(e) => setVerdict(e.target.value)}
        >
          {verdicts.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </div>
      <div className="page-cards">
        {results.length ? (
          results.map((x) => <InvestigationCard key={x.slug} item={x} />)
        ) : (
          <div className="empty-state">No investigations match those filters.</div>
        )}
      </div>
    </>
  );
}
