"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";

type Cert = { year: string; title: string; org: string; image: string };

/**
 * 인증·수상 목록. 상장을 클릭하면 화면 가운데에 크게 확대해서 보여준다.
 * 확대 상태에서 좌우 화살표·키보드로 다음 상장으로 넘길 수 있다.
 */
export function CertGallery({ items }: { items: Cert[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (step: number) => setOpen((i) => (i === null ? i : (i + step + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, move]);

  const current = open === null ? null : items[open];

  return (
    <>
      <Reveal as="ul" stagger className="mt-8 grid select-none grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7 lg:gap-3">
        {items.map((c, i) => (
          <li key={c.title}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              // 마우스로 누를 때는 포커스를 주지 않아 닫은 뒤 라임 테두리가 남지 않게 한다 (키보드 탭 이동은 그대로)
              onMouseDown={(e) => e.preventDefault()}
              className="group block w-full text-left"
              aria-label={`${c.title} 상장 크게 보기`}
            >
              <div className="zoom-img relative border border-line bg-white p-2 transition-colors group-hover:border-ink lg:p-3">
                <Image src={c.image} alt={`${c.year} ${c.title} ${c.org}`} width={640} height={900} className="aspect-[3/4] w-full object-cover object-top" />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition group-hover:bg-ink/45 group-hover:opacity-100">
                  <span className="flex h-11 w-11 items-center justify-center bg-lime text-ink">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                      <circle cx="11" cy="11" r="7" />
                      <path d="M20 20l-4-4M11 8v6M8 11h6" strokeLinecap="square" />
                    </svg>
                  </span>
                </span>
              </div>
              <p className="mt-3 text-xs font-bold text-lime-deep">{c.year}</p>
              <p className="mt-0.5 text-sm font-bold leading-snug">{c.title}</p>
              <p className="mt-0.5 text-xs text-ink-soft">{c.org}</p>
            </button>
          </li>
        ))}
      </Reveal>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} 상장`}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/92 p-4 slide-in sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="닫기"
            className="absolute right-4 top-4 z-10 p-3 text-white/80 transition hover:text-lime sm:right-8 sm:top-8"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="square" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            aria-label="이전 상장"
            className="absolute left-1 z-10 p-3 text-white/80 transition hover:text-lime sm:left-6"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M15 5l-7 7 7 7" strokeLinecap="square" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            aria-label="다음 상장"
            className="absolute right-1 z-10 p-3 text-white/80 transition hover:text-lime sm:right-6"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M9 5l7 7-7 7" strokeLinecap="square" />
            </svg>
          </button>

          <figure
            key={current.image}
            className="flex max-h-full max-w-5xl flex-col items-center gap-4 slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.image}
              alt={`${current.year} ${current.title} ${current.org}`}
              width={1400}
              height={1980}
              quality={95}
              className="max-h-[70svh] w-auto bg-white object-contain shadow-2xl sm:max-h-[76svh]"
            />
            <figcaption className="text-center text-white">
              <p className="text-sm font-bold text-lime">{current.year}</p>
              <p className="mt-1 text-lg font-bold sm:text-xl">{current.title}</p>
              <p className="mt-0.5 text-sm text-white/70">{current.org}</p>
              <p className="mt-3 text-xs text-white/50">
                {open! + 1} / {items.length} · 화살표로 이동, ESC 로 닫기
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
