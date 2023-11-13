import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { SecondaryCarouselData } from "./SecondaryCarouselData";

const SecondaryCarousel = () => {
  const items = SecondaryCarouselData.map((item) => (
    <img
      className="cursor-pointer"
      style={{ width: "100%", objectFit: "cover" }}
      role="presentation"
      src={item.image}
      alt=""
    />
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

export default SecondaryCarousel;