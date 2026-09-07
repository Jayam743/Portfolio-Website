"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";

type Status = "idle" | "error" | "submitted";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClasses =
  "rounded-md border border-border bg-bg-raised px-3 py-2.5 text-body text-text-primary outline-none transition-[border-color,box-shadow] duration-(--dur-base) ease-(--ease-standard) focus:border-signal focus:shadow-[0_0_0_3px_var(--color-signal-tint)]";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Client-side validation only — the server re-validates once the
    // route/server action lands (see §5 "service decides", never trust
    // the client). No network call happens yet.
    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message || !emailPattern.test(email)) {
      setStatus("error");
      return;
    }

    // TODO: POST to a Next.js server action / route handler here once the
    // backend lands (Turnstile verify -> rate limit -> validate -> send).
    // Deferred per docs/BUILD-SPEC.md §9 — visual + client validation only
    // in this pass.
    setStatus("submitted");
  }

  return (
    <section id="contact" className="border-b border-border py-16 sm:py-24">
      <div className="container-grid grid grid-cols-1 gap-10 sm:grid-cols-12 sm:gap-6">
        {/* sparse gutter coordinate label — second of two anchor spots */}
        <div className="hidden lg:col-span-1 lg:block lg:pt-2">
          <p className="coord-label flex items-center gap-1.5 text-text-muted">
            <span
              aria-hidden="true"
              className="status-dot-live inline-block size-1.5 rounded-full"
              style={{ background: "var(--signal)" }}
            />
            Open
          </p>
        </div>

        <div className="sm:col-span-5 lg:col-span-4 lg:col-start-2">
          <Reveal>
            <h2 className="text-h2 font-display text-text-primary" style={{ fontWeight: 440 }}>
              Reach out
            </h2>
            <p className="mt-4 max-w-[42ch] text-body text-text-secondary">
              The fastest path is the form. Or email directly at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-signal underline underline-offset-4"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </Reveal>

          <div className="mt-8">
            <p className="coord-label text-text-muted">Channels</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a
                href={siteConfig.githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary underline-offset-4 transition-colors duration-(--dur-base) hover:text-signal hover:underline"
              >
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary underline-offset-4 transition-colors duration-(--dur-base) hover:text-signal hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:col-span-7 sm:mt-0 lg:col-span-7">
          <form
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-lg border border-border bg-bg-elevated p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-text-secondary">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className={fieldClasses}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-text-secondary">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={fieldClasses}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-text-secondary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className={`resize-y ${fieldClasses}`}
              />
            </div>

            {/* Turnstile mounts here once bot-gating is wired (deferred). */}
            <div
              aria-hidden="true"
              className="flex h-[65px] w-[300px] max-w-full items-center gap-2 rounded-md border border-dashed border-border bg-bg-raised px-4 text-caption text-text-muted"
            >
              <span className="inline-block size-1.5 rounded-full bg-text-muted" />
              <span className="coord-label">Turnstile · bot check</span>
            </div>

            <div
              role="alert"
              aria-live="polite"
              className="min-h-6 text-sm text-error"
            >
              {status === "error" &&
                "Something's missing — check name, email, and message."}
            </div>

            {status === "submitted" && (
              <div
                role="status"
                className="flex items-center gap-2 rounded-md border border-ok/40 bg-ok/10 px-3 py-2 text-sm text-ok"
              >
                <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-ok" />
                Form looks good — submission isn&apos;t wired up yet.
              </div>
            )}

            <button
              type="submit"
              className="self-start rounded-md bg-signal px-5 py-2.5 font-sans text-body font-medium text-on-signal transition-colors duration-(--dur-base) ease-(--ease-standard) hover:bg-signal-strong active:bg-signal-deep"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
