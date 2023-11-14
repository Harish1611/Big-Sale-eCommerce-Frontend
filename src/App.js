import "./App.css";
import Product from "./customer/components/Product/Product";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div>
      <Navigation />
      {/* <HomePage /> */}
      <Product />
    </div>
  );
}

export default App;
