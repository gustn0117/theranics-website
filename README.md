# (주)테라닉스 공식 홈페이지

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 로 제작한 반응형 기업 홈페이지입니다.
과업지시서(2026-09-14) 기준 메뉴: **Main · About us · Products · Contact us**

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드
npm start        # 빌드 결과 실행
npm run lint
```

## 페이지

| 경로 | 내용 |
| --- | --- |
| `/` | 영상 영역 2개(이동권·고용권) + 기업 소개 + MYLIFT 하이라이트 + 문의 CTA |
| `/about` | 소셜미션, 회사 개요, 경영진, 주요 연혁, 인증·수상, 대외활동 |
| `/products` | MYLIFT 제품소개 (문제·아이디어·사용법·핵심기능·라인업·구조·리모컨·MYLIFT2·비교·IP) |
| `/contact` | 회사 정보, 연락처, 오시는 길 |
| `/coming-soon` | 메인 2번 영상의 빈 버튼이 연결되는 임시 페이지 |

## 교체가 필요한 플레이스홀더(빗금 영역)

| 위치 | 교체 방법 |
| --- | --- |
| 메인 영상 1 (이동권) | `public/videos/mobility.mp4` 파일 추가 → 자동 재생 |
| 메인 영상 2 (고용권) | `public/videos/employment.mp4` 파일 추가 → 자동 재생 |
| 메인 2번 영상 빈 버튼 링크 | `src/config/site.ts` 의 `secondVideoButtonHref` 수정 |
| Contact 약도 | `src/app/contact/page.tsx` 의 `<Placeholder …/>` 를 네이버/카카오 지도 embed 로 교체 |
| Products 시연 영상 | `src/app/products/page.tsx` 하단 `<Placeholder …/>` 를 `<video>` 또는 YouTube iframe 으로 교체 |

영상은 저작권이 없는 소스(Pexels, Pixabay, CC0 등)를 사용하세요.

## 콘텐츠 수정 위치

- 회사 정보·연락처·메뉴: `src/config/site.ts`
- About 페이지 텍스트(소셜미션, 팀, 연혁, 인증, 대외활동): `src/data/about.ts`
- Products 페이지 텍스트(문제, 사용 단계, 기능, 라인업, 비교표, IP): `src/data/products.ts`
- 이미지: `public/images/{logo,product,photo,team,cert,activity,illust}`

## SEO / 배포

- 페이지별 `title`/`description`, Open Graph(`public/og.jpg`), `sitemap.xml`, `robots.txt` 자동 생성
- 운영 도메인 확정 후 `src/config/site.ts` 의 `url` 을 변경하면 sitemap/OG URL 이 함께 바뀝니다
- Vercel 에 그대로 배포 가능. 커스텀 도메인 연결 시 HTTPS 자동 적용

## 산출물

| 산출물 | 위치 |
| --- | --- |
| 설계 문서 | `docs/2026-09-14-theranics-website-design.md` |
| 결과보고서 (PDF/HTML) | `docs/report/결과보고서.pdf`, `docs/report/결과보고서.html` |
| 주요 화면 캡처 (PC·태블릿·모바일) | `docs/captures/` |
| 자동 검증 결과 | `docs/report/verify-results.json` |
