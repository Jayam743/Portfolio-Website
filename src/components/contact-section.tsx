"use client";

import { useRef, useState, type FormEvent } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";

type Status = "idle" | "submitting" | "error" | "submitted";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Cloudflare's public Turnstile test site key — always renders a
// pass-through widget. Only used as a local-dev fallback; production sets
// NEXT_PUBLIC_TURNSTILE_SITE_KEY via Vercel env.
const TURNSTILE_SITE_KEY_FALLBACK = "1x00000000000000000000AA";
const turnstileSiteKey =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? TURNSTILE_SITE_KEY_FALLBACK;

const GENERIC_ERROR = "Something went wrong — please email me directly.";

const fieldClasses =
  "rounded-md border border-border bg-bg-raised px-3 py-2.5 text-body text-text-primary outline-none transition-[border-color,box-shadow] duration-(--dur-base) ease-(--ease-standard) focus:border-signal focus:shadow-[0_0_0_3px_var(--color-signal-tint)]";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<TurnstileInstance>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    // Client-side validation is UX only — the server re-validates
    // everything and never trusts this pass.
    if (!name || !email || !message || !emailPattern.test(email) || !turnstileToken) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, turnstileToken }),
      });

      if (!response.ok) {
        throw new Error("request failed");
      }

      form.reset();
      turnstileRef.current?.reset();
      setTurnstileToken("");
      setStatus("submitted");
    } catch {
      turnstileRef.current?.reset();
      setTurnstileToken("");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-b border-border py-16 sm:py-24">
      <div className="container-grid grid grid-cols-1 gap-10 sm:grid-cols-12 sm:items-center sm:gap-6">
        <div className="sm:col-span-5">
          <div className="lg:flex lg:items-start lg:gap-6">
            {/* sparse gutter coordinate label — second of two anchor spots;
                top-aligned flush-left against the heading, not centered */}
            <p className="coord-label mb-3 flex items-center gap-1.5 text-text-muted lg:mb-0 lg:shrink-0">
              <span
                aria-hidden="true"
                className="status-dot-live inline-block size-1.5 rounded-full"
                style={{ background: "var(--signal)" }}
              />
              Open
            </p>

            <div className="lg:flex-1">
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
          </div>
        </div>

        <div className="mt-10 sm:col-span-7 sm:mt-0">
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

            <Turnstile
              ref={turnstileRef}
              siteKey={turnstileSiteKey}
              onSuccess={setTurnstileToken}
              onExpire={() => setTurnstileToken("")}
              onError={() => setTurnstileToken("")}
            />

            <div
              role="alert"
              aria-live="polite"
              className="min-h-6 text-sm text-error"
            >
              {status === "error" && GENERIC_ERROR}
            </div>

            {status === "submitted" && (
              <div
                role="status"
                className="flex items-center gap-2 rounded-md border border-ok/40 bg-ok/10 px-3 py-2 text-sm text-ok"
              >
                <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-ok" />
                Thanks — your message is on its way.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="self-start rounded-md bg-signal px-5 py-2.5 font-sans text-body font-medium text-on-signal transition-colors duration-(--dur-base) ease-(--ease-standard) hover:bg-signal-strong active:bg-signal-deep disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
