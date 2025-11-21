import { Calendar, CheckCircle, Users } from "lucide-react";

type AboutSectionProps = {
  title?: string;
  details?: string;
  infos?: Array<{ title: string; icon: string }>;
};

export default function AboutSection({
  title,
  details,
  infos = [],
}: AboutSectionProps) {
  const iconMap: Record<string, React.ElementType> = {
    Calendar,
    CheckCircle,
    Users,
  };

  return (
    <section className="py-12 bg-white text-black">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {title && (
          <h3 className="text-2xl md:text-3xl font-bold mb-6">{title}</h3>
        )}
        {details && <p className="md:text-xl mb-6">{details}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10">
          {(infos || []).map((info, index) => {
            const IconComponent = iconMap[info.icon] || Calendar;
            return (
              <div
                key={index}
                className="flex flex-row items-center justify-center gap-3"
              >
                <IconComponent className="w-6 h-6" />
                <p className="font-semibold text-lg">{info.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
