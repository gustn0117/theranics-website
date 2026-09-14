import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow", align === "center" && "justify-center", light && "text-lime")}>
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-extrabold leading-[1.2] tracking-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", light ? "text-white/75" : "text-ink-soft")}>
          {description}
        </p>
      )}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "dark" | "ghost";
  className?: string;
  external?: boolean;
}) {
  const styles = {
    primary: "bg-lime text-ink hover:bg-lime-light",
    outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white",
    dark: "bg-ink text-white hover:bg-ink/85",
    ghost: "text-ink hover:text-lime-deep underline-offset-4 hover:underline px-0",
  }[variant];
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-bold transition",
    styles,
    className,
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image?: { src: string; alt: string };
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-16 text-white sm:pt-40 sm:pb-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-lime/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[320px] w-[320px] rounded-full bg-sky/20 blur-3xl" />
      <div className="container-x relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="eyebrow text-lime">{eyebrow}</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {description}
            </p>
          )}
        </div>
        {image && (
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={800}
              className="h-auto w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
              preload
            />
          </div>
        )}
      </div>
    </section>
  );
}

export function Stat({ value, label, className }: { value: string; label: string; className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-line bg-white p-6", className)}>
      <p className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{value}</p>
      <p className="mt-1 text-sm font-medium text-ink-soft">{label}</p>
    </div>
  );
}
