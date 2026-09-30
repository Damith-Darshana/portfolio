import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start px-6 py-32">
      <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
        404
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
        The page you're looking for doesn't exist, or it may have moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/" variant="primary">
          Go home
        </Button>
        <Button href="/projects" variant="secondary">
          View projects
        </Button>
      </div>
    </div>
  );
}