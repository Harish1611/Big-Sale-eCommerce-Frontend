import React from "react";

const HomeBanner = (props) => {
  return (
    <React.Fragment>
      <img src={props.image} alt="banner" className="w-full" />
    </React.Fragment>
  );
};

export default HomeBanner;
