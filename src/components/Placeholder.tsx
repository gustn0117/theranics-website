import { cn } from "@/lib/cn";

type PlaceholderProps = {
  /** 영역 안에 표시할 라벨 (예: "영상 영역 · 이동권") */
  label?: string;
  /** 보조 설명 */
  hint?: string;
  className?: string;
  dark?: boolean;
};

/**
 * 아직 준비되지 않은 영상·이미지·약도 자리를 빗금 패턴으로 표시한다.
 * 부모 요소가 크기를 정하고, 이 컴포넌트는 absolute 또는 지정된 className 크기로 채운다.
 */
export function Placeholder({ label, hint, className, dark }: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label ?? "준비 중인 콘텐츠"}
      className={cn(
        "flex items-center justify-center overflow-hidden",
        dark ? "hatch-dark text-white/80" : "hatch text-ink-soft",
        className,
      )}
    >
      {(label || hint) && (
        <div
          className={cn(
            "mx-4 flex max-w-md flex-col items-center gap-1 rounded-xl px-5 py-3 text-center backdrop-blur-sm",
            dark ? "bg-black/40" : "bg-white/80",
          )}
        >
          <span className="flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime" />
            Placeholder
          </span>
          {label && <span className="text-sm font-semibold sm:text-base">{label}</span>}
          {hint && <span className="text-xs opacity-80">{hint}</span>}
        </div>
      )}
    </div>
  );
}
