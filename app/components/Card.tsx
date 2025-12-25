import { iconMap } from "@/lib/iconMap";

export default function Cards({ infos }: { infos: any[] }) {
  if (!Array.isArray(infos)) return null;

  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pt-10 px-6">
      {infos
        .filter((info) => info?.fields)
        .map((info, i) => {
          const { title, icon, detail, lists } = info.fields;

          const iconKey = icon?.[0]?.toLowerCase();
          const Icon = iconKey ? iconMap[iconKey] : null;

          return (
            <div key={i} className="bg-[#A9C9CC] rounded-2xl p-6 flex flex-col">
              <div className="flex justify-center mb-4">
                <div className="w-30 h-30 rounded-xl flex items-center justify-center text-[#2F556E]">
                  {Icon && <Icon size={30} />}
                </div>
              </div>

              {title && (
                <h3 className="text-lg text-black text-center font-semibold mb-2">
                  {title}
                </h3>
              )}

              {detail && <p className="text-sm text-gray-700 mb-4">{detail}</p>}

              {typeof lists === "string" && (
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-auto">
                  {lists.split("\n").map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
    </section>
  );
}
