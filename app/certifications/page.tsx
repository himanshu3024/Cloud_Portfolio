import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container, Panel, Pill, Section, SectionHeading, SmartLink } from "@/components/ui";
import { certifications, site } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Certifications | ${site.name}`,
  description: "Cloud, security, identity, and administration certifications across AWS, Microsoft, and Google.",
};

export default function CertificationsPage() {
  const [featured, ...rest] = certifications;

  return (
    <>
      <PageHero
        eyebrow="Certifications"
        title="Credentials that reinforce breadth across cloud, security, identity, and administration."
        intro="My certification path supports the direction of this portfolio: cloud administration, identity, security, and operational understanding across AWS, Microsoft, and Google ecosystems."
      />

      <Section className="pt-4">
        <Container className="space-y-8">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)]">
            <Panel className="bg-[linear-gradient(140deg,rgba(255,255,255,0.98),rgba(244,240,232,0.8))]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Most Recent</p>
              <div className="mt-6 max-w-3xl">
                <div className="flex flex-wrap gap-2">
                  <Pill>{featured.category}</Pill>
                  <Pill>{featured.issuer}</Pill>
                  <Pill>{featured.date}</Pill>
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-ink sm:text-[2.2rem]">{featured.name}</h2>
                <p className="mt-5 text-base leading-8 text-slate">{featured.note}</p>
                <SmartLink
                  href={featured.link}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
                >
                  Verify Certificate <ArrowUpRight size={15} />
                </SmartLink>
              </div>
            </Panel>

            <Panel className="h-full">
              <SectionHeading
                eyebrow="Credential Overview"
                title="Organized to stay clear as the portfolio grows."
                description="The latest credential appears first, while the broader set remains easy to scan by date, issuer, and specialization."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                {[
                  `${certifications.length} certifications`,
                  "Reverse chronological order",
                  "Cloud, security, identity, and delivery",
                ].map((item) => (
                  <div key={item} className="rounded-[22px] border border-line/90 bg-white/70 px-5 py-4 text-sm leading-7 text-slate">
                    {item}
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((cert) => (
              <Panel key={cert.name} className="flex h-full flex-col">
                <div className="flex flex-wrap gap-2">
                  <Pill>{cert.category}</Pill>
                  <Pill>{cert.date}</Pill>
                </div>
                <h2 className="mt-5 text-xl font-semibold leading-8 text-ink">{cert.name}</h2>
                <p className="mt-2 text-sm text-slate">{cert.issuer}</p>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate">{cert.note}</p>
                <SmartLink
                  href={cert.link}
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
                >
                  Verify Certificate <ArrowUpRight size={15} />
                </SmartLink>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
