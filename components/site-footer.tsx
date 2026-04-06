import { site } from "@/data/portfolio";
import { Container, SmartLink } from "@/components/ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/70 py-8">
      <Container className="flex flex-col gap-4 text-sm text-slate sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-ink">{site.name}</p>
          <p>{site.title} based in Toronto, Ontario.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <SmartLink href={`mailto:${site.email}`} className="hover:text-ink">
            {site.email}
          </SmartLink>
          <SmartLink href={site.linkedin} className="hover:text-ink">
            LinkedIn
          </SmartLink>
          <SmartLink href={site.github} className="hover:text-ink">
            GitHub
          </SmartLink>
        </div>
      </Container>
    </footer>
  );
}
