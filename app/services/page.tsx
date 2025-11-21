// components/ServicesSection.tsx
import Image from "next/image";
import { getPage } from "@/lib/contentful";
import { User, File, Users, Handshake } from "lucide-react";

export default async function ServicesSection() {
  const data = await getPage("Services");

  if (!data || !data.sections) {
    return <div>No Services Page found.</div>;
  }

  const section1 = data.sections[0].fields;
  const section2 = data.sections[1].fields;
  const cardData = section2?.info || [];

  const imageUrl = section1.image
    ? `https:${section1.image.fields.file.url}`
    : null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "User":
        return <User className="w-8 h-8 mb-4 text-[#1F5673]" />;
      case "File":
        return <File className="w-8 h-8 mb-4 text-[#1F5673]" />;
      case "Users":
        return <Users className="w-8 h-8 mb-4 text-[#1F5673]" />;
      case "Handshake":
        return <Handshake className="w-8 h-8 mb-4 text-[#1F5673]" />;
      default:
        return null;
    }
  };

  return (
    <>
      <section className="w-full py-20 bg-white text-white">
        <div className="max-w-7xl mx-auto bg-[#1F5673] rounded-2xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-5">{section1.entryTitle}</h2>
            <p className="leading-relaxed">{section1.description}</p>
          </div>

          <div className="p-10 overflow-hidden">
            {imageUrl ? (
              <Image
                src={imageUrl}
                width={500}
                height={250}
                alt="Services Hero"
                className="object-cover rounded-xl"
              />
            ) : (
              <div className="w-full h-[250px] bg-gray-300 rounded-xl flex items-center justify-center text-black">
                No Image Found
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {cardData.map((card: any, index: number) => {
            const { title, description, points, icon, detail, lists } =
              card.fields;

            return (
              <div
                key={index}
                className="bg-[#9bbec0] rounded-xl p-10 shadow-md flex flex-col items-center text-center"
              >
                {icon[0] && getIcon(icon[0])}

                <h3 className="text-2xl font-bold mb-4">{title}</h3>

                <p className="text-lg mb-6">{description}</p>

                <p className="font-semibold mb-4">{detail}</p>

                <p className="font-semibold mb-4">{lists}</p>

                <ul className="text-left space-y-2">
                  {points?.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
