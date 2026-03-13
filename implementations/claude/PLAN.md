# 동백유디치과 사이트 리뉴얼 — 기획/설계

## 1. 디자인 방향

**톤**: 심플 + 전문 + 친근 (한국 치과 웹 표준)

### 디자인 특화 AI 시안 반영 (자동 선택)
- **시안 A (v0 스타일 · editorial dental hero)**: 좌측 카피 + 우측 실사진 프레임 + 플로팅 정보카드 구성
- **시안 B (Galileo 스타일 · patient journey blocks)**: "상담→진단→치료→관리" 여정 카드 구조
- **시안 C (Relume 스타일 · conversion-first ribbon)**: 진료시간/위치/예약 CTA를 한 줄 리본으로 고정 노출

**최종 채택안:** A 50% + B 30% + C 20% 조합
- 홈 상단은 A 기반으로 시각 밀도 강화
- 중단 정보구조는 B 기반으로 여정형 섹션 적용
- 예약 전환 포인트는 C 방식 리본/CTA로 단순화

| 요소 | 값 |
|------|------|
| Primary | Navy `#1B2B4B` |
| Secondary | Mint `#4ECDC4` |
| Background | White `#FFFFFF`, Light Gray `#F8F9FA` |
| Text | Dark `#1A1A1A`, Sub `#6B7280` |
| Font | Pretendard (시스템 폴백: -apple-system, sans-serif) |

## 2. 사진 자산 매핑

| 용도 | 파일명 |
|------|--------|
| Hero/외관 | `KakaoTalk_Photo_2026-03-12-21-57-37 001.jpeg` |
| 외관 (각도2) | `KakaoTalk_Photo_2026-03-12-21-57-37 002.jpeg` |
| 접수데스크 (메인) | `KakaoTalk_Photo_2026-03-12-21-57-47 013.jpeg` |
| 접수데스크 (사이드) | `KakaoTalk_Photo_2026-03-12-21-57-47 012.jpeg` |
| 대기실 | `KakaoTalk_Photo_2026-03-12-21-57-46 009.jpeg` |
| 진료실 | `KakaoTalk_Photo_2026-03-12-21-57-46 007.jpeg` |
| 진료실2 | `KakaoTalk_Photo_2026-03-12-21-57-47 011.jpeg` |
| 복도/동선 | `KakaoTalk_Photo_2026-03-12-21-57-45 001.jpeg` |
| CT 장비 (Vatech) | `KakaoTalk_Photo_2026-03-12-21-57-46 008.jpeg` |
| X-ray 장비 | `KakaoTalk_Photo_2026-03-12-21-57-46 005.jpeg` |
| 진료시간 안내판 | `KakaoTalk_Photo_2026-03-12-21-57-47 010.jpeg` |

## 3. IA (정보 구조)

```
홈 (/)
├─ 병원소개 (/about)
├─ 진료과목 (/services)
├─ 의료진 (/doctors)
├─ 시설/장비 (/facilities)
├─ 오시는길 (/location)
└─ 상담/예약 (/contact)
```

## 4. 페이지별 섹션 설계

### 홈 (/)
1. **Hero**: 외관 사진 배경 + "가족을 진료하는 마음, 동백유디치과" + 전화/네이버예약 CTA
2. **핵심 진료 카드 6개**: 임플란트, 충치치료, 잇몸치료, 교정, 소아치과, 예방/스케일링
3. **병원 소개 요약**: 접수데스크 사진 + 예방 중심 / 정직한 진료비 / 풍부한 경험 3포인트
4. **시설 갤러리**: 실사진 슬라이드 (접수, 대기실, 진료실, 장비)
5. **진료시간/위치**: 시간표 + 약도 요약
6. **FAQ**: 자주 묻는 질문 4~5개
7. **하단 CTA**: 전화 + 네이버 예약

### 병원소개 (/about)
- 병원 철학 (예방 중심, 정직한 진료비, 가족 같은 마음)
- 연혁/브랜드 소개 (유디치과 네트워크)
- 접수데스크/대기실 사진

### 진료과목 (/services)
- 6개 주요 진료: 임플란트, 충치/신경치료, 잇몸치료, 교정, 소아치과, 예방/스케일링
- 각 항목별 간단 설명 + 아이콘

### 의료진 (/doctors)
- 원장 프로필 카드 (이름/사진은 플레이스홀더)
- 진료 철학 메시지

### 시설/장비 (/facilities)
- 실사진 갤러리 (그리드)
- 주요 장비 소개 (Vatech CT, 디지털 파노라마)

### 오시는길 (/location)
- 주소, 전화번호
- 진료시간표
- 대중교통 안내 (어정역)
- 주차 안내
- 카카오맵 임베드 자리

### 상담/예약 (/contact)
- 전화 CTA (031-546-0051)
- 네이버 예약 CTA
- 간단 문의 폼 (이름, 연락처, 문의내용)

## 5. 기술 스택

| 항목 | 선택 |
|------|------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Font | Pretendard (CDN) |
| Image | Next.js `<Image>` (실사진 사용) |
| Deploy | Vercel (예정) |

## 6. 컴포넌트 구조

```
app/
├─ layout.tsx          (Header + Footer 공통)
├─ globals.css         (Tailwind + 커스텀 변수)
├─ page.tsx            (홈)
├─ about/page.tsx
├─ services/page.tsx
├─ doctors/page.tsx
├─ facilities/page.tsx
├─ location/page.tsx
└─ contact/page.tsx
```

## 7. 반응형 브레이크포인트

- Mobile first: `< 768px`
- Tablet: `768px ~ 1024px`
- Desktop: `> 1024px`
