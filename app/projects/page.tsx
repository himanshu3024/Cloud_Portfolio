import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AccentText, Container, Panel, Pill, Section, SmartLink } from "@/components/ui";
import { projects, site } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Projects | ${site.name}`,
  description: "Cloud, infrastructure, security, and automation projects demonstrating architectural thinking and implementation depth.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title={
          <>
            Project work that demonstrates <AccentText>architecture judgment</AccentText>, delivery thinking, and operational depth.
          </>
        }
        intro="These projects are the clearest proof of how I think technically. They show how I approach system structure, security, delivery workflows, infrastructure choices, and the practical trade-offs involved in building systems that are easier to operate well."
      />

      <Section className="pt-4">
        <Container className="grid gap-6">
          {projects.map((project) => (
            <Panel key={project.title}>
              <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">
                <div>
                  <div className="flex flex-wrap gap-3">
                    <Pill>{project.type}</Pill>
                    {project.featured ? <Pill>Featured</Pill> : null}
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold text-ink">{project.title}</h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate">{project.description}</p>

                  <div className="mt-8 grid gap-5 xl:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Why it was built</p>
                      <p className="mt-3 text-sm leading-7 text-slate">{project.purpose}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Architecture</p>
                      <p className="mt-3 text-sm leading-7 text-slate">{project.architecture}</p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-5 xl:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Key technical decisions</p>
                      <ul className="mt-3 grid gap-2 text-sm leading-7 text-slate">
                        {project.decisions.map((decision) => (
                          <li key={decision}>{decision}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">What this project demonstrates</p>
                      <ul className="mt-3 grid gap-2 text-sm leading-7 text-slate">
                        {project.outcomes.map((outcome) => (
                          <li key={outcome}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-line bg-mist/70 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Technology Stack</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Capability Signals</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.demonstrates.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                  <SmartLink
                    href={project.href}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent"
                  >
                    View GitHub repository <ArrowUpRight size={16} />
                  </SmartLink>
                </div>
              </div>
            </Panel>
          ))}
        </Container>
      </Section>
    </>
  );
}
