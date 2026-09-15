import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

/**
 * IR 자료의 포지셔닝 차트 재현: 가로축 오염(청결) 해결, 세로축 낙상(안전) 해결.
 * 마이리프트만 두 축을 모두 만족하는 우상단에 놓인다.
 */
const points: { name: string; x: number; y: number; note: string; hero?: boolean }[] = [
  { name: "휠체어 2대 운용", x: 22, y: 20, note: "옮겨타기 · 낙상 위험 잔존" },
  { name: "휠커버", x: 40, y: 28, note: "마른 흙 낙하 · 재구입" },
  { name: "세척형 (크린휠즈 등)", x: 62, y: 34, note: "물세척 불가 · 분해 청소" },
  { name: "마이리프트", x: 88, y: 86, note: "휠 교체 · 앉은 채 20초", hero: true },
];

export function PositioningChart() {
  return (
    <Reveal className="relative aspect-[4/3] w-full border border-ink bg-white sm:aspect-[16/9]" delay={120}>
      {/* 격자 */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: "linear-gradient(to right, #e5e7e0 1px, transparent 1px), linear-gradient(to top, #e5e7e0 1px, transparent 1px)",
          backgroundSize: "12.5% 12.5%",
        }}
      />
      {/* 우상단 목표 영역 */}
      <div aria-hidden className="absolute right-0 top-0 h-[38%] w-[30%] bg-lime/25" />
      <span className="absolute right-4 top-4 text-xs font-bold text-lime-deep sm:text-sm">안전 + 청결 동시 해결</span>

      {/* 축 라벨 */}
      <span className="absolute bottom-3 right-4 text-xs font-bold text-ink-soft sm:text-sm">오염(청결) 완전 해결 →</span>
      <span className="absolute left-3 top-4 flex flex-col items-center gap-1 text-xs font-bold text-ink-soft sm:text-sm">
        <span>↑</span>
        <span className="[writing-mode:vertical-rl]">낙상(안전) 완전 해결</span>
      </span>

      {points.map((p) => (
        <div
          key={p.name}
          className="absolute -translate-x-1/2 translate-y-1/2"
          style={{ left: `${p.x}%`, bottom: `${p.y}%` }}
        >
          <div className={cn("flex items-center gap-2", p.hero && "flex-row-reverse text-right")}>
            <span className={cn("block shrink-0", p.hero ? "h-6 w-6 bg-lime ring-8 ring-lime/30" : "h-3 w-3 bg-ink/70")} />
            <div className={cn("whitespace-nowrap", p.hero ? "mr-1" : "ml-0")}>
              <p className={cn("font-extrabold leading-tight", p.hero ? "text-base sm:text-xl" : "text-xs sm:text-sm")}>{p.name}</p>
              <p className="hidden text-[11px] text-ink-soft sm:block">{p.note}</p>
            </div>
          </div>
        </div>
      ))}
    </Reveal>
  );
}
