import { PageHeader } from "@/components/ui/page-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buildCrumbs } from "@/lib/breadcrumbs";

export const metadata = {
  title: "Blog",
  description: "Notes on building AI products, full-stack development, and self-teaching.",
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs crumbs={buildCrumbs({ label: "Blog" })} />
      <PageHeader
        eyebrow="Blog"
        title="Notes & write-ups"
        description="Short essays on agentic AI, full-stack engineering, and learning in public. First post coming soon."
      />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-xl border border-dashed border-border bg-surface/50 p-12 text-center">
          <p className="text-sm text-text-secondary">
            No posts yet.
          </p>
          <p className="mt-2 text-xs text-text-muted">
            I'll write here as I ship projects. Check back soon.
          </p>
        </div>
      </div>
    </>
  );
}