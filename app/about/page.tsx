import { PageHeader } from "@/components/ui/page-header";
import { AboutStory } from "@/components/sections/about-story";
import { AboutEducation } from "@/components/sections/about-education";
import { site } from "@/lib/constants";

export const metadata = {
  title: "About",
  description: `About ${site.name} — ${site.role}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A self-taught developer who ships AI products"
        description="The short version: I learned to build by building. Here's the long version."
      />
      <AboutStory />
      <AboutEducation />
    </>
  );
}