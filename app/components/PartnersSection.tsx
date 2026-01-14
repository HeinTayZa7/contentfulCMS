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
  infos = [],
}: PartnersSectionProps) {
  const fullRowCount = Math.floor(infos.length / 3) * 3;
  const fullRows = infos.slice(0, fullRowCount);
  const lastRow = infos.slice(fullRowCount);

  return (
    <section className="bg-white py-10">
      <h2 className="text-center text-4xl font-bold text-black mb-4">
        {title}
      </h2>

      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {fullRows.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 place-items-center">
            {fullRows.map((partner, index) => (
              <PartnerItem key={index} partner={partner} />
            ))}
          </div>
        )}

        {lastRow.length > 0 && (
          <div className="flex justify-center gap-x-12 gap-y-20 flex-wrap">
            {lastRow.map((partner, index) => (
              <PartnerItem key={index} partner={partner} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function PartnerItem({ partner }: { partner: Info }) {
  return (
    <div className="flex flex-col items-center text-center">
      {partner.fields.image && (
        <img
          src={partner.fields.image.fields.file.url}
          alt={partner.fields.entryTitle || ""}
          className="w-28 h-28 object-contain mb-2"
        />
      )}

      {partner.fields.entryTitle && (
        <h3 className="text-lg font-semibold text-black">
          {partner.fields.entryTitle}
        </h3>
      )}
    </div>
  );
}
