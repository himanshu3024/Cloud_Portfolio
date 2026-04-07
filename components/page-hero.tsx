import { ReactNode } from "react";
import { Container, Eyebrow, Section } from "@/components/ui";

export function PageHero({
  eyebrow,
  title,
  intro,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <Section className="pb-8 pt-14 sm:pb-10 sm:pt-20">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
        <div className="space-y-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="body-copy max-w-2xl text-base leading-8 sm:text-lg">{intro}</p>
        </div>
        {aside ? <div>{aside}</div> : null}
      </Container>
    </Section>
  );
}
