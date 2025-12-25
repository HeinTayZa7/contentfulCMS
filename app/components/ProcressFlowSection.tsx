type ProcessInfoEntry = {
  sys?: {
    id: string;
  };
  fields?: {
    title?: string;
    detail?: string;
    icon?: {
      fields?: {
        file?: {
          url?: string;
        };
      };
    };
  };
};

type ProcressFlowSectionProps = {
  data: {
    title?: string;
    details?: string;
    infos?: ProcessInfoEntry[];
  };
};

export default function ProcressFlowSection({
  data,
}: ProcressFlowSectionProps) {
  const infos = data?.infos ?? [];

  if (!infos.length) return null;

  return (
    <section className="py-16 text-center bg-white text-black">
      {data?.title && <h2 className="text-3xl font-bold mb-4">{data.title}</h2>}

      {data?.details && (
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">{data.details}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10 px-4">
        {infos.map((info, index) => {
          if (!info?.fields) return null;

          const iconUrl = info.fields.icon?.fields?.file?.url;

          return (
            <div
              key={info.sys?.id ?? index}
              className="bg-white shadow-md rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 text-blue-800 w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">
                  {iconUrl ? (
                    <img
                      src={`https:${iconUrl}`}
                      alt={info.fields.title ?? ""}
                      className="w-6 h-6"
                    />
                  ) : (
                    index + 1
                  )}
                </div>
              </div>

              {info.fields.title && (
                <h3 className="text-xl font-semibold mb-2">
                  {info.fields.title}
                </h3>
              )}

              {info.fields.detail && (
                <p className="text-gray-600">{info.fields.detail}</p>
              )}
            </div>
          );
        })}
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition">
        Contact Us
      </button>
    </section>
  );
}
