import Link from "next/link";
import { TechTag } from "@/components/ui/tech-tag";
import { type Project } from "@/lib/projects";

export function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <div className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/projects"
          className="mb-6 inline-flex text-xs text-text-muted transition-colors hover:text-accent"
        >
          ← All projects
        </Link>

        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-text-muted">
            {project.category}
          </span>
          <span className="text-xs text-text-muted">{project.date}</span>
          <span className="text-xs text-text-muted">·</span>
          <span className="text-xs text-text-muted capitalize">
            {project.status.replace("-", " ")}
          </span>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
          {project.title}
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>

        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                View live demo →
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent"
              >
                View source
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}