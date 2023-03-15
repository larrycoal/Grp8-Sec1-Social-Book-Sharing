import { createBrowserRouter } from "react-router-dom";
import LoginRegister from "../component/login_register";
import Register from "../component/login_register/register";
import Home from "../component/home"
import Login from "../component/login_register/login"
import Timeline from "../component/timeline"
import Settings from "../component/settings"
import Dashboard from "../component/dashboard";
import Mybooks from "../component/dashboard/mybooks"
import Request from "../component/dashboard/request";
import Borrowed from "../component/dashboard/borrowed";
import BookDescription from "../component/timeline/bookDescription/BookDescription";

const ProtectedRoute = ()=>{
  return(
    <></>
  )
}



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Timeline />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/description",
        element: <BookDescription />,

      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/Mybooks",
            element: <Mybooks />,
          },
          {
            path: "/dashboard/request",
            element: <Request />,
          },
          {
            path: "/dashboard/borrowed",
            element: <Borrowed />,
          },
        ],
      },
    ],
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
