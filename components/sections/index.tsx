import { Banner } from "@/components/sections/Banner";
import { Feature } from "@/components/sections/Feature";
import { FlashSale } from "@/components/sections/FlashSale";
import { Category } from "@/components/sections/Category";
import { NewArrivals } from "@/components/sections/NewArrivals";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { PromoBanners } from "@/components/sections/PromoBanners";
import { BestSellers } from "@/components/sections/BestSellers";
import { TodaysSuggestions } from "@/components/sections/TodaysSuggestions";
import { Brands } from "@/components/sections/Brand";
import { Blogs } from "@/components/sections/Blogs";

const Page = () => {
  return (
    <main className="sm:space-y-10 space-y-3">
      <Banner />
      <Feature />
      <FlashSale />
      <Category />
      <NewArrivals />
      <HeroBanner />
      <BestSellers />
      <PromoBanners />
      <TodaysSuggestions />
      <Brands />
      <Blogs />
    </main>
  );
};

export default Page;
