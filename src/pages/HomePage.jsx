import React from "react";
import MainCarousel from "../customer/components/HomeCarousel/MainCarousel";
import HomeCollectionSection from "../customer/components/HomeCollectionSection/HomeCollectionSection";
import HomeBanner from "../customer/components/HomeBanners/HomeBanner";
import { mens_kurta } from "../Data/Mens_Kurtha";
import firstBanner from "../assets/HomeBanner.png";
import secondBanner from "../assets/HomeBanner2.avif"
import thirdBanner from "../assets/secondBanner.avif"
import HomeAnouncement from "../customer/components/HomeAnouncement/HomeAnouncement";
import Footer from "../customer/components/Footer/Footer";
import SecondaryCarousel from "../customer/components/HomeCarousel/SecondaryCarousel";
const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <HomeBanner image={firstBanner} />
      <HomeCollectionSection data={mens_kurta} section={"Best Sellers"} />
      <HomeAnouncement />
      <HomeBanner image={secondBanner} />
      <HomeCollectionSection data={mens_kurta} section={"Mens Ware"} />
      <SecondaryCarousel />
      <HomeBanner image={thirdBanner} />
      <HomeCollectionSection data={mens_kurta} section={"Trending"} />


      <Footer />
    </div>
  );
};

export default HomePage;
