/** Soft organic shape used as a decorative backdrop behind photos. */
export function Blob({ path, className }: { path: string; className: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute ${className}`}
    >
      <path d={path} fill="currentColor" />
    </svg>
  );
}

export const BLOB_SAGE =
  "M52 14C86-4 150 2 176 34c26 32 22 86-4 122-26 36-80 48-118 30C16 168-2 124 4 84 9 48 22 30 52 14Z";
export const BLOB_ROSE =
  "M40 30c30-26 92-30 126-4 34 26 38 84 10 118-28 34-86 44-124 22C14 144 0 104 8 72c5-20 16-30 32-42Z";
