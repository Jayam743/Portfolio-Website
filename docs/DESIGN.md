# DESIGN.md — The Design System ("Standing Inside the System")

*Concrete, buildable design system derived from `DESIGN-DIRECTION.md`. This is the single source of truth for tokens; Forge builds from THIS. Every design skill (frontend-design, apple-design, emil-design-eng, taste-skill, ui-ux-pro-max, huashu-design) resolves into this one file. impeccable audits the built result against it.*

## Subject grounding
A **systems / platform engineer's** portfolio, themed as an **instrument-grade control room** that renders a governed multi-agent system legible. Audience: technical recruiters + engineers. Job: make them conclude "operates above his level — reach out."

## Uniqueness review (vs frontend-design's AI-slop tells)
Checked the plan against the known generated-page clusters; deliberate divergences:
- **NOT "near-black + one bright accent" (tell #2):** the base is a genuine **cool slate with real blue undertone** (`#0F1620`, not tinted black), and the accent is **warm amber-sandstone**, not acid-green/vermilion. Warm-on-cool is the signature, and it's rare.
- **NOT "cream + serif + terracotta" (tell #1):** light mode is **cool paper** (`#F3F6FA`), never warm cream; accent is amber, not clay/terracotta.
- **Mono is content-motivated, not chrome:** used ONLY for real system identifiers (agent names, status codes, coordinates) — these ARE machine tokens, so mono encodes meaning. Never as generic label decoration, never ALL-CAPS eyebrows.
- **Numbering only for real sequences:** the *pipeline stages* (a genuine sequence) may be numbered; arbitrary sections are not.
- **Banned outright:** ALL-CAPS tracked eyebrows · `→` appended to link/button text · single-word colour/italic accents in headlines · soft grey SaaS-card shadows · gradient washes as decoration · middle-dot meta strings as chrome.

## Interaction economy — the value comes to them (busy-recruiter law)
The core story (who he is · the Syndicate wow · proof of skill · how to reach him) must land on **one primary scroll of the landing page with ZERO required clicks.** A distracted recruiter who only scrolls once still leaves impressed.
- **Scroll is the only required interaction.** Depth (full case study, project internals) is **one optional click** for the curious engineer — never a gate on understanding the value.
- **No click-mazes for primary content:** no tabs, accordions, carousels, "click to reveal," or multi-step flows hiding the main story. Primary content is always visible; interaction is for DEPTH, not ACCESS.
- **Things sit together, calm — not cluttered, not clashing.** One idea per section, strong hierarchy, generous space; the eye always knows where to go next. Never a wall of buttons.
- Contact reachable from anywhere in ≤1 action.

---

## 1. Color tokens

### Dark ("Ink" — primary console mode)
```
--ink-900:        #0F1620   /* base background — cool slate, blue undertone */
--ink-800:        #141D29   /* raised surface */
--ink-700:        #1A2432   /* card / elevated */
--ink-600:        #26313F   /* hairline border (default) */
--ink-500:        #33404F   /* stronger border / divider */
--text-100:       #E9EEF5   /* primary text — cool off-white (never pure #FFF) */
--text-300:       #B4C0CE   /* secondary */
--text-500:       #7C8A9B   /* muted / captions */
--signal:         #E3A24A   /* THE accent — matured sandstone→amber */
--signal-strong:  #F2B865   /* hover / active (brighter) */
--signal-deep:    #C6852F   /* pressed */
--signal-tint:    rgba(227,162,74,0.12)   /* sparse fills / active-row wash */
--focus-ring:     #F2B865   /* keyboard focus — signal, 2px, always visible */
--error:          #D9694E   /* functional only (form errors, "one error text") */
--ok:             #6FB79A   /* functional only (success states); use sparingly */
```

### Light ("Paper" — cool, NOT cream)
```
--paper-100:      #F3F6FA   /* base background — cool white */
--paper-000:      #FFFFFF   /* raised surface */
--paper-200:      #E9EEF4   /* subtle fill */
--border:         #D5DDE7   /* hairline */
--text-900:       #131A24   /* primary ink */
--text-700:       #3E4A59   /* secondary */
--text-500:       #647283   /* muted */
--signal:         #B9772A   /* amber, darkened for contrast on paper (AA on #F3F6FA) */
--signal-tint:    rgba(185,119,42,0.10)
--error:          #C0492F
```
Theme via `:root` (light default) + `:root[data-theme="dark"]` / `@media (prefers-color-scheme: dark)`. Both modes: **cool base + warm signal.** Contrast target: WCAG AA (4.5:1 text, 3:1 UI/large).

## 2. Typography
Self-hosted, preloaded, OFL/free. Three roles, deliberate pairing (editorial character × engineered neutrality):
```
--font-display: "Fraunces", Georgia, serif;        /* headlines — variable, optical sizing; character, the anti-slop serif */
--font-sans:    "IBM Plex Sans", system-ui, sans-serif;  /* body / UI — engineered, technical pedigree */
--font-mono:    "IBM Plex Mono", ui-monospace, monospace; /* system identifiers ONLY — agent names, status, coords */
```
*(Alt to test for the single biggest hero line: `Instrument Serif`. Do not use Inter/Geist — the defaults.)*

**Type scale** (16px base; ~1.25 major third for text, custom display steps; Bringhurst-style):
```
--fs-display:  clamp(3.25rem, 7.5vw, 6.5rem)   /* hero — Fraunces, weight 380–460, optical LARGE, line-height 1.03 */
--fs-h1:       clamp(2.25rem, 4vw, 3.25rem)    /* line-height 1.12 */
--fs-h2:       clamp(1.75rem, 2.6vw, 2.25rem)
--fs-h3:       1.5rem
--fs-h4:       1.25rem
--fs-body-lg:  1.125rem     /* line-height 1.6 */
--fs-body:     1rem         /* line-height 1.6; measure max 68ch */
--fs-sm:       0.9375rem
--fs-caption:  0.8125rem
--fs-mono:     0.75rem      /* letter-spacing 0.02em; the system-label size */
```
Weights: Fraunces 380/440/560; Plex Sans 400/500/600; Plex Mono 400/500. Serif body (if any) gets +0.05 line-height. Headlines set tight, NOT the "one word accented" pattern.

## 3. Spacing, radius, elevation
```
--space: 4 8 12 16 24 32 48 64 96 128 (px)   /* 8pt grid; --space-1 … --space-10 */
--radius-sm: 4px   --radius-md: 8px   --radius-lg: 12px   /* tight/instrument; nothing pill */
```
**Elevation = hairline border + one bg step, NOT soft shadow** (avoids the SaaS-card tell). Signal glow (`0 0 0 1px --signal-tint` or a faint inner) allowed only on *active/live* elements. No ambient drop shadows on cards.

## 4. Motion — "instrument motion"
Damped, precise, **no bounce/overshoot**. Respect `prefers-reduced-motion` (drop transforms + pipeline autoplay; keep ≤120ms opacity fades; show final state).
```
--dur-fast: 120ms   --dur-base: 200ms   --dur-slow: 320ms   --dur-slower: 520ms
--ease-settle:   cubic-bezier(0.2, 0.8, 0.2, 1)   /* decelerate, no overshoot */
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1)
```
Springs (via `motion`): `{ type:"spring", stiffness:210, damping:30, mass:0.9 }` — near-critically damped, **damping never below ~26** (no bounce). Live status dots: 2s ease-in-out heartbeat. Numbers count up on first view. **Non-triggered motion is rare and orchestrated** — one page-load reveal, not fade-up on every section (that's the generated-page tell). Motion that answers a click (expand, route, confirm) is always welcome.

## 5. Layout
12-col grid, generous gutters, 8px baseline rhythm. **Left-aligned editorial**, asymmetric hero (not centered-everything). Mono **coordinate labels in the gutters used sparingly** (1–2 anchor spots, not every section). Negative space is a feature. Section rhythm via `--space-9/--space-10`.

### Universal responsiveness — perfect on ANY view (phone → TV)
The design must hold flawlessly across every device class. **Fluid-first**, not a handful of fixed breakpoints: relative units everywhere, `clamp()` for type + key spacing, CSS grid with `minmax`/`auto-fit` so layouts reflow rather than break. Content NEVER touches screen edges (min gutter) and NEVER stretches into an unreadable strip on huge screens.

Container strategy (avoid the "tiny column on a 4K TV" failure):
```
--container:      min(92vw, 1240px)     /* default reading width */
@media (min-width: 1920px) --container: 1440px   /* large desktop */
@media (min-width: 2560px) --container: 1680px   /* + step base font/space up ~1 notch */
```
On ≥1920px, nudge base font-size and section spacing up a notch (via a root font-size bump or fluid clamps) so the site scales *with* the viewport instead of marooning a small layout in empty space. Hero display type uses `vw`-aware clamps so it fills large screens.

**Test matrix (Playwright must pass all):** 360 (small phone) · 390 (iPhone) · 768 (iPad portrait) · 1024 (iPad landscape / small laptop) · 1280 (laptop) · 1440 (desktop) · 1920 (large desktop) · 2560 (QHD) · 3840 (4K TV). At each: no horizontal scroll, no overflow, no overlap, legible sizes, tap targets ≥44px on touch widths. **TV/10-foot:** legible at distance (generous type on ≥1920), strong visible focus rings (usable via remote/keyboard nav), no hover-only affordances.

## 6. The signature: operable pipeline (spend all boldness here)
Hero contains a **live, operable** Syndicate pipeline (SVG + `motion`, no mandatory WebGL): a task enters → **Odin** classifies → routes to a specialist → hits a **safety gate** → **Loki** argues → returns. **It auto-demonstrates** — one calm run on scroll-into-view (a gentle idle loop after) so the wow lands with ZERO clicks for the busy skimmer; triggering/scrubbing it is an *optional bonus* for the curious, never required. Nodes = mono agent labels; the active path glows `--signal`; stages animate with `--ease-settle`. This is the ONE world-class moment — everything else stays quiet and disciplined around it. Degrades to a clean static diagram under reduced-motion / mobile.

## 7. Component tokens (starters)
- **Buttons:** primary = `--signal` fill on ink, `--radius-md`, weight 500, label is a plain action verb ("Get in touch", not "Get in touch →"). Ghost = 1px `--ink-600` border, text `--text-100`. Focus = 2px `--focus-ring`.
- **Cards / project tiles:** `--ink-700` bg + 1px `--ink-600` border, `--radius-md`, NO soft shadow. Hover = border → `--signal` at 40% + 1px signal glow (a click-adjacent affordance, subtle).
- **Form fields:** `--ink-800` bg, 1px `--ink-600`, focus ring `--focus-ring`; error text uses `--error`, one generic message.
- **Status dot:** 6px, `--signal` when live (heartbeat), `--text-500` idle.
- **Nav:** minimal, hairline underline on active; theme toggle (Ink/Paper).

## 8. Quality floor (non-negotiable, per success criteria)
Responsive across the FULL device matrix (§5: 360px phone → 4K TV) · visible keyboard focus everywhere · `prefers-reduced-motion` respected · WCAG AA contrast · fonts preloaded (no FOUC/CLS) · one `h1`/page · Lighthouse ≥95. Spend boldness once (§6); remove one accessory before shipping each surface.
