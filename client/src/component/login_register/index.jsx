import React from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";

const index = () => {
  return (
    <div className="login_register_wrapper">
      <Outlet />
    </div>
  );
};

export default index;
