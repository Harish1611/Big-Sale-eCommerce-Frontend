import React from "react";
import { useNavigate } from "react-router-dom";

const HomeCollectionCard = ({ product }) => {
  const navigate = useNavigate();

  // console.log("Data in Card", product)
  return (
    <div onClick={()=>navigate(`/product/${product?._id}`)} className="cursor-pointer flex flex-col items-center bg-white border   shadow-md hover:shadow-lg overflow-hidden w-[11rem] mx-1 sm:w-[15rem] sm:m-2 z-10">
      <div className=" h-[12rem] sm:h-[15rem] w-full z-10 ">
        <img
          className="object-cover object-top w-full h-full  transition ease-in-out delay-150 hover:translate-y-1 hover:scale-105 hover: duration-300"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-4 z-20 bg-white">
        <h3 className="text-sm font-semibold line-clamp-1 sm:text-lg sm:font-medium text-gray-900 capitalize">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 overflow-hidden line-clamp-2 h-[2rem] sm:h-[3rem]  text-xs sm:text-sm text-gray-500 normal-case">{product?.title}</p>
      
      </div>
    </div>
  );
};

export default HomeCollectionCard;
