import React from "react";
import { Outlet, RouterProvider } from "react-router-dom";
import { router } from "../../routes";
import Login from "./login";

const index = () => {
  return (
    <div className="login_register_wrapper">
      <div className="left">logo</div>
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
};

export default index;
