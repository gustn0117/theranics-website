import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/config/site";

const values = [
  {
    title: "이동권 보장",
    en: "Mobility",
    body: "휠체어를 옮겨타지 않고 앉은 채 뒷바퀴만 교체해, 외출과 귀가의 두려움을 없앱니다.",
  },
  {
    title: "고용권 지원",
    en: "Employment",
    body: "취약계층의 고용을 도와 적극적인 경제활동과 자립을 지원하는 일자리 제공형 예비사회적기업입니다.",
  },
  {
    title: "안전과 청결",
    en: "Safety & Clean",
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
        eyebrow="Mobility Rights · 이동권"
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
        eyebrow="Employment Rights · 고용권"
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

      {/* 3. 기업 소개 */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Do things for other people!"
                title={
                  <>
                    국민의 건강·행복·안전지킴이,
                    <br />
                    예비사회적기업 (주)테라닉스
                  </>
                }
                description="교통약자의 이동을 도와 안전한 사회참여를 지원하고, 취약계층의 고용을 도와 적극적인 경제활동을 지원합니다. 사회적 약자를 돕는 솔루션으로 새로운 일자리를 만들어 갑니다."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/about">회사소개 보기</ButtonLink>
                <ButtonLink href="/contact" variant="outline">
                  문의하기
                </ButtonLink>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-lime-soft" />
              <Image
                src="/images/illust/isometric.png"
                alt="데이터와 사람을 잇는 테라닉스의 서비스 일러스트"
                width={837}
                height={468}
                className="h-auto w-full p-6 sm:p-10"
              />
            </div>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group rounded-2xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-lime hover:shadow-[0_20px_40px_rgba(153,212,32,0.15)]"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-lime-deep uppercase">
                  0{i + 1} · {v.en}
                </span>
                <h3 className="mt-3 text-xl font-extrabold">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MYLIFT 하이라이트 */}
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] translate-x-1/3 -translate-y-1/3 rounded-full bg-sky/25 blur-3xl" />
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Image
              src="/images/logo/mylift.png"
              alt="MYLIFT 마이리프트"
              width={1033}
              height={640}
              className="h-24 w-auto"
            />
            <SectionHeading
              light
              className="mt-8"
              eyebrow="Product"
              title={
                <>
                  옮겨타지 않고, 앉은 채로
                  <br />
                  20초 만에 실내 진입
                </>
              }
              description="시저형 리프트가 뒷바퀴만 살짝 들어올리면 퀵릴리즈 휠을 원터치로 분리해 실내용 휠로 교체합니다. 낙상 위험과 실내 오염을 한 번에 해결하는 세계 최초 휠 교체용 전동 리프트입니다."
            />
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
              {[
                ["20초", "휠 교체 시간"],
                ["255kg", "최대 하중"],
                ["10건", "마이리프트 IP"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-xs font-medium text-white/60">{l}</dt>
                  <dd className="mt-1 text-2xl font-extrabold tracking-tight text-lime sm:text-3xl">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <ButtonLink href="/products">제품 자세히 보기</ButtonLink>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/product/mylift-hero.png"
              alt="MYLIFT 본체, 경사판, 리모컨 렌더링"
              width={1920}
              height={1262}
              className="h-auto w-full drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* 5. 문의 CTA */}
      <section className="bg-lime-soft py-16 sm:py-20">
        <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              MYLIFT 도입·협력·시범사업 문의
            </h2>
            <p className="mt-2 text-ink-soft">
              장애인 협회, 지자체, 유통·제조 파트너와 함께 안전한 이동을 만듭니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="dark">
              Contact us
            </ButtonLink>
            <Link
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center rounded-full border border-ink/15 bg-white px-6 py-3 text-[15px] font-bold hover:border-ink"
            >
              {siteConfig.contact.email}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
