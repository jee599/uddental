export type NavItem = {
  href: string;
  label: string;
};

export type StatItem = {
  label: string;
  value: string;
  note?: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  badge: string;
};

export type HighlightItem = {
  title: string;
  description: string;
};

export type JourneyItem = {
  step: string;
  title: string;
  description: string;
};

export type PhotoItem = {
  src: string;
  alt: string;
  caption: string;
};

const clinicImage = (fileName: string) => encodeURI(`/images/clinic/${fileName}`);

export const clinic = {
  name: "유디치과의원 용인동백점",
  shortName: "동백유디치과",
  phone: "031-546-0051",
  reservationPhone: "0507-1422-0132",
  address: "경기 용인시 기흥구 동백중앙로 273 훼미리프라자2 2층",
  addressLot: "경기 용인시 기흥구 중동 830-2 훼미리프라자2 2층",
  hours: {
    weekday: "평일 09:30 - 18:30",
    saturday: "토요일 09:30 - 14:30",
    lunch: "점심시간 13:00 - 14:00",
    night: "야간진료 없음",
  },
  visit: {
    subway: "에버라인 어정역 1번출구 기준 약 1000m",
    parking: "건물 지하주차장 이용 가능",
  },
  links: {
    official: "https://www.udh.co.kr/new3/sub_branch/view.php?idx=141",
    naverBooking: "https://booking.naver.com/booking/13/bizes/645159",
    blog: "https://blog.naver.com/ud_dental",
  },
};

export const navItems: NavItem[] = [
  { href: "/", label: "홈" },
  { href: "/about", label: "병원소개" },
  { href: "/services", label: "진료과목" },
  { href: "/team", label: "의료진" },
  { href: "/facility", label: "시설/장비" },
  { href: "/visit", label: "오시는길" },
  { href: "/contact", label: "상담/예약" },
];

export const homeStats: StatItem[] = [
  { label: "대표 문의", value: clinic.phone, note: "공식 사이트 기준" },
  { label: "예약 문의", value: clinic.reservationPhone, note: "네이버 예약 연동" },
  { label: "진료시간", value: "평일 09:30 - 18:30", note: "토요일 14:30까지" },
];

export const homeHighlights: HighlightItem[] = [
  {
    title: "설명부터 시작",
    description: "치료 필요성과 선택지를 먼저 이해한 뒤 진료 흐름을 결정할 수 있게 안내합니다.",
  },
  {
    title: "실제 공간 공개",
    description: "외관, 접수, 진료실 사진을 메인에 배치해 첫 방문 전 분위기를 미리 확인할 수 있습니다.",
  },
  {
    title: "내원 준비 정보 집중",
    description: "전화, 예약, 주차, 운영시간을 한 번에 읽히는 구조로 재정리했습니다.",
  },
];

export const keyServices: ServiceItem[] = [
  {
    title: "임플란트",
    description: "정밀 진단을 바탕으로 기능과 관리 편의까지 함께 보는 치료 계획을 안내합니다.",
    badge: "기능 회복",
  },
  {
    title: "충치치료",
    description: "초기 진단과 보존 중심 접근으로 치아를 가능한 오래 유지하는 방향을 우선합니다.",
    badge: "보존 진료",
  },
  {
    title: "잇몸치료",
    description: "스케일링부터 치주 관리까지 생활 습관과 연결된 예방 루틴을 함께 설명합니다.",
    badge: "예방 중심",
  },
  {
    title: "사랑니발치",
    description: "불편 원인과 발치 필요성을 설명하고 내원 전후 주의사항을 명확히 안내합니다.",
    badge: "구강외과",
  },
  {
    title: "소아치료",
    description: "부담을 줄이는 설명과 단계별 진료로 보호자와 아이 모두 편안한 내원을 돕습니다.",
    badge: "가족 진료",
  },
  {
    title: "정기검진",
    description: "치료 전 예방이라는 원칙 아래 스케일링과 점검을 꾸준히 이어갈 수 있게 설계합니다.",
    badge: "정기 관리",
  },
];

export const principles = [
  {
    title: "가족을 진료하는 마음",
    description: "진료 전 설명, 진료 중 배려, 진료 후 관리까지 내원 경험 전체를 편안하게 설계합니다.",
  },
  {
    title: "예방 중심 진료",
    description: "치료가 커지기 전에 확인하고 관리하는 흐름을 중요하게 생각합니다.",
  },
  {
    title: "정직한 안내",
    description: "현재 상태와 필요한 치료 범위를 이해하기 쉬운 언어로 설명하는 것을 우선합니다.",
  },
];

export const differentiators = [
  "외관부터 접수, 진료실까지 실제 공간 사진 기반 구성",
  "예방 중심 카피와 생활 관리 안내를 함께 제안하는 정보 흐름",
  "위치, 주차, 예약 채널을 한눈에 보는 내원 준비형 정보 구조",
  "과장된 광고 문구 대신 확인 가능한 운영 정보와 신뢰 포인트 중심 서술",
];

export const careJourney: JourneyItem[] = [
  {
    step: "01",
    title: "예약 또는 전화 상담",
    description: "현재 불편한 부위와 원하는 진료 시간을 간단히 확인해 첫 방문 부담을 줄입니다.",
  },
  {
    step: "02",
    title: "사진과 설명 중심 초진",
    description: "진단 내용과 필요한 치료 범위를 이해하기 쉬운 언어로 정리해 설명합니다.",
  },
  {
    step: "03",
    title: "예방 관리까지 연결",
    description: "치료 후 주의사항과 정기 검진 흐름을 함께 안내해 재내원 계획까지 자연스럽게 이어갑니다.",
  },
];

export const galleryPhotos: PhotoItem[] = [
  {
    src: clinicImage("KakaoTalk_Photo_2026-03-12-21-57-37 001.jpeg"),
    alt: "동백유디치과 외관",
    caption: "건물 외관과 간판으로 첫 방문에도 위치를 확인하기 쉽습니다.",
  },
  {
    src: clinicImage("KakaoTalk_Photo_2026-03-12-21-57-45 001.jpeg"),
    alt: "내부 복도 동선",
    caption: "내부 동선이 정돈되어 있어 이동이 편안한 공간입니다.",
  },
  {
    src: clinicImage("KakaoTalk_Photo_2026-03-12-21-57-46 007.jpeg"),
    alt: "진료실 및 장비 공간",
    caption: "진료실과 장비 공간을 실제 사진으로 확인할 수 있습니다.",
  },
  {
    src: clinicImage("KakaoTalk_Photo_2026-03-12-21-57-47 013.jpeg"),
    alt: "접수 데스크",
    caption: "접수와 안내가 이루어지는 데스크 공간입니다.",
  },
];

export const facilityPhotos: PhotoItem[] = [
  ...galleryPhotos,
  {
    src: clinicImage("KakaoTalk_Photo_2026-03-12-21-57-45 004.jpeg"),
    alt: "대기 공간",
    caption: "대기 공간은 차분한 톤으로 정돈되어 있습니다.",
  },
  {
    src: clinicImage("KakaoTalk_Photo_2026-03-12-21-57-46 009.jpeg"),
    alt: "장비 디테일",
    caption: "시설 페이지에서 장비와 환경을 보다 자세히 확인할 수 있습니다.",
  },
];

export const faqs = [
  {
    question: "예약 없이 방문해도 되나요?",
    answer: "당일 접수는 가능하지만 대기 시간을 줄이기 위해 전화 또는 네이버 예약을 권장합니다.",
  },
  {
    question: "토요일에도 진료하나요?",
    answer: "토요일은 09:30부터 14:30까지 운영하며 점심시간 없이 진료합니다.",
  },
  {
    question: "주차는 어디에 하나요?",
    answer: "건물 지하주차장을 이용할 수 있어 차량 방문도 비교적 편리합니다.",
  },
  {
    question: "어린이 진료도 가능한가요?",
    answer: "외부 채널 기준으로 소아치료 관련 진료 키워드가 확인되며, 상세 상담은 예약 시 문의하는 구성이 적절합니다.",
  },
];

export const teamNotes = [
  "정확한 의료진 실명 및 약력은 현재 제공 데이터에 없어 허위 정보 없이 보수적으로 구성했습니다.",
  "페이지는 협진 구조, 설명 방식, 진료 철학을 중심으로 신뢰를 전달하도록 설계했습니다.",
  "실제 배포 전에는 원장명, 약력, 전문 분야, 프로필 사진을 공식 확인 후 교체하는 단계가 필요합니다.",
];

export const contactChecklist = [
  "현재 불편한 부위와 통증 시점을 간단히 메모해 주세요.",
  "최근 촬영한 치과 X-ray 또는 진료 이력이 있다면 상담 시 도움이 됩니다.",
  "예약 변경이 필요하면 미리 연락해 다른 환자 대기 시간을 줄일 수 있습니다.",
];

export const visitSteps = [
  "건물 외관과 간판을 먼저 확인한 뒤 훼미리프라자2로 들어갑니다.",
  "지하주차장 이용 후 엘리베이터로 2층에 이동합니다.",
  "접수 데스크에서 예약 여부 또는 방문 목적을 안내받습니다.",
];
