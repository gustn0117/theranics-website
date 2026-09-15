"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * 스크롤로 화면에 들어올 때 한 번 페이드·상승하며 나타난다.
 * prefers-reduced-motion 환경에서는 globals.css 규칙으로 즉시 표시된다.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** ms */
  delay?: number;
  as?: "div" | "section" | "ul" | "ol" | "li" | "article" | "figure";
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
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error 태그별 ref 타입 통합
      ref={ref}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
