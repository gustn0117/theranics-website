import Image from "next/image";
import { HeroVideo } from "@/components/HeroVideo";
import { HeroPanel, StatRow } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/Reveal";
import { coreValues } from "@/data/about";


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
            누구나 두려움 없이{" "}
            <br className="hidden lg:inline" />
            나서고, 돌아오는 일상
          </>
        }
        description="휠체어 휠을 쉽게 교체하여 자택 출입 시 20초 만에 안전과 청결을 해결하는 전동 리프트, MYLIFT."
        button={{ href: "/products", label: "MYLIFT 제품소개", ariaLabel: "MYLIFT 제품소개 페이지로 이동" }}
        total={5}
      />

      {/* 2. 고용권 영상 영역 (글씨 없는 빈 버튼) */}
      <HeroVideo
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
        total={5}
      />

      {/* 3. 기업 소개: 히어로와 같은 문법 */}
      <HeroPanel
        index={3}
        image={{ src: "/images/photo/wheel-change-hq.jpg", alt: "MYLIFT 위에서 앉은 채 뒷바퀴를 교체하는 휠체어 사용자", position: "70% 40%" }}
        label="테라닉스"
        title={
          <>
            국민의 건강과 행복,{" "}
            <br className="hidden lg:inline" />
            안전을 지킵니다
          </>
        }
        description="예비사회적기업 (주)테라닉스는 교통약자의 이동을 도와 안전한 사회참여를 지원하고, 취약계층의 고용을 도와 적극적인 경제활동을 지원합니다."
        button={{ href: "/about", label: "회사소개 보기" }}
      >
        <Reveal as="ul" stagger className="mt-8 grid gap-px border-t border-white/25 sm:grid-cols-3 sm:border-t-0 sm:bg-white/20">
          {coreValues.map((v) => (
            <li key={v.title} className="border-b border-white/25 py-4 sm:border-b-0 sm:bg-black/35 sm:p-5 sm:backdrop-blur-sm">
              <p className="display text-xl text-lime">{v.title}</p>
              <p className="mt-1.5 text-sm leading-[1.7] text-white/80">{v.body}</p>
            </li>
          ))}
        </Reveal>
      </HeroPanel>

      {/* 4. MYLIFT 하이라이트 */}
      <HeroPanel
        index={4}
        label="제품"
        title={
          <>
            옮겨타지 않고, 앉은 채로{" "}
            <br className="hidden lg:inline" />
            20초 만에 실내 진입
          </>
        }
        description="시저형 리프트가 뒷바퀴만 살짝 들어올리면 퀵릴리즈 휠을 원터치로 분리해 실내용 휠로 교체합니다. 세계 최초 휠 교체용 전동 리프트입니다."
        button={{ href: "/products", label: "제품 자세히 보기" }}
        logo={
          <div className="mb-6 inline-block bg-white px-5 py-3">
            <Image src="/images/logo/mylift-en.png" alt="MYLIFT" width={1021} height={497} className="h-12 w-auto sm:h-16" />
          </div>
        }
        aside={
          <Reveal className="pointer-events-none absolute inset-x-0 top-10 h-[52svh] opacity-30 lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[58%] lg:opacity-100" delay={150}>
            <Image
              src="/images/product/mylift-hero.png"
              alt="MYLIFT 본체, 경사판, 리모컨"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              quality={90}
              className="float-slow object-contain object-center p-4 lg:object-[80%_45%] lg:p-10"
            />
          </Reveal>
        }
      >
        <Reveal className="mt-8 max-w-md" delay={120}>
          <StatRow
            light
            cols={2}
            items={[
              { value: "20초", label: "휠 교체 시간" },
              { value: "255kg", label: "최대 하중" },
              { value: "10건", label: "지식재산" },
              { value: "2026.10", label: "시제품 완성" },
            ]}
          />
        </Reveal>
      </HeroPanel>

      {/* 5. 문의 */}
      <HeroPanel
        index={5}
        image={{ src: "/images/activity/act-104-hq.jpg", alt: "재도전 마인드업 힐링캠프 단체 사진", position: "50% 30%" }}
        label="문의"
        title={
          <>
            MYLIFT 도입·협력·시범사업,{" "}
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
      </HeroPanel>
    </>
  );
}
