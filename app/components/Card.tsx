import { iconMap } from "@/lib/iconMap";

export default function Cards({ infos }: { infos: any[] }) {
  if (!Array.isArray(infos)) return null;

  return (
    <section className="max-w-7xl mx-auto pt-10 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {infos
          .filter((info) => info?.fields)
          .map((info, i) => {
            const { title, icon, detail, lists } = info.fields;

            const iconKey = icon?.[0]?.toLowerCase();
            const Icon = iconKey ? iconMap[iconKey] : null;

            return (
              <div
                key={i}
                className="
                  bg-[#CFE1FF]
                  rounded-[32px]
                  p-4
                  shadow-lg
                  flex
                  flex-col
                "
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center text-black">
                    {Icon && <Icon size={40} strokeWidth={1.8} />}
                  </div>
                </div>

                {title && (
                  <h3 className="text-xl text-center font-semibold text-gray-900 mb-4">
                    {title}
                  </h3>
                )}

                {detail && (
                  <p className="text-base text-gray-700 mb-4 leading-relaxed">
                    {detail}
                  </p>
                )}

                {typeof lists === "string" && (
                  <ul className="list-disc list-inside text-base text-gray-700 space-y-2">
                    {lists.split("\n").map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
}
