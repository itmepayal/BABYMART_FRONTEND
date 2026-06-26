import Header from "@/components/layout/header/Header";
import Banner from "@/components/layout/banner/Banner";
import Feature from "@/components/layout/feature/Feature";
import FlashSale from "@/components/layout/flash-sale/FlashSale";
import CategoryList from "@/components/layout/category-list/Categorylist";

const page = () => {
  return (
    <>
      <Header />
      <Banner />
      <Feature />
      <FlashSale />
      <CategoryList />
    </>
  );
};

export default page;
