import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { Parallax } from "@/components/Parallax";

/**
 * 데이터 문자열의 \n 위치에서 줄을 바꾼다.
 * 좁은 화면에서는 억지 줄바꿈이 짧은 줄을 만들기 쉬워 sm 이상에서만 끊는다.
 */
export function Lines({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <span key={i}>
          {i > 0 && <br className="hidden sm:inline" />}
          {i > 0 && " "}
          {line}
        </span>
      ))}
    </>
  );
}

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
    "btn-arrow inline-flex h-13 shrink-0 items-center justify-center whitespace-nowrap px-7 text-[15px] font-bold transition-colors",
    styles,
    className,
  );
  const arrow = (
    <svg className="btn-arrow-icon shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
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
  video,
  title,
  description,
  children,
  footer,
  logo,
  tone = "light",
  minH = "lg:min-h-[88svh]",
}: {
  image: { src: string; alt: string; position?: string };
  /** 배경 영상. 재생 전 · 실패 시에는 아래 깔린 image 가 그대로 보인다. */
  video?: { src: string; position?: string };
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
    <section className={cn("relative isolate flex min-h-[92svh] items-end overflow-hidden lg:items-center", minH, dark ? "bg-ink text-white" : "bg-paper text-ink")}>
      {/* 사진을 배경 전체에 깔고, 모바일은 하단 · 데스크톱은 왼쪽 여백에 텍스트 */}
      <div className="absolute inset-0 overflow-hidden">
        <Parallax>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            preload
            sizes="100vw"
            quality={90}
            className={cn("object-cover", !video && "kenburns")}
            style={{ objectPosition: image.position ?? "70% 50%" }}
          />
          {video && (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: video.position ?? "50% 50%" }}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={image.src}
              aria-label={image.alt}
            >
              <source src={video.src} type="video/mp4" />
            </video>
          )}
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
  spread,
}: {
  items: { value: string; label: string }[];
  light?: boolean;
  cols?: 2 | 4;
  /** PC에서 칸을 균등 분할하지 않고 항목 사이 여백을 균등하게 (숫자 길이가 제각각일 때) */
  spread?: boolean;
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 border-t",
        cols === 4 && "lg:grid-cols-4",
        spread && "lg:flex lg:justify-between lg:border-b",
        light ? "border-white/20" : "border-ink",
        spread && !light && "lg:border-b-line",
      )}
    >
      {items.map((s) => (
        <div
          key={s.label}
          className={cn(
            "border-b py-7 pr-4 sm:py-9",
            spread && "lg:flex-none lg:border-b-0 lg:pr-0",
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


/**
 * 메인 영상 구간(HeroVideo)과 같은 문법의 화면 가득 패널.
 * 어두운 배경(사진 또는 잉크) + 라임 세로 바 옆 흰 텍스트 + 하단 중앙 버튼 + 우측 하단 구간 번호.
 */
export function HeroPanel({
  image,
  label,
  title,
  description,
  button,
  logo,
  aside,
  children,
  tone = "dark",
}: {
  image?: { src: string; alt: string; position?: string };
  label: string;
  title: React.ReactNode;
  description?: string;
  button: { href: string; label: string };
  logo?: React.ReactNode;
  /** 배경 위에 얹는 별도 요소 (제품 렌더 등) */
  aside?: React.ReactNode;
  children?: React.ReactNode;
  /** dark: 어두운 배경 흰 글자 / light: 흰 배경 검은 글자 */
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    // 상단 헤더(모바일 4rem, PC 5rem)와 하단 버튼 영역을 패딩으로 비워 두고 그 사이에서 중앙 정렬한다
    <section
      className={cn(
        "relative isolate flex min-h-[100svh] w-full items-center overflow-hidden",
        light ? "bg-white text-ink" : "bg-ink text-white",
      )}
    >
      {image && (
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <Parallax>
            <Image src={image.src} alt={image.alt} fill sizes="100vw" quality={90} className="kenburns object-cover" style={{ objectPosition: image.position ?? "60% 40%" }} />
          </Parallax>
        </div>
      )}
      {!image && (
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 -z-20",
            light
              ? "bg-[radial-gradient(ellipse_at_75%_45%,rgba(153,212,30,0.14),transparent_60%)]"
              : "bg-[radial-gradient(ellipse_at_75%_45%,rgba(153,212,30,0.18),transparent_55%)]",
          )}
        />
      )}
      {!light && <div aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-t from-black/85 via-black/45 to-black/35" />}
      {aside}

      <div className="container-x relative z-10 w-full pb-24 pt-[4.5rem] sm:pb-28 sm:pt-[5.75rem]">
        <div className="max-w-3xl border-l-4 border-lime pl-5 sm:pl-8">
          {logo && <Reveal>{logo}</Reveal>}
          <Reveal>
            <span className={cn("block text-sm font-semibold", light ? "text-ink-soft" : "text-white/75")}>{label}</span>
            <h2 className="display mt-3 text-[1.75rem] sm:mt-4 sm:text-5xl lg:text-6xl">{title}</h2>
            {description && (
              <p
                className={cn(
                  "mt-4 max-w-2xl text-[15px] leading-[1.75] sm:mt-6 sm:text-lg xl:max-w-none xl:whitespace-nowrap",
                  light ? "text-ink-soft" : "text-white/85",
                )}
              >
                {description}
              </p>
            )}
          </Reveal>
          {children}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center sm:bottom-10">
        <Link
          href={button.href}
          className={cn(
            "inline-flex h-14 items-center gap-4 bg-lime px-8 text-base font-bold text-ink transition-colors",
            light ? "hover:bg-ink hover:text-white" : "hover:bg-white",
          )}
        >
          <span>{button.label}</span>
          <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="square" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
