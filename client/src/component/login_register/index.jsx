import React from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";
import LoginImage from "../../assets/images/login2.png";
import Logo from "../../assets/images/BookKeepers.png";

const index = () => {
  return (
    <div className="login_register_wrapper">
      <Outlet />
    </div>
  );
};

export default index;
