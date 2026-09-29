import { ProjectCard } from "@/components/ui/project-card";
import { getAllProjects } from "@/lib/projects";

export function ProjectsGrid() {
  const projects = getAllProjects();

  if (projects.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-xl border border-dashed border-border bg-surface/50 p-12 text-center">
          <p className="text-sm text-text-secondary">
            No projects published yet.
          </p>
          <p className="mt-2 text-xs text-text-muted">
            First case studies are on the way.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}