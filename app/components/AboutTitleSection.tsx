export default function AboutTitleSection({ title, details }: any) {
  return (
    <section className="w-full mx-auto">
      <div className="bg-blue-900 w-full px-12 py-14">
        <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>
        <div className="text-white">
          <p className="text-base leading-relaxed opacity-90">{details}</p>
        </div>
      </div>
    </section>
  );
}
