import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const { contact } = siteConfig;
  return (
    <footer className="border-t-4 border-ink bg-paper">
      <div className="container-x pt-14 sm:pt-20">
        <p className="display border-b border-ink/20 pb-10 text-[2.6rem] leading-[1.05] sm:pb-14 sm:text-6xl lg:text-7xl">
          Do things
          <br />
          for other people!
        </p>
      </div>
      <div className="container-x py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <Image
              src="/images/logo/theranics-lockup.png"
              alt="THERANICS (주)테라닉스"
              width={1230}
              height={285}
              className="h-12 w-auto"
            />
            <p className="mt-5 max-w-md text-sm leading-[1.8] text-ink-soft">
              {siteConfig.slogan} 국민의 건강·행복·안전지킴이를 비전으로 사회적 약자의 안전구현을 위한
              제품과 서비스를 개발합니다.
            </p>
            <Image
              src="/images/logo/partners-row.png"
              alt="고용노동부 예비사회적기업 · 중소벤처기업부 소셜벤처기업 · 한국사회적기업진흥원 사회적기업가 육성사업"
              width={1771}
              height={142}
              className="mt-7 h-8 w-auto max-w-full"
            />
          </div>

          <div>
            <p className="mark">메뉴</p>
            <ul className="mt-5 space-y-3 text-[15px] font-semibold">
              <li>
                <Link href="/" className="hover:text-lime-deep">
                  Main
                </Link>
              </li>
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-lime-deep">
                    {item.label}
                    <span className="ml-2 text-xs font-medium text-ink-soft">{item.labelKo}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mark">연락처</p>
            <address className="mt-5 space-y-2 text-sm not-italic leading-[1.8] text-ink-soft">
              <p>
                {contact.address}
                <br />
                {contact.addressDetail}
              </p>
              <p>
                Tel.{" "}
                <a href={`tel:${contact.tel}`} className="font-semibold text-ink hover:text-lime-deep">
                  {contact.tel}
                </a>
                <span className="mx-2 text-line">|</span>
                Fax. {contact.fax}
              </p>
              <p>
                <a href={`mailto:${contact.email}`} className="font-semibold text-ink hover:text-lime-deep">
                  {contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink/20 pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} THERANICS Co., Ltd. All rights reserved.</p>
          <p>예비사회적기업 · 소셜벤처기업 · 사회적기업가 육성사업 선정기업</p>
        </div>
      </div>
    </footer>
  );
}
