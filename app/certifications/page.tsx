import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AccentText, Container, Panel, Pill, Section, SectionHeading, SmartLink } from "@/components/ui";
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
        title={
          <>
            Credentials that reinforce breadth across cloud, <AccentText>security</AccentText>, identity, and administration.
          </>
        }
        intro="My certification path supports the direction of this portfolio: cloud administration, identity, security, and operational understanding across AWS, Microsoft, and Google ecosystems."
      />

      <Section className="pt-4">
        <Container className="space-y-8">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)]">
            <Panel className="featured-panel">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line/70 pb-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accentDeep">Featured Credential</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="body-copy font-medium">{featured.issuer}</span>
                    <span className="text-line">/</span>
                    <span className="body-copy">{featured.date}</span>
                  </div>
                </div>

                <div className="pt-7">
                  <div className="flex flex-wrap gap-2">
                    <Pill>{featured.category}</Pill>
                  </div>
                  <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-[2.7rem]">
                    {featured.name}
                  </h2>
                  <p className="body-copy mt-5 max-w-2xl text-base leading-8">{featured.note}</p>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line/70 pt-6">
                    <p className="body-copy max-w-lg text-sm leading-7">
                      Positioned first to reflect the latest verified proof in cloud architecture and current technical direction.
                    </p>
                    <SmartLink
                      href={featured.link}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
                    >
                      Verify Certificate <ArrowUpRight size={15} />
                    </SmartLink>
                  </div>
                </div>
              </div>
            </Panel>

            <Panel className="featured-panel h-full">
              <SectionHeading
                eyebrow="Credential Overview"
                title={
                  <>
                    Organized to stay clear as the portfolio <AccentText>grows</AccentText>.
                  </>
                }
                description="The latest credential appears first, while the broader set remains easy to scan by date, issuer, and specialization."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                {[
                  `${certifications.length} certifications`,
                  "Reverse chronological order",
                  "Cloud, security, identity, and delivery",
                ].map((item) => (
                  <div key={item} className="rounded-[22px] border border-line/80 bg-white/68 px-5 py-4">
                    <p className="body-copy text-sm leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((cert) => (
              <Panel key={cert.name} className="featured-panel flex h-full flex-col">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line/70 pb-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accentDeep">Credential</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="body-copy font-medium">{cert.issuer}</span>
                    <span className="text-line">/</span>
                    <span className="body-copy">{cert.date}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col pt-6">
                  <div className="flex flex-wrap gap-2">
                    <Pill>{cert.category}</Pill>
                  </div>
                  <h2 className="mt-4 font-serif text-[1.6rem] leading-tight text-ink">{cert.name}</h2>
                  <p className="body-copy mt-4 flex-1 text-sm leading-7">{cert.note}</p>
                  <div className="mt-6 border-t border-line/70 pt-5">
                    <SmartLink
                      href={cert.link}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
                    >
                      Verify Certificate <ArrowUpRight size={15} />
                    </SmartLink>
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
