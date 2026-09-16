"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Item = { image: string; title: string; desc: string };
const FADE = 900;

/**
 * 사진 슬라이더. 좌우 화살표로 넘기고, 일정 시간마다 자동으로 다음 사진으로 페이드 전환된다.
 * 마우스를 올리면 자동 전환이 멈춘다.
 */
export function PhotoSlider({ items, interval = 4500 }: { items: Item[]; interval?: number }) {
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const busy = useRef(false);
  const total = items.length;

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
      }, FADE);
    },
    [active, total],
  );

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => go(active + 1), interval);
    return () => window.clearInterval(t);
  }, [active, paused, interval, go]);

  const item = items[active];
  return (
    <div
      className="relative h-[60svh] min-h-[380px] w-full overflow-hidden bg-black lg:h-[calc(100svh-5rem)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {items.map((it, i) => {
        if (i !== active && i !== leaving) return null;
        return (
          <div key={it.image} className={cn("absolute inset-0", i === active ? "z-10 slide-in" : "z-0 slide-out")} aria-hidden={i !== active}>
            <Image src={it.image} alt={it.title} fill sizes="100vw" quality={90} className="kenburns object-cover" />
          </div>
        );
      })}
      <div aria-hidden className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/20 to-black/20" />

      <div className="container-x absolute inset-x-0 bottom-0 z-20 pb-24 text-white lg:pb-28">
        <div key={active} className="max-w-3xl border-l-4 border-lime pl-5 slide-in sm:pl-8">
          <p className="text-sm font-semibold text-white/75">{item.desc}</p>
          <h3 className="display mt-2 text-2xl sm:text-4xl lg:text-5xl">{item.title}</h3>
        </div>
      </div>

      {/* 좌우 화살표 (테두리 없음) */}
      <button
        type="button"
        onClick={() => go(active - 1)}
        aria-label="이전 사진"
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 p-3 text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition hover:text-lime sm:left-6"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M15 5l-7 7 7 7" strokeLinecap="square" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(active + 1)}
        aria-label="다음 사진"
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 p-3 text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition hover:text-lime sm:right-6"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M9 5l7 7-7 7" strokeLinecap="square" />
        </svg>
      </button>

      {/* 카운터 + 점 */}
      <div className="container-x absolute inset-x-0 bottom-0 z-20 flex items-center justify-between pb-8 text-white lg:pb-10">
        <span className="text-xs font-semibold text-white/70">
          {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`${i + 1}번째 사진`}
              aria-current={i === active ? "true" : undefined}
              className={cn("h-1.5 transition-all", i === active ? "w-6 bg-lime" : "w-2 bg-white/50 hover:bg-white")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
