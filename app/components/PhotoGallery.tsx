interface Props {
  title: string;
  images: string[];
}

export default function PhotoGallery({ title, images }: Props) {
  return (
    <section className="py-10 bg-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="font-bold text-2xl text-center mb-4 text-black">
          {title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.length > 0 ? (
            images.map((src, i) => (
              <div key={i} className="bg-white p-2 rounded shadow">
                <img
                  src={src}
                  alt={`Gallery ${i}`}
                  className="w-full h-36 object-cover rounded"
                />
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No photos yet</p>
          )}
        </div>
      </div>
    </section>
  );
}
