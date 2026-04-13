"use client";

import { useState } from "react";

interface EmailLinkProps {
  user: string;
  domain: string;
  label?: string;
  className?: string;
}

/**
 * A component that obfuscates an email address to prevent scraping bots
 * from harvesting it from the plain text HTML.
 */
export default function EmailLink({ user, domain, label, className }: EmailLinkProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (!isRevealed) {
      e.preventDefault();
      setIsRevealed(true);
      // Wait for state to update then trigger the mailto
      setTimeout(() => {
        window.location.href = `mailto:${user}@${domain}`;
      }, 0);
    }
  };

  return (
    <a
      href={isRevealed ? `mailto:${user}@${domain}` : "#"}
      onClick={handleClick}
      onMouseEnter={() => setIsRevealed(true)}
      className={className}
    >
      {label || "// EMAIL"}
    </a>
  );
}
