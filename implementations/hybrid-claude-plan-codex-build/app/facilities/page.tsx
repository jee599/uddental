import { PhotoCard, Section } from "@/components/ui";
import { facilities, photos } from "@/lib/site-data";

export default function FacilitiesPage() {
  return (
    <>
      <Section eyebrow="Facilities" title="실제 공간과 장비를 전면에" copy="Claude 설계의 사진 자산 매핑을 기준으로 접수, 대기, 진료실, 장비 사진을 우선 노출했습니다.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {facilities.map((item, index) => (
            <PhotoCard key={item.title} src={item.image} alt={item.title} title={item.title} copy={item.copy} priority={index < 2} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Equipment" title="주요 장비 소개" copy="장비 정보는 과장된 기술 설명보다 환자가 이해하기 쉬운 신뢰 메시지로 정리했습니다.">
        <div className="grid gap-6 lg:grid-cols-2">
          <PhotoCard src={photos.ct} alt="Vatech CT 장비" title="Vatech CT" copy="세밀한 진단이 필요한 치료 계획 수립에 활용되는 장비입니다." />
          <PhotoCard src={photos.xray} alt="디지털 X-ray 장비" title="디지털 X-ray" copy="기초 진단과 경과 확인에 사용되는 촬영 장비입니다." />
        </div>
      </Section>
    </>
  );
}
