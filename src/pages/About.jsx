import React from "react";
import { Grid } from "@mui/material";

import companyPoster from "../../src/assets/company-poster.jpeg";

const About = () => {
  return (
    <div className=" bg-gray-100">
      <Grid container className="px-5 py-14 sm:px-12 sm:py-24">
        <Grid item sx={12} lg={6} className="sm:hidden">
          <div className="border shadow-sm">
            <img src={companyPoster} alt="" />
          </div>
        </Grid>
        <Grid item sx={12} lg={6}>
          <div>
            <div className="flex-col items-start">
              <h3 className="text-[#0859a9] text-2xl font-serif pt-8 sm:pt-0">
                The Spirit of Big Sale
              </h3>
              <hr className=" bg-[#EBBB0D] w-20 h-[2px] mt-2"></hr>
            </div>
            <div className="flex items-start pt-8">
              <p className="text-gray-600  text-md leading-8 py-2 px-4">
                🎉 Welcome to the vibrant realm of Big Sale, where the spirit of
                savings and style converge! Step into our digital haven of
                fashion, footwear, and fabulous finds. The air is charged with
                the electrifying energy of unbeatable deals, trendy ensembles,
                and the promise of a shopping experience like no other. Feel the
                pulse of the latest trends as you explore our extensive
                collection of clothing. From chic streetwear to elegant evening
                gowns, Big Sale has curated a selection that resonates with
                every style persona. The spirit of self-expression comes alive
                with each garment, promising you a wardrobe that tells your
                unique story.
              </p>
            </div>
          </div>
        </Grid>
        <Grid item sx={12} lg={6} className="hidden sm:block">
          <div className="border ">
            <img src={companyPoster} alt="" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
