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
    <section className="container-x grid min-h-[80svh] items-center gap-12 py-32 lg:grid-cols-[5fr_7fr]">
      <div>
        <h1 className="display text-4xl sm:text-5xl">새로운 페이지를 준비하고 있습니다</h1>
        <p className="mt-5 text-lg leading-[1.8] text-ink-soft">고용권을 주제로 한 콘텐츠와 신규 서비스 소개가 곧 공개됩니다.</p>
        <div className="mt-10 flex gap-3">
          <ButtonLink href="/">메인으로</ButtonLink>
          <ButtonLink href="/about" variant="outline">
            회사소개
          </ButtonLink>
        </div>
      </div>
      <Placeholder label="신규 페이지 콘텐츠 영역" className="aspect-[16/9] w-full border border-ink" />
    </section>
  );
}
