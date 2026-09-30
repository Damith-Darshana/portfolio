import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CaseStudyHeader } from "@/components/sections/case-study-header";
import { components } from "@/components/ui/mdx-components";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getProjectContentBySlug,
} from "@/lib/projects";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buildCrumbs } from "@/lib/breadcrumbs";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const {slug} = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const {slug} = await params;
  const project = getProjectBySlug(slug);
  const content = getProjectContentBySlug(slug);

  if (!project || !content) notFound();

  return (
    <>
      <Breadcrumbs
  crumbs={buildCrumbs(
    { label: "Projects", href: "/projects" },
    { label: project.title }
  )}
/>
      <CaseStudyHeader project={project} />
      <article className="mx-auto max-w-6xl px-6 py-12">
        <div className="max-w-prose">
          <MDXRemote source={content} components={components} />
        </div>
      </article>
    </>
  );
}