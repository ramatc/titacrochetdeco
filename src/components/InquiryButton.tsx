"use client";

import { useState, type ReactNode } from "react";
import { inquiryUrl } from "@/lib/inquiry";
import { buttonClasses } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

type InquiryButtonProps = {
  /** Message copied to the clipboard before opening Instagram. */
  message: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

/**
 * Opens an Instagram DM with Tita. Since Instagram cannot pre-fill DM text,
 * it copies a ready-to-paste message first and tells the visitor so.
 */
export function InquiryButton({
  message,
  children,
  variant = "primary",
  className = "",
}: InquiryButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard
      ?.writeText(message)
      .then(() => setCopied(true))
      .catch(() => setCopied(false));
  };

  return (
    <div className={className}>
      <a
        href={inquiryUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={buttonClasses(variant, "w-full sm:w-auto")}
      >
        <InstagramIcon />
        {children}
      </a>
      <p aria-live="polite" className="mt-3 min-h-5 text-xs text-ink-soft">
        {copied ? "Copiamos tu mensaje: pegalo en el chat de Instagram." : ""}
      </p>
    </div>
  );
}
