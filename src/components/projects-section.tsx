import Image from "next/image";
import { projectsFoundationTier, projectsSecondTier } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border py-16 sm:py-24">
      <div className="container-grid">
        <p className="font-mono text-mono text-signal">Projects</p>
        <h2 className="mt-3 text-h1 font-display text-text-primary" style={{ fontWeight: 440 }}>
          Outside Syndicate
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6">
          {projectsSecondTier.map((project) => (
            <article
              key={project.id}
              className="grid grid-cols-1 gap-6 rounded-lg border border-border bg-bg-elevated p-6 sm:grid-cols-12 sm:items-center sm:p-8"
            >
              <div className="sm:col-span-5">
                <div className="overflow-hidden rounded-md border border-border">
                  <Image
                    src={project.image.src}
                    alt={`${project.name} screenshot`}
                    width={project.image.width}
                    height={project.image.height}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 640px) 40vw, 90vw"
                  />
                </div>
              </div>
              <div className="sm:col-span-7">
                <p className="font-mono text-mono text-text-muted">{project.role}</p>
                <h3 className="mt-2 text-h3 font-display text-text-primary">
                  {project.name}
                </h3>
                <p className="mt-3 text-body text-text-secondary">
                  {project.whyItMattered}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-sm border border-border px-2 py-1 font-mono text-caption text-text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-4">
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body font-medium text-signal underline underline-offset-4"
                    >
                      View live
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body font-medium text-text-secondary underline underline-offset-4"
                    >
                      Source
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <p className="font-mono text-mono text-text-muted">foundations</p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {projectsFoundationTier.map((project) => (
              <article
                key={project.id}
                className="flex flex-col gap-3 rounded-md border border-border bg-bg-raised p-5 transition-colors duration-(--dur-base) ease-(--ease-standard) hover:border-signal/40"
              >
                <div className="overflow-hidden rounded-sm border border-border">
                  <Image
                    src={project.image.src}
                    alt={`${project.name} screenshot`}
                    width={project.image.width}
                    height={project.image.height}
                    className="h-32 w-full object-cover"
                    sizes="(min-width: 640px) 30vw, 90vw"
                  />
                </div>
                <h3 className="text-h4 font-display text-text-primary">
                  {project.name}
                </h3>
                <p className="text-sm text-text-secondary">{project.whyItMattered}</p>
                <p className="font-mono text-caption text-text-muted">
                  {project.stack.join(" · ")}
                </p>
                <div className="mt-auto flex flex-wrap gap-4 pt-1">
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-signal underline underline-offset-4"
                    >
                      View
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-text-secondary underline underline-offset-4"
                    >
                      Source
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
