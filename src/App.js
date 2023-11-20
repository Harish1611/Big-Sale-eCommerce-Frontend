import "./App.css";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div>
      <Navigation />
      {/* <HomePage /> */}
      {/* <Product /> */}

      {/* <ProductDetails /> */}

      {/* <Cart /> */}

      {/* <Checkout /> */}

      {/* <Order /> */}

      <OrderDetails />
    </div>
  );
}

export default App;
