import type { Metadata } from "next";
import { Nunito, Baloo_2 } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const baloo2 = Baloo_2({
  variable: "--font-baloo2",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KidXtore — Everything for Your Little One",
  description:
    "KidXtore - Your one-stop shop for everything your little one needs. Toys, clothing, gear, and more.",
  keywords: ["kids", "toys", "clothing", "baby gear", "children products"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${baloo2.variable} h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#0d7377" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-white"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
