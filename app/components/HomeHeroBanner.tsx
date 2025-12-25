import Image from "next/image";

export default function HomeHeroBanner({ title, description, image }: any) {
  return (
    <section className="relative w-full h-[520px] md:h-[620px]">
      <Image
        src={`https:${image.fields.file.url}`}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {title}
          </h1>

          <p className="text-lg md:text-xl opacity-90 mb-8">{description}</p>

          <button className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold px-8 py-3 rounded-lg">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
