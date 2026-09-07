import { experience } from "@/lib/experience";
import { Reveal } from "@/components/reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-border bg-bg-raised py-16 sm:py-24">
      <div className="container-grid">
        <Reveal>
          <h2 className="text-h1 font-display text-text-primary" style={{ fontWeight: 440 }}>
            Experience
          </h2>
          <p className="mt-4 max-w-[60ch] text-body-lg text-text-secondary">
            Real production work, not class projects — a co-op building AI-agent
            infrastructure, and two shipped engagements before it.
          </p>
        </Reveal>

        <ol className="mt-12 space-y-10 border-l border-border pl-6 sm:pl-8">
          {experience.map((job) => (
            <li key={job.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[calc(1.5rem+4.5px)] inline-block size-2 rounded-full sm:-left-[calc(2rem+4.5px)]"
                style={{
                  background: job.current ? "var(--signal)" : "var(--border-strong)",
                }}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-h3 font-display text-text-primary">
                  {job.role} · {job.company}
                </h3>
                {job.current && (
                  <span className="flex items-center gap-1.5 font-mono text-mono text-signal">
                    <span
                      aria-hidden="true"
                      className="status-dot-live inline-block size-1.5 rounded-full"
                      style={{ background: "var(--signal)" }}
                    />
                    Current
                  </span>
                )}
              </div>
              <p className="coord-label mt-1 text-text-muted">
                {job.location} · {job.dates}
              </p>
              <ul className="mt-4 space-y-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-body text-text-secondary">
                    <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-border-strong" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
