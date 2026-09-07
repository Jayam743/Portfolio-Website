// Project content mined from legacy-static/scripts/project.js (real
// descriptions, tech, links). "role" and "whyItMattered" are first-draft
// framing written for this rebuild — flagged per line below since the
// legacy data has no equivalent fields.
//
// Tiering per docs/DESIGN-DIRECTION.md: Smart UML is the strong second (the
// Syndicate hero owns first). Snake / Pyphone / Luxeciaga are the compact
// "foundations" strip. The legacy "Portfolio Website" entry (the old site
// describing itself) is intentionally dropped here — see Forge's report.

export type Project = {
  id: string;
  name: string;
  tier: "second" | "foundation";
  role: string; // first-draft
  stack: string[];
  whyItMattered: string; // first-draft
  href: string | null;
  repo: string | null;
  image: { src: string; width: number; height: number };
};

export const projects: Project[] = [
  {
    id: "smart-uml",
    name: "Smart UML Degree Pathway",
    tier: "second",
    role: "Full-stack build, solo",
    stack: ["Python", "Next.js", "PostgreSQL", "Flask", "NLP", "REST APIs"],
    whyItMattered:
      "Parses real UMass Lowell transcripts through a Python PDF pipeline and turns them into an accurate degree map — the AI recommendations only work because the parsing underneath is correct.",
    href: "https://smart-degree-pathway.vercel.app",
    repo: null,
    image: { src: "/images/SMART_UML.png", width: 1273, height: 1270 },
  },
  {
    id: "luxeciaga",
    name: "Luxeciaga Website",
    tier: "foundation",
    role: "Internship — contract engineer",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    whyItMattered:
      "First time shipping to a paying client on a deadline — dynamic content management, not a template.",
    href: "https://luxeciaga.com/",
    repo: null,
    image: { src: "/images/Luxeciaga.png", width: 2534, height: 1277 },
  },
  {
    id: "pyphone",
    name: "PyPhone",
    tier: "foundation",
    role: "Team build (SOARCS)",
    stack: ["Python", "CustomTkinter", "GUI", "Web Camera", "Pygame"],
    whyItMattered:
      "Six working apps (camera, Snake, Pong, gallery, browser, a bubble-sort visualizer) behind one shell UI — coordinated scope across a group.",
    href: "https://youtu.be/w59tqD9euUc?si=cPcVZcf_Te2i2tg7",
    repo: "https://github.com/Jayam743/SoarCS",
    image: { src: "/images/Pyphone.png", width: 300, height: 512 },
  },
  {
    id: "snake",
    name: "Snake Game",
    tier: "foundation",
    role: "Solo, foundations",
    stack: ["Python", "Pygame"],
    whyItMattered:
      "The starting point — game loop, collision, state, from scratch before any framework did it for me.",
    href: null,
    repo: "https://github.com/Jayam743/Simple-Python-Projects",
    image: { src: "/images/Snake.png", width: 598, height: 429 },
  },
];

export const projectsSecondTier = projects.filter((p) => p.tier === "second");
export const projectsFoundationTier = projects.filter(
  (p) => p.tier === "foundation",
);
