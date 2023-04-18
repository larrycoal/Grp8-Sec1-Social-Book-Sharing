import { useState } from "react";
//import LoginRegister from "./component/login_register";
import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import api from "./api";
import {UserProvider} from "./Context/UserContext";
import { BookProvider } from "./Context/BookContext";
import { Toast } from "./utils/Toast";

function App() {

  return (
    <div className="main_wrapper">
      <UserProvider>
        <BookProvider>
        <RouterProvider router={router} />
        </BookProvider>
      </UserProvider>
      <Toast/>
    </div>
  );
}

export default App;
