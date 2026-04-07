/**
 * Centralized animation configurations for the app.
 *
 * Usage:
 *   - CSS keyframes are injected via `src/index.css`
 *   - Inline style generators return ready-to-use style objects
 *   - All timing/position math lives here — components stay clean
 */

/* ─────────────────────────────────────────────
 * Falling Rose Petals
 * ───────────────────────────────────────────── */

export const PETAL_COUNT = 30;

const PETAL_GRADIENTS = [
  "radial-gradient(ellipse at 30% 30%, #e8a0b4 0%, #c76e8d 60%, transparent 100%)",
  "radial-gradient(ellipse at 30% 30%, #f0b8c8 0%, #d4879e 60%, transparent 100%)",
  "radial-gradient(ellipse at 30% 30%, #f5c6d0 0%, #e09aaa 60%, transparent 100%)",
] as const;

/** Returns an inline style object for a single falling petal. */
export function petalStyle(i: number): React.CSSProperties {
  const size = 8 + (i % 5) * 6;
  const left = (i * 37 + 13) % 100;
  const delay = (i * 3.7) % 12;
  const duration = 8 + (i % 4) * 3;
  const opacity = 0.25 + (i % 4) * 0.12;
  const rotation = (i * 47) % 360;
  const hueShift = i % 3;
  const blur = (i % 3) * 1;

  return {
    position: "absolute",
    left: `${left}%`,
    top: "-5%",
    width: `${size}px`,
    height: `${size}px`,
    background: PETAL_GRADIENTS[hueShift],
    borderRadius: "50% 0 50% 50%",
    opacity,
    transform: `rotate(${rotation}deg)`,
    animation: `petalFall ${duration}s linear ${delay}s infinite`,
    pointerEvents: "none",
    filter: `blur(${blur}px)`,
  };
}

/* ─────────────────────────────────────────────
 * Vine Sway (wind-blown vines)
 * ───────────────────────────────────────────── */

export type VineSwayVariant = "normal" | "alt";

export interface VineSwayOptions {
  variant?: VineSwayVariant;
  /** Extra CSS transform (e.g. `scaleX(-1)` for mirroring). Applied *after* sway. */
  extraTransform?: string;
}

const SWAY_DURATIONS: Record<VineSwayVariant, number> = {
  normal: 8,
  alt: 10,
};

/** Returns an inline style object for a swaying vine. */
export function vineSwayStyle({
  variant = "normal",
  extraTransform,
}: VineSwayOptions = {}): React.CSSProperties {
  const animation = `vineSway${variant === "alt" ? "Alt" : ""} ${SWAY_DURATIONS[variant]}s ease-in-out infinite`;
  const transformOrigin = "top center";
  const tf = extraTransform ? `${extraTransform}` : undefined;

  return {
    animation,
    transformOrigin,
    ...(tf ? { transform: tf } : {}),
    willChange: "transform",
  };
}
