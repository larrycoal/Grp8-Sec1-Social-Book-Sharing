import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Layout from "../layout";
import Profile from "../profile";
import "./index.scss"


const index = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!token){
      navigate('/login')
    }
  }, []);
  return (
    <Layout>
      <div className="home_wrapper">
        <div className="left">
          <Profile />
        </div>
        <div className="display_container">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default index;
