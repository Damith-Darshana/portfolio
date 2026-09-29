import { site } from "@/lib/constants";

export function ContactLinks() {
  const links = [
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      description: "Best for detailed inquiries, roles, and collaborations.",
    },
    {
      label: "LinkedIn",
      value: site.linkedin.replace(/^https?:\/\//, ""),
      href: site.linkedin,
      description: "Professional network — connect with me here.",
    },
    {
      label: "GitHub",
      value: site.github.replace(/^https?:\/\//, "").replace(/\/$/, ""),
      href: site.github,
      description: "Source code, experiments, and open projects.",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-border bg-surface p-6 transition-all duration-150 hover:-translate-y-0.5 hover:border-accent"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-text-muted">
                {link.label}
              </p>
              <p className="mt-3 truncate text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                {link.value}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}