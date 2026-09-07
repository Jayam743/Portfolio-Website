// FIRST DRAFT COPY — facts mined from legacy-static (skills section +
// README); "junior" per docs/BUILD-SPEC.md's locked positioning (legacy
// site said "sophomore" — spec supersedes as the more current class year).

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

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border py-16 sm:py-24">
      <div className="container-grid grid grid-cols-1 gap-10 sm:grid-cols-12 sm:gap-6">
        <div className="sm:col-span-4">
          <p className="font-mono text-mono text-signal">About</p>
          <h2 className="mt-3 text-h2 font-display text-text-primary" style={{ fontWeight: 440 }}>
            CS junior, UMass Lowell
          </h2>
        </div>
        <div className="sm:col-span-8">
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
          <p className="mt-6 font-mono text-mono text-text-muted">stack</p>
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
