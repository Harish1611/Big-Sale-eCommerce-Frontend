import "./App.css";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div>
      <Navigation />
      <HomePage />
      {/* <Product /> */}

      {/* <ProductDetails /> */}

      {/* <Cart /> */}

      {/* <Checkout /> */}
    </div>
  );
}

export default App;
