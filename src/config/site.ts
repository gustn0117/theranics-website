export const siteConfig = {
  name: "(주)테라닉스",
  nameEn: "THERANICS",
  slogan: "Do things for other people!",
  /** 운영 도메인 (sitemap, OG URL에 사용). .env.production 의 NEXT_PUBLIC_SITE_URL 로 설정 */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://theranics-website.hsweb.pics",
  description:
    "예비사회적기업 (주)테라닉스는 휠체어 휠을 20초 만에 교체하는 전동 리프트 MYLIFT로 교통약자의 이동권과 취약계층의 고용권을 지원합니다.",
  contact: {
    address: "11815 경기도 의정부시 배꽃길 63, 3동 1034호",
    addressDetail: "(민락동, 더리브센텀스퀘어Ⅲ 지식산업센터)",
    tel: "031-821-7103",
    mobile: "010-3701-5000",
    fax: "0504-155-7164",
    email: "theranics@naver.com",
    website: "www.theranics.com",
    hours: "평일 09:00 ~ 18:00 (주말 · 공휴일 휴무)",
  },
  /** 메인 두 번째 영상 영역의 빈 버튼이 이동할 경로. 향후 신규 페이지로 교체 */
  secondVideoButtonHref: "/coming-soon",
  nav: [
    { href: "/about", label: "About us", labelKo: "회사소개" },
    { href: "/products", label: "MYLIFT", labelKo: "제품소개" },
    { href: "/contact", label: "Contact us", labelKo: "문의하기" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
