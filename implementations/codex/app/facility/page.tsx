import { PhotoGrid } from "../components/photo-grid";
import { PageHero } from "../components/page-hero";
import { Section } from "../components/section";
import { facilityPhotos } from "../lib/site-content";

const facilityPoints = [
  "외관과 간판 사진을 먼저 보여 위치 인지와 신뢰를 함께 확보합니다.",
  "접수 데스크와 내부 동선 사진으로 첫 방문자의 긴장을 줄입니다.",
  "진료실과 장비 컷은 과장된 렌더링 대신 실제 환경 그대로 보여 줍니다.",
];

export default function FacilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Facility & Equipment"
        title="실사진 위주로 정리한 공간과 진료 환경"
        description="시설 페이지는 설명문보다 사진이 먼저 읽히도록 설계했습니다. 모바일에서도 카드 리듬이 단조롭지 않도록 세로 비율을 섞었습니다."
      />

      <Section
        eyebrow="Photo Gallery"
        title="외관부터 진료실까지 실제 공간을 확인하세요"
        description="PHOTO_USAGE 가이드에서 제시된 우선순위를 기준으로 외관, 내부 동선, 접수, 진료실 사진을 배치했습니다."
      >
        <PhotoGrid items={facilityPhotos} dense />
      </Section>

      <Section
        eyebrow="Space Notes"
        title="시설 페이지에 담은 메시지"
        description="한국 병원 사이트 톤을 유지하면서도 사진과 설명의 간격을 넓혀 답답함을 줄였습니다."
        accent="soft"
      >
        <div className="bullet-panel">
          {facilityPoints.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </Section>
    </>
  );
}
