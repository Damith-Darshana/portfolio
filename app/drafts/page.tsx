import { PageHeader } from "@/components/ui/page-header";
import { getDraftFiles } from "@/lib/mdx";

export const metadata = {
  title: "Drafts",
  robots: { index: false, follow: false },
};

export default function DraftsPage() {
  const drafts = getDraftFiles();

  return (
    <>
      <PageHeader
        eyebrow="Private"
        title="Drafts"
        description="Unpublished project drafts. Not indexed by search engines."
      />
      <div className="mx-auto max-w-6xl px-6 py-16">
        {drafts.length === 0 ? (
          <p className="text-sm text-text-muted">
            No drafts yet. Add MDX files to <code>content/drafts/</code> to see
            them here.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {drafts.map((draft) => (
              <div
                key={draft.slug}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <p className="text-sm font-semibold text-text-primary">
                  {draft.frontmatter.title}
                </p>
                <p className="mt-2 text-xs text-text-secondary">
                  {draft.frontmatter.summary}
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-wider text-text-muted">
                  {draft.slug}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}