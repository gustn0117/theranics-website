# (주)테라닉스 공식 홈페이지

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4

## 실행

```bash
npm install
npm run dev      # 개발 서버 http://localhost:3000
npm run build    # 프로덕션 빌드 (output: standalone)
npm start        # 빌드 결과 실행
```

운영 도메인은 `.env.production` 의 `NEXT_PUBLIC_SITE_URL` 로 지정합니다. sitemap, OG URL 에 사용됩니다.

## 페이지

| 경로 | 내용 |
| --- | --- |
| `/` | 메인 영상 슬라이드 3장 (5초 자동 전환) |
| `/about` | 소셜미션, 세 가지 약속, 회사 개요, 시장, 확장 전략, 연혁, 인증·수상, 대외활동 |
| `/contact` | 회사 정보, 연락처, 오시는 길 |
| `/products` | MYLIFT 제품소개 |
| `/coming-soon` | 메인 2번 슬라이드 버튼이 연결되는 임시 페이지 |

## 콘텐츠 수정 위치

| 항목 | 파일 |
| --- | --- |
| 회사 정보 · 연락처 · 메뉴 | `src/config/site.ts` |
| 메인 슬라이드 문구 · 영상 | `src/app/page.tsx` |
| About us 텍스트 (연혁, 인증, 대외활동 등) | `src/data/about.ts` |
| Products 텍스트 (문제, 사용 단계, 기능, 라인업 등) | `src/data/products.ts` |
| 이미지 | `public/images/` |
| 영상 | `public/videos/` |

- 사회적 기업가 소개(경영진) 구간은 현재 숨김 상태입니다. `src/app/about/page.tsx` 의 `SHOW_TEAM` 을 `true` 로 바꾸면 다시 보입니다.
- Products 하단 "제품 시연 영상 영역"은 시제품 촬영 후 영상으로 교체할 자리입니다.
- 메인 2번 슬라이드 버튼 링크는 `src/config/site.ts` 의 `secondVideoButtonHref` 로 바꿉니다.

## 배포 (Docker)

`next.config.ts` 에 `output: "standalone"` 이 설정되어 있어, 빌드 후 `.next/standalone` 과 `.next/static`, `public` 만으로 실행할 수 있습니다.
