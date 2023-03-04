import { useState } from "react";
//import LoginRegister from "./component/login_register";
import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import api from "./api";
import {UserProvider} from "./Context/UserContext";

function App() {

  return (
    <div className="main_wrapper">
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </div>
  );
}

export default App;
