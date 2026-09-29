type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {eyebrow && (
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}