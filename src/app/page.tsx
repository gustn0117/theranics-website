import Image from "next/image";
import { HeroVideo } from "@/components/HeroVideo";
import { MainSlider } from "@/components/MainSlider";
import { HeroPanel } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/Reveal";


export default function HomePage() {
  const slides = [
      // 1. 이동권 영상 영역
      <HeroVideo
        key="s1"
        index={1}
        src="/videos/mobility.mp4"
        videoPosition="50% 0%"
        fallbackImage={{ src: "/images/photo/hero-doorway-hq.jpg", alt: "현관에서 MYLIFT 위에 올라 휠을 교체하는 휠체어 사용자", position: "65% 45%" }}
        label="이동권"
        title={
          <>
            누구나 두려움 없이{" "}
            <br className="hidden lg:inline" />
            나서고, 돌아오는 일상
          </>
        }
        description="휠체어 휠을 쉽게 교체해 자택 출입 시 20초 만에 안전과 청결을 해결하는 전동 리프트, MYLIFT"
        button={{ href: "/products", label: "MYLIFT 제품소개", ariaLabel: "MYLIFT 제품소개 페이지로 이동" }}
      />,
      // 2. 고용권 영상 영역 (글씨 없는 빈 버튼)
      <HeroVideo
        key="s2"
        index={2}
        src="/videos/employment.mp4"
        fallbackImage={{ src: "/images/activity/act-104-hq.jpg", alt: "재도전 마인드업 힐링캠프 단체 사진", position: "50% 35%" }}
        label="고용권"
        title={
          <>
            사회적 약자가{" "}
            <br className="hidden lg:inline" />
            함께 성장하는 일터
          </>
        }
        description="취약계층의 고용을 도와 적극적인 경제활동을 지원하는 것, (주)테라닉스의 소셜미션입니다."
        button={{ href: siteConfig.secondVideoButtonHref, ariaLabel: "다음 페이지로 이동" }}
      />,
      // 3. MYLIFT 하이라이트
      <HeroPanel
        key="s3"
        tone="light"
        label="제품"
        title={
          <>
            옮겨타지 않고, 앉은 채로{" "}
            <br className="hidden lg:inline" />
            <span className="whitespace-nowrap">20초 만에</span> 실내 진입
          </>
        }
        description="뒷바퀴만 살짝 들어올려 퀵릴리즈 휠을 원터치로 교체하는 세계 최초 휠 교체용 전동 리프트"
        button={{ href: "/products", label: "제품 자세히 보기" }}
        aside={
          <Reveal className="pointer-events-none absolute inset-x-[10%] top-6 h-[40svh] opacity-20 lg:inset-y-0 lg:inset-x-auto lg:right-0 lg:h-full lg:w-[58%] lg:opacity-100" delay={150}>
            <Image
              src="/images/product/mylift-hero.png"
              alt="MYLIFT 본체, 경사판, 리모컨"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              quality={90}
              className="float-slow object-contain object-center p-4 lg:object-[78%_45%] lg:p-10"
            />
          </Reveal>
        }
      >
        {/* 모바일에서는 2×2로 고르게, 그 이상에서는 한 줄로 */}
        <Reveal as="dl" stagger className="mt-8 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 border-t border-ink/20 pt-6 sm:flex sm:flex-wrap sm:gap-x-8" delay={120}>
          {[
            ["20초", "휠 교체 시간"],
            ["255kg", "최대 하중"],
            ["10건", "지식재산"],
            ["2026.10", "시제품 완성"],
          ].map(([v, l]) => (
            <div key={l}>
              <dd className="display text-2xl text-lime-deep sm:text-3xl">{v}</dd>
              <dt className="mt-1 text-xs font-semibold text-ink-soft sm:text-sm">{l}</dt>
            </div>
          ))}
        </Reveal>
      </HeroPanel>,
      // 4. 문의
      <HeroPanel
        key="s4"
        image={{ src: "/images/activity/act-104-hq.jpg", alt: "재도전 마인드업 힐링캠프 단체 사진", position: "50% 30%" }}
        label="문의"
        title={
          <>
            {/* 좁은 화면에서 줄이 가운뎃점으로 시작하지 않도록 묶어 둔다 */}
            MYLIFT <span className="whitespace-nowrap">도입·협력·</span>시범사업,{" "}
            <br className="hidden lg:inline" />
            지금 이야기해 주세요
          </>
        }
        description="장애인 협회, 지자체, 유통·제조 파트너와 함께 안전한 이동을 만듭니다."
        button={{ href: "/contact", label: "문의하기" }}
      >
        <Reveal className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80" delay={120}>
          <a href={`mailto:${siteConfig.contact.email}`} className="border-b border-white/40 pb-0.5 font-bold text-white hover:border-lime hover:text-lime">
            {siteConfig.contact.email}
          </a>
          <a href={`tel:${siteConfig.contact.tel}`} className="border-b border-white/40 pb-0.5 font-bold text-white hover:border-lime hover:text-lime">
            {siteConfig.contact.tel}
          </a>
          <span>{siteConfig.contact.address}</span>
        </Reveal>
      </HeroPanel>,
  ];
  return (
    <MainSlider
      slides={slides}
      labels={["이동권", "고용권", "제품", "문의"]}
      tones={["dark", "dark", "light", "dark"]}
    />
  );
}
