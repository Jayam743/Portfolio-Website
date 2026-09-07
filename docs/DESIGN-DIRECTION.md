# DESIGN DIRECTION — "Standing Inside the System"

*Locked creative direction (Muse, 2026-09-06). The design system in `DESIGN.md` is derived from THIS; the design skills (impeccable, taste-skill, ui-ux-pro-max, frontend-design, apple-design, huashu-design) each inform one lane of it — they resolve into ONE system, they do not each get a section.*

## The concept
The portfolio is not a document *about* the work — it **is a live, secured instance of the work.** It routes, has states, is instrumented, is secured with real auth + RLS, and keeps a public audit trail. The recruiter **operates a small, well-behaved Syndicate.** Medium = message. No other junior can copy it, because it requires actually having built the system.

## Positioning
*"I build the systems that run the agents — orchestration and governance, not automation."* A distributed-systems / platform-engineering story, not an "I use AI" story. This reads senior, not student, and is upstream of every visual choice.

## The direction: MISSION CONTROL (instrument-grade console, editorial-serif voice)
Not a fake terminal — a designed, precise operator's console. Reference altitude: Linear · Vercel · Stripe · Rauno · Family · Swiss instrumentation. Restraint is the flex; "wow" comes from motion quality, typographic precision, and ONE novel signature moment — never from effects thrown at the wall.

### Typography
- **Headlines:** a confident **editorial serif** (or high-contrast display face). This is the single strongest anti-slop signal — AI-slop never uses a real serif.
- **Body / UI:** a neutral technical **grotesk**, tight tracking.
- **Accent:** **mono used sparingly** — agent names, status labels, coordinate/gutter annotations. Never mono body.
- *(Exact faces chosen in `DESIGN.md`; must be self-hosted, preloaded, free/OFL licensed.)*

### Color
- **Base:** deep **cool ink / slate** — never pure black. Near-monochrome.
- **Signal (single):** matured **sandstone → amber-gold** (evolution of the "before" palette, distinctly Jayam; warm-on-cool is rarer and more sophisticated than the usual cyan-on-dark dev look).
- Color earns its place — signal color marks live/active/interactive/status, not decoration. Light (paper) + dark (ink) modes both defined.

### Motion — "instrument motion"
Things **settle, tick, and lock** with spring precision (apple-design springs, but colder/damped). Numbers count up. Status dots pulse on a real heartbeat. **Nothing bounces playfully** — everything damped and intentional. Respect `prefers-reduced-motion`.

### Layout
Grid-forward, dense-but-organized, modular instrument cards, strong baseline grid, mono coordinate labels in the gutters, confident negative space. **Numbered case-study structure** (borrowed from the "Cartographer" direction) for the Syndicate deep-dive — reads like a spec document.

## The ONE signature "wow" moment (make-or-break)
A **live task flowing through Syndicate** in the hero: a task enters → **Odin** classifies → routes to a specialist → hits a **safety gate** → **Loki** argues → returns — as a legible, scrubbable animated pipeline. The system explains itself in motion. If exactly one thing on this site is world-class, it must be this. **Do not spread wow thin across five effects — put it all here.** DOM/SVG/Framer-Motion-shaped (no mandatory WebGL); degrades gracefully on mobile.

## Reference principles (from bokoko33.me — adapted, NOT copied)
Jayam shared bokoko33.me as inspiration. It's a **creative-technologist** persona (playful WebGL, embedded toys, per-project branding) — the near-opposite of Jayam's **systems-engineer** positioning, so the *aesthetic is deliberately not adopted* (it would undercut the senior/systems signal + blow the free/perf/mobile budget). What we DO take:
- **The signature moment is OPERABLE, not passive** (the key borrow). The hero pipeline is something the recruiter *operates*: drag/trigger a task → watch Odin classify & route → see it hit a gate → Loki argues → returns. Interactive > cinematic, expressed in the restrained instrument idiom — a tool you operate, not a toy you play.
- **Per-project thematic hooks** — each project framed by a one-line "why it mattered," not a generic blurb.
- **Honest role/depth signaling per project** (their "design & dev" vs "dev only" → our tiering).
- **A boot/initialize loader with craft** — reads as a *system initializing* (Mission Control), never a playful splash.
Explicitly rejected: playful-toy maximalism, heavy WebGL/3D, per-project unbranded chaos.

## Project tiering (kill the flat grid)
- **Syndicate** — hero, deep case study (its own experience), curated slice.
- **Smart UML** — strong second (full-stack + AI + real users).
- **Snake / Pyphone / Luxeciaga** — compact "foundations" strip.
Tiering is itself a signal of judgment.

## SLOP-BAN LIST (hard no)
Decorative multi-hue gradients · glowing orbs · particle fields · fake terminals · "chat with my AI clone" · the current typewriter hero · any generative background that reads as 2024 AI-hype cosplay. A full WebGL agent-swarm was considered and **rejected** (highest risk of tipping into the exact slop we're avoiding) — its only surviving lesson is "emergence-under-control," expressed inside the pipeline moment if at all.

## Assets to carry forward
Project images, resume PDF, profile photo. Everything else is rebuilt.

## How the design skills sit together (one spine, many lanes)
- **impeccable** — the orchestration spine; produces/owns `DESIGN.md`, runs the final `audit`/`polish`/finish-review.
- **frontend-design** — distinctive anti-templated aesthetic direction.
- **apple-design** — motion feel, material depth, interaction physics.
- **emil-design-eng** — UI polish, component-level craft, the *invisible details* that make software feel great; animation decision-making (when/whether to animate, easing, restraint). The good→world-class lane.
- **taste-skill** — anti-slop enforcement, layout/type taste.
- **ui-ux-pro-max** — UX rules, palette validation, font pairings, component specs.
- **huashu-design** — hi-fi direction exploration (aligned to this locked direction; no re-opening).
Baked into `DESIGN.md` **once**; Forge builds from the finished system and does not re-invoke design skills mid-build.
