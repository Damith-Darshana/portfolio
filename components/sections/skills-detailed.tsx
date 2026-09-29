import { TechTag } from "@/components/ui/tech-tag";
import { skillGroups, softSkills } from "@/lib/skills";
import { certificates } from "@/lib/certificates";

export function SkillsDetailed() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-lg font-semibold text-text-primary">
                {group.title}
              </h2>
              <p className="mt-1 max-w-prose text-sm text-text-secondary">
                {group.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <TechTag key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}

          <div className="border-t border-border pt-10">
            <h2 className="text-lg font-semibold text-text-primary">
              Soft Skills
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <TechTag key={skill} label={skill} />
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-10">
            <h2 className="text-lg font-semibold text-text-primary">
              Certificates
            </h2>
            {certificates.length === 0 ? (
              <p className="mt-4 text-sm text-text-muted">
                Certificates will appear here as they are completed.
              </p>
            ) : (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {certificates.map((cert) => (
                  <div
                    key={cert.name}
                    className="rounded-lg border border-border bg-surface p-4"
                  >
                    <p className="text-sm font-medium text-text-primary">
                      {cert.name}
                    </p>
                    <p className="mt-1 text-xs text-text-secondary">
                      {cert.issuer}
                      {cert.year && ` · ${cert.year}`}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}