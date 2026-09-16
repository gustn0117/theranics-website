"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [overVideo, setOverVideo] = useState(isHome);
  const [lightSlide, setLightSlide] = useState(false);
  const [open, setOpen] = useState(false);

  // 메인 슬라이드가 흰 배경일 때는 메뉴 글자를 검정으로
  useEffect(() => {
    const onTone = (e: Event) => setLightSlide((e as CustomEvent<string>).detail === "light");
    window.addEventListener("slide-tone", onTone);
    return () => window.removeEventListener("slide-tone", onTone);
  }, []);

  const showLightSlide = isHome && lightSlide;

  // 메인의 영상 구간 2개(각 화면 높이) 위에서는 투명, 그 아래부터 흰 배경
  useEffect(() => {
    const onScroll = () => {
      const limit = window.innerHeight * 2 - 120;
      setOverVideo(isHome && window.scrollY < limit);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !overVideo || open || showLightSlide;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        !overVideo || open
          ? "border-b border-line bg-white/95 backdrop-blur-md"
          : showLightSlide
            ? "bg-transparent"
            : "bg-gradient-to-b from-black/45 to-transparent",
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
          <Link
            href="/products"
            className={cn(
              "ml-4 inline-flex h-10 items-center px-5 text-sm font-bold transition-colors",
              solid ? "bg-ink text-white hover:bg-lime hover:text-ink" : "bg-lime text-ink hover:bg-white",
            )}
          >
            MYLIFT
          </Link>
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
          <Link href="/products" className="mt-4 mb-2 flex h-13 items-center justify-center bg-ink font-bold text-white">
            MYLIFT 제품 보기
          </Link>
        </nav>
      </div>
    </header>
  );
}
