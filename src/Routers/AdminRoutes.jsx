import React from "react";
import { Route, Routes } from "react-router-dom";

import AdminPannel from "../Admin/AdminPannel";

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminPannel />}></Route>
      </Routes>
    </div>
  );
};

export default AdminRoutes;
