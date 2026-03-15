import { Section } from "@/components/ui";
import { site } from "@/lib/site-data";

export default function LocationPage() {
  return (
    <Section eyebrow="Location" title="오시는 길과 진료시간" copy="처음 방문하는 환자를 위해 주소, 대중교통, 주차, 진료시간을 페이지 하나로 묶었습니다.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card p-7">
          <h2 className="text-2xl font-semibold text-[color:var(--color-navy)]">방문 안내</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[color:var(--color-muted)]">
            <p><span className="font-semibold text-[color:var(--color-navy)]">도로명 주소</span><br />{site.address}</p>
            <p><span className="font-semibold text-[color:var(--color-navy)]">지번 주소</span><br />{site.addressLot}</p>
            <p><span className="font-semibold text-[color:var(--color-navy)]">대중교통</span><br />{site.transit}</p>
            <p><span className="font-semibold text-[color:var(--color-navy)]">주차</span><br />{site.parking}</p>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="card p-7">
            <h2 className="text-2xl font-semibold text-[color:var(--color-navy)]">진료시간</h2>
            <div className="mt-6 grid gap-3">
              {site.hours.map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-2xl bg-[color:var(--color-sand)] px-4 py-4 text-sm">
                  <span className="text-[color:var(--color-muted)]">{item.label}</span>
                  <span className="font-semibold text-[color:var(--color-navy)]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card min-h-[280px] p-7">
            <h2 className="text-2xl font-semibold text-[color:var(--color-navy)]">지도 영역</h2>
            <div className="mt-6 flex h-[180px] items-center justify-center rounded-[28px] border border-dashed border-[color:var(--color-line)] bg-[color:var(--color-sand)] text-sm text-[color:var(--color-muted)]">
              카카오맵 또는 네이버지도 임베드 영역
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
