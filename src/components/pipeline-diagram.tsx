"use client";

// The operable Syndicate pipeline — the site's signature moment (DESIGN.md §6).
// A task token travels the route; each node settles into its active state with
// the locked spring (no bounce); the traversed path glows --signal. Auto-plays
// once on scroll-into-view, then idles on a loop. Hover/focus a node to read its
// role. Replay to run it again. Reduced-motion: static final diagram, no timers.

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SPRING } from "@/lib/motion";

type Node = {
  id: string;
  label: string;
  detail: string;
  role: string;
  x: number;
  y: number;
};

// Serpentine route: row 1 L→R, drop down the right edge, row 2 R→L.
const NODES: Node[] = [
  { id: "task", label: "task", detail: "enters", role: "A unit of work arrives — a natural-language request.", x: 96, y: 104 },
  { id: "odin", label: "Odin", detail: "classifies", role: "Orchestrator — the all-seer. Classifies the task and routes it to the right specialist.", x: 320, y: 104 },
  { id: "specialist", label: "specialist", detail: "executes", role: "The agent built for this job (Forge, Athena, …) does the work.", x: 544, y: 104 },
  { id: "gate", label: "gate", detail: "safety check", role: "A safety gate — prod, secrets, and precheck rules that always fire.", x: 544, y: 236 },
  { id: "loki", label: "Loki", detail: "argues", role: "Challenger — argues the other side before anything ships. Not a yes-man, by design.", x: 320, y: 236 },
  { id: "return", label: "return", detail: "result ships", role: "Reviewed and accountable — the result returns with a paper trail.", x: 96, y: 236 },
];

// Edge endpoints (box-edge to box-edge) for each connector i → i+1.
const NODE_W = 132;
const NODE_H = 56;
const HALF_W = NODE_W / 2;
const HALF_H = NODE_H / 2;

const STEP_MS = 760; // dwell per node
const END_PAUSE_MS = 1700; // pause before the loop restarts

function connectorPath(a: Node, b: Node): string {
  if (a.y === b.y) {
    // horizontal
    const dir = b.x > a.x ? 1 : -1;
    const x1 = a.x + dir * HALF_W;
    const x2 = b.x - dir * HALF_W;
    return `M ${x1} ${a.y} L ${x2} ${b.y}`;
  }
  // vertical (right edge drop): out the bottom of a, into the top of b
  const y1 = a.y + HALF_H;
  const y2 = b.y - HALF_H;
  return `M ${a.x} ${y1} L ${b.x} ${y2}`;
}

export function PipelineDiagram() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });
  const [active, setActive] = useState(reduced ? NODES.length - 1 : -1);
  const [focused, setFocused] = useState<Node | null>(null);
  const [runId, setRunId] = useState(0); // bump to force a replay

  useEffect(() => {
    if (reduced) {
      setActive(NODES.length - 1);
      return;
    }
    if (!inView) return;

    let step = 0;
    setActive(0);
    const timers: ReturnType<typeof setTimeout>[] = [];

    const advance = () => {
      step += 1;
      if (step < NODES.length) {
        setActive(step);
        timers.push(setTimeout(advance, STEP_MS));
      } else {
        // reached the end — pause, then restart the loop
        timers.push(
          setTimeout(() => {
            step = 0;
            setActive(0);
            timers.push(setTimeout(advance, STEP_MS));
          }, END_PAUSE_MS),
        );
      }
    };
    timers.push(setTimeout(advance, STEP_MS));

    return () => timers.forEach(clearTimeout);
  }, [inView, reduced, runId]);

  const tokenNode = NODES[Math.max(0, active)];
  const shown = focused ?? (active >= 0 ? NODES[active] : NODES[1]);

  return (
    <div ref={ref} className="w-full">
      <div className="mb-3 flex items-center justify-between">
        <span className="flex items-center gap-2 font-mono text-mono text-text-muted">
          <span
            aria-hidden="true"
            className="status-dot-live inline-block size-1.5 rounded-full"
            style={{ background: "var(--signal)" }}
          />
          live pipeline
        </span>
        {!reduced && (
          <button
            type="button"
            onClick={() => setRunId((n) => n + 1)}
            className="font-mono text-mono text-text-muted transition-colors duration-(--dur-fast) hover:text-signal focus-visible:text-signal"
          >
            ↺ replay
          </button>
        )}
      </div>

      <div
        className="rounded-lg border border-border p-3 sm:p-4"
        style={{ background: "var(--bg-elevated)" }}
      >
        <svg
          viewBox="0 0 640 340"
          className="w-full"
          role="img"
          aria-label="Syndicate pipeline: a task enters, Odin classifies and routes it to a specialist, the result passes a safety gate, Loki argues the case, then it returns reviewed and accountable."
        >
          {/* connectors */}
          {NODES.slice(0, -1).map((n, i) => {
            const traversed = active > i;
            return (
              <motion.path
                key={`c-${n.id}`}
                d={connectorPath(n, NODES[i + 1])}
                fill="none"
                strokeWidth={1.5}
                strokeLinecap="round"
                animate={{
                  stroke: traversed ? "var(--signal)" : "var(--border-strong)",
                  opacity: traversed ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
              />
            );
          })}

          {/* traveling token (glow + core) */}
          {!reduced && active >= 0 && (
            <>
              <motion.circle
                r={11}
                fill="var(--signal)"
                opacity={0.22}
                animate={{ cx: tokenNode.x, cy: tokenNode.y }}
                transition={SPRING}
              />
              <motion.circle
                r={4.5}
                fill="var(--signal)"
                animate={{ cx: tokenNode.x, cy: tokenNode.y }}
                transition={SPRING}
              />
            </>
          )}

          {/* nodes */}
          {NODES.map((n, i) => {
            const isActive = i === active;
            const isPast = i < active || reduced;
            const lit = isActive || isPast;
            return (
              <g
                key={n.id}
                tabIndex={0}
                role="button"
                aria-label={`${n.label} — ${n.role}`}
                onMouseEnter={() => setFocused(n)}
                onMouseLeave={() => setFocused(null)}
                onFocus={() => setFocused(n)}
                onBlur={() => setFocused(null)}
                style={{ cursor: "default", outline: "none" }}
              >
                <motion.rect
                  x={n.x - HALF_W}
                  y={n.y - HALF_H}
                  width={NODE_W}
                  height={NODE_H}
                  rx={8}
                  fill="var(--bg-raised)"
                  strokeWidth={isActive ? 1.75 : 1}
                  animate={{
                    stroke: lit ? "var(--signal)" : "var(--border-strong)",
                    scale: isActive ? 1.05 : 1,
                  }}
                  style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                  transition={SPRING}
                />
                {/* active glow ring */}
                {isActive && !reduced && (
                  <motion.rect
                    x={n.x - HALF_W}
                    y={n.y - HALF_H}
                    width={NODE_W}
                    height={NODE_H}
                    rx={8}
                    fill="none"
                    stroke="var(--signal)"
                    strokeWidth={1}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: [0.5, 0.15, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                  />
                )}
                <text
                  x={n.x}
                  y={n.y - 4}
                  textAnchor="middle"
                  className="font-mono"
                  style={{
                    fontSize: 13,
                    fill: lit ? "var(--signal)" : "var(--text-muted)",
                    fontWeight: 500,
                  }}
                >
                  {n.label}
                </text>
                <text
                  x={n.x}
                  y={n.y + 13}
                  textAnchor="middle"
                  style={{ fontSize: 10.5, fill: "var(--text-muted)" }}
                >
                  {n.detail}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* live role readout — updates on hover/focus and as the token travels */}
      <p
        className="mt-3 min-h-[2.5rem] text-caption text-text-muted"
        aria-live="polite"
      >
        <span className="font-mono text-signal">{shown.label}</span>
        {" — "}
        {shown.role}
      </p>
    </div>
  );
}
