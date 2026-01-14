"use client";

import { useRef } from "react";

type PhotoGalleryProps = {
  title?: string;
  images?: Array<{
    fields?: {
      title?: string;
      file?: {
        url?: string;
      };
    };
  }>;
};

export default function PhotoGallery({
  title,
  images = [],
}: PhotoGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = scrollRef.current.clientWidth;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-blue-900 py-4">
      {title && (
        <h3 className="text-2xl text-white text-center font-semibold mb-6">
          {title}
        </h3>
      )}

      <div className="relative max-w-7xl mx-auto px-6">
        <button
          onClick={() => scroll("left")}
          className="
    absolute left-2 top-1/2 -translate-y-1/2 z-10
    bg-black hover:bg-black/80
    text-white
    w-10 h-10 rounded-full shadow
    flex items-center justify-center
  "
          aria-label="Scroll left"
        >
          ‹
        </button>

        <button
          onClick={() => scroll("right")}
          className="
    absolute right-2 top-1/2 -translate-y-1/2 z-10
    bg-black hover:bg-black/80
    text-white
    w-10 h-10 rounded-full shadow
    flex items-center justify-center
  "
          aria-label="Scroll right"
        >
          ›
        </button>

        <button
          onClick={() => scroll("left")}
          className="
    absolute left-2 top-1/2 -translate-y-1/2 z-10
    bg-white hover:bg-white/80
    text-black
    w-10 h-10 rounded-full shadow
    flex items-center justify-center
  "
          aria-label="Scroll left"
        >
          ‹
        </button>

        <button
          onClick={() => scroll("right")}
          className="
    absolute right-2 top-1/2 -translate-y-1/2 z-10
    bg-white hover:bg-white/80
    text-black
    w-10 h-10 rounded-full shadow
    flex items-center justify-center
  "
          aria-label="Scroll right"
        >
          ›
        </button>

        {images.length ? (
          <div
            ref={scrollRef}
            className="
              flex gap-4 overflow-x-auto scroll-smooth
              pb-4
            "
          >
            {images.map((img, i) => {
              const url = img?.fields?.file?.url;
              if (!url) return null;

              return (
                <div
                  key={i}
                  className="
                    w-[48%] md:w-[23%]
                    flex-shrink-0
                    rounded shadow
                  "
                >
                  <img
                    src={`https:${url}`}
                    alt={img?.fields?.title ?? ""}
                    className="rounded w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No images available.</p>
        )}
      </div>
    </section>
  );
}
