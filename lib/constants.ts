export const site = {
  name: "Damith Darshana Bandara",
  shortName: "Damith Darshana",
  role: "AI-Focused Full-Stack Developer",
  tagline: "Building agentic AI systems and full-stack products that ship.",
  email: "damithdarshana.lap@gmail.com",
  github: "https://github.com/Damith-Darshana/",
  linkedin: "http://www.linkedin.com/in/damith-darshana-bandara",
  education: {
    degree: "Bachelor of Information and Communication Technology",
    university: "University of Colombo",
  },
  url: "https://damith-darshana.vercel.app",
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Blog", href: "/blog" },
];

export const cta={
  viewProjects: { label: "View Projects", href: "/projects" },
  downloadCv: { label: "Download CV", href: "/resume.pdf" },
  contact: { label: "Contact Me", href: "/contact" },
  email: { label: "Email Me", href: `mailto:${site.email}` },
};

export const about = {
  intro:
    "I'm an AI-focused full-stack developer with a background in Information and Communication Technology. I build agentic AI systems, backend APIs, and the frontends that bring them to life.",
  story: [
    "I graduated with a Bachelor of Information and Communication Technology from the University of Colombo. My degree gave me the foundations — data structures, networking, software engineering, databases — but the modern AI and web stack I use daily, I taught myself.",
    "I got into AI at exactly the right moment. When LangChain was still finding its footing and LangGraph was just emerging, I was already experimenting. That early start means I understand agentic workflows, RAG pipelines, and prompt engineering not as buzzwords, but as tools I've actually built with.",
    "I also believe in shipping fast. Vibe coding — using AI to accelerate development — isn't a shortcut for me; it's a modern discipline. The best developers in 2025 aren't the ones who type the most code, they're the ones who can compose the right pieces, test quickly, and iterate.",
    "Right now I'm building a portfolio of projects that combine FastAPI, Django, LangChain, LangGraph, and Next.js into real products. Each one will be documented here as a full case study.",
  ],
  focus: [
    { label: "Agentic AI", detail: "LangGraph, LangChain, autonomous workflows" },
    { label: "Backend", detail: "Django REST Framework, FastAPI, PostgreSQL" },
    { label: "Frontend", detail: "Next.js, React, TypeScript, Tailwind" },
    { label: "Shipping", detail: "Rapid prototyping with modern AI tooling" },
  ],
};