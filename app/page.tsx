import type { Metadata } from "next";
import Script from "next/script";
import { ArrowRight, BriefcaseBusiness, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { AccentText, ButtonLink, Container, Panel, Pill, Section, SectionHeading, SmartLink } from "@/components/ui";
import { expertise, highlights, projects, certifications, site, snapshot } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${site.name} | Cloud, Infrastructure & DevOps Portfolio`,
  description:
    "Cloud and infrastructure portfolio for Himanshu Gandhi, featuring AWS, Azure, automation, security, and systems-focused project work.",
};

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
  const flagshipProject = featuredProjects[0];
  const featuredCerts = certifications.slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "Ontario",
      addressCountry: "Canada",
    },
    sameAs: [site.github, site.linkedin],
    knowsAbout: ["AWS", "Azure", "GCP", "Terraform", "Infrastructure as Code", "Cloud Security", "DevOps"],
  };

  return (
    <>
      <Script id="person-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      <Section className="pt-14 sm:pt-20">
        <Container className="max-w-[92rem]">
          <Panel className="overflow-hidden border-white/90 bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(244,240,232,0.88))]">
            <div className="grid gap-12 xl:grid-cols-[minmax(0,1.25fr)_420px] xl:items-end">
              <div className="space-y-8 pr-0 xl:pr-6">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{site.eyebrow}</p>
                  <h1 className="max-w-5xl font-serif text-5xl leading-none text-ink sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
                    {site.name}
                  </h1>
                  <p className="body-copy text-lg sm:text-xl">
                    {site.title} focused on <AccentText>cloud infrastructure</AccentText>, serverless systems, and secure operations.
                  </p>
                </div>

                <p className="body-copy max-w-2xl text-base leading-8 sm:text-lg">
                  I am building toward cloud infrastructure, serverless, and systems-oriented roles where security,
                  reliability, and operational clarity matter. This portfolio brings together multi-cloud study,
                  certification depth, and hands-on proof in architecture, automation, observability, and delivery.
                </p>

                <div className="flex flex-wrap gap-3">
                  <ButtonLink href="/projects">View Projects</ButtonLink>
                  <ButtonLink href="/experience" secondary>
                    Experience
                  </ButtonLink>
                  <ButtonLink href="/contact" secondary>
                    Get in Touch
                  </ButtonLink>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Pill>{site.availability}</Pill>
                  <Pill>AWS, Azure, GCP</Pill>
                  <Pill>Serverless, Infrastructure, Security</Pill>
                </div>
              </div>

              <div className="grid gap-4">
                {highlights.map((item) => (
                  <div key={item} className="rounded-[24px] border border-line/80 bg-white/80 p-5">
                    <p className="body-copy text-sm leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Panel>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-6 md:grid-cols-3">
          {expertise.map((item, index) => {
            const Icon = [Sparkles, BriefcaseBusiness, ShieldCheck][index] ?? Sparkles;
            return (
              <Panel key={item.title} className="h-full">
                <Icon className="mb-5 text-accent" size={20} />
                <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
                <p className="body-copy mt-3 text-sm leading-7">{item.description}</p>
              </Panel>
            );
          })}
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Panel className="tonal-section">
            <SectionHeading
              eyebrow="Career Snapshot"
              title={
                <>
                  A portfolio shaped by cloud learning, service operations, and <AccentText>dependable execution</AccentText>.
                </>
              }
              description="This site is built around a clear direction: move from technical support and structured operational work into cloud, infrastructure, and automation-oriented roles with stronger systems responsibility."
            />
          </Panel>
          <div className="grid gap-4 sm:grid-cols-2">
            {snapshot.map((item) => (
              <Panel key={item.label} className="tonal-section min-h-[160px]">
                <p className="body-copy text-sm uppercase tracking-[0.16em]">{item.label}</p>
                <p className="mt-4 text-xl leading-8 text-ink">{item.value}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Featured Work"
            title={
              <>
                Selected projects that show how I think about architecture, security, and <AccentText>operational reliability</AccentText>.
              </>
            }
            description="These projects are intended as proof, not decoration. EdgeFile leads the set as the clearest signal of how I think about cloud design, serverless architecture, security controls, and systems that stay easier to operate well."
          />
          <div className="grid gap-6 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Panel
                key={project.title}
                className={
                  index === 0
                    ? "featured-panel flex h-full flex-col justify-between"
                    : "tonal-section flex h-full flex-col justify-between"
                }
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{project.type}</p>
                    {index === 0 ? (
                      <span className="featured-label">Featured Project</span>
                    ) : null}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-ink">{project.title}</h3>
                  <p className="body-copy mt-4 text-sm leading-7">{project.description}</p>
                  {index === 0 && flagshipProject?.architectureSnapshot ? (
                    <div className="mt-5 rounded-[22px] border border-white/70 bg-white/62 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Architecture Snapshot</p>
                      <p className="body-copy mt-3 text-sm leading-7">{flagshipProject.architectureSnapshot[0]}</p>
                    </div>
                  ) : null}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.demonstrates.slice(0, 3).map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </div>
                {project.href ? (
                  <div className="mt-8 flex flex-wrap gap-4">
                    <SmartLink
                      href={project.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent"
                    >
                      View repository <ArrowRight size={16} />
                    </SmartLink>
                    {project.liveHref ? (
                      <SmartLink
                        href={project.liveHref}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-accentDeep hover:text-accent"
                      >
                        Live demo <ArrowRight size={16} />
                      </SmartLink>
                    ) : null}
                  </div>
                ) : (
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accentDeep">
                    Case-study summary featured on portfolio
                  </span>
                )}
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
          <Panel className="min-h-[420px] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(88,107,132,0.12),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,240,232,0.9))] p-0 sm:min-h-[460px]">
            <div className="h-full min-h-[420px] overflow-hidden rounded-[28px] sm:min-h-[460px]">
              <div className="h-full w-full scale-[1.02] sm:scale-[1.04]">
                <iframe
                  src="https://my.spline.design/nexbotrobotcharacterconcept-6P0Em1hCP2rACqhubUUEYlG1/"
                  title="Spline 3D design"
                  frameBorder={0}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="h-full w-full"
                />
              </div>
            </div>
          </Panel>
          <Panel>
            <SectionHeading
              eyebrow="Selected Certifications"
              title="Formal proof across cloud, security, identity, and administration."
              description={
                <>
                  Certification is only one part of the story, but it does reinforce something important: range,
                  consistency, and a serious commitment to the <AccentText>operational side of cloud work</AccentText>.
                </>
              }
            />
            <div className="mt-8 grid gap-4">
              {featuredCerts.map((cert) => (
                <div
                  key={cert.name}
                  className="tonal-section flex flex-col gap-4 rounded-[22px] p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-semibold text-ink">{cert.name}</p>
                    <p className="body-copy text-sm">
                      {cert.issuer} · {cert.category} · {cert.date}
                    </p>
                  </div>
                  <SmartLink
                    href={cert.link}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
                  >
                    Verify Certificate <ArrowRight size={16} />
                  </SmartLink>
                </div>
              ))}
            </div>
          </Panel>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <Panel className="flex flex-col gap-6 bg-[linear-gradient(140deg,rgba(13,17,23,0.96),rgba(31,78,121,0.88))] text-white sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65">Open to Opportunities</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Open to cloud, systems, and infrastructure conversations where reliability and judgment matter.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
                I’m especially interested in internships, co-op opportunities, and early-career roles across cloud operations, serverless platforms, infrastructure support, and secure modern IT environments.
              </p>
            </div>
            <SmartLink
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-pearl"
            >
              <Mail size={16} />
              Discuss an Opportunity
            </SmartLink>
          </Panel>
        </Container>
      </Section>
    </>
  );
}
