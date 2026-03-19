type PageHeroProps = {
  label: string;
  title: string;
  description?: string;
  bgImage?: string;
};

export default function PageHero({ label, title, description, bgImage }: PageHeroProps) {
  return (
    <section
      className={`relative py-20 sm:py-28 ${bgImage ? "" : "bg-navy"}`}
    >
      {bgImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">{label}</h1>
        <p className="mt-2 text-lg text-white/80 sm:text-xl">{title}</p>
        {description ? (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
