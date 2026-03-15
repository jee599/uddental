# 동백유디치과 하이브리드 3번

Claude의 설계 문서를 기준으로, Codex가 Next.js App Router 프로젝트로 구현한 버전입니다.

## 실행 방법

```bash
npm install
npm run dev
```

기본 개발 서버 주소는 `http://localhost:3000`입니다.

## 구조

```text
app/
  layout.tsx
  page.tsx
  about/page.tsx
  services/page.tsx
  doctors/page.tsx
  facilities/page.tsx
  location/page.tsx
  contact/page.tsx
components/
  site-layout.tsx
  ui.tsx
lib/
  site-data.ts
public/images/clinic/
IMPLEMENTATION_NOTES.md
README.md
```

## 구현 원칙

- Claude `PLAN.md`의 IA와 섹션 구성을 그대로 따른다.
- 실제 병원 사진을 우선 사용한다.
- 한국 치과 사이트 톤에 맞게 심플하고 전문적이며 과하지 않은 화면을 유지한다.
- 공통 데이터와 UI를 분리해 이후 수정이 쉽게 만든다.

## 페이지 구성

- `/`: Hero, 핵심 진료, 병원 소개 요약, 시설 갤러리, 위치/시간, FAQ, 하단 CTA
- `/about`: 병원 철학과 네트워크 맥락
- `/services`: 주요 진료과목 6개
- `/doctors`: 의료진 철학 중심 소개
- `/facilities`: 시설/장비 실사진 갤러리
- `/location`: 주소, 교통, 주차, 진료시간, 지도 영역
- `/contact`: 전화/네이버 예약 CTA와 정적 문의 폼

## 참고 메모

- 대표번호는 현재 `031-546-0051`을 기준으로 사용했다.
- `data.md`에 보조 번호 `0507-1422-0132`가 있어 배포 전 최종 확인이 필요하다.
- 지도와 문의 폼 제출은 실제 연동 전 단계의 UI만 포함한다.
