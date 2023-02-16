import { useState } from "react";
//import LoginRegister from "./component/login_register";
import "./App.scss";
import { RouterProvider } from "react-router-dom";
 import {router} from "./routes"
 import api from "./api"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main_wrapper">
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
