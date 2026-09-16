"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * 스크롤로 화면에 들어오면 페이드·상승하며 나타나고, 다시 벗어나면 원래 상태로 돌아간다.
 * 내려올 때마다 모션이 다시 재생된다. stagger 를 켜면 자식 요소들이 순서대로 시차를 두고 나타난다.
 * prefers-reduced-motion 환경에서는 globals.css 규칙으로 즉시 표시된다.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  stagger = false,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** ms */
  delay?: number;
  stagger?: boolean;
  as?: "div" | "section" | "ul" | "ol" | "li" | "article" | "figure" | "dl";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) el.classList.add("is-in");
          else el.classList.remove("is-in");
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error 태그별 ref 타입 통합
      ref={ref}
      className={cn("reveal", stagger && "reveal-stagger", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
