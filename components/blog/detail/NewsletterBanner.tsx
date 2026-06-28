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
    <section className="relative w-full overflow-hidden rounded mt-10 bg-main">
      {/* Left decorative image */}
      <div className="absolute bottom-0 left-0 h-full w-55 pointer-events-none select-none">
        <Image
          src="https://bw-kidxtore.bzotech.com/wp-content/uploads/2022/12/bg-news-left.png"
          alt=""
          fill
          className="object-contain object-bottom"
          aria-hidden="true"
        />
      </div>

      {/* Right decorative image */}
      <div className="absolute bottom-0 right-0 h-full w-55 pointer-events-none select-none">
        <Image
          src="https://bw-kidxtore.bzotech.com/wp-content/uploads/2022/12/bg-news-right.png"
          alt=""
          fill
          className="object-contain object-bottom"
          aria-hidden="true"
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-8 py-10 text-center mx-auto max-w-xl">
        <h2 className="mb-5 text-lg font-extrabold text-white uppercase tracking-[0.15em]">
          Be The First To Know?
        </h2>

        <div className="flex w-full max-w-md items-center gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
            placeholder="Enter your email"
            className="flex-1 rounded-md border-0 bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Email address"
          />
          <button
            onClick={handleSubscribe}
            className="rounded-md border-2 border-white bg-transparent px-6 py-3 text-sm font-bold tracking-widest text-white uppercase transition-colors duration-200 whitespace-nowrap hover:bg-white hover:text-main"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};
