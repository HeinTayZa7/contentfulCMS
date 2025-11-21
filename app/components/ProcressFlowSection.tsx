"use client";

type StepItem = {
  step: string;
  title: string;
  description: string;
};

type ProcressFlowSectionProps = {
  title: string;
  details?: string;
  info: StepItem[];
};

export default function ProcressFlowSection({
  title,
  details,
  info,
}: ProcressFlowSectionProps) {
  return (
    <section className="py-16 text-center bg-white text-black">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-4">{title}</h2>

      {/* Section Details */}
      {details && (
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">{details}</p>
      )}

      {/* Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10 px-4">
        {info.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition"
          >
            {/* Step Number */}
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 text-blue-800 w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">
                {step.step || index + 1}
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Contact Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition">
        Contact Us
      </button>
    </section>
  );
}
