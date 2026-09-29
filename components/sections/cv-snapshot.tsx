import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cta, site } from "@/lib/constants";

export function CvSnapshot() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Snapshot"
          title="Quick profile"
          description="A short summary of my background, focus, and what I'm working toward."
        />

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
              Education
            </p>
            <p className="text-sm font-medium text-text-primary">
              {site.education.degree}
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              {site.education.university}
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
              Focus
            </p>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>· Agentic AI & LLM applications</li>
              <li>· Full-stack product development</li>
              <li>· Rapid prototyping (vibe coding)</li>
            </ul>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
              Currently
            </p>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>· Building my first AI portfolio projects</li>
              <li>· Deepening LangGraph expertise</li>
              <li>· Open to full-time & freelance work</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={cta.downloadCv.href} variant="secondary" external>
            {cta.downloadCv.label}
          </Button>
          <Button href="/resume" variant="ghost">
            View full resume →
          </Button>
        </div>
      </div>
    </section>
  );
}