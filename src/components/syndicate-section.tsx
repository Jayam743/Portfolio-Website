"use client";

// Syndicate centerpiece. De-walled: the long prose is cut to a tight lead + a
// pull-quote (the "vibe coding" line as a visual moment), and the roster is
// interactive — hover/focus a name to read its role. The step sequence lives
// in the animated hero pipeline now, so it's not repeated here.
// FIRST-DRAFT COPY — verify per-agent rationale against Jayam's wording.

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const roster = [
  { name: "Odin", role: "Orchestrator", note: "The all-seer. Every task lands with him first — he classifies it and routes it to the right specialist." },
  { name: "Loki", role: "Challenger", note: "Argues the other side before anything ships. A system that only agrees with itself isn't being checked." },
  { name: "Athena", role: "Reviewer", note: "Reads the diff with judgment — logic, security, edge cases — not just a linter's checklist." },
  { name: "Hermes", role: "Messenger", note: "Owns git and ops. The only agent that commits, pushes, or opens a PR — messengers carry, they don't decide." },
  { name: "Muse", role: "Conception", note: "Shapes a raw idea into a designed brief before a single line of code exists." },
  { name: "Scribe", role: "Prompt-crafter", note: "Turns a loose request into the precise instruction a specialist actually needs." },
  { name: "Specter", role: "Investigator", note: "Digs into root cause when something breaks — before anyone reaches for a fix." },
];

export function SyndicateSection() {
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState(0);
  const active = roster[selected];

  return (
    <section id="syndicate" className="border-b border-border py-16 sm:py-24">
      <div className="container-grid">
        <p className="font-mono text-mono text-signal">Syndicate</p>
        <h2 className="mt-3 max-w-[18ch] text-h1 font-display text-text-primary" style={{ fontWeight: 440 }}>
          A governed system, not a single model improvising
        </h2>
        <p className="mt-6 max-w-[62ch] text-body-lg text-text-secondary">
          I built the original Syndicate at work to run real production changes through a
          multi-agent pipeline instead of one model doing everything at once. This site runs a
          lean adaptation of it. The architecture, the routing, and every agent here are mine.
        </p>

        {/* pull-quote — the thesis, as a visual moment */}
        <blockquote className="mt-12 max-w-[24ch] border-l-2 border-signal pl-6 text-h2 font-display text-text-primary sm:max-w-[30ch]">
          Prompting a model and governing a system of them are not the same job. One of those is
          vibe coding — the other is engineering, with more opinions in the room.
        </blockquote>

        {/* interactive roster */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-12">
          <div className="sm:col-span-7">
            <p className="font-mono text-mono text-text-muted">
              the roster <span className="text-text-muted/70">— named for the job, not for flavor</span>
            </p>
            <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Syndicate agents">
              {roster.map((agent, i) => {
                const isActive = i === selected;
                return (
                  <button
                    key={agent.name}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onMouseEnter={() => setSelected(i)}
                    onFocus={() => setSelected(i)}
                    onClick={() => setSelected(i)}
                    className="rounded-md border px-3 py-2 font-mono text-mono transition-colors duration-(--dur-fast) ease-(--ease-standard)"
                    style={{
                      borderColor: isActive ? "var(--signal)" : "var(--border-strong)",
                      color: isActive ? "var(--signal)" : "var(--text-secondary)",
                      background: isActive ? "var(--signal-tint)" : "transparent",
                    }}
                  >
                    {agent.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* detail panel */}
          <div className="sm:col-span-5">
            <motion.div
              key={active.name}
              initial={reduced ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
              className="h-full rounded-lg border border-border p-5"
              style={{ background: "var(--bg-elevated)" }}
              aria-live="polite"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-h4 text-signal">{active.name}</span>
                <span className="font-mono text-mono text-text-muted">{active.role}</span>
              </div>
              <p className="mt-3 text-body text-text-secondary">{active.note}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
