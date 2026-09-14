import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";
import { ButtonLink, PageHero, SectionHeading } from "@/components/ui";
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
      <PageHero eyebrow="Contact us" title="함께 만드는 안전한 이동" description="MYLIFT 도입, 시범사업, 협력 및 제안은 언제든 연락 주세요. 방문 설치와 친절한 설명으로 응대합니다." />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Company Info" title="회사 정보" />
            <dl className="mt-8 divide-y divide-line border-y border-line">
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
                <div key={k} className="grid grid-cols-[110px_1fr] gap-4 py-4 text-[15px]">
                  <dt className="font-bold text-ink-soft">{k}</dt>
                  <dd className="font-medium">
                    {k === "이메일" ? (
                      <a href={`mailto:${v}`} className="text-lime-deep underline underline-offset-4">
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
              <ButtonLink href={`mailto:${c.email}?subject=${encodeURIComponent("[홈페이지 문의] MYLIFT")}`}>
                이메일 문의
              </ButtonLink>
              <ButtonLink href={`tel:${c.tel}`} variant="outline">
                전화 문의
              </ButtonLink>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Location" title="오시는 길" />
            <div className="mt-8 overflow-hidden rounded-3xl border border-line">
              <Placeholder label="약도 · 지도 영역" hint="네이버/카카오 지도 API 키 발급 후 지도로 교체" className="aspect-[4/3] w-full sm:aspect-[16/10]" />
            </div>
            <div className="mt-5 rounded-2xl bg-mist p-5">
              <p className="font-bold">{c.address}</p>
              <p className="text-sm text-ink-soft">{c.addressDetail}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-ink-soft">
                <li>· 더리브센텀스퀘어Ⅲ 지식산업센터 3동 1034호</li>
                <li>· 방문 전 전화 주시면 자세히 안내해 드립니다.</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <ButtonLink href={`https://map.naver.com/p/search/${mapQuery}`} variant="dark" className="px-4 py-2 text-sm" external>
                  네이버 지도
                </ButtonLink>
                <ButtonLink href={`https://map.kakao.com/?q=${mapQuery}`} variant="outline" className="bg-white px-4 py-2 text-sm" external>
                  카카오맵
                </ButtonLink>
                <ButtonLink href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} variant="outline" className="bg-white px-4 py-2 text-sm" external>
                  Google Maps
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
