import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-grid flex flex-col gap-4 py-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}.</p>
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
