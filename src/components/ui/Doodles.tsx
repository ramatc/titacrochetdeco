import type { CSSProperties } from "react";

/**
 * Hand-drawn strokes. With the `thread` class they draw themselves in once
 * their surrounding <Reveal> becomes visible (see globals.css).
 */
const stroke = {
  "aria-hidden": true,
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

type DoodleProps = { className: string; delay?: number; weight?: number };

function drawDelay(delay?: number) {
  return delay === undefined ? undefined : ({ "--draw-delay": `${delay}ms` } as CSSProperties);
}

const PETALS = [0, 72, 144, 216, 288];

/** Five-petal flower drawn in stroke; place it inside a `thread` svg. */
export function Flower({ x, y, style }: { x: number; y: number; style?: CSSProperties }) {
  return (
    <g transform={`translate(${x} ${y})`} style={style}>
      {PETALS.map((angle) => (
        <ellipse
          key={angle}
          pathLength={1}
          cx={0}
          cy={-8}
          rx={4.5}
          ry={8}
          transform={`rotate(${angle})`}
        />
      ))}
      <circle pathLength={1} r={2.6} />
    </g>
  );
}

/** Three short strokes bursting from a corner. */
export function Sparkles({ className, delay }: DoodleProps) {
  return (
    <svg
      {...stroke}
      viewBox="0 0 64 64"
      strokeWidth={2.4}
      style={drawDelay(delay)}
      className={`thread pointer-events-none ${className}`}
    >
      <path pathLength={1} d="M40 6c2 10 5 20 10 28" />
      <path pathLength={1} d="M8 28c10 2 20 6 30 14" />
      <path pathLength={1} d="M6 58c10-2 20-6 30-8" />
    </svg>
  );
}

/** A heart looped in a single thread, with its loose tail. */
export function Heart({ className, delay, weight = 1.8 }: DoodleProps) {
  return (
    <svg
      {...stroke}
      viewBox="0 0 104 142"
      strokeWidth={weight}
      style={drawDelay(delay)}
      className={`thread pointer-events-none ${className}`}
    >
      <path
        pathLength={1}
        d="M6 136C26 124 46 108 62 92 40 70 18 52 22 30 26 12 48 10 58 28 64 10 88 6 96 22c8 18-10 42-34 70-4 6-6 14-4 22"
      />
    </svg>
  );
}
