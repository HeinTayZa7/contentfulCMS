type PartnersSectionProps = {
  title: string;
  details?: string;
  infos?: Info[];
};

type Info = {
  fields: {
    entryTitle?: string;
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
  infos,
}: PartnersSectionProps) {
  return (
    <section className="bg-white py-24">
      <h2 className="text-center text-4xl font-bold text-black mb-20">
        {title}
      </h2>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 place-items-center">
          {infos?.map((partner, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {partner.fields.image && (
                <img
                  src={partner.fields.image.fields.file.url}
                  alt={partner.fields.entryTitle || ""}
                  className="w-40 h-40 object-contain mb-6"
                />
              )}

              {partner.fields.entryTitle && (
                <h3 className="text-lg font-semibold text-black">
                  {partner.fields.entryTitle}
                </h3>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
