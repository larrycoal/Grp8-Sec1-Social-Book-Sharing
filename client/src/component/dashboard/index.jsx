import React from "react";
import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./dashboard.scss";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate()
//   useEffect(()=>{
//     navigate("/dashboard/Mybooks")
//   })
  return (
    <div className="dashboard_wrapper">
      <div className="introduction">
        <h4>Welcome to your dashboard</h4>
        <div className="subtitle">
          You can search for books and add them to your profile from your
          dashboard, also view all your books and requested books
        </div>
      </div>
      <div className="add_books">
        <div className="searchbooks">
          <input type="text" name="title" placeholder="Enter book name" />
        </div>
        <div className="search_result">
          Enter book title to add them to your profile
        </div>
      </div>
      <div className="books_activities">
        <div className="tabs">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <Link
                className={
                  location.pathname === "/dashboard/Mybooks"
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                to="./Mybooks"
              >
                My books
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className={
                  location.pathname === "/dashboard/request"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="./request"
              >
                Request
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className={
                  location.pathname === "/dashboard/borrowed"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="./borrowed"
              >
                Borrowed
              </Link>
            </li>
          </ul>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
