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
  return (
    <section className="bg-[#1F5673] py-16">
      {title && (
        <h3 className="text-2xl text-white text-center font-semibold mb-6">
          {title}
        </h3>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 align-items-center max-w-7xl mx-auto px-6">
        {images.length ? (
          images.map((img, i) => {
            const url = img?.fields?.file?.url;
            if (!url) return null;

            return (
              <div key={i} className="rounded shadow">
                <img
                  src={`https:${url}`}
                  alt={img?.fields?.title ?? ""}
                  className="rounded"
                />
              </div>
            );
          })
        ) : (
          <p className="text-gray-500">No images available.</p>
        )}
      </div>
    </section>
  );
}
