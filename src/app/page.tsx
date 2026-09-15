import Image from "next/image";
import { HeroVideo } from "@/components/HeroVideo";
import { ButtonLink, SectionHeading, StatRow } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";

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
        fallbackImage={{ src: "/images/photo/hero-doorway-hq.jpg", alt: "현관에서 MYLIFT 위에 올라 휠을 교체하는 휠체어 사용자", position: "65% 45%" }}
        label="이동권"
        title={
          <>
            누구나 두려움 없이
            <br className="hidden lg:inline" />
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
        fallbackImage={{ src: "/images/activity/act-104-hq.jpg", alt: "재도전 마인드업 힐링캠프 단체 사진", position: "50% 35%" }}
        label="고용권"
        title={
          <>
            사회적 약자가
            <br className="hidden lg:inline" />
            함께 성장하는 일터
          </>
        }
        description="취약계층의 고용을 도와 적극적인 경제활동을 지원하는 것, (주)테라닉스의 소셜미션입니다."
        button={{ href: siteConfig.secondVideoButtonHref, ariaLabel: "다음 페이지로 이동" }}
      />

      {/* 3. 기업 소개: 사진 배경 + 여백에 텍스트 */}
      <section className="snap-hero relative isolate flex min-h-[100svh] items-end overflow-hidden bg-paper lg:items-center">
        <div className="absolute inset-0 overflow-hidden">
          <Parallax>
            <Image
              src="/images/photo/wheel-change-hq.jpg"
              alt="MYLIFT 위에서 앉은 채 뒷바퀴를 교체하는 휠체어 사용자"
              fill
              sizes="100vw"
              quality={90}
              className="kenburns object-cover object-[75%_35%] lg:object-[75%_50%]"
            />
          </Parallax>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/5 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/40 lg:to-white/10" />
        </div>
        <div className="container-x relative pb-16 pt-40 sm:pb-20 lg:py-40">
          <Reveal className="max-w-xl">
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl">
              국민의 건강과 행복,
              <br className="hidden lg:inline" />
              안전을 지킵니다
            </h2>
            <p className="mt-6 text-lg leading-[1.8] text-ink-soft">
              예비사회적기업 (주)테라닉스는 교통약자의 이동을 도와 안전한 사회참여를 지원하고, 취약계층의 고용을
              도와 적극적인 경제활동을 지원합니다.
            </p>
            <Reveal as="ul" stagger className="mt-10 border-t border-ink">
              {values.map((v) => (
                <li key={v.title} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-ink/20 py-5">
                  <span className="display text-xl">{v.title}</span>
                  <span className="text-[15px] leading-[1.75] text-ink-soft">{v.body}</span>
                </li>
              ))}
            </Reveal>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/about">회사소개 보기</ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                문의하기
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. MYLIFT 하이라이트 */}
      <section className="snap-section dots bg-paper text-ink">
        <div className="container-x grid items-center gap-10 py-20 lg:min-h-[100svh] lg:grid-cols-[6fr_6fr] lg:gap-16 lg:py-28">
          <div>
            <Reveal className="self-start">
              <Image src="/images/logo/mylift.png" alt="MYLIFT 마이리프트" width={1033} height={640} className="h-20 w-auto sm:h-24" />
            </Reveal>
            <SectionHeading
              className="mt-10"
              label="제품"
              title={
                <>
                  옮겨타지 않고, 앉은 채로
                  <br className="hidden lg:inline" />
                  20초 만에 실내 진입
                </>
              }
              description="시저형 리프트가 뒷바퀴만 살짝 들어올리면 퀵릴리즈 휠을 원터치로 분리해 실내용 휠로 교체합니다. 낙상 위험과 실내 오염을 한 번에 해결하는 세계 최초 휠 교체용 전동 리프트입니다."
            />
            <Reveal className="mt-10 max-w-lg" delay={120}>
              <StatRow
                cols={2}
                items={[
                  { value: "20초", label: "휠 교체 시간" },
                  { value: "255kg", label: "최대 하중" },
                  { value: "10건", label: "마이리프트 지식재산" },
                  { value: "2026.10", label: "시제품 완성" },
                ]}
              />
            </Reveal>
            <Reveal className="mt-10" delay={200}>
              <ButtonLink href="/products" variant="dark">제품 자세히 보기</ButtonLink>
            </Reveal>
          </div>
          <Reveal className="mx-auto w-full max-w-[640px] lg:max-w-none" delay={150}>
            <Image
              src="/images/product/mylift-hero.png"
              alt="MYLIFT 본체, 경사판, 리모컨"
              width={1920}
              height={1262}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="float-slow h-auto w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* 5. 문의 CTA */}
      <section className="snap-section relative overflow-hidden bg-lime">
        <span aria-hidden className="display pointer-events-none absolute -bottom-12 -left-2 select-none text-[11rem] leading-none text-ink/[0.06] lg:text-[18rem]">
          20초
        </span>
        <Reveal className="container-x relative grid gap-8 py-20 sm:py-28 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="display text-3xl sm:text-5xl lg:text-6xl">
              MYLIFT 도입·협력·시범사업,
              <br className="hidden lg:inline" />
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
        </Reveal>
      </section>
    </>
  );
}
