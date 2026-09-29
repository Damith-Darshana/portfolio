export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Agentic Systems",
    description: "Building LLM-powered apps, RAG pipelines, and autonomous agents.",
    skills: ["LangChain", "LangGraph", "RAG", "Prompt Engineering", "Agentic Workflows", "Vibe Coding"],
  },
  {
    title: "Backend",
    description: "APIs, auth, data modeling, and production server logic.",
    skills: ["Django", "Django REST Framework", "FastAPI", "PostgreSQL", "REST APIs", "JWT Auth"],
  },
  {
    title: "Frontend",
    description: "Modern, responsive, and accessible user interfaces.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Server Components"],
  },
  {
    title: "Tools & DevOps",
    description: "The daily toolkit for shipping and collaborating.",
    skills: ["Git", "GitHub", "Vercel", "Docker (basics)", "Linux CLI", "VS Code"],
  },
];

export const softSkills: string[] = [
  "Self-directed learning",
  "Problem decomposition",
  "Technical writing",
  "Async collaboration",
  "Rapid prototyping",
];

export const certificates: { name: string; issuer: string; year?: string }[] = [
  // Add your certificates here later — leave empty for now
];