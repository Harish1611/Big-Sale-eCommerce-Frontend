import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerRoutes from "./customer/routers/CustomerRoutes";

function App() {
  return (
    <div>
      <Routes >
        <Route path='/*' element={<CustomerRoutes />} ></Route>
      </Routes>
    
    </div>
  );
}

export default App;
