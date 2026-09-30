import Link from "next/link";
export default function NotFound() {
  return (
    <div className="page-body">
      <span className="eyebrow">
        <i />
        Not found
      </span>
      <h1 className="investigation-title">This page isn’t in the record.</h1>
      <p>It may have moved, or the address may be mistyped.</p>
      <Link className="text-link" href="/">
        Return to Pramaan →
      </Link>
    </div>
  );
}
