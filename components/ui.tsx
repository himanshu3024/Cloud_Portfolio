import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

function getLinkProps(href: string) {
  const isExternal = /^https?:\/\//.test(href);
  return isExternal ? { target: "_blank", rel: "noreferrer" } : {};
}

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={clsx("mx-auto w-full max-w-[88rem] px-5 sm:px-7 lg:px-10 xl:px-12", className)}>
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <section className={clsx("py-14 sm:py-20", className)}>{children}</section>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-slate sm:text-lg">{description}</p> : null}
    </div>
  );
}

export function Panel({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={clsx(
        "rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-panel backdrop-blur sm:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-slate">
      {children}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  secondary,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      {...getLinkProps(href)}
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-mist",
        secondary
          ? "border border-line bg-white text-ink hover:border-accent hover:text-accent"
          : "bg-ink text-white hover:bg-accent",
      )}
    >
      {children}
    </Link>
  );
}

export function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      {...getLinkProps(href)}
      className={clsx(
        "transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-mist",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function AccentText({ children }: { children: ReactNode }) {
  return <span className="signature-word">{children}</span>;
}
