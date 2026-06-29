import React, { useState } from "react";
import Image from "next/image";

export const NewsletterBanner = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim()) {
      console.log("Subscribed with:", email);
      setEmail("");
    }
  };

  return (
    <section className="relative w-full overflow-hidden rounded bg-main">
      <div className="absolute bottom-0 left-0 hidden h-full w-28 pointer-events-none select-none sm:block md:w-40 lg:w-55">
        <Image
          src="https://bw-kidxtore.bzotech.com/wp-content/uploads/2022/12/bg-news-left.png"
          alt=""
          fill
          className="object-contain object-bottom"
          aria-hidden="true"
        />
      </div>

      <div className="absolute bottom-0 right-0 hidden h-full w-28 pointer-events-none select-none sm:block md:w-40 lg:w-55">
        <Image
          src="https://bw-kidxtore.bzotech.com/wp-content/uploads/2022/12/bg-news-right.png"
          alt=""
          fill
          className="object-contain object-bottom"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center justify-center px-5 py-8 text-center sm:px-8 sm:py-9 md:py-10">
        <h2 className="mb-4 text-base font-extrabold uppercase tracking-widest text-white sm:mb-5 sm:text-lg sm:tracking-[0.15em]">
          Be The First To Know?
        </h2>

        <div className="flex w-full max-w-md flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
            placeholder="Enter your email"
            className="w-full min-w-0 flex-1 rounded-md border-0 bg-white px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/50 sm:py-3"
            aria-label="Email address"
          />
          <button
            onClick={handleSubscribe}
            className="w-full shrink-0 rounded-md border-2 border-white bg-transparent px-6 py-2.5 text-sm font-bold tracking-widest text-white uppercase transition-colors duration-200 whitespace-nowrap hover:bg-white hover:text-main sm:w-auto sm:py-3"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};
