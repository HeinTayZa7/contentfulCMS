"use client";

import { iconMap } from "@/lib/iconMap";
import emailjs from "@emailjs/browser";
import { useState } from "react";

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
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (!Array.isArray(infos)) return null;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1m6xjpa",
        "template_tdi5tcv",
        e.target as HTMLFormElement,
        "K9DDDgPS7zbw53ju3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFirstname("");
    setLastname("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="w-full bg-gray-50">
      <div className="text-center mb-5">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-3">
          {title}
        </h1>
        <p className="text-gray-600">{details}</p>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative bg-[#184A5B] text-white p-10 lg:p-12">
            <h2 className="text-2xl font-semibold mb-10 relative z-10">
              Contact Information
            </h2>

            <div className="space-y-8 relative z-10">
              {infos.map((info, index) => {
                const { title, detail, icon } = info.fields;
                const iconKey = icon?.[0]?.toLowerCase();
                const Icon = iconKey ? iconMap[iconKey] : null;

                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                      {Icon && <Icon size={18} />}
                    </div>

                    <div>
                      <p className="text-sm text-white/70 mb-1">{title}</p>
                      <p className="text-sm font-medium">{detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-10 lg:p-12">
            <form className="grid grid-cols-1 gap-8" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-sm text-gray-500">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    onChange={(e) => setFirstname(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black text-black"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    onChange={(e) => setLastname(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black text-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-sm text-gray-500">Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black text-black"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black text-black"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-black">
                  Select Subject?
                </label>
                <div className="flex flex-wrap gap-6 mt-4 text-sm text-black">
                  {subjects?.map((item, idx) => (
                    <label key={idx} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="subject"
                        className="accent-[#7C3AED]"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-500">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="Write your message..."
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border-b border-gray-300 py-2 resize-none focus:outline-none focus:border-black text-black"
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg shadow"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
