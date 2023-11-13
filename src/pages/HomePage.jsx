import React from "react";
import MainCarousel from "../customer/components/HomeCarousel/MainCarousel";
import HomeCollectionSection from "../customer/components/HomeCollectionSection/HomeCollectionSection";
import HomeBanner from "../customer/components/HomeBanners/HomeBanner";
import { mens_kurta } from "../Data/Mens_Kurtha";
import firstBanner from "../assets/HomeBanner.png";
import HomeAnouncement from "../customer/components/HomeAnouncement/HomeAnouncement";
import Footer from "../customer/components/Footer/Footer";
const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <HomeBanner image={firstBanner} />
      <HomeCollectionSection data={mens_kurta} section={"Best Sellers"} />
      <HomeAnouncement />
      <HomeBanner image={firstBanner} />
      <HomeCollectionSection data={mens_kurta} section={"Mens Ware"} />


      <Footer />
    </div>
  );
};

export default HomePage;
