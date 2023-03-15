import React, { useEffect, useState } from "react";
import "./profile.scss";
const index = () => {
  const currentuser = localStorage.getItem("user");
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(JSON.parse(currentuser));
  }, [currentuser]);

  return (
    <div className="profile_wrapper">
      <div className="profile_top">
        <p>Welcome back!</p>
        <h4>{user?.firstName + " " + user?.lastName}</h4>
      </div>

      <ul className="profile_bottom">
        <li>
          <span>My books:</span>
          <span>40</span>
        </li>
        <li>
          <span>Books borrowed:</span>
          <span>10</span>
        </li>
        <li>
          <span>Pending request:</span>
          <span>20</span>
        </li>
        <li>
          <span>Status:</span>
          <span>Gold</span>
        </li>
      </ul>
    </div>
  );
};

export default index;
