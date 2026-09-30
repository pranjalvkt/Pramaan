"use client";

import { useEffect } from "react";
import { MoveUpRight } from "lucide-react";

type BuyMeACoffeeButtonProps = {
  className?: string;
};

/** External support link; payment and supporter data stay with Buy Me a Coffee. */
export function BuyMeACoffeeButton({ className = "button button-dark" }: BuyMeACoffeeButtonProps) {
  const url = process.env.NEXT_PUBLIC_BUYMEACOFFEE_URL?.trim();
  const validUrl = !!url && /^https:\/\/(?:www\.)?buymeacoffee\.com\/[a-zA-Z0-9_-]+\/?$/.test(url);

  useEffect(() => {
    if (process.env.NODE_ENV === "development" && !validUrl) {
      console.warn(
        "Buy Me a Coffee is not configured. Set NEXT_PUBLIC_BUYMEACOFFEE_URL in .env.local to enable the support link."
      );
    }
  }, [validUrl]);

  if (!url || !validUrl) {
    return process.env.NODE_ENV === "development" ? (
      <span className="bmc-unavailable" role="status">
        Support link not configured
      </span>
    ) : null;
  }

  return (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Support Pramaan on Buy Me a Coffee (opens in a new tab)"
    >
      Support Pramaan <MoveUpRight size={15} aria-hidden="true" />
    </a>
  );
}
