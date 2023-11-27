import { Grid } from "@mui/material";
import React from "react";
import Men from "../../../assets/shopByCategory/Mens.avif";
import Women from "../../../assets/shopByCategory/Women.avif";
import Kids from "../../../assets/shopByCategory/kids.avif";
import divImg from "../../../assets/div.png"
import { useNavigate } from "react-router-dom";

const HomeCategory = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-white z-20 pb-0 sm:pb-32">
         <div  className=" bg-white z-20 flex justify-center py-4">
            <h2  className=" text-[#0859A9] text-2xl font-serif	"> Shope By Category</h2>
           
           
        </div>
        <div  className=" bg-white z-20 flex justify-center pb-6">
        <hr className="text-[#EBBB0D] bg-[#EBBB0D] w-20 h-[2px] mb-6"></hr> 
        </div>
      <Grid container spacing={0} className="bg-[#F5F0E7]">
        <Grid item sm={12} md={4} spacing={0} >
          <img
            src={Men}
            onClick={() => navigate("/Men/Clothing/t-shirt")}
            className="w-full transition ease-in-out delay-50 hover:translate-y-1 hover:scale-105 hover:duration-1000 z-0 cursor-pointer rounded-xl hover:rounded-3xl "
          />
        </Grid>
        <Grid item sm={12} md={4} spacing={0}>
          <img
            src={Women}
            onClick={() => navigate("/Women/Clothing/women_dress")}
            className="w-full transition ease-in-out delay-50 hover:translate-y-1 hover:scale-105 hover:duration-1000 z-0 cursor-pointer rounded-xl hover:rounded-3xl"
          />
        </Grid>
        <Grid item sm={12} md={4} spacing={0}>
          <img
            src={Kids}
            onClick={() => navigate("/Kids/Clothing/kids_shirt")}
            className="w-full transition ease-in-out delay-50 hover:translate-y-1 hover:scale-105 hover:duration-1000 z-0 cursor-pointer rounded-xl hover:rounded-3xl "
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeCategory;
