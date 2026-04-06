import type { Metadata } from "next";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ButtonLink, Container, Panel, Section, SmartLink } from "@/components/ui";
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
        title="Open to conversations about cloud, infrastructure, systems, and modern IT roles."
        intro="If you’re hiring for cloud administration, infrastructure support, DevOps, or systems-oriented work, I’d be glad to connect. The best outreach is clear, direct, and professional, and I appreciate the same approach."
      />

      <Section className="pt-4">
        <Container className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Panel className="relative min-h-[430px] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(88,107,132,0.12),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,240,232,0.9))] p-0 sm:min-h-[470px]">
            <div className="relative h-full min-h-[430px] overflow-hidden rounded-[28px] sm:min-h-[470px]">
              <div className="pointer-events-none absolute left-6 top-6 z-10 max-w-md sm:left-8 sm:top-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Get In Touch</p>
                <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">Let’s talk about thoughtful cloud work.</h2>
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
                  <ButtonLink href={`mailto:${site.email}`}>Start the conversation</ButtonLink>
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
                  <Panel className="flex items-center gap-4 transition hover:border-accent">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accentSoft text-accent">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">{item.label}</p>
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
