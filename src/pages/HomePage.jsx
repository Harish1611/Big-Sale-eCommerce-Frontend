import React from "react";
import MainCarousel from "../customer/components/HomeCarousel/MainCarousel";
import HomeCollectionSection from "../customer/components/HomeCollectionSection/HomeCollectionSection";
import HomeBanner1 from "../customer/components/HomeBanners/HomeBanner1";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <HomeBanner1 />
      <div>{/* <HomeCollectionSection /> */}</div>
    </div>
  );
};

export default HomePage;
