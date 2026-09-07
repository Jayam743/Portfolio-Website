"use client";

// The projects carousel — the creative flair Jayam specifically asked back
// for: a physics-feeling coverflow. Active card centers + scales up; side
// cards tilt away and dim. Drag/swipe with momentum via velocity+offset
// thresholds, damped spring settle (no elastic bounce), prev/next arrows,
// and full keyboard support (arrow keys / Home / End on the region).
// Under prefers-reduced-motion the same tilted/scaled coverflow layout stays
// (it still needs to look designed), just static: no drag, and index changes
// (via arrows/keyboard) jump instantly instead of spring-animating.

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type PanInfo } from "framer-motion";
import type { Project } from "@/lib/projects";
import { SPRING } from "@/lib/motion";

const SWIPE_OFFSET_FRACTION = 0.28; // fraction of step needed to commit a swipe
const SWIPE_VELOCITY_THRESHOLD = 480; // px/s — a flick commits regardless of distance

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function ProjectCardBody({ project, interactive }: { project: Project; interactive: boolean }) {
  return (
    <article
      className="flex h-full flex-col gap-3 rounded-lg border bg-bg-elevated p-5 transition-colors duration-(--dur-base) ease-(--ease-standard) sm:p-6"
      style={{ borderColor: interactive ? "var(--signal)" : "var(--border-hairline)" }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border">
        <Image
          src={project.image.src}
          alt={`${project.name} screenshot`}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 340px, 78vw"
          draggable={false}
        />
      </div>
      <h3 className="text-h4 font-display text-text-primary">{project.name}</h3>
      <p className="text-sm text-text-secondary">{project.blurb}</p>
      <p className="font-mono text-caption text-text-muted">{project.stack.join(" · ")}</p>
      <div className="mt-auto flex flex-wrap gap-4 pt-1">
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={interactive ? 0 : -1}
            className="text-sm font-medium text-signal underline underline-offset-4"
          >
            {project.hrefLabel}
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={interactive ? 0 : -1}
            className="text-sm font-medium text-text-secondary underline underline-offset-4"
          >
            Source
          </a>
        )}
      </div>
    </article>
  );
}

export function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const reduced = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(320);
  const [index, setIndex] = useState(0);
  const [dragPx, setDragPx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => setStep(clamp(el.offsetWidth * 0.56, 200, 360));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const goTo = useCallback(
    (next: number) => setIndex(clamp(next, 0, projects.length - 1)),
    [projects.length],
  );

  function handleDragStart() {
    setIsDragging(true);
  }
  function handleDrag(_: unknown, info: PanInfo) {
    setDragPx(info.offset.x);
  }
  function handleDragEnd(_: unknown, info: PanInfo) {
    setIsDragging(false);
    setDragPx(0);
    const passedOffset = Math.abs(info.offset.x) > step * SWIPE_OFFSET_FRACTION;
    const passedVelocity = Math.abs(info.velocity.x) > SWIPE_VELOCITY_THRESHOLD;
    if (passedOffset || passedVelocity) {
      goTo(index + (info.offset.x < 0 ? 1 : -1));
    }
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(projects.length - 1);
    }
  }

  return (
    <div>
      <div
        ref={stageRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Projects"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="relative h-[440px] outline-none sm:h-[480px]"
        style={{ perspective: 1400 }}
      >
        <p aria-live="polite" className="sr-only">
          {projects[index].name}, project {index + 1} of {projects.length}
        </p>
        <motion.div
          className={
            reduced
              ? "absolute inset-0"
              : "absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing"
          }
          drag={reduced ? false : "x"}
          dragElastic={0.1}
          dragConstraints={{ left: 0, right: 0 }}
          dragMomentum={false}
          onDragStart={reduced ? undefined : handleDragStart}
          onDrag={reduced ? undefined : handleDrag}
          onDragEnd={reduced ? undefined : handleDragEnd}
          style={{ transformStyle: "preserve-3d" }}
        >
          {projects.map((project, i) => {
            const distance = i - index + (reduced ? 0 : dragPx / step);
            const abs = Math.abs(distance);
            const interactive = abs < 0.5;
            const scale = clamp(1 - abs * 0.16, 0.74, 1);
            const rotateY = clamp(distance * -24, -30, 30);
            const opacity = clamp(1 - abs * 0.38, 0.28, 1);
            const x = distance * step;
            const z = -abs * 60;
            const zIndex = Math.round(100 - abs * 10);

            return (
              <div
                key={project.id}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  zIndex,
                  pointerEvents: interactive ? "auto" : "none",
                  transformStyle: "preserve-3d",
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${project.name}, ${i + 1} of ${projects.length}`}
                aria-hidden={!interactive}
              >
                <motion.div
                  animate={{ x, rotateY, scale, opacity, z }}
                  transition={reduced || isDragging ? { duration: 0 } : SPRING}
                  className="w-[min(78vw,340px)]"
                >
                  <ProjectCardBody project={project} interactive={interactive} />
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous project"
          className="rounded-md border border-border p-2.5 text-text-secondary transition-colors duration-(--dur-base) ease-(--ease-standard) hover:border-signal hover:text-signal disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-border disabled:hover:text-text-secondary"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <p className="coord-label text-text-muted">
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          disabled={index === projects.length - 1}
          aria-label="Next project"
          className="rounded-md border border-border p-2.5 text-text-secondary transition-colors duration-(--dur-base) ease-(--ease-standard) hover:border-signal hover:text-signal disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-border disabled:hover:text-text-secondary"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  );
}
