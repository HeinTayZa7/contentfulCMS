type ContactTitleSectionProps = {
  title?: string;
  details?: string;
};

export default function ContactTitleSection({
  title,
  details,
}: ContactTitleSectionProps) {
  return (
    <section className="w-full mx-auto">
      <div className="w-full px-12 py-14">
        <h1 className="text-4xl text-black font-bold mb-4 text-center">
          {title}
        </h1>
        <div className="text-black text-center">
          <p className="text-base leading-relaxed opacity-90">{details}</p>
        </div>
      </div>
    </section>
  );
}
