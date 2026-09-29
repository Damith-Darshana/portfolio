import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cta, site } from "@/lib/constants";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available for opportunities
          </p>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-text-primary md:text-6xl">
            {site.name}
          </h1>

          <p className="mt-4 text-lg text-text-secondary md:text-xl">
            {site.role} — building agentic AI systems and full-stack products that ship.
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">
            {site.education.degree} graduate from {site.education.university}.
            Self-taught in the modern AI and web stack, focused on LangChain,
            LangGraph, FastAPI, and Next.js.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={cta.viewProjects.href} variant="primary">
              {cta.viewProjects.label}
            </Button>
            <Button href={cta.downloadCv.href} variant="secondary" external>
              {cta.downloadCv.label}
            </Button>
            <Button href={cta.contact.href} variant="secondary">
              {cta.contact.label}
            </Button>
            <Button href={cta.email.href} variant="ghost" external>
              {cta.email.label} →
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-text-muted">
            <Link
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-secondary transition-colors"
            >
              GitHub
            </Link>
            <span className="text-border">·</span>
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-secondary transition-colors"
            >
              LinkedIn
            </Link>
            <span className="text-border">·</span>
            <Link
              href={`mailto:${site.email}`}
              className="hover:text-text-secondary transition-colors"
            >
              {site.email}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}