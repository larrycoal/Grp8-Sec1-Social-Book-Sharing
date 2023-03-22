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
         &nbsp;
        </div>
        <div className="right outlet_wrapper">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default index;
