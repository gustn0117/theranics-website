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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-line/80 bg-white/90 shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-md"
          : "bg-gradient-to-b from-black/40 to-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label="테라닉스 홈으로">
          <Image
            src="/images/logo/theranics-symbol.png"
            alt=""
            width={424}
            height={382}
            className={cn("h-8 w-auto transition sm:h-9", !solid && "invert brightness-0")}
            preload
          />
          <Image
            src="/images/logo/theranics-wordmark.png"
            alt="THERANICS"
            width={1587}
            height={170}
            className={cn("h-4 w-auto transition sm:h-[18px]", !solid && "invert brightness-0")}
            preload
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="주 메뉴">
          {siteConfig.nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative rounded-full px-4 py-2 text-[15px] font-semibold transition",
                  solid ? "text-ink hover:text-lime-deep" : "text-white/90 hover:text-white",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-lime transition-transform",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            );
          })}
          <Link
            href="/products"
            className="ml-3 rounded-full bg-lime px-4 py-2 text-sm font-bold text-ink transition hover:bg-lime-light"
          >
            MYLIFT
          </Link>
        </nav>

        <button
          type="button"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full md:hidden",
            solid ? "text-ink" : "text-white",
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-6 rounded bg-current transition-all",
                open && "top-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[7px] h-0.5 w-6 rounded bg-current transition-all",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[14px] h-0.5 w-6 rounded bg-current transition-all",
                open && "top-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "md:hidden",
          open ? "block" : "hidden",
          "border-t border-line bg-white",
        )}
      >
        <nav className="container-x flex flex-col py-3" aria-label="모바일 메뉴" onClick={() => setOpen(false)}>
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between border-b border-line py-4 text-lg font-semibold last:border-b-0"
            >
              <span>{item.label}</span>
              <span className="text-sm font-medium text-ink-soft">{item.labelKo}</span>
            </Link>
          ))}
          <Link
            href="/products"
            className="mt-3 rounded-full bg-lime px-5 py-3 text-center font-bold text-ink"
          >
            MYLIFT 제품 보기
          </Link>
        </nav>
      </div>
    </header>
  );
}
