import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { SecondaryCarouselData } from "./SecondaryCarouselData";
import { SecondaryCarouselDataMobile } from "./SecondaryCarouselData";
import { Link } from "react-router-dom";

const SecondaryCarousel = () => {
  const items = SecondaryCarouselData.map((item) => (
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

    const itemsMobile = SecondaryCarouselDataMobile.map((item) => (
      <Link to={item.path}>
        <img
          className="cursor-pointer h-full object-cover"
          style={{ width: "100%", objectFit: "cover" }}
          role="presentation"
          src={item.image}
          alt=""
        />
      </Link>
    ));

  return (
    <>
    {/* Desktop (Hidden on Mobile) */}
    <div className="hidden sm:block">
      <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        disableDotsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
      />
    </div>

    {/* Mobile (Hidden on Desktop) */}
    <div className="block sm:hidden">
      <AliceCarousel
        mouseTracking
        items={itemsMobile}
        disableButtonsControls
        disableDotsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
      />
    </div>
  </>
  );
};

export default SecondaryCarousel;
