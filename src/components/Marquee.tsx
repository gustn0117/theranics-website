import { cn } from "@/lib/cn";

/** 가로로 끝없이 흐르는 텍스트 띠. 같은 내용을 두 번 이어 붙여 끊김 없이 반복한다. */
export function Marquee({ items, className, dark }: { items: string[]; className?: string; dark?: boolean }) {
  const row = (
    <ul className="flex shrink-0 items-center" aria-hidden>
      {items.map((t, i) => (
        <li key={i} className="flex items-center whitespace-nowrap px-6 text-lg font-extrabold tracking-tight sm:px-8 sm:text-xl">
          {t}
          <span className={cn("ml-6 inline-block h-2 w-2 sm:ml-8", dark ? "bg-lime" : "bg-ink")} />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={cn("marquee flex w-full overflow-hidden py-4", dark ? "bg-ink text-white" : "bg-lime text-ink", className)}>
      <span className="sr-only">{items.join(", ")}</span>
      <div className="marquee-track flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
