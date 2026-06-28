"use client";

import Image from "next/image";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { NewsletterBanner } from "@/components/blog/detail/NewsletterBanner";

const FeatureIcon = () => (
  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0e0cc]">
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="#c8956c" strokeWidth="1.5" />
      <path
        d="M6 10l3 3 5-5"
        stroke="#c8956c"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const features = [
  {
    title: "Packaging Sustainability",
    desc: "Adipiscing Lorem ipsum dolor sit amet.",
  },
  {
    title: "Worldwide Shipping",
    desc: "Maecenas pulvinar turpis nec commodo sodales.",
  },
  {
    title: "Material safe for children",
    desc: "Dolor sit amet, consectetur adipiscing elit.",
  },
  { title: "Product Variety", desc: "consectetur adipiscing elit." },
];

const founders = [
  {
    name: "Genevieve Agatha",
    role: "Founder Kidstore, Mother of 3 babies",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",
  },
  {
    name: "Jaime Logins",
    role: "Fashion Designer, Founder Kidstore",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
  },
  {
    name: "Barbara Lauren",
    role: "Preschool teacher, Founder Kidstore",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  },
];

const clients = [
  {
    name: "MICROWAVE",
    style: "font-bold tracking-widest text-[10px] text-gray-800 uppercase",
  },
  {
    name: "Alisa",
    style: "font-serif italic text-lg text-gray-700 tracking-wide",
  },
  {
    name: "The Homemade",
    style: "font-medium text-[11px] text-gray-600 leading-tight text-center",
  },
  {
    name: "WHITE STUDIO",
    style: "font-bold tracking-widest text-[10px] text-gray-800 uppercase",
  },
  { name: "Saturday", style: "font-serif italic text-base text-gray-700" },
  {
    name: "rosé",
    style: "font-bold tracking-[0.15em] text-sm text-gray-800 uppercase",
  },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb
        title="About Page"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About page" }]}
      />

      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
          <div className="flex-1">
            <h2 className="mb-5 text-[26px] font-bold text-gray-900">
              A kid&apos;s best choice
            </h2>
            <p className="mb-6 text-[13px] leading-[1.8] text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              pulvinar turpis nec commodo sodales. Proin vel quam nisl.
              Vestibulum efficitur pharetra urna quis congue. Curabitur
              sollicitudin odio nibh, vitae semper felis ornare eget. In hac
              habitasse platea dictumst. Nunc consectetur urna pellentesque arcu
              dictum fermentum. Nulla interdum vehicula velit, ut luctus dolor
              hendrerit nec. Vivamus pharetra quam id ante cursus, sit amet
              mollis iustus luctus. Duis vel posuere libero, nec iaculis turpis.
              Quisque nec rhoncus massa, sed viverra ante. Aliquam ante odio,
              sollicitudin id tempor eu, convallis lacinia nunc.
            </p>

            <div className="relative rounded-sm bg-white py-1">
              <span
                className="absolute -top-3 left-0 font-serif text-6xl leading-none text-gray-800 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <div className="pl-6 pt-4">
                <p className="text-[13px] leading-[1.9] text-gray-600">
                  Curabitur sollicitudin odio nibh, vitae semper felis ornare
                  eget. In hac habitasse platea dictumst. Nunc consectetur urna
                  pellentesque arcu dictum fermentum. Nulla Interdum vehicula
                  velit, ut luctus dolor hendrerit nec. Vivamus pharetra quam id
                  ante cursus, sit amet mollis iustus luctus. Aliquam vel lectus
                  id ante lacinia elementum in eget eros. Duis vel posuere
                  libero, nec iaculis turpis. Quisque nec rhoncus massa, sed
                  viverra ante. Aliquam ante odio, sollicitudin id tempor eu,
                  convallis lacinia nunc.
                </p>
                <div className="mt-5 border-t border-gray-300 pt-2">
                  <p className="text-right text-[11px] text-gray-400 italic">
                    – Katie Spomer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full shrink-0 md:w-72.5 lg:w-85">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=640&q=80"
                alt="Mother and baby playing with colorful blocks"
                width={400}
                height={340}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#fae8d5] py-14">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
            <div className="w-full shrink-0 overflow-hidden rounded-xl md:w-75 lg:w-90">
              <Image
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=640&q=80"
                alt="Children playing with colorful building blocks"
                width={480}
                height={400}
                className="w-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h2 className="mb-4 text-[26px] font-bold text-gray-900">
                A kid&apos;s best choice
              </h2>
              <p className="mb-7 text-[13px] leading-[1.8] text-gray-600">
                Consectetur adipiscing elit. Maecenas pulvinar turpis nec
                commodo sodales. Proin vel quam nisl. Vestibulum efficitur
                pharetra urna quis congue. Curabitur sollicitudin odio nibh,
                vitae semper felis ornare eget. In hac habitasse platea
                dictumst. Nunc consectetur urna pellentesque arcu dictum
                fermentum. Nulla interdum vehicula velit, ut luctus dolor
                hendrerit nec. Vivamus pharetra quam id ante cursus, sit amet
                mollis iustus luctus. Aliquam vel lectus id ante lacinia
                elementum in eget eros. Duis vel posuere libero, nec iaculis
                turpis. Quisque nec rhoncus massa.
              </p>

              <ul className="space-y-5">
                {features.map((f) => (
                  <li key={f.title} className="flex items-center gap-3">
                    <FeatureIcon />
                    <div>
                      <p className="text-[13px] font-semibold text-gray-900">
                        {f.title}
                      </p>
                      <p className="text-[12px] text-gray-500">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="mb-10 text-center text-[26px] font-bold text-gray-900">
          The Founders
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={founder.img}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="px-4 py-4 text-center">
                <p className="text-[14px] font-bold text-gray-900">
                  {founder.name}
                </p>
                <p className="mt-0.5 text-[11px] text-gray-500">
                  {founder.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-10 text-center text-[26px] font-bold text-gray-900">
          Client Section
        </h2>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex h-16 items-center justify-center rounded-xl border border-gray-200 bg-white px-2 shadow-sm"
            >
              <span className={client.style}>{client.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-330 w-full mx-auto">
        <NewsletterBanner />
      </section>
    </main>
  );
};

export default AboutPage;
