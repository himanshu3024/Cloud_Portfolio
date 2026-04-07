import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { AccentText, Container, Panel, Pill, Section } from "@/components/ui";
import { skillGroups, site } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Skills | ${site.name}`,
  description: "Technical skills across cloud platforms, infrastructure, automation, security, and support operations.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHero
        eyebrow="Skills"
        title={
          <>
            A structured skill set spanning cloud platforms, infrastructure, <AccentText>automation</AccentText>, and support operations.
          </>
        }
        intro="I’ve organized this page around how the work actually happens in practice: cloud platforms, systems administration, identity, automation, observability, and support operations. The goal is clarity rather than keyword overload."
      />

      <Section className="pt-4">
        <Container className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Panel key={group.title} className="tonal-section h-full">
              <h2 className="text-xl font-semibold text-ink">{group.title}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </Panel>
          ))}
        </Container>
      </Section>
    </>
  );
}
