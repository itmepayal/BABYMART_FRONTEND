"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import {
  AccountLinks,
  InformationLinks,
  ServiceLinks,
  SocialLinks,
} from "@/lib/constants";
import { FooterColumn } from "@/components/layout/footer/FooterColumn";

export default function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="relative mt-16 w-full">
      <div className="border-t-[6px] border-(--color-main) pb-10 pt-2 rounded-t-3xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.3fr]">
            <div className="sm:col-span-2 lg:col-span-1">
              <Logo />
              <div className="mt-5 space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-black/90">
                  <MapPin size={16} className="flex-none mt-0.5" />
                  600 N Washington Ave Suite C203
                </div>
                <div className="flex items-center gap-2.5 text-sm text-black/90">
                  <Mail size={16} className="flex-none" />
                  support@kidxtore.com
                </div>
                <div className="flex items-center gap-2.5 text-sm text-black/90">
                  <Phone size={16} className="flex-none" />
                  +1 (308) 326-4120
                </div>
              </div>
            </div>

            <FooterColumn title="Information" links={InformationLinks} />
            <FooterColumn title="My Account" links={AccountLinks} />
            <FooterColumn title="Customer Service" links={ServiceLinks} />

            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xs font-bold uppercase tracking-widest text-(--color-main)">
                Join Our Newsletter
              </h3>
              <p className="mt-4 text-sm text-black/90">
                Subscribe to be informed about our services
              </p>

              <div className="mt-4 flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-11 rounded-t border-0 border-b-2 border-gray-300 bg-gray-50 px-3 text-sm text-(--title_typo-color) placeholder:text-(--body_typo-color) focus:border-(--color-main) focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => {}}
                  className="flex h-11 w-fit items-center justify-center gap-2 rounded bg-(--color-main2) px-5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-sun-dark"
                >
                  <Send size={15} />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-(--color-main-darken) py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 sm:px-6 sm:flex-row sm:justify-between lg:px-8">
          <p className="text-center text-sm text-white/85 sm:text-left">
            © {new Date().getFullYear()} KidXtore. Designed & Developed by{" "}
            <a
              href="https://itme-payal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white transition-colors hover:text-white/80"
            >
              Payal Yadav
            </a>
          </p>
          <div className="flex items-center gap-3">
            {SocialLinks.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded bg-white/10 text-white transition-colors duration-200 hover:bg-white/20"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
