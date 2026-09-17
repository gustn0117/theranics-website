import type { Metadata } from "next";
import Image from "next/image";
import { Placeholder } from "@/components/Placeholder";
import { ButtonLink, PhotoHero, SectionHeading } from "@/components/ui";
import { comparison, customerValues, features, ipSummary, lineup, mylift2Features, overseas, problems, usageSteps } from "@/data/products";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { PositioningChart } from "@/components/PositioningChart";

export const metadata: Metadata = {
  title: "Products · MYLIFT 마이리프트",
  description:
    "휠체어 휠을 쉽게 교체하여 자택 출입 시 20초 만에 안전과 청결을 해결하는 전동 리프트 MYLIFT. 시저형 2,500N 액추에이터, 받침용 헤더, 접이식 구조, 기본형·고급형 라인업.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero: 사진 배경, 왼쪽 여백에 텍스트 */}
      <PhotoHero
        minH="lg:min-h-[100svh]"
        image={{ src: "/images/photo/hero-doorway-hq.jpg", alt: "현관에서 MYLIFT 위에 올라 휠을 교체하는 휠체어 사용자", position: "72% 50%" }}
        logo={<Image src="/images/logo/mylift-en.png" alt="MYLIFT" width={1021} height={497} className="mb-6 h-20 w-auto sm:h-24" preload />}
        title={
          <>
            휠을 바꾸면,{" "}
            <br className="hidden lg:inline" />
            집에 들어가는 데{" "}
            <br className="hidden lg:inline" />
            20초면 됩니다.
          </>
        }
        description={
          <>
            휠체어 휠을 쉽게 교체하여 자택 출입 시{" "}
            <br className="hidden lg:inline" />
            안전과 청결을 해결하는 세계 최초 휠 교체용 전동 리프트.
          </>
        }
        footer={
          <dl className="flex items-stretch gap-8 border-t border-ink/20 pt-6">
            {[
              ["20초", "휠 교체 시간"],
              ["255kg", "최대 하중"],
            ].map(([v, l], i) => (
              <div key={l} className={i > 0 ? "border-l border-ink/20 pl-8" : ""}>
                <dd className="display text-3xl sm:text-4xl">{v}</dd>
                <dt className="mt-1 text-sm text-ink-soft">{l}</dt>
              </div>
            ))}
          </dl>
        }
      >
        <ButtonLink href="#lineup">라인업 보기</ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          도입 문의
        </ButtonLink>
      </PhotoHero>

      {/* 문제 1: 국내 */}
      <section className="screen relative isolate overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Parallax>
            <Image src="/images/photo/tile-dirty-hq.jpg" alt="" fill sizes="100vw" quality={90} className="object-cover opacity-40" />
          </Parallax>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
        </div>
        <div className="container-x relative py-16 lg:py-12">
          <SectionHeading
            light
            title={<>바퀴에 묻은 오염물에서{" "}<br className="hidden lg:inline" /> 시작되는 사회적 비용</>}
            description="휠체어 사용자들은 귀가 시 바닥생활과 집안 오염이 싫어서 2개의 휠체어를 사용합니다. 옮겨타는 순간이 곧 낙상 발생점입니다."
          />
          <Reveal as="ul" stagger className="mt-10 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((p) => (
              <li key={p.title} className="bg-ink">
                <div className={cn("zoom-img relative aspect-[4/3]", p.contain && "bg-sky-soft")}>
                  <Image src={p.image} alt={p.title} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" quality={90} className={p.contain ? "object-contain p-6" : "object-cover"} />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-extrabold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-[1.75] text-white/70">{p.desc}</p>
                </div>
              </li>
            ))}
          </Reveal>
          <p className="mt-8 border-l-4 border-lime pl-5 text-lg font-bold sm:text-xl">
            낙상사고 + 호흡기 질환 + 휠체어 중복수급 = 건강보험·민간보험으로 확산되는 사회적 비용
          </p>
        </div>
      </section>

      {/* 문제 2: 해외 */}
      <section className="screen relative isolate overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Parallax>
            <Image src="/images/photo/hero-doorway-hq.jpg" alt="" fill sizes="100vw" quality={90} className="object-cover opacity-25" />
          </Parallax>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
        </div>
        <div className="container-x relative py-16 lg:py-12">
          <SectionHeading light title="해외에서도 같은 문제" description={overseas.intro} />
          <Reveal as="ul" stagger className="mt-10 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {overseas.cases.map((c, i) => (
              <li key={c} className="bg-ink p-6 lg:p-8">
                <span className="display text-4xl text-lime">0{i + 1}</span>
                <p className="mt-3 text-lg font-bold">{c}</p>
              </li>
            ))}
          </Reveal>
          <p className="mt-8 text-[15px] text-white/70">신발을 벗지 않는 문화권에서도 휠 교체와 차량 탑승 시 마이리프트가 필요합니다.</p>
        </div>
      </section>

      {/* 아이디어 */}
      <section className="screen bg-white">
        <div className="container-x py-16 lg:py-12">
          <SectionHeading
            title="“바퀴 세척”이 아니라 “휠 교환”"
            description="전 세계 장애인 대부분이 사용하는 퀵릴리즈 휠체어의 휠이 원터치로 분리된다는 점에 착안했습니다. 마이리프트는 발상의 전환을 휠을 교환하는 데 두었습니다."
          />
          <Reveal as="ol" stagger className="mt-10 grid gap-px border border-ink bg-ink sm:grid-cols-3 lg:mt-12">
            {[
              { img: "qr-1", caption: "휠 가운데 버튼을 누르고 잡아당기면" },
              { img: "qr-2", caption: "쉽게 분리됩니다" },
              { img: "qr-3", caption: "장착 시 버튼을 누른 채 끼워주세요" },
            ].map((s, i) => (
              <li key={s.img} className="bg-white">
                <div className="zoom-img">
                  <Image
                    src={`/images/photo/${s.img}.jpg`}
                    alt={s.caption}
                    width={1200}
                    height={677}
                    quality={90}
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
                <div className="flex items-baseline gap-4 px-5 py-5 sm:px-6 sm:py-6">
                  <span className="display shrink-0 text-2xl text-lime-deep sm:text-3xl">0{i + 1}</span>
                  <p className="text-[15px] font-bold leading-snug sm:text-base">{s.caption}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 사용 방법 */}
      <section className="screen bg-paper">
        <div className="container-x py-16 lg:py-12">
          <SectionHeading title="외출에서 돌아와 집에 들어가기까지, 20초" description="레일에 올라 뒷바퀴만 들어올리고 휠을 바꾸면 끝입니다. 외출은 역순입니다." />
          <Reveal className="mt-10" delay={100}>
            <Image
              src="/images/product/usage-steps.png"
              alt="외출을 마치고 레일로 이동, 뒷바퀴만 리프트, 원터치 휠 분리, 실내용 휠 교체, 집 안으로 이동"
              width={2400}
              height={445}
              className="h-auto w-full"
              sizes="100vw"
            />
          </Reveal>
          <Reveal as="ol" stagger className="mt-8 grid divide-y divide-line border-t border-ink sm:grid-cols-5 sm:divide-x sm:divide-y-0">
            {usageSteps.map((s) => (
              <li key={s.no} className="py-6 sm:px-5 sm:py-8 first:sm:pl-0">
                <span className="display text-3xl text-lime-deep">{s.no}</span>
                <p className="mt-2 font-bold">{s.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 핵심 기능 */}
      <section className="screen bg-paper">
        <div className="grid lg:grid-cols-2">
          <Reveal className="relative min-h-[360px] lg:min-h-0">
            <Image
              src="/images/product/lift-up-ramps.png"
              alt="리프트 업 상태의 MYLIFT 본체와 경사판, 휴대용 충전지"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain p-8 lg:p-16"
            />
          </Reveal>
          <div className="container-x flex flex-col justify-center py-20 lg:max-w-none lg:py-28 lg:pl-0">
            <SectionHeading size="sm" label="핵심 역량" title={<>2,500N 액추에이터로 255kg까지<br className="hidden lg:inline" /> 들어올리는 시저형 리프트</>} />
            <Reveal as="dl" stagger className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="bg-white p-6">
                  <dt className="text-xs font-bold text-sky">{f.label}</dt>
                  <dd className="display mt-1 text-3xl">{f.value}</dd>
                  <dd className="mt-2 font-bold">{f.title}</dd>
                  <dd className="mt-1 text-sm leading-[1.7] text-ink-soft">{f.desc}</dd>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 라인업 */}
      <section id="lineup" className="screen scroll-mt-20 bg-white">
        <div className="container-x py-16 lg:py-12">
          <SectionHeading
            label="라인업"
            title="소비자에게 폭넓은 선택권"
            description="기능, 옵션, 가격을 선택할 수 있습니다. 건강보험공단 급여제품 등록 시 자기부담금 9만원 또는 무료."
          />
          <Reveal stagger className="mt-12 grid gap-px border border-ink bg-ink lg:grid-cols-3">
            {lineup.map((p) => (
              <article key={`${p.model}-${p.name}`} className="flex flex-col bg-white">
                <div className={cn("zoom-img relative aspect-[4/3]", p.accent)}>
                  <Image src={p.image} alt={`${p.model} ${p.name}`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-contain p-8" />
                  {p.highlight && <span className="absolute left-0 top-0 bg-ink px-3 py-1.5 text-xs font-bold text-white">대표 모델</span>}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-bold text-lime-deep">{p.model}</p>
                  <h3 className="display mt-1 text-3xl">{p.name}</h3>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-ink-soft">
                    {p.tags.map((t) => (
                      <li key={t} className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 bg-lime" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 flex-1 text-sm leading-[1.75] text-ink-soft">{p.desc}</p>
                  <div className="mt-6 flex items-end justify-between border-t border-ink pt-4">
                    <div>
                      <p className="text-xs font-semibold text-ink-soft">판매가</p>
                      <p className="display text-3xl">{p.price}</p>
                    </div>
                    <p className="text-sm font-bold">{p.release}</p>
                  </div>
                </div>
              </article>
            ))}
          </Reveal>
          <p className="mt-5 text-sm text-ink-soft">금융할부 · 장기렌탈 가능. 낙상사고, 호흡기 질환, 휠체어 중복구입 방지로 정부와 보험사 비용을 절약합니다.</p>

        </div>
      </section>

      {/* 고객가치 제안 */}
      <section className="screen bg-lime-soft">
        <div className="container-x py-16 lg:py-12">
          <SectionHeading title="마이리프트가 바꾸는 여섯 가지" description="휠체어 사용자, 가족, 그리고 사회가 함께 얻는 가치입니다." />
          <Reveal as="ol" stagger className="mt-12 grid gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-3">
            {customerValues.map((v, i) => (
              <li key={v.title} className="bg-lime-soft p-6">
                <span className="display text-3xl text-lime-deep">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-extrabold">{v.title}</h3>
                <p className="mt-2 text-sm leading-[1.75] text-ink-soft">{v.desc}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 구조 및 사이즈: 스펙 시트 */}
      <section className="screen bg-paper">
        <div className="container-x py-16 lg:py-12">
          <SectionHeading label="구조 및 사이즈" title={<>접으면 500×600,<br className="hidden lg:inline" /> 펼치면 700×1,100</>} />
          <Reveal stagger className="mt-12 grid gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: "/images/product/view-66.png", w: 1920, h: 1173, t: "Rail & Slope Folded", n: "500", u: "× 600 mm" },
              { src: "/images/product/view-67.png", w: 886, h: 886, t: "Rail & Slope Unfold", n: "700", u: "× 1,100 mm" },
              { src: "/images/product/view-63.png", w: 1920, h: 1018, t: "Lift Up", n: "470", u: "mm (400)" },
              { src: "/images/product/view-64.png", w: 1920, h: 1174, t: "Lift Down", n: "100", u: "mm (70)" },
            ].map((f) => (
              <figure key={f.t} className="zoom-img flex flex-col bg-white p-5">
                <Image src={f.src} alt={`${f.t} ${f.n} ${f.u}`} width={f.w} height={f.h} className="mx-auto h-40 w-auto object-contain sm:h-48" />
                <figcaption className="mt-5 border-t border-ink pt-4">
                  <span className="block text-xs font-bold text-ink-soft">{f.t}</span>
                  <span className="display mt-1 block text-4xl">
                    {f.n}
                    <span className="ml-1 text-base font-bold text-ink-soft">{f.u}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </Reveal>
          <div className="mt-10 grid gap-8 lg:grid-cols-[7fr_5fr]">
            <Reveal as="ul" stagger className="border-t border-ink">
              {[
                "레일끼리 간격은 사용자의 휠체어 사이즈에 맞춰 자유롭게 늘이고 줄일 수 있습니다.",
                "펼쳤을 때 700×1,100mm, 접었을 때 500×600mm로 박스 부피를 줄여 적재, 납품, 설치, A/S 수거, 수출 시 용이합니다.",
                "레일은 탈부착식입니다. 발 받침대가 지면에서 130mm 이상인 사용자는 레일을 빼고 써서 현관 공간을 더 확보할 수 있습니다.",
                "본체 높이는 120mm로 낮아 1인 가구 4~8py 현관의 50%, 20~30py 아파트 현관의 25%만 차지합니다. 통로에 설치해도 무방합니다.",
              ].map((t) => (
                <li key={t} className="border-b border-line py-4 text-[15px] leading-[1.75] text-ink-soft">
                  {t}
                </li>
              ))}
            </Reveal>
            <Reveal className="flex items-center gap-5 border border-ink bg-white p-5" delay={150}>
              <Image src="/images/product/view-115.png" alt="현관 설치 평면도" width={849} height={1183} className="h-32 w-auto" />
              <p className="text-sm leading-[1.7] text-ink-soft">
                <strong className="display block text-2xl text-ink">현관 공간이 협소하지 않을까?</strong>
                <span className="mt-2 block">4py 원룸 · 8~12py 임대아파트 기준 50%, 20~30py 구축아파트 기준 25% 차지. 본체만 사용해도 무방합니다.</span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 리모컨: 화면 가득 다크 구간 */}
      <section className="screen relative isolate overflow-hidden bg-ink text-white">
        <div className="container-x grid gap-12 py-16 lg:py-12 lg:grid-cols-[5fr_7fr] lg:items-center">
          <div>
            <SectionHeading
              light
              label="리모컨"
              title={<>버튼 넷,<br className="hidden lg:inline" /> 그중 하나면 충분합니다</>}
              description="셋팅 버튼으로 원하는 높이를 저장하면 이후에는 POWER 버튼만으로 작동합니다. POWER를 누르면 전원 ON과 동시에 UP, 한 번 더 누르면 DOWN 후 전원 OFF."
            />
            <Reveal as="dl" stagger className="mt-10 grid grid-cols-2 gap-px border border-white/20 bg-white/20">
              {[
                ["POWER", "전원 온/오프"],
                ["UP", "휠체어를 들어올림"],
                ["DOWN", "휠체어를 들어내림"],
                ["SETTING", "원하는 높이 저장"],
              ].map(([k, v]) => (
                <div key={k} className="bg-ink p-5">
                  <dt className="display text-2xl text-lime">{k}</dt>
                  <dd className="mt-1 text-sm text-white/70">{v}</dd>
                </div>
              ))}
            </Reveal>
            <p className="mt-5 text-sm text-white/60">현관 거울이나 신발장에 붙이는 홀더에 꽂은 채로 버튼만 눌러 사용. 100×50×12mm.</p>
          </div>
          <Reveal stagger className="flex items-end justify-center gap-3 overflow-hidden sm:gap-6 lg:justify-end">
            <Image src="/images/product/remote-yellow.png" alt="기본형 리모컨 옐로우" width={384} height={757} className="h-44 w-auto sm:h-72 lg:h-[42vh]" />
            <Image src="/images/product/remote-blue-large.png" alt="기본형 리모컨 블루" width={562} height={1111} className="h-60 w-auto sm:h-96 lg:h-[58vh]" />
            <Image src="/images/product/remote-green.png" alt="기본형 리모컨 그린" width={383} height={760} className="h-44 w-auto sm:h-72 lg:h-[42vh]" />
          </Reveal>
        </div>
      </section>

      {/* MYLIFT 2 */}
      <section className="screen bg-sky-soft">
        <div className="container-x py-16 lg:py-12">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:items-center">
            <div>
              <Image src="/images/logo/mylift2.png" alt="MYLIFT 2" width={1260} height={164} className="h-10 w-auto" />
              <SectionHeading
                className="mt-8"
                label="제품 고도화"
                title="“Less is More”에서 “딥테크”로"
                description="단순화된 마이리프트로 시장을 선점한 뒤, 앱 연동·센서·음성·유압 방식을 적용한 마이리프트2로 고도화합니다. 구독형 부가 서비스와 소모품 판매로 고객 Lock-in 효과를 가진 서비스 기업으로 진화합니다."
              />
            </div>
            <div className="grid grid-cols-[1fr_auto] items-end gap-6">
              <Image src="/images/product/mylift2-tower.png" alt="앞바퀴 청소 타워가 결합된 MYLIFT 2" width={1920} height={1380} className="h-auto w-full" />
              <Image src="/images/product/app-phone.png" alt="MYLIFT 연동 앱 화면" width={336} height={750} className="h-52 w-auto sm:h-80" />
            </div>
          </div>
          <Reveal stagger className="mt-14 grid gap-px border-t border-ink bg-line md:grid-cols-3">
            {mylift2Features.map((f) => (
              <div key={f.title} className="bg-sky-soft py-6 md:pr-8">
                <h3 className="text-lg font-extrabold">{f.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-soft">
                  {f.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime-deep" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
          <dl className="mt-8 grid gap-px border border-ink/15 bg-ink/15 text-sm sm:grid-cols-3">
            {[
              ["소모품 구독", "세척 소모품(롤브러시·헤파필터) 정기 배송"],
              ["배터리 교체", "18개월 주기 (급여 가능)"],
              ["본체 재구매", "6년 주기 → 반복 매출 · LTV 확대"],
            ].map(([k, v]) => (
              <div key={k} className="bg-white p-5">
                <dt className="font-bold">{k}</dt>
                <dd className="mt-1 text-ink-soft">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 비교 */}
      <section className="screen bg-white">
        <div className="container-x py-16 lg:py-12">
          <SectionHeading
            label="경쟁 비교"
            title={<>안전과 청결을 동시에 만족하는<br className="hidden lg:inline" /> 유일한 포지셔닝</>}
            description="직접 경쟁사인 휠크린은 수입 중지, 휠스터킴은 단종되었습니다. 마이리프트는 낙상(안전)과 오염(청결)을 동시에 해결합니다."
          />
          <div className="mt-12">
            <PositioningChart />
          </div>
          <div className="mt-8 overflow-x-auto border border-ink">
            <table className="w-full min-w-[840px] border-collapse text-sm">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="w-24 px-4 py-3 text-left font-bold">구분</th>
                  {comparison.columns.map((c, i) => (
                    <th key={c} className={cn("px-4 py-3 text-left font-bold", i === comparison.columns.length - 1 && "bg-lime text-ink")}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((r) => (
                  <tr key={r.label} className="border-t border-line align-top">
                    <th className="bg-paper px-4 py-3 text-left font-bold">{r.label}</th>
                    {r.cells.map((cell, i) => (
                      <td key={i} className={cn("px-4 py-3 leading-[1.7] text-ink-soft", i === r.cells.length - 1 && "bg-lime-soft font-semibold text-ink")}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* IP */}
      <section className="screen bg-lime">
        <div className="container-x grid gap-12 py-16 lg:py-12 lg:grid-cols-[5fr_7fr]">
          <div>
            <SectionHeading size="sm" label="지식재산" title={<>특허·디자인·상표와 PCT로<br className="hidden lg:inline" /> 세운 다층 진입장벽</>} />
            <p className="display mt-10 text-7xl sm:text-8xl">10건</p>
            <p className="mt-3 text-sm font-semibold text-ink/75">마이리프트 IP: 특허출원 3건 · PCT출원 1건 · 디자인출원 2건 · 국내 상표출원 2건 · 해외 상표출원 2건</p>
            <p className="mt-5 border-t border-ink/30 pt-4 text-sm text-ink/75">
              연관 IP 14건 (마이프렌드 11건 · 마이스포츠 3건): 특허등록 3건 / 특허출원 1건, 상표등록 5건 / 상표출원 2건, 디자인등록 3건
            </p>
          </div>
          <Reveal as="ul" stagger className="grid gap-px border border-ink/30 bg-ink/30 sm:grid-cols-2">
            {ipSummary.map((ip) => (
              <li key={ip.title} className="bg-lime p-6">
                <p className="display text-4xl">{ip.count}</p>
                <p className="mt-3 font-bold">{ip.title}</p>
                <p className="mt-1 text-sm text-ink/75">{ip.desc}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 시연 영상 + CTA */}
      <section className="bg-white">
        <div className="container-x py-16 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:items-center">
            <SectionHeading
              label="개발 로드맵"
              title="2026년 10월 시제품 완성"
              description="디자인·설계 확정과 H/W 개발을 마쳤습니다. 시제품 완성 뒤 제품 테스트, 촬영·홍보 제작, 금형 제작 순으로 진행됩니다."
            />
            <Placeholder label="제품 시연 영상 영역" hint="시제품 촬영 후 영상으로 교체" className="aspect-video w-full border border-ink" />
          </div>
          <div className="mt-12 flex flex-wrap gap-3 border-t border-ink pt-8">
            <ButtonLink href="/contact" variant="dark">
              MYLIFT 도입 문의하기
            </ButtonLink>
            <ButtonLink href="/about" variant="outline">
              회사소개
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
