# Codex 구현본

`implementations/codex`는 유디치과의원 용인동백점 리뉴얼을 위한 Codex 버전 Next.js App Router 구현이다. 톤은 `심플 + 전문 + 친근`을 유지하되, 일반 병원형 템플릿보다 편집형 레이아웃과 실사진 중심 구성을 강조했다.

## 실행 방법

```bash
cd /Users/jidong/uddental/implementations/codex
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 확인.

## 구조 요약

- `app/layout.tsx`: 전역 레이아웃, 폰트, 공통 헤더/푸터
- `app/globals.css`: 전체 스타일 시스템과 반응형 규칙
- `app/lib/site-content.ts`: 병원 정보, 진료 항목, FAQ, CTA, 실사진 경로
- `app/components/*`: 공통 섹션, 카드, 페이지 히어로, 사진 그리드
- `app/page.tsx`: 메인
- `app/about/page.tsx`: 병원소개
- `app/services/page.tsx`: 진료과목
- `app/team/page.tsx`: 의료진
- `app/facility/page.tsx`: 시설/장비
- `app/visit/page.tsx`: 오시는길/진료시간
- `app/contact/page.tsx`: 상담/예약

## 구현 메모

- 실사진은 `/Users/jidong/uddental/site/public/images/clinic/` 경로 자산을 기준으로 사용했다.
- 의료진 실명/약력은 `data.md`에 확인 정보가 없어 허위 생성하지 않고 운영 철학 중심으로 구성했다.
- 대표 전화는 공식 사이트 기준 `031-546-0051`, 예약 문의는 `0507-1422-0132`로 분리 표기했다.

## 디자인 AI 반영 메모

- 참고 시안 1: `v0` 시안 A `Calm Dental Editorial`
  - 반영 요소: 편집형 히어로, 플로팅 운영 정보 카드, 중첩된 실사진 프레임
- 참고 시안 2: `Galileo AI` 시안 B `Journey Card Landing`
  - 반영 요소: 예약부터 정기검진까지의 짧은 여정 카드, 초진 관점 정보 우선순위
- 참고 시안 3: `Relume` 시안 C `Conversion-first Local Clinic`
  - 반영 요소: 주소, 진료시간, 예약 채널을 리본형 정보 블록으로 요약하는 구조
- 최종 구현 방향
  - 채택 비중은 `시안 A 60% + 시안 B 25% + 시안 C 15%`로 두고, 동백유디치과 실사진과 확인 가능한 운영 정보에 맞춰 한국 치과 사이트 톤으로 재구성했다.

## 후속 권장

- 의료진 실명/약력 검증 후 교체
- 약도/지도 임베드 추가
- 이미지 WebP 최적화
- 법적 고지 페이지 추가
