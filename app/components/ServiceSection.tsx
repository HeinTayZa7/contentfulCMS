type PartnersSectionProps = {
  title: string;
  details?: string;
  infos?: Info[];
};

type Info = {
  fields: {
    entryTitle?: string;
    description?: string;
    image?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
};

export default function PartnersSection({
  title,
  details,
  infos,
}: PartnersSectionProps) {
  return (
    <section className="bg-[#2f5673] py-20">
      <h2 className="text-center text-4xl font-bold text-white mb-14">
        {title}
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {infos?.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 text-center transition-transform duration-300 hover:-translate-y-2"
          >
            {item.fields.image && (
              <img
                src={item.fields.image.fields.file.url}
                alt={item.fields.entryTitle || ""}
                className="w-20 h-14 object-contain mx-auto mb-6"
              />
            )}

            {item.fields.entryTitle && (
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.fields.entryTitle}
              </h3>
            )}

            {item.fields.description && (
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.fields.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
