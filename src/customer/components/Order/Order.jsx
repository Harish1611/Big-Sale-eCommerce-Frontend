import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On The Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

const Order = () => {
  return (
    <div>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg rounded-md bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg"> Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">Order Status</h1>
              {orderStatus.map((option) => (
                <div className="flex item-center">
                  <input
                    defaultValue={option.vlaue}
                    type="checkbox"
                    className="h-4 2-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />

                  <label
                    htmlFor={option.value}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
            <OrderCard />

        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
