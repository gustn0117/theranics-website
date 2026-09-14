import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, PageHero, SectionHeading, Stat } from "@/components/ui";
import { activities, certificates, history, missionParagraphs, team } from "@/data/about";

export const metadata: Metadata = {
  title: "About us · 회사소개",
  description:
    "(주)테라닉스의 소셜미션, 비전, 경영진, 주요 연혁과 인증·수상, 대외활동을 소개합니다. 국민의 건강·행복·안전지킴이를 비전으로 하는 예비사회적기업입니다.",
  alternates: { canonical: "/about" },
};

const vision = [
  { key: "건강", en: "Health", desc: "흙먼지와 실내 오염을 줄여 호흡기 질환을 낮추는 청결한 생활환경" },
  { key: "행복", en: "Happiness", desc: "외출과 귀가의 두려움을 없애 즐거운 사회참여를 돕는 일상" },
  { key: "안전", en: "Safety", desc: "휠체어를 옮겨타지 않아 낙상사고를 근본적으로 방지하는 설계" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            국민 모두에게
            <br />
            보다 안전하고 풍요로운 삶을
          </>
        }
        description="예비사회적기업 (주)테라닉스가 ESG와 함께 합니다. 사회적 약자의 안전구현을 위한 제품과 서비스를 개발하고 제공합니다."
        image={{ src: "/images/illust/handshake.png", alt: "휠체어 사용자와 악수하는 일러스트" }}
      />

      {/* 소셜 미션 */}
      <section id="mission" className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Social Mission"
              title={
                <>
                  교통약자의 이동과
                  <br />
                  취약계층의 고용을 돕습니다
                </>
              }
            />
            <div className="mt-8 grid grid-cols-3 gap-3">
              {vision.map((v) => (
                <div key={v.key} className="rounded-2xl bg-lime-soft p-4 text-center">
                  <p className="text-xs font-bold tracking-widest text-lime-deep uppercase">{v.en}</p>
                  <p className="mt-1 text-xl font-extrabold">{v.key}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-ink-soft">비전: ‘국민의 건강, 행복, 안전지킴이’</p>
          </div>
          <div className="prose-ko rounded-3xl border border-line bg-mist p-7 text-[15px] leading-[1.9] text-ink-soft sm:p-10 sm:text-base">
            {missionParagraphs.map((p) => (
              <p key={p}>
                <strong className="font-bold text-ink">(주)테라닉스</strong>
                {p.replace("(주)테라닉스", "")}
              </p>
            ))}
          </div>
        </div>
        <div className="container-x mt-10 grid gap-4 sm:grid-cols-3">
          {vision.map((v) => (
            <div key={v.key} className="rounded-2xl border border-line p-6">
              <p className="text-lg font-extrabold">{v.key}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 회사 개요 */}
      <section id="company" className="bg-mist py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Company"
            title="제품 200여 개와 지식재산 34건을 만든 제조 전문 기업"
            description="2023년 8월 경기도 의정부시 지식산업센터에서 법인을 설립했습니다. 장애인 이동·돌봄 플랫폼 ‘마이프렌드’에서 출발해 세계 최초 휠 교체용 전동 리프트 ‘마이리프트’ 제조로 피보팅했습니다."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Stat value="2023.08" label="법인 설립 · 경기도 의정부" />
            <Stat value="34건" label="보유 지식재산권 (특허·디자인·상표)" />
            <Stat value="50개사" label="국내외 제조 협력사 네트워크" />
            <Stat value="200여 종" label="디자인·설계·금형·양산 제품" />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["예비사회적기업", "고용노동부 · 일자리 제공형 (2023.12)"],
              ["소셜벤처기업", "중소벤처기업부 · 기술보증기금 판별 (2024.05)"],
              ["사회적기업가 육성사업", "한국사회적기업진흥원 · 인큐베이팅 (2023.02)"],
            ].map(([t, d]) => (
              <div key={t} className="flex items-start gap-3 rounded-2xl bg-white p-5">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-lime" />
                <div>
                  <p className="font-bold">{t}</p>
                  <p className="text-sm text-ink-soft">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 경영진 */}
      <section id="team" className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Team" title="사회적 기업가 소개" description="협력 및 자문 네트워크: 의료기 인증(GMP·ISO·FDA·CE) · 국내외 마케팅(KIMES 등 전시회) · 장애인 협회 협업 · 액추에이터 제어·하드웨어 개발" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {team.map((m, i) => (
              <article
                key={m.name}
                className={i === 0 ? "rounded-3xl border border-lime bg-lime-soft p-6 lg:col-span-3 lg:grid lg:grid-cols-[220px_1fr] lg:gap-8" : "rounded-3xl border border-line p-6"}
              >
                <div className={i === 0 ? "mb-5 lg:mb-0" : "mb-5 flex items-center gap-4"}>
                  <Image
                    src={m.photo}
                    alt={`${m.name} ${m.role}`}
                    width={600}
                    height={800}
                    className={i === 0 ? "aspect-[3/4] w-40 rounded-2xl object-cover lg:w-full" : "h-20 w-20 rounded-2xl object-cover"}
                  />
                  {i !== 0 && (
                    <div>
                      <p className="text-xs font-bold tracking-widest text-lime-deep uppercase">{m.role}</p>
                      <h3 className="text-2xl font-extrabold">{m.name}</h3>
                    </div>
                  )}
                </div>
                <div>
                  {i === 0 && (
                    <>
                      <p className="text-xs font-bold tracking-widest text-lime-deep uppercase">{m.role}</p>
                      <h3 className="text-3xl font-extrabold">{m.name}</h3>
                    </>
                  )}
                  <p className="mt-2 text-sm font-semibold text-ink">{m.summary}</p>
                  <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-ink-soft">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/40" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 연혁 */}
      <section id="history" className="bg-ink py-20 text-white sm:py-28">
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="History"
            title="회사가 걸어온 길"
            description="2022년 사업의 만남에서 2026년 마이리프트 시제품 완성까지."
          />
          <div className="mt-12 space-y-12">
            {history.map((group) => (
              <div key={group.year} className="grid gap-6 md:grid-cols-[120px_1fr]">
                <div className="text-4xl font-extrabold tracking-tight text-lime md:sticky md:top-28 md:self-start">
                  {group.year}
                </div>
                <ol className="relative border-l border-white/15 pl-6">
                  {group.items.map((it) => (
                    <li key={`${it.date}-${it.title}`} className="relative pb-7 last:pb-0">
                      <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-lime ring-4 ring-ink" />
                      <p className="text-xs font-bold tracking-widest text-white/50">{it.date}</p>
                      <p className="mt-1 text-lg font-bold">{it.title}</p>
                      <p className="text-sm text-white/65">{it.desc}</p>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 인증 및 수상 */}
      <section id="awards" className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Certification & Awards" title="인증 및 수상" />
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
            {certificates.map((c) => (
              <li key={c.title} className="group">
                <div className="overflow-hidden rounded-xl border border-line bg-mist p-3">
                  <Image
                    src={c.image}
                    alt={`${c.year} ${c.title} ${c.org}`}
                    width={640}
                    height={900}
                    className="aspect-[3/4] w-full object-cover object-top shadow-sm transition group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-3 text-xs font-bold text-lime-deep">{c.year}</p>
                <p className="text-sm font-bold leading-snug">{c.title}</p>
                <p className="text-xs text-ink-soft">{c.org}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 대외 활동 */}
      <section id="activities" className="bg-mist py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Activities" title="대외 활동" description="장애인 협회, 지자체, 의회와 소통하며 현장의 문제에서 제품을 시작했습니다." />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a) => (
              <li key={a.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <Image
                  src={a.image}
                  alt={a.title}
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="p-5">
                  <p className="font-bold leading-snug">{a.title}</p>
                  <p className="mt-1 text-sm text-ink-soft">{a.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink href="/products">MYLIFT 제품소개</ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              문의하기
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
