export const missionParagraphs = [
  "(주)테라닉스는 ‘국민의 건강, 행복, 안전지킴이’를 비전으로 사회적 약자의 안전구현을 위한 제품과 서비스를 개발하고 제공합니다.",
  "(주)테라닉스는 교통약자의 이동을 도와 안전한 사회참여를 지원하고, 취약계층의 고용을 도와 적극적인 경제활동을 지원하는 것이 소셜미션입니다.",
  "(주)테라닉스는 사회적 약자를 돕는 솔루션을 제공하여 취약계층에게 새로운 일자리를 창출하고 경제적으로 자립하는 데 공헌하고자 합니다.",
  "(주)테라닉스는 사회적 약자가 사회의 일원으로 함께 성장할 수 있도록 보다 안전하고 행복한 미래사회를 고객과 함께 만들어 가겠습니다.",
];

export const team = [
  {
    role: "CEO / 제조 총괄",
    name: "이호천",
    photo: "/images/team/lee-hocheon-hq.png",
    summary: "180여 개 제품디자인·설계·금형·제조 경력, 직접 제조 20여 종, 지식재산권 34건",
    bullets: [
      "서울과학기술대학교 제품설계금형공학과 졸업",
      "제품 200여 종 디자인·설계·금형·양산",
      "(주)SM메디칼 피부과 레이저 수술기 16종 설계",
      "굿디자인·대한민국 산업디자인전람회 등 다수 수상",
      "2001년 아이니즈 창업 · 2023년 테라닉스 재창업",
      "마이리프트 기획·디자인·설계·금형·특허 등 전 과정 주도",
    ],
  },
  {
    role: "CTO / 개발 총괄",
    name: "전민광",
    photo: "/images/team/jeon-mingwang.jpg",
    summary: "Node.js 기반 관리자 페이지·웹 솔루션 구축, MySQL/MongoDB 데이터 관리·API 개발",
    bullets: [
      "경민대학교 정보통신과",
      "H/W 감리, 데이터 관리",
      "2026년 마이리프트 연동 앱 개발",
      "2027년 마이스포츠 웹앱 개발",
      "2028년 고급형 SW·연동 서비스 담당",
    ],
  },
  {
    role: "CDO / 디자인 총괄",
    name: "엄재민",
    photo: "/images/team/eom-jaemin-hq.png",
    summary: "제품 디자인·3D 렌더링·제품 설계·3D 모델링, ATC·전산응용기계제도기능사·건축제도기능사",
    bullets: [
      "중앙대학교 디자인공예학과 석사",
      "시제품 감리, 데이터 관리",
      "굿디자인 수상",
      "2027년 마이리프트 포터블 디자인",
      "2028년 마이리프트2 고도화 디자인",
    ],
  },
];

export type HistoryItem = { date: string; title: string; desc: string };

export const history: { year: string; items: HistoryItem[] }[] = [
  {
    year: "2022",
    items: [
      { date: "2022.06", title: "사업의 만남", desc: "전동휠체어 충전소 제품디자인 의뢰" },
      { date: "2022.09", title: "전·현직 시, 도의원 미팅", desc: "이동권, 고용권, 고용부담금 이슈 전달" },
      { date: "2022.10", title: "마이프렌드로 아이템 시작", desc: "장애인 이동 플랫폼 필요" },
    ],
  },
  {
    year: "2023",
    items: [
      { date: "2023.02", title: "사회적기업가 육성사업 선정", desc: "선정 및 교육 이수 (인큐베이팅 1년 과정)" },
      { date: "2023.08", title: "법인 설립", desc: "경기도 의정부시 소재 지식산업센터" },
      { date: "2023.09", title: "경기도의회 정책토론회 참여", desc: "지역사회 교통약자 이동편의 현실과 비전" },
      { date: "2023.12", title: "예비사회적기업 지정", desc: "고용노동부 일자리 제공형" },
      { date: "2023.12", title: "장애인 길안내 서비스 MVP 개발", desc: "마이프렌드 사용자 앱 & 관제소 웹" },
      { date: "2023.12", title: "경기도 네트워킹데이 사업설명", desc: "경기도 사회적경제원, 사회적경제기업" },
    ],
  },
  {
    year: "2024",
    items: [
      { date: "2024.01", title: "한국지체장애인협회 미팅", desc: "경기도의회, 수원시 4개구 시범사업 추진" },
      { date: "2024.03", title: "의정부시 창업 아카데미 선정", desc: "의정부시 사회적경제원 초기팀 선정 및 교육 이수" },
      { date: "2024.05", title: "소셜벤처기업 판별", desc: "중소벤처기업부 기술보증기금 평가" },
    ],
  },
  {
    year: "2025",
    items: [
      { date: "2025.03", title: "마이프렌드 지식재산권 등록", desc: "특허출원 3건, 디자인등록 3건, 상표등록 5건" },
      { date: "2025.05", title: "운동형 전동 바이크", desc: "장애인 개발자와 협업" },
      { date: "2025.06", title: "마이리프트로 피보팅", desc: "플랫폼보다 자신 있는 제조로 재도전" },
      { date: "2025.07", title: "마이리프트 개발 시작", desc: "장애인들의 의견을 반영 후 시장조사 및 제품 선정" },
      { date: "2025.08", title: "재창업 특화교육 및 컨설팅 선정", desc: "중소벤처기업진흥공단, 교육 및 컨설팅" },
      { date: "2025.09", title: "성실경영평가 통과", desc: "2년 연속, 중소벤처기업부 확인증" },
      { date: "2025.09", title: "경기 스타트업 아카데미 창업가 역량강화 교육 선정", desc: "경기도경제과학진흥원, 스케일업 과정" },
      { date: "2025.10", title: "재도전 마인드업 선정", desc: "중소벤처기업진흥공단, 힐링캠프" },
      { date: "2025.11", title: "재창업 특화교육 데모데이 최종 10인 선정", desc: "중소벤처기업진흥공단 우수선발자" },
      { date: "2025.11", title: "경기 스타트업 아카데미 데모데이 최종 2위", desc: "경기도경제과학진흥원 창업가 역량강화 교육" },
    ],
  },
  {
    year: "2026",
    items: [
      { date: "2026.03", title: "지식재산 긴급지원 사업 특허맵 선정", desc: "중소벤처기업부, 경기도, 경기북부지식재산처" },
      { date: "2026.04", title: "재도전 성공 패키지 선정", desc: "창업진흥원, 서울창조경제혁신센터" },
      { date: "2026.10", title: "마이리프트 시제품 완성 (예정)", desc: "H/W 개발 완료 · 제품 테스트 · 촬영·홍보 제작" },
    ],
  },
];

export const certificates = [
  { year: "2023", title: "사회적기업가 육성사업 선정", org: "한국사회적기업진흥원", image: "/images/cert/cert-3.jpg" },
  { year: "2023", title: "예비사회적기업 지정", org: "고용노동부", image: "/images/cert/cert-1.jpg" },
  { year: "2024", title: "소셜벤처기업 판별", org: "중소벤처기업부", image: "/images/cert/cert-2.jpg" },
  { year: "2024~2025", title: "2년 연속 성실경영평가 통과", org: "중소벤처기업부", image: "/images/cert/cert-4.jpg" },
  { year: "2025", title: "재창업 특화교육 데모데이 최종 10인 선정", org: "중소벤처기업진흥공단", image: "/images/cert/cert-5.jpg" },
  { year: "2025", title: "경기 스타트업 아카데미 데모데이 최종 2위", org: "경기도경제과학진흥원", image: "/images/cert/cert-6.jpg" },
  { year: "2026", title: "재도전 성공 패키지 선정", org: "창업진흥원", image: "/images/cert/cert-7.jpg" },
];

export const activities = [
  { image: "/images/activity/act-94.jpg", title: "전·현직 경기도의원 미팅", desc: "마이프렌드 정책과제, 조례제정, 공모사업 진행" },
  { image: "/images/activity/act-95.jpg", title: "사회적기업가 육성사업", desc: "2023년 2월 · 마이프렌드 인큐베이팅" },
  { image: "/images/activity/act-96.jpg", title: "한국교통장애인협회 양주시지회장 미팅", desc: "2023년 7월 · 마이리프트의 시작: 문제제기" },
  { image: "/images/activity/act-99.jpg", title: "양주시 장애인 연합회 참여", desc: "2023년 8월 · 마이프렌드 사업설명 및 피드백" },
  { image: "/images/activity/act-97.jpg", title: "경기도의회 교통약자 이동편의 간담회 참여", desc: "2023년 10월 · 마이프렌드 서비스 발표" },
  { image: "/images/activity/act-98.jpg", title: "장애인 교통안전 결의대회 참석", desc: "2023년 11월 · 한국교통장애인협회 양주시지회" },
  { image: "/images/activity/act-100.jpg", title: "경기도 사회적경제 네트워킹데이 발표", desc: "2023년 12월 · 수원시" },
  { image: "/images/activity/act-102.jpg", title: "한국지체장애인협회 미팅 (경기도의회)", desc: "2024년 1월 · 수원 4개구 시범사업 후 경기도 추진" },
  { image: "/images/activity/act-101.jpg", title: "의정부시 창업 오디션 초기팀", desc: "2024년 3월 선정 · 의정부시 사회적경제원" },
  { image: "/images/activity/act-104-hq.jpg", title: "재도전 마인드업 힐링캠프", desc: "2025년 10월 · 중소벤처기업진흥공단" },
  { image: "/images/activity/act-105.jpg", title: "경기 스타트업 아카데미 창업가 역량강화 교육", desc: "2025년 11월 · 경기도경제과학진흥원 데모데이 최종 2위" },
  { image: "/images/activity/act-103.jpg", title: "재창업 특화교육 및 컨설팅", desc: "2025년 11월 · 중소벤처기업진흥공단 데모데이 최종 10인" },
];

/** 참고용2 7p: 시장 규모 */
export const marketStats = [
  { value: "2조 7,400억", label: "글로벌 휠체어 시장 규모 (2025, 연 7% 성장)" },
  { value: "262만 명", label: "국내 등록 장애인 (2025)" },
  { value: "26만 명", label: "국내 휠체어 사용 장애인 (전체 사용자 146만)" },
  { value: "78만 명", label: "지체·신체·척수장애인협회 회원 (45만+28만+5만)" },
];
export const marketNotes = [
  "대한노인회 회원 334만 명이 잠재 접점입니다.",
  "건강보험공단이 활동형 휠체어 급여 100만원을 지원하며, 매년 800~1,000명이 구매하고 5년마다 교체 급여가 반복됩니다.",
];

/** 참고용1 15p · 참고용2 18p: 제품군 확장 */
export const productFamily = [
  { name: "마이리프트", en: "MYLIFT", desc: "휠체어 휠 교체용 전동 리프트" },
  { name: "마이스포츠", en: "MYSPORTS", desc: "장애인 직장 운동 경기부 근태·훈련·경기 기록 앱" },
  { name: "마이바이크", en: "MYBIKE", desc: "수동 휠체어용 하이브리드 바이크" },
  { name: "마이프렌드", en: "MYFRIEND", desc: "사회적약자 돌봄·복지용품 플랫폼, 장애인 길안내" },
  { name: "마이에너지", en: "MYENERGY", desc: "모니터링 가능한 전동보장구 충전소, 배터리 방문교환" },
  { name: "마이아이즈", en: "MYEYES", desc: "시각장애인 실시간 길안내 스마트 글래스" },
];

/** 참고용2 18p: 글로벌 확장 */
export const globalSteps = [
  { step: "한국", desc: "제조 및 수요 검증 완료" },
  { step: "1차 · 일본", desc: "신발 벗는 문화, 복지 공감대, 동일한 급여 수급 제도" },
  { step: "2차 · 중국·동남아", desc: "인접 아시아 확대" },
  { step: "3차 · 중동·유럽·북중미", desc: "휴대형 제품으로 확장" },
];
export const globalHow = "국내·글로벌 전시회 참가 및 바이어 계약, 글로벌 유통사·제조사 B2B, MOQ 기준 대량 수출(FOB)";
