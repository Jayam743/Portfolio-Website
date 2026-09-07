// FIRST DRAFT COPY — facts mined from legacy-static (skills section +
// README); "junior" per docs/BUILD-SPEC.md's locked positioning (legacy
// site said "sophomore" — spec supersedes as the more current class year).

import { Reveal } from "@/components/reveal";

const stack = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "C / C++",
  "Next.js",
  "PostgreSQL",
  "Flask",
];

const meta = [
  { label: "Base", value: "UMass Lowell" },
  { label: "Role", value: "CS Junior" },
];

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border bg-bg-raised py-16 sm:py-24">
      <div className="container-grid grid grid-cols-1 gap-10 sm:grid-cols-12 sm:gap-8">
        <div className="sm:col-span-5 lg:col-span-4">
          <Reveal>
            <h2 className="text-h2 font-display text-text-primary" style={{ fontWeight: 440 }}>
              CS junior, UMass Lowell
            </h2>
          </Reveal>

          <dl className="mt-6 divide-y divide-border rounded-md border border-border">
            {meta.map((row) => (
              <div key={row.label} className="flex items-center justify-between px-4 py-3">
                <dt className="coord-label text-text-muted">{row.label}</dt>
                <dd className="text-sm text-text-secondary">{row.value}</dd>
              </div>
            ))}
            <div className="flex items-center justify-between px-4 py-3">
              <dt className="coord-label text-text-muted">Status</dt>
              <dd className="flex items-center gap-2 text-sm text-signal">
                <span
                  aria-hidden="true"
                  className="status-dot-live inline-block size-1.5 rounded-full"
                  style={{ background: "var(--signal)" }}
                />
                Open · Summer 2026
              </dd>
            </div>
          </dl>
        </div>

        <div className="sm:col-span-7 lg:col-span-8">
          <div className="space-y-4 text-body-lg text-text-secondary">
            <p>
              I build full-stack systems that hold up under real use — a
              transcript parser that has to be right, a governed pipeline
              that has to be safe, a client site that has to ship on time.
              Automation is easy to fake; I&apos;m chasing the harder thing:
              systems with routing, checks, and someone (or something)
              accountable for what goes out.
            </p>
            <p>
              Currently looking for a Summer 2026 co-op or internship where I
              can work on real infrastructure, not a toy problem.
            </p>
          </div>
          <p className="mt-8 coord-label text-text-muted">Stack</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-sm border border-border px-2 py-1 font-mono text-caption text-text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
