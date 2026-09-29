import Link from "next/link";
import { site } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-text-primary">
              {site.shortName}
            </p>
            <p className="text-xs text-text-muted">{site.role}</p>
          </div>

          <div className="flex items-center gap-5 text-sm text-text-secondary">
            <Link
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-text-primary"
            >
              GitHub
            </Link>
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-text-primary"
            >
              LinkedIn
            </Link>
            <Link
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-text-primary"
            >
              Email
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Built with Next.js · Tailwind CSS · Geist</p>
        </div>
      </div>
    </footer>
  );
}