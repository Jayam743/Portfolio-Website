import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const sections = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#syndicate", label: "Syndicate" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="border-b border-border bg-bg/80 backdrop-blur">
      <div className="container-grid flex h-16 items-center justify-between gap-6">
        <Link
          href="#top"
          className="font-mono text-mono text-text-primary transition-colors duration-(--dur-base) hover:text-signal"
        >
          Jayam Patel
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 sm:flex">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="text-sm text-text-secondary underline-offset-4 transition-colors duration-(--dur-base) hover:text-text-primary hover:underline"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <nav aria-label="Section" className="flex sm:hidden">
            <a
              href="#projects"
              className="text-sm text-text-secondary hover:text-text-primary"
            >
              Projects
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
