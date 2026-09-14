"use client";

import Link from "next/link";
import { useState } from "react";
import { Placeholder } from "@/components/Placeholder";
import { cn } from "@/lib/cn";

type HeroVideoProps = {
  /** public/ 기준 영상 경로. 파일이 없으면 빗금 플레이스홀더가 보인다. */
  src: string;
  placeholderLabel: string;
  label: string;
  title: React.ReactNode;
  description?: string;
  /** 하단 중앙 버튼. label을 비우면 글씨가 없는 빈 버튼이 된다. */
  button: { href: string; label?: string; ariaLabel: string };
  index: number;
};

export function HeroVideo({ src, placeholderLabel, label, title, description, button, index }: HeroVideoProps) {
  const [status, setStatus] = useState<"loading" | "ready" | "missing">("loading");
  const isEmptyButton = !button.label;

  return (
    <section
      className="relative isolate flex h-[100svh] min-h-[600px] w-full items-end overflow-hidden bg-ink text-white"
      aria-labelledby={`hero-${index}-title`}
    >
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

      <div aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-t from-black/80 via-black/25 to-black/35" />

      <div className="container-x relative z-10 w-full pb-32 pt-32 sm:pb-36">
        <div className="max-w-3xl border-l-4 border-lime pl-6 sm:pl-8 animate-fade-up">
          <span className="mark mark-light">{label}</span>
          <h1 id={`hero-${index}-title`} className="display mt-4 text-[2.4rem] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-[1.8] text-white/85 sm:text-lg">{description}</p>
          )}
        </div>
      </div>

      {/* 하단 중앙 버튼 */}
      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center sm:bottom-10">
        <Link
          href={button.href}
          aria-label={button.ariaLabel}
          className={cn(
            "inline-flex h-14 items-center justify-center font-bold transition-colors",
            isEmptyButton
              ? "w-48 border-2 border-white/80 bg-white/10 backdrop-blur-sm hover:border-lime hover:bg-lime/25 sm:w-56"
              : "gap-4 bg-lime px-8 text-base text-ink hover:bg-white",
          )}
        >
          {button.label && (
            <>
              <span>{button.label}</span>
              <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="square" />
              </svg>
            </>
          )}
          {isEmptyButton && <span className="sr-only">{button.ariaLabel}</span>}
        </Link>
      </div>

      <div className="absolute bottom-10 right-8 z-10 hidden items-center gap-3 text-xs font-semibold text-white/70 lg:flex">
        <span className="h-px w-10 bg-white/50" />
        {index === 1 ? "01 / 02" : "02 / 02"}
      </div>
    </section>
  );
}
