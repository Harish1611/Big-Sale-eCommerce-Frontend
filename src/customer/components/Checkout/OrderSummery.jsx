import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../state/Order/Action";

const OrderSummery = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
const orderId = searchParams.get("order_id");
const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const {order}=useSelector(state=>state)

console.log("orderId ", order)

useEffect(()=>{
  
  dispatch(getOrderById(orderId))
},[orderId])



  return (
    <div className="space-y-5">
        <div className="p-5 shadow-lg rounded-md border ">
            <AddressCard address={order.order?.shippingAddress}/>
        </div>
      <div className="lg:grid grid-cols-3 relative justify-between">
        <div className="lg:col-span-2 ">
          <div className=" space-y-3">
            {order.order?.orderItems.map((item) => (
              <>
                <CartItem item={item} showButton={false}/>
              </>
            ))}
          </div>
        </div>
        <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 ml-5">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />

            <div className="space-y-3  mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price ({order.order?.totalItem} item)</span>
                <span><span>₹{order.order?.totalPrice}</span>
 </span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600"> -₹{order.order?.discounte}</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivary Charge</span>
                <span className="text-green-600"> Free </span>
              </div>
              <div className="flex justify-between pt-3 font-bold ">
                <span>Total Amount</span>
                <span className="text-green-600 ">₹{order.order?.totalDiscountedPrice}</span>
              </div>
            </div>
            <Button
              variant="contained"
              type="submit"
              sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
            >
              Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
