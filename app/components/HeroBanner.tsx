import Image from "next/image";

export default function HeroBanner({ title, description, image }: any) {
  const imageUrl = image?.fields?.file?.url
    ? `https:${image.fields.file.url}`
    : "/default-hero.jpg";

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div
        className="
          rounded-3xl
          bg-gradient-to-br from-[#2D46A6] to-[#1B2F7A]
          p-6
          md:p-6
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          md:gap-12
          items-center
        "
      >
        <div className="text-white">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">{title}</h1>

          <p className="text-sm md:text-base leading-relaxed opacity-90">
            {description}
          </p>
        </div>

        <div className="relative w-full h-[220px] md:h-[260px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            priority
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
