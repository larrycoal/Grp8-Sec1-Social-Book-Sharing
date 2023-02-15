import React from "react";
import { Outlet } from "react-router-dom";
import "./index.scss"
import LoginImage from '../../assets/images/login2.png'
import Logo from '../../assets/images/BookKeepers.png'

const index = () => {
  return (
    <div class="container-fluid">
    <div class="row">
        <div class="col-md-7">
            <img  alt="Image" src={LoginImage} class="img-fluid loginimg"/>
        </div>
        <div class="col-md-5 p-5">
          <Outlet/>
            {/* <div class="row signContainer">
            <img  alt="Image" src={Logo} class="img-fluid logoimg"/>
                <div class="col-md-8 padd">
                <Outlet />
                </div>
            </div> */}
        </div>
    </div>
</div>
  );
};

export default index;
