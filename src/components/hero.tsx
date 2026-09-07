import { PipelineDiagram } from "@/components/pipeline-diagram";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border py-16 sm:py-24">
      <div aria-hidden="true" className="instrument-grid pointer-events-none absolute inset-0" />
      <div className="container-grid relative z-10 grid grid-cols-1 items-center gap-10 sm:grid-cols-12 sm:gap-8">
        <div className="hero-reveal sm:col-span-6">
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

        <div className="hero-reveal hero-reveal-delay-2 sm:col-span-6">
          <PipelineDiagram />
        </div>
      </div>
    </section>
  );
}
