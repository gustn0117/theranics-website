import Image from "next/image";
import { HeroVideo } from "@/components/HeroVideo";
import { ButtonLink, SectionHeading, StatRow } from "@/components/ui";
import { siteConfig } from "@/config/site";

const values = [
  {
    title: "이동권",
    body: "휠체어를 옮겨타지 않고 앉은 채 뒷바퀴만 교체합니다. 외출과 귀가의 두려움이 사라집니다.",
  },
  {
    title: "고용권",
    body: "취약계층의 고용을 도와 적극적인 경제활동과 자립을 지원하는 일자리 제공형 예비사회적기업입니다.",
  },
  {
    title: "안전과 청결",
    body: "낙상사고와 실내 오염, 호흡기 질환을 동시에 해결하는 유니버설 디자인 제품을 만듭니다.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. 이동권 영상 영역 */}
      <HeroVideo
        index={1}
        src="/videos/mobility.mp4"
        placeholderLabel="영상 영역 1 · 이동권"
        label="이동권"
        title={
          <>
            누구나 두려움 없이
            <br />
            나서고, 돌아오는 일상
          </>
        }
        description="휠체어 휠을 쉽게 교체하여 자택 출입 시 20초 만에 안전과 청결을 해결하는 전동 리프트, MYLIFT."
        button={{ href: "/products", label: "MYLIFT 제품소개", ariaLabel: "MYLIFT 제품소개 페이지로 이동" }}
      />

      {/* 2. 고용권 영상 영역 (글씨 없는 빈 버튼) */}
      <HeroVideo
        index={2}
        src="/videos/employment.mp4"
        placeholderLabel="영상 영역 2 · 고용권"
        label="고용권"
        title={
          <>
            사회적 약자가
            <br />
            함께 성장하는 일터
          </>
        }
        description="취약계층의 고용을 도와 적극적인 경제활동을 지원하는 것, (주)테라닉스의 소셜미션입니다."
        button={{ href: siteConfig.secondVideoButtonHref, ariaLabel: "다음 페이지로 이동" }}
      />

      {/* 3. 기업 소개: 사진 배경 + 여백에 텍스트 */}
      <section className="relative isolate overflow-hidden bg-paper">
        <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:hidden">
          <Image
            src="/images/photo/wheel-change-hq.png"
            alt="MYLIFT 위에서 앉은 채 뒷바퀴를 교체하는 휠체어 사용자"
            fill
            sizes="100vw"
            quality={90}
            className="object-cover object-[75%_50%]"
          />
        </div>
        <div className="absolute inset-0 hidden lg:block">
          <Image src="/images/photo/wheel-change-hq.png" alt="" fill sizes="100vw" quality={90} className="object-cover object-[75%_50%]" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-white/10" />
        </div>
        <div className="container-x relative py-16 sm:py-20 lg:py-40">
          <div className="max-w-xl">
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl">
              국민의 건강·행복·
              <br />
              안전지킴이
            </h2>
            <p className="mt-6 text-lg leading-[1.8] text-ink-soft">
              예비사회적기업 (주)테라닉스는 교통약자의 이동을 도와 안전한 사회참여를 지원하고, 취약계층의 고용을
              도와 적극적인 경제활동을 지원합니다.
            </p>
            <ul className="mt-10 border-t border-ink">
              {values.map((v) => (
                <li key={v.title} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-ink/20 py-5">
                  <span className="display text-xl">{v.title}</span>
                  <span className="text-[15px] leading-[1.75] text-ink-soft">{v.body}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/about">회사소개 보기</ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                문의하기
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MYLIFT 하이라이트 */}
      <section className="bg-ink text-white">
        <div className="grid lg:grid-cols-[1fr_1.15fr]">
          <div className="container-x flex flex-col justify-center py-20 lg:max-w-none lg:pl-16 lg:pr-12 lg:py-28">
            <Image
              src="/images/logo/mylift-white.png"
              alt="MYLIFT 마이리프트"
              width={1033}
              height={640}
              className="h-20 w-auto self-start sm:h-24"
            />
            <SectionHeading
              light
              className="mt-10"
              label="제품"
              title={
                <>
                  옮겨타지 않고, 앉은 채로
                  <br />
                  20초 만에 실내 진입
                </>
              }
              description="시저형 리프트가 뒷바퀴만 살짝 들어올리면 퀵릴리즈 휠을 원터치로 분리해 실내용 휠로 교체합니다. 낙상 위험과 실내 오염을 한 번에 해결하는 세계 최초 휠 교체용 전동 리프트입니다."
            />
            <div className="mt-10 max-w-lg">
              <StatRow
                light
                cols={2}
                items={[
                  { value: "20초", label: "휠 교체 시간" },
                  { value: "255kg", label: "최대 하중" },
                  { value: "10건", label: "마이리프트 지식재산" },
                  { value: "2026.10", label: "시제품 완성" },
                ]}
              />
            </div>
            <div className="mt-10">
              <ButtonLink href="/products">제품 자세히 보기</ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[420px] lg:min-h-0">
            <Image
              src="/images/product/mylift-hero.png"
              alt="MYLIFT 본체, 경사판, 리모컨"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-contain p-8 lg:p-14"
            />
          </div>
        </div>
      </section>

      {/* 5. 문의 CTA */}
      <section className="bg-lime">
        <div className="container-x grid gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="display text-3xl sm:text-5xl">
              MYLIFT 도입·협력·시범사업,
              <br />
              지금 이야기해 주세요
            </h2>
            <p className="mt-4 text-lg text-ink/75">장애인 협회, 지자체, 유통·제조 파트너와 함께 안전한 이동을 만듭니다.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="dark">
              문의하기
            </ButtonLink>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex h-13 items-center border border-ink px-7 text-[15px] font-bold hover:bg-ink hover:text-white"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
