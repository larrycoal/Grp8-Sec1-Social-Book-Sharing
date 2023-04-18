import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toastHandler } from "../../utils/Toast";
import "./index.css";
const index = () => {
  const navigate = useNavigate();
  const { accessToken } = useParams();
  const handleVerification = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:3000/verify/${accessToken}`
      );
      if (resp.data === "success") {
        toastHandler("Account Verified Successfully")
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="verify_wrapper">
      <h1>
        Welcome to Bookkeepers. Please click the link below to verify your email
      </h1>
      <button className="btn btn-primary" onClick={handleVerification}>
        Verify Email
      </button>
    </div>
  );
};

export default index;
