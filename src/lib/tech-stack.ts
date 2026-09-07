// Tech stack — categorized, per docs/CONTENT.md "TECH STACK" section.

export type StackCategory = {
  id: string;
  label: string;
  items: string[];
};

export const techStack: StackCategory[] = [
  {
    id: "languages",
    label: "Languages",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Bash",
      "C / C++",
      "HTML / CSS",
      "YAML / Jinja2",
    ],
  },
  {
    id: "ai-ml",
    label: "AI & ML",
    items: [
      "Claude Code",
      "LiteLLM",
      "AWS Bedrock",
      "MCP Servers",
      "Multi-Agent Systems",
      "OpenAI / Claude / Gemini APIs",
    ],
  },
  {
    id: "data-observability",
    label: "Data & Observability",
    items: [
      "PostgreSQL",
      "MySQL",
      "Patroni HA",
      "JSONB",
      "ETL Pipelines",
      "Grafana",
      "Prometheus",
    ],
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    items: [
      "AWS (EC2 / EBS / SSM / IAM)",
      "Ansible",
      "Semaphore",
      "Docker",
      "Docker Swarm",
      "Ceph",
      "GitLab CI/CD",
      "Git / GitHub",
    ],
  },
  {
    id: "security-practices",
    label: "Security & Practices",
    items: [
      "OpenBao",
      "Keycloak / OIDC",
      "Headscale / Tailscale",
      "JIT Credentials",
      "SDLC",
      "Domain-Driven Design",
    ],
  },
];
