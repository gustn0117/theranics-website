import Link from "next/link";
import { cn } from "@/lib/cn";

type HeroVideoProps = {
  /** public/ 기준 영상 경로 */
  src: string;
  /** 영상 첫 프레임. 로딩 중에도 다른 사진이 끼어들지 않고 영상과 같은 화면이 보인다. */
  poster: string;
  /**
   * 화면이 16:9보다 가로로 넓으면 영상 위아래가 잘린다.
   * 인물 머리가 프레임 맨 위에 붙어 있는 영상은 "50% 0%"로 위를 기준에 맞춰 아래쪽만 잘리게 한다.
   */
  videoPosition?: string;
  /** 영상 박스에 덧붙일 클래스 (예: 인물이 로고와 겹치지 않게 아래로 내리기) */
  videoClassName?: string;
  label?: string;
  title: React.ReactNode;
  description?: string;
  /** 하단 중앙 버튼. label을 비우면 글씨가 없는 빈 버튼이 된다. */
  button?: { href: string; label?: string; ariaLabel: string };
  index: number;
};

export function HeroVideo({ src, poster, label, title, description, button, index, videoPosition, videoClassName }: HeroVideoProps) {
  const isEmptyButton = button && !button.label;

  return (
    <section
      className="relative isolate flex min-h-full w-full items-center overflow-hidden bg-ink text-white"
      aria-labelledby={`hero-${index}-title`}
    >
      <video
        className={cn("absolute inset-0 -z-10 h-full w-full object-cover", videoClassName)}
        style={{ objectPosition: videoPosition ?? "50% 50%" }}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={src} type="video/mp4" />
      </video>

      <div aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-t from-black/85 via-black/35 to-black/30" />

      <div className="container-x relative z-10 w-full pb-24 pt-[4.5rem] sm:pb-28 sm:pt-[5.75rem]">
        <div className="max-w-3xl border-l-[3px] border-lime pl-4 sm:border-l-4 sm:pl-8">
          {label && <span className="block text-sm font-semibold text-white/75 animate-fade-up">{label}</span>}
          <h1
            id={`hero-${index}-title`}
            className={cn("display text-[1.75rem] leading-[1.2] sm:text-5xl sm:leading-[1.08] lg:text-6xl xl:text-7xl animate-fade-up [animation-delay:140ms]", label && "mt-3 sm:mt-4")}
          >
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.75] text-white/85 sm:mt-6 sm:text-lg sm:leading-[1.8] xl:max-w-none xl:whitespace-nowrap animate-fade-up [animation-delay:280ms]">{description}</p>
          )}
        </div>
      </div>

      {/* 하단 중앙 버튼 */}
      {button && (
        <div className="absolute inset-x-0 bottom-14 z-10 flex justify-center sm:bottom-16 lg:bottom-10 animate-fade-up [animation-delay:420ms]">
          <Link
            href={button.href}
            aria-label={button.ariaLabel}
            className={cn(
              "inline-flex h-12 items-center justify-center rounded-full font-bold transition-colors lg:h-14",
              isEmptyButton
                ? "w-40 border-2 border-white/80 bg-white/10 backdrop-blur-sm hover:border-lime hover:bg-lime/25 sm:w-56"
                : "gap-3 bg-lime px-7 text-[15px] text-ink hover:bg-white lg:gap-4 lg:px-9 lg:text-base",
            )}
          >
            {button.label && (
              <>
                <span>{button.label}</span>
                <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="square" />
                </svg>
              </>
            )}
            {isEmptyButton && <span className="sr-only">{button.ariaLabel}</span>}
          </Link>
        </div>
      )}
    </section>
  );
}
