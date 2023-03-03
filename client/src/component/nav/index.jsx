import React from 'react';
import { Link } from "react-router-dom";
import "./nav.scss"
const index = () => {
    return (
        <div className='nav_wrapper p-4 mt-2'>
            <h4>Account Settings</h4>
            <ul class="nav flex-column">
                <li class="nav-item">
                <Link to="/profile" class="nav-link col"><i class="fa-regular fa-gear"></i>Account Details</Link>
                    {/* <a class="nav-link active" href="#">Account Details</a> */}
                </li>
                <li class="nav-item">
                <Link to="/mybooks" class="nav-link col">Books Summary</Link>
                    {/* <a class="nav-link" href="#">Books Summary</a> */}
                </li>
                <li class="nav-item">
                <Link to="/" class="nav-link col">My Requests</Link>
                </li>
            </ul>
        </div>
    );
};

export default index;