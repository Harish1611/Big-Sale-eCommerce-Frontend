import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../state/Cart/Action";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Height } from "@mui/icons-material";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { cart } = useSelector((store) => store);
  console.log("cart ", cart);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getCart(jwt));
  }, [cart.updateCartItem, cart.deleteCartItem, jwt]);

  const checkoutHandler = () => {
    navigate("/checkout?step=2");
  };
  return (
    <div>
      {cart.cartItems.length > 0 ? (
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className=" col-span-2">
            {cart.cart?.cartItems.map((item) => (
              <CartItem item={item} />
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
                  <span>Price ({cart.cart?.totalItem} item)</span>
                  <span>
                    <span>₹{cart.cart?.totalPrice}</span>
                  </span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Discount</span>
                  <span className="text-green-600">
                    {" "}
                    -₹{cart.cart?.discounte}
                  </span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Delivary Charge</span>
                  <span className="text-green-600"> Free </span>
                </div>
                <div className="flex justify-between pt-3 font-bold ">
                  <span>Total Amount</span>
                  <span className="text-green-600 ">
                    ₹{cart.cart?.totalDiscountedPrice}
                  </span>
                </div>
              </div>

              <button
                onClick={checkoutHandler}
                className="w-full my-4 px-8 py-4 text-white border rounded-md bg-[#02376C] hover:bg-[#0859a9]"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" py-36 text-center">
        <div className="flex justify-center pt-10">
         <ProductionQuantityLimitsIcon sx={{ color: "#0859a9", fontSize:"35px" }} /> <h2 className="text-2xl text-gray-600 font-serif pl-4"> Your cart is empty </h2>
        </div>
        <button onClick={() => navigate("/women/clothing/women_dress")} className=" my-8 px-8 py-3 text-white border rounded-md bg-[#02376C] hover:bg-[#0859a9]">
              Shop Now
            </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
