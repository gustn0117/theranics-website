import type { Metadata } from "next";
import Image from "next/image";
import { Placeholder } from "@/components/Placeholder";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { comparison, features, ipSummary, lineup, mylift2Features, problems, usageSteps } from "@/data/products";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Products · MYLIFT 마이리프트",
  description:
    "휠체어 휠을 쉽게 교체하여 자택 출입 시 20초 만에 안전과 청결을 해결하는 전동 리프트 MYLIFT. 시저형 2,500N 액추에이터, 받침용 헤더, 접이식 구조, 기본형·고급형 라인업.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f4f7fb] pt-28 sm:pt-36">
        <div className="container-x grid items-end gap-8 pb-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="pb-12 lg:pb-24">
            <Image src="/images/logo/mylift.png" alt="MYLIFT 마이리프트" width={1033} height={640} className="h-24 w-auto sm:h-28" preload />
            <p className="mt-6 text-sm font-bold tracking-widest text-sky uppercase">휠체어 전동 보조장치</p>
            <h1 className="mt-2 text-3xl font-extrabold leading-[1.2] tracking-tight sm:text-5xl">
              휠체어 휠을 쉽게 교체하여
              <br />
              자택 출입 시 <span className="text-lime-deep">20초 만에</span>
              <br />
              안전과 청결을 해결하는 전동 리프트
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              세계 최초 휠 교체용 전동 리프트. 휠체어를 옮겨타지 않고 앉은 채로 뒷바퀴만 살짝 들어올려 실내용 휠로 교체합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#lineup">라인업 보기</ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                도입 문의
              </ButtonLink>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/photo/hero-doorway.jpg"
              alt="현관에서 MYLIFT 위에 올라 휠을 교체하는 휠체어 사용자"
              width={2400}
              height={1350}
              className="h-auto w-full rounded-t-3xl object-cover shadow-2xl"
              sizes="(min-width: 1024px) 55vw, 100vw"
              preload
            />
          </div>
        </div>
      </section>

      {/* 문제 */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Background"
            title="바퀴에 묻은 오염물에서 시작되는 사회적 비용"
            description="휠체어 사용자들은 귀가 시 바닥생활과 집안 오염이 싫어서 2개의 휠체어를 사용합니다. 옮겨타는 순간이 곧 낙상 발생점입니다."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((p, i) => (
              <div key={p.title} className="overflow-hidden rounded-2xl border border-line bg-white">
                <div className={cn("aspect-[4/3] w-full", p.contain ? "bg-sky-soft p-6" : "bg-mist")}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={800}
                    height={600}
                    className={cn("h-full w-full", p.contain ? "object-contain" : "object-cover")}
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold text-lime-deep">0{i + 1}</p>
                  <h3 className="mt-1 text-lg font-extrabold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-[#3a1d1d] p-6 text-white sm:flex sm:items-center sm:justify-between">
            <p className="text-lg font-extrabold">낙상사고 + 호흡기 질환 + 휠체어 중복수급 = 사회적 비용 낭비</p>
            <p className="mt-2 text-sm text-white/70 sm:mt-0">건강보험 · 민간보험 비용으로 확산</p>
          </div>
        </div>
      </section>

      {/* 아이디어 & 사용법 */}
      <section className="bg-lime-soft py-20 sm:py-28">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow="Idea"
              title="“바퀴 세척”이 아니라 “휠 교환”"
              description="전 세계 장애인 대부분이 사용하는 퀵릴리즈 휠체어의 휠이 원터치로 쉽게 분리된다는 점에 착안했습니다. 마이리프트는 발상의 전환을 휠을 교환하는 데 두었습니다."
            />
            <div className="grid grid-cols-3 gap-3">
              {["qr-1", "qr-2", "qr-3"].map((n, i) => (
                <Image
                  key={n}
                  src={`/images/photo/${n}.jpg`}
                  alt={["휠 가운데 버튼을 누르고 잡아당기면", "쉽게 분리됩니다", "장착 시에는 버튼을 누른 채 끼워주세요"][i]}
                  width={1200}
                  height={677}
                  className="aspect-[16/10] w-full rounded-xl object-cover"
                />
              ))}
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl bg-white p-4 sm:p-8">
            <Image
              src="/images/product/usage-steps.png"
              alt="외출을 마치고 레일로 이동, 뒷바퀴만 리프트, 원터치 휠 분리, 실내용 휠 교체, 집 안으로 이동"
              width={2400}
              height={445}
              className="h-auto w-full"
              sizes="100vw"
            />
            <ol className="mt-6 grid gap-4 sm:grid-cols-5">
              {usageSteps.map((s) => (
                <li key={s.no} className="border-t-2 border-lime pt-3">
                  <p className="text-xs font-extrabold text-lime-deep">STEP {s.no}</p>
                  <p className="mt-1 font-bold">{s.title}</p>
                  <p className="mt-1 text-sm text-ink-soft">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 핵심 기능 */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="/images/product/lift-up-ramps.png"
              alt="리프트 업 상태의 MYLIFT 본체와 경사판, 휴대용 충전지"
              width={1920}
              height={1279}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="Core Competence" title="2,500N 액추에이터로 255kg까지 들어올리는 시저형 리프트 설계" />
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="rounded-2xl border border-line p-5">
                  <dt className="text-xs font-bold tracking-widest text-sky uppercase">{f.label}</dt>
                  <dd className="mt-1 text-2xl font-extrabold tracking-tight">{f.value}</dd>
                  <dd className="mt-1 font-bold">{f.title}</dd>
                  <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{f.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 라인업 */}
      <section id="lineup" className="scroll-mt-24 bg-mist py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Lineup"
            title="소비자에게 폭넓은 선택권"
            description="기능, 옵션, 가격을 선택할 수 있습니다. 건강보험공단 급여제품 등록 시 자기부담금 9만원 또는 무료."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {lineup.map((p) => (
              <article
                key={`${p.model}-${p.name}`}
                className={cn(
                  "flex flex-col overflow-hidden rounded-3xl border bg-white",
                  p.highlight ? "border-lime shadow-[0_20px_50px_rgba(153,212,32,0.2)]" : "border-line",
                )}
              >
                <div className={cn("flex aspect-[4/3] items-center justify-center p-6", p.accent)}>
                  <Image src={p.image} alt={`${p.model} ${p.name}`} width={1920} height={1262} className="h-full w-full object-contain drop-shadow-xl" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold tracking-widest text-lime-deep uppercase">{p.model}</p>
                  <h3 className="mt-1 text-2xl font-extrabold">{p.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-ink-soft">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{p.desc}</p>
                  <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
                    <div>
                      <p className="text-xs text-ink-soft">판매가</p>
                      <p className="text-2xl font-extrabold">{p.price}</p>
                    </div>
                    <p className="rounded-full bg-ink px-3 py-1 text-xs font-bold text-white">{p.release}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-soft">
            금융할부 · 장기렌탈 가능. 낙상사고, 호흡기 질환, 휠체어 중복구입 방지로 정부와 보험사 비용을 절약합니다.
          </p>
        </div>
      </section>

      {/* 구조 및 사이즈 */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Structure & Size" title="제품 구조 및 참고용 사이즈" />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid grid-cols-2 gap-4">
              <figure className="rounded-2xl bg-mist p-4">
                <Image src="/images/product/view-66.png" alt="Rail & Slope Folded W500×L600mm" width={1920} height={1173} className="mx-auto h-56 w-auto object-contain" />
                <figcaption className="mt-3 text-center text-sm font-bold">
                  Rail & Slope Folded
                  <span className="block text-xs font-medium text-ink-soft">W500 × L600mm</span>
                </figcaption>
              </figure>
              <figure className="rounded-2xl bg-mist p-4">
                <Image src="/images/product/view-67.png" alt="Rail & Slope Unfold W700×L1100mm" width={886} height={886} className="mx-auto h-56 w-auto object-contain" />
                <figcaption className="mt-3 text-center text-sm font-bold">
                  Rail & Slope Unfold
                  <span className="block text-xs font-medium text-ink-soft">W700 × L1,100mm</span>
                </figcaption>
              </figure>
              <figure className="rounded-2xl bg-mist p-4">
                <Image src="/images/product/view-63.png" alt="Lift Up H470(400)mm" width={1920} height={1018} className="mx-auto h-40 w-auto object-contain" />
                <figcaption className="mt-3 text-center text-sm font-bold">
                  Lift Up<span className="block text-xs font-medium text-ink-soft">H470 (400) mm</span>
                </figcaption>
              </figure>
              <figure className="rounded-2xl bg-mist p-4">
                <Image src="/images/product/view-64.png" alt="Lift Down H100(70)mm" width={1920} height={1174} className="mx-auto h-40 w-auto object-contain" />
                <figcaption className="mt-3 text-center text-sm font-bold">
                  Lift Down<span className="block text-xs font-medium text-ink-soft">H100 (70) mm</span>
                </figcaption>
              </figure>
            </div>
            <div className="space-y-4">
              {[
                "레일끼리 간격은 사용자의 휠체어 사이즈에 맞춰 자유롭게 늘이고 줄일 수 있습니다.",
                "제품을 모두 펼쳤을 때 700×1,100mm, 접었을 때 500×600mm로 박스 부피를 줄여 적재, 납품, 설치, A/S 수거, 수출 시 용이하게 디자인했습니다.",
                "레일은 탈부착식으로 휠체어 발 받침대가 지면으로부터 130mm 이상인 사용자는 레일을 제거 후 사용해 현관 공간을 더욱 확보할 수 있습니다.",
                "본체 높이는 120mm로 낮고, 1인 가구 4~8py 기준 현관의 50%, 20~30py 아파트 기준 25%만 차지합니다. 현관이 아닌 통로에 설치해도 무방합니다.",
              ].map((t) => (
                <p key={t} className="flex gap-3 rounded-2xl border border-line p-4 text-sm leading-relaxed text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                  {t}
                </p>
              ))}
              <div className="flex items-center gap-4 rounded-2xl bg-sky-soft p-4">
                <Image src="/images/product/view-115.png" alt="현관 설치 평면도" width={849} height={1183} className="h-28 w-auto rounded-lg" />
                <p className="text-sm leading-relaxed text-ink-soft">
                  <strong className="text-ink">현관 공간이 협소하지 않은가?</strong>
                  <br />
                  4py 원룸 · 8~12py 임대아파트 기준 50%, 20~30py 구축아파트 기준 25% 차지. 본체만 사용해도 무방합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 리모컨 */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              light
              eyebrow="Remote"
              title="사용자를 배려한 직관형 리모컨"
              description="각 버튼의 시인성을 강조한 픽토그램. 셋팅 버튼으로 원하는 높이를 저장하면 이후에는 POWER 버튼만으로 작동합니다. (POWER를 누르면 전원 ON과 동시에 UP, 한 번 더 누르면 DOWN 후 전원 OFF)"
            />
            <dl className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["POWER", "전원 온/오프"],
                ["UP", "휠체어를 들어올림"],
                ["DOWN", "휠체어를 들어내림"],
                ["SETTING", "원하는 높이 저장"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-white/15 p-4">
                  <dt className="text-lg font-extrabold text-lime">{k}</dt>
                  <dd className="text-sm text-white/70">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-white/60">현관 거울이나 신발장에 붙이는 홀더로 부착된 상태에서 버튼만 눌러 사용 가능. 100×50×12mm.</p>
          </div>
          <div className="flex items-end justify-center gap-3 sm:gap-8">
            <Image src="/images/product/remote-yellow.png" alt="기본형 리모컨 옐로우" width={384} height={757} className="h-44 w-auto sm:h-72" />
            <Image src="/images/product/remote-blue-large.png" alt="기본형 리모컨 블루" width={562} height={1111} className="h-60 w-auto sm:h-96" />
            <Image src="/images/product/remote-green.png" alt="기본형 리모컨 그린" width={383} height={760} className="h-44 w-auto sm:h-72" />
          </div>
        </div>
      </section>

      {/* MYLIFT 2 */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <Image src="/images/logo/mylift2.png" alt="MYLIFT 2" width={1260} height={164} className="h-10 w-auto" />
              <SectionHeading
                className="mt-6"
                eyebrow="Product Advancement"
                title="“Less is More”에서 “딥테크”로"
                description="장애인들의 니즈에 맞게 단순화된 마이리프트로 시장을 선점한 뒤, 앱 연동·센서·음성·유압 방식을 적용한 마이리프트2로 고도화합니다. 구독형 부가 서비스와 소모품 판매로 고객 Lock-in 효과를 가진 서비스 기업으로 진화합니다."
              />
            </div>
            <div className="grid grid-cols-[1fr_auto] items-center gap-6 rounded-3xl bg-sky-soft p-6">
              <Image src="/images/product/mylift2-tower.png" alt="앞바퀴 청소 타워가 결합된 MYLIFT 2" width={1920} height={1380} className="h-auto w-full" />
              <Image src="/images/product/app-phone.png" alt="MYLIFT 연동 앱 화면" width={336} height={750} className="h-56 w-auto sm:h-72" />
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {mylift2Features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-line p-6">
                <h3 className="font-extrabold">{f.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink-soft">
                  {f.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lime-deep" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl bg-mist p-5 text-sm text-ink-soft">
            <span className="font-bold text-ink">구독 선택</span>
            <span>세척 소모품(롤브러시·헤파필터) 정기 배송</span>
            <span className="text-line">|</span>
            <span>배터리 교체 · 18개월 주기 (급여 가능)</span>
            <span className="text-line">|</span>
            <span>본체 재구매(6년)</span>
          </div>
        </div>
      </section>

      {/* 비교 */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Comparison"
            title="안전과 청결을 동시에 만족하는 유일한 포지셔닝"
            description="직접 경쟁사: 휠크린은 수입 중지, 휠스터킴은 단종. 마이리프트는 낙상(안전)과 오염(청결)을 동시에 해결합니다."
          />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line bg-white">
            <table className="w-full min-w-[820px] border-collapse text-sm">
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
                    <th className="bg-mist px-4 py-3 text-left font-bold">{r.label}</th>
                    {r.cells.map((cell, i) => (
                      <td key={i} className={cn("px-4 py-3 leading-relaxed text-ink-soft", i === r.cells.length - 1 && "bg-lime-soft font-semibold text-ink")}>
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
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Intellectual Property" title="특허·디자인·상표와 PCT 해외출원으로 세운 다층 진입장벽" />
            <div className="mt-8 rounded-3xl bg-ink p-8 text-white">
              <p className="text-sm font-bold text-white/60">마이리프트 IP</p>
              <p className="mt-1 text-5xl font-extrabold tracking-tight text-lime">10건</p>
              <p className="mt-3 text-sm text-white/70">특허출원 3건 · PCT출원 1건 · 디자인출원 2건 · 국내 상표출원 2건 · 해외 상표출원 2건</p>
              <p className="mt-4 border-t border-white/15 pt-4 text-xs text-white/60">
                연관 IP 14건 (마이프렌드 11건 · 마이스포츠 3건): 특허등록 3건 / 특허출원 1건, 상표등록 5건 / 상표출원 2건, 디자인등록 3건
              </p>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {ipSummary.map((ip) => (
              <li key={ip.title} className="rounded-2xl border border-line p-6">
                <p className="text-3xl font-extrabold text-lime-deep">{ip.count}</p>
                <p className="mt-2 font-bold">{ip.title}</p>
                <p className="mt-1 text-sm text-ink-soft">{ip.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 시연 영상 + CTA */}
      <section className="bg-lime-soft py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Demo" title="2026년 10월 시제품 완성" description="디자인·설계 확정, H/W 개발 완료 → 시제품 완성 → 제품 테스트 · 촬영·홍보 제작 · 금형 제작 순으로 진행됩니다." />
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl">
            <Placeholder label="제품 시연 영상 영역" hint="시제품 촬영 후 영상으로 교체" className="aspect-video w-full" />
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/contact" variant="dark">
              MYLIFT 도입 문의하기
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
