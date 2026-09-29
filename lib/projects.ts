export type Project = {
  slug: string;
  title: string;
  summary: string;
  techStack: string[];
  category: string;
  date: string;
  status: "in-progress" | "completed" | "archived";
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  thumbnail?: string;
};

export function getAllProjects(): Project[] {
  // Phase 4 will replace this with real MDX parsing
  return [];
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}