import Image from "next/image";
import { PhotoItem } from "../lib/site-content";

type PhotoGridProps = {
  items: PhotoItem[];
  dense?: boolean;
};

export function PhotoGrid({ items, dense = false }: PhotoGridProps) {
  return (
    <div className={`photo-grid ${dense ? "photo-grid--dense" : ""}`}>
      {items.map((item, index) => (
        <figure key={`${item.src}-${index}`} className={`photo-card photo-card--${(index % 4) + 1}`}>
          <div className="photo-card__media">
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
          </div>
          <figcaption>
            <strong>{item.alt}</strong>
            <span>{item.caption}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
