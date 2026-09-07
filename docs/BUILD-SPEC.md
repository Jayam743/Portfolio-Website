# CANONICAL BUILD BRIEF — Jayam Patel Portfolio

*North-star document. `DESIGN-DIRECTION.md`, `DESIGN.md`, and the build hang off this. Locked decisions are constraints, not open questions.*

> **Locked choices (confirmed by Jayam, 2026-09-06):**
> - Architecture: **Hybrid** — static-generated core + two secured dynamic features.
> - Access: **public core**, secured dynamic features only.
> - Signal color: **matured sandstone → amber-gold** on a cool ink base.
> - Syndicate exposure: **curated slice** (architecture + philosophy + live demo; internals held back).
> - Stack: Next.js 15 + TypeScript + Tailwind · Supabase (Postgres/Auth/RLS) · Cloudflare Pages · Upstash · Turnstile · Sentry · GitHub. **All free-tier.**

---

## 1. One-line positioning
A live, secure systems-engineering portfolio where the site itself is the proof — a recruiter doesn't read about Jayam's work, they stand inside a real secured system he built.

**Identity line:** *"I build the systems that run the agents — orchestration and governance, not automation."*

## 2. Goal & audience
- **Primary:** technical recruiters & hiring managers (new-grad / internship; AI-and-infra-leaning teams), arriving from a LinkedIn "first showcased project" link.
- **Secondary:** engineers who vet depth (skim the Syndicate centerpiece, maybe view source).
- **Wanted action:** recruiter reaches out via the contact form (or saves/shares) with the verdict "this person operates above his level — I want him on the team."
- **Emotional arc:** intrigue (hero) → credibility (Syndicate) → trust (visibly real security) → reach out (frictionless contact).

## 3. Success criteria — vague adjectives made testable (the acceptance contract)
**World-class / $100K feel**
- Lighthouse ≥ 95 across Performance / A11y / Best Practices / SEO, mobile + desktop.
- LCP < 2.0s, CLS < 0.05, INP < 200ms on throttled 4G mid-tier mobile.
- Zero layout shift on load; no FOUC; fonts preloaded.
- Consistent 8pt spacing grid, one type scale, one motion language — nothing arbitrary.

**Wow factor**
- ≥ 1 signature interactive moment tied to *content* (the live Syndicate agent-routing pipeline), not decorative fluff.
- Motion purposeful; respects `prefers-reduced-motion`; never blocks reading/interaction.
- The wow moment survives on mobile (degrades gracefully, never breaks).

**Stand out / not generic**
- Passes the "template test": nothing reads as a known Next/Tailwind starter or AI-generated boilerplate (see §8).
- A distinct visual signature (color, type pairing, one recurring motif) recognizable across all sections.

**Recruiter magnet**
- Time-to-understand-who-he-is < 5s above the fold.
- Syndicate legible to a non-expert recruiter in one scroll, with a depth path for engineers.
- Contact reachable from anywhere in ≤ 1 action.

**Secure / the security is the showcase**
- Contact form + guestbook demonstrably work.
- View-source / network inspection reveals **zero secrets**; no privileged operations client-side.
- A skeptical engineer probing the dynamic features finds correct behavior (rate limited, bot-gated, RLS-enforced, clean signout, generic errors).

**Efficient**
- Static core ships as pre-rendered HTML; dynamic features are the only server-touching paths.
- Minimal total blocking JS on core pages; no unused heavy libraries.

## 4. In-scope surfaces
1. **Hero** — name, positioning line, the signature visual moment, primary CTA.
2. **Syndicate centerpiece** — deep dive: what it is, architecture (Odin → specialists, safety gates, tiered model routing, oversight), why it's hard, outcomes. The emotional + technical peak. *(Curated slice.)*
3. **Projects** — Smart UML (strong second), then Snake / Pyphone / Luxeciaga as a compact foundations strip; each: role, stack, one-line "why it mattered," link.
4. **About** — short, high-signal: CS junior @ UMass Lowell, what he builds, what he's chasing.
5. **Contact** — secured dynamic form (§5).
6. **Guestbook** — GitHub-OAuth secured feature (§5); doubles as a live security demo / "sign the ledger."
7. **Global** — nav, footer (©, minimal), 404, consent notice only if analytics warrant.

## 4a. Syndicate case-study content & the narrative thesis
*Raw material from Jayam — to be shaped into copy, not pasted. Verify specific naming rationale with him when writing the case study.*

- **Origin / IP:** Jayam created the original **Syndicate at work**, then built this lean **adaptation for home**. It is his own system — he owns the concept, architecture, and the agent design. (It *layers on* a third-party baseline (BJ's CC workflow) — so the curated slice shows **Jayam's** architecture, agent roster, and naming; the baseline's internals stay out of frame.)
- **The naming story** (a case-study beat — signals intentionality & taste, not randomness): why it's called **Syndicate**, and how each agent was named from mythology, matched to its role — **Odin** the orchestrator (the all-seer who routes), **Loki** the devil's-advocate/challenger, **Athena** the wise reviewer, **Hermes** the messenger (git/ops), **Muse** the conception partner, **Scribe** the prompt-crafter, **Specter** the investigator, etc. Each name is a role argument. *(Collect Jayam's exact rationale per agent when drafting.)*
- **The narrative thesis — "real systems engineering, not vibe coding":** the misconception Jayam wants to quietly demolish is that working with AI makes engineering easy and anyone can do it. **The rebuttal is demonstration, never complaint.** The site's legible architecture, safety gates, governance, and tiered routing *are* the argument — a recruiter concludes "this is hard, real engineering" on their own. Permit **one** confident, dry line in the Syndicate writeup drawing the line between *governing a system of agents* and *"vibe coding"* — stated with pride, never defensiveness or bitterness.

## 5. Security-feature disposition
Musts: **no key in JS · service decides · lock the table · real signout · one error text.**

| Term | Status | Where | How it satisfies the musts |
|---|---|---|---|
| Authentication | IN | Guestbook only (GitHub OAuth / Supabase Auth) | Public core needs none. *Real signout* = server-side session invalidation. |
| Rate limiting | IN | Contact + guestbook POST (Upstash) | *Service decides* — server-side, keyed by IP/identity; client can't bypass. |
| RLS | IN | Supabase guestbook table | *Lock the table* — default-deny; writes gated to the authed user's own rows; anon can't mutate. |
| Server-side validation | IN | Both API routes | *Service decides* — re-run server-side regardless of client checks. |
| Version control | IN | GitHub repo | Public repo = proof-of-work; history is part of the story. |
| APIs | IN | Next.js route handlers (the two features) | The only server surface; everything else static. |
| Hosting | IN | Cloudflare Pages (free) | Static core at edge; dynamic via functions/routes. |
| Security (headers/keys) | IN | Global | *No key in JS* — secrets server-env only; CSP, HSTS, security headers; Turnstile on the form. |
| Caching | IN | Static core (edge/CDN) + immutable assets | Pre-rendered cached at edge; dynamic routes non-cached. |
| Copyright | IN | Footer + LICENSE | Lightweight © + explicit repo license. |
| Cookies | IN (minimal) | Auth session cookie; consent only if analytics | httpOnly/secure/sameSite; no third-party tracking by default. |
| Error tracking | IN | Sentry | *One error text* — full detail server-side; user sees a single generic message. |
| Turnstile (bot-gate) | IN | Contact form | Server verifies token — no client trust. |
| Scaling | OUT (as a task) | — | Free-tier edge + static core already scales for portfolio traffic. Note "architecture is scale-ready" in the Syndicate writeup instead of building for load that won't come. |

## 6. SEO
- **Metadata:** unique title + description per page; Open Graph + Twitter cards with custom OG image; canonical URLs.
- **JSON-LD:** `Person` (Jayam Patel, UMass Lowell, role, sameAs → GitHub/LinkedIn); `SoftwareApplication`/`CreativeWork` for Syndicate + key projects.
- **Sitemap + robots:** generated `sitemap.xml`; sensible `robots.txt` (core allowed, API not exposed).
- **Keyword themes (woven into real copy, never stuffed):** Jayam Patel, AI agent orchestration, multi-agent systems, Claude Code, full-stack engineer, Next.js, systems engineering, secure web architecture, UMass Lowell computer science.
- **Crawlability:** one `h1`/page, logical headings, descriptive alt, real anchor text.
- **Target:** name + "portfolio" and name + "Syndicate" resolve here.

## 7. Tone & voice
Confident, not arrogant. Technically credible (precise nouns used correctly). Human, first-person, a little dry wit; no corporate filler. Earned specificity over adjectives ("default-deny RLS on the guestbook table" beats "highly secure").

## 8. Non-goals / anti-patterns
- No AI-slop / template look: no stock gradient-blob hero, no "passionate developer" copy, no unmodified starter aesthetic.
- No design-skill clash: all design skills resolve into **one** coherent system in `DESIGN.md` — one type scale, one palette, one motion language.
- No over-engineering: no auth on the public core, no microservices, no premature scaling.
- No try-hard: no scroll-jacking, autoplay audio, gratuitous 3D that tanks mobile/perf.
- No discoverability harm: no client-only rendering of primary content, no blocked crawlers, no missing metadata.
- No secret leakage: nothing privileged in the client bundle, ever.

## 9. Constraints
- **Free-tier only**, entire stack. No paid dependency may enter the build.
- **Locked stack** (do not re-open): see header.
- **Hybrid**: static-generated core + two server-touching features only.
- **A11y:** WCAG 2.1 AA — contrast, keyboard nav, focus states, reduced-motion, semantic HTML.
- **Perf budget:** §3 targets; mobile-first; graceful degradation of the signature moment.
- **Verification loop:** Playwright drives the built site to confirm render + both dynamic features + success criteria; iterate until green.

## 10. Production checklist (triaged for a personal portfolio, 2026-09-06)
**Build these (🎯):** custom 404 · CTA above the fold · per-route meta title + description · canonical tags · Open Graph image (LinkedIn share card — high priority) · favicon set (monogram/glyph) · robots.txt + sitemap.xml · alt text on every image · full mobile→4K breakpoints (§5) · sticky mobile CTA (subtle, not clutter) · loading states (dynamic features) · form error states (one generic text) · thank-you state after contact submit · Turnstile captcha on both forms · JSON-LD structured data (Person + SoftwareApplication for Syndicate) · explicit image width/height (next/image, no CLS) · security headers (CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy) · **cookieless analytics (Cloudflare Web Analytics — no cookie banner needed)** · **hard hosting spend cap** (free tiers only, no card where possible, billing alerts — enforce the free-only constraint).

**Conditional — YES because the site collects data (🤔):** lightweight **privacy policy** (contact form + guestbook collect email/GitHub identity; short + honest, not legalese). **Cookie banner: NO** — cookieless analytics + essential-only auth cookies means no consent banner required (avoided by design).

**Skip — not applicable to a personal portfolio (❌):** terms of service (no transaction) · real physical contact address (privacy/safety — email + form only) · consistent business NAP (name/address/phone — that's local-business SEO, irrelevant).

---
*Downstream: Muse (done) → design system → `DESIGN.md` (§7/§8 resolve skill clash) → build (locked stack) → Playwright vs §3 → Athena + Loki → Hermes deploy. §5 security musts are non-negotiable acceptance gates.*
