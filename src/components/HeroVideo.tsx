"use client";

import Link from "next/link";
import { useState } from "react";
import { Placeholder } from "@/components/Placeholder";
import { cn } from "@/lib/cn";

type HeroVideoProps = {
  /** public/ 기준 영상 경로. 파일이 없으면 빗금 플레이스홀더가 보인다. */
  src: string;
  placeholderLabel: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  /** 하단 중앙 버튼. label을 비우면 글씨가 없는 빈 버튼이 된다. */
  button: { href: string; label?: string; ariaLabel: string };
  align?: "left" | "center";
  index: number;
};

export function HeroVideo({
  src,
  placeholderLabel,
  eyebrow,
  title,
  description,
  button,
  align = "left",
  index,
}: HeroVideoProps) {
  const [status, setStatus] = useState<"loading" | "ready" | "missing">("loading");
  const isEmptyButton = !button.label;

  return (
    <section
      className="relative isolate flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-ink text-white"
      aria-labelledby={`hero-${index}-title`}
    >
      {/* 빗금 플레이스홀더 (영상이 없거나 로딩 중일 때 노출) */}
      <Placeholder
        dark
        label={placeholderLabel}
        hint={`public${src} 파일을 넣으면 자동 재생됩니다`}
        className={cn(
          "absolute inset-0 -z-20 transition-opacity duration-700",
          status === "ready" ? "opacity-0" : "opacity-100",
        )}
      />

      {status !== "missing" && (
        <video
          className={cn(
            "absolute inset-0 -z-10 h-full w-full object-cover transition-opacity duration-700",
            status === "ready" ? "opacity-100" : "opacity-0",
          )}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setStatus("ready")}
          onError={() => setStatus("missing")}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* 가독성용 그라데이션 */}
      <div className="absolute inset-0 -z-[5] bg-gradient-to-t from-black/75 via-black/20 to-black/35" />

      <div
        className={cn(
          "container-x relative z-10 flex w-full flex-col pb-28 pt-32 sm:pb-32",
          align === "center" ? "items-center text-center" : "items-start",
        )}
      >
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm animate-fade-up">
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          {eyebrow}
        </span>
        <h1
          id={`hero-${index}-title`}
          className="max-w-4xl text-[2rem] font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl animate-fade-up [animation-delay:120ms]"
        >
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg animate-fade-up [animation-delay:240ms]">
            {description}
          </p>
        )}
      </div>

      {/* 하단 중앙 버튼 */}
      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center sm:bottom-10">
        <Link
          href={button.href}
          aria-label={button.ariaLabel}
          className={cn(
            "group inline-flex items-center justify-center rounded-full font-bold transition-all",
            isEmptyButton
              ? "h-14 w-44 border-2 border-white/70 bg-white/10 backdrop-blur-sm hover:border-lime hover:bg-lime/20 sm:w-52"
              : "h-14 gap-3 bg-lime px-8 text-base text-ink shadow-[0_10px_30px_rgba(153,212,32,0.35)] hover:bg-lime-light",
          )}
        >
          {button.label && (
            <>
              <span>{button.label}</span>
              <span
                aria-hidden
                className="flex h-7 w-7 items-center justify-center rounded-full bg-ink/10 transition group-hover:translate-x-0.5"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </>
          )}
          {isEmptyButton && <span className="sr-only">{button.ariaLabel}</span>}
        </Link>
      </div>

      {index === 1 && (
        <div className="absolute bottom-10 right-8 hidden flex-col items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-white/60 uppercase lg:flex">
          <span className="[writing-mode:vertical-rl]">Scroll</span>
          <span className="h-10 w-px bg-white/40 animate-pulse-soft" />
        </div>
      )}
    </section>
  );
}
