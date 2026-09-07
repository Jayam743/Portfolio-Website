// FIRST DRAFT COPY — grounded in docs/BUILD-SPEC.md §4a (naming rationale,
// origin story, "not vibe coding" thesis). Per-agent rationale should be
// verified against Jayam's exact wording before this ships; this is a
// solid starting draft, not final copy.

const roster = [
  {
    name: "Odin",
    role: "Orchestrator",
    note: "the all-seer — every task lands with him first; he classifies it and routes it to the right specialist.",
  },
  {
    name: "Loki",
    role: "Challenger",
    note: "argues the other side before anything ships. Not a yes-man by design.",
  },
  {
    name: "Athena",
    role: "Reviewer",
    note: "reads the diff with judgment, not just a linter's checklist.",
  },
  {
    name: "Hermes",
    role: "Messenger",
    note: "owns git and ops — the only agent that commits, pushes, or opens a PR.",
  },
  {
    name: "Muse",
    role: "Conception",
    note: "shapes a raw idea into a brief before a single line of code exists.",
  },
  {
    name: "Scribe",
    role: "Prompt-crafter",
    note: "turns a request into the precise instruction a specialist actually needs.",
  },
  {
    name: "Specter",
    role: "Investigator",
    note: "digs into root cause when something's wrong, before anyone reaches for a fix.",
  },
];

const pipeline = [
  { step: "A task enters the system.", agent: null },
  { step: "Odin classifies it and decides who should own it.", agent: "Odin" },
  { step: "It routes to the specialist built for that job.", agent: null },
  { step: "The result hits a safety gate before it can go further.", agent: "Gate" },
  { step: "Loki argues the case — the system disagrees with itself on purpose.", agent: "Loki" },
  { step: "It returns, reviewed and accountable.", agent: null },
];

export function SyndicateSection() {
  return (
    <section id="syndicate" className="border-b border-border py-16 sm:py-24">
      <div className="container-grid">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-12 sm:gap-6">
          <div className="sm:col-span-7">
            <p className="font-mono text-mono text-signal">Syndicate</p>
            <h2 className="mt-3 text-h1 font-display text-text-primary" style={{ fontWeight: 440 }}>
              A governed system, not a single model improvising
            </h2>
            <div className="mt-6 space-y-4 text-body-lg text-text-secondary">
              <p>
                I built the original Syndicate at work to run real production
                changes through a multi-agent pipeline instead of one model
                doing everything at once. This site runs a lean adaptation of
                it, built for home — same architecture, same agent roster,
                same discipline, smaller footprint. It layers on top of a
                third-party workflow baseline for its safety plumbing, but the
                architecture, the routing, and every agent here are mine.
              </p>
              <p>
                Every agent is named for its role, not for flavor. Odin
                orchestrates because he sees everything and routes it. Loki
                argues because a system that only agrees with itself isn&apos;t
                being checked. Hermes is the only one who touches git, because
                messengers carry things — they don&apos;t decide what goes in
                them. The names aren&apos;t decoration; they&apos;re a map of who
                is accountable for what.
              </p>
              <p>
                There&apos;s a difference between prompting a model and
                governing a system of them — routing, safety gates, a
                built-in challenger, and a paper trail of who did what. One of
                those is vibe coding. The other is just engineering, with more
                opinions in the room.
              </p>
            </div>
          </div>

          <div className="sm:col-span-5">
            <p className="font-mono text-mono text-text-muted">the roster</p>
            <dl className="mt-3 divide-y divide-border border-y border-border">
              {roster.map((agent) => (
                <div key={agent.name} className="flex flex-col gap-1 py-3">
                  <dt className="flex items-baseline gap-2">
                    <span className="font-mono text-mono text-signal">{agent.name}</span>
                    <span className="text-caption text-text-muted">{agent.role}</span>
                  </dt>
                  <dd className="text-sm text-text-secondary">{agent.note}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-16">
          <p className="font-mono text-mono text-text-muted">the sequence</p>
          <ol className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pipeline.map((item, i) => (
              <li
                key={item.step}
                className="rounded-md border border-border bg-bg-raised p-4"
              >
                <span className="font-mono text-mono text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm text-text-secondary">{item.step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
