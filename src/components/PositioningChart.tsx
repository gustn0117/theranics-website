import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

/**
 * IR 자료의 포지셔닝 차트 재현: 가로축 오염(청결) 해결, 세로축 낙상(안전) 해결.
 * 마이리프트만 두 축을 모두 만족하는 우상단에 놓인다.
 */
const points: { name: string; x: number; y: number; note: string; price: string; hero?: boolean }[] = [
  { name: "휠체어 2대 운용", x: 20, y: 18, note: "현관에서 옮겨타기 · 1대 추가 구입", price: "휠체어 1대 추가 약 100만원" },
  { name: "휠커버", x: 38, y: 27, note: "혼자 장착 어려움 · 마른 흙 낙하", price: "1~2.5만원, 재구입 반복" },
  { name: "세척형 (크린휠즈 등)", x: 60, y: 33, note: "물세척 불가 · 분해 청소 · 단종", price: "45~80만원" },
  { name: "마이리프트", x: 76, y: 80, note: "앉은 채 휠 교체 · 20초 실내 진입", price: "90만원 · 공단 등록 시 9만원 또는 무료", hero: true },
];

const quadrants = [
  { pos: "left-5 top-5", text: "안전하지만 오염 잔존", sub: "해당 제품 없음" },
  { pos: "left-5 bottom-14", text: "낙상 위험 · 오염 모두 남음", sub: "기존 대안 대부분" },
  { pos: "right-5 bottom-14", text: "청결은 해결, 낙상은 잔존", sub: "세척형의 한계" },
];

export function PositioningChart() {
  return (
    <Reveal
      className="relative aspect-[4/3] w-full overflow-hidden border border-ink bg-white sm:aspect-[16/9]"
      delay={120}
    >
      {/* 좋아지는 방향으로 옅어지는 배경 */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-ink/[0.06] via-transparent to-lime/30" />
      {/* 격자 */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: "linear-gradient(to right, #e5e7e0 1px, transparent 1px), linear-gradient(to top, #e5e7e0 1px, transparent 1px)",
          backgroundSize: "12.5% 12.5%",
        }}
      />
      {/* 중앙 십자선 */}
      <div aria-hidden className="absolute inset-y-0 left-1/2 w-px bg-ink/25" />
      <div aria-hidden className="absolute inset-x-0 top-1/2 h-px bg-ink/25" />
      {/* 축선 */}
      <div aria-hidden className="absolute inset-y-0 left-0 w-[3px] bg-ink" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-[3px] bg-ink" />

      {/* 우상단 목표 영역 */}
      <div aria-hidden className="absolute right-0 top-0 h-1/2 w-1/2 border-b border-l border-dashed border-lime-deep/60 bg-lime/20" />
      <div className="absolute right-4 top-[42%] hidden border border-ink bg-white px-3 py-1.5 text-xs font-bold sm:block sm:text-sm">
        안전 + 청결 동시 해결 · <span className="text-lime-deep">유일</span>
      </div>

      {/* 사분면 라벨 */}
      {quadrants.map((q) => (
        <div key={q.text} className={cn("absolute hidden text-[11px] leading-snug text-ink-soft sm:block", q.pos)}>
          <p className="font-bold">{q.text}</p>
          <p>{q.sub}</p>
        </div>
      ))}

      {/* 축 라벨 */}
      <span className="absolute bottom-2 right-4 text-xs font-bold text-ink sm:text-sm">오염(청결) 해결 →</span>
      <span className="absolute bottom-2 left-4 text-[11px] font-semibold text-ink-soft">낮음</span>
      <span className="absolute left-2 top-1/2 flex -translate-y-1/2 flex-col items-center gap-1 text-xs font-bold text-ink sm:text-sm">
        <span>↑</span>
        <span className="[writing-mode:vertical-rl]">낙상(안전) 해결</span>
      </span>

      {/* 발상의 전환 화살표: 기존 대안 군집 → 마이리프트 */}
      <svg aria-hidden className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <marker id="pc-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L6,3 L0,6 z" fill="#6fa312" />
          </marker>
        </defs>
        <path
          d="M 62 64 C 70 58, 74 40, 76 27"
          fill="none"
          stroke="#6fa312"
          strokeWidth="0.6"
          strokeDasharray="1.6 1.4"
          markerEnd="url(#pc-arrow)"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="absolute left-[58%] top-[44%] hidden -translate-y-full border border-lime-deep bg-white px-2.5 py-1 text-[11px] font-bold text-lime-deep sm:block">
        발상의 전환 · 세척 → 교체
      </div>

      {/* 포인트 */}
      <ul className="reveal-stagger is-in contents">
        {points.map((p) => (
          <li key={p.name} className="absolute -translate-x-1/2 translate-y-1/2" style={{ left: `${p.x}%`, bottom: `${p.y}%` }}>
            {p.hero ? (
              <div className="flex flex-row-reverse items-end gap-3">
                <div className="relative">
                  <span className="pc-pulse absolute inset-0 bg-lime" />
                  <span className="relative block h-7 w-7 bg-lime ring-4 ring-ink sm:h-8 sm:w-8" />
                </div>
                <div className="hidden w-52 border border-ink bg-white p-3 text-right sm:block lg:w-64">
                  <Image src="/images/product/basic-ramps.png" alt="" width={1920} height={1262} className="ml-auto h-16 w-auto" />
                  <p className="display mt-1 text-xl">{p.name}</p>
                  <p className="text-[11px] text-ink-soft">{p.note}</p>
                  <p className="mt-1 text-[11px] font-bold text-lime-deep">{p.price}</p>
                </div>
                <p className="display text-base sm:hidden">{p.name}</p>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="block h-3.5 w-3.5 shrink-0 bg-ink/80" />
                <div className="whitespace-nowrap">
                  <p className="text-xs font-extrabold leading-tight sm:text-sm">{p.name}</p>
                  <p className="hidden text-[11px] text-ink-soft sm:block">{p.note}</p>
                  <p className="hidden text-[11px] font-semibold text-ink-soft sm:block">{p.price}</p>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
