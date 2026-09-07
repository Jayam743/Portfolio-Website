"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  // Mirrors whatever the pre-paint script already set on <html>; avoids a
  // second flash by reading the DOM rather than defaulting to a guess.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage unavailable — theme just won't persist across visits.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-sm border border-border px-3 py-1.5 font-mono text-mono text-text-secondary transition-colors duration-(--dur-base) ease-(--ease-standard) hover:border-signal hover:text-text-primary"
      aria-label={
        theme === "dark" ? "Switch to Paper (light) mode" : "Switch to Ink (dark) mode"
      }
    >
      <span aria-hidden="true">{theme === "dark" ? "○" : "●"}</span>
      <span>{theme === "dark" ? "Paper" : "Ink"}</span>
    </button>
  );
}
