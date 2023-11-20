import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/navigation/Navigation";
import Product from "../components/Product/Product";
import Cart from "../components/Cart/Cart";
import HomePage from "../../pages/HomePage";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<Product />}
  ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route> 

        {/* <ProductDetails /> */}

        {/* <Cart /> */}

        {/* <Checkout /> */}

        {/* <Order /> */}

        {/* <OrderDetails /> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
