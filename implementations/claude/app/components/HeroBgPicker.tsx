export default function HeroBgPicker({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative bg-navy py-10 sm:py-14 lg:py-20">
      {children}
    </section>
  );
}
