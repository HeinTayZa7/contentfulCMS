import { iconMap } from "@/lib/iconMap";

type ContactSectionProps = {
  title?: string;
  details?: string;
  infos?: any[];
  subjects?: string[];
};

export default function ContactSection({
  title,
  details,
  infos = [],
  subjects,
}: ContactSectionProps) {
  if (!Array.isArray(infos)) return null;

  console.log({ title, details, infos, subjects });
  return (
    <section className="w-full mx-auto pt-10">
      <div className="w-full px-12 py-14">
        <h1 className="text-4xl text-black font-bold mb-4 text-center">
          {title}
        </h1>
        <div className="text-black text-center">
          <p className="text-base leading-relaxed opacity-90">{details}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
        <div className="relative bg-[#2F556E] text-white rounded-2xl overflow-hidden p-10 min-h-[520px]">
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-black/40 rounded-full" />

          <h2 className="text-2xl font-semibold mb-12">Contact Information</h2>

          <div className="space-y-8 relative z-10">
            {infos
              .filter((info) => info?.fields)
              .map((info, index) => {
                const { title, detail, icon } = info.fields;

                const iconKey = icon?.[0]?.toLowerCase();
                const Icon = iconKey ? iconMap[iconKey] : null;

                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                      {Icon && <Icon size={18} className="text-white" />}
                    </div>

                    <div>
                      {title && (
                        <p className="text-sm font-medium text-white/80 mb-1">
                          {title}
                        </p>
                      )}
                      {detail && (
                        <p className="text-sm leading-relaxed text-white">
                          {detail}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-10 shadow-sm">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="text-sm text-gray-500 mb-1 block">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full border-b border-gray-400 py-2 text-base focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 mb-1 block">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full border-b border-gray-400 py-2 text-base focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 mb-1 block">Email</label>
              <input
                type="email"
                placeholder="demo@gmail.com"
                className="w-full border-b border-gray-400 py-2 text-base focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 mb-1 block">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 012 3456 789"
                className="w-full border-b border-gray-400 py-2 text-base focus:outline-none focus:border-black"
              />
            </div>

            <div className="md:col-span-2 mt-4">
              <label className="text-sm font-medium text-black">
                Select Subject?
              </label>

              <div className="flex flex-wrap gap-6 mt-3 text-sm">
                {Array.isArray(subjects) &&
                  subjects.map((item, idx) => (
                    <label
                      key={idx}
                      className="text-black flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="subject"
                        value={item}
                        className="accent-black"
                      />
                      {item}
                    </label>
                  ))}
              </div>
            </div>

            <div className="md:col-span-2 mt-4">
              <label className="text-sm text-gray-500 mb-1 block">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full border-b border-gray-400 py-2 text-base resize-none focus:outline-none focus:border-black"
              />
            </div>

            <div className="md:col-span-2 flex justify-end mt-8">
              <button
                type="submit"
                className="bg-[#4A90E2] hover:bg-[#357ABD] text-white font-medium px-10 py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
