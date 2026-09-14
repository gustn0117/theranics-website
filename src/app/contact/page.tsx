import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact us · 문의하기",
  description: `(주)테라닉스 회사정보, 연락처, 오시는 길. ${siteConfig.contact.address} ${siteConfig.contact.addressDetail}`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const c = siteConfig.contact;
  const mapQuery = encodeURIComponent("경기도 의정부시 배꽃길 63");
  return (
    <>
      <section className="bg-lime pt-32 pb-16 sm:pt-44 sm:pb-24">
        <div className="container-x grid gap-10 lg:grid-cols-[7fr_5fr] lg:items-end">
          <div>
            <h1 className="display text-5xl sm:text-6xl lg:text-7xl">
              함께 만드는
              <br />
              안전한 이동
            </h1>
          </div>
          <p className="max-w-md text-lg leading-[1.8] text-ink/80">
            MYLIFT 도입, 시범사업, 협력 및 제안은 언제든 연락 주세요. 방문 설치와 친절한 설명으로 응대합니다.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x grid gap-14 py-20 sm:py-28 lg:grid-cols-[5fr_7fr]">
          <div>
            <SectionHeading label="회사 정보" title="연락처" />
            <dl className="mt-8 border-t border-ink">
              {[
                ["회사명", `${siteConfig.name} (${siteConfig.nameEn})`],
                ["대표이사", "이호천"],
                ["기업 형태", "예비사회적기업 · 소셜벤처기업"],
                ["주소", `${c.address} ${c.addressDetail}`],
                ["전화", c.tel],
                ["휴대폰", c.mobile],
                ["팩스", c.fax],
                ["이메일", c.email],
                ["운영시간", c.hours],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-4 text-[15px]">
                  <dt className="font-bold text-ink-soft">{k}</dt>
                  <dd className="font-medium">
                    {k === "이메일" ? (
                      <a href={`mailto:${v}`} className="font-bold underline decoration-lime decoration-2 underline-offset-4">
                        {v}
                      </a>
                    ) : k === "전화" || k === "휴대폰" ? (
                      <a href={`tel:${v}`} className="hover:text-lime-deep">
                        {v}
                      </a>
                    ) : (
                      v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${c.email}?subject=${encodeURIComponent("[홈페이지 문의] MYLIFT")}`}>이메일 문의</ButtonLink>
              <ButtonLink href={`tel:${c.tel}`} variant="outline">
                전화 문의
              </ButtonLink>
            </div>
          </div>

          <div>
            <SectionHeading label="오시는 길" title="의정부 더리브센텀스퀘어Ⅲ" />
            <div className="relative mt-8 aspect-[3/2] w-full overflow-hidden border border-ink bg-white">
              <Image
                src="/images/map/theranics-directions-v2.png"
                alt="의정부 더리브센텀스퀘어Ⅲ 3동 1034호 테라닉스 오시는 길 약도"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                quality={95}
                className="object-cover"
              />
            </div>
            <div className="grid gap-px border border-t-0 border-ink bg-line sm:grid-cols-[1fr_auto]">
              <div className="bg-white p-5">
                <p className="font-bold">{c.address}</p>
                <p className="text-sm text-ink-soft">{c.addressDetail}</p>
                <p className="mt-2 text-sm text-ink-soft">지식산업센터 3동 1034호 · 방문 전 전화 주시면 자세히 안내해 드립니다.</p>
              </div>
              <div className="flex flex-col divide-y divide-line bg-white sm:min-w-44">
                <a href={`https://map.naver.com/p/search/${mapQuery}`} target="_blank" rel="noopener noreferrer" className="px-5 py-3 text-sm font-bold hover:bg-lime">
                  네이버 지도
                </a>
                <a href={`https://map.kakao.com/?q=${mapQuery}`} target="_blank" rel="noopener noreferrer" className="px-5 py-3 text-sm font-bold hover:bg-lime">
                  카카오맵
                </a>
                <a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noopener noreferrer" className="px-5 py-3 text-sm font-bold hover:bg-lime">
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
