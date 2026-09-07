"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function domTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

export function ThemeToggle() {
  // Lazy init reads the theme the pre-paint script already applied, so the
  // label is correct from first paint (no target/current mismatch).
  const [theme, setTheme] = useState<Theme>(domTheme);

  // Re-sync after mount (covers SSR default vs. the real pre-paint value).
  useEffect(() => setTheme(domTheme()), []);

  function toggle() {
    // Read the LIVE DOM, never the possibly-stale React state — this is what
    // fixes the "first click does nothing" bug.
    const next: Theme = domTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage unavailable — theme just won't persist across visits.
    }
    setTheme(next);
  }

  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-border px-3 py-1.5 font-mono text-mono text-text-secondary transition-colors duration-(--dur-base) ease-(--ease-standard) hover:border-signal hover:text-text-primary"
      aria-label={isDark ? "Switch to Paper (light) mode" : "Switch to Ink (dark) mode"}
      title={isDark ? "Switch to Paper (light)" : "Switch to Ink (dark)"}
    >
      {/* Label shows the CURRENT mode (matches what the user sees on screen). */}
      <span aria-hidden="true" suppressHydrationWarning>{isDark ? "●" : "○"}</span>
      <span suppressHydrationWarning>{isDark ? "Ink" : "Paper"}</span>
    </button>
  );
}
