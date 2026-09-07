"use client";

// Hero rotating-role line. Jayam specifically wanted a typewriter effect —
// per docs/CONTENT.md it cycles his roles. Kept restrained (no bounce, one
// steady rhythm) so it reads as an instrument readout, not a toy. Under
// prefers-reduced-motion the roles render as a static, comma-separated list
// (no timers, no hidden content) so the same information reaches everyone.

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const TYPE_MS = 55;
const DELETE_MS = 30;
const HOLD_MS = 1500;
const HOLD_EMPTY_MS = 300;

export function RoleTypewriter({ roles }: { roles: string[] }) {
  const reduced = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;

    const current = roles[roleIndex];
    const atFullWord = !deleting && text === current;
    const atEmpty = deleting && text === "";
    const delay = atFullWord ? HOLD_MS : atEmpty ? HOLD_EMPTY_MS : deleting ? DELETE_MS : TYPE_MS;

    const timer = setTimeout(() => {
      if (atFullWord) {
        setDeleting(true);
        return;
      }
      if (atEmpty) {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
        return;
      }
      setText((t) => current.slice(0, deleting ? t.length - 1 : t.length + 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex, roles, reduced]);

  if (reduced) {
    return <span>{roles.join(" · ")}</span>;
  }

  return (
    <span>
      <span aria-hidden="true">{text}</span>
      <span aria-hidden="true" className="typewriter-caret" />
      <span className="sr-only">{roles.join(", ")}</span>
    </span>
  );
}
