import { Button } from "@/components/ui/button";
import { cta, site } from "@/lib/constants";

export function ResumeView() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3">
            <Button href="/resume.pdf" variant="primary" external>
              Download PDF
            </Button>
            <Button href={site.linkedin} variant="secondary" external>
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-6 text-lg font-semibold text-text-primary">
            Resume Preview
          </h2>
          <div className="overflow-hidden rounded-xl border border-border bg-surface">
            <iframe
              src="/resume.pdf"
              className="h-[800px] w-full"
              title="Resume"
            />
          </div>
          <p className="mt-4 text-xs text-text-muted">
            If the preview doesn't load,{" "}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              open the PDF in a new tab
            </a>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-6 text-lg font-semibold text-text-primary">
            Academic Results
          </h2>
          <div className="overflow-hidden rounded-xl border border-border bg-surface">
            <iframe
              src="/results.pdf"
              className="h-[800px] w-full"
              title="Academic Results"
            />
          </div>
          <p className="mt-4 text-xs text-text-muted">
            If the preview doesn't load,{" "}
            <a
              href="/results.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              open the PDF in a new tab
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}