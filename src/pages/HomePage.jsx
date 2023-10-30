import React from "react";
import MainCarousel from "../customer/components/HomeCarousel/MainCarousel";
import HomeCollectionSection from "../customer/components/HomeCollectionSection/HomeCollectionSection";
import HomeBanner1 from "../customer/components/HomeBanners/HomeBanner1";
import { mens_kurta } from "../Data/Mens_Kurtha";
const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <HomeBanner1 />
      <HomeCollectionSection data={mens_kurta} section={"Men's Kurta"} />
    </div>
  );
};

export default HomePage;
