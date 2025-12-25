import Image from "next/image";

export default function HeroBanner({ title, description, image }: any) {
  const imageUrl = image?.fields?.file?.url
    ? `https:${image.fields.file.url}`
    : "/default-hero.jpg";

  return (
    <section className="max-w-7xl mx-auto pt-24">
      <div className="bg-[#2F556E] rounded-3xl px-12 py-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-base leading-relaxed opacity-90 max-w-md">
            {description}
          </p>
        </div>

        <div className="relative w-full h-[260px]">
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
