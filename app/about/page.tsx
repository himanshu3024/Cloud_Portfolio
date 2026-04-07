import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { AccentText, Container, Panel, Section, SectionHeading } from "@/components/ui";
import { site, snapshot } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `About | ${site.name}`,
  description: "Background, direction, and professional approach behind Himanshu Gandhi's cloud and infrastructure portfolio.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            A cloud-focused builder with an operations mindset, service discipline, and a clear <AccentText>technical direction</AccentText>.
          </>
        }
        intro="My work sits at the intersection of cloud learning, infrastructure thinking, and dependable execution. I’m building toward roles in cloud, systems, support, and automation by combining hands-on project work with experience in environments where structure, trust, and consistency matter."
        aside={
          <Panel className="tonal-section">
            <p className="body-copy text-sm uppercase tracking-[0.16em]">Quick Facts</p>
            <div className="mt-5 grid gap-4">
              {snapshot.map((item) => (
                <div key={item.label}>
                  <p className="body-copy text-xs uppercase tracking-[0.16em]">{item.label}</p>
                  <p className="mt-1 text-base text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </Panel>
        }
      />

      <Section>
        <Container className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Panel className="tonal-section">
            <SectionHeading
              eyebrow="Narrative"
              title={
                <>
                  My path into cloud has been shaped by technical curiosity, service work, and <AccentText>disciplined execution</AccentText>.
                </>
              }
              description="I started in IT support, where I learned the value of troubleshooting clearly, documenting well, and earning user trust. That foundation still shapes how I approach infrastructure today: systems should be understandable, dependable, and built with operations in mind."
            />
            <div className="body-copy mt-8 space-y-5 text-base leading-8">
              <p>
                Since then, I’ve continued building toward cloud and infrastructure roles through formal education, certification work, and project-based implementation across AWS, Azure, and GCP. The strongest themes in my work are architecture, automation, security, observability, and practical operational reliability.
              </p>
              <p>
                I’m especially interested in environments where infrastructure, administration, and delivery are treated as strategic foundations rather than background work. That includes cloud operations, systems support, infrastructure engineering, and modern IT roles where clarity and reliability matter.
              </p>
            </div>
          </Panel>

          <Panel className="tonal-section bg-pearl/55">
            <SectionHeading
              eyebrow="What I Bring"
              title={
                <>
                  A balanced mix of technical depth, <AccentText>operational structure</AccentText>, and professionalism.
                </>
              }
            />
            <div className="mt-8 grid gap-4">
              {[
                "A multi-cloud perspective supported by AWS, Microsoft, and Google credentials",
                "Hands-on project work across microservices, high availability, cloud security, and IaC",
                "Project management training that strengthens planning, communication, and execution",
                "Public-facing service and administrative experience that translates into calm, reliable teamwork and stronger operational discipline",
              ].map((item) => (
                <div key={item} className="body-copy rounded-[22px] border border-white/80 bg-white/90 p-5 text-sm leading-7">
                  {item}
                </div>
              ))}
            </div>
          </Panel>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <Panel className="tonal-section">
            <SectionHeading
              eyebrow="Beyond The Resume"
              title="How I like to work"
              description="I value environments that reward thoughtful problem solving, strong documentation, and respect for the systems and people behind the work."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Methodical",
                  description: "I prefer systems and workflows that are well structured, traceable, and maintainable over time.",
                },
                {
                  title: "Curious",
                  description: "I’m motivated by learning, especially where cloud architecture, automation, and security intersect.",
                },
                {
                  title: "Reliable",
                  description: "My service background has made consistency, follow-through, and professionalism central to how I contribute.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[24px] border border-line/90 bg-white/62 p-6">
                  <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="body-copy mt-3 text-sm leading-7">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="body-copy mt-8 text-sm">Languages: {site.languages.join(", ")}.</p>
          </Panel>
        </Container>
      </Section>
    </>
  );
}
