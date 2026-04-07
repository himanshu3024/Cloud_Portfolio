import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { AccentText, Container, Panel, Section } from "@/components/ui";
import { experiences, site } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Experience | ${site.name}`,
  description: "Professional experience spanning IT support, administration, service operations, and leadership.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title={
          <>
            Experience built through technical support, administration, public service, and <AccentText>dependable operations</AccentText>.
          </>
        }
        intro="My experience is not a straight line through cloud roles, but it is consistent in what it builds: trust, structure, accuracy, coordination, and service reliability. Those are the same qualities I want to bring into cloud, systems, and infrastructure work."
      />

      <Section className="pt-4">
        <Container className="space-y-6">
          {experiences.map((job) => (
            <Panel key={`${job.role}-${job.company}`} className="tonal-section grid gap-8 lg:grid-cols-[240px_1fr]">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{job.period}</p>
                <div>
                  <h2 className="text-2xl font-semibold text-ink">{job.role}</h2>
                  <p className="body-copy mt-2 text-base">
                    {job.company} · {job.location}
                  </p>
                </div>
              </div>
              <div>
                <p className="body-copy max-w-3xl text-base leading-8">{job.summary}</p>
                <ul className="body-copy mt-6 grid gap-3 text-sm leading-7">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-[20px] border border-line/90 bg-white/70 px-5 py-4">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Panel>
          ))}
        </Container>
      </Section>
    </>
  );
}
