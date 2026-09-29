import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");
const DRAFTS_DIR = path.join(process.cwd(), "content/drafts");

export type ProjectFrontmatter = {
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

export type ProjectFile = {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
};

function readProjectFiles(dir: string): ProjectFile[] {
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"));

  return files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const fullPath = path.join(dir, filename);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);

    return {
      slug,
      frontmatter: data as ProjectFrontmatter,
      content,
    };
  });
}

export function getAllProjectFiles(): ProjectFile[] {
  return readProjectFiles(PROJECTS_DIR);
}

export function getDraftFiles(): ProjectFile[] {
  return readProjectFiles(DRAFTS_DIR);
}

export function getProjectFileBySlug(slug: string): ProjectFile | null {
  const all = getAllProjectFiles();
  return all.find((p) => p.slug === slug) ?? null;
}