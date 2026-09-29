"use client";
import { about, site } from "@/lib/constants";

export function AboutStory() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[280px_1fr]">
          <div>
            <div className="aspect-square overflow-hidden rounded-xl border border-border bg-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photo.jpg"
                alt={site.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-text-primary">
                {site.shortName}
              </p>
              <p className="text-xs text-text-muted">{site.role}</p>
            </div>
          </div>

          <div className="max-w-prose">
            <p className="mb-6 text-base leading-relaxed text-text-primary">
              {about.intro}
            </p>
            {about.story.map((para, i) => (
              <p
                key={i}
                className="mb-4 text-sm leading-relaxed text-text-secondary"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}