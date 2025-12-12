import { getPage } from "@/lib/contentful";
import { Users, Newspaper, File, Book } from "lucide-react";
export const revalidate = 60;

export default async function ServicesSection({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const data = await getPage("About Us", locale);

  if (!data || !data.sections) {
    return <div>No Services Page found.</div>;
  }
  const section1 = data.sections[0].fields;
  const section2 = data.sections[1].fields;
  const section3 = data.sections[2].fields;
  const cardData = section2?.info || [];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="w-8 h-8 mb-4 text-[#1F5673]" />;
      case "Newspaper":
        return <Newspaper className="w-8 h-8 mb-4 text-[#1F5673]" />;
      case "Newspaperclipping":
        return <File className="w-8 h-8 mb-4 text-[#1F5673]" />;
      case "BookReader":
        return <Book className="w-8 h-8 mb-4 text-[#1F5673]" />;
      default:
        return null;
    }
  };

  return (
    <main className="bg-gray-50 text-gray-900">
      <section className="bg-[#3b647a] text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {section1.entryTitle}
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          {section1.details}
        </p>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {cardData.map((card: any, index: number) => {
            const { title, description, icon, detail, lists } = card.fields;

            return (
              <div
                key={index}
                className="bg-[#9bbec0] rounded-xl p-10 shadow-md flex flex-col items-center text-center"
              >
                {/* Icon */}
                {icon[0] && getIcon(icon[0])}

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">{title}</h3>

                <p className="text-lg mb-6">{description}</p>

                <p className="font-semibold mb-4">{detail}</p>

                <p className="font-semibold mb-4">{lists}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="font-bold text-2xl">{section3.entryTitle}</h3>
          <p className="mt-4 text-lg">{section3.detail1}</p>
          <p className="mt-4 text-lg">{section3.detail2}</p>
          <p className="mt-4 text-lg">{section3.detail3}</p>
          <p className="mt-4 text-lg">{section3.detail4}</p>
        </div>
        <div className="h-16 flex justify-center items-center px-96">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 mt-10 rounded-full">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
