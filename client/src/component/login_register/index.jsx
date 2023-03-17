import React from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";

const index = () => {
  return (
    <div class="login_register_wrapper">
      <div class="row signon_container">
        <div class="col-md-7 left">
          {/* <h2>Join Our Community</h2>
          <p>
            A community of book lovers dedicated in making it accessible for
            book lovers all around the globe
          </p> */}
        </div>
        <div class="col-md-5 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default index;
