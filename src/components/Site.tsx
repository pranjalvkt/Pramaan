"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Search,
  Menu,
  MoveUpRight,
  BookOpen,
  Bookmark,
  Sparkles,
  X,
} from "lucide-react";
import type { Investigation } from "@/lib/data";
import { BuyMeACoffeeButton } from "@/components/BuyMeACoffeeButton";

export function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Pramaan home">
          <span className="brand-mark">प्र</span>
          <span>
            pramaan<span className="brand-dot">.</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/investigations">Explore</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/sources">Sources</Link>
          <Link href="/timeline">Timeline</Link>
          <Link href="/methodology">Methodology</Link>
        </nav>
        <div className="header-actions">
          <Link aria-label="Search investigations" className="icon-button" href="/investigations">
            <Search size={18} />
          </Link>
          <Link className="nav-submit" href="/submit">
            Submit a claim <ArrowRight size={15} />
          </Link>
          <Link className="nav-support" href="/support">
            Support Pramaan <MoveUpRight size={14} />
          </Link>
          <button
            className="mobile-menu"
            aria-label={menu ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {menu && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {[
            ["Explore", "/investigations"],
            ["Categories", "/categories"],
            ["Sources", "/sources"],
            ["Timeline", "/timeline"],
            ["Methodology", "/methodology"],
            ["Search", "/investigations"],
            ["Submit a Claim", "/submit"],
            ["Support Pramaan", "/support"],
          ].map(([label, href]) => (
            <Link href={href} onClick={() => setMenu(false)} key={href + label}>
              {label}
              <ArrowRight size={15} />
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="brand" href="/">
            <span className="brand-mark">प्र</span>
            <span>
              pramaan<span className="brand-dot">.</span>
            </span>
          </Link>
          <p>Independent research for a more informed world.</p>
          <span className="footer-motto">Evidence before belief.</span>
        </div>
        <div className="footer-column">
          <b>Explore</b>
          <Link href="/investigations">Investigations</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/sources">Sources</Link>
          <Link href="/timeline">Timeline</Link>
        </div>
        <div className="footer-column">
          <b>About</b>
          <Link href="/about">About Pramaan</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/transparency">Transparency</Link>
          <Link href="/corrections">Corrections</Link>
        </div>
        <div className="footer-column">
          <b>Participate</b>
          <Link href="/submit">Submit a claim</Link>
          <Link href="/report-error">Report an error</Link>
          <Link href="/support">Support Pramaan</Link>
          <a href="mailto:hello@pramaan.org">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Pramaan. Independent by design.</span>
        <span>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <span>Built around the question: how do we know this?</span>
        </span>
      </div>
    </footer>
  );
}
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span className={`eyebrow${light ? " eyebrow-light" : ""}`}>
      <i /> {children}
    </span>
  );
}
export function SectionHeading({
  label,
  title,
  link,
  href,
}: {
  label: string;
  title: string;
  link?: string;
  href?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{label}</Eyebrow>
        <h2>{title}</h2>
      </div>
      {link && (
        <Link className="text-link" href={href || "/investigations"}>
          {link}
          <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}
export function Verdict({ label }: { label: string }) {
  return (
    <span className="verdict">
      <span className="verdict-dot" />
      {label}
    </span>
  );
}
export function InvestigationCard({
  item,
  featured = false,
}: {
  item: Investigation;
  featured?: boolean;
}) {
  return (
    <Link
      className={`investigation-card${featured ? " feature-card" : ""}`}
      href={`/investigation/${item.slug}`}
    >
      <div
        className="card-image"
        style={{
          backgroundImage: `linear-gradient(180deg, transparent 38%, rgba(23,28,26,.35)), url("${item.image}")`,
        }}
        role="img"
        aria-label={item.imageAlt}
      >
        <span className="image-category">{item.category}</span>
        <span className="save-icon" aria-hidden="true">
          <Bookmark size={15} />
        </span>
      </div>
      <div className="card-content">
        <div className="card-meta">
          <Verdict label={item.verdict} />
          <span>{item.read}</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <span className="card-date">{item.date}</span>
      </div>
    </Link>
  );
}
export function SupportCallout() {
  return (
    <aside className="support-callout">
      <span className="support-icon">
        <Sparkles size={19} />
      </span>
      <div>
        <b>Independent research takes time.</b>
        <p>Help keep evidence-led investigations open to everyone.</p>
      </div>
      <BuyMeACoffeeButton className="text-link" />
    </aside>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="mock-note">
      <BookOpen size={15} />
      <span>{children}</span>
    </div>
  );
}
