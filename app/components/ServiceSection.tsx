type ServicesSectionProps = {
  title: string;
  details?: string;
  info: {
    entryTitle?: string;
    title?: string;
    description?: string;
    image?: string;
  }[];
};

export default function ServicesSection({
  title,
  details,
  info,
}: ServicesSectionProps) {
  return (
    <section className="bg-[#2c5874] py-12 text-center text-white">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>

      {details && (
        <p className="max-w-2xl mx-auto mb-10 text-gray-200">{details}</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {info.map((service, index) => (
          <div
            key={index}
            className="bg-white text-gray-900 rounded-2xl shadow-lg p-6 transition-transform duration-200 hover:-translate-y-2"
          >
            {service.image && (
              <img
                src={service.image}
                alt={service.title || ""}
                className="w-16 h-16 mx-auto mb-4 object-contain"
              />
            )}
            {service.entryTitle && (
              <h3 className="text-lg font-semibold text-[#2c5874] mb-2">
                {service.entryTitle}
              </h3>
            )}

            {service.description && (
              <p className="text-sm text-gray-700">{service.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
