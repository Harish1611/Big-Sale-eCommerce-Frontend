import React, { useEffect } from "react";
import MainCarousel from "../customer/components/HomeCarousel/MainCarousel";
import HomeCollectionSection from "../customer/components/HomeCollectionSection/HomeCollectionSection";
import HomeBanner from "../customer/components/HomeBanners/HomeBanner";
import { mens_kurta } from "../Data/Mens_Kurtha";
import { Women_Dress } from "../Data/Women_Dress";
import { Women_Saree } from "../Data/Women_Saree";

import firstBanner from "../assets/HomeBanner.png";
import secondBanner from "../assets/HomeBanner2.avif"
import thirdBanner from "../assets/secondBanner.avif"
import HomeAnouncement from "../customer/components/HomeAnouncement/HomeAnouncement";
import Footer from "../customer/components/Footer/Footer";
import SecondaryCarousel from "../customer/components/HomeCarousel/SecondaryCarousel";
import {  findProductsByCategory } from "../state/Product/Action";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const HomePage = () => {

  const productSet = [];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {products}=useSelector(store=>store);

  useEffect(() => {
    const data=["t-shirt","shoes","women_dress","lengha_choli"];
    dispatch(findProductsByCategory(data));
  }, []);
  
  
  console.log("Fetched: Data:",products.products[0])


  return (
    <div>
      <MainCarousel />
      <HomeBanner image={firstBanner} />
      <HomeCollectionSection data={products.products[0]} section={"Best Sellers"} />
      <HomeAnouncement />
      <HomeCollectionSection data={products.products[1]} section={"Footware"} />

       <HomeBanner image={secondBanner} />
      <HomeCollectionSection data={products.products[2]} section={"Women Ware"} />
      <SecondaryCarousel />
      <HomeBanner image={thirdBanner} />
      <HomeCollectionSection data={products.products[3]} section={"Trending"} /> 


    </div>
  );
};

export default HomePage;
