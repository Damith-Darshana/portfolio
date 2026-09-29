import { type MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

const components: MDXRemoteProps["components"] = {
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="mt-12 mb-4 scroll-mt-20 text-xl font-semibold tracking-tight text-text-primary">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="mt-8 mb-3 text-lg font-semibold text-text-primary">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: ReactNode }) => (
    <p className="mb-4 text-sm leading-relaxed text-text-secondary">
      {children}
    </p>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="mb-4 list-disc space-y-1 pl-6 text-sm leading-relaxed text-text-secondary">
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="mb-4 list-decimal space-y-1 pl-6 text-sm leading-relaxed text-text-secondary">
      {children}
    </ol>
  ),
  li: ({ children }: { children?: ReactNode }) => <li>{children}</li>,
  a: ({ href, children }: { href?: string; children?: ReactNode }) => (
    <Link
      href={href ?? "#"}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-accent underline-offset-4 hover:underline"
    >
      {children}
    </Link>
  ),
  code: ({ children }: { children?: ReactNode }) => (
    <code className="rounded bg-surface border border-border px-1.5 py-0.5 font-mono text-xs text-text-primary">
      {children}
    </code>
  ),
  pre: ({ children }: { children?: ReactNode }) => (
    <pre className="mb-4 overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-xs text-text-primary">
      {children}
    </pre>
  ),
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <span className="my-6 block overflow-hidden rounded-xl border border-border">
      <Image
        src={src ?? ""}
        alt={alt ?? ""}
        width={1200}
        height={675}
        className="h-auto w-full"
      />
    </span>
  ),
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="my-4 border-l-2 border-accent pl-4 italic text-text-secondary">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-border" />,
  strong: ({ children }: { children?: ReactNode }) => (
    <strong className="font-semibold text-text-primary">{children}</strong>
  ),
};

export { components };