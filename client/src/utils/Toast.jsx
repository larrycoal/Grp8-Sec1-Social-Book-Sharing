import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastHandler = (message) => toast(message);
const Toast = () => {
  return (
    <div>
      <ToastContainer
      position="bottom-left"
      />
    </div>
  );
};

export { Toast, toastHandler };
