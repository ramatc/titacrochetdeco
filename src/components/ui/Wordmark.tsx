import Image from "next/image";
import { site } from "@/content/site";

/** TITA wordmark, with the rabbit isotype when `site.isotype` is set. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {site.isotype ? (
        <Image src={site.isotype} alt="" width={22} height={22} className="size-5.5" />
      ) : null}
      <span className="text-[0.95rem] font-medium tracking-[0.38em] text-ink">
        {site.shortName}
      </span>
    </span>
  );
}
