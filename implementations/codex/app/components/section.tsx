import { ReactNode } from "react";

type SectionProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  accent?: "default" | "soft";
};

export function Section({ eyebrow, title, description, children, accent = "default" }: SectionProps) {
  return (
    <section className={`section section--${accent}`}>
      <div className="shell">
        <div className="section-heading">
          <p className="section-label">{eyebrow}</p>
          <h2>{title}</h2>
          {description ? <p className="section-description">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
