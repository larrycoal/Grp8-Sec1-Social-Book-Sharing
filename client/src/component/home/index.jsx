import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../layout";
import Nav from "../nav";
import "./index.scss"
const index = () => {
  return (
    <Layout>
      <div className="home_wrapper">
        <div className="nav_container">
          <Nav />
        </div>
        <div className="display_container">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default index;
