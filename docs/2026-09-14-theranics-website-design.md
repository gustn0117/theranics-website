# (주)테라닉스 공식 홈페이지 설계 (2026-09-14)

과업지시서 기준으로 정리한 사이트 구조와 구현 원칙. 참고 자료: IR PPT 1번(참고용1), 2번(참고용2), 로고 AI 파일.

## 기술 스택
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- 폰트: Pretendard Variable (jsDelivr CDN)
- 이미지: PPT에서 추출한 제품 렌더/사진/증서/활동 사진 (`public/images/**`)
- 로고: AI 파일에서 추출 (`public/images/logo/**`)

## 브랜드 컬러
| 토큰 | 값 | 출처 |
| --- | --- | --- |
| lime | #99D420 | THERANICS / MYLIFT 로고 |
| lime-light | #CCE86E | MYLIFT 로고 보조색 |
| ink | #231F20 | 로고 블랙 |
| sky | #4A8FE0 | 제품 렌더 포인트 블루 |

## 디자인 원칙 (2026-09-14 2차 개편)
- 둥근 모서리 사용 안 함. 카드·그림자 대신 1px 라인과 색 블록으로 구분.
- 사진은 풀블리드로 깔고, 사진의 빈 여백(왼쪽)에 텍스트를 얹는다 (`PhotoHero`, 메인 기업소개). 모바일에서는 사진 블록 위 + 텍스트 아래로 스택.
- 섹션 라벨은 대문자 영문 대신 로고의 라임 사각형 마커 + 한글 (`.mark`).
- 다크 블록은 페이지당 한 번. 호버 애니메이션 없음, 메인 히어로 텍스트만 페이드인.
- 이미지 타일(대외활동, 문제 사진)은 간격 없이 붙이고 캡션은 그라데이션 위에 올린다.

## 페이지 구성 (과업지시서 2-(1))
| 경로 | 메뉴 | 내용 |
| --- | --- | --- |
| `/` | Main | 영상 영역 2개 (1: 이동권, 2: 고용권). 1번 하단 중앙 버튼 → `/products`. 2번 하단 중앙 글씨 없는 빈 버튼 → `siteConfig.secondVideoButtonHref` (기본 `/coming-soon`). 이후 기업가치·MYLIFT 요약·CTA |
| `/about` | About us | 소셜미션(PPT1 21p), 회사소개, 경영진, 주요연혁(PPT1 17~18p), 인증·수상, 대외활동 |
| `/products` | Products | MYLIFT 제품소개: 문제·아이디어·사용방법·핵심기능·라인업·구조/사이즈·리모컨·MYLIFT2·경쟁비교·지식재산 |
| `/contact` | Contact us | 회사정보·연락처·주소(PPT1 22p), 오시는 길(약도 영역) |
| `/coming-soon` | (숨김) | 2번 영상 빈 버튼의 기본 이동 페이지. 향후 신규 페이지로 교체 |

## 플레이스홀더 규칙
- 사용자 지시: 영상·생성 이미지·약도 등 아직 없는 자료는 **빗금(해칭) 이미지**로 표시.
- `<Placeholder />` 컴포넌트가 대각선 빗금 패턴과 라벨을 렌더링한다.
- 메인 영상: `public/videos/mobility.mp4`, `public/videos/employment.mp4`를 넣으면 자동 재생되고, 파일이 없으면 빗금 영역이 보인다.
- 약도: `/contact`의 지도 영역은 빗금 처리 + 네이버/카카오 지도 검색 링크.

## SEO
- 페이지별 `title`/`description`, Open Graph 이미지(`public/og.jpg`), `sitemap.ts`, `robots.ts`.
- `siteConfig.url`을 실제 도메인으로 바꾸면 sitemap/OG URL이 함께 바뀐다.

## 반응형
- 모바일(≥360px)·태블릿·PC. 헤더는 모바일에서 햄버거 메뉴.
