// Shared motion constants — single source of truth so every animated
// component uses the exact spring/easing values locked in docs/DESIGN.md §4.
// Near-critically damped, no bounce/overshoot.

export const SPRING = {
  type: "spring",
  stiffness: 210,
  damping: 30,
  mass: 0.9,
} as const;

export const EASE_SETTLE = [0.2, 0.8, 0.2, 1] as const;
