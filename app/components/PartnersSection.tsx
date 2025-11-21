type PartnersSectionProps = {
  title: string;
  details?: string;
  info: {
    entryTitle?: string;
    image?: string;
  }[];
};

export default function PartnersSection({
  title,
  details,
  info,
}: PartnersSectionProps) {
  return (
    <section className="bg-white py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">{title}</h2>

      {details && (
        <p className="max-w-2xl mx-auto mb-12 text-gray-600">{details}</p>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 px-6">
        {info.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-2"
          >
            {partner.image && (
              <img
                src={partner.image}
                alt={partner.entryTitle || ""}
                className="w-24 h-24 object-contain mb-4"
              />
            )}

            {partner.entryTitle && (
              <h3 className="text-base font-semibold text-gray-900">
                {partner.entryTitle}
              </h3>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
