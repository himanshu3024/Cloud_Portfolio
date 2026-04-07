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
  const [flagshipProject, ...otherProjects] = projects;

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title={
          <>
            Project work that demonstrates <AccentText>architecture judgment</AccentText>, serverless thinking, and operational depth.
          </>
        }
        intro="These projects are the clearest proof of how I think technically. EdgeFile leads the set as a stronger serverless capstone, while the broader collection shows how I approach system structure, security, delivery workflows, and the practical trade-offs involved in building systems that are easier to operate well."
      />

      <Section className="pt-4">
        <Container className="space-y-6">
          <Panel className="featured-panel overflow-hidden">
            <div className="grid gap-10 xl:grid-cols-[minmax(0,1.2fr)_360px]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="featured-label">Featured Project</span>
                  <Pill>{flagshipProject.type}</Pill>
                </div>
                <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-ink sm:text-[3rem]">
                  {flagshipProject.title}
                </h2>
                <p className="body-copy mt-5 max-w-3xl text-base leading-8 sm:text-lg">{flagshipProject.description}</p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <div className="rounded-[24px] border border-white/75 bg-white/62 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Project Overview</p>
                    <p className="body-copy mt-3 text-sm leading-7">{flagshipProject.purpose}</p>
                  </div>
                  <div className="rounded-[24px] border border-white/75 bg-white/62 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Architecture Snapshot</p>
                    <div className="body-copy mt-3 grid gap-3 text-sm leading-7">
                      {flagshipProject.architectureSnapshot.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Key Technical Decisions</p>
                    <ul className="body-copy mt-3 grid gap-2 text-sm leading-7">
                      {flagshipProject.decisions.map((decision) => (
                        <li key={decision}>{decision}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Security & Infrastructure</p>
                    <ul className="body-copy mt-3 grid gap-2 text-sm leading-7">
                      {flagshipProject.securityHighlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Scalability & Operations</p>
                    <ul className="body-copy mt-3 grid gap-2 text-sm leading-7">
                      {flagshipProject.operationsHighlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-[26px] border border-white/75 bg-white/68 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">What This Project Demonstrates</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {flagshipProject.demonstrates.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Core Stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {flagshipProject.stack.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Backend Functions</p>
                <div className="body-copy mt-3 grid gap-2 text-sm leading-7">
                  {flagshipProject.backendFunctions.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Proof Signal</p>
                <p className="body-copy mt-3 text-sm leading-7">
                  This project shows a production-minded understanding of secure serverless architecture, AWS service
                  integration, and the trade-offs between scalability, observability, and cost.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <SmartLink
                    href={flagshipProject.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent"
                  >
                    View GitHub repository <ArrowUpRight size={16} />
                  </SmartLink>
                  {flagshipProject.liveHref ? (
                    <SmartLink
                      href={flagshipProject.liveHref}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accentDeep hover:text-accent"
                    >
                      View live demo <ArrowUpRight size={16} />
                    </SmartLink>
                  ) : null}
                </div>
              </div>
            </div>
          </Panel>

          <div className="grid gap-6">
            {otherProjects.map((project) => (
              <Panel key={project.title} className="tonal-section">
              <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">
                <div>
                  <div className="flex flex-wrap gap-3">
                    <Pill>{project.type}</Pill>
                    {project.featured ? <span className="featured-label">Featured</span> : null}
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold text-ink">{project.title}</h2>
                  <p className="body-copy mt-4 max-w-3xl text-base leading-8">{project.description}</p>

                  <div className="mt-8 grid gap-5 xl:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Why it was built</p>
                      <p className="body-copy mt-3 text-sm leading-7">{project.purpose}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Architecture</p>
                      <p className="body-copy mt-3 text-sm leading-7">{project.architecture}</p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-5 xl:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Key technical decisions</p>
                      <ul className="body-copy mt-3 grid gap-2 text-sm leading-7">
                        {project.decisions.map((decision) => (
                          <li key={decision}>{decision}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">What this project demonstrates</p>
                      <ul className="body-copy mt-3 grid gap-2 text-sm leading-7">
                        {project.outcomes.map((outcome) => (
                          <li key={outcome}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-line/80 bg-white/55 p-6">
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
                  {project.href ? (
                    <SmartLink
                      href={project.href}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent"
                    >
                      View GitHub repository <ArrowUpRight size={16} />
                    </SmartLink>
                  ) : null}
                </div>
              </div>
            </Panel>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
