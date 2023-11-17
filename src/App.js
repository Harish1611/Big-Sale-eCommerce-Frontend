import "./App.css";
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

      <ProductDetails />
    </div>
  );
}

export default App;
