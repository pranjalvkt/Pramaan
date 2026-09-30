import Link from "next/link";
import { categories, investigations } from "@/lib/data";
import { PageIntro } from "@/components/Site";
export default function CategoriesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Explore by subject"
        title="Categories"
        description="Claims cross disciplines. Browse the topics Pramaan investigates, from historical narratives to statistics and public life."
      />
      <section className="page-cards category-catalog">
        {categories.map((cat, i) => {
          const matching = investigations.filter((x) => x.category === cat);
          return (
            <Link
              className="source-card category-tile"
              href={`/investigations?category=${encodeURIComponent(cat)}`}
              key={cat}
            >
              <small>TOPIC {String(i + 1).padStart(2, "0")}</small>
              <h3>{cat}</h3>
              <p>
                {matching.length
                  ? `${matching.length} mock investigation${matching.length > 1 ? "s" : ""} in the archive`
                  : "Research archive category"}
              </p>
              <span className="citation-link">Explore topic →</span>
            </Link>
          );
        })}
      </section>
    </>
  );
}
