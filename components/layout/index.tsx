import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="sm:pt-10 pt-4 px-4 sm:px-0">{children}</main>
      <Footer />
    </>
  );
}
