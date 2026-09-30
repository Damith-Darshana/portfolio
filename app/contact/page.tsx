import { PageHeader } from "@/components/ui/page-header";
import { ContactLinks } from "@/components/sections/contact-links";
import { site } from "@/lib/constants";
import { buildCrumbs } from "@/lib/breadcrumbs";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs crumbs={buildCrumbs({ label: "Contact" })} />
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        description="Whether it's a role, a freelance project, or just a conversation about agentic AI — I'm happy to hear from you."
      />
      <ContactLinks />
    </>
  );
}