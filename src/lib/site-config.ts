// Central site identity + links. Mined from legacy-static/index.html and
// legacy-static/README.md. See report notes on the GitHub-handle judgment
// call (two different handles appear in the legacy source).

// Placeholder — production domain not yet decided (Cloudflare Pages target
// TBD). Override via NEXT_PUBLIC_SITE_URL once known.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jayampatel.dev";

export const siteConfig = {
  name: "Jayam Patel",
  role: "Systems / platform engineer",
  positioning:
    "I build the systems that run the agents — orchestration and governance, not automation.",
  // Hero value line — adapted from his LinkedIn headline (docs/CONTENT.md).
  valueLine:
    "Building AI-agent infrastructure, LLM observability, and cloud automation.",
  availability:
    "Open to SWE / data-ML internships & new-grad roles — AI, platform, infrastructure.",
  heroRoles: [
    "Software Engineer",
    "Platform & Infrastructure",
    "AI Systems",
    "Full-Stack",
  ],
  proofChips: ["3.98 GPA", "Co-op @ Analogic", "Python · AWS · TypeScript"],
  location: "UMass Lowell",
  email: "jayampatel7473@gmail.com",
  // Active/public GitHub — Jayam743 (rebrand: SmokyOP743 was the old handle).
  githubProfile: "https://github.com/Jayam743",
  githubProjects: "https://github.com/Jayam743",
  linkedin: "https://www.linkedin.com/in/jayam-patel73/",
  resumeHref: "/UML_Jayam_Patel.pdf",
} as const;
