# Jayam Patel — Portfolio

**Live:** https://portfolio-website-tawny-sigma-95.vercel.app

Personal portfolio of Jayam Patel — a software / platform engineer building AI-agent
infrastructure, LLM observability, and cloud automation. Currently a Software Engineer
Co-op at Analogic; CS @ UMass Lowell.

## Tech

- **Next.js 15** (App Router) · **TypeScript** · **Tailwind CSS v4**
- **Framer Motion** — hero reveal, projects coverflow carousel, agent pipeline
- **Secure contact form** — Cloudflare Turnstile (bot-gate) + server-side validation +
  [Resend](https://resend.com) email delivery, via a Node route handler
  (`src/app/api/contact`). No secrets in the client; fails closed if misconfigured.
- Deployed on **Vercel**

## Features

- Legible-first hero (photo, rotating roles, proof chips), real Experience section,
  interactive projects carousel, categorized tech stack
- **Ink / Paper** theme toggle · responsive **360px → 4K** · `prefers-reduced-motion`
  aware · WCAG 2.1 AA · SEO metadata + JSON-LD

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Create `.env.local` with:

```
NEXT_PUBLIC_TURNSTILE_SITE_KEY=   # Cloudflare Turnstile site key (public)
TURNSTILE_SECRET_KEY=             # Turnstile secret key (server-only)
RESEND_API_KEY=                   # Resend API key (server-only)
CONTACT_TO_EMAIL=                 # inbox that receives contact submissions
```

Locally the Turnstile keys fall back to Cloudflare's public test keys, so the site runs
without real credentials (email sending needs a real `RESEND_API_KEY`). In production all
four are set in Vercel's environment variables.

## Structure

```
src/app/          routes + layout + /api/contact
src/components/   hero, experience, projects carousel, tech stack, contact, …
src/lib/          content data (projects, experience, tech stack, site config)
public/           images + resume
docs/             design + build specifications
```

© 2026 Jayam Patel
