import { PageHeader } from "@/components/ui/page-header";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { site } from "@/lib/constants";
import { buildCrumbs } from "@/lib/breadcrumbs";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata = {
  title: "Projects",
  description: `Projects built by ${site.shortName}.`,
};

export default function ProjectsPage() {
  return (
    <>
      <Breadcrumbs crumbs={buildCrumbs({ label: "Projects" })} />
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        description="Each project is documented as a full case study — problem, approach, stack, results, and lessons learned."
      />
      <ProjectsGrid />
    </>
  );
}