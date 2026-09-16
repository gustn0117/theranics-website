"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { Parallax } from "@/components/Parallax";

type HeroVideoProps = {
  /** public/ 기준 영상 경로. 파일이 없으면 fallbackImage 가 슬로우 줌으로 재생된다. */
  src: string;
  /** 영상 파일이 준비되기 전까지 보여줄 사진 */
  fallbackImage: { src: string; alt: string; position?: string };
  label: string;
  title: React.ReactNode;
  description?: string;
  /** 하단 중앙 버튼. label을 비우면 글씨가 없는 빈 버튼이 된다. */
  button: { href: string; label?: string; ariaLabel: string };
  index: number;
};

export function HeroVideo({ src, fallbackImage, label, title, description, button, index }: HeroVideoProps) {
  const [status, setStatus] = useState<"loading" | "ready" | "missing">("loading");
  const isEmptyButton = !button.label;

  return (
    <section
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-ink text-white"
      aria-labelledby={`hero-${index}-title`}
    >
      {/* 영상 준비 전: 사진 슬로우 줌 */}
      <div className={cn("absolute inset-0 -z-20 overflow-hidden transition-opacity duration-1000", status === "ready" ? "opacity-0" : "opacity-100")}>
        <Parallax>
          <Image
            src={fallbackImage.src}
            alt={fallbackImage.alt}
            fill
            preload={index === 1}
            sizes="100vw"
            quality={90}
            className="kenburns object-cover"
            style={{ objectPosition: fallbackImage.position ?? "60% 40%" }}
          />
        </Parallax>
      </div>

      {status !== "missing" && (
        <video
          className={cn(
            "absolute inset-0 -z-10 h-full w-full object-cover transition-opacity duration-1000",
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

      <div aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-t from-black/85 via-black/35 to-black/30" />

      <div className="container-x relative z-10 w-full pb-24 pt-16 sm:pb-28 sm:pt-20">
        <div className="max-w-3xl border-l-4 border-lime pl-6 sm:pl-8">
          <span className="block text-sm font-semibold text-white/75 animate-fade-up">{label}</span>
          <h1 id={`hero-${index}-title`} className="display mt-4 text-[2rem] sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-up [animation-delay:140ms]">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-[1.8] text-white/85 sm:text-lg xl:max-w-none xl:whitespace-nowrap animate-fade-up [animation-delay:280ms]">{description}</p>
          )}
        </div>
      </div>

      {/* 하단 중앙 버튼 */}
      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center sm:bottom-10 animate-fade-up [animation-delay:420ms]">
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

      {status === "missing" && (
        <p className="absolute left-5 top-20 z-10 text-[11px] text-white/45 sm:left-10 sm:top-24">영상 준비 중 · 파일 등록 시 자동 재생</p>
      )}
    </section>
  );
}
