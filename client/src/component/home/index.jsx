import React, { useEffect } from "react";
import { useContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import Layout from "../layout";
import Profile from "../profile";
import "./index.scss";

const index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {fetchUser} = useContext(UserContext)
  useEffect(() => {
     fetchUser()
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  
  return (
    <Layout>
      <div className="home_wrapper">
        {!location.pathname.includes("/dashboard") ? (
          <div className="top">
            <Profile />
          </div>
        ) : null}

        <div className="bottom">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default index;
