import { PipelineDiagram } from "@/components/pipeline-diagram";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="border-b border-border py-16 sm:py-24">
      <div className="container-grid grid grid-cols-1 gap-10 sm:grid-cols-12 sm:gap-6">
        <div className="hero-reveal sm:col-span-7">
          <h1
            className="text-display font-display text-text-primary"
            style={{ fontWeight: 440 }}
          >
            Jayam Patel
          </h1>
          <p className="hero-reveal hero-reveal-delay-1 mt-6 max-w-[46ch] text-h3 font-display text-text-primary">
            {siteConfig.positioning}
          </p>
          <p className="hero-reveal hero-reveal-delay-2 mt-6 max-w-[60ch] text-body-lg text-text-secondary">
            CS junior at UMass Lowell. I design and run{" "}
            <a href="#syndicate" className="text-signal underline underline-offset-4">
              Syndicate
            </a>
            , a governed multi-agent build system — routing, safety gates, and
            oversight, not a single model improvising.
          </p>
          <div className="hero-reveal hero-reveal-delay-3 mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-md bg-signal px-5 py-2.5 font-sans text-body font-medium text-on-signal transition-colors duration-(--dur-base) ease-(--ease-standard) hover:bg-signal-strong"
            >
              Get in touch
            </a>
            <a
              href={siteConfig.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border px-5 py-2.5 font-sans text-body text-text-primary transition-colors duration-(--dur-base) ease-(--ease-standard) hover:border-signal"
            >
              View resume
            </a>
          </div>
        </div>

        <div className="hero-reveal hero-reveal-delay-2 sm:col-span-5">
          <p className="mb-3 font-mono text-mono text-text-muted">
            live pipeline — preview
          </p>
          <PipelineDiagram />
          <p className="mt-3 text-caption text-text-muted">
            The operable version — trigger a real task and scrub the route —
            ships in a later pass. This is the static shape of it.
          </p>
        </div>
      </div>
    </section>
  );
}
