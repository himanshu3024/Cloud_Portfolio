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
                  <p className="text-lg text-slate sm:text-xl">
                    {site.title} focused on cloud infrastructure, <AccentText>systems reliability</AccentText>, and automation-led delivery.
                  </p>
                </div>

                <p className="max-w-2xl text-base leading-8 text-slate sm:text-lg">
                  I am building toward cloud, infrastructure, and modern IT roles where dependable systems, thoughtful
                  automation, and operational discipline matter. My portfolio brings together multi-cloud study,
                  certification depth, and hands-on projects in architecture, security, and delivery workflows.
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
                  <Pill>Infrastructure, Automation, Security</Pill>
                </div>
              </div>

              <div className="grid gap-4">
                {highlights.map((item) => (
                  <div key={item} className="rounded-[24px] border border-line/80 bg-white/80 p-5">
                    <p className="text-sm leading-7 text-slate">{item}</p>
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
                <p className="mt-3 text-sm leading-7 text-slate">{item.description}</p>
              </Panel>
            );
          })}
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Panel>
            <SectionHeading
              eyebrow="Career Snapshot"
              title="A portfolio shaped by cloud learning, service operations, and dependable execution."
              description="This site is built around a clear direction: move from technical support and structured operational work into cloud, infrastructure, and automation-oriented roles with stronger systems responsibility."
            />
          </Panel>
          <div className="grid gap-4 sm:grid-cols-2">
            {snapshot.map((item) => (
              <Panel key={item.label} className="min-h-[160px]">
                <p className="text-sm uppercase tracking-[0.16em] text-slate">{item.label}</p>
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
            description="These projects are intended as proof, not decoration. They demonstrate how I approach cloud design, automation, infrastructure structure, and the trade-offs involved in building systems that are easier to run well."
          />
          <div className="grid gap-6 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Panel
                key={project.title}
                className={
                  index === 0
                    ? "flex h-full flex-col justify-between border-[rgba(88,107,132,0.22)] bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(231,236,242,0.82))]"
                    : "flex h-full flex-col justify-between"
                }
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{project.type}</p>
                    {index === 0 ? (
                      <span className="inline-flex rounded-full bg-[rgba(88,107,132,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accentDeep">
                        Flagship Proof
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-ink">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.demonstrates.slice(0, 3).map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </div>
                <SmartLink
                  href={project.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent"
                >
                  View repository <ArrowRight size={16} />
                </SmartLink>
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
                  className="flex flex-col gap-4 rounded-[22px] border border-line/90 bg-white/70 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-semibold text-ink">{cert.name}</p>
                    <p className="text-sm text-slate">
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
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Let’s connect about cloud, infrastructure, systems, and automation-focused roles.</h2>
            </div>
            <SmartLink
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-pearl"
            >
              <Mail size={16} />
              Contact Himanshu
            </SmartLink>
          </Panel>
        </Container>
      </Section>
    </>
  );
}
