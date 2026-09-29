import {
  getAllProjectFiles,
  getProjectFileBySlug,
  type ProjectFile,
} from "./mdx";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  status: "in-progress" | "completed" | "archived";
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  thumbnail?: string;
  demoVideo?: string;
};

function toProject(file: ProjectFile): Project {
  return {
    slug: file.slug,
    ...file.frontmatter,
  };
}

export function getAllProjects(): Project[] {
  return getAllProjectFiles()
    .map(toProject)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  const file = getProjectFileBySlug(slug);
  return file ? toProject(file) : undefined;
}

export function getProjectContentBySlug(slug: string): string | null {
  const file = getProjectFileBySlug(slug);
  return file ? file.content : null;
}

export function getAllProjectSlugs(): string[] {
  return getAllProjectFiles().map((f) => f.slug);
}