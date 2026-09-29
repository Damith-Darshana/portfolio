import Link from "next/link";
import { type Project } from "@/lib/projects";
import { TechTag } from "./tech-tag";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-150 hover:-translate-y-0.5 hover:border-accent"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <span className="shrink-0 rounded-md border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-text-muted">
          {project.category}
        </span>
      </div>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
        {project.summary}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 4).map((tech) => (
          <TechTag key={tech} label={tech} />
        ))}
        {project.techStack.length > 4 && (
          <span className="inline-flex items-center px-1 text-xs text-text-muted">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>
    </Link>
  );
}