# 동백유디치과 리뉴얼 사이트 (Claude 구현)

## 실행 방법

```bash
cd implementations/claude
npm install
npm run dev
# http://localhost:3000
```

## 기술 스택

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Pretendard** 폰트 (CDN)

## 프로젝트 구조

```
implementations/claude/
├── app/
│   ├── layout.tsx           # 공통 레이아웃 (Header + Footer)
│   ├── globals.css          # Tailwind + 커스텀 테마
│   ├── page.tsx             # 홈 (Hero, 진료카드, 갤러리, FAQ)
│   ├── about/page.tsx       # 병원소개
│   ├── services/page.tsx    # 진료과목 (7개 상세)
│   ├── doctors/page.tsx     # 의료진
│   ├── facilities/page.tsx  # 시설/장비 (실사진 갤러리)
│   ├── location/page.tsx    # 오시는길/진료시간
│   ├── contact/page.tsx     # 상담/예약 (문의 폼)
│   └── components/
│       ├── Header.tsx       # 반응형 헤더 (모바일 햄버거)
│       └── Footer.tsx       # CTA 바 + 푸터
├── public/images/clinic/    # 실제 병원 사진 16장
├── PLAN.md                  # 기획/설계 문서
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## 페이지 목록

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | 홈 | Hero + 진료카드 6개 + 병원소개 + 시설갤러리 + 진료시간 + FAQ |
| `/about` | 병원소개 | 진료 철학 4가지 + 대기실 소개 |
| `/services` | 진료과목 | 7개 진료 항목 상세 |
| `/doctors` | 의료진 | 원장 프로필 + 진료 철학 |
| `/facilities` | 시설/장비 | 실사진 갤러리 9장 + 장비 소개 |
| `/location` | 오시는길 | 주소, 진료시간, 교통, 주차 |
| `/contact` | 상담/예약 | 전화/네이버예약 CTA + 문의 폼 |

## 디자인 AI 시안 반영 내역

홈 디자인은 아래 3개 디자인 특화 AI 패턴을 참고해 반영했습니다.

1. **v0 스타일 (Editorial Dental Hero)**
   - 좌측 카피, 우측 실사진, 플로팅 운영 카드 레이아웃
2. **Galileo 스타일 (Patient Journey)**
   - 상담 → 진단 → 치료 → 관리 흐름 카드 구성
3. **Relume 스타일 (Conversion Ribbon)**
   - 진료시간/위치/예약 정보를 빠르게 인지하는 전환형 리본

**최종 반영 비중:** v0 50% + Galileo 30% + Relume 20%

## 디자인 토큰

- **Primary**: Navy `#1B2B4B`
- **Accent**: Mint `#4ECDC4`
- **Background**: White / Light Gray `#F8F9FA`
- **Font**: Pretendard Variable
