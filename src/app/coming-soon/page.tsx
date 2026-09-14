import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "준비 중인 페이지",
  description: "새로운 페이지를 준비하고 있습니다.",
  robots: { index: false, follow: true },
};

/**
 * 메인 두 번째 영상 영역의 빈 버튼이 연결되는 기본 페이지.
 * 신규 페이지가 준비되면 src/config/site.ts 의 secondVideoButtonHref 를 바꾸거나 이 페이지를 교체한다.
 */
export default function ComingSoonPage() {
  return (
    <section className="container-x flex min-h-[80svh] flex-col items-center justify-center py-32 text-center">
      <span className="eyebrow justify-center">Coming soon</span>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">새로운 페이지를 준비하고 있습니다</h1>
      <p className="mt-4 max-w-md text-ink-soft">고용권을 주제로 한 콘텐츠와 신규 서비스 소개가 곧 공개됩니다.</p>
      <div className="mt-10 w-full max-w-2xl overflow-hidden rounded-3xl">
        <Placeholder label="신규 페이지 콘텐츠 영역" className="aspect-[16/9] w-full" />
      </div>
      <div className="mt-10 flex gap-3">
        <ButtonLink href="/">메인으로</ButtonLink>
        <ButtonLink href="/about" variant="outline">
          회사소개
        </ButtonLink>
      </div>
    </section>
  );
}
