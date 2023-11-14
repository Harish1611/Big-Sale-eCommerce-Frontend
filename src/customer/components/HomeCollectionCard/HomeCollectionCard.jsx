import React from "react";

const HomeCollectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-md shadow-lg overflow-hidden w-[21rem] mx-1 sm:w-[15rem] sm:m-4 z-10">
      <div className=" h-[24rem] sm:h-[15rem] w-full mx-4">
        <img
          className="object-cover object-top w-full h-full z-0 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-105 hover: duration-300"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-4 z-20 ">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
      </div>
    </div>
  );
};

export default HomeCollectionCard;
