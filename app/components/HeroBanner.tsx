import React from "react";

interface Props {
  title: string;
  image: string;
}

export default function HeroBanner({ title, image }: Props) {
  return (
    <section
      className="relative h-[420px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container mx-auto px-6">
        <h1 className="text-white text-3xl md:text-5xl font-bold max-w-2xl drop-shadow-lg">
          {title}
        </h1>
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
          Get in touch
        </button>
      </div>
    </section>
  );
}
