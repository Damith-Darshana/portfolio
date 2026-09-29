import Link from "next/link";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFeaturedProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  if (projects.length === 0) {
    return (
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            eyebrow="Projects"
            title="First projects shipping soon"
            description="I'm currently building a set of AI-focused full-stack projects. Each one will have a full case study here — problem, approach, stack, results, and lessons learned."
          />
          <div className="rounded-xl border border-dashed border-border bg-surface/50 p-10 text-center">
            <p className="text-sm text-text-secondary">
              No projects published yet.
            </p>
            <p className="mt-2 text-xs text-text-muted">
              Check back soon — or see what I'm learning on the{" "}
              <Link href="/about" className="text-accent hover:underline">
                About page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Projects"
            title="Featured work"
            description="A selection of projects that combine AI, backend, and frontend into shipped products."
          />
          <Link
            href="/projects"
            className="hidden shrink-0 text-sm text-text-secondary transition-colors hover:text-accent md:inline"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}