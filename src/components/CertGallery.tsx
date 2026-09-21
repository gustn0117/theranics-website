import Image from "next/image";
import { Reveal } from "@/components/Reveal";

type Cert = { year: string; title: string; org: string; image: string };

/** 인증 · 수상 목록 (클라이언트 요청으로 클릭 확대 기능은 두지 않는다) */
export function CertGallery({ items }: { items: Cert[] }) {
  return (
    <Reveal as="ul" stagger className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7 lg:gap-3">
      {items.map((c) => (
        <li key={c.title}>
          <div className="border border-line bg-white p-2 lg:p-3">
            <Image src={c.image} alt={`${c.year} ${c.title} ${c.org}`} width={640} height={900} className="aspect-[3/4] w-full object-cover object-top" />
          </div>
          <p className="mt-3 text-xs font-bold text-lime-deep">{c.year}</p>
          <p className="mt-0.5 text-sm font-bold leading-snug">{c.title}</p>
          <p className="mt-0.5 text-xs text-ink-soft">{c.org}</p>
        </li>
      ))}
    </Reveal>
  );
}
