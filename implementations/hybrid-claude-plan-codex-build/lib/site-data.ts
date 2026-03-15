export const site = {
  name: "유디치과의원 용인동백점",
  shortName: "동백유디치과",
  phone: "031-546-0051",
  altPhone: "0507-1422-0132",
  fax: "031-546-0052",
  address: "경기 용인시 기흥구 동백중앙로 273 훼미리프라자2 2층",
  addressLot: "경기 용인시 기흥구 중동 830-2 훼미리프라자2 2층",
  reservationUrl: "https://booking.naver.com/booking/13/bizes/645159",
  officialUrl: "https://www.udh.co.kr/new3/sub_branch/view.php?idx=141",
  hours: [
    { label: "평일", value: "09:30 - 18:30" },
    { label: "점심시간", value: "13:00 - 14:00" },
    { label: "토요일", value: "09:30 - 14:30" },
    { label: "야간진료", value: "없음" },
  ],
  transit: "에버라인 어정역 1번출구에서 약 1000m",
  parking: "건물 지하주차장 이용 가능",
};

export const brandPoints = [
  "예방 중심 진료",
  "정직한 진료비",
  "가족을 진료하는 마음",
  "풍부한 시술 경험 의료진",
];

export const services = [
  { title: "임플란트", description: "정밀 진단과 단계별 상담을 바탕으로 기능과 심미를 함께 고려합니다." },
  { title: "충치·신경치료", description: "초기 충치부터 보존 치료까지 자연치아를 오래 지키는 방향으로 진행합니다." },
  { title: "잇몸치료", description: "치주 상태를 세밀하게 확인하고 스케일링부터 치주 관리까지 체계적으로 안내합니다." },
  { title: "교정", description: "구강 구조와 생활 패턴을 고려해 안정적인 교정 계획을 설명드립니다." },
  { title: "소아치과", description: "아이의 긴장을 줄이는 설명과 예방 중심 관리로 첫 치과 경험을 돕습니다." },
  { title: "예방·스케일링", description: "정기 검진, 스케일링, 생활 습관 안내로 일상 속 구강 건강 관리를 지원합니다." },
];

export const photos = {
  hero: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-37 001.jpeg",
  exterior: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-37 002.jpeg",
  receptionMain: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-47 013.jpeg",
  receptionSide: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-47 012.jpeg",
  waiting: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 009.jpeg",
  treatmentA: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 007.jpeg",
  treatmentB: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-47 011.jpeg",
  corridor: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-45 001.jpeg",
  ct: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 008.jpeg",
  xray: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-46 005.jpeg",
  hoursBoard: "/images/clinic/KakaoTalk_Photo_2026-03-12-21-57-47 010.jpeg",
};

export const facilities = [
  { title: "접수 데스크", copy: "차분한 첫인상과 명확한 동선으로 내원 과정을 편안하게 돕습니다.", image: photos.receptionMain },
  { title: "대기 공간", copy: "밝고 정돈된 대기실로 보호자와 환자 모두 편안하게 머물 수 있습니다.", image: photos.waiting },
  { title: "진료실", copy: "개방감과 청결감을 우선한 진료 공간입니다.", image: photos.treatmentA },
  { title: "상담 및 동선", copy: "접수에서 진료까지 이동이 자연스럽도록 구성했습니다.", image: photos.corridor },
  { title: "Vatech CT", copy: "정밀 진단을 위한 CT 장비를 운영합니다.", image: photos.ct },
  { title: "디지털 X-ray", copy: "기초 진단과 경과 확인을 빠르게 진행합니다.", image: photos.xray },
];

export const faq = [
  { q: "예약 없이 방문해도 되나요?", a: "가능하지만 대기 시간을 줄이기 위해 전화 또는 네이버 예약 후 방문을 권장합니다." },
  { q: "주차는 가능한가요?", a: "건물 지하주차장을 이용하실 수 있습니다. 내원 시 접수에 말씀해 주세요." },
  { q: "토요일에도 진료하나요?", a: "토요일은 09:30부터 14:30까지 점심시간 없이 운영합니다." },
  { q: "아이도 진료받을 수 있나요?", a: "소아치과 및 예방 중심 진료를 안내하고 있습니다." },
];

export const doctor = {
  name: "대표 원장",
  role: "예방 중심 진료와 충분한 설명을 우선하는 진료 철학",
  summary:
    "공개 가능한 상세 약력은 추후 업데이트 예정입니다. 현재 페이지는 동백유디치과의 진료 철학과 상담 방식 중심으로 구성했습니다.",
};

export const navigation = [
  { href: "/", label: "홈" },
  { href: "/about", label: "병원소개" },
  { href: "/services", label: "진료과목" },
  { href: "/doctors", label: "의료진" },
  { href: "/facilities", label: "시설/장비" },
  { href: "/location", label: "오시는길" },
  { href: "/contact", label: "상담/예약" },
];
