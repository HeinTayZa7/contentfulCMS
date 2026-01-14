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
  infos = [],
}: PartnersSectionProps) {
  const fullRowCount = Math.floor(infos.length / 3) * 3;
  const fullRows = infos.slice(0, fullRowCount);
  const lastRow = infos.slice(fullRowCount);

  return (
    <section className="bg-[#1f3b8a] py-12">
      <h2 className="text-center text-4xl font-bold text-white mb-10">
        {title}
      </h2>

      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {fullRows.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {fullRows.map((item, index) => (
              <PartnerCard key={index} item={item} />
            ))}
          </div>
        )}

        {lastRow.length > 0 && (
          <div className="flex justify-center gap-10 flex-wrap">
            {lastRow.map((item, index) => (
              <PartnerCard key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function PartnerCard({ item }: { item: Info }) {
  return (
    <div
      className="
        w-[320px]
        bg-white
        rounded-3xl
        px-6
        py-8
        text-center
        shadow-md
        transition-all
        duration-300
        hover:shadow-xl
        hover:-translate-y-1
      "
    >
      {item.fields.image && (
        <img
          src={item.fields.image.fields.file.url}
          alt={item.fields.entryTitle || ""}
          className="w-20 h-14 object-contain mx-auto mb-4"
        />
      )}

      {item.fields.entryTitle && (
        <h3 className="text-2xl font-bold text-black mb-2">
          {item.fields.entryTitle}
        </h3>
      )}

      {item.fields.description && (
        <p className="text-gray-700 text-base leading-relaxed">
          {item.fields.description}
        </p>
      )}
    </div>
  );
}
