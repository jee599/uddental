type PageHeroProps = {
  label: string;
  title: string;
  description?: string;
};

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="bg-navy py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <p className="mb-2 text-sm font-semibold text-mint">{label}</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        {description ? (
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
