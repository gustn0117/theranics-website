import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

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
  size?: "md" | "lg";
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <h2
        className={cn(
          "display mt-4",
          size === "lg" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl lg:text-5xl",
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
    "inline-flex h-13 items-center justify-center gap-3 px-7 text-[15px] font-bold transition-colors",
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

/**
 * 사진을 배경 전체에 깔고 사진의 빈 여백(왼쪽)에 텍스트를 얹는 히어로.
 * 사진은 왼쪽이 밝은 여백, 오른쪽에 피사체가 있는 구도를 전제로 한다.
 */
export function PhotoHero({
  image,
  title,
  description,
  children,
  logo,
  tone = "light",
  minH = "lg:min-h-[88svh]",
}: {
  image: { src: string; alt: string; position?: string };
  label?: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  logo?: React.ReactNode;
  /** light: 밝은 사진 위 검정 글자 / dark: 어두운 오버레이 위 흰 글자 */
  tone?: "light" | "dark";
  minH?: string;
}) {
  const dark = tone === "dark";
  return (
    <section className={cn("relative isolate flex flex-col overflow-hidden lg:items-center", minH, dark ? "bg-ink text-white" : "bg-paper text-ink")}>
      {/* 모바일·태블릿: 사진을 위에 블록으로, 텍스트는 아래 */}
      <div className="relative mt-16 aspect-[4/3] w-full sm:mt-20 sm:aspect-[16/9] lg:hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          preload
          sizes="100vw"
          quality={90}
          className="object-cover"
          style={{ objectPosition: image.position ?? "70% 50%" }}
        />
      </div>
      {/* 데스크톱: 사진을 배경 전체에 깔고 왼쪽 여백에 텍스트 */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src={image.src}
          alt=""
          fill
          preload
          sizes="100vw"
          quality={90}
          className="object-cover"
          style={{ objectPosition: image.position ?? "70% 50%" }}
        />
        <div
          aria-hidden
          className={cn(
            "absolute inset-0",
            dark ? "bg-gradient-to-r from-black/80 via-black/40 to-transparent" : "bg-gradient-to-r from-white/90 via-white/30 to-transparent",
          )}
        />
      </div>
      <div className="container-x relative py-14 sm:py-16 lg:py-40">
        <div className="max-w-2xl">
          {logo}
          <h1 className="display text-[2.5rem] sm:text-6xl lg:text-7xl">{title}</h1>
          {description && (
            <p className={cn("mt-7 max-w-xl text-lg leading-[1.8] sm:text-xl", dark ? "text-white/85" : "text-ink-soft")}>
              {description}
            </p>
          )}
          {children && <div className="mt-10 flex flex-wrap gap-3">{children}</div>}
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
          <dd className={cn("display text-3xl sm:text-5xl", light ? "text-lime" : "text-ink")}>{s.value}</dd>
          <dt className={cn("mt-2 text-sm font-semibold", light ? "text-white/70" : "text-ink-soft")}>{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}
