type PageHeroProps = {
  label: string;
  title: string;
  description?: string;
};

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="bg-navy py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{label}</h1>
        <p className="mt-3 text-lg font-medium text-mint sm:text-xl">{title}</p>
        {description ? (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
