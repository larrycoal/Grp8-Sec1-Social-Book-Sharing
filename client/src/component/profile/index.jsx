import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import "./profile.scss";
const index = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="profile_wrapper">
      <div className="profile_top">
        <p>Welcome back!</p>
        <h4>{currentUser?.firstName + " " + currentUser?.lastName}</h4>
      </div>

      <ul className="profile_bottom">
        <li>
          <span>My books:</span>
          <span>{currentUser?.bookCount}</span>
        </li>
        <li>
          <span>Books borrowed:</span>
          <span>{currentUser?.borrowedBooks}</span>
        </li>
        <li>
          <span>Pending request:</span>
          <span>{currentUser?.pendingRequest}</span>
        </li>
        <li>
          <span>Membership:</span>
          <span>{currentUser?.membership}</span>
        </li>
      </ul>
    </div>
  );
};

export default index;
