# CONTENT.md — Real, authoritative site content (from Jayam's resume, 2026-09-07)

*Source of truth for COPY + STRUCTURE. Supersedes the thin first-draft content. The site was badly underselling him — this fixes it. Design system stays `DESIGN.md`; this is the WHAT, that's the HOW.*

## The strategic correction (why we're rebuilding the content)
The recruiter takeaway must land in **seconds**: "3.98 GPA, real production co-op at Analogic, builds real client sites, strong engineer — I want this guy." Lead with **legible human impact + concrete proof**, NOT an abstract systems diagram. No forcing anyone to read a page to "get" him.

## Identity / bio
- **Jayam B. Patel** — Software Engineer. Currently a **Software Engineer Co-op at Analogic Corporation** (Salem, NH), Jul–Dec 2026.
- **CS @ UMass Lowell**, BS Computer Science, **GPA 3.98/4.00**, expected May 2028. Honors: Chancellor's List, Billerica Dollars for Scholars, Demoulas Market Basket Scholarship.
- Email jayampatel7473@gmail.com · linkedin.com/in/jayam-patel73 · github.com/Jayam743 · phone (978) 437-4022 (email/LinkedIn/GitHub public; phone optional/omit).
- Positioning (keep, now BACKED by real work): "I build the systems that run the agents — orchestration and governance, not automation." He does platform/infra + AI-agent systems for real, at work.

## STRUCTURE (recruiter payload-first order)
1. **Hero** — photo (`/images/profile.JPEG`) + name (tamed Fraunces) + **rotating-role typewriter** (he loved this: cycle e.g. "Software Engineer" · "Platform & Infrastructure" · "AI Systems" · "Full-Stack") + a punchy real value line + **proof chips** (3.98 GPA · Co-op @ Analogic · AWS/Ansible/Python/TS) + CTAs (Get in touch · Resume · GitHub · LinkedIn). Legible in 3 seconds.
2. **Experience** — the credibility payload (was MISSING). Analogic, Exponentia, Luxeciaga. Scannable, impressive, plain-language enough for a non-infra recruiter.
3. **Projects** — the **creative carousel** he loved (coverflow/3D, tasteful): real work, each with clear what + impact + stack + links.
4. **Syndicate deep-dive (DEMOTED, optional depth)** — the animated pipeline lives here now, with a plain-English intro so anyone gets it; engineers who dig get depth, nobody's forced to.
5. **Tech stack** — visual, categorized, scannable (he liked his old icon grid).
6. **Contact** — secure form (server-validated, rate-limited, Turnstile). No guestbook.
7. Footer.

## EXPERIENCE (resume-level detail — feature as-is, he's comfortable sharing)

**Software Engineer, Co-op — Analogic Corporation** · Salem, NH · Jul–Dec 2026 *(current — the headline credential)*
- Built + deployed a self-hosted **Headscale/Tailscale VPN gateway** (DERP relay on 443, scoped subnet router) giving the team private access into a cloud environment, with **OIDC SSO** and vault-managed secrets (**OpenBao**).
- Authored the **runtime that drives an internal AI-agent engagement** end-to-end (git-backed lock ceremony, automated merge-request creation, clean teardown) + a **just-in-time credential flow** minting/scoping/revoking short-lived git tokens per engagement. *(This is "Syndicate.")*
- Shipped **self-service cloud provisioning** (Semaphore/Ansible templates, multi-stage instance lifecycle) + config-as-code migration with a SQLite→PostgreSQL cutover.
- Authored **8 Ansible roles** (provisioning, cleanup, routing, ingress) incl. race-safe idempotent AWS SSM automation reconciling against live infra across 6 AWS resource classes.
- Built **2 Grafana/Prometheus dashboards** (LLM/LiteLLM spend across 6 model routes, Docker Swarm health) + repaired the metrics pipeline.
- Eliminated a **command-injection risk** class via a shared file-ingress gateway; Patroni HA Postgres failover fix; CI/CD test-gate hardening.

**AI Specialist — Exponentia Strategies** · Boston, MA (Remote) · Jun–Dec 2025
- Built marketing-automation pipelines routing content generation across multiple LLM APIs (LinkedIn content, personalized 30-day strategies).
- Engineered **n8n** workflows linking a web frontend to backend LLM processing with auth + session validation; MySQL schemas; full-stack PHP/JS/AJAX serving real-time generated content.

**Creative AI Web Builder — Luxeciaga** · Hartford, WI (Remote) · May–Dec 2025
- Built + deployed responsive, mobile-first sites in custom HTML/CSS/JS (live: **luxeciaga.com** — a polished design-build/real-estate studio site, indexed editorial sections, conditional project-intake form).
- Implemented SEO + Google Analytics to drive data-informed improvements.

## PROJECTS (carousel — real work, clear what+impact)
- **Smart Degree** (Python · PostgreSQL · Supabase · JSONB · Vercel) — transcript-analytics system: extracts structured academic data from unstructured PDFs, normalizes **2,000+ university courses** into PostgreSQL/JSONB, computes GPA trends + degree-completion metrics; full-stack on Vercel + Supabase. *(This is the site's "Smart UML Degree Pathway"; image `/images/SMART_UML.png`.)*
- **Luxeciaga.com** (HTML · CSS · JS · SEO) — live client site for a design-build studio (image `/images/Luxeciaga.png`, link https://luxeciaga.com/). Real shipped client work.
- **PyPhone** (Python · CustomTkinter · OpenCV · Pygame) — six working apps (camera, Snake, Pong, gallery, browser, bubble-sort visualizer) behind one shell UI (`/images/Pyphone.png`).
- **Snake** (Python · Pygame) — game loop, collision, state, from scratch (`/images/Snake.png`). Foundations piece.

## TECH STACK (visual + categorized, from resume)
- **Languages:** Python, Java, JavaScript, TypeScript, SQL, Bash, C/C++, HTML/CSS, YAML/Jinja2
- **AI & ML:** Claude Code, LiteLLM, AWS Bedrock, MCP Servers, Multi-Agent Systems, OpenAI/Claude/Gemini APIs
- **Data & Observability:** PostgreSQL, MySQL, Patroni HA, JSONB, ETL Pipelines, Grafana, Prometheus
- **Cloud & DevOps:** AWS (EC2/EBS/SSM/IAM), Ansible, Semaphore, Docker, Docker Swarm, Ceph, GitLab CI/CD, Git/GitHub
- **Security & Practices:** OpenBao, Keycloak/OIDC, Headscale/Tailscale, JIT Credentials, SDLC, Domain-Driven Design

## LinkedIn extras (from Profile PDF) + editorial decisions
- **LinkedIn headline (use as hero tagline material):** "Software Engineering Co-op @ Analogic — building AI-agent infrastructure, LLM observability, and cloud automation. CS @ UMass Lowell '28."
- **Top skills to surface:** Python · AWS · LLMs.
- **Availability signal (put it somewhere clear — recruiters need it):** "Open to software-engineering and data/ML internship & new-grad roles — especially AI, platform, and infrastructure." He is actively looking.
- **About/bio voice (adapt his own words, keep it tight):** CS student at UMass Lowell (3.98 GPA) building AI-agent and cloud infrastructure as a co-op at Analogic — "most of my day is real systems work." Prior: LLM marketing-automation at Exponentia; responsive client sites at Luxeciaga. Built Smart Degree **with two friends**.
- **Location:** Billerica, MA.
- **EDITORIAL: exclude the non-engineering jobs** (DoorDash, Primark, Market Basket) — they're on LinkedIn but dilute the engineer signal on a portfolio. Experience section = Analogic, Exponentia, Luxeciaga only.
- Smart Degree is a **team project (3 people)** — frame honestly ("built with two friends"), not solo.

## DESIGN CORRECTIONS (fold into the build)
- **Tame Fraunces:** `font-variation-settings: "opsz" 40, "SOFT" 0, "WONK" 0` (moderate optical size, no wonk) — verify the "J" reads clean in a screenshot.
- **Bring back creative flair** (this is what "you didn't use the skills" was about): the **projects carousel** (coverflow-style, physics-based drag + arrows + keyboard, active card scaled/centered, sides angled+dimmed, momentum — NOT dated bounce), the **hero typewriter/rotating-role**, the **photo**, the **visual tech-stack**.
- **Demote the pipeline** to the Syndicate deep-dive with a one-line plain-English framing ("the AI-agent runtime I built at Analogic — here's how a task flows through it safely"). Keep it, don't lead with it.
- **Every section delivers a clear payload fast** — scannable, proof-forward, minimal reading. Fix the pull-quote placement/rendering.
