import { about, site } from "@/lib/constants";

export function AboutEducation() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
              Education
            </p>
            <h2 className="mb-4 text-xl font-semibold text-text-primary">
              {site.education.degree}
            </h2>
            <p className="text-sm text-text-secondary">
              {site.education.university}
            </p>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-text-secondary">
              Studied information and communication technology with coursework
              spanning software engineering, databases, networking, and
              systems design. Complemented by self-directed learning in modern
              AI and web development.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
              Focus areas
            </p>
            <div className="space-y-4">
              {about.focus.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-border bg-surface p-4"
                >
                  <p className="text-sm font-medium text-text-primary">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-text-secondary">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}