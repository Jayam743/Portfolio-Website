"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "error" | "submitted";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
        <div className="sm:col-span-5">
          <p className="font-mono text-mono text-signal">Contact</p>
          <h2 className="mt-3 text-h2 font-display text-text-primary" style={{ fontWeight: 440 }}>
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
        </div>

        <div className="sm:col-span-7">
          <form
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
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
                  className="rounded-md border border-border bg-bg-raised px-3 py-2.5 text-body text-text-primary outline-none transition-colors duration-(--dur-base) focus:border-signal"
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
                  className="rounded-md border border-border bg-bg-raised px-3 py-2.5 text-body text-text-primary outline-none transition-colors duration-(--dur-base) focus:border-signal"
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
                className="resize-y rounded-md border border-border bg-bg-raised px-3 py-2.5 text-body text-text-primary outline-none transition-colors duration-(--dur-base) focus:border-signal"
              />
            </div>

            {/* Turnstile mounts here once bot-gating is wired (deferred). */}
            <div
              aria-hidden="true"
              className="flex h-[65px] w-[300px] max-w-full items-center justify-center rounded-md border border-dashed border-border text-caption text-text-muted"
            >
              Turnstile widget slot
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
              <p className="text-sm text-ok" role="status">
                Form looks good — submission isn&apos;t wired up yet.
              </p>
            )}

            <button
              type="submit"
              className="self-start rounded-md bg-signal px-5 py-2.5 font-sans text-body font-medium text-on-signal transition-colors duration-(--dur-base) ease-(--ease-standard) hover:bg-signal-strong"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
