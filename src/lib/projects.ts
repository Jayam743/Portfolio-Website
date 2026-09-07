// Project content — real work, per docs/CONTENT.md "PROJECTS" section.
// Order matches the carousel order requested: Smart Degree, Luxeciaga.com,
// PyPhone, Snake.

export type Project = {
  id: string;
  name: string;
  blurb: string; // one line: what it is + the impact
  stack: string[];
  href: string | null;
  hrefLabel: string;
  repo: string | null;
  image: { src: string; width: number; height: number };
};

export const projects: Project[] = [
  {
    id: "smart-degree",
    name: "Smart Degree",
    blurb:
      "Built with two friends — extracts real transcript data from unstructured PDFs and normalizes 2,000+ university courses into Postgres/JSONB, computing GPA trends and degree-completion in real time.",
    stack: ["Python", "PostgreSQL", "Supabase", "JSONB", "Vercel"],
    href: "https://smart-degree-pathway.vercel.app",
    hrefLabel: "View live",
    repo: null,
    image: { src: "/images/SMART_UML.png", width: 1273, height: 1270 },
  },
  {
    id: "luxeciaga",
    name: "Luxeciaga.com",
    blurb:
      "Live client site for a design-build/real-estate studio — responsive, mobile-first, SEO- and analytics-tracked, shipped and running in production.",
    stack: ["HTML", "CSS", "JavaScript", "SEO"],
    href: "https://luxeciaga.com/",
    hrefLabel: "View live",
    repo: null,
    image: { src: "/images/Luxeciaga.png", width: 2534, height: 1277 },
  },
  {
    id: "pyphone",
    name: "PyPhone",
    blurb:
      "Six working apps — camera, Snake, Pong, gallery, browser, a bubble-sort visualizer — behind one shell UI, built with a small team.",
    stack: ["Python", "CustomTkinter", "OpenCV", "Pygame"],
    href: "https://youtu.be/w59tqD9euUc?si=cPcVZcf_Te2i2tg7",
    hrefLabel: "Watch demo",
    repo: "https://github.com/Jayam743/SoarCS",
    image: { src: "/images/Pyphone.png", width: 300, height: 512 },
  },
  {
    id: "snake",
    name: "Snake",
    blurb:
      "Game loop, collision, and state — built from scratch in Pygame before any framework did it for me. The foundations piece.",
    stack: ["Python", "Pygame"],
    href: null,
    hrefLabel: "View live",
    repo: "https://github.com/Jayam743/Simple-Python-Projects",
    image: { src: "/images/Snake.png", width: 598, height: 429 },
  },
];
