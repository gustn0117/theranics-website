"use client";

import { useEffect, useRef } from "react";

/**
 * "255kg", "34건", "262만 명" 처럼 앞에 숫자가 오는 값을 화면에 들어올 때 0부터 세어 올린다.
 * 화면에서 벗어나면 0으로 돌아가고, 다시 들어오면 다시 센다.
 * 날짜형("2026.10")이나 "2조 7,400억" 같은 복합 표기는 그대로 표시한다.
 * 서버 렌더링에서는 최종 값을 그대로 출력하고, 브라우저에서만 애니메이션한다.
 */
export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const m = value.match(/^(\d[\d,]*)(\.\d+)?(.*)$/);
  const animatable = !!m && !/^\d{4}\.\s?\d{2}$/.test(value) && !value.includes("조");
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !animatable || !m) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver === "undefined") return;
    const target = Number(m[1].replace(/,/g, ""));
    const suffix = (m[2] ?? "") + m[3];
    const useComma = m[1].includes(",");
    const fmt = (n: number) => (useComma ? n.toLocaleString("ko-KR") : String(n)) + suffix;
    el.textContent = fmt(0);
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          cancelAnimationFrame(raf);
          if (!e.isIntersecting) {
            el.textContent = fmt(0);
            return;
          }
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = fmt(Math.round(target * eased));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [animatable, m, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}
