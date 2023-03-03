import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginRegister from "../component/login_register";
import Register from "../component/login_register/register";
import Home from "../component/home"
import Login from "../component/login_register/login"
import Timeline from "../component/timeline"
import Profile from "../component/profile"
import MyBooks from "../component/mybooks"


const authenticated = true
export const router = createBrowserRouter([
  {
    path: "/",
    element: authenticated ? <Home /> : <Navigate to="/login" />,
    children:[
      {
        path: "/",
        element:<Timeline/>
      },
      {
        path: "/profile",
        element:<Profile />
      },
      {
        path: "/mybooks",
        element:<MyBooks />
      }
    ]
  },
  {
    path: "/",
    element: <LoginRegister />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

]);
