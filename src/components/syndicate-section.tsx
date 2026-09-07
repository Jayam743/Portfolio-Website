"use client";

// Syndicate deep-dive — demoted per docs/CONTENT.md: optional depth for
// engineers who want to dig in, not the hero's job anymore. The animated
// pipeline (previously in the hero) now lives here, introduced in plain
// English first so anyone gets it in one line. The former standalone
// pull-quote is folded into that intro instead of floating on its own. The
// roster stays interactive — hover/focus a name to read its role.
// FIRST-DRAFT COPY — verify per-agent rationale against Jayam's wording.

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PipelineDiagram } from "@/components/pipeline-diagram";
import { Reveal } from "@/components/reveal";

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
    <section id="syndicate" className="border-b border-border bg-bg-raised py-16 sm:py-24">
      <div className="container-grid lg:grid lg:grid-cols-12 lg:gap-6">
        {/* sparse gutter coordinate label — one of two anchor spots site-wide */}
        <div className="hidden lg:col-span-2 lg:block lg:pt-2">
          <p className="coord-label text-text-muted">
            Agents<span className="text-signal"> · 07</span>
          </p>
        </div>

        <div className="lg:col-span-10">
          <Reveal>
            <h2 className="max-w-[22ch] text-h1 font-display text-text-primary" style={{ fontWeight: 440 }}>
              The deep-dive: how Syndicate works
            </h2>
            <p className="mt-6 max-w-[62ch] text-body-lg text-text-secondary">
              At Analogic I built the runtime that drives our internal AI agents safely — here&apos;s
              how a task flows through it. Prompting a model and governing a system of them
              aren&apos;t the same job; this site runs a lean adaptation of the same architecture,
              routing, and agents.
            </p>
          </Reveal>

          <div className="mt-12">
            <PipelineDiagram />
          </div>

          {/* interactive roster */}
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-12">
            <div className="sm:col-span-7">
              <p className="text-sm text-text-secondary">
                Hover a name — named for the job, not the flavor.
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
      </div>
    </section>
  );
}
