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
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > lastY && y > 160);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !isHome || scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[transform,background-color] duration-300",
        solid ? "border-b border-line bg-white/95 backdrop-blur-md" : "bg-white/90 backdrop-blur-md",
        hidden && !open && "-translate-y-full",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label="테라닉스 홈으로">
          <Image
            src="/images/logo/theranics-symbol.png"
            alt=""
            width={424}
            height={382}
            className="h-8 w-auto sm:h-9"
            preload
          />
          <Image
            src="/images/logo/theranics-wordmark.png"
            alt="THERANICS"
            width={1587}
            height={170}
            className="h-4 w-auto sm:h-[18px]"
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
                  "text-ink hover:text-lime-deep",
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
              "bg-ink text-white hover:bg-lime hover:text-ink",
            )}
          >
            MYLIFT
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
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
