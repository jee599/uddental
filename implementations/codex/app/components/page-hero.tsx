import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, description, aside }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="shell page-hero__grid">
        <div>
          <p className="section-label">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero__description">{description}</p>
        </div>
        {aside ? <div className="page-hero__aside">{aside}</div> : null}
      </div>
    </section>
  );
}
