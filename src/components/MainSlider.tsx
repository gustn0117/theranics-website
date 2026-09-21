"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const DURATION = 900;
const AUTOPLAY = 5000;

/**
 * 메인 페이지 슬라이드. 스크롤 대신 좌우 버튼 · 키보드 · 휠 · 스와이프로 화면을 넘기고,
 * 나가는 화면은 페이드 아웃, 들어오는 화면은 페이드 인 된다.
 */
export function MainSlider({ slides, labels, tones }: { slides: React.ReactNode[]; labels: string[]; tones?: ("dark" | "light")[] }) {
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const busy = useRef(false);
  const total = slides.length;

  const go = useCallback(
    (next: number) => {
      if (busy.current) return;
      const n = (next + total) % total;
      if (n === active) return;
      busy.current = true;
      setLeaving(active);
      setActive(n);
      window.setTimeout(() => {
        setLeaving(null);
        busy.current = false;
      }, DURATION);
    },
    [active, total],
  );

  // 현재 슬라이드 배경 톤을 헤더에 전달 (흰 배경에서는 메뉴 글자를 검정으로)
  useEffect(() => {
    const tone = tones?.[active] ?? "dark";
    document.documentElement.dataset.slideTone = tone;
    window.dispatchEvent(new CustomEvent("slide-tone", { detail: tone }));
    return () => {
      delete document.documentElement.dataset.slideTone;
    };
  }, [active, tones]);

  // 5초마다 다음 화면으로 자동 전환. 직접 넘기면 그 시점부터 다시 5초를 센다
  useEffect(() => {
    const t = window.setTimeout(() => go(active + 1), AUTOPLAY);
    return () => window.clearTimeout(t);
  }, [active, go]);

  // 키보드 / 휠 / 스와이프
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown") go(active + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") go(active - 1);
    };
    let wheelLock = 0;
    const onWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - wheelLock < DURATION + 300) return;
      if (Math.abs(e.deltaY) < 24 && Math.abs(e.deltaX) < 24) return;
      wheelLock = now;
      const d = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      go(active + (d > 0 ? 1 : -1));
    };
    let touchX = 0;
    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchX = e.touches[0].clientX;
      touchY = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchX;
      const dy = e.changedTouches[0].clientY - touchY;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 50) return;
      const d = Math.abs(dx) > Math.abs(dy) ? -dx : -dy;
      go(active + (d > 0 ? 1 : -1));
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [active, go]);

  return (
    <div className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink" aria-roledescription="carousel">
      {slides.map((slide, i) => {
        const isActive = i === active;
        const isLeaving = i === leaving;
        if (!isActive && !isLeaving) return null;
        return (
          <div
            key={i}
            className={cn("absolute inset-0 overflow-y-auto", isActive ? "z-10 slide-in" : "z-0 slide-out pointer-events-none")}
            aria-hidden={!isActive}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${total} · ${labels[i]}`}
          >
            {slide}
          </div>
        );
      })}

      {/* 좌우 버튼 */}
      <button
        type="button"
        onClick={() => go(active - 1)}
        aria-label="이전 화면"
        className="absolute bottom-7 left-3 z-20 p-3 text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition hover:text-lime sm:bottom-9 sm:left-6 lg:bottom-auto lg:left-4 lg:top-1/2 lg:-translate-y-1/2"
      >
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M15 5l-7 7 7 7" strokeLinecap="square" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(active + 1)}
        aria-label="다음 화면"
        className="absolute bottom-7 right-3 z-20 p-3 text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition hover:text-lime sm:bottom-9 sm:right-6 lg:bottom-auto lg:right-4 lg:top-1/2 lg:-translate-y-1/2"
      >
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M9 5l7 7-7 7" strokeLinecap="square" />
        </svg>
      </button>

      {/* 인디케이터 */}
      <div className="absolute bottom-8 right-24 z-20 hidden items-center gap-2 lg:bottom-10 lg:right-28 lg:flex">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`${i + 1}번째 화면: ${labels[i]}`}
            aria-current={i === active ? "true" : undefined}
            className={cn("h-1.5 rounded-full transition-all", i === active ? "w-8 bg-lime" : "w-3 bg-white/50 hover:bg-white")}
          />
        ))}
      </div>
    </div>
  );
}
