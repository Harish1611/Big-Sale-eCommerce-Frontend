import React from "react";

const HomeBanner = (props) => {
  return (
    <React.Fragment>
      <img
        src={props.image}
        alt="banner"
        className=" h-[3.2rem] object-cover sm:w-full sm:object-fit sm:h-full"
      />
    </React.Fragment>
  );
};

export default HomeBanner;
