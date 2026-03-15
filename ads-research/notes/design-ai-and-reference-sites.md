# 디자인 특화 AI + 치과 사이트 레퍼런스

작성일: 2026-03-12
목적: 동백유디치과 사이트 리뉴얼을 위한 디자인 소스 수집

---

## 1) 이번 프로젝트용 디자인 특화 AI (추천 스택)

### A. UI 시안 생성
1. **v0 (Vercel)**
   - 강점: 프롬프트로 빠르게 웹 UI 생성, React/Next 연결 쉬움
   - 활용: 홈/진료상세/상담 랜딩 초기 시안 3안 생성

2. **Galileo AI**
   - 강점: 구조화된 랜딩/앱 화면 시안 생성
   - 활용: 히어로/신뢰섹션/CTA 배치 아이데이션

3. **Relume**
   - 강점: 사이트맵/와이어프레임 자동화
   - 활용: IA 탐색 + 섹션 구성 뼈대 생성

### B. 광고 비주얼/배너
4. **Midjourney**
   - 강점: 키비주얼 컨셉 생성
5. **Canva Magic Design**
   - 강점: 광고 배너 대량 변형/리사이즈

---

## 2) 치과 사이트 디자인 레퍼런스(디자인 수집용)

> 아래는 “실제 병원 운영 사이트” + “디자인 영감 라이브러리”를 섞어, 구조와 톤을 빠르게 참고할 수 있게 정리함.

### 디자인 영감/갤러리
1. Dribbble - dentist clinic website
   - https://dribbble.com/search/dentist%20clinic%20website
   - 포인트: 모던/미니멀 톤, 카드형 서비스 안내, CTA 배치 참고

2. Behance - dentist website projects
   - https://www.behance.net/search/projects/dentist%20website
   - 포인트: 브랜드 톤앤매너, 상세 페이지 비주얼 계층 구조 참고

3. Webflow dental clinic templates
   - https://webflow.com/list/dental-clinic
   - 포인트: 템플릿 기반 내비게이션/섹션 순서, 예약 중심 동선

4. Colorlib dentist website examples
   - https://colorlib.com/wp/dentist-websites/
   - 포인트: 다양한 히어로 스타일/컬러 팔레트 참고

### 벤치마크 기사형 모음(구조 분석용)
5. Lasso MD - Best dental websites
   - https://www.lassomd.com/blog/top-10-best-dental-websites
   - 포인트: 전환 중심 랜딩 구조와 신뢰요소 배치 사례 정리

6. OptimizePress - dental website examples
   - https://www.optimizepress.com/dental-website-examples/
   - 포인트: 예약전환 관점 섹션 구성 참고

---

## 3) 바로 쓸 프롬프트 (디자인 AI 입력용)

### 프롬프트 A: 메인 홈페이지
"한국 지역 치과의원 웹사이트를 디자인해줘. 신뢰감 있는 의료 브랜드 톤(화이트+딥블루+민트), 모바일 우선. 섹션 순서: 1) Hero(예약 CTA) 2) 주요진료 3) 의료진 소개 4) 실제 진료환경 사진 5) 진료시간/오시는길/주차 6) 리뷰 7) 빠른 상담 폼. 버튼은 '전화상담', '네이버 예약'. 한국어 텍스트로 생성."

### 프롬프트 B: 임플란트 광고 랜딩
"치과 임플란트 광고 랜딩페이지를 디자인해줘. 목표는 상담 전환. 첫 화면에 핵심 혜택+의료진 신뢰요소+즉시 상담 CTA. 섹션: 시술 대상/진행 과정/자주 묻는 질문/전후 케이스(가이드 placeholder)/비용 안내 범위/상담 폼. 과장광고 없이 사실 기반 카피."

### 프롬프트 C: 검진·스케일링 랜딩
"검진/스케일링 중심 치과 랜딩페이지를 디자인해줘. 지역 주민 대상, 가볍고 친근한 톤. 섹션: 정기검진 필요성, 스케일링 과정, 진료시간, 당일 예약 방법, 찾아오는 길, 문의 CTA. 모바일에서 큰 버튼과 읽기 쉬운 타이포그래피 사용."

---

## 4) 추천 작업 플로우(너가 말한 조합 기준)

1. **Claude Code**: IA/페이지 요구사항/콘텐츠 구조 문서화
2. **디자인 AI(v0/Galileo/Relume)**: 화면 시안 2~3안 생성
3. **Codex**: 최종 코드 구현(Next.js 컴포넌트화)
4. **반복**: 시안→코드→수정(CTA/모바일 UX 중심)

---

## 5) 다음 액션

- [ ] 벤치마크 사이트 8~12개 선정 후 메뉴 구조 표로 정리
- [ ] 홈/진료상세/랜딩 3종 와이어프레임 확정
- [ ] 디자인 시스템 초안(컬러/타이포/버튼/폼) 정의
