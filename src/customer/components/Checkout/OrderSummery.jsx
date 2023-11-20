import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";


const OrderSummery = () => {
  return <div>
    <div className="p-5 shadow-md rounded-s-md border">
      <AddressCard />
    </div>
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className=" col-span-2">
          {[1, 1, 1].map((item) => (
            <CartItem />

          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100h] mt-5 lg:mt-0">
          <div className="border p-4 rounded-md">
            <p className=" uppercase font-bold opacity-60 pb-4">
              {" "}
              Price details{" "}
            </p>
            <hr />
            <div className="space-y-3  mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span> 3456 </span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600"> -500 </span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivary Charge</span>
                <span className="text-green-600"> Free </span>
              </div>
              <div className="flex justify-between pt-3 font-bold ">
                <span>Total Amount</span>
                <span className="text-green-600 "> 2346 </span>
              </div>
            </div>

            <Button
              color="secondary"
              variant="contained"
              className="w-full mt-5"
              sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default OrderSummery;
