import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-grid flex flex-col gap-4 py-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
          <p>© {new Date().getFullYear()} {siteConfig.name}.</p>
          <p className="coord-label flex items-center gap-1.5 text-text-muted">
            <span
              aria-hidden="true"
              className="status-dot-live inline-block size-1.5 rounded-full"
              style={{ background: "var(--signal)" }}
            />
            Systems nominal
          </p>
        </div>
        <div className="flex items-center gap-5 font-mono text-mono">
          <a
            href={siteConfig.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors duration-(--dur-base) hover:text-signal"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors duration-(--dur-base) hover:text-signal"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-text-secondary transition-colors duration-(--dur-base) hover:text-signal"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
