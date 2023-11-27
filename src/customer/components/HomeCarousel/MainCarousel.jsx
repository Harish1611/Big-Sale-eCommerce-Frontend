import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";
import { Link } from "react-router-dom";

const MainCarousel = () => {
  const items = mainCarouselData.map((item) => (
    <Link to={item.path}>
    <img
      className="cursor-pointer h-[25rem] object-left  sm:h-full"
      style={{ width: "100%", objectFit: "cover" }}
      role="presentation"
      src={item.image}
      alt=""
    />
    </Link>
  ));
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  );
};

export default MainCarousel;
