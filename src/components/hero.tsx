import Image from "next/image";
import { RoleTypewriter } from "@/components/role-typewriter";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border py-16 sm:py-24">
      <div aria-hidden="true" className="instrument-grid pointer-events-none absolute inset-0" />
      <div className="container-grid relative z-10 grid grid-cols-1 items-center gap-10 sm:grid-cols-12 sm:gap-8">
        <div className="hero-reveal order-last sm:order-first sm:col-span-7">
          <h1
            className="font-display text-display text-text-primary"
            style={{ fontWeight: 440 }}
          >
            {siteConfig.name}
          </h1>

          <p className="hero-reveal hero-reveal-delay-1 mt-4 min-h-[2.5em] text-h4 font-sans font-medium text-text-primary sm:min-h-[1.5em]">
            <RoleTypewriter roles={[...siteConfig.heroRoles]} />
          </p>

          <p className="hero-reveal hero-reveal-delay-2 mt-6 max-w-[52ch] text-body-lg text-text-secondary">
            {siteConfig.valueLine}
          </p>

          <p className="hero-reveal hero-reveal-delay-2 mt-4 flex items-center gap-2 text-sm text-text-secondary">
            <span
              aria-hidden="true"
              className="status-dot-live inline-block size-1.5 rounded-full"
              style={{ background: "var(--signal)" }}
            />
            {siteConfig.availability}
          </p>

          <ul className="hero-reveal hero-reveal-delay-3 mt-6 flex flex-wrap gap-2">
            {siteConfig.proofChips.map((chip) => (
              <li
                key={chip}
                className="rounded-sm border border-border px-2 py-1 font-mono text-caption text-text-muted"
              >
                {chip}
              </li>
            ))}
          </ul>

          <div className="hero-reveal hero-reveal-delay-3 mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
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
              Resume
            </a>
            <a
              href={siteConfig.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body text-text-secondary underline-offset-4 transition-colors duration-(--dur-base) hover:text-signal hover:underline"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body text-text-secondary underline-offset-4 transition-colors duration-(--dur-base) hover:text-signal hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-reveal order-first sm:order-last sm:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-lg border border-border sm:max-w-none">
            <Image
              src="/images/profile.JPEG"
              alt="Jayam Patel"
              fill
              priority
              sizes="(min-width: 640px) 40vw, 80vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
