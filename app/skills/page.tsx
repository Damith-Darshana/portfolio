import { PageHeader } from "@/components/ui/page-header";
import { SkillsDetailed } from "@/components/sections/skills-detailed";
import { site } from "@/lib/constants";

export const metadata = {
  title: "Skills",
  description: `Technologies and tools ${site.shortName} works with.`,
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="What I work with"
        description="Grouped by discipline. As projects ship, each skill will link to the projects where it's been used."
      />
      <SkillsDetailed />
    </>
  );
}