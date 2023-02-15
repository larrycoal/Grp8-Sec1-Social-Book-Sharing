import React from 'react';
import "./nav.scss"
const index = () => {
    return (
        <div className='nav_wrapper p-4 mt-2'>
            <h4>Account Settings</h4>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Account Details</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Books Summary</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">My Requests</a>
                </li>
            </ul>
        </div>
    );
};

export default index;