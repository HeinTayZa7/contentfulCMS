import { getPage } from "@/lib/contentful";
import { Phone, Mail, MapPin } from "lucide-react";

export const revalidate = 60;

export default async function ContactSection({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const data = await getPage("Contact", locale);
  console.log("Contact Page Data:", data, locale);

  if (!data || !data.sections || data.sections.length === 0) {
    return <div>No Contact Page found.</div>;
  }

  const section1 = data.sections[0]?.fields || {};
  const cardData = section1?.info || [];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Phone":
        return <Phone className="w-6 h-6 mb-4 text-black" />;
      case "Email":
        return <Mail className="w-6 h-6 mb-4 text-black" />;
      case "Location":
        return <MapPin className="w-8 h-8 mb-4 text-black" />;
      default:
        return null;
    }
  };

  console.log("Section 1 Data:", section1);

  return (
    <main className="w-full bg-[#F5F5F5] text-gray-900 py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        {section1.entryTitle}
      </h1>

      <p className="mt-2 text-center text-gray-600 max-w-xl mx-auto">
        {section1.details ||
          "Any question or remarks? Just write us a message!"}
      </p>

      <div className="relative max-w-6xl mx-auto mt-12 bg-white border-2 border-blue-400 rounded-xl overflow-hidden shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#1C5A73] text-white p-10 relative min-h-full">
            <h2 className="text-2xl font-semibold mb-10">{section1.title}</h2>
            {cardData.map((card: any, index: number) => {
              const { title, description, points, icon, detail, lists } =
                card.fields;

              return (
                <div key={index} className="p-10 flex items-center gap-6">
                  {icon[0] && getIcon(icon[0])}

                  <p className="font-semibold mb-4">{detail}</p>
                </div>
              );
            })}
          </div>

          <div className="p-10 bg-white">
            <form className="grid grid-cols-2 gap-8">
              <div>
                <label className="text-sm font-medium">First Name</label>
                <input className="w-full border-b border-gray-300 py-2 focus:outline-none text-lg" />
              </div>

              <div>
                <label className="text-sm font-medium">Last Name</label>
                <input className="w-full border-b border-gray-300 py-2 focus:outline-none text-lg" />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <input className="w-full border-b border-gray-300 py-2 focus:outline-none text-lg" />
              </div>

              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <input className="w-full border-b border-gray-300 py-2 focus:outline-none text-lg" />
              </div>

              <div className="col-span-2 mt-4">
                <label className="text-sm font-medium">Select Subject?</label>

                <div className="flex items-center gap-10 mt-3">
                  {[
                    "General Inquiry",
                    "General Inquiry",
                    "General Inquiry",
                  ].map((i, idx) => (
                    <label key={idx} className="flex items-center gap-2">
                      <input type="radio" name="subject" />
                      <span className="text-lg">{i}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="col-span-2 mt-4">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none text-lg"
                  rows={5}
                  placeholder="Write your message..."
                />
              </div>

              <div className="col-span-2 flex justify-end mt-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg text-lg shadow">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
