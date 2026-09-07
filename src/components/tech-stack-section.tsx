import { techStack } from "@/lib/tech-stack";
import { Reveal } from "@/components/reveal";

export function TechStackSection() {
  return (
    <section id="stack" className="py-16 sm:py-24">
      <div className="container-grid">
        <Reveal>
          <h2 className="text-h1 font-display text-text-primary" style={{ fontWeight: 440 }}>
            Tech stack
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {techStack.map((category, i) => (
            <div
              key={category.id}
              className={`rounded-lg border border-border bg-bg-elevated p-5 ${
                i === techStack.length - 1 ? "sm:col-span-2" : ""
              } ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              <p className="coord-label text-signal">{category.label}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-border px-2 py-1 font-mono text-caption text-text-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
