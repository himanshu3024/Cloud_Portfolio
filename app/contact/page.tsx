import type { Metadata } from "next";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AccentText, ButtonLink, Container, Panel, Section, SmartLink } from "@/components/ui";
import { site } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Contact | ${site.name}`,
  description: "Contact Himanshu Gandhi for cloud, infrastructure, systems, and automation-focused opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Open to conversations about cloud, infrastructure, systems, and <AccentText>modern IT roles</AccentText>.
          </>
        }
        intro="If you are hiring for cloud administration, infrastructure support, serverless platforms, or systems-oriented work, I would be glad to connect. The best outreach is clear, direct, and professional, and I appreciate the same approach."
      />

      <Section className="pt-4">
        <Container className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Panel className="relative min-h-[430px] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(88,107,132,0.12),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,240,232,0.9))] p-0 sm:min-h-[470px]">
            <div className="relative h-full min-h-[430px] overflow-hidden rounded-[28px] sm:min-h-[470px]">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[72%] bg-[linear-gradient(90deg,rgba(247,248,250,0.94),rgba(247,248,250,0.84),rgba(247,248,250,0.42),transparent)] sm:block" />
              <div className="pointer-events-none absolute left-4 top-4 z-[2] h-[240px] w-[360px] rounded-[32px] bg-white/28 blur-2xl sm:left-6 sm:top-6" />
              <div className="pointer-events-none absolute left-6 top-6 z-10 max-w-md sm:left-8 sm:top-8">
                <div className="max-w-md rounded-[24px] border border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,255,255,0.84))] p-5 shadow-[0_24px_54px_rgba(13,17,23,0.12)] backdrop-blur-xl sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Get In Touch</p>
                  <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
                    Available for <AccentText>cloud, systems, and infrastructure</AccentText> conversations that are serious about execution.
                  </h2>
                  <p className="body-copy mt-4 max-w-sm text-sm leading-7">
                    I’m open to internships, co-op roles, early-career cloud opportunities, and thoughtful technical
                    conversations where reliability, security, and operations matter.
                  </p>
                </div>
              </div>
              <div className="h-full w-full scale-[1.03] sm:scale-[1.05]">
                <iframe
                  src="https://my.spline.design/animatedshapeblend-l73Nvyd2jMSOSqeMaOJslVpp/"
                  title="Spline contact visual"
                  frameBorder={0}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="h-full w-full"
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-5 z-10 flex justify-center px-5">
                <div className="pointer-events-auto">
                  <ButtonLink href={`mailto:${site.email}`}>Discuss an Opportunity</ButtonLink>
                </div>
              </div>
            </div>
          </Panel>

          <div className="grid gap-6">
            {[
              { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
              { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/[^\d+]/g, "")}`, icon: Phone },
              { label: "LinkedIn", value: site.linkedin.replace("https://", ""), href: site.linkedin, icon: Linkedin },
              { label: "GitHub", value: site.github.replace("https://", ""), href: site.github, icon: Github },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <SmartLink key={item.label} href={item.href}>
                  <Panel className="tonal-section flex items-center gap-4 transition hover:border-accent">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accentSoft text-accent">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="body-copy text-xs font-semibold uppercase tracking-[0.18em]">{item.label}</p>
                      <p className="mt-1 text-base text-ink">{item.value}</p>
                    </div>
                  </Panel>
                </SmartLink>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
