"use client";

import { useState } from "react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { NewsletterBanner } from "@/components/blog/detail/NewsletterBanner";

const storeLocations = [
  "Store 1: 25 West 21th Street, Miami Fl, US",
  "Store 2: 76 East Houston Street New York City",
  "Store 3: 102 West 16th Street, Miami Fl, USA",
];

const contactDetails = [
  { label: "Mobile:", value: "+1-541-754-3010" },
  { label: "Hotline:", value: "+1-541-651-4228" },
  { label: "Email:", value: "kidxtore@etysa.com" },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("contact form submit", formData);
  };

  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb
        title="Contact Page"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact page" }]}
      />

      {/* Map */}
      <section className="w-full">
        <iframe
          title="Store location map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.426936726135!2d-0.1276473!3d51.5072178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ca6358bb6f%3A0x70730c41dd6f0a37!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1700000000000"
          width="100%"
          height="420"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block"
        />
      </section>

      {/* Form + Info */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <div className="flex-1">
            <h2 className="mb-5 text-[22px] font-bold text-gray-900">
              Send A Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="flex-1 rounded-sm border border-gray-300 px-3.5 py-2.5 text-[13px] text-gray-700 placeholder:text-gray-400 focus:border-main focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="flex-1 rounded-sm border border-gray-300 px-3.5 py-2.5 text-[13px] text-gray-700 placeholder:text-gray-400 focus:border-main focus:outline-none"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows={6}
                className="w-full resize-y rounded-sm border border-gray-300 px-3.5 py-2.5 text-[13px] text-gray-700 placeholder:text-gray-400 focus:border-main focus:outline-none"
              />

              <button
                type="submit"
                className="rounded bg-main px-6 py-2.5 text-[12px] font-bold tracking-wide text-white transition-colors hover:bg-main/90"
              >
                SUBMIT
              </button>
            </form>
          </div>

          <div className="w-full shrink-0 border-t border-gray-200 pt-8 md:w-64 md:border-t-0 md:border-l md:pl-10 md:pt-0">
            <h3 className="mb-3 text-[15px] font-bold text-gray-900">
              Store Location
            </h3>
            <ul className="space-y-1.5">
              {storeLocations.map((loc) => (
                <li key={loc} className="text-[12.5px] text-gray-500">
                  {loc}
                </li>
              ))}
            </ul>

            <h3 className="mb-3 mt-6 text-[15px] font-bold text-gray-900">
              Contact
            </h3>
            <ul className="space-y-1.5">
              {contactDetails.map((item) => (
                <li key={item.label} className="text-[12.5px] text-gray-500">
                  {item.label}{" "}
                  <span className="text-gray-700">{item.value}</span>
                </li>
              ))}
            </ul>

            <h3 className="mb-2 mt-6 text-[15px] font-bold text-gray-900">
              Open Hour
            </h3>
            <p className="text-[12.5px] text-gray-500">
              Monday – Sunday: 8:00 am – 10:00pm
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-330 w-full mx-auto">
        <NewsletterBanner />
      </section>
    </main>
  );
};

export default ContactPage;
