import React from "react";
import MainCarousel from "../customer/components/HomeCarousel/MainCarousel";
import HomeCollectionSection from "../customer/components/HomeCollectionSection/HomeCollectionSection";
import HomeBanner from "../customer/components/HomeBanners/HomeBanner";
import { mens_kurta } from "../Data/Mens_Kurtha";
import firstBanner from "../assets/HomeBanner.png";
const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <HomeBanner image={firstBanner} />
      <HomeCollectionSection data={mens_kurta} section={"Men's Kurta"} />
    </div>
  );
};

export default HomePage;
