import { projects } from "@/lib/projects";
import { ProjectsCarousel } from "@/components/projects-carousel";
import { Reveal } from "@/components/reveal";

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border py-16 sm:py-24">
      <div className="container-grid">
        <Reveal>
          <h2 className="text-h1 font-display text-text-primary" style={{ fontWeight: 440 }}>
            Projects
          </h2>
          <p className="mt-4 max-w-[60ch] text-body-lg text-text-secondary">
            Drag, swipe, or use the arrows — everything here shipped.
          </p>
        </Reveal>

        <div className="mt-10">
          <ProjectsCarousel projects={projects} />
        </div>
      </div>
    </section>
  );
}
