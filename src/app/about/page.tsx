import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, Lines, SectionHeading, StatRow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PhotoSlider } from "@/components/PhotoSlider";
import { CertGallery } from "@/components/CertGallery";
import {
  activities,
  certificates,
  coreValues,
  globalHow,
  globalSteps,
  history,
  marketNotes,
  marketStats,
  missionParagraphs,
  productFamily,
  team,
} from "@/data/about";

export const metadata: Metadata = {
  title: "About us · 회사소개",
  description:
    "(주)테라닉스의 소셜미션, 비전, 경영진, 주요 연혁과 인증 · 수상, 대외활동을 소개합니다. 국민의 건강 · 행복 · 안전지킴이를 비전으로 하는 예비사회적기업입니다.",
  alternates: { canonical: "/about" },
};

/** 사회적 기업가 소개(경영진) 구간 노출 여부 */
const SHOW_TEAM = false;

const vision = [
  { key: "건강", desc: "흙먼지와 실내 오염을 줄여 호흡기 질환을 낮추는 청결한 생활환경" },
  { key: "행복", desc: "외출과 귀가의 두려움을 없애 즐거운 사회참여를 돕는 일상" },
  { key: "안전", desc: "휠체어를 옮겨타지 않아 낙상사고를 근본적으로 방지하는 설계" },
];

export default function AboutPage() {
  const [ceo, ...members] = team;
  return (
    <>
      {/* 1. 소셜 미션 */}
      <section id="mission" className="screen bg-white">
        <div className="container-x grid gap-12 pb-16 pt-28 lg:grid-cols-[5fr_7fr] lg:items-center lg:py-12">
          <div>
            <SectionHeading
              size="sm"
              title={
                <>
                  (주)테라닉스는 교통약자의 이동과{" "}
                  <br className="hidden lg:inline" />
                  취약계층의 고용을 돕습니다
                </>
              }
            />
            <p className="mt-8 text-sm font-semibold text-ink-soft">‘국민의 건강, 행복, 안전지킴이’</p>
            <Reveal as="ul" stagger className="mt-3 border-t border-ink">
              {vision.map((v) => (
                <li key={v.key} className="grid grid-cols-[5rem_1fr] gap-4 border-b border-line py-5">
                  <span className="display text-3xl text-lime-deep">{v.key}</span>
                  <span className="pt-1 text-[15px] leading-[1.75] text-ink-soft">{v.desc}</span>
                </li>
              ))}
            </Reveal>
          </div>
          <Reveal className="prose-ko border-l-4 border-lime pl-6 text-[17px] leading-[1.9] text-ink sm:pl-10 sm:text-xl" delay={150}>
            {missionParagraphs.map((p) => (
              <p key={p}>
                <strong className="font-extrabold">(주)테라닉스</strong>
                {p.replace("(주)테라닉스", "")}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 2. 세 가지 약속 */}
      <section id="promise" className="screen bg-ink text-white">
        <div className="container-x py-16 lg:py-12">
          <SectionHeading light title="테라닉스의 세 가지 약속" description="제품 하나가 아니라, 사회적 약자의 하루를 바꾸는 일을 합니다." />
          <Reveal as="ul" stagger className="mt-10 grid gap-px bg-white/15 lg:grid-cols-3">
            {coreValues.map((v, i) => (
              <li key={v.title} className="bg-ink p-7 lg:p-10">
                <span className="display text-4xl text-lime lg:text-5xl">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display mt-5 text-2xl lg:text-3xl">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.85] text-white/75 lg:text-base">
                  <Lines text={v.body} />
                </p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 3. 회사 개요 */}
      <section id="company" className="screen bg-white">
        <div className="container-x py-16 lg:py-12">
          <SectionHeading
            className="max-w-none"
            title={
              <>
                200여개의 제품과 34건의 지식재산권을 만든{" "}
                <br className="hidden lg:inline" />
                제조 + 서비스 전문 기업
              </>
            }
            description={
              <>
                2023년 8월 경기도 의정부시 지식산업센터에서 법인을 설립했습니다. 장애인 이동 · 돌봄 플랫폼 ‘마이프렌드’에서 출발해 세계
                최초 휠 교체용 전동 보조기기 <span className="whitespace-nowrap">‘마이리프트’로</span> 피보팅했습니다.
              </>
            }
          />
          <Reveal className="mt-10" delay={100}>
            <StatRow
              items={[
                { value: "2023. 08", label: "법인 설립 · 경기도 의정부시 민락동" },
                { value: "34건", label: "보유 지식재산권 (특허 · 디자인 · 상표)" },
                { value: "50개사", label: "국내외 제조 협력사 네트워크" },
                { value: "200여 종", label: "디자인 · 설계 · 금형 · 양산 제품 제조 경력" },
              ]}
            />
          </Reveal>
          <Reveal as="dl" stagger className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3">
            {[
              ["예비사회적기업", "고용노동부 · 일자리 제공형 (2026. 12)"],
              ["소셜벤처기업", "중소벤처기업부 · 기술보증기금 판별 (2024. 05)"],
              ["사회적기업가 육성사업", "한국사회적기업진흥원 · 인큐베이팅 (2023. 02)"],
            ].map(([t, d]) => (
              <div key={t} className="bg-white p-6">
                <dt className="text-lg font-extrabold">{t}</dt>
                <dd className="mt-1 text-sm text-ink-soft">{d}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 4. 시장 */}
      <section id="market" className="screen bg-paper">
        <div className="container-x py-16 lg:py-12">
          <SectionHeading
            title={
              <>
                고령화와 함께 커지는 시장,{" "}
                <br className="hidden lg:inline" />
                국가가 이미 지불하는 수요
              </>
            }
            description="협회 회원 기반의 조직화된 수요와 건강보험공단 급여 제도 위에서 마이리프트를 시작합니다."
          />
          <Reveal className="mt-10" delay={100}>
            <StatRow items={marketStats} spread />
          </Reveal>
          <Reveal as="ul" stagger className="mt-6 space-y-1.5 text-[15px] text-ink-soft">
            {marketNotes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 5. 확장 전략 */}
      <section id="expansion" className="screen bg-white">
        <div className="container-x grid gap-12 py-16 lg:grid-cols-[7fr_5fr] lg:py-12">
          <div>
            <SectionHeading size="sm" title="마이리프트 단품을 넘어 유니버설 제조기업으로" />
            <Reveal as="ul" stagger className="mt-8 border-t border-ink">
              {productFamily.map((f) => (
                <li key={f.en} className="grid grid-cols-[8.5rem_minmax(0,1fr)] gap-4 border-b border-line py-4 sm:grid-cols-[10rem_minmax(0,1fr)]">
                  <div>
                    <p className="font-extrabold">{f.name}</p>
                    <p className="text-xs font-semibold text-ink-soft">{f.en}</p>
                  </div>
                  <p className="text-[15px] leading-[1.7] text-ink-soft">{f.desc}</p>
                </li>
              ))}
            </Reveal>
          </div>
          <div>
            <SectionHeading size="sm" title="신발을 벗는 문화권부터 순차 진출" />
            <Reveal as="ol" stagger className="mt-8 border-t border-ink">
              {globalSteps.map((g, i) => (
                <li key={g.step} className="grid grid-cols-[3rem_1fr] gap-3 border-b border-line py-4">
                  <span className="display text-2xl text-lime-deep">{i === 0 ? "—" : String(i).padStart(2, "0")}</span>
                  <div>
                    <p className="font-extrabold">{g.step}</p>
                    <p className="text-sm text-ink-soft">{g.desc}</p>
                  </div>
                </li>
              ))}
            </Reveal>
            <p className="mt-4 text-sm text-ink-soft">진출 방식: {globalHow}</p>
          </div>
        </div>
      </section>

      {/* 6. 경영진 (사회적 기업가 소개) — 클라이언트 요청으로 잠시 숨김. 다시 보이려면 SHOW_TEAM 을 true 로 */}
      {SHOW_TEAM && (
      <section id="team" className="screen bg-paper">
        <div className="container-x py-16 lg:py-12">
          <SectionHeading
            size="sm"
            title="사회적 기업가 소개"
            description="협력 및 자문 네트워크: 의료기 인증(GMP · ISO · FDA · CE), 국내외 마케팅(KIMES 등 전시회), 장애인 협회 협업, 액추에이터 제어 · 하드웨어 개발"
          />
          {/* 위: 대표 한 줄 / 아래: 나머지 두 명 */}
          <div className="mt-8 border border-ink">
            {/* 좁은 화면에서는 본문 줄이 너무 짧아지므로 사진을 위로 올려 한 단으로 쌓는다 */}
            <Reveal as="article" className="grid gap-px bg-ink sm:grid-cols-[240px_1fr]">
              <Image
                src={ceo.photo}
                alt={`${ceo.name} ${ceo.role}`}
                width={600}
                height={800}
                quality={90}
                className="aspect-[3/2] w-full bg-white object-cover object-[center_22%] sm:aspect-auto sm:h-full sm:object-top"
              />
              <div className="min-w-0 bg-white p-5 sm:p-6 lg:p-8">
                <p className="text-sm font-semibold text-ink-soft">{ceo.role}</p>
                <h3 className="display mt-1 text-4xl">{ceo.name}</h3>
                <p className="mt-3 text-sm font-semibold">{ceo.summary}</p>
                <ul className="mt-4 grid gap-1.5 text-sm leading-relaxed text-ink-soft sm:grid-cols-2 sm:gap-x-8">
                  {ceo.bullets.map((b) => (
                    <li key={b} className="border-t border-line pt-1.5">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal stagger className="grid gap-px border-t border-ink bg-ink sm:grid-cols-2">
              {/* minmax(0,1fr): 좁은 화면에서 텍스트 칸이 최소 너비로 화면을 밀어내지 않게 한다 */}
              {members.map((m) => (
                <article key={m.name} className="grid grid-cols-[96px_minmax(0,1fr)] gap-4 bg-white p-5 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-5 sm:p-6">
                  <Image src={m.photo} alt={`${m.name} ${m.role}`} width={600} height={800} quality={90} className="aspect-[3/4] w-full self-start object-cover object-top" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-ink-soft">{m.role}</p>
                    <h3 className="display mt-1 text-2xl">{m.name}</h3>
                    <p className="mt-2 text-[13px] font-semibold leading-snug">{m.summary}</p>
                    <ul className="mt-3 space-y-1 border-t border-line pt-2 text-[13px] leading-relaxed text-ink-soft">
                      {m.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </Reveal>
          </div>
        </div>
      </section>
      )}

      {/* 7. 주요 연혁: 스크롤에 따라 연도별로 나타남 */}
      <section id="history" className="bg-white">
        <div className="container-x py-16 lg:pt-32 lg:pb-24">
          <SectionHeading title="걸어온 길" description="2022년 장애인 세상의 만남에서 마이리프트 시제품 완성까지!" />
          <div className="mt-12 border-t border-ink">
            {history.map((group) => (
              <div key={group.year} className="grid border-b border-ink/20 py-8 md:grid-cols-[10rem_1fr] lg:grid-cols-[14rem_1fr] lg:py-12">
                <Reveal className="display text-5xl text-lime-deep md:sticky md:top-28 md:self-start lg:text-7xl">{group.year}</Reveal>
                <Reveal as="ol" stagger className="mt-6 md:mt-2">
                  {group.items.map((it) => (
                    <li key={`${it.date}-${it.title}`} className="grid gap-1 border-t border-line py-5 first:border-t-0 first:pt-0 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-6">
                      <span className="text-base font-bold text-ink-soft sm:text-lg">{it.date}</span>
                      <div>
                        <p className="text-xl font-bold leading-snug sm:text-2xl">{it.title}</p>
                        <p className="mt-1 text-[15px] text-ink-soft sm:text-base">{it.desc}</p>
                      </div>
                    </li>
                  ))}
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 인증 및 수상 */}
      <section id="awards" className="screen bg-paper">
        <div className="container-x py-16 lg:py-12">
          <SectionHeading size="sm" title="정부와 지자체가 검증한 사회적 기업" />
          <CertGallery items={certificates} />
        </div>
      </section>

      {/* 9. 대외 활동: 시간순 사진 슬라이드 */}
      <section id="activities" className="screen bg-ink text-white">
        <div className="pt-16 lg:pt-0">
          <div className="container-x pb-6 lg:hidden">
            <SectionHeading light size="sm" title="현장에서 시작한 문제, 현장과 함께 푸는 해법" />
          </div>
          <PhotoSlider items={activities} />
        </div>
        <div className="container-x flex flex-wrap gap-3 py-10 lg:hidden">
          <ButtonLink href="/products">MY LIFT 제품소개</ButtonLink>
          <ButtonLink href="/contact" variant="white">
            문의하기
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
