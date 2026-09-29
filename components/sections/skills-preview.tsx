import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechTag } from "@/components/ui/tech-tag";
import { skillGroups } from "@/lib/skills";

export function SkillsPreview() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description="A snapshot of the stack. Each skill will link to the projects where I've used it."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="text-sm font-semibold text-text-primary">
                {group.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-text-muted">
                {group.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <TechTag key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/skills"
            className="text-sm text-text-secondary transition-colors hover:text-accent"
          >
            View all skills →
          </Link>
        </div>
      </div>
    </section>
  );
}