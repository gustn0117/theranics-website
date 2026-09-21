"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

type Tone = "dark" | "light";

/** rgb()/oklab()/oklch() 계산값에서 밝기와 불투명도를 뽑는다 */
function readColor(value: string): { dark: boolean; alpha: number } | null {
  const rgb = value.match(/^rgba?\(([^)]+)\)/);
  if (rgb) {
    const [r, g, b, a = 1] = rgb[1].split(/[\s,/]+/).filter(Boolean).map(parseFloat);
    return { dark: 0.2126 * r + 0.7152 * g + 0.0722 * b < 128, alpha: a };
  }
  const ok = value.match(/^okl(?:ab|ch)\(([^)]+)\)/);
  if (ok) {
    const [body, a] = ok[1].split("/");
    const l = parseFloat(body);
    return { dark: l < 0.6, alpha: a === undefined ? 1 : parseFloat(a) };
  }
  return null;
}

/** 헤더 바로 아래에 깔린 구간의 배경이 어두운지 밝은지 판별한다 */
function toneUnder(header: HTMLElement): Tone {
  const y = header.offsetHeight / 2;
  for (const el of document.elementsFromPoint(window.innerWidth / 2, y)) {
    if (header.contains(el)) continue;
    for (let n: Element | null = el; n && n !== document.body; n = n.parentElement) {
      const c = readColor(getComputedStyle(n).backgroundColor);
      if (c && c.alpha > 0.5) return c.dark ? "dark" : "light";
    }
  }
  return "light";
}

export function Header() {
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);
  const [tone, setTone] = useState<Tone>("light");
  const [open, setOpen] = useState(false);

  // 스크롤 · 슬라이드 전환마다 헤더 아래 배경 밝기를 읽어 글자색을 맞춘다 (배경은 투명 유지)
  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) setTone(toneUnder(ref.current));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("slide-tone", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("slide-tone", update);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = tone === "dark" && !open;
  const solid = !light;

  return (
    <header
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-2 transition-colors duration-500 sm:pt-3",
        open
          ? "bg-white"
          : // 배경은 투명하게 두고, 사진 위에서도 글자가 읽히도록 아주 옅은 그라데이션만 깐다
            light
            ? "bg-gradient-to-b from-black/55 via-black/25 to-transparent"
            : "bg-gradient-to-b from-white/95 via-white/75 to-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label="테라닉스 홈으로">
          <Image
            src="/images/logo/theranics-symbol.png"
            alt=""
            width={424}
            height={382}
            className={cn("h-8 w-auto transition sm:h-9", !solid && "brightness-0 invert")}
            preload
          />
          <Image
            src="/images/logo/theranics-wordmark.png"
            alt="THERANICS"
            width={1587}
            height={170}
            className={cn("h-4 w-auto transition sm:h-[18px]", !solid && "brightness-0 invert")}
            preload
          />
        </Link>

        <nav className="hidden items-center md:flex" aria-label="주 메뉴">
          {siteConfig.nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-5 py-2 text-[15px] font-semibold transition-colors",
                  solid ? "text-ink hover:text-lime-deep" : "text-white/90 hover:text-white",
                )}
              >
                {item.label}
                {active && <span className="absolute inset-x-5 -bottom-1 h-0.5 bg-lime" />}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className={cn("flex h-10 w-10 items-center justify-center md:hidden", solid ? "text-ink" : "text-white")}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span className={cn("absolute left-0 top-0 h-0.5 w-6 bg-current transition-all", open && "top-[7px] rotate-45")} />
            <span className={cn("absolute left-0 top-[7px] h-0.5 w-6 bg-current transition-all", open && "opacity-0")} />
            <span className={cn("absolute left-0 top-[14px] h-0.5 w-6 bg-current transition-all", open && "top-[7px] -rotate-45")} />
          </span>
        </button>
      </div>

      <div id="mobile-menu" className={cn("border-t border-line bg-white md:hidden", open ? "block" : "hidden")}>
        <nav className="container-x flex flex-col py-2" aria-label="모바일 메뉴" onClick={() => setOpen(false)}>
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between border-b border-line py-4 text-lg font-bold last:border-b-0"
            >
              <span>{item.label}</span>
              <span className="text-sm font-medium text-ink-soft">{item.labelKo}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
