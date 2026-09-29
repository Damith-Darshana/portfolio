import { type ReactNode } from "react";

type CaseStudySectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function CaseStudySection({ id, title, children }: CaseStudySectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-border py-12">
      <h2 className="mb-6 text-xl font-semibold tracking-tight text-text-primary">
        {title}
      </h2>
      <div className="max-w-prose">{children}</div>
    </section>
  );
}