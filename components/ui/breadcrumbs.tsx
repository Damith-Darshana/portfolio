import Link from "next/link";
import { type Crumb } from "@/lib/breadcrumbs";

type BreadcrumbsProps = {
  crumbs: Crumb[];
};

export function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border bg-bg"
    >
      <div className="mx-auto max-w-6xl px-6 py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs">
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <li key={`${crumb.label}-${i}`} className="flex items-center gap-1.5">
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="text-text-muted transition-colors hover:text-accent"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className={isLast ? "text-text-secondary" : "text-text-muted"}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {crumb.label}
                  </span>
                )}
                {!isLast && (
                  <span aria-hidden="true" className="text-text-muted">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}