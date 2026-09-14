import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const { contact } = siteConfig;
  return (
    <footer className="border-t border-line bg-mist">
      <div className="container-x py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo/theranics-lockup.png"
              alt="THERANICS (주)테라닉스"
              width={1230}
              height={285}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              {siteConfig.slogan} 국민의 건강·행복·안전지킴이를 비전으로 사회적 약자의
              안전구현을 위한 제품과 서비스를 개발합니다.
            </p>
            <Image
              src="/images/logo/partners-row.png"
              alt="고용노동부 예비사회적기업 · 중소벤처기업부 소셜벤처기업 · 한국사회적기업진흥원 사회적기업가 육성사업"
              width={1771}
              height={142}
              className="mt-6 h-8 w-auto max-w-full opacity-90"
            />
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.18em] text-ink-soft uppercase">Menu</h3>
            <ul className="mt-4 space-y-2.5 text-[15px] font-semibold">
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
            <h3 className="text-xs font-bold tracking-[0.18em] text-ink-soft uppercase">Contact</h3>
            <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-ink-soft">
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
                <a
                  href={`mailto:${contact.email}`}
                  className="font-semibold text-ink hover:text-lime-deep"
                >
                  {contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} THERANICS Co., Ltd. All rights reserved.</p>
          <p>예비사회적기업 · 소셜벤처기업 · 사회적기업가 육성사업 선정기업</p>
        </div>
      </div>
    </footer>
  );
}
