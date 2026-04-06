import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container, Panel, Section } from "@/components/ui";
import { education, site } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Education | ${site.name}`,
  description: "Academic background across cloud computing, project management, and analytical foundations.",
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education"
        title="A progression that connects science, project management, and modern cloud computing."
        intro="My academic path shows a clear progression: analytical foundations first, structured delivery next, and then a focused move into cloud administration and enterprise infrastructure. Each stage adds a different layer to how I approach technical work."
      />

      <Section className="pt-4">
        <Container className="space-y-6">
          {education.map((item) => (
            <Panel key={item.institution} className="grid gap-8 lg:grid-cols-[260px_1fr]">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{item.period}</p>
                <div>
                  <h2 className="text-2xl font-semibold text-ink">{item.program}</h2>
                  <p className="mt-2 text-base text-slate">
                    {item.institution} · {item.location}
                  </p>
                  <p className="mt-2 text-sm text-slate">{item.status}</p>
                </div>
              </div>
              <div>
                <p className="max-w-3xl text-base leading-8 text-slate">{item.description}</p>
                <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate">
                  {item.details.map((detail) => (
                    <li key={detail} className="rounded-[20px] border border-line/90 bg-white/70 px-5 py-4">
                      {detail}
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
