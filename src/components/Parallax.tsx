"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * 부모(relative, overflow-hidden) 안에서 스크롤에 따라 배경을 천천히 움직인다.
 * 위아래 12%씩 여유를 두고 채우므로 이동해도 빈 곳이 생기지 않는다.
 */
export function Parallax({ children, className, speed = 0.14 }: { children: React.ReactNode; className?: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      const r = parent.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -vh || r.top > vh * 2) return;
      const center = r.top + r.height / 2 - vh / 2;
      el.style.transform = `translate3d(0, ${(-center * speed).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className={cn("absolute inset-x-0 -inset-y-[12%] will-change-transform", className)}>
      {children}
    </div>
  );
}
