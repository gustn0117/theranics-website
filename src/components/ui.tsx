import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { Parallax } from "@/components/Parallax";

export function SectionHeading({
  title,
  description,
  className,
  light,
  size = "md",
}: {
  label?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  light?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <Reveal className={cn("rule max-w-3xl", className)}>
      <h2
        className={cn(
          "display",
          size === "lg" ? "text-4xl sm:text-5xl lg:text-6xl" : size === "sm" ? "text-2xl sm:text-3xl lg:text-4xl" : "text-3xl sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 max-w-2xl text-base leading-[1.8] sm:text-lg", light ? "text-white/80" : "text-ink-soft")}>
          {description}
        </p>
      )}
    </Reveal>
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
  variant?: "primary" | "outline" | "dark" | "white";
  className?: string;
  external?: boolean;
}) {
  const styles = {
    primary: "bg-lime text-ink hover:bg-ink hover:text-white",
    outline: "border border-ink text-ink hover:bg-ink hover:text-white",
    dark: "bg-ink text-white hover:bg-lime hover:text-ink",
    white: "bg-white text-ink hover:bg-lime",
  }[variant];
  const cls = cn(
    "btn-arrow inline-flex h-13 items-center justify-center px-7 text-[15px] font-bold transition-colors",
    styles,
    className,
  );
  const arrow = (
    <svg className="btn-arrow-icon shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="square" />
    </svg>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        {arrow}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      {arrow}
    </Link>
  );
}

/**
 * 사진을 배경 전체에 깔고 사진의 빈 여백(왼쪽)에 텍스트를 얹는 히어로.
 * 사진은 왼쪽이 밝은 여백, 오른쪽에 피사체가 있는 구도를 전제로 한다.
 */
export function PhotoHero({
  image,
  title,
  description,
  children,
  footer,
  logo,
  tone = "light",
  minH = "lg:min-h-[88svh]",
}: {
  image: { src: string; alt: string; position?: string };
  label?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  /** 버튼 아래에 놓이는 보조 정보 (수치 행 등) */
  footer?: React.ReactNode;
  logo?: React.ReactNode;
  /** light: 밝은 사진 위 검정 글자 / dark: 어두운 오버레이 위 흰 글자 */
  tone?: "light" | "dark";
  minH?: string;
}) {
  const dark = tone === "dark";
  return (
    <section className={cn("snap-hero relative isolate flex min-h-[92svh] items-end overflow-hidden lg:items-center", minH, dark ? "bg-ink text-white" : "bg-paper text-ink")}>
      {/* 사진을 배경 전체에 깔고, 모바일은 하단·데스크톱은 왼쪽 여백에 텍스트 */}
      <div className="absolute inset-0 overflow-hidden">
        <Parallax>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            preload
            sizes="100vw"
            quality={90}
            className="kenburns object-cover"
            style={{ objectPosition: image.position ?? "70% 50%" }}
          />
        </Parallax>
        <div
          aria-hidden
          className={cn(
            "absolute inset-0",
            dark
              ? "bg-gradient-to-t from-black/85 via-black/45 to-black/10 lg:bg-gradient-to-r lg:from-black/80 lg:via-black/40 lg:to-transparent"
              : "bg-gradient-to-t from-white via-white/85 to-white/5 lg:bg-gradient-to-r lg:from-white/90 lg:via-white/30 lg:to-transparent",
          )}
        />
      </div>
      <div className="container-x relative pb-16 pt-40 sm:pb-20 lg:py-40">
        <div className="max-w-3xl">
          {logo && <div className="animate-fade-up">{logo}</div>}
          <h1 className="display text-[2rem] sm:text-5xl lg:text-6xl xl:text-[4.25rem] animate-fade-up [animation-delay:120ms]">{title}</h1>
          {description && (
            <p className={cn("mt-7 max-w-xl text-lg leading-[1.8] sm:text-xl animate-fade-up [animation-delay:260ms]", dark ? "text-white/85" : "text-ink-soft")}>
              {description}
            </p>
          )}
          {children && <div className="mt-10 flex flex-wrap gap-3 animate-fade-up [animation-delay:400ms]">{children}</div>}
          {footer && <div className="mt-8 animate-fade-up [animation-delay:520ms]">{footer}</div>}
        </div>
      </div>
    </section>
  );
}

/** 1px 선으로 구분되는 수치 행 (카드 없이) */
export function StatRow({
  items,
  light,
  cols = 4,
}: {
  items: { value: string; label: string }[];
  light?: boolean;
  cols?: 2 | 4;
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 border-t",
        cols === 4 && "lg:grid-cols-4",
        light ? "border-white/20" : "border-ink",
      )}
    >
      {items.map((s) => (
        <div
          key={s.label}
          className={cn(
            "border-b py-7 pr-4 sm:py-9",
            light ? "border-white/20" : "border-line",
          )}
        >
          <dd className={cn("display text-3xl sm:text-5xl", light ? "text-lime" : "text-ink")}>
            <CountUp value={s.value} />
          </dd>
          <dt className={cn("mt-2 text-sm font-semibold", light ? "text-white/70" : "text-ink-soft")}>{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}
