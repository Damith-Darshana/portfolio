import { PageHeader } from "@/components/ui/page-header";
import { ResumeView } from "@/components/sections/resume-view";
import { site } from "@/lib/constants";
import { buildCrumbs } from "@/lib/breadcrumbs";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata = {
  title: "Resume",
  description: `Resume and academic results for ${site.name}.`,
};

export default function ResumePage() {
  return (
    <>
      <Breadcrumbs crumbs={buildCrumbs({ label: "Resume" })} />
      <PageHeader
        eyebrow="Resume"
        title="Resume & academic results"
        description="Download the PDF or view the full academic transcript below."
      />
      <ResumeView />
    </>
  );
}