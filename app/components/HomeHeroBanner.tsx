import Image from "next/image";

export default function HomeHeroBanner({ title, description, image }: any) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src={`https:${image.fields.file.url}`}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-end md:items-center">
        <div className="text-white max-w-xl pb-16 md:pb-0">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            {title}
          </h1>

          <p className="text-base md:text-xl opacity-90 mb-6">{description}</p>

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded-xl">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
