"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * PC 오른쪽에 구간 점 내비게이션을 표시한다. main 바로 아래 section 들을 구간으로 본다.
 * 현재 보고 있는 구간이 강조되고, 클릭하면 해당 구간으로 이동한다.
 */
export function SectionDots() {
  const pathname = usePathname();
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    // 경로가 바뀐 뒤 DOM 이 안정된 다음 프레임에 구간 수를 반영한다
    const raf = requestAnimationFrame(() => {
      setCount(sections.length);
      setActive(0);
    });
    if (sections.length === 0) return () => cancelAnimationFrame(raf);
    const io = new IntersectionObserver(
      (entries) => {
        // 화면 중앙을 가장 많이 차지하는 구간을 활성으로
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(sections.indexOf(visible.target as HTMLElement));
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-10% 0px -10% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [pathname]);

  if (count < 2) return null;

  return (
    <nav aria-label="구간 이동" className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 mix-blend-difference lg:flex">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`${i + 1}번째 구간으로 이동`}
          aria-current={i === active ? "true" : undefined}
          onClick={() => document.querySelectorAll<HTMLElement>("main > section")[i]?.scrollIntoView({ behavior: "smooth", block: "start" })}
          className="group flex h-4 w-4 items-center justify-center"
        >
          <span
            className={cn(
              "block bg-white transition-all duration-300",
              i === active ? "h-4 w-1" : "h-1.5 w-1.5 opacity-60 group-hover:opacity-100",
            )}
          />
        </button>
      ))}
    </nav>
  );
}
