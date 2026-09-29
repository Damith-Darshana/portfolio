export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Agentic Systems",
    description:
      "Building LLM-powered apps, RAG pipelines, and autonomous agents that solve real problems.",
    skills: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Vector Databases",
      "Prompt Engineering",
      "Agentic Workflows",
      "OpenAI API",
      "Vibe Coding",
    ],
  },
  {
    title: "Backend",
    description:
      "APIs, auth, data modeling, and production server logic that scales.",
    skills: [
      "Django",
      "Django REST Framework",
      "FastAPI",
      "PostgreSQL",
      "REST APIs",
      "JWT Authentication",
      "SQLite",
      "Python",
    ],
  },
  {
    title: "Frontend",
    description:
      "Modern, responsive, and accessible user interfaces with strong UX.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML & CSS",
      "Server Components",
    ],
  },
  {
    title: "Tools & DevOps",
    description:
      "The daily toolkit for building, shipping, and collaborating.",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Docker (basics)",
      "Linux CLI",
      "VS Code",
      "Postman",
    ],
  },
];

export const softSkills: string[] = [
  "Self-directed learning",
  "Problem decomposition",
  "Technical writing",
  "Async collaboration",
  "Rapid prototyping",
  "Attention to detail",
];