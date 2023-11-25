import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerRoutes from "./Routers/CustomerRoutes";
import AdminPannel from "./Admin/AdminPannel";

function App() {
  return (
    <div>
      <Routes >
        <Route path='/*' element={<CustomerRoutes />} ></Route>
        <Route path="/admin/*" element={<AdminPannel />} />

      </Routes>
    
    </div>
  );
}

export default App;
