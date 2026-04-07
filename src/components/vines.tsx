import { petalStyle, PETAL_COUNT, vineSwayStyle, VineSwayVariant } from "@/lib/animations";

/* ─────────────────────────────────────────────
 * Falling Petals
 * ───────────────────────────────────────────── */

export const FallingPetals = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {Array.from({ length: PETAL_COUNT }, (_, i) => (
      <div key={i} style={petalStyle(i)} />
    ))}
  </div>
);

/* ─────────────────────────────────────────────
 * Vine SVG Data (shared between left & right)
 * ───────────────────────────────────────────── */

export enum VineSide {
  Left = "left",
  Right = "right",
}

interface VineConfig {
  stemPath: string;
  leaves: { cx: number; cy: number; rx: number; ry: number; angle: number }[];
  flowers: { cx: number; cy: number; outer: number; mid: number; inner: number }[];
  buds: { cx: number; cy: number; r: number }[];
}

const VINE_PRIMARY: VineConfig = {
  stemPath:
    "M40 0 C40 100, 80 150, 60 250 C40 350, 100 400, 70 500 C40 600, 90 650, 60 750 C30 850, 50 900, 50 900",
  leaves: [
    { cx: 70, cy: 60, rx: 18, ry: 12, angle: -30 },
    { cx: 55, cy: 90, rx: 15, ry: 10, angle: 20 },
    { cx: 100, cy: 240, rx: 16, ry: 9, angle: 40 },
    { cx: 20, cy: 370, rx: 14, ry: 8, angle: -25 },
    { cx: 110, cy: 500, rx: 15, ry: 9, angle: 35 },
    { cx: 25, cy: 620, rx: 13, ry: 8, angle: -30 },
    { cx: 95, cy: 750, rx: 14, ry: 8, angle: 45 },
  ],
  flowers: [
    { cx: 80, cy: 180, outer: 14, mid: 9, inner: 5 },
    { cx: 30, cy: 300, outer: 12, mid: 7, inner: 4 },
    { cx: 90, cy: 430, outer: 16, mid: 10, inner: 6 },
    { cx: 45, cy: 550, outer: 11, mid: 6, inner: 3 },
    { cx: 75, cy: 680, outer: 13, mid: 8, inner: 4 },
  ],
  buds: [
    { cx: 60, cy: 130, r: 4 },
    { cx: 100, cy: 350, r: 3.5 },
    { cx: 40, cy: 480, r: 4 },
    { cx: 85, cy: 600, r: 3 },
    { cx: 50, cy: 800, r: 4 },
  ],
};

const VINE_SECONDARY: VineConfig = {
  stemPath:
    "M120 0 C120 120, 80 180, 100 280 C120 380, 70 440, 110 540 C150 640, 90 700, 120 800 C150 880, 130 900, 130 900",
  leaves: [
    { cx: 100, cy: 50, rx: 16, ry: 10, angle: 25 },
    { cx: 130, cy: 80, rx: 13, ry: 9, angle: -15 },
    { cx: 60, cy: 280, rx: 14, ry: 8, angle: -35 },
    { cx: 150, cy: 400, rx: 15, ry: 9, angle: 30 },
    { cx: 50, cy: 520, rx: 13, ry: 8, angle: -40 },
    { cx: 150, cy: 660, rx: 14, ry: 8, angle: 25 },
    { cx: 60, cy: 780, rx: 12, ry: 7, angle: -20 },
  ],
  flowers: [
    { cx: 60, cy: 200, outer: 12, mid: 7, inner: 4 },
    { cx: 140, cy: 340, outer: 14, mid: 8, inner: 5 },
    { cx: 70, cy: 470, outer: 11, mid: 6, inner: 3 },
    { cx: 130, cy: 590, outer: 13, mid: 8, inner: 4 },
    { cx: 80, cy: 720, outer: 10, mid: 6, inner: 3 },
  ],
  buds: [
    { cx: 110, cy: 140, r: 3.5 },
    { cx: 50, cy: 380, r: 4 },
    { cx: 150, cy: 510, r: 3 },
    { cx: 70, cy: 650, r: 3.5 },
  ],
};

/* ─────────────────────────────────────────────
 * Single Vine SVG
 * ───────────────────────────────────────────── */

interface SingleVineProps {
  config: VineConfig;
  opacity: number;
  strokeOpacity: number;
  strokeWidth: number;
  swayVariant: VineSwayVariant;
  mirrored: boolean;
  offsetClass?: string;
}

const SingleVine = ({
  config,
  opacity,
  strokeOpacity,
  strokeWidth,
  swayVariant,
  mirrored,
  offsetClass,
}: SingleVineProps) => {
  const goldStroke = `rgba(212,168,83,${strokeOpacity})`;

  return (
    <svg
      viewBox="0 0 200 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute inset-0 w-full h-full ${offsetClass ?? ""}`}
      style={vineSwayStyle({
        variant: swayVariant,
        extraTransform: mirrored ? "scaleX(-1)" : undefined,
      })}
    >
      {/* Stem */}
      <path
        d={config.stemPath}
        stroke={goldStroke}
        strokeWidth={strokeWidth}
        fill="none"
      />

      {/* Leaves */}
      {config.leaves.map((l, i) => (
        <ellipse
          key={`leaf-${i}`}
          cx={l.cx}
          cy={l.cy}
          rx={l.rx}
          ry={l.ry}
          fill={`rgba(170,130,90,${opacity * 0.8})`}
          transform={`rotate(${l.angle} ${l.cx} ${l.cy})`}
        />
      ))}

      {/* Flowers (layered circles) */}
      {config.flowers.map((f, i) => (
        <g key={`flower-${i}`}>
          <circle cx={f.cx} cy={f.cy} r={f.outer} fill={`rgba(232,160,180,${opacity})`} />
          <circle cx={f.cx} cy={f.cy} r={f.mid} fill={`rgba(210,140,160,${opacity * 1.2})`} />
          <circle cx={f.cx} cy={f.cy} r={f.inner} fill={`rgba(190,120,140,${opacity * 1.4})`} />
        </g>
      ))}

      {/* Buds */}
      {config.buds.map((b, i) => (
        <circle
          key={`bud-${i}`}
          cx={b.cx}
          cy={b.cy}
          r={b.r}
          fill={`rgba(240,200,210,${opacity * 1.1})`}
        />
      ))}
    </svg>
  );
};

/* ─────────────────────────────────────────────
 * Floral Vine (Left or Right)
 * ───────────────────────────────────────────── */

export interface FloralVineProps {
  side: VineSide;
}

export const FloralVine = ({ side }: FloralVineProps) => {
  const isRight = side === VineSide.Right;
  const containerClass = isRight
    ? "absolute right-0 top-0 bottom-0 w-32 md:w-48 pointer-events-none z-10"
    : "absolute left-0 top-0 bottom-0 w-32 md:w-48 pointer-events-none z-10";

  return (
    <div className={containerClass} aria-hidden="true">
      {/* Vine 1 - primary */}
      <SingleVine
        config={VINE_PRIMARY}
        opacity={0.5}
        strokeOpacity={0.6}
        strokeWidth={2}
        swayVariant="normal"
        mirrored={isRight}
      />
      {/* Vine 2 - secondary, offset */}
      <SingleVine
        config={VINE_SECONDARY}
        opacity={0.45}
        strokeOpacity={0.5}
        strokeWidth={1.5}
        swayVariant="alt"
        mirrored={isRight}
        offsetClass={isRight ? "-translate-x-4" : "translate-x-4"}
      />
    </div>
  );
};
