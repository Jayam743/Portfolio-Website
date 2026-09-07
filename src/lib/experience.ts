// Work experience — the credibility payload, per docs/CONTENT.md
// "EXPERIENCE" section. Bullets trimmed to the 2-3 strongest each and
// written plain enough for a non-infra recruiter to follow. Retail/food
// service roles excluded by editorial decision (see CONTENT.md).

export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  location: string;
  dates: string;
  current: boolean;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "analogic",
    role: "Software Engineer, Co-op",
    company: "Analogic Corporation",
    location: "Salem, NH",
    dates: "Jul – Dec 2026",
    current: true,
    bullets: [
      "Designed and deployed a self-hosted VPN gateway (Headscale/Tailscale) with SSO and vault-managed secrets, giving the team private, secure access into the cloud environment.",
      "Built Syndicate — the AI-agent runtime that safely drives an internal multi-agent system end-to-end, with a just-in-time credential flow that mints and revokes short-lived access automatically.",
      "Automated cloud infrastructure with 8 Ansible roles and shipped Grafana/Prometheus dashboards tracking LLM spend and system health across the stack.",
    ],
  },
  {
    id: "exponentia",
    role: "AI Specialist",
    company: "Exponentia Strategies",
    location: "Boston, MA (Remote)",
    dates: "Jun – Dec 2025",
    current: false,
    bullets: [
      "Built marketing-automation pipelines that route content generation across multiple LLM APIs, powering personalized 30-day content strategies.",
      "Engineered n8n workflows connecting a web frontend to backend LLM processing, with authentication, session validation, and MySQL-backed storage.",
    ],
  },
  {
    id: "luxeciaga",
    role: "Creative AI Web Builder",
    company: "Luxeciaga",
    location: "Hartford, WI (Remote)",
    dates: "May – Dec 2025",
    current: false,
    bullets: [
      "Built and deployed luxeciaga.com — a responsive, mobile-first client site for a design-build/real-estate studio, live in production.",
      "Implemented SEO and Google Analytics to drive data-informed improvements for the client.",
    ],
  },
];
